import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import { Resend } from "resend";
import { ENV } from "./env";

const ALLOWED_MIMES = [
  "application/pdf",
  "application/zip",
  "application/x-zip-compressed",
  "image/jpeg",
  "image/png",
  "video/mp4",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter: (_req: Express["request"], file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const allowedExtensions = [".pdf", ".zip", ".jpg", ".jpeg", ".png", ".mp4"];
    const ext = path.extname(file.originalname).toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      return cb(new Error("File extension not allowed. Allowed: PDF, ZIP, JPG, PNG, MP4"));
    }

    if (!ALLOWED_MIMES.includes(file.mimetype)) {
      return cb(new Error("Invalid file MIME type"));
    }

    cb(null, true);
  },
});

// Resend init
const resend = ENV.RESEND_API_KEY ? new Resend(ENV.RESEND_API_KEY) : null;
if (!resend) {
  console.warn("RESEND_API_KEY not set. Emails will not be sent.");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", upload.single("file"), async (req, res) => {
    try {
      const { name, email, company, projectType, budget, message } = req.body as Record<string, unknown>;

      const safeName = typeof name === "string" ? name.trim() : "";
      const safeEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
      const safeCompany = typeof company === "string" ? company.trim() : "";
      const safeProjectType = typeof projectType === "string" ? projectType.trim() : "";
      const safeBudget = typeof budget === "string" ? budget.trim() : "";
      const safeMessage = typeof message === "string" ? message.trim() : "";

      // Validation
      if (safeName.length < 2) {
        return res.status(400).json({ success: false, error: "Name must be at least 2 characters" });
      }
      if (!isValidEmail(safeEmail)) {
        return res.status(400).json({ success: false, error: "Please provide a valid email address" });
      }
      if (!safeMessage) {
        return res.status(400).json({ success: false, error: "Message is required" });
      }

      // Save submission (always)
      const submission = await storage.saveContactSubmission({
        name: safeName,
        email: safeEmail,
        company: safeCompany,
        projectType: safeProjectType,
        budget: safeBudget,
        message: safeMessage,
        fileName: req.file?.originalname?.substring(0, 255),
      });

      // If email sending is not configured, still return OK (form saved)
      const fromAddress = ENV.CONTACT_FROM_EMAIL?.trim();
      const toAdmin = ENV.CONTACT_TO_EMAIL?.trim();

      if (!resend || !ENV.RESEND_API_KEY || !fromAddress || !toAdmin) {
        console.warn("Email not configured. Missing RESEND_API_KEY/CONTACT_FROM_EMAIL/CONTACT_TO_EMAIL");
        return res.json({
          success: true,
          submissionId: submission.id,
          message: "Form received. Email sending is not configured.",
        });
      }

      // Prepare attachment (base64 is safest)
      const attachments =
        req.file
          ? [
              {
                filename: req.file.originalname,
                content: req.file.buffer.toString("base64"),
                contentType: req.file.mimetype,
              },
            ]
          : [];

      // 1) Send to admin (critical)
      const adminResult = await resend.emails.send({
        from: `SensePowerDigital <${fromAddress}>`,
        to: toAdmin,
        replyTo: safeEmail, // so you can reply directly to the client
        subject: `New Project Inquiry from ${safeName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company:</strong> ${safeCompany || "Not specified"}</p>
          <p><strong>Project Type:</strong> ${safeProjectType || "Not specified"}</p>
          <p><strong>Budget:</strong> ${safeBudget || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage.replace(/\n/g, "<br>")}</p>
          ${req.file ? `<p><strong>File Attached:</strong> ${req.file.originalname}</p>` : ""}
        `,
        attachments,
      });

      if (adminResult.error) {
        console.error("Resend admin email failed:", adminResult.error);
        // Important: return failure so frontend doesn't show fake success
        return res.status(502).json({
          success: false,
          submissionId: submission.id,
          error: "Email provider error (admin email failed)",
        });
      }

      // 2) Send confirmation to user (best effort)
      try {
        const userResult = await resend.emails.send({
          from: `SensePowerDigital <${fromAddress}>`,
          to: safeEmail,
          subject: "We received your message - SensePowerDigital",
          html: `
            <p>Hi ${safeName},</p>
            <p>Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.</p>
            <p>Best regards,<br/>SensePowerDigital Team</p>
          `,
        });

        if (userResult.error) {
          console.error("Resend user confirmation failed:", userResult.error);
          // don't fail the whole request—admin already received it
        }
      } catch (e) {
        console.error("Resend user confirmation exception:", e);
      }

      return res.json({
        success: true,
        submissionId: submission.id,
        message: "Email sent successfully",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ success: false, error: "Failed to process contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

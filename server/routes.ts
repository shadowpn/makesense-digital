import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import nodemailer from "nodemailer";
import path from "path";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ['.pdf', '.zip', '.jpg', '.jpeg', '.png', '.mp4', '.figma', '.xd', '.sketch'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('File type not allowed'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure nodemailer - will use environment variable for email config
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_EMAIL_USER,
      pass: process.env.CONTACT_EMAIL_PASSWORD
    }
  });

  app.post("/api/contact", upload.single("file"), async (req, res) => {
    try {
      const { name, email, company, projectType, budget, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Save to storage
      const submission = await storage.saveContactSubmission({
        name,
        email,
        company: company || '',
        projectType: projectType || '',
        budget: budget || '',
        message,
        fileName: req.file?.originalname
      });

      // Prepare email content
      const emailContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not specified'}</p>
        <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        ${req.file ? `<p><strong>File Attached:</strong> ${req.file.originalname}</p>` : ''}
      `;

      // Send email
      if (process.env.CONTACT_EMAIL_USER && process.env.CONTACT_EMAIL_PASSWORD) {
        try {
          await transporter.sendMail({
            from: process.env.CONTACT_EMAIL_USER,
            to: process.env.CONTACT_EMAIL_RECIPIENT || process.env.CONTACT_EMAIL_USER,
            subject: `New Project Inquiry from ${name}`,
            html: emailContent,
            replyTo: email,
            attachments: req.file ? [{
              filename: req.file.originalname,
              content: req.file.buffer
            }] : []
          });
        } catch (emailError) {
          console.error('Email sending failed:', emailError);
          // Still return success since form was saved
        }
      }

      // Send reply to user
      try {
        await transporter.sendMail({
          from: process.env.CONTACT_EMAIL_USER,
          to: email,
          subject: 'We received your message - SensePowerDigital',
          html: `<p>Hi ${name},</p><p>Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.</p><p>Best regards,<br>SensePowerDigital Team</p>`
        });
      } catch (replyError) {
        console.error('Reply email failed:', replyError);
      }

      res.json({ success: true, submissionId: submission.id });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ error: "Failed to process contact form" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

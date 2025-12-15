import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import sgMail from "@sendgrid/mail";
import { ENV } from "./env";

const ALLOWED_MIMES = ['application/pdf', 'application/zip', 'application/x-zip-compressed', 'image/jpeg', 'image/png', 'video/mp4'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// Настройка multer
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter: (_req: Express['request'], file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const allowedExtensions = ['.pdf', '.zip', '.jpg', '.jpeg', '.png', '.mp4'];
    const ext = path.extname(file.originalname).toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      return cb(new Error('File extension not allowed. Allowed: PDF, ZIP, JPG, PNG, MP4'));
    }

    if (!ALLOWED_MIMES.includes(file.mimetype)) {
      return cb(new Error('Invalid file MIME type'));
    }

    cb(null, true);
  }
});

// Настройка SendGrid
if (!ENV.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY not set. Emails will not be sent.");
} else {
  sgMail.setApiKey(ENV.SENDGRID_API_KEY);
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", upload.single("file"), async (req, res) => {
    try {
      const { name, email, company, projectType, budget, message } = req.body;

      // Валидация
      if (!name || typeof name !== 'string' || name.trim().length < 2) {
        return res.status(400).json({ error: "Name must be at least 2 characters" });
      }
      if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "Please provide a valid email address" });
      }
      if (!message || typeof message !== 'string' || message.trim().length === 0) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Сохраняем submission
      const submission = await storage.saveContactSubmission({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: (company || '').trim(),
        projectType: (projectType || '').trim(),
        budget: (budget || '').trim(),
        message: message.trim(),
        fileName: req.file?.originalname?.substring(0, 255)
      });

      // Если SendGrid API не настроен, просто сохраняем
      if (!ENV.SENDGRID_API_KEY) {
        return res.json({
          success: true,
          submissionId: submission.id,
          message: 'Form received but email sending is not configured'
        });
      }

      // Подготовка письма администратору
      const adminMsg: sgMail.MailDataRequired = {
        from: {
          email: ENV.CONTACT_EMAIL_USER as string,
          name: "SensePowerDigital"
        },
        to: ENV.CONTACT_EMAIL_RECIPIENT || ENV.CONTACT_EMAIL_USER,
        subject: `New Project Inquiry from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not specified'}</p>
          <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          ${req.file ? `<p><strong>File Attached:</strong> ${req.file.originalname}</p>` : ''}
        `,
        attachments: req.file ? [{
          content: req.file.buffer.toString('base64'),
          filename: req.file.originalname,
          type: req.file.mimetype,
          disposition: 'attachment'
        }] : []
      };

      // Отправка письма администратору
      try {
        await sgMail.send(adminMsg);
        console.log('Email sent successfully to admin');
      } catch (adminError) {
        console.error('Email sending to admin failed:', adminError);
      }

      // Подготовка письма пользователю
      const userMsg: sgMail.MailDataRequired = {
        from: {
          email: ENV.CONTACT_EMAIL_USER as string,
          name: "SensePowerDigital"
        },
        to: email,
        subject: 'We received your message - SensePowerDigital',
        html: `<p>Hi ${name},</p>
               <p>Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.</p>
               <p>Best regards,<br>SensePowerDigital Team</p>`
      };

      // Отправка письма пользователю
      try {
        await sgMail.send(userMsg);
        console.log('Reply email sent successfully to:', email);
      } catch (userError) {
        console.error('Reply email failed:', userError);
      }

      res.json({ success: true, submissionId: submission.id, message: 'Email sent successfully' });

    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ error: "Failed to process contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

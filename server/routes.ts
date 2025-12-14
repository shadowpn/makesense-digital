import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import nodemailer from "nodemailer";
import path from "path";

import { ENV } from "./env";

const ALLOWED_MIMES = ['application/pdf', 'application/zip', 'application/x-zip-compressed', 'image/jpeg', 'image/png', 'video/mp4'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

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

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", upload.single("file"), async (req, res) => {
    try {
      const { name, email, company, projectType, budget, message } = req.body;

      // Validate required fields
      if (!name || typeof name !== 'string' || name.trim().length < 2) {
        return res.status(400).json({ error: "Name must be at least 2 characters" });
      }
      if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "Please provide a valid email address" });
      }
      if (!message || typeof message !== 'string' || message.trim().length === 0) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Save submission
      const submission = await storage.saveContactSubmission({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: (company || '').trim(),
        projectType: (projectType || '').trim(),
        budget: (budget || '').trim(),
        message: message.trim(),
        fileName: req.file?.originalname?.substring(0, 255)
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

      // Check if email credentials are set
      if (!ENV.CONTACT_EMAIL_USER || !ENV.CONTACT_EMAIL_PASSWORD) {
        console.warn('Email credentials not configured - form saved but email not sent');
        return res.json({
          success: true,
          submissionId: submission.id,
          message: 'Form received but email sending is not configured'
        });
      }

      // Send email to admin
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: ENV.CONTACT_EMAIL_USER,
          pass: ENV.CONTACT_EMAIL_PASSWORD
        }
      });

      try {
        await transporter.sendMail({
          from: ENV.CONTACT_EMAIL_USER,
          to: ENV.CONTACT_EMAIL_RECIPIENT || ENV.CONTACT_EMAIL_USER,
          subject: `New Project Inquiry from ${name}`,
          html: emailContent,
          replyTo: email,
          attachments: req.file ? [{
            filename: req.file.originalname,
            content: req.file.buffer
          }] : []
        });
        console.log('Email sent successfully to admin');
      } catch (emailError) {
        console.error('Email sending to admin failed:', emailError);
      }

      // Send reply to user
      try {
        await transporter.sendMail({
          from: ENV.CONTACT_EMAIL_USER,
          to: email,
          subject: 'We received your message - SensePowerDigital',
          html: `<p>Hi ${name},</p><p>Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.</p><p>Best regards,<br>SensePowerDigital Team</p>`
        });
        console.log('Reply email sent successfully to:', email);
      } catch (replyError) {
        console.error('Reply email failed:', replyError);
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

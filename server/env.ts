// server/env.ts
import dotenv from "dotenv";

// Загружаем переменные окружения при импорте
dotenv.config();

export const ENV = {
  CONTACT_EMAIL_USER: process.env.CONTACT_EMAIL_USER,        // Email отправителя
  CONTACT_EMAIL_RECIPIENT: process.env.CONTACT_EMAIL_RECIPIENT, // Email получателя (админ)
  CONTACT_EMAIL_PASSWORD: process.env.CONTACT_EMAIL_PASSWORD, // (можно удалить, если больше не используем SMTP)
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,            // API ключ SendGrid
  PORT: process.env.PORT || '5000'
};


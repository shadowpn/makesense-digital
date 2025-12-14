// server/env.ts
import dotenv from "dotenv";

// Загружаем переменные окружения при импорте
dotenv.config();

export const ENV = {
  CONTACT_EMAIL_USER: process.env.CONTACT_EMAIL_USER,
  CONTACT_EMAIL_PASSWORD: process.env.CONTACT_EMAIL_PASSWORD,
  CONTACT_EMAIL_RECIPIENT: process.env.CONTACT_EMAIL_RECIPIENT,
  PORT: process.env.PORT || '5000',
};

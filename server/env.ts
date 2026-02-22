import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, "..", ".env");

const result = dotenv.config({
  path: envPath,
  override: true,
});

if (result.error) {
  console.error("Failed to load .env:", result.error);
} else {
  console.log("Loaded env from:", envPath);
}

export const ENV = {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
  PORT: process.env.PORT || "5000",
};


import nodemailer from "nodemailer";

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.APP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default transporter;

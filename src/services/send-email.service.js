import transporter from "../configs/mail.js";

export const sendEmailLogin = async (email) => {
  const info = await transporter.sendMail({
    from: process.env.EMAIL_SENDER,
    to: email,
    subject: "Hello ✔ codecamp20",
    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b> <p>backend</p>", // HTML body
  });

  console.log("Message sent:", info.messageId);
};

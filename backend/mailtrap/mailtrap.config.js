//     host: "live.smtp.mailtrap.io",
//     pass: "2854e2b7e7aed81c4f982bad993107ee"

import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
dotenv.config();
const TOKEN = process.env.MAILTRAP_TOKEN;
const END_POINT = process.env.MAILTRAP_ENDPOINT;
// const SENDER_EMAIL = "<SENDER@YOURDOMAIN.COM>";
// const RECIPIENT_EMAIL = "<RECIPIENT@EMAIL.COM>";

console.log(`HERE IS TOKEN ${TOKEN} and ENDPOINT ${END_POINT}`);

export const mailtrapClient = new MailtrapClient({
  endpoint: process.env.MAILTRAP_ENDPOINT,
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = { email: "mailtrap@demomailtrap.com", name: "Omprasad" };

// const recipients = [{ email: "omprasadbl@gmail.com" }];

// mailtrapClient.send({
//     from: sender,
//     to: recipients,
//     subject: "Hello from Mailtrap!",
//     html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", '994520')
//   })
//   .then(console.log)
//   .catch(console.error);

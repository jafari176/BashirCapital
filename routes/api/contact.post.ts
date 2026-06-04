import { Resend } from "resend";
import { defineEventHandler, readBody, createError } from "nitro/h3";

export default defineEventHandler(async (event) => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw createError({ statusCode: 500, message: "Email service not configured" });
  }

  const body = await readBody<{
    firstName?: string;
    lastName?: string;
    email?: string;
    language?: string;
    message?: string;
  }>(event);

  const { firstName, lastName, email, language, message } = body ?? {};

  if (!firstName || !lastName || !email) {
    throw createError({ statusCode: 400, message: "Missing required fields" });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Bashir Capital <contact@bashircapital.com>",
    to: ["contact@bashircapital.com"],
    replyTo: email,
    subject: `New Inquiry from ${firstName} ${lastName}`,
    html: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${language ? `<p><strong>Preferred Language:</strong> ${language}</p>` : ""}
      ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>` : ""}
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    throw createError({ statusCode: 500, message: "Failed to send email" });
  }

  return { ok: true };
});

import { createAPIFileRoute } from "@tanstack/react-start/api";
import { Resend } from "resend";

export const APIRoute = createAPIFileRoute("/api/contact")({
  POST: async ({ request }) => {
    const env = (globalThis as unknown as { env?: Record<string, string> }).env ?? {};
    const apiKey = env["RESEND_API_KEY"] ?? (process.env.RESEND_API_KEY as string | undefined);

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { "content-type": "application/json" },
      });
    }

    let body: Record<string, string>;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid request" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const { firstName, lastName, email, language, message } = body;

    if (!firstName || !lastName || !email) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Bashir Capital <onboarding@resend.dev>",
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
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
        headers: { "content-type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  },
});

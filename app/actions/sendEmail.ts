"use server";

import { Resend } from "resend";
import { GlobalConfig } from "../site-config";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("senderName") as string;
  const email = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  try {
    const data = await resend.emails.send({
      from: "Leads <onboarding@resend.dev>", // Once you verify a domain, use info@yourdomain.com
    //   to: [GlobalConfig.brand.email],
      to: ["kamilsuhak@gmail.com"],
      subject: `New Lead from ${name}`,
      replyTo: email,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to send email." };
  }
}
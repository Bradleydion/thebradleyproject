// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "thebradleyprojectllc@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, reason, message, social } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ ok: true }); // silently discard bots
    }

    const { error } = await resend.emails.send({
      from: "The Bradley Project <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `[TBP Contact] ${reason || "New Inquiry"} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1a1a2e;">
          <h2 style="color: #00C4B4; margin-bottom: 4px;">New message from The Bradley Project site</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Reason:</strong> ${reason || "General inquiry"}</p>
          ${social ? `<p><strong>Social:</strong> ${social}</p>` : ""}
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

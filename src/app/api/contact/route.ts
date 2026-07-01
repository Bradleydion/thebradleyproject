// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "bradleydion@thebradleyproject.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, reason, message, social } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    if (!user || !pass) {
      console.error("Gmail credentials not set");
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"The Bradley Project" <${user}>`,
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

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "bradleydion@thebradleyproject.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, location, device } = body;

    if (!name || !email || !location || !device) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
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
      from: `"Sequins Beta" <${user}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Sequins Beta] New signup — ${name} (${device})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1a1a2e;">
          <h2 style="color: #00B3A4; margin-bottom: 4px;">New Sequins Beta Signup ✦</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Device:</strong> ${device}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p style="color: #888; font-size: 13px;">Send them the beta link when you're ready to go live.</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Beta signup route error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

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

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Sequins Beta <onboarding@resend.dev>",
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

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send notification." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Beta signup route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

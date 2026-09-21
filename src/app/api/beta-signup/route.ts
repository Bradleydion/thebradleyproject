import { NextRequest, NextResponse } from "next/server";
import { betaWelcomeEmail, escapeHtml } from "@/emails/betaWelcome";

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

    const n = escapeHtml(String(name));
    const e = escapeHtml(String(email));
    const l = escapeHtml(String(location));
    const d = escapeHtml(String(device));

    // 1) Notify Bradley. If this fails, the signup is lost — so it fails the request.
    await transporter.sendMail({
      from: `"Sequins Beta" <${user}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Sequins Beta] New signup — ${String(name).slice(0, 80)} (${String(device).slice(0, 20)})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1a1a2e;">
          <h2 style="color: #00B3A4; margin-bottom: 4px;">New Sequins Beta Signup ✦</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p><strong>Name:</strong> ${n}</p>
          <p><strong>Email:</strong> <a href="mailto:${e}">${e}</a></p>
          <p><strong>Location:</strong> ${l}</p>
          <p><strong>Device:</strong> ${d}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p style="color: #888; font-size: 13px;">They've been sent the welcome email. Send them the beta link when you're ready to go live.</p>
        </div>
      `,
    });

    // 2) Welcome the tester. Replies (the "how'd you hear about us" answers) come to Bradley.
    //    A failure here is logged but doesn't fail the signup — Bradley already has their info.
    try {
      const welcome = betaWelcomeEmail(String(name));
      await transporter.sendMail({
        from: `"Sequins" <${user}>`,
        to: email,
        replyTo: TO_EMAIL,
        subject: welcome.subject,
        html: welcome.html,
        text: welcome.text,
      });
    } catch (welcomeErr) {
      console.error("Beta welcome email failed:", welcomeErr instanceof Error ? welcomeErr.message : welcomeErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Beta signup route error:", msg);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { betaWelcomeEmail, escapeHtml } from "@/emails/betaWelcome";
import { BETA_ROLES, SEQUINS_BETA } from "@/data/sequinsBeta";

const TO_EMAIL = SEQUINS_BETA.contactEmail;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const location = String(body.location ?? "").trim();
    const device = String(body.device ?? "").trim();
    const role = String(body.role ?? "").trim();
    const googleEmail = String(body.googleEmail ?? "").trim();
    const agreedToTerms = body.agreedToTerms === true;

    if (!name || !email || !location || !device) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    if (device !== "iOS" && device !== "Android") {
      return NextResponse.json({ error: "Invalid device." }, { status: 400 });
    }
    if (!agreedToTerms) {
      return NextResponse.json({ error: "Please agree to the Beta Tester Terms." }, { status: 400 });
    }
    const safeRole = (BETA_ROLES as readonly string[]).includes(role) ? role : "Not given";
    const playEmail = device === "Android" ? (EMAIL_RE.test(googleEmail) ? googleEmail : email) : "";

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

    const n = escapeHtml(name);
    const e = escapeHtml(email);
    const l = escapeHtml(location);
    const d = escapeHtml(device);
    const r = escapeHtml(safeRole);
    const g = escapeHtml(playEmail);

    const action =
      device === "Android"
        ? `<p style="background:#FFF4E5;border:1px solid #F5C27A;border-radius:8px;padding:12px;"><strong>Action needed:</strong> add <strong>${g}</strong> to Play Console &rarr; Internal testing &rarr; Testers (&ldquo;Sequins internal team&rdquo;), then email them the opt-in link: ${SEQUINS_BETA.playOptInUrl}</p>`
        : `<p style="color:#888;font-size:13px;">iPhone: they got the TestFlight link on screen and in their welcome email. Nothing to do.</p>`;

    // 1) Notify Bradley. If this fails, the signup is lost — so it fails the request.
    await transporter.sendMail({
      from: `"Sequins Beta" <${user}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Sequins Beta] ${device === "Android" ? "ADD TO PLAY: " : ""}${name.slice(0, 80)} (${device}, ${safeRole})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1a1a2e;">
          <h2 style="color: #00B3A4; margin-bottom: 4px;">New Sequins Beta Signup ✦</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p><strong>Name:</strong> ${n}</p>
          <p><strong>Email:</strong> <a href="mailto:${e}">${e}</a></p>
          <p><strong>City:</strong> ${l}</p>
          <p><strong>Role:</strong> ${r}</p>
          <p><strong>Phone:</strong> ${d}</p>
          ${device === "Android" ? `<p><strong>Google account for Play:</strong> ${g}</p>` : ""}
          <p><strong>Agreed to Beta Tester Terms:</strong> Yes</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          ${action}
        </div>
      `,
    });

    // 2) Welcome the tester (with the TestFlight link for iPhone).
    //    A failure here is logged but doesn't fail the signup — Bradley already has their info.
    let introSent = false;
    try {
      const welcome = betaWelcomeEmail(name, device);
      await transporter.sendMail({
        from: `"Sequins" <${user}>`,
        to: email,
        replyTo: TO_EMAIL,
        subject: welcome.subject,
        html: welcome.html,
        text: welcome.text,
      });
      introSent = true;
    } catch (welcomeErr) {
      console.error("Beta welcome email failed:", welcomeErr instanceof Error ? welcomeErr.message : welcomeErr);
    }

    // 3) Log the signup to the beta Google Sheet (Apps Script web app).
    //    Optional — skipped if the env vars aren't set; never fails the signup.
    await logToSheet({
      name,
      email,
      // Existing column: phone plus role, so the role shows even before the script is updated.
      device: `${device} · ${safeRole}`,
      location,
      introSent,
      // New fields (need the Apps Script updated to write them to their own columns).
      deviceType: device,
      role: safeRole,
      googleEmail: playEmail,
      betaLinkSent: device === "iOS" && introSent,
      agreedToTerms,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Beta signup route error:", msg);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

async function logToSheet(row: {
  name: string;
  email: string;
  device: string;
  location: string;
  introSent: boolean;
  deviceType: string;
  role: string;
  googleEmail: string;
  betaLinkSent: boolean;
  agreedToTerms: boolean;
}) {
  const url = process.env.SHEETS_WEBHOOK_URL;
  const secret = process.env.SHEETS_WEBHOOK_SECRET;
  if (!url || !secret) return;
  try {
    // Apps Script answers POSTs with a 302; the row is written before the
    // redirect, so we don't need to follow it.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, ...row }),
      redirect: "manual",
      signal: AbortSignal.timeout(8000),
    });
    if (res.status >= 400) console.error("Sheet log failed:", res.status);
  } catch (err) {
    console.error("Sheet log error:", err instanceof Error ? err.message : err);
  }
}

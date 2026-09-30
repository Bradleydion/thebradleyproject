// src/emails/betaWelcome.ts
// Welcome email sent right after someone joins the Sequins beta.
// iPhone testers get the TestFlight link straight away; Android testers are
// told we're adding their Google account (Play Internal testing is invite-only).
// Styled to match /sequins: near-black base, teal accent, Inter, ✦ motif.
// Email clients ignore most CSS, so everything is inline + table-based.
// Images must be absolute https URLs (Gmail strips base64) and use www —
// the bare apex domain's cert is not valid.

import { SEQUINS_BETA, SITE } from "@/data/sequinsBeta";

const PAGE = `${SITE}/sequins`;
const GUIDE = `${SITE}${SEQUINS_BETA.guidePath}`;
const TERMS = `${SITE}${SEQUINS_BETA.termsPath}`;

const C = {
  bg: "#0A0B0E",
  surface: "#16171A", // ≈ white/5 over bg
  border: "#26272A", // ≈ white/10 over bg
  ink: "#FFFFFF",
  body: "#A0A1A3", // ≈ white/60
  muted: "#7E7F82", // ≈ white/45
  teal: "#00B3A4",
  fan: "#00B3A4",
  talent: "#FB923C",
  host: "#A78BFA",
};

const FONT = "Inter, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif";

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function firstName(name: string): string {
  return name.trim().split(/\s+/)[0] ?? "";
}

function eyebrow(text: string, color = C.teal) {
  return `<div style="font-family:${FONT};font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${color};padding-bottom:10px;">${text}</div>`;
}

function card(inner: string) {
  return `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${C.surface};border:1px solid ${C.border};border-radius:16px;">
    <tr><td style="padding:26px 26px;">${inner}</td></tr>
  </table>`;
}

function role(label: string, color: string, tagline: string, text: string) {
  return `
  <tr><td style="padding:0 0 14px 0;">
    ${card(`
      ${eyebrow(label, color)}
      <div style="font-family:${FONT};font-size:17px;line-height:24px;font-weight:600;color:${C.ink};padding-bottom:8px;">${tagline}</div>
      <p style="margin:0;font-family:${FONT};font-size:14px;line-height:22px;color:${C.body};">${text}</p>
    `)}
  </td></tr>`;
}

function button(href: string, label: string) {
  return `
      <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0">
        <tr><td align="center" style="background-color:${C.teal};border-radius:999px;">
          <a href="${href}" style="display:inline-block;padding:14px 28px;font-family:${FONT};font-size:15px;font-weight:700;color:#000000;text-decoration:none;">${label}</a>
        </td></tr>
      </table>`;
}

function stepRow(n: number, html: string) {
  return `
      <tr>
        <td valign="top" style="padding:0 12px 12px 0;width:26px;">
          <div style="width:24px;height:24px;line-height:24px;border-radius:12px;background-color:#0B2422;color:${C.teal};font-family:${FONT};font-size:12px;font-weight:700;text-align:center;">${n}</div>
        </td>
        <td valign="top" style="padding:2px 0 12px 0;font-family:${FONT};font-size:15px;line-height:22px;color:${C.body};">${html}</td>
      </tr>`;
}

function bullet(html: string) {
  return `<tr><td valign="top" style="padding:0 10px 10px 0;color:${C.teal};font-family:${FONT};font-size:12px;">✦</td><td style="padding:0 0 10px 0;font-family:${FONT};font-size:14px;line-height:22px;color:${C.body};">${html}</td></tr>`;
}

const link = (href: string, text: string) =>
  `<a href="${href}" style="color:${C.teal};text-decoration:underline;">${text}</a>`;

export type BetaDevice = "iOS" | "Android";

export function betaWelcomeEmail(name: string, device: BetaDevice | string = "iOS") {
  const isAndroid = device === "Android";
  const first = escapeHtml(firstName(name));
  const greeting = first ? `You&rsquo;re in, ${first}.` : "You&rsquo;re in.";

  const subject = isAndroid
    ? "You're in ✦ We're adding you to the Sequins Android beta"
    : "You're in ✦ Your Sequins beta invite";

  const preheader = isAndroid
    ? "We&rsquo;re adding your Google account now. Here&rsquo;s what to try once you&rsquo;re in."
    : "Tap to install Sequins through TestFlight. Here&rsquo;s everything you need to start testing.";

  const intro = isAndroid
    ? "Thanks for joining the Sequins beta. Google only lets in testers we add by hand, so we&rsquo;re adding your Google account now. Within a day you&rsquo;ll get a second email with the install link."
    : "Thanks for joining the Sequins beta. The app is ready for you right now. It takes about a minute to install.";

  const getTheApp = isAndroid
    ? card(`
      ${eyebrow("Getting the app on Android")}
      <div style="font-family:${FONT};font-size:20px;line-height:27px;font-weight:700;color:${C.ink};padding-bottom:10px;">Your invite is on its way</div>
      <p style="margin:0;font-family:${FONT};font-size:15px;line-height:24px;color:${C.body};">
        Once we&rsquo;ve added you, open the link we send on your phone while signed in to the same Google account, tap &ldquo;Accept invite,&rdquo; then install from the Play Store. It may show up as &ldquo;com.thebradleyproject.sequins (unreviewed)&rdquo; for now. That&rsquo;s normal.
      </p>`)
    : card(`
      ${eyebrow("Get the app")}
      <div style="font-family:${FONT};font-size:20px;line-height:27px;font-weight:700;color:${C.ink};padding-bottom:16px;">Install Sequins on your iPhone</div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        ${stepRow(1, `Get Apple&rsquo;s free ${link(SEQUINS_BETA.testflightAppUrl, "TestFlight app")} if you don&rsquo;t have it.`)}
        ${stepRow(2, "Open this email on your iPhone and tap the button below, then Accept and Install.")}
        ${stepRow(3, "Open Sequins, sign up, and pick your role: Fan, Talent or Host.")}
      </table>
      <div style="padding-top:8px;">${button(SEQUINS_BETA.testflightUrl, "Get the Sequins beta")}</div>
      <p style="margin:12px 0 0 0;text-align:center;font-family:${FONT};font-size:12px;color:${C.muted};">${SEQUINS_BETA.testflightUrl}</p>`);

  const beforeYouStart = card(`
      ${eyebrow("Before you start")}
      <div style="font-family:${FONT};font-size:20px;line-height:27px;font-weight:700;color:${C.ink};padding-bottom:14px;">Everything is in test mode</div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        ${bullet("<strong style=\"color:#fff;\">No real money moves.</strong> Tickets, tips and payouts all run in Stripe&rsquo;s test mode. Never enter a real card, bank account or ID number.")}
        ${bullet("To buy a test ticket, use card <strong style=\"color:#fff;\">4242 4242 4242 4242</strong>, any future date, any 3-digit CVC and any ZIP.")}
        ${bullet("Most events are <strong style=\"color:#fff;\">demo listings</strong> based on real shows. Tickets you buy in the beta won&rsquo;t get you in the door.")}
        ${bullet("Found something broken? Tell us through the " + link(SEQUINS_BETA.feedbackFormUrl, "feedback form") + ". It takes about 2 minutes.")}
      </table>
      <div style="padding-top:10px;">${button(GUIDE, "Open the tester guide")}</div>
      <p style="margin:12px 0 0 0;text-align:center;font-family:${FONT};font-size:13px;color:${C.muted};">What to try as a Fan, Talent or Host, plus test info for payouts.</p>`);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>You're in the Sequins beta</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  body{margin:0;padding:0;width:100%!important;background-color:${C.bg};}
  img{border:0;outline:none;text-decoration:none;}
  @media only screen and (max-width:620px){
    .wrap{width:100%!important;}
    .pad{padding-left:22px!important;padding-right:22px!important;}
    .hero{font-size:32px!important;line-height:38px!important;}
  }
</style>
</head>
<body style="margin:0;padding:0;background-color:${C.bg};">
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;color:${C.bg};">
${preheader}
</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${C.bg};">
<tr><td align="center" style="padding:28px 10px 40px 10px;">
<table role="presentation" class="wrap" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;">

  <!-- logo -->
  <tr><td align="center" style="padding:24px 0 8px 0;">
    <img src="${SITE}/email/sequins-logo.png" width="220" height="80" alt="Sequins" style="display:block;width:220px;height:auto;">
  </td></tr>

  <!-- badge -->
  <tr><td align="center" style="padding:22px 0 0 0;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #0E4B46;background-color:#0B2422;border-radius:999px;">
      <tr><td style="padding:7px 16px;font-family:${FONT};font-size:13px;font-weight:600;color:${C.teal};">✦ &nbsp;Beta access confirmed</td></tr>
    </table>
  </td></tr>

  <!-- hero -->
  <tr><td align="center" class="pad" style="padding:22px 40px 0 40px;">
    <div class="hero" style="font-family:${FONT};font-size:40px;line-height:46px;font-weight:700;letter-spacing:-0.5px;color:${C.ink};">${greeting}</div>
  </td></tr>
  <tr><td align="center" class="pad" style="padding:18px 50px 0 50px;">
    <p style="margin:0;font-family:${FONT};font-size:16px;line-height:26px;color:${C.body};">${intro}</p>
  </td></tr>

  <!-- get the app -->
  <tr><td class="pad" style="padding:36px 40px 0 40px;">${getTheApp}</td></tr>

  <!-- before you start -->
  <tr><td class="pad" style="padding:14px 40px 0 40px;">${beforeYouStart}</td></tr>

  <!-- ask: attribution -->
  <tr><td class="pad" style="padding:14px 40px 0 40px;">
    ${card(`
      ${eyebrow("One quick favor")}
      <div style="font-family:${FONT};font-size:20px;line-height:27px;font-weight:700;color:${C.ink};padding-bottom:10px;">How did you hear about us?</div>
      <p style="margin:0;font-family:${FONT};font-size:15px;line-height:24px;color:${C.body};">
        Just hit reply and tell us &mdash; a performer, a venue, a friend, a QR code at a show. One line is plenty. It tells us which rooms Sequins is traveling through, and where to show up next.
      </p>
    `)}
  </td></tr>

  <!-- ask: referral -->
  <tr><td class="pad" style="padding:14px 40px 0 40px;">
    ${card(`
      ${eyebrow("Share away")}
      <div style="font-family:${FONT};font-size:20px;line-height:27px;font-weight:700;color:${C.ink};padding-bottom:10px;">Get your friends in on this</div>
      <p style="margin:0 0 22px 0;font-family:${FONT};font-size:15px;line-height:24px;color:${C.body};">
        Post about it, share screenshots, tag ${SEQUINS_BETA.instagram}. The scene only shows up in the app if the scene is in the app. Know a queen who needs bookings, a bar that runs a weekly, or a friend who always asks what&rsquo;s on tonight? This code gets them into the beta. One ask: send bugs to us through the form instead of posting them, so we can fix them fast.
      </p>
      <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0">
        <tr><td align="center" style="background-color:#FFFFFF;border-radius:14px;padding:12px;">
          <img src="${SITE}/email/sequins-qr.png" width="176" height="176" alt="QR code: join the Sequins beta" style="display:block;width:176px;height:176px;">
        </td></tr>
      </table>
      <div style="padding-top:22px;">${button(PAGE, "Or share the link")}</div>
      <p style="margin:12px 0 0 0;text-align:center;font-family:${FONT};font-size:13px;color:${C.muted};">www.thebradleyproject.com/sequins</p>
    `)}
  </td></tr>

  <!-- divider -->
  <tr><td style="padding:48px 60px 0 60px;"><div style="height:1px;line-height:1px;background-color:${C.border};">&nbsp;</div></td></tr>

  <!-- what you're getting into -->
  <tr><td align="center" class="pad" style="padding:44px 40px 0 40px;">
    ${eyebrow("What you&rsquo;re getting yourself into")}
    <div style="font-family:${FONT};font-size:28px;line-height:34px;font-weight:700;color:${C.ink};">One app. Three roles.</div>
    <div style="font-family:${FONT};font-size:28px;line-height:34px;font-weight:400;color:${C.muted};">Everything clicks together.</div>
    <p style="margin:18px 0 0 0;font-family:${FONT};font-size:15px;line-height:24px;color:${C.body};">
      Drag runs on group chats, stories and word of mouth. It mostly works &mdash; until a show gets missed, a booking falls through, or someone gets paid three weeks late. Sequins puts the whole night in one place.
    </p>
  </td></tr>

  <tr><td class="pad" style="padding:28px 40px 0 40px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      ${role("🎟️ &nbsp;Fan", C.fan, "Your front row seat to the drag scene.",
        "Find shows in your city, get tickets and keep them on your phone, follow the performers you love, and tip from your seat instead of hunting for a five.")}
      ${role("💃 &nbsp;Talent", C.talent, "Get discovered. Get booked. Get paid.",
        "A real profile instead of a link in bio. Gig invites come with pay agreed upfront, you can take commissions for costumes and wigs, and money goes straight to your own account. We never take a cut of a tip.")}
      ${role("🎪 &nbsp;Host", C.host, "Run the whole show from your phone.",
        "Post the night with ticketing built in, staff it with DJs and door crew, check people in with a QR scan, and pay your cast from the same screen.")}
    </table>
  </td></tr>

  <!-- beta honesty -->
  <tr><td class="pad" style="padding:20px 40px 0 40px;">
    ${eyebrow("Being honest about the beta")}
    <p style="margin:0 0 14px 0;font-family:${FONT};font-size:15px;line-height:24px;color:${C.body};">
      This is an early build. Payments run in test mode, so poke at checkout, tips and payouts as much as you like &mdash; nothing is charged and no real money moves. Some corners will look unfinished, and your test data may be reset before launch.
    </p>
    <p style="margin:0;font-family:${FONT};font-size:15px;line-height:24px;color:${C.body};">
      That&rsquo;s why you&rsquo;re here. Tap every button, back out halfway through, lose signal mid-checkout. The goal is to break it before a stranger does &mdash; and a lot of what we build next will come straight from what testers tell us.
    </p>
  </td></tr>

  <!-- values + sign-off -->
  <tr><td align="center" class="pad" style="padding:44px 40px 0 40px;">
    <p style="margin:0;font-family:${FONT};font-size:15px;line-height:24px;color:${C.body};">
      Sequins is queer-led and rooted in Portland&rsquo;s drag scene &mdash; an explicitly LGBTQ+-affirming space, with zero tolerance for hate.
    </p>
    <p style="margin:26px 0 0 0;font-family:${FONT};font-size:16px;line-height:24px;color:${C.ink};font-weight:600;">Thank you for testing,<br>Bradley</p>
    <p style="margin:4px 0 0 0;font-family:${FONT};font-size:13px;color:${C.muted};">Founder, Sequins</p>
  </td></tr>

  <!-- footer -->
  <tr><td align="center" class="pad" style="padding:44px 40px 0 40px;">
    <p style="margin:0;font-family:${FONT};font-size:12px;line-height:20px;color:${C.muted};">
      A <a href="${SITE}" style="color:${C.muted};text-decoration:underline;">Bradley Project</a> production &mdash; PDX ✦<br>
      You&rsquo;re getting this because you joined the Sequins beta at thebradleyproject.com.<br>
      Not you, or want out? Reply &ldquo;remove&rdquo; and we&rsquo;ll take you off.<br>
      <a href="${TERMS}" style="color:${C.muted};">Beta Tester Terms</a> &nbsp;&middot;&nbsp; <a href="${SITE}/privacy" style="color:${C.muted};">Privacy</a> &nbsp;&middot;&nbsp; <a href="${SITE}/terms" style="color:${C.muted};">Terms</a>
    </p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

  const fn = firstName(name);
  const text = `${fn ? `You're in, ${fn}.` : "You're in."}

${isAndroid
    ? `Thanks for joining the Sequins beta. Google only lets in testers we add by hand, so we're adding your Google account now. Within a day you'll get a second email with the install link. Open it on your phone while signed in to the same Google account, tap "Accept invite," then install from the Play Store.`
    : `Thanks for joining the Sequins beta. The app is ready for you right now.

GET THE APP (iPhone)
1. Get Apple's free TestFlight app: ${SEQUINS_BETA.testflightAppUrl}
2. Open this link on your iPhone, then tap Accept and Install: ${SEQUINS_BETA.testflightUrl}
3. Open Sequins, sign up, and pick your role: Fan, Talent or Host.`}

BEFORE YOU START: EVERYTHING IS IN TEST MODE
- No real money moves. Never enter a real card, bank account or ID number.
- Test card: 4242 4242 4242 4242, any future date, any 3-digit CVC, any ZIP.
- Most events are demo listings based on real shows. Beta tickets won't get you in the door.
- Found something broken? Feedback form: ${SEQUINS_BETA.feedbackFormUrl}
- Tester guide (what to try, payout test info): ${GUIDE}

ONE QUICK FAVOR: How did you hear about us? Just hit reply and tell us. One line is plenty.

SHARE AWAY
Post about it, share screenshots, tag ${SEQUINS_BETA.instagram}. Send friends here: ${PAGE}
One ask: send bugs to us through the form instead of posting them.

Thank you for testing,
Bradley
Founder, Sequins

A Bradley Project production — PDX
Want out? Reply "remove".
Beta Tester Terms: ${TERMS}  ·  Privacy: ${SITE}/privacy  ·  Terms: ${SITE}/terms
`;

  return { subject, html, text };
}

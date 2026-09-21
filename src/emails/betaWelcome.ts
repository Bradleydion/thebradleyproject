// src/emails/betaWelcome.ts
// Welcome email sent to someone right after they join the Sequins beta list.
// Styled to match /sequins: near-black base, teal accent, Inter, ✦ motif.
// Email clients ignore most CSS, so everything is inline + table-based.
// Images must be absolute https URLs (Gmail strips base64) and use www —
// the bare apex domain's cert is not valid.

const SITE = "https://www.thebradleyproject.com";
const PAGE = `${SITE}/sequins`;

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

export function betaWelcomeEmail(name: string) {
  const first = escapeHtml(firstName(name));
  const greeting = first ? `You&rsquo;re on the list, ${first}.` : "You&rsquo;re on the list.";

  const subject = "You're on the list ✦ (link coming soon)";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>You're on the Sequins beta list</title>
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
Your invite isn&rsquo;t ready yet &mdash; but you are. Here&rsquo;s what we&rsquo;re building, and a code to bring your friends.
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
      <tr><td style="padding:7px 16px;font-family:${FONT};font-size:13px;font-weight:600;color:${C.teal};">✦ &nbsp;Beta list confirmed</td></tr>
    </table>
  </td></tr>

  <!-- hero -->
  <tr><td align="center" class="pad" style="padding:22px 40px 0 40px;">
    <div class="hero" style="font-family:${FONT};font-size:40px;line-height:46px;font-weight:700;letter-spacing:-0.5px;color:${C.ink};">${greeting}</div>
  </td></tr>
  <tr><td align="center" class="pad" style="padding:18px 50px 0 50px;">
    <p style="margin:0;font-family:${FONT};font-size:16px;line-height:26px;color:${C.body};">
      Thanks for signing up to test Sequins. There&rsquo;s no download link yet &mdash; we&rsquo;re finishing the last few things so the first build you get actually works. The moment it&rsquo;s ready, your invite lands right here.
    </p>
  </td></tr>

  <!-- ask: attribution -->
  <tr><td class="pad" style="padding:40px 40px 0 40px;">
    ${card(`
      ${eyebrow("One quick favor")}
      <div style="font-family:${FONT};font-size:20px;line-height:27px;font-weight:700;color:${C.ink};padding-bottom:10px;">How did you hear about us?</div>
      <p style="margin:0;font-family:${FONT};font-size:15px;line-height:24px;color:${C.body};">
        Just hit reply and tell us &mdash; a performer, a venue, a friend, a QR card at a show. One line is plenty. It tells us which rooms Sequins is traveling through, and where to show up next.
      </p>
    `)}
  </td></tr>

  <!-- ask: referral -->
  <tr><td class="pad" style="padding:14px 40px 0 40px;">
    ${card(`
      ${eyebrow("Bring your people")}
      <div style="font-family:${FONT};font-size:20px;line-height:27px;font-weight:700;color:${C.ink};padding-bottom:10px;">Get your friends in on this</div>
      <p style="margin:0 0 22px 0;font-family:${FONT};font-size:15px;line-height:24px;color:${C.body};">
        The scene only shows up in the app if the scene is in the app. Know a queen who needs bookings, a bar that runs a weekly, or a friend who always asks what&rsquo;s on tonight? Hold up your phone &mdash; this code puts them on the same list.
      </p>
      <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0">
        <tr><td align="center" style="background-color:#FFFFFF;border-radius:14px;padding:12px;">
          <img src="${SITE}/email/sequins-qr.png" width="176" height="176" alt="QR code: join the Sequins beta" style="display:block;width:176px;height:176px;">
        </td></tr>
      </table>
      <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="margin-top:22px;">
        <tr><td align="center" style="background-color:${C.teal};border-radius:999px;">
          <a href="${PAGE}" style="display:inline-block;padding:13px 26px;font-family:${FONT};font-size:14px;font-weight:700;color:#000000;text-decoration:none;">Or share the link</a>
        </td></tr>
      </table>
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
        "Find shows in your city, buy tickets and keep them on your phone, follow the performers you love, and tip from your seat instead of hunting for a five.")}
      ${role("💃 &nbsp;Talent", C.talent, "Get discovered. Get booked. Get paid.",
        "A real profile instead of a link in bio. Gig invites come with pay agreed upfront, you can take commissions for costumes and wigs, and money goes straight to your own account. We never take a cut of a tip.")}
      ${role("🎪 &nbsp;Host", C.host, "Run the whole show from your phone.",
        "Post the night with ticketing built in, staff it with DJs and door crew, check people in with a QR scan, and pay your cast from the same screen. Our fee on tickets starts small and shrinks the more you use Sequins.")}
    </table>
  </td></tr>

  <!-- beta honesty -->
  <tr><td class="pad" style="padding:20px 40px 0 40px;">
    ${eyebrow("Being honest about the beta")}
    <p style="margin:0 0 14px 0;font-family:${FONT};font-size:15px;line-height:24px;color:${C.body};">
      This is a first build. Payments run in test mode, so nothing you &ldquo;buy&rdquo; costs real money &mdash; poke at it, break it on purpose. Some events are sample data, and a few corners will look unfinished.
    </p>
    <p style="margin:0;font-family:${FONT};font-size:15px;line-height:24px;color:${C.body};">
      That&rsquo;s why you&rsquo;re here. Messaging, a directory of safe venues, and more community tools are next &mdash; and a lot of what we build after launch will come straight from what testers tell us.
    </p>
  </td></tr>

  <!-- values + sign-off -->
  <tr><td align="center" class="pad" style="padding:44px 40px 0 40px;">
    <p style="margin:0;font-family:${FONT};font-size:15px;line-height:24px;color:${C.body};">
      Sequins is queer-led and rooted in Portland&rsquo;s drag scene &mdash; an explicitly LGBTQ+-affirming space, with zero tolerance for hate.
    </p>
    <p style="margin:26px 0 0 0;font-family:${FONT};font-size:16px;line-height:24px;color:${C.ink};font-weight:600;">See you soon,<br>Bradley</p>
    <p style="margin:4px 0 0 0;font-family:${FONT};font-size:13px;color:${C.muted};">Founder, Sequins</p>
  </td></tr>

  <!-- footer -->
  <tr><td align="center" class="pad" style="padding:44px 40px 0 40px;">
    <p style="margin:0;font-family:${FONT};font-size:12px;line-height:20px;color:${C.muted};">
      A <a href="${SITE}" style="color:${C.muted};text-decoration:underline;">Bradley Project</a> production &mdash; PDX ✦<br>
      You&rsquo;re getting this because you joined the Sequins beta list at thebradleyproject.com.<br>
      Not you, or want off the list? Reply &ldquo;remove&rdquo; and we&rsquo;ll take you off.<br>
      <a href="${SITE}/privacy" style="color:${C.muted};">Privacy</a> &nbsp;&middot;&nbsp; <a href="${SITE}/terms" style="color:${C.muted};">Terms</a>
    </p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

  const text = `${first ? `You're on the list, ${firstName(name)}.` : "You're on the list."}

Thanks for signing up to test Sequins. There's no download link yet — we're finishing the last few things so the first build you get actually works. The moment it's ready, your invite lands right here.

ONE QUICK FAVOR: How did you hear about us?
Just hit reply and tell us — a performer, a venue, a friend, a QR card at a show. One line is plenty.

BRING YOUR PEOPLE
Know a queen who needs bookings, a bar that runs a weekly, or a friend who always asks what's on tonight? Send them here: ${PAGE}

ONE APP. THREE ROLES.
Fan — Find shows, buy tickets, follow performers, tip from your seat.
Talent — A real profile, gig invites with pay agreed upfront, commissions, and money straight to your account. We never take a cut of a tip.
Host — Post the night with ticketing, staff it, QR check-in at the door, and pay your cast from one screen.

BEING HONEST ABOUT THE BETA
This is a first build. Payments run in test mode, so nothing you "buy" costs real money. Some events are sample data. Messaging, a safe-venue directory, and more community tools are next — shaped by what testers tell us.

See you soon,
Bradley
Founder, Sequins

A Bradley Project production — PDX
Want off the list? Reply "remove".
Privacy: ${SITE}/privacy  ·  Terms: ${SITE}/terms
`;

  return { subject, html, text };
}

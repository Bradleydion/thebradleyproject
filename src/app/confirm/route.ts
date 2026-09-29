// Branded confirmation link for Sequins auth emails.
//
// Supabase's default email links point at <project>.supabase.co, which Gmail
// treats as a phishing signal because it doesn't match the sending domain
// (thebradleyproject.com). The Supabase email templates link here instead,
// and this route forwards to Supabase's own /verify endpoint.
//
// Only forwards to our Supabase project, only for known auth types, and only
// back to the Sequins app or this site, so it can't be used as an open redirect.

import { NextRequest, NextResponse } from "next/server";

const SUPABASE_VERIFY = "https://vrlsphktnvxrbuwwuvpk.supabase.co/auth/v1/verify";
const ALLOWED_TYPES = new Set(["signup", "recovery", "magiclink", "invite", "email_change", "email"]);
const ALLOWED_REDIRECT = /^(sequins:\/\/|https:\/\/(www\.)?thebradleyproject\.com(\/|$))/;

export function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const token = params.get("token") ?? "";
  const type = params.get("type") ?? "";
  const redirectTo = params.get("redirect_to") ?? "";

  if (!/^[A-Za-z0-9_-]{8,200}$/.test(token) || !ALLOWED_TYPES.has(type)) {
    return new NextResponse("This link is invalid or incomplete. Try requesting a new email from the Sequins app.", {
      status: 400,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  const target = new URL(SUPABASE_VERIFY);
  target.searchParams.set("token", token);
  target.searchParams.set("type", type);
  if (ALLOWED_REDIRECT.test(redirectTo)) target.searchParams.set("redirect_to", redirectTo);

  return NextResponse.redirect(target.toString(), 302);
}

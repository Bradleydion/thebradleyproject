// src/app/sequins/beta/page.tsx
// Sequins beta tester guide: how to get the app, test info, what to try,
// where to send feedback, and the Beta Tester Terms (#terms).
// Linked from the sign-up form, the welcome email, and the Sequins page.

import type { Metadata } from "next";
import Link from "next/link";
import { SEQUINS_BETA } from "@/data/sequinsBeta";

export const metadata: Metadata = {
  title: "Sequins Beta — Tester Guide",
  description:
    "Everything you need to test the Sequins beta: getting the app, test payment info, what to try as a Fan, Talent or Host, and the Beta Tester Terms.",
};

const TEAL = "#00B3A4";

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: TEAL }}>
        {eyebrow}
      </p>
      <h2 className="text-white font-bold text-2xl mb-5 leading-snug">{title}</h2>
      <div className="text-white/60 text-[15px] leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-[13px] text-white whitespace-nowrap">{children}</code>
  );
}

function Track({ emoji, name, color, steps }: { emoji: string; name: string; color: string; steps: React.ReactNode[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-5">
      <p className="font-semibold mb-3" style={{ color }}>
        {emoji} {name}
      </p>
      <ol className="list-decimal pl-5 space-y-1.5 text-white/60 text-sm leading-relaxed">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </div>
  );
}

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="underline underline-offset-2 hover:opacity-80" style={{ color: TEAL }}>
    {children}
  </a>
);

export default function SequinsBetaGuidePage() {
  return (
    <div className="bg-[#0A0B0E] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00B3A4]/30 bg-[#00B3A4]/10 px-4 py-1.5 text-[#00B3A4] text-sm font-medium">
            <span>✦</span>
            <span>Beta tester guide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Help us break Sequins
            <br />
            <span className="text-white/50 font-normal">before a stranger does.</span>
          </h1>
          <p className="mt-5 text-white/55 text-lg leading-relaxed max-w-xl mx-auto">
            Everything you need to test the beta, in one place. Not signed up yet?{" "}
            <A href="/sequins#join">Join the beta</A>.
          </p>
        </div>

        <div className="grid gap-5">
          {/* Get the app */}
          <Section eyebrow="Step 1" title="Get the app">
            <p>
              <strong className="text-white">iPhone:</strong>{" "}get Apple&apos;s free{" "}
              <A href={SEQUINS_BETA.testflightAppUrl}>TestFlight app</A>, then open our{" "}
              <A href={SEQUINS_BETA.testflightUrl}>TestFlight invite</A>{" "}on your iPhone and tap Accept and Install.
            </p>
            <p>
              <strong className="text-white">Android:</strong>{" "}Google only lets in testers we add by hand. Once you&apos;ve{" "}
              <A href="/sequins#join">signed up</A>, we add your Google account and email you the install link, usually within a day.
              It may show up as &ldquo;com.thebradleyproject.sequins (unreviewed)&rdquo;. That&apos;s normal for now.
            </p>
          </Section>

          {/* Test mode */}
          <Section eyebrow="Good to know" title="Everything is in test mode">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-white">No real money moves.</strong>{" "}Tickets, tips and payouts all run in Stripe&apos;s test mode.
                Never enter a real card, bank account or ID number. Use the test info below.
              </li>
              <li>
                <strong className="text-white">Most events are demo listings</strong>{" "}based on real shows, so there&apos;s something to browse.
                Tickets you buy in the beta won&apos;t get you in the door. Check with the venue for the real thing.
              </li>
              <li>Your test account and data may be reset before launch.</li>
            </ul>
          </Section>

          {/* Test info */}
          <Section eyebrow="Copy and paste" title="Test info">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="text-white font-semibold mb-2">Paying for tickets or tips</p>
                <p className="text-sm">
                  Card <Code>4242 4242 4242 4242</Code>, any future date, any 3-digit CVC, any ZIP.
                </p>
                <p className="text-sm mt-2">
                  Want to see a declined payment? Use <Code>4000 0000 0000 0002</Code>.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="text-white font-semibold mb-2">Payout setup (Host &amp; Talent)</p>
                <ul className="text-sm space-y-1">
                  <li>Phone <Code>000 000 0000</Code>, code <Code>000000</Code></li>
                  <li>Date of birth <Code>01/01/1901</Code></li>
                  <li>SSN <Code>000-00-0000</Code>{" "}(last 4: <Code>0000</Code>)</li>
                  <li>Address line 1 <Code>address_full_match</Code>, any real city, state and ZIP</li>
                  <li>Routing <Code>110000000</Code>, account <Code>000123456789</Code></li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Tracks */}
          <Section eyebrow="Step 2" title="Pick a track and try to break it">
            <p>
              When you sign up, Sequins asks who you are. Start with the track that fits you, then switch roles in your Profile and try another.
            </p>
            <div className="grid gap-4">
              <Track
                emoji="🎟️"
                name="Fan: finding shows and going to them"
                color="#00B3A4"
                steps={[
                  "Browse Discover: scroll, search, filter by city and date.",
                  "Open an event. Do the lineup and host info look right?",
                  "Follow a performer and send a tip with the test card.",
                  "Reserve a free ticket, and buy a paid one (paid tickets work on Avant Drag and Tuck's Roller Disco in Portland).",
                  "Open your ticket in Tickets, turn on airplane mode, and check the QR code still shows.",
                  "Try requesting a refund.",
                ]}
              />
              <Track
                emoji="💃"
                name="Talent: performers, DJs, MCs and crew"
                color="#FB923C"
                steps={[
                  "Create your performer profile, upload a photo, then edit it.",
                  "Set up payouts in Profile → Payout Setup, using the test info above.",
                  "Check your Bookings tab. If a host adds you to a lineup, it shows up here.",
                  "Post a listing or commission offer in the Marketplace.",
                  "Check Your Rankings and try Promote.",
                ]}
              />
              <Track
                emoji="🎪"
                name="Host: posting and running events"
                color="#A78BFA"
                steps={[
                  "Set up payouts in Profile → Payout Setup, using the test info above.",
                  "Create an event in Organize: artwork, date and time, ticket price, refund policy.",
                  "Try a recurring event, and a second event in the same month (you should see the free-plan limit).",
                  "Build a lineup: invite talent as Performer, MC or DJ.",
                  "Try door check-in by scanning a friend's ticket from your phone.",
                  "Poke at Refunds, Promote, Your Rankings and Subscription.",
                ]}
              />
            </div>
            <p>
              <strong className="text-white">Everyone:</strong>{" "}tap every button, back out halfway through, type strange things into fields,
              lose signal mid-checkout.
            </p>
          </Section>

          {/* Feedback */}
          <Section eyebrow="Step 3" title="Found something? Tell us">
            <p>
              Use the <A href={SEQUINS_BETA.feedbackFormUrl}>feedback form</A>: one problem per submission, about 2 minutes each.
              On iPhone you can also take a screenshot inside Sequins and tap &ldquo;Share Beta Feedback.&rdquo;
            </p>
            <p>
              Got a screenshot or screen recording? Email it to{" "}
              <A href={`mailto:${SEQUINS_BETA.contactEmail}`}>{SEQUINS_BETA.contactEmail}</A>{" "}with your name in the subject.
              We reply to every report.
            </p>
            <a
              href={SEQUINS_BETA.feedbackFormUrl}
              className="inline-block mt-2 px-6 py-3 rounded-full bg-[#00B3A4] text-black font-bold text-sm hover:opacity-90 transition"
            >
              Send feedback →
            </a>
          </Section>

          {/* Share */}
          <Section eyebrow="Share away" title="Tell your people 💜">
            <p>
              Post about it, share screenshots, tag {SEQUINS_BETA.instagram}, and send friends to{" "}
              <A href="/sequins">thebradleyproject.com/sequins</A>. The more performers, hosts and fans who test it, the better it gets.
            </p>
            <p>One ask: send bugs to us through the form instead of posting them, so we can fix them fast.</p>
          </Section>

          {/* Terms */}
          <Section id="terms" eyebrow="The fine print" title="Beta Tester Terms">
            <p>
              Thanks for helping test Sequins, a pre-release app from The Bradley Project LLC. By installing or using the beta, you agree to the following.
            </p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong className="text-white">It&apos;s a beta.</strong>{" "}Sequins isn&apos;t finished. Expect bugs, missing features and changes.
                Your account, tickets, profile and other data may be reset or deleted before public launch. The beta is provided &ldquo;as is,&rdquo; without warranties of any kind.
              </li>
              <li>
                <strong className="text-white">Payments are test-only.</strong>{" "}Every payment, tip, payout and ticket in the beta runs in Stripe&apos;s test mode.
                No real money moves, and tickets bought in the app won&apos;t get you into any real event. Never enter a real card, bank account or ID number.
              </li>
              <li>
                <strong className="text-white">Events are demo listings.</strong>{" "}Most events in the beta are demo listings based on real shows. They aren&apos;t official postings.
                Check with the venue or host for real details.
              </li>
              <li>
                <strong className="text-white">Share away.</strong>{" "}You&apos;re welcome to post about Sequins, share screenshots and tell people about the beta.
                Please send bugs to us through the feedback form rather than posting them publicly, and don&apos;t share anyone else&apos;s personal info from the app.
              </li>
              <li>
                <strong className="text-white">Your feedback.</strong>{" "}Anything you send us (bug reports, ideas, suggestions) we can use to improve Sequins, with no obligation or payment.
                We&apos;ll only quote you by name, or use your photo, in our posts if you say it&apos;s OK first.
              </li>
              <li>
                <strong className="text-white">Your data and privacy.</strong>{" "}We collect what&apos;s needed to run the beta: your sign-up details, your account info, what you enter in the app, and crash reports.
                When the app hits an error, it may save a short screen replay to help us fix it, with text and images hidden. Details are in our{" "}
                <A href="/privacy">Privacy Policy</A>.
              </li>
              <li>
                <strong className="text-white">Leaving the beta.</strong>{" "}You can stop anytime and delete your account in Profile → Delete Account.
                We can end the beta, or your access to it, at any time.
              </li>
            </ol>
            <p>
              Questions? <A href={`mailto:${SEQUINS_BETA.contactEmail}`}>{SEQUINS_BETA.contactEmail}</A>
            </p>
          </Section>
        </div>

        <p className="mt-12 text-center text-white/30 text-sm">
          A{" "}
          <Link href="/" className="underline underline-offset-2 hover:text-white/60 transition">
            Bradley Project
          </Link>{" "}
          production — PDX ✦
        </p>
      </div>
    </div>
  );
}

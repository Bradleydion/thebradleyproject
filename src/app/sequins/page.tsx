// src/app/sequins/page.tsx
// Dedicated Sequins landing page — linked from QR cards at shows.
// Apple MacBook Pro–style: dark, cinematic, scroll-driven sections.

import type { Metadata } from "next";
import BetaSignupForm from "@/components/BetaSignupForm";
import { SEQUINS_BETA } from "@/data/sequinsBeta";

// Re-render hourly so date-based bits (like the Pride Plaza callout) drop off on their own.
export const revalidate = 3600;

// Saturday Oct 3, 2026, noon–4 PM Pacific. Hidden once it's over.
const PRIDE_PLAZA_ENDS = new Date("2026-10-03T16:00:00-07:00");

export const metadata: Metadata = {
  title: "Sequins — The Home of Drag Performance",
  description:
    "Discover drag shows, buy tickets, get booked, and run the whole night. Sequins is the app built for the drag community.",
};

// ── Real app screenshot showcase ───────────────────────────────────────────
function Phone({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative rounded-[2rem] border-2 border-white/15 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)] flex-shrink-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-[3px] rounded-full bg-white/40" />
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="flex items-end justify-center gap-3 mt-16 mb-4 px-4">
      {/* Outer left — small, faded */}
      <Phone
        src="/images/sequins/screen-4.jpg"
        alt="Sequins profile"
        className="hidden sm:block w-[110px] h-[220px] opacity-40 translate-y-6"
      />
      {/* Inner left */}
      <Phone
        src="/images/sequins/screen-2.jpg"
        alt="Sequins performer"
        className="w-[140px] h-[280px] opacity-75 translate-y-3"
      />
      {/* Center hero — splash screen */}
      <Phone
        src="/images/sequins/screen-0.jpg"
        alt="Sequins app"
        className="w-[180px] h-[360px] z-10 shadow-[0_0_60px_rgba(0,179,164,0.25)]"
      />
      {/* Inner right */}
      <Phone
        src="/images/sequins/screen-1.jpg"
        alt="Sequins discover"
        className="w-[140px] h-[280px] opacity-75 translate-y-3"
      />
      {/* Outer right — small, faded */}
      <Phone
        src="/images/sequins/screen-3.jpg"
        alt="Sequins event"
        className="hidden sm:block w-[110px] h-[220px] opacity-40 translate-y-6"
      />
    </div>
  );
}

// ── Role feature card ──────────────────────────────────────────────────────
function RoleCard({
  emoji,
  role,
  tagline,
  color,
  perks,
}: {
  emoji: string;
  role: string;
  tagline: string;
  color: string;
  perks: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-7 flex flex-col gap-4 hover:bg-white/8 transition-colors duration-300">
      <div
        className="text-3xl w-14 h-14 rounded-2xl flex items-center justify-center"
        style={{ backgroundColor: `${color}22` }}
      >
        {emoji}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color }}>
          {role}
        </p>
        <p className="text-white font-semibold text-lg leading-snug">{tagline}</p>
      </div>
      <ul className="flex flex-col gap-2">
        {perks.map((p) => (
          <li key={p} className="flex items-start gap-2 text-white/60 text-sm leading-relaxed">
            <span className="mt-0.5 shrink-0 text-[10px]" style={{ color }}>
              ✦
            </span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Stat callout ──────────────────────────────────────────────────────────
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 px-6 py-5 rounded-2xl border border-white/10 bg-white/5">
      <span className="text-3xl font-bold text-white tracking-tight">{value}</span>
      <span className="text-white/50 text-xs uppercase tracking-widest text-center">{label}</span>
    </div>
  );
}

// ── Roadmap ("Where we are") ─────────────────────────────────────────────
// Update this list as milestones land. state: done | now | next.
const ROADMAP: { title: string; when: string; state: "done" | "now" | "next"; text: string }[] = [
  {
    title: "The app is built",
    when: "Done",
    state: "done",
    text: "Three roles, event discovery, tickets with QR door check-in, lineups and gig invites, tips, payouts and a marketplace for commissions.",
  },
  {
    title: "First beta builds",
    when: "September 2026",
    state: "done",
    text: "Sequins runs on real phones through TestFlight (iPhone) and Google Play testing (Android). Our own first walkthrough turned up 21 fixes, all shipped in one build.",
  },
  {
    title: "Open beta",
    when: "Now",
    state: "now",
    text: "Performers, hosts and fans are testing the app. Payments run in test mode while we find and fix what breaks.",
  },
  {
    title: "Real payments",
    when: "October",
    state: "next",
    text: "Switching from test mode to live payments, so performers get paid for real.",
  },
  {
    title: "App Store & Google Play review",
    when: "Late October",
    state: "next",
    text: "Submitting Sequins to Apple and Google.",
  },
  {
    title: "Public launch",
    when: "Target: November",
    state: "next",
    text: "Free to download for everyone, starting in Portland and growing from there.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────
export default function SequinsPage() {
  return (
    <div className="bg-[#0A0B0E] text-white">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[600px] h-[600px] rounded-full bg-[#00B3A4] opacity-[0.07] blur-[120px]" />
        </div>

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00B3A4]/30 bg-[#00B3A4]/10 px-4 py-1.5 text-[#00B3A4] text-sm font-medium">
          <span>✦</span>
          <span>Beta open now · iPhone &amp; Android</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl">
          The home of{" "}
          <span className="bg-gradient-to-r from-[#00B3A4] to-[#5eead4] bg-clip-text text-transparent">
            drag performance.
          </span>
        </h1>

        {/* Sub */}
        <p className="mt-6 max-w-xl text-white/60 text-lg sm:text-xl leading-relaxed">
          Discover shows. Get booked. Run the whole night.
          Sequins puts the entire drag scene in your pocket.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#join"
            className="px-6 py-3 rounded-full bg-[#00B3A4] text-black font-semibold hover:opacity-90 transition"
          >
            Join the beta →
          </a>
          <a
            href={SEQUINS_BETA.guidePath}
            className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition"
          >
            Tester guide
          </a>
          <a
            href="https://github.com/Bradleydion/drag-boutique"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition"
          >
            View on GitHub
          </a>
        </div>

        {/* Phone screenshots */}
        <PhoneMockup />

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs">
          <svg width="20" height="20" viewBox="0 0 24 24" className="animate-bounce">
            <path
              d="M12 5v14m0 0l-6-6m6 6l6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-12" />

      {/* ── Roles ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-center text-[#00B3A4] text-sm font-semibold uppercase tracking-widest mb-4">
          Built for everyone in the scene
        </p>
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-14 leading-tight">
          One app. Three roles.
          <br />
          <span className="text-white/50 font-normal">Everything clicks together.</span>
        </h2>

        <div className="grid gap-5 sm:grid-cols-3">
          <RoleCard
            emoji="🎟️"
            role="Fan"
            tagline="Your front row seat to the drag scene."
            color="#00B3A4"
            perks={[
              "Browse events in your city",
              "Buy tickets & keep them on your phone",
              "Follow performers you love",
              "Send tips directly to artists",
            ]}
          />
          <RoleCard
            emoji="💃"
            role="Talent"
            tagline="Get discovered. Get booked. Get paid."
            color="#FB923C"
            perks={[
              "Build a public profile with your roles & bio",
              "Accept gig invites with pay agreed upfront",
              "Take commissions — costumes, wigs, and more",
              "Manage your bookings in one place",
            ]}
          />
          <RoleCard
            emoji="🎪"
            role="Host"
            tagline="Run the whole show from your phone."
            color="#A78BFA"
            perks={[
              "Create events with full ticketing in minutes",
              "Staff your night — invite DJs, door crew & more",
              "QR door check-in built right in",
              "Analytics, invoices, and payout tracking",
            ]}
          />
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-12" />

      {/* ── Where we are ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-center text-[#00B3A4] text-sm font-semibold uppercase tracking-widest mb-4">
          Where we are
        </p>
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          The beta is open.
          <br />
          <span className="text-white/50 font-normal">Here&apos;s the road to launch.</span>
        </h2>
        <p className="text-center text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-12">
          Sequins is being built in the open, with the people who&apos;ll use it. Every fix in the next few weeks comes from what beta testers tell us.
        </p>

        <ol className="relative border-l border-white/10 ml-3 sm:ml-6 space-y-8">
          {ROADMAP.map((item) => (
            <li key={item.title} className="pl-8 relative">
              <span
                className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 ${
                  item.state === "done"
                    ? "bg-[#00B3A4] border-[#00B3A4]"
                    : item.state === "now"
                    ? "bg-[#0A0B0E] border-[#00B3A4] shadow-[0_0_12px_rgba(0,179,164,0.8)]"
                    : "bg-[#0A0B0E] border-white/25"
                }`}
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h3 className={`font-semibold text-lg ${item.state === "next" ? "text-white/60" : "text-white"}`}>{item.title}</h3>
                <span
                  className={`text-xs font-semibold uppercase tracking-widest ${
                    item.state === "now" ? "text-[#00B3A4]" : "text-white/35"
                  }`}
                >
                  {item.when}
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ol>

        {new Date() < PRIDE_PLAZA_ENDS && (
          <div className="mt-14 rounded-2xl border border-[#00B3A4]/30 bg-[#00B3A4]/5 p-6 text-center">
            <p className="text-[#00B3A4] text-xs font-semibold uppercase tracking-widest mb-2">Come say hi · Portland</p>
            <p className="text-white font-semibold text-lg">Pride Plaza Grand Reopening</p>
            <p className="text-white/55 text-sm mt-1">
              Saturday, October 3 · noon–4 PM · SW 12th &amp; Harvey Milk
            </p>
            <p className="text-white/45 text-sm mt-3">See the app in person and join the beta on the spot.</p>
          </div>
        )}
      </section>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-12" />

      {/* ── Stats ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-center text-white/40 text-sm uppercase tracking-widest mb-10">
          What&apos;s already built
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Stat value="3" label="User roles" />
          <Stat value="In-app" label="Ticketing" />
          <Stat value="QR" label="Door check-in" />
          <Stat value="Real-time" label="Notifications" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 max-w-2xl mx-auto">
          <Stat value="Supabase" label="Backend" />
          <Stat value="Expo" label="iOS + Android" />
          <Stat value="✦" label="Marketplace" />
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-12" />

      {/* ── Community values ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-[#00B3A4] text-sm font-semibold uppercase tracking-widest mb-4">
          Our foundation
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
          Built by the community,
          <br />
          for the community.
        </h2>
        <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
          Sequins is a queer-led project rooted in Portland&apos;s drag scene.
          It&apos;s a safe, explicitly LGBTQ+-affirming space — zero tolerance for hate, full support for every performer and fan who walks through the door.
        </p>
      </section>

      {/* ── Beta Signup CTA ───────────────────────────────────────────── */}
      <section id="join" className="relative overflow-hidden py-28 px-6 text-center scroll-mt-16">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[500px] h-[300px] rounded-full bg-[#00B3A4] opacity-[0.08] blur-[100px]" />
        </div>

        <p className="text-[#00B3A4] text-sm font-semibold uppercase tracking-widest mb-4">
          Beta open now
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Be first through the door.
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">
          Sign up and test Sequins before anyone else. On iPhone you&apos;ll get the app right away; on Android we&apos;ll add you within a day.
        </p>

        <BetaSignupForm />

        <p className="mt-8 text-white/40 text-sm">
          Already testing?{" "}
          <a href={SEQUINS_BETA.guidePath} className="underline underline-offset-2 hover:text-white/70">
            Tester guide
          </a>{" "}
          ·{" "}
          <a href={SEQUINS_BETA.feedbackFormUrl} className="underline underline-offset-2 hover:text-white/70">
            Send feedback
          </a>
        </p>

        <p className="mt-12 text-white/30 text-sm">
          A{" "}
          <a
            href="https://www.thebradleyproject.com"
            className="underline underline-offset-2 hover:text-white/60 transition"
          >
            Bradley Project
          </a>{" "}
          production — PDX ✦
        </p>
      </section>
    </div>
  );
}

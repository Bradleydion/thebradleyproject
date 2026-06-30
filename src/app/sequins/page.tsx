// src/app/sequins/page.tsx
// Dedicated Sequins landing page — linked from QR cards at shows.
// Apple MacBook Pro–style: dark, cinematic, scroll-driven sections.

import type { Metadata } from "next";
import BetaSignupForm from "@/components/BetaSignupForm";

export const metadata: Metadata = {
  title: "Sequins — The Home of Drag Performance",
  description:
    "Discover drag shows, buy tickets, get booked, and run the whole night. Sequins is the app built for the drag community.",
};

// ── Inline SVG phone mockup ────────────────────────────────────────────────
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[220px] h-[440px] rounded-[2.5rem] border-2 border-white/20 bg-gradient-to-b from-[#111827] to-[#0a0b0e] shadow-[0_0_80px_rgba(0,179,164,0.15)] flex flex-col items-center justify-center gap-4 px-5">
      {/* Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-white/20" />
      {/* Screen content */}
      <div className="text-3xl">✦</div>
      <p className="text-white font-semibold tracking-widest text-sm uppercase">Sequins</p>
      <p className="text-white/40 text-xs text-center leading-relaxed">The home of drag performance</p>
      <div className="flex gap-2 mt-2">
        <div className="h-1.5 w-8 rounded-full bg-[#00B3A4]" />
        <div className="h-1.5 w-4 rounded-full bg-white/20" />
        <div className="h-1.5 w-4 rounded-full bg-white/20" />
      </div>
      {/* Home bar */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-white/20" />
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
          <span>Coming soon to iOS &amp; Android</span>
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
            href="https://www.thebradleyproject.com/projects"
            className="px-6 py-3 rounded-full bg-[#00B3A4] text-black font-semibold hover:opacity-90 transition"
          >
            See all projects →
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

        {/* Phone mockup */}
        <div className="mt-16 mb-4">
          <PhoneMockup />
        </div>

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

      {/* ── Stats ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-center text-white/40 text-sm uppercase tracking-widest mb-10">
          What's already built
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Stat value="3" label="User roles" />
          <Stat value="Live" label="Ticketing" />
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
          Sequins is a queer-led project rooted in Portland's drag scene.
          It's a safe, explicitly LGBTQ+-affirming space — zero tolerance for hate, full support for every performer and fan who walks through the door.
        </p>
      </section>

      {/* ── Beta Signup CTA ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 px-6 text-center">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[500px] h-[300px] rounded-full bg-[#00B3A4] opacity-[0.08] blur-[100px]" />
        </div>

        <p className="text-[#00B3A4] text-sm font-semibold uppercase tracking-widest mb-4">
          Coming soon
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Be first through the door.
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">
          Sign up for beta access and we&apos;ll send you the link the moment Sequins hits the App Store and Google Play.
        </p>

        <BetaSignupForm />

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

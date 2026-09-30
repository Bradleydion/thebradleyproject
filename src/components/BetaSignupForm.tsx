"use client";

import { useState } from "react";
import { BETA_ROLES, SEQUINS_BETA, type BetaRole } from "@/data/sequinsBeta";

type Status = "idle" | "sending" | "success" | "error";
type Device = "iOS" | "Android";

const inputClass = (hasError: boolean) =>
  `w-full rounded-xl border ${hasError ? "border-red-400" : "border-white/15"} bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-[#00B3A4]/40 transition text-sm`;

const labelClass = "text-xs font-semibold uppercase tracking-widest text-white/40";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function FieldError({ msg }: { msg: string }) {
  return <p className="text-red-400 text-xs mt-1">{msg}</p>;
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-left">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00B3A4]/15 text-[#00B3A4] text-xs font-bold">
        {n}
      </span>
      <span className="text-white/70 text-sm leading-relaxed">{children}</span>
    </li>
  );
}

function SuccessIOS({ firstName }: { firstName: string }) {
  return (
    <div className="rounded-2xl border border-[#00B3A4]/30 bg-[#00B3A4]/5 p-8 sm:p-10 text-center max-w-md mx-auto">
      <div className="text-4xl mb-4">✦</div>
      <h3 className="text-white font-bold text-2xl mb-2">
        You&apos;re in{firstName ? `, ${firstName}` : ""}!
      </h3>
      <p className="text-white/50 text-sm leading-relaxed mb-6">
        Get Sequins on your iPhone right now. It takes about a minute.
      </p>
      <ol className="grid gap-3 mb-7">
        <Step n={1}>
          Get Apple&apos;s free{" "}
          <a href={SEQUINS_BETA.testflightAppUrl} className="text-[#00B3A4] underline underline-offset-2">
            TestFlight app
          </a>{" "}
          if you don&apos;t have it.
        </Step>
        <Step n={2}>Tap the button below, then tap Accept and Install.</Step>
        <Step n={3}>Open Sequins, sign up, and pick your role.</Step>
      </ol>
      <a
        href={SEQUINS_BETA.testflightUrl}
        className="inline-block w-full py-3.5 rounded-full bg-[#00B3A4] text-black font-bold text-sm hover:opacity-90 transition"
      >
        Get the Sequins beta →
      </a>
      <p className="mt-5 text-white/40 text-xs leading-relaxed">
        We also emailed you this link, plus the tester guide with test card info.{" "}
        <a href={SEQUINS_BETA.guidePath} className="underline underline-offset-2 hover:text-white/70">
          Open the tester guide
        </a>
      </p>
    </div>
  );
}

function SuccessAndroid({ firstName }: { firstName: string }) {
  return (
    <div className="rounded-2xl border border-[#00B3A4]/30 bg-[#00B3A4]/5 p-8 sm:p-10 text-center max-w-md mx-auto">
      <div className="text-4xl mb-4">✦</div>
      <h3 className="text-white font-bold text-2xl mb-2">
        You&apos;re in{firstName ? `, ${firstName}` : ""}!
      </h3>
      <p className="text-white/60 text-sm leading-relaxed mb-4">
        Google only lets in beta testers we add by hand, so we&apos;ll add your Google account within a day
        and email you the moment you can install.
      </p>
      <p className="text-white/40 text-xs leading-relaxed">
        In the meantime, the{" "}
        <a href={SEQUINS_BETA.guidePath} className="underline underline-offset-2 hover:text-white/70">
          tester guide
        </a>{" "}
        shows what to try first.
      </p>
    </div>
  );
}

export default function BetaSignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [device, setDevice] = useState<Device | "">("");
  const [role, setRole] = useState<BetaRole | "">("");
  const [googleEmail, setGoogleEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState(false);
  const [done, setDone] = useState<{ device: Device; firstName: string } | null>(null);

  const errors = {
    name: name.trim().length < 2 ? "Please enter your name." : "",
    email: !EMAIL_RE.test(email.trim()) ? "Please enter a valid email address." : "",
    location: location.trim().length < 2 ? "Please enter your city." : "",
    device: device === "" ? "Please pick your phone type." : "",
    role: role === "" ? "Please pick one." : "",
    googleEmail:
      device === "Android" && googleEmail.trim() !== "" && !EMAIL_RE.test(googleEmail.trim())
        ? "Please enter a valid Google account email."
        : "",
    agreed: !agreed ? "Please agree to the Beta Tester Terms." : "",
  };

  const isValid = Object.values(errors).every((e) => e === "");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!isValid || device === "") return;
    setStatus("sending");

    try {
      const res = await fetch("/api/beta-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          location: location.trim(),
          device,
          role,
          googleEmail: device === "Android" ? (googleEmail.trim() || email.trim()) : "",
          agreedToTerms: agreed,
        }),
      });

      if (res.ok) {
        setDone({ device, firstName: name.trim().split(/\s+/)[0] ?? "" });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success" && done) {
    return done.device === "iOS" ? (
      <SuccessIOS firstName={done.firstName} />
    ) : (
      <SuccessAndroid firstName={done.firstName} />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 w-full max-w-md mx-auto text-left" noValidate>
      {/* Name */}
      <div className="grid gap-1.5">
        <label className={labelClass} htmlFor="beta-name">
          Name <span className="text-[#00B3A4]">*</span>
        </label>
        <input
          id="beta-name"
          type="text"
          autoComplete="name"
          className={inputClass(touched && !!errors.name)}
          placeholder="Your name or stage name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {touched && errors.name && <FieldError msg={errors.name} />}
      </div>

      {/* Email */}
      <div className="grid gap-1.5">
        <label className={labelClass} htmlFor="beta-email">
          Email <span className="text-[#00B3A4]">*</span>
        </label>
        <input
          id="beta-email"
          type="email"
          autoComplete="email"
          inputMode="email"
          className={inputClass(touched && !!errors.email)}
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {touched && errors.email && <FieldError msg={errors.email} />}
      </div>

      {/* Location */}
      <div className="grid gap-1.5">
        <label className={labelClass} htmlFor="beta-location">
          City <span className="text-[#00B3A4]">*</span>
        </label>
        <input
          id="beta-location"
          type="text"
          autoComplete="address-level2"
          className={inputClass(touched && !!errors.location)}
          placeholder="Portland, OR"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {touched && errors.location && <FieldError msg={errors.location} />}
      </div>

      {/* Role */}
      <div className="grid gap-2">
        <p className={labelClass}>
          I&apos;m mostly a… <span className="text-[#00B3A4]">*</span>
        </p>
        <div className="grid grid-cols-2 gap-3">
          {BETA_ROLES.map((r) => (
            <button
              key={r}
              type="button"
              aria-pressed={role === r}
              onClick={() => setRole(r)}
              className={`py-3 rounded-xl border text-sm font-semibold transition ${
                role === r
                  ? "border-[#00B3A4] bg-[#00B3A4]/15 text-[#00B3A4]"
                  : touched && errors.role
                  ? "border-red-400 bg-white/5 text-white/50"
                  : "border-white/15 bg-white/5 text-white/50 hover:border-white/30 hover:text-white/80"
              }`}
            >
              {r === "Fan" ? "🎟️  Fan" : r === "Talent" ? "💃  Performer / crew" : r === "Host" ? "🎪  Host / venue" : "✨  Just curious"}
            </button>
          ))}
        </div>
        {touched && errors.role && <FieldError msg={errors.role} />}
      </div>

      {/* Device */}
      <div className="grid gap-2">
        <p className={labelClass}>
          Phone <span className="text-[#00B3A4]">*</span>
        </p>
        <div className="grid grid-cols-2 gap-3">
          {(["iOS", "Android"] as const).map((d) => (
            <button
              key={d}
              type="button"
              aria-pressed={device === d}
              onClick={() => setDevice(d)}
              className={`py-3 rounded-xl border text-sm font-semibold transition ${
                device === d
                  ? "border-[#00B3A4] bg-[#00B3A4]/15 text-[#00B3A4]"
                  : touched && errors.device
                  ? "border-red-400 bg-white/5 text-white/50"
                  : "border-white/15 bg-white/5 text-white/50 hover:border-white/30 hover:text-white/80"
              }`}
            >
              {d === "iOS" ? "🍎  iPhone" : "🤖  Android"}
            </button>
          ))}
        </div>
        {touched && errors.device && <FieldError msg={errors.device} />}
      </div>

      {/* Google account (Android only) */}
      {device === "Android" && (
        <div className="grid gap-1.5">
          <label className={labelClass} htmlFor="beta-google-email">
            Google account on your phone
          </label>
          <input
            id="beta-google-email"
            type="email"
            inputMode="email"
            className={inputClass(touched && !!errors.googleEmail)}
            placeholder="Only if it's different from the email above"
            value={googleEmail}
            onChange={(e) => setGoogleEmail(e.target.value)}
          />
          <p className="text-white/35 text-xs">Google Play invites testers by the Gmail/Google account signed in to the phone.</p>
          {touched && errors.googleEmail && <FieldError msg={errors.googleEmail} />}
        </div>
      )}

      {/* Terms */}
      <label className="flex items-start gap-3 cursor-pointer mt-1">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#00B3A4]"
        />
        <span className={`text-sm leading-relaxed ${touched && errors.agreed ? "text-red-400" : "text-white/60"}`}>
          I agree to the{" "}
          <a
            href={SEQUINS_BETA.termsPath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00B3A4] underline underline-offset-2"
          >
            Beta Tester Terms
          </a>
          . Short version: it&apos;s a beta, payments are test-only, and sharing is welcome.
        </span>
      </label>

      {/* API Error */}
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Email us directly at{" "}
          <a href={`mailto:${SEQUINS_BETA.contactEmail}`} className="underline">
            {SEQUINS_BETA.contactEmail}
          </a>
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-full py-3.5 rounded-full bg-[#00B3A4] text-black font-bold text-sm hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Signing you up…" : "Join the beta →"}
      </button>
    </form>
  );
}

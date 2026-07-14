"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputClass = (hasError: boolean) =>
  `w-full rounded-xl border ${hasError ? "border-red-400" : "border-white/15"} bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-[#00B3A4]/40 transition text-sm`;

function FieldError({ msg }: { msg: string }) {
  return <p className="text-red-400 text-xs mt-1">{msg}</p>;
}

export default function BetaSignupForm() {
  const [name,     setName]     = useState("");
  const [email,    setEmail]    = useState("");
  const [location, setLocation] = useState("");
  const [device,   setDevice]   = useState<"iOS" | "Android" | "">("");
  const [status,   setStatus]   = useState<Status>("idle");
  const [touched,  setTouched]  = useState(false);

  const errors = {
    name:     name.trim().length < 2     ? "Please enter your full name."          : "",
    email:    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Please enter a valid email address." : "",
    location: location.trim().length < 2 ? "Please enter your city or location."   : "",
    device:   device === ""              ? "Please select your device type."        : "",
  };

  const isValid = Object.values(errors).every((e) => e === "");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    setStatus("sending");

    try {
      const res = await fetch("/api/beta-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, location, device }),
      });

      if (res.ok) {
        setStatus("success");
        setName(""); setEmail(""); setLocation(""); setDevice(""); setTouched(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#00B3A4]/30 bg-[#00B3A4]/5 p-10 text-center max-w-md mx-auto">
        <div className="text-4xl mb-4">✦</div>
        <h3 className="text-white font-bold text-xl mb-2">You&apos;re on the list!</h3>
        <p className="text-white/50 text-sm leading-relaxed">
          We&apos;ll reach out as soon as Sequins is live in the app stores. Get ready — the show is almost on.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 w-full max-w-md mx-auto text-left"
    >
      {/* Name */}
      <div className="grid gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-white/40" htmlFor="beta-name">
          Full Name <span className="text-[#00B3A4]">*</span>
        </label>
        <input
          id="beta-name"
          type="text"
          className={inputClass(touched && !!errors.name)}
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {touched && errors.name && <FieldError msg={errors.name} />}
      </div>

      {/* Email */}
      <div className="grid gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-white/40" htmlFor="beta-email">
          Email <span className="text-[#00B3A4]">*</span>
        </label>
        <input
          id="beta-email"
          type="email"
          className={inputClass(touched && !!errors.email)}
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {touched && errors.email && <FieldError msg={errors.email} />}
      </div>

      {/* Location */}
      <div className="grid gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-white/40" htmlFor="beta-location">
          City / Location <span className="text-[#00B3A4]">*</span>
        </label>
        <input
          id="beta-location"
          type="text"
          className={inputClass(touched && !!errors.location)}
          placeholder="Portland, OR"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {touched && errors.location && <FieldError msg={errors.location} />}
      </div>

      {/* Device */}
      <div className="grid gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
          Device <span className="text-[#00B3A4]">*</span>
        </p>
        <div className="grid grid-cols-2 gap-3">
          {(["iOS", "Android"] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDevice(d)}
              className={`py-3 rounded-xl border text-sm font-semibold transition ${
                device === d
                  ? "border-[#00B3A4] bg-[#00B3A4]/15 text-[#00B3A4]"
                  : touched && errors.device
                  ? "border-red-400 bg-white/5 text-white/50"
                  : "border-white/15 bg-white/5 text-white/50 hover:border-white/30 hover:text-white/80"
              }`}
            >
              {d === "iOS" ? "🍎  iPhone / iPad" : "🤖  Android"}
            </button>
          ))}
        </div>
        {touched && errors.device && <FieldError msg={errors.device} />}
      </div>

      {/* API Error */}
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Email us directly at{" "}
          <a href="mailto:bradleydion@thebradleyproject.com" className="underline">
            bradleydion@thebradleyproject.com
          </a>
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-full py-3.5 rounded-full bg-[#00B3A4] text-black font-bold text-sm hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Signing up…" : "Sign Up for Beta →"}
      </button>
    </form>
  );
}

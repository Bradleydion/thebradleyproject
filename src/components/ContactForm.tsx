"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const REASONS = [
  "General Inquiry",
  "Collaboration",
  "Sequins App",
  "Hire Me",
  "Press / Media",
  "Book / Poetry",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-tbp-border bg-tbp-surface px-4 py-3 text-tbp-soft placeholder:text-tbp-muted outline-none focus:ring-2 focus:ring-tbp-teal/40 transition text-sm";

export default function ContactForm() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [reason,  setReason]  = useState("");
  const [social,  setSocial]  = useState("");
  const [message, setMessage] = useState("");
  const [status,  setStatus]  = useState<Status>("idle");

  const isValid =
    name.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    message.trim().length > 5;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, reason, social, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName(""); setEmail(""); setReason(""); setSocial(""); setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-tbp-teal/30 bg-tbp-teal/5 p-8 text-center">
        <div className="text-3xl mb-3">✦</div>
        <h3 className="text-tbp-soft font-bold text-lg mb-2">Message sent!</h3>
        <p className="text-tbp-muted text-sm">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 px-5 py-2.5 rounded-full border border-tbp-border text-tbp-muted hover:text-tbp-soft transition text-sm"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      {/* Row 1: Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="grid gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-widest text-tbp-muted" htmlFor="name">
            Your Name <span className="text-tbp-rose">*</span>
          </label>
          <input
            id="name"
            type="text"
            className={inputClass}
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-widest text-tbp-muted" htmlFor="email">
            Email <span className="text-tbp-rose">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Row 2: Reason + Social */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="grid gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-widest text-tbp-muted" htmlFor="reason">
            Reason for Reaching Out
          </label>
          <select
            id="reason"
            className={inputClass}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          >
            <option value="">Select one…</option>
            {REASONS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-widest text-tbp-muted" htmlFor="social">
            Social Handle <span className="text-tbp-muted font-normal">(optional)</span>
          </label>
          <input
            id="social"
            type="text"
            className={inputClass}
            placeholder="@yourusername"
            value={social}
            onChange={(e) => setSocial(e.target.value)}
          />
        </div>
      </div>

      {/* Message */}
      <div className="grid gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-tbp-muted" htmlFor="message">
          Message <span className="text-tbp-rose">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          className={`${inputClass} resize-y`}
          placeholder="Tell me about your project, idea, or what you're working on…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-tbp-rose text-sm">
          Something went wrong. Try emailing directly: <a href="mailto:thebradleyprojectllc@gmail.com" className="underline">thebradleyprojectllc@gmail.com</a>
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={!isValid || status === "sending"}
        className="px-6 py-3.5 rounded-full bg-tbp-teal text-tbp-bg font-semibold text-sm hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
    </form>
  );
}

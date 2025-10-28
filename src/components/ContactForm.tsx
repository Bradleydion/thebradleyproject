"use client";

import { useMemo, useState } from "react";

const EMAIL = "hello@thebradleyproject.com"; // change if needed

export default function ContactForm() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  

  const isValid = useMemo(() => {
    // simple validation: name + message + (email OR subject)
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from);
    return name.trim().length > 1 && message.trim().length > 5 && (emailOk || subject.trim().length > 2);
  }, [name, from, subject, message]);

  const encodedMailto = useMemo(() => {
    const parts = [
      subject ? `subject=${encodeURIComponent(subject)}` : `subject=${encodeURIComponent("Contact from The Bradley Project")}`,
      `body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${from || "(not provided)"}\n\n${message}`
      )}`,
    ].join("&");
    return `mailto:${EMAIL}?${parts}`;
  }, [name, from, subject, message]);

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = encodedMailto; // opens email client
      }}
    >
      <div className="grid gap-1">
        <label className="text-sm opacity-80" htmlFor="name">Your name</label>
        <input
          id="name"
          type="text"
          className="rounded-xl border border-tbp-ink/20 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-tbp-ink/20"
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="grid gap-1">
        <label className="text-sm opacity-80" htmlFor="email">Your email</label>
        <input
          id="email"
          type="email"
          className="rounded-xl border border-tbp-ink/20 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-tbp-ink/20"
          placeholder="you@example.com"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <p className="text-xs opacity-70">Optional, but helpful if you want a reply.</p>
      </div>

      <div className="grid gap-1">
        <label className="text-sm opacity-80" htmlFor="subject">Subject</label>
        <input
          id="subject"
          type="text"
          className="rounded-xl border border-tbp-ink/20 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-tbp-ink/20"
          placeholder="Project inquiry, collaboration, etc."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="grid gap-1">
        <label className="text-sm opacity-80" htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={6}
          className="rounded-xl border border-tbp-ink/20 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-tbp-ink/20 resize-y"
          placeholder="Tell me a bit about your project, timeline, and goals…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      {/* actions */}
      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={!isValid}
          className="px-5 py-3 rounded-full bg-tbp-ink text-tbp-soft disabled:opacity-50"
          title={isValid ? "" : "Please fill in your name and a brief message"}
        >
          Open in Email
        </button>

        <button
          type="button"
          onClick={async () => {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="px-5 py-3 rounded-full border border-tbp-ink hover:bg-tbp-ink/5 transition"
        >
          {copied ? "Copied!" : "Copy Email"}
        </button>
      </div>

      {/* unobtrusive anti-spam honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
    </form>
  );
}
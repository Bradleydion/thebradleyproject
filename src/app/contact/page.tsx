import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — The Bradley Project",
  description: "Get in touch with The Bradley Project — collaborations, Sequins, creative services, or general inquiries.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12">
        <p className="text-tbp-teal text-xs font-bold uppercase tracking-widest mb-3">Get In Touch</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Let&apos;s build something.
        </h1>
        <p className="text-tbp-muted text-lg max-w-xl">
          Collaborations, Sequins partnerships, creative services, press inquiries — or just to say hello.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr,1.6fr]">
        {/* Info column */}
        <aside className="flex flex-col gap-6 h-max">
          {/* Direct contact */}
          <div className="rounded-2xl border border-tbp-border bg-tbp-surface p-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-tbp-muted mb-4">Direct</h2>
            <a
              href="mailto:bradleydion@thebradleyproject.com"
              className="text-tbp-soft hover:text-tbp-teal transition text-sm break-all"
            >
              bradleydion@thebradleyproject.com
            </a>
            <p className="text-tbp-muted text-xs mt-2">Portland, OR · Pacific Time</p>
          </div>

          {/* Social */}
          <div className="rounded-2xl border border-tbp-border bg-tbp-surface p-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-tbp-muted mb-4">Follow Along</h2>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Instagram", href: "https://www.instagram.com/thebradleyproject" },
                { label: "GitHub",    href: "https://github.com/Bradleydion" },
                { label: "YouTube",   href: "https://www.youtube.com/@BKBookClub" },
                { label: "Facebook",  href: "https://www.facebook.com/search/top?q=the%20bradley%20project%20" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tbp-muted hover:text-tbp-soft transition text-sm flex items-center gap-2 group"
                  >
                    <span className="text-tbp-teal group-hover:translate-x-0.5 transition-transform">→</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Résumé */}
          <div className="rounded-2xl border border-tbp-border bg-tbp-surface p-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-tbp-muted mb-4">Résumé</h2>
            <div className="flex gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-tbp-teal text-tbp-bg text-sm font-semibold hover:opacity-90 transition"
              >
                Open PDF
              </a>
              <a
                href="/resume"
                className="px-4 py-2 rounded-full border border-tbp-border text-tbp-muted hover:text-tbp-soft hover:border-tbp-muted transition text-sm"
              >
                Preview
              </a>
            </div>
          </div>
        </aside>

        {/* Form column */}
        <div className="rounded-2xl border border-tbp-border bg-tbp-surface p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-display">Contact</h1>
      <p className="mt-3 max-w-2xl">
        I’d love to hear from you — collaborations, editorial work, poetry, app ideas, or general inquiries.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-[1fr,1.2fr]">
        {/* Info column */}
        <aside className="rounded-2xl border border-tbp-ink/10 bg-tbp-soft/40 p-6 h-max">
          <h2 className="text-lg font-semibold font-display">Reach me</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              Email: <a className="underline" href="mailto:hello@thebradleyproject.com">hello@thebradleyproject.com</a>
            </li>
            <li>Portland, OR (Pacific Time)</li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold font-display">Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="underline" href="https://github.com/Bradleydion" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a className="underline" href="https://www.youtube.com/@BKBookClub" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a className="underline" href="https://www.instagram.com/thebradleyproject" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a className="underline" href="https://www.facebook.com/search/top?q=the%20bradley%20project%20" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold font-display">Résumé</h3>
          <div className="mt-3 flex gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-tbp-ink text-tbp-soft"
            >
              Open PDF
            </a>
            <a
              href="/resume"
              className="px-4 py-2 rounded-full border border-tbp-ink hover:bg-tbp-ink/5"
            >
              Preview
            </a>
          </div>
        </aside>

        {/* Form column */}
        <div className="rounded-2xl border border-tbp-ink/10 bg-white/70 p-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
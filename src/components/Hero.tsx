export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="relative">
          {/* Backdrop monogram (now positioned behind) */}
          <div
            aria-hidden
            className="absolute -top-8 left-0 -z-10 pointer-events-none select-none text-[clamp(3rem,16vw,10rem)] leading-none font-display text-tbp-soft/40"
          >
            TBP
          </div>

          {/* Script title */}
          <h1 className="font-script text-[clamp(2.25rem,6vw,4.5rem)] animate-fadeUp">
            The Bradley Project
          </h1>
        </div>

        {/* Tagline */}
        <p
          className="mt-6 max-w-2xl text-lg animate-fadeUp"
          style={{ animationDelay: "120ms" }}
        >
          Writer, maker, and builder of worlds. Poetry, fantasy, apps, and creative direction.
        </p>

        {/* CTAs */}
        <div
          className="mt-8 flex flex-wrap gap-4 animate-fadeUp"
          style={{ animationDelay: "220ms" }}
        >
          <a
            href="/projects"
            className="px-5 py-3 rounded-full bg-tbp-ink text-tbp-soft hover:opacity-90 transition"
          >
            Explore Work
          </a>
          <a
            href="/about"
            className="px-5 py-3 rounded-full border border-tbp-ink hover:bg-tbp-ink/5 transition"
          >
            About
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="/projects"
        className="absolute left-1/2 -translate-x-1/2 bottom-6 inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" className="animate-float" aria-hidden>
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        See the work
      </a>
    </section>
  );
}
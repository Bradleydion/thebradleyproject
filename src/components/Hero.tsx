export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background glow orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-tbp-violet opacity-[0.06] blur-[120px]" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-tbp-teal opacity-[0.05] blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 w-[300px] h-[300px] rounded-full bg-tbp-rose opacity-[0.04] blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">

        {/* Phase badge */}
        <div className="mb-8 animate-fadeIn" style={{ animationDelay: "0ms" }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-tbp-teal/30 bg-tbp-teal/10 px-4 py-1.5 text-tbp-teal text-xs font-semibold uppercase tracking-widest">
            <span>✦</span>
            Phase 1 — Now Building
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fadeUp text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold leading-[1.0] tracking-tight max-w-4xl"
          style={{ animationDelay: "80ms" }}
        >
          Where queer stories,{" "}
          <span className="gradient-text">bold ideas,</span>
          <br />
          and creative tools
          <br />
          come to life.
        </h1>

        {/* Subheading */}
        <p
          className="mt-8 max-w-2xl text-tbp-muted text-lg sm:text-xl leading-relaxed animate-fadeUp"
          style={{ animationDelay: "160ms" }}
        >
          The Bradley Project is a queer-led creative company — part publishing house, part tech studio, part community hub. We build products and tell stories that center the people big media leaves out.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap gap-4 animate-fadeUp"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="/sequins"
            className="px-6 py-3.5 rounded-full bg-tbp-teal text-tbp-bg font-semibold hover:opacity-90 transition text-sm"
          >
            Explore Sequins — Phase 1 →
          </a>
          <a
            href="/projects"
            className="px-6 py-3.5 rounded-full border border-tbp-border text-tbp-soft hover:border-tbp-muted transition text-sm"
          >
            See All Work
          </a>
        </div>

        {/* Phase roadmap strip */}
        <div
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px border border-tbp-border rounded-2xl overflow-hidden animate-fadeUp"
          style={{ animationDelay: "320ms" }}
        >
          {[
            { phase: "Phase 1", label: "Sequins App", active: true },
            { phase: "Phase 2", label: "Publishing & Books", active: false },
            { phase: "Phase 3", label: "Creative Services", active: false },
            { phase: "Phase 4", label: "Physical Hub", active: false },
          ].map((p) => (
            <div
              key={p.phase}
              className={`px-5 py-4 flex flex-col gap-1 ${
                p.active
                  ? "bg-tbp-teal/10 border-r border-tbp-teal/20 last:border-r-0"
                  : "bg-tbp-surface border-r border-tbp-border last:border-r-0"
              }`}
            >
              <span
                className={`text-[10px] font-bold uppercase tracking-widest ${
                  p.active ? "text-tbp-teal" : "text-tbp-muted"
                }`}
              >
                {p.phase}
              </span>
              <span className={`text-sm font-medium ${p.active ? "text-tbp-soft" : "text-tbp-muted"}`}>
                {p.label}
              </span>
              {p.active && (
                <span className="mt-1 inline-flex items-center gap-1 text-[10px] text-tbp-teal font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-tbp-teal animate-pulse" />
                  In Progress
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

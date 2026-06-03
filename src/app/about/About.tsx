export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">

      {/* Hero */}
      <div className="mb-16 max-w-3xl">
        <p className="text-tbp-teal text-xs font-bold uppercase tracking-widest mb-4">About</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
          Building the company
          <br />
          <span className="gradient-text">I always needed.</span>
        </h1>
        <p className="text-tbp-muted text-lg leading-relaxed">
          I&apos;m Bradley Dion — writer, builder, and founder of The Bradley Project. I&apos;m queer, I&apos;m based in Portland, and I started this company because the creative tools and spaces I needed didn&apos;t exist. So I&apos;m building them.
        </p>
      </div>

      <div className="h-px bg-tbp-border mb-16" />

      {/* What we are */}
      <div className="grid gap-12 md:grid-cols-2 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">What The Bradley Project is</h2>
          <p className="text-tbp-muted leading-relaxed mb-4">
            The Bradley Project is a queer-led creative company. Part publishing imprint, part tech studio, part community infrastructure. The name started as a personal brand for my writing — and it grew into something much bigger.
          </p>
          <p className="text-tbp-muted leading-relaxed">
            Every product, book, app, and service under this umbrella exists to support artists, writers, performers, and small business owners who are building something real — especially those the mainstream creative industry tends to overlook.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">What we&apos;re building toward</h2>
          <p className="text-tbp-muted leading-relaxed mb-4">
            The long-term dream is a physical and digital creative hub in Portland — coworking for creatives, on-site publishing resources, a coffee shop, studio space, and a full media and marketing division. A place where queer entrepreneurs and artists can build without having to go elsewhere for support.
          </p>
          <p className="text-tbp-muted leading-relaxed">
            That&apos;s Phase 4. Right now we&apos;re in Phase 1.
          </p>
        </div>
      </div>

      {/* Phase roadmap */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">The roadmap</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              phase: "Phase 1",
              label: "Sequins App",
              status: "Now",
              active: true,
              desc: "A mobile platform built for LGBTQIA+ events — drag shows, Pride celebrations, queer parties. Discovery, ticketing, booking, and community in one place.",
            },
            {
              phase: "Phase 2",
              label: "Publishing & Books",
              status: "Next",
              active: false,
              desc: "Formalizing The Bradley Project as a publishing imprint. Launching The Syn trilogy, building an author platform, and creating a reader community.",
            },
            {
              phase: "Phase 3",
              label: "Creative Services",
              status: "Coming",
              active: false,
              desc: "Editing, author branding, social media strategy, and marketing support — built for indie authors, drag performers, and queer small businesses.",
            },
            {
              phase: "Phase 4",
              label: "Physical Hub",
              status: "The Dream",
              active: false,
              desc: "A queer-led creative space in Portland. Coworking, publishing resources, a coffee shop, studio space, and a full community ecosystem.",
            },
          ].map((p) => (
            <div
              key={p.phase}
              className={`rounded-2xl border p-6 flex flex-col gap-3 ${
                p.active
                  ? "border-tbp-teal/30 bg-tbp-teal/5"
                  : "border-tbp-border bg-tbp-surface"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${p.active ? "text-tbp-teal" : "text-tbp-muted"}`}>
                  {p.phase}
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${
                  p.active
                    ? "border-tbp-teal/40 text-tbp-teal bg-tbp-teal/10"
                    : "border-tbp-border text-tbp-muted"
                }`}>
                  {p.status}
                </span>
              </div>
              <p className={`font-bold text-base ${p.active ? "text-tbp-soft" : "text-tbp-muted"}`}>{p.label}</p>
              <p className="text-tbp-muted text-xs leading-relaxed">{p.desc}</p>
              {p.active && (
                <div className="flex items-center gap-1.5 text-[10px] text-tbp-teal font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-tbp-teal animate-pulse" />
                  In Progress
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-tbp-border mb-16" />

      {/* What I do */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">What I do</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: "📖",
              title: "Writing & Publishing",
              body: "I've published four poetry collections and a debut novel under The Bradley Project imprint. My fiction is currently in development — starting with The Syn, an adult contemporary fantasy trilogy.",
            },
            {
              icon: "📱",
              title: "Product Development",
              body: "I'm building Sequins — a mobile app for LGBTQIA+ events — from the ground up. Design, development, community outreach. It's the tech engine of everything we're doing.",
            },
            {
              icon: "🎥",
              title: "Content & Community",
              body: "BK Book Club on YouTube, photography, social media storytelling. Building in public, sharing the process, and connecting with the communities this work is made for.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-tbp-border bg-tbp-surface p-6">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-tbp-soft mb-2">{item.title}</h3>
              <p className="text-tbp-muted text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-tbp-border bg-tbp-surface p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3 className="font-bold text-xl mb-1">Want to work together?</h3>
          <p className="text-tbp-muted text-sm">Collaborations, Sequins partnerships, creative services — let&apos;s talk.</p>
        </div>
        <a
          href="/contact"
          className="shrink-0 px-6 py-3 rounded-full bg-tbp-teal text-tbp-bg font-semibold text-sm hover:opacity-90 transition"
        >
          Get in Touch →
        </a>
      </div>
    </div>
  );
}

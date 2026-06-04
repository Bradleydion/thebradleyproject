// src/app/projects/page.tsx

// ── Sequins featured hero card ─────────────────────────────────────────────
function SequinsFeatured() {
  return (
    <a
      href="/sequins"
      className="group relative block w-full rounded-3xl overflow-hidden border border-tbp-border hover:border-tbp-teal/40 transition-all duration-500"
      style={{ background: "linear-gradient(135deg, #0D0D1A 0%, #0A0A0F 60%, #130D1A 100%)" }}
    >
      <div aria-hidden className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: "linear-gradient(90deg, #FF0018, #FF8C00, #FFD700, #00B347, #0000FF, #8B00FF)" }} />
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-tbp-violet blur-[100px] opacity-10" />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 px-8 md:px-12 py-12">
        <div className="flex-1 text-white">
          <div className="inline-flex items-center gap-2 text-tbp-teal text-xs font-bold uppercase tracking-widest mb-5">
            <span>✦</span><span>Phase 1 — Flagship App</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">Sequins</h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-md mb-8">
            Event planning made joyful for the LGBTQIA+ community. Find your people, celebrate together, and put on the best night of the year — all in one place.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { label: "Pride Events", color: "#FF8C00" },
              { label: "Drag Shows",   color: "#8B00FF" },
              { label: "Community",    color: "#00C4B4" },
              { label: "Celebrations", color: "#F43F5E" },
              { label: "Safe Spaces",  color: "#00B347" },
            ].map((t) => (
              <span key={t.label} className="px-3 py-1 rounded-full text-xs font-semibold border"
                style={{ borderColor: `${t.color}40`, color: t.color, backgroundColor: `${t.color}12` }}>
                {t.label}
              </span>
            ))}
          </div>
          <div className="inline-flex items-center gap-2 text-tbp-teal font-semibold text-sm group-hover:gap-3 transition-all duration-300">
            Learn more about Sequins <span aria-hidden>→</span>
          </div>
        </div>
        <div className="shrink-0 hidden sm:flex flex-col items-center justify-center w-[160px] h-[300px] rounded-[2rem] border border-white/10 gap-4 px-4"
          style={{ background: "linear-gradient(180deg, #1A0A2E 0%, #0A0A0F 100%)" }}>
          <div className="w-16 rounded overflow-hidden flex flex-col">
            {["#FF0018","#FF8C00","#FFD700","#00B347","#0000FF","#8B00FF"].map(c => (
              <div key={c} className="h-2" style={{ backgroundColor: c }} />
            ))}
          </div>
          <p className="text-white text-xs font-bold tracking-widest uppercase text-center">Sequins</p>
          <p className="text-white/40 text-[10px] text-center leading-relaxed">For the community, by the community</p>
        </div>
      </div>
    </a>
  );
}

// ── Section divider ────────────────────────────────────────────────────────
function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div>
        <span className="text-tbp-teal text-[10px] font-bold uppercase tracking-widest block mb-0.5">{label}</span>
        <span className="text-tbp-soft font-bold text-lg">{title}</span>
      </div>
      <div className="flex-1 h-px bg-tbp-border" />
    </div>
  );
}

// ── Book cover card ────────────────────────────────────────────────────────
function BookCard({ title, img, href }: { title: string; img: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-tbp-border hover:border-tbp-muted transition-all duration-300 hover:-translate-y-1"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt={title}
        className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      {/* Amazon badge on hover */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-[#FF9900] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">Amazon →</span>
      </div>
      <div className="absolute bottom-0 p-4">
        <p className="text-white font-semibold text-sm leading-snug">{title}</p>
      </div>
    </a>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function Projects() {
  const poetry = [
    { title: "The Bradley Project Vol. 1", img: "/images/poems1.jpg",  href: "https://www.amazon.com/Bradley-Project-V-1-Fractured-Collection/dp/B08RRFXNJ2/ref=sr_1_10?dib=eyJ2IjoiMSJ9.8IrH8y1sOedhim0Bzz7AL484flzgMC7674j8aaFWJZUZ4Ul6vorwIYibHoW2pVES_1uWgeUOZRBJsr4HrDDSf0jlPOH4OqQoD2X0egG9Rb4.g0PF8rf42fZHBT0NuLVQnRPvMLtJXdq19PFyLWKexx8&dib_tag=se&qid=1761682477&refinements=p_27%3ABradley+Dion&s=books&sr=1-10&text=Bradley+Dion" },
    { title: "The Bradley Project Vol. 2", img: "/images/poems2.jpg",  href: "https://www.amazon.com/Bradley-Project-2-Obscurity/dp/B09X1RDJH4/ref=sr_1_4?dib=eyJ2IjoiMSJ9.8IrH8y1sOedhim0Bzz7AL484flzgMC7674j8aaFWJZUZ4Ul6vorwIYibHoW2pVES_1uWgeUOZRBJsr4HrDDSf0jlPOH4OqQoD2X0egG9Rb4.g0PF8rf42fZHBT0NuLVQnRPvMLtJXdq19PFyLWKexx8&dib_tag=se&qid=1761682477&refinements=p_27%3ABradley+Dion&s=books&sr=1-4&text=Bradley+Dion" },
    { title: "The Bradley Project Vol. 3", img: "/images/poems3.jpg",  href: "https://www.amazon.com/Bradley-Project-Mending-Whats-Broken/dp/B0CQX6S55S/ref=sr_1_5?dib=eyJ2IjoiMSJ9.8IrH8y1sOedhim0Bzz7AL484flzgMC7674j8aaFWJZUZ4Ul6vorwIYibHoW2pVES_1uWgeUOZRBJsr4HrDDSf0jlPOH4OqQoD2X0egG9Rb4.g0PF8rf42fZHBT0NuLVQnRPvMLtJXdq19PFyLWKexx8&dib_tag=se&qid=1761682335&refinements=p_27%3ABradley+Dion&s=books&sr=1-5&text=Bradley+Dion" },
    { title: "The Bradley Project Vol. 4", img: "/images/poetry4.png", href: "https://www.amazon.com/Bradley-Project-Make-Worth/dp/B0FZSGTX1G/ref=sr_1_1?crid=2F05Q32GVE9MC&dib=eyJ2IjoiMSJ9.aCjex1-SzG6LOUdoj8_ODSsOrUVqQOnbUugWhDDy9KQq3voKxEzlug_nF0p4Nw33fi77RpJRlaHG2gM5J4dpJGT2jqrARuFwWEFne62MVcoZ6WcNcMklIgzIoA3Cx1NgBHGYXaImYqGeYGRvALsUCg.L2a0QdbMdGi5DGaOt1G2WEcejmziNIIXi3SsH17b3UM&dib_tag=se&keywords=The+Bradley+Project+Volume+4&qid=1762456388&sprefix=the+bradley+project+volume+4%2Caps%2C162&sr=8-1" },
  ];

  const fiction = [
    { title: "Letters From Dale", img: "/images/fantasy.jpeg", href: "https://www.amazon.com/Letters-Dale-Bradley-Dion-ebook/dp/B0FTY7DGJ7/ref=sr_1_6?dib=eyJ2IjoiMSJ9.8IrH8y1sOedhim0Bzz7AL7Xoq9PReyqUBwS54iV1OD5uSF4M8rzypWJzPSxzqPuIgoGRhbFBxsdZGUDz1Q9CnUzMvxKO8iggLP1GaTCa0KrLTSprRBCAnUU8mYarD_Dh.-hjmGgzbMGzQ_p-jg-fd64ygeVd7MuysTxWijJZcj3k&dib_tag=se&qid=1762456435&refinements=p_27%3ABradley+Dion&s=books&sr=1-6&text=Bradley+Dion" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {/* Page header */}
      <div className="mb-12">
        <p className="text-tbp-teal text-xs font-bold uppercase tracking-widest mb-3">All Work</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">What we&apos;re building.</h1>
        <p className="text-tbp-muted text-lg max-w-xl">
          Books, apps, content, and community. Everything under The Bradley Project umbrella.
        </p>
      </div>

      {/* ── Apps ─────────────────────────────────────────────────────────── */}
      <SectionHeader label="Apps" title="Digital Products" />
      <div className="mb-14">
        <SequinsFeatured />
      </div>

      {/* ── Photography ──────────────────────────────────────────────────── */}
      <SectionHeader label="Visual" title="Photography" />
      <a
        href="/photography"
        className="group relative block w-full rounded-2xl overflow-hidden border border-tbp-border hover:border-tbp-violet/40 transition-all duration-300 mb-14"
        style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #0D0A1A 100%)" }}
      >
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 px-8 py-10">
          <div className="shrink-0 hidden sm:grid grid-cols-3 gap-1.5 w-48">
            {[1,2,3,4,5,6].map(n => (
              <div key={n} className={`rounded-lg bg-tbp-border/80 ${n === 1 ? "col-span-2 aspect-[4/3]" : "aspect-square"}`} />
            ))}
          </div>
          <div className="flex-1 text-white">
            <div className="inline-flex items-center gap-2 text-tbp-violet text-xs font-bold uppercase tracking-widest mb-4">
              <span>✦</span><span>Photography</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">Through the lens.</h2>
            <p className="text-white/50 text-base leading-relaxed max-w-md mb-6">
              Weddings, events, portraits, and moments. An ongoing collection of work from the field.
            </p>
            <div className="inline-flex items-center gap-2 text-tbp-violet font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              View gallery <span aria-hidden>→</span>
            </div>
          </div>
        </div>
      </a>

      {/* ── Poetry ───────────────────────────────────────────────────────── */}
      <SectionHeader label="Publishing" title="Poetry Collections" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
        {poetry.map(b => <BookCard key={b.title} {...b} />)}
      </div>

      {/* ── Fiction ──────────────────────────────────────────────────────── */}
      <SectionHeader label="Publishing" title="Fiction" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
        {/* Featured fiction card — wider */}
        <a
          href={fiction[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="group sm:col-span-2 relative block overflow-hidden rounded-2xl border border-tbp-border hover:border-tbp-muted transition-all duration-300"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fiction[0].img} alt={fiction[0].title}
            className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-[#FF9900] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">Amazon →</span>
          </div>
          <div className="absolute bottom-0 p-5">
            <p className="text-tbp-teal text-[10px] font-bold uppercase tracking-widest mb-1">Debut Novel</p>
            <p className="text-white font-bold text-xl">{fiction[0].title}</p>
          </div>
        </a>

        {/* Coming soon — The Syn */}
        <div className="relative block overflow-hidden rounded-2xl border border-tbp-border bg-tbp-surface flex flex-col items-center justify-center p-8 text-center gap-3">
          <span className="text-tbp-violet text-[10px] font-bold uppercase tracking-widest">Coming Soon</span>
          <p className="text-tbp-soft font-bold text-lg leading-snug">The Syn</p>
          <p className="text-tbp-muted text-xs leading-relaxed">An adult contemporary fantasy trilogy. Currently in development.</p>
          <div className="w-8 h-0.5 bg-tbp-violet/40 rounded-full mt-1" />
        </div>
      </div>

      {/* ── Content & Code ───────────────────────────────────────────────── */}
      <SectionHeader label="Content & Code" title="Other Work" />
      <div className="grid sm:grid-cols-2 gap-4">
        {/* BK Book Club */}
        <a
          href="https://www.youtube.com/@BKBookClub"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-2xl border border-tbp-border hover:border-tbp-muted transition-all duration-300"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bookclub.png" alt="BK Book Club"
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">YouTube →</span>
          </div>
          <div className="absolute bottom-0 p-5">
            <p className="text-tbp-teal text-[10px] font-bold uppercase tracking-widest mb-1">YouTube</p>
            <p className="text-white font-bold text-base">BK Book Club</p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Bradleydion"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-2xl border border-tbp-border hover:border-tbp-muted transition-all duration-300 bg-tbp-surface"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/website.png" alt="GitHub"
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full">GitHub →</span>
          </div>
          <div className="absolute bottom-0 p-5">
            <p className="text-tbp-teal text-[10px] font-bold uppercase tracking-widest mb-1">Open Source</p>
            <p className="text-white font-bold text-base">TBP on GitHub</p>
            <p className="text-white/50 text-xs mt-1">Sequins, this site, and more</p>
          </div>
        </a>
      </div>
    </section>
  );
}

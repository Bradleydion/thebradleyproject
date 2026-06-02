// src/app/projects/page.tsx
import { ProjectCard } from "@/components/ProjectCard";

// ── Sequins featured hero card ─────────────────────────────────────────────
function SequinsFeatured() {
  return (
    <a
      href="/sequins"
      className="group relative block w-full rounded-3xl overflow-hidden bg-[#0A0B0E] border border-white/10 hover:border-[#00B3A4]/40 transition-all duration-500"
    >
      {/* Ambient glow on hover */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="w-[400px] h-[200px] rounded-full bg-[#00B3A4] blur-[100px] opacity-10" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 px-10 py-12">
        {/* Text */}
        <div className="flex-1 text-white">
          <div className="inline-flex items-center gap-2 text-[#00B3A4] text-xs font-semibold uppercase tracking-widest mb-4">
            <span>✦</span>
            <span>App — iOS &amp; Android</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
            Sequins
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-md mb-8">
            The home of drag performance. Discover shows, buy tickets, get booked, and run the whole night — all in one app.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Ticketing", "Booking", "QR Check-in", "Marketplace", "Notifications"].map((f) => (
              <span
                key={f}
                className="px-3 py-1 rounded-full text-xs font-medium border border-[#00B3A4]/30 text-[#00B3A4] bg-[#00B3A4]/10"
              >
                {f}
              </span>
            ))}
          </div>
          <div className="mt-8 inline-flex items-center gap-2 text-[#00B3A4] font-semibold group-hover:gap-3 transition-all duration-300">
            Learn more
            <span aria-hidden>→</span>
          </div>
        </div>

        {/* Mini phone mockup */}
        <div className="shrink-0 hidden sm:flex flex-col items-center justify-center w-[140px] h-[280px] rounded-[1.75rem] border border-white/15 bg-gradient-to-b from-[#111827] to-[#0a0b0e] shadow-[0_0_40px_rgba(0,179,164,0.1)] gap-3">
          <div className="text-2xl">✦</div>
          <p className="text-white text-xs font-semibold tracking-widest uppercase">Sequins</p>
          <div className="flex gap-1.5">
            <div className="h-1 w-6 rounded-full bg-[#00B3A4]" />
            <div className="h-1 w-3 rounded-full bg-white/20" />
            <div className="h-1 w-3 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </a>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function Projects() {
  const items = [
    { title: "The Bradley Project Volume 1", tag: "Poetry",  href: "https://www.amazon.com/Bradley-Project-V-1-Fractured-Collection/dp/B08RRFXNJ2/ref=sr_1_10?dib=eyJ2IjoiMSJ9.8IrH8y1sOedhim0Bzz7AL484flzgMC7674j8aaFWJZUZ4Ul6vorwIYibHoW2pVES_1uWgeUOZRBJsr4HrDDSf0jlPOH4OqQoD2X0egG9Rb4.g0PF8rf42fZHBT0NuLVQnRPvMLtJXdq19PFyLWKexx8&dib_tag=se&qid=1761682477&refinements=p_27%3ABradley+Dion&s=books&sr=1-10&text=Bradley+Dion", img: "/images/poems1.jpg",   alt: "Poetry book stack", newTab: true },
    { title: "The Bradley Project Volume 2", tag: "Poetry",  href: "https://www.amazon.com/Bradley-Project-2-Obscurity/dp/B09X1RDJH4/ref=sr_1_4?dib=eyJ2IjoiMSJ9.8IrH8y1sOedhim0Bzz7AL484flzgMC7674j8aaFWJZUZ4Ul6vorwIYibHoW2pVES_1uWgeUOZRBJsr4HrDDSf0jlPOH4OqQoD2X0egG9Rb4.g0PF8rf42fZHBT0NuLVQnRPvMLtJXdq19PFyLWKexx8&dib_tag=se&qid=1761682477&refinements=p_27%3ABradley+Dion&s=books&sr=1-4&text=Bradley+Dion", img: "/images/poems2.jpg",   alt: "Poetry book stack", newTab: true },
    { title: "The Bradley Project 3",        tag: "Poetry",  href: "https://www.amazon.com/Bradley-Project-Mending-Whats-Broken/dp/B0CQX6S55S/ref=sr_1_5?dib=eyJ2IjoiMSJ9.8IrH8y1sOedhim0Bzz7AL484flzgMC7674j8aaFWJZUZ4Ul6vorwIYibHoW2pVES_1uWgeUOZRBJsr4HrDDSf0jlPOH4OqQoD2X0egG9Rb4.g0PF8rf42fZHBT0NuLVQnRPvMLtJXdq19PFyLWKexx8&dib_tag=se&qid=1761682335&refinements=p_27%3ABradley+Dion&s=books&sr=1-5&text=Bradley+Dion", img: "/images/poems3.jpg",   alt: "Poetry book stack", newTab: true },
    { title: "The Bradley Project 4",        tag: "Poetry",  href: "https://www.amazon.com/Bradley-Project-Make-Worth/dp/B0FZSGTX1G/ref=sr_1_1?crid=2F05Q32GVE9MC&dib=eyJ2IjoiMSJ9.aCjex1-SzG6LOUdoj8_ODSsOrUVqQOnbUugWhDDy9KQq3voKxEzlug_nF0p4Nw33fi77RpJRlaHG2gM5J4dpJGT2jqrARuFwWEFne62MVcoZ6WcNcMklIgzIoA3Cx1NgBHGYXaImYqGeYGRvALsUCg.L2a0QdbMdGi5DGaOt1G2WEcejmziNIIXi3SsH17b3UM&dib_tag=se&keywords=The+Bradley+Project+Volume+4&qid=1762456388&sprefix=the+bradley+project+volume+4%2Caps%2C162&sr=8-1", img: "/images/poetry4.png",  alt: "Poetry book stack", newTab: true },
    { title: "Letters From Dale",            tag: "Fiction", href: "https://www.amazon.com/Letters-Dale-Bradley-Dion-ebook/dp/B0FTY7DGJ7/ref=sr_1_6?dib=eyJ2IjoiMSJ9.8IrH8y1sOedhim0Bzz7AL7Xoq9PReyqUBwS54iV1OD5uSF4M8rzypWJzPSxzqPuIgoGRhbFBxsdZGUDz1Q9CnUzMvxKO8iggLP1GaTCa0KrLTSprRBCAnUU8mYarD_Dh.-hjmGgzbMGzQ_p-jg-fd64ygeVd7MuysTxWijJZcj3k&dib_tag=se&qid=1762456435&refinements=p_27%3ABradley+Dion&s=books&sr=1-6&text=Bradley+Dion", img: "/images/fantasy.jpeg", alt: "Fantasy world",    newTab: true },
    { title: "BK Book Club",                 tag: "YouTube", href: "#",                                               img: "/images/bookclub.png", alt: "Book club" },
    { title: "TBP",                          tag: "Coding",  href: "https://github.com/Bradleydion",                 img: "/images/website.png",  alt: "GitHub", newTab: true },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-display mb-10">Work</h1>

      {/* ── Sequins: featured hero card ──────────────────────────────── */}
      <div className="mb-10">
        <SequinsFeatured />
      </div>

      {/* ── Rest of projects ─────────────────────────────────────────── */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <ProjectCard key={i.title} {...i} />
        ))}
      </div>
    </section>
  );
}

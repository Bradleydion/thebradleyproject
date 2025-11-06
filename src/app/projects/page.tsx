import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  const items = [
    
  { title: "The Bradley Project Volume 1",   tag: "Poetry",      href: "https://www.amazon.com/Bradley-Project-V-1-Fractured-Collection/dp/B08RRFXNJ2/ref=sr_1_10?dib=eyJ2IjoiMSJ9.8IrH8y1sOedhim0Bzz7AL484flzgMC7674j8aaFWJZUZ4Ul6vorwIYibHoW2pVES_1uWgeUOZRBJsr4HrDDSf0jlPOH4OqQoD2X0egG9Rb4.g0PF8rf42fZHBT0NuLVQnRPvMLtJXdq19PFyLWKexx8&dib_tag=se&qid=1761682477&refinements=p_27%3ABradley+Dion&s=books&sr=1-10&text=Bradley+Dion", img: "/images/poems1.jpg",  alt: "Poetry book stack" },
  { title: "The Bradley Project Volume 2",   tag: "Poetry",      href: "https://www.amazon.com/Bradley-Project-2-Obscurity/dp/B09X1RDJH4/ref=sr_1_4?dib=eyJ2IjoiMSJ9.8IrH8y1sOedhim0Bzz7AL484flzgMC7674j8aaFWJZUZ4Ul6vorwIYibHoW2pVES_1uWgeUOZRBJsr4HrDDSf0jlPOH4OqQoD2X0egG9Rb4.g0PF8rf42fZHBT0NuLVQnRPvMLtJXdq19PFyLWKexx8&dib_tag=se&qid=1761682477&refinements=p_27%3ABradley+Dion&s=books&sr=1-4&text=Bradley+Dion", img: "/images/poems2.jpg",  alt: "Poetry book stack" },
  { title: "The Bradley Project 3",   tag: "Poetry",      href: "https://www.amazon.com/Bradley-Project-Mending-Whats-Broken/dp/B0CQX6S55S/ref=sr_1_5?dib=eyJ2IjoiMSJ9.8IrH8y1sOedhim0Bzz7AL484flzgMC7674j8aaFWJZUZ4Ul6vorwIYibHoW2pVES_1uWgeUOZRBJsr4HrDDSf0jlPOH4OqQoD2X0egG9Rb4.g0PF8rf42fZHBT0NuLVQnRPvMLtJXdq19PFyLWKexx8&dib_tag=se&qid=1761682335&refinements=p_27%3ABradley+Dion&s=books&sr=1-5&text=Bradley+Dion", img: "/images/poems3.jpg",  alt: "Poetry book stack" },
  { title: "The Bradley Project 4",   tag: "Poetry",      href: "https://www.amazon.com/Bradley-Project-Make-Worth/dp/B0FZSGTX1G/ref=sr_1_1?crid=2F05Q32GVE9MC&dib=eyJ2IjoiMSJ9.aCjex1-SzG6LOUdoj8_ODSsOrUVqQOnbUugWhDDy9KQq3voKxEzlug_nF0p4Nw33fi77RpJRlaHG2gM5J4dpJGT2jqrARuFwWEFne62MVcoZ6WcNcMklIgzIoA3Cx1NgBHGYXaImYqGeYGRvALsUCg.L2a0QdbMdGi5DGaOt1G2WEcejmziNIIXi3SsH17b3UM&dib_tag=se&keywords=The+Bradley+Project+Volume+4&qid=1762456388&sprefix=the+bradley+project+volume+4%2Caps%2C162&sr=8-1", img: "/images/poetry4.png",  alt: "Poetry book stack" },
  { title: "Letters From Dale", tag: "Fiction",      href: "https://www.amazon.com/Letters-Dale-Bradley-Dion-ebook/dp/B0FTY7DGJ7/ref=sr_1_6?dib=eyJ2IjoiMSJ9.8IrH8y1sOedhim0Bzz7AL7Xoq9PReyqUBwS54iV1OD5uSF4M8rzypWJzPSxzqPuIgoGRhbFBxsdZGUDz1Q9CnUzMvxKO8iggLP1GaTCa0KrLTSprRBCAnUU8mYarD_Dh.-hjmGgzbMGzQ_p-jg-fd64ygeVd7MuysTxWijJZcj3k&dib_tag=se&qid=1762456435&refinements=p_27%3ABradley+Dion&s=books&sr=1-6&text=Bradley+Dion", img: "/images/fantasy.jpeg", alt: "Fantasy world" },
  { title: "BK Book Club",   tag: "YouTube",      href: "#", img: "/images/bookclub.png",alt: "Book club" },
  { title: "Drag Boutique",  tag: "App",          href: "https://github.com/Bradleydion/drag-boutique", img: "/images/app.png",     alt: "App screens" },
  { title: "TBP",  tag: "Coding",          href: "https://github.com/Bradleydion", img: "/images/website.png",     alt: "App screens" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-display mb-8">Work</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <ProjectCard key={i.title} {...i} />
        ))}
      </div>
    </section>
  );
}
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  const items = [
    
  { title: "The Bradley Project Volume 1",   tag: "Writing",      href: "https://www.amazon.com/Bradley-Project-V-1-Fractured-Collection/dp/B08RRFXNJ2/ref=sr_1_10?dib=eyJ2IjoiMSJ9.8IrH8y1sOedhim0Bzz7AL484flzgMC7674j8aaFWJZUZ4Ul6vorwIYibHoW2pVES_1uWgeUOZRBJsr4HrDDSf0jlPOH4OqQoD2X0egG9Rb4.g0PF8rf42fZHBT0NuLVQnRPvMLtJXdq19PFyLWKexx8&dib_tag=se&qid=1761682477&refinements=p_27%3ABradley+Dion&s=books&sr=1-10&text=Bradley+Dion", img: "/images/poems1.jpg",  alt: "Poetry book stack" },
  { title: "The Bradley Project Volume 2",   tag: "Writing",      href: "https://www.amazon.com/Bradley-Project-2-Obscurity/dp/B09X1RDJH4/ref=sr_1_4?dib=eyJ2IjoiMSJ9.8IrH8y1sOedhim0Bzz7AL484flzgMC7674j8aaFWJZUZ4Ul6vorwIYibHoW2pVES_1uWgeUOZRBJsr4HrDDSf0jlPOH4OqQoD2X0egG9Rb4.g0PF8rf42fZHBT0NuLVQnRPvMLtJXdq19PFyLWKexx8&dib_tag=se&qid=1761682477&refinements=p_27%3ABradley+Dion&s=books&sr=1-4&text=Bradley+Dion", img: "/images/poems2.jpg",  alt: "Poetry book stack" },
  { title: "The Bradley Project 3",   tag: "Writing",      href: "https://www.amazon.com/Bradley-Project-Mending-Whats-Broken/dp/B0CQX6S55S/ref=sr_1_5?dib=eyJ2IjoiMSJ9.8IrH8y1sOedhim0Bzz7AL484flzgMC7674j8aaFWJZUZ4Ul6vorwIYibHoW2pVES_1uWgeUOZRBJsr4HrDDSf0jlPOH4OqQoD2X0egG9Rb4.g0PF8rf42fZHBT0NuLVQnRPvMLtJXdq19PFyLWKexx8&dib_tag=se&qid=1761682335&refinements=p_27%3ABradley+Dion&s=books&sr=1-5&text=Bradley+Dion", img: "/images/poems3.jpg",  alt: "Poetry book stack" },
  { title: "The Bradley Project 4",   tag: "Writing",      href: "#", img: "/images/poetry4.png",  alt: "Poetry book stack" },
  { title: "Fantasy Series", tag: "Fiction",      href: "#", img: "/images/fantasy.jpeg", alt: "Fantasy world" },
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
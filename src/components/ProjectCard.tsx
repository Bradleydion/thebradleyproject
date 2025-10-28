type Props = {
  title: string;
  tag: string;
  href: string;         // can be internal (/projects/poetry) or external (https://amazon...)
  newTab?: boolean;     // open external links in a new tab
  img?: string;
  alt?: string;
};

export function ProjectCard({ title, tag, href, newTab, img, alt }: Props) {
  const aProps = newTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...aProps}
      className="group relative block rounded-3xl overflow-hidden border border-tbp-ink/10 bg-tbp-soft/20 hover:bg-tbp-soft/30 transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg"
    >
      {img ? (
        <img
          src={img}
          alt={alt ?? ""}
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="w-full aspect-[4/3] bg-tbp-soft/50" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-tbp-bg/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="absolute bottom-0 p-6 text-tbp-ink group-hover:text-tbp-bg transition-colors duration-500">
        <p className="text-sm opacity-70">{tag}</p>
        <h3 className="text-xl font-semibold font-display">
          {title}
          <span aria-hidden className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </h3>
      </div>
    </a>
  );
}

export default ProjectCard;
type Props = {
  title: string;
  tag: string;
  href: string;
  newTab?: boolean;
  img?: string;
  alt?: string;
};

export function ProjectCard({ title, tag, href, newTab, img, alt }: Props) {
  const aProps = newTab ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a
      href={href}
      {...aProps}
      className="group relative block rounded-2xl overflow-hidden border border-tbp-border bg-tbp-surface hover:-translate-y-1 hover:border-tbp-muted transition-all duration-300"
    >
      {img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={img}
          alt={alt ?? ""}
          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full aspect-[4/3] bg-tbp-border" />
      )}

      {/* Gradient overlay — always visible, strengthens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 p-5">
        <p className="text-tbp-teal text-[10px] font-bold uppercase tracking-widest mb-1">{tag}</p>
        <h3 className="text-tbp-soft font-semibold text-base leading-snug flex items-center gap-1">
          {title}
          <span aria-hidden className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 text-tbp-teal">→</span>
        </h3>
      </div>
    </a>
  );
}

export default ProjectCard;

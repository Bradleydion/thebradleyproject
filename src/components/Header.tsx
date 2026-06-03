"use client";
import { useState } from "react";

const links = [
  { label: "Work",    href: "/projects" },
  { label: "Sequins", href: "/sequins" },
  { label: "About",   href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-tbp-border bg-tbp-bg/80 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="group flex items-center gap-2">
          <span className="text-sm font-bold tracking-[0.15em] uppercase text-tbp-soft group-hover:text-tbp-teal transition-colors duration-200">
            The Bradley Project
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`transition-colors duration-200 ${
                  l.label === "Sequins"
                    ? "text-tbp-teal hover:opacity-80"
                    : "text-tbp-muted hover:text-tbp-soft"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/contact"
              className="px-4 py-2 rounded-full bg-tbp-teal text-tbp-bg text-sm font-semibold hover:opacity-90 transition"
            >
              Get in Touch
            </a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-tbp-soft transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-tbp-soft transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-tbp-soft transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-tbp-border bg-tbp-surface px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-tbp-muted hover:text-tbp-soft text-sm font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            className="mt-2 px-4 py-2 rounded-full bg-tbp-teal text-tbp-bg text-sm font-semibold text-center hover:opacity-90 transition"
            onClick={() => setOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;

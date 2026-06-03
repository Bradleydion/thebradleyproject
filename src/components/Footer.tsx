export function Footer() {
  return (
    <footer className="border-t border-tbp-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-[1fr,auto,auto]">
        {/* Brand */}
        <div>
          <p className="text-sm font-bold tracking-[0.15em] uppercase text-tbp-soft mb-2">
            The Bradley Project
          </p>
          <p className="text-tbp-muted text-sm max-w-xs leading-relaxed">
            A queer-led creative company for stories, tools, and community. Based in Portland, OR.
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-tbp-muted text-xs uppercase tracking-widest mb-1">Explore</p>
          <a href="/projects" className="text-tbp-muted hover:text-tbp-soft transition-colors">Work</a>
          <a href="/sequins" className="text-tbp-teal hover:opacity-80 transition-colors">Sequins</a>
          <a href="/about"   className="text-tbp-muted hover:text-tbp-soft transition-colors">About</a>
          <a href="/contact" className="text-tbp-muted hover:text-tbp-soft transition-colors">Contact</a>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-tbp-muted text-xs uppercase tracking-widest mb-1">Connect</p>
          <a href="https://www.instagram.com/thebradleyproject" target="_blank" rel="noopener noreferrer" className="text-tbp-muted hover:text-tbp-soft transition-colors">Instagram</a>
          <a href="https://github.com/Bradleydion" target="_blank" rel="noopener noreferrer" className="text-tbp-muted hover:text-tbp-soft transition-colors">GitHub</a>
          <a href="https://www.youtube.com/@BKBookClub" target="_blank" rel="noopener noreferrer" className="text-tbp-muted hover:text-tbp-soft transition-colors">YouTube</a>
          <a href="mailto:thebradleyprojectllc@gmail.com" className="text-tbp-muted hover:text-tbp-soft transition-colors">Email</a>
        </div>
      </div>

      <div className="border-t border-tbp-border">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-tbp-muted">
          <span>© {new Date().getFullYear()} The Bradley Project LLC · Portland, OR</span>
          <span className="gradient-text font-semibold">Phase 1: Sequins ✦</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

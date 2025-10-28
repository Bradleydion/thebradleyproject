export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-tbp-bg/70 border-b border-tbp-ink/10">
      <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold">TBP</a>
        <ul className="flex gap-6 text-sm">
          <li><a href="/projects">Work</a></li>
          <li><a className="block hover:opacity-80" href="/resume">Résumé</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
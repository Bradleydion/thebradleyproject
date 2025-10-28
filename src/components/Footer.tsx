export function Footer() {
  return (
    <footer className="border-t border-tbp-ink/10 mt-16">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>© {new Date().getFullYear()} The Bradley Project</div>
        <div className="opacity-70">PDX • FL • NH</div>
      </div>
    </footer>
  );
}
export default Footer;
import ResumePreview from "@/components/ResumePreview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Résumé — The Bradley Project",
};

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <p className="text-tbp-teal text-xs font-bold uppercase tracking-widest mb-3">Résumé</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Experience</h1>
        <p className="text-tbp-muted max-w-xl">
          A snapshot of my professional background. Open the preview for details or grab the full PDF.
        </p>
      </div>

      <ResumePreview />

      <div className="mt-6 text-sm text-tbp-muted">
        Prefer the full document?{" "}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-tbp-teal hover:opacity-80 transition">
          Open PDF →
        </a>
      </div>
    </section>
  );
}

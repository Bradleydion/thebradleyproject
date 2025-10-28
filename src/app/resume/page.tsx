import ResumePreview from "@/components/ResumePreview";

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-display mb-6">Résumé</h1>
      <p className="max-w-2xl mb-6">
        A quick snapshot of my recent roles. For the full version, open the preview and grab the PDF.
      </p>

      <ResumePreview />

      {/* Optional inline PDF link for folks who skip the modal */}
      <div className="mt-6 text-sm">
        Prefer the full document?{" "}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="underline">
          Open PDF
        </a>
        .
      </div>
    </section>
  );
}
export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* Text column (left on desktop, top on mobile) */}
        <div>
          <h1 className="text-4xl font-display mb-6">About</h1>
          <p className="max-w-2xl">
            I’m Bradley Dion — a writer, maker, and builder of worlds. My creative path bridges poetry, fantasy writing, and storytelling with a growing passion for developmental editing. After years of professional experience in client relations and healthcare, I’ve begun shifting toward publishing, editorial craft, and literary collaboration — refining my voice and learning the structure behind stories that move people. My future goals center on becoming an editor within a publishing house, championing new voices, and continuing to build creative projects like The Bradley Project that connect artistry with purpose.
          </p>
        </div>

        {/* Image column (right on desktop, below on mobile) */}
        <div className="justify-self-center md:justify-self-end">
          <img
            src="/images/headshot.jpeg"  /* or .jpeg — see note below */
            alt="Bradley Dion professional headshot"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border border-tbp-ink/10 shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
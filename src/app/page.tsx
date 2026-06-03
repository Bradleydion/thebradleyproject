import Hero from "@/components/Hero";
import Photography from "@/components/Photography";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-px bg-gradient-to-r from-transparent via-tbp-border to-transparent mx-12" />
      <Photography />
    </>
  );
}

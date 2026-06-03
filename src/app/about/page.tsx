import About from "./About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — The Bradley Project",
  description: "The Bradley Project is a queer-led creative company building stories, digital tools, and community infrastructure for artists and performers.",
};

export default function AboutPage() {
  return <About />;
}

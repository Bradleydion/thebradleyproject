import Photography from "@/components/Photography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography — The Bradley Project",
  description: "Weddings, events, portraits, and moments. Photography by Bradley Dion.",
};

export default function PhotographyPage() {
  return <Photography />;
}

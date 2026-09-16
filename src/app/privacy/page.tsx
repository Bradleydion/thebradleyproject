import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import { privacyMarkdown } from "./content";

export const metadata: Metadata = {
  title: "Privacy Policy — Sequins",
  description: "How Sequins and The Bradley Project LLC collect, use, and share your information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-12">
        <p className="text-tbp-teal text-xs font-bold uppercase tracking-widest mb-4">Sequins</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-tbp-muted text-sm">Last Updated: September 16, 2026</p>
      </div>
      <div className="h-px bg-tbp-border mb-12" />
      <LegalDoc markdown={privacyMarkdown} />
    </div>
  );
}

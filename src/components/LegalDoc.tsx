// src/components/LegalDoc.tsx
// Lightweight renderer for our own controlled Markdown subset used by the
// Privacy Policy and Terms of Service pages. Not a general-purpose Markdown
// parser -- just enough to render the legal docs we author ourselves.

import React from "react";

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return parts.map((part, i) => {
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return <strong key={`${keyPrefix}-${i}`} className="text-tbp-soft font-semibold">{boldMatch[1]}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={`${keyPrefix}-${i}`}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-tbp-teal hover:opacity-80 underline underline-offset-2"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return <React.Fragment key={`${keyPrefix}-${i}`}>{part}</React.Fragment>;
  });
}

export function LegalDoc({ markdown }: { markdown: string }) {
  const lines = markdown.split("\n");
  const blocks: React.ReactNode[] = [];
  let listBuffer: string[] = [];
  let paraBuffer: string[] = [];
  let blockKey = 0;

  const flushList = () => {
    if (listBuffer.length === 0) return;
    blocks.push(
      <ul key={`ul-${blockKey++}`} className="list-disc pl-6 space-y-2 text-tbp-muted leading-relaxed mb-6">
        {listBuffer.map((item, i) => (
          <li key={i}>{renderInline(item, `li-${blockKey}-${i}`)}</li>
        ))}
      </ul>
    );
    listBuffer = [];
  };

  const flushPara = () => {
    if (paraBuffer.length === 0) return;
    const text = paraBuffer.join(" ");
    blocks.push(
      <p key={`p-${blockKey++}`} className="text-tbp-muted leading-relaxed mb-6">
        {renderInline(text, `p-${blockKey}`)}
      </p>
    );
    paraBuffer = [];
  };

  for (const raw of lines) {
    const line = raw.trim();

    if (line === "") {
      flushList();
      flushPara();
      continue;
    }
    if (line === "---") {
      flushList();
      flushPara();
      blocks.push(<div key={`hr-${blockKey++}`} className="h-px bg-tbp-border my-10" />);
      continue;
    }
    if (line.startsWith("# ")) {
      // Top-level doc title is rendered by the page hero -- skip here.
      continue;
    }
    if (line.startsWith("**Last Updated")) {
      // Shown in the page hero -- skip here.
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      flushPara();
      blocks.push(
        <h3 key={`h3-${blockKey++}`} className="text-lg font-bold text-tbp-soft mt-8 mb-3">
          {renderInline(line.slice(4), `h3-${blockKey}`)}
        </h3>
      );
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      flushPara();
      blocks.push(
        <h2 key={`h2-${blockKey++}`} className="text-2xl font-bold text-tbp-soft mt-12 mb-4 first:mt-0">
          {renderInline(line.slice(3), `h2-${blockKey}`)}
        </h2>
      );
      continue;
    }
    if (line.startsWith("- ")) {
      flushPara();
      listBuffer.push(line.slice(2));
      continue;
    }
    // Fully-bolded/all-caps legal clause lines (disclaimers, liability caps)
    // read as regular paragraphs but get slightly stronger emphasis.
    paraBuffer.push(line);
  }
  flushList();
  flushPara();

  return <div>{blocks}</div>;
}

export default LegalDoc;

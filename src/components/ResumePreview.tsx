"use client";

import { useState } from "react";
import Modal from "./Modal";
import { experience, objective } from "@/data/experience";
import { useRouter } from "next/navigation";

export default function ResumePreview() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <button
        className="px-5 py-3 rounded-full bg-tbp-teal text-tbp-bg font-semibold text-sm hover:opacity-90 transition"
        onClick={() => setOpen(true)}
      >
        Open Résumé Preview
      </button>

      <Modal open={open} onClose={() => setOpen(false)} widthClass="max-w-2xl">
        <div className="p-6 border-b border-tbp-border">
          <h2 className="text-xl font-bold text-tbp-soft">Résumé — Snapshot</h2>
          <p className="mt-2 text-sm text-tbp-muted leading-relaxed">{objective}</p>
        </div>

        <div className="p-6">
          <ul className="space-y-3">
            {experience.map((item, idx) => (
              <li key={idx} className="rounded-xl border border-tbp-border bg-tbp-bg p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-tbp-soft">{item.employer}</div>
                    <div className="text-sm text-tbp-muted">{item.title}</div>
                  </div>
                  <div className="text-xs text-tbp-muted text-right whitespace-nowrap shrink-0">{item.dates}</div>
                </div>
                {item.location && <div className="mt-1 text-xs text-tbp-muted">{item.location}</div>}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-tbp-teal text-tbp-bg text-sm font-semibold hover:opacity-90 transition"
            >
              Open Full PDF
            </a>
            <button
              onClick={() => {
                setOpen(false);
                setTimeout(() => router.push("/contact"), 150);
              }}
              className="px-4 py-2 rounded-full border border-tbp-border text-tbp-muted hover:text-tbp-soft transition text-sm"
            >
              Contact Me
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

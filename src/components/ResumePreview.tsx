"use client";

import { useState } from "react";
import Modal from "./Modal";
import { experience, objective } from "@/data/experience";
import { useRouter } from "next/navigation";

export default function ResumePreview() {
  const [open, setOpen] = useState(false);
  const router = useRouter(); // ✅ add this

  return (
    <>
      <button
        className="px-5 py-3 rounded-full bg-tbp-ink text-tbp-soft hover:opacity-90 transition"
        onClick={() => setOpen(true)}
      >
        Open Résumé Preview
      </button>

      <Modal open={open} onClose={() => setOpen(false)} widthClass="max-w-2xl">
        {/* Header */}
        <div className="p-6 border-b border-tbp-ink/10">
          <h2 className="text-2xl font-display">Résumé — Snapshot</h2>
          <p className="mt-2 text-sm opacity-80">{objective}</p>
        </div>

        {/* Experience list */}
        <div className="p-6">
          <ul className="space-y-4">
            {experience.map((item, idx) => (
              <li key={idx} className="rounded-xl bg-white/70 border border-tbp-ink/10 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-base font-semibold">{item.employer}</div>
                    <div className="text-sm opacity-80">{item.title}</div>
                  </div>
                  <div className="text-sm opacity-70 text-right whitespace-nowrap">{item.dates}</div>
                </div>
                {item.location && <div className="mt-1 text-xs opacity-70">{item.location}</div>}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-tbp-ink hover:bg-tbp-ink/5 transition"
            >
              Open Full PDF
            </a>
            <button
              onClick={() => {
                setOpen(false);
                setTimeout(() => router.push("/contact"), 150);
              }}
              className="px-4 py-2 rounded-full bg-tbp-ink text-tbp-soft"
            >
              Contact Me
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
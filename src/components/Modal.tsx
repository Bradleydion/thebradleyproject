"use client";

import { useEffect } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  widthClass?: string; // optional sizing override
};

export default function Modal({ open, onClose, children, widthClass = "max-w-xl" }: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();

    if (open) {
      document.addEventListener("keydown", onKey);

      // Lock body scroll while modal is open
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = previousOverflow;
      };
    }

    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/40"
      onClick={onClose}
      aria-modal
      role="dialog"
    >
      <div
               className={`w-full ${widthClass} rounded-2xl bg-tbp-soft text-tbp-ink shadow-xl border border-tbp-ink/10 max-h-[80vh] sm:max-h-[85vh] overflow-y-auto overscroll-contain`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
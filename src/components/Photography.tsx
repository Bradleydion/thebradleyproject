"use client";
// src/components/Photography.tsx
// Reads from src/data/photos.ts — populated by `npm run sync-photos`

import { useState } from "react";
import { photoShoots, type Photo } from "@/data/photos";

const INSTAGRAM_URL = "https://www.instagram.com/thebradleyproject";

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ photo, onClose, onPrev, onNext }: {
  photo: Photo;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-8 text-white/60 hover:text-white text-3xl font-light transition z-10 select-none"
        aria-label="Previous"
      >
        ‹
      </button>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-8 text-white/60 hover:text-white text-3xl font-light transition z-10 select-none"
        aria-label="Next"
      >
        ›
      </button>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/60 hover:text-white text-xl transition"
        aria-label="Close"
      >
        ✕
      </button>

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs uppercase tracking-widest">
        {photo.alt}
      </p>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Photography() {
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);
  const [allFlat, setAllFlat] = useState<Photo[]>([]);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  if (photoShoots.length === 0) return null;

  const openLightbox = (photo: Photo, flatList: Photo[], idx: number) => {
    setAllFlat(flatList);
    setLightboxIdx(idx);
    setLightboxPhoto(photo);
  };

  const closeLightbox = () => setLightboxPhoto(null);

  const prevPhoto = () => {
    const newIdx = (lightboxIdx - 1 + allFlat.length) % allFlat.length;
    setLightboxIdx(newIdx);
    setLightboxPhoto(allFlat[newIdx]);
  };

  const nextPhoto = () => {
    const newIdx = (lightboxIdx + 1) % allFlat.length;
    setLightboxIdx(newIdx);
    setLightboxPhoto(allFlat[newIdx]);
  };

  return (
    <>
      <section id="photography" className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-tbp-teal text-xs font-bold uppercase tracking-widest mb-3">Photography</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Through the lens.</h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-tbp-muted hover:text-tbp-soft transition group"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @thebradleyproject
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>

        {/* Shoots */}
        {photoShoots.map((shoot) => {
          const flatPhotos = shoot.photos;
          return (
            <div key={shoot.slug} className="mb-16">
              {/* Shoot label */}
              <div className="flex items-center gap-4 mb-5">
                <span className="text-tbp-muted text-xs font-bold uppercase tracking-widest">{shoot.shoot}</span>
                <div className="flex-1 h-px bg-tbp-border" />
                <span className="text-tbp-muted text-xs">{shoot.photos.length} photos</span>
              </div>

              {/* Masonry columns — no gaps, images flow naturally */}
              <div className="columns-2 sm:columns-3 lg:columns-4 gap-2">
                {flatPhotos.map((photo, i) => (
                  <button
                    key={photo.src}
                    onClick={() => openLightbox(photo, flatPhotos, i)}
                    className="group relative w-full mb-2 overflow-hidden rounded-xl border border-tbp-border hover:border-tbp-muted transition-all duration-300 cursor-zoom-in break-inside-avoid block"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </button>
                ))}
              </div>
            </div>
          );
        })}

        {/* Mobile Instagram CTA */}
        <div className="mt-4 sm:hidden text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-tbp-muted hover:text-tbp-soft transition"
          >
            Follow on Instagram →
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxPhoto && (
        <Lightbox
          photo={lightboxPhoto}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </>
  );
}

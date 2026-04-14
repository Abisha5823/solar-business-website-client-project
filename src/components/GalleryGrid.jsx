import React, { useState } from "react";

function Lightbox({ img, onClose }) {
  if (!img) return null;
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={onClose}
    >
      <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <div className="card overflow-hidden">
          <div className="flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-3">
            <div className="text-sm font-extrabold text-ink-900">Work Preview</div>
            <button
              type="button"
              className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-orange-200"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <div className="bg-surface-50 p-3">
            <img
              src={img.src}
              alt={img.alt}
              className="h-[60vh] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryGrid({ items = [] }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((img, idx) => (
          <button
            key={`${img.src}-${idx}`}
            type="button"
            onClick={() => setActive(img)}
            className="group text-left"
            data-aos="fade-up"
          >
            <div className="card overflow-hidden">
              <div className="aspect-[16/11] img-zoom bg-surface-50">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
              <div className="p-4">
                <div className="text-sm font-extrabold text-ink-900">
                  {img.alt}
                </div>
                <div className="mt-1 text-sm text-zinc-600">
                  Tap to view
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Lightbox img={active} onClose={() => setActive(null)} />
    </>
  );
}


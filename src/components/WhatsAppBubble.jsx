import React from "react";
import { SITE } from "../config/site.js";

function buildWhatsAppLink() {
  const text = encodeURIComponent(SITE.whatsappDefaultMessage);
  return `https://wa.me/${SITE.whatsappNumberE164}?text=${text}`;
}

export default function WhatsAppBubble() {
  const href = buildWhatsAppLink();

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-3 shadow-soft transition hover:translate-y-[-2px] hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-orange-200"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.4 0 .03 5.37.03 12c0 2.11.55 4.17 1.6 6L0 24l6.2-1.62a11.93 11.93 0 0 0 5.82 1.48h.01c6.62 0 11.99-5.37 11.99-12a11.9 11.9 0 0 0-3.5-8.38ZM12.03 21.8h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.68.96.98-3.59-.23-.37A9.86 9.86 0 0 1 2.2 12c0-5.45 4.44-9.9 9.9-9.9a9.83 9.83 0 0 1 7 2.9A9.86 9.86 0 0 1 21.93 12c0 5.45-4.45 9.8-9.9 9.8Zm5.73-7.85c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.7.15-.21.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.15-1.3-.48-2.47-1.53-.91-.82-1.53-1.83-1.71-2.14-.18-.31-.02-.48.13-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.39-.03-.54-.08-.15-.7-1.69-.96-2.31-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56 0 1.51 1.1 2.97 1.25 3.18.15.21 2.16 3.3 5.23 4.62.73.31 1.3.5 1.74.64.73.23 1.39.2 1.92.12.59-.09 1.82-.74 2.08-1.45.26-.71.26-1.32.18-1.45-.08-.13-.28-.2-.59-.36Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="text-xs font-semibold text-zinc-500">Need quick help?</span>
        <span className="text-sm font-extrabold text-ink-900">WhatsApp Us</span>
      </span>
    </a>
  );
}


import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Icon({ name }) {
  const common = "h-6 w-6 text-brand-orange";
  switch (name) {
    case "sun":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.1 5.1l1.55 1.55M17.35 17.35l1.55 1.55M18.9 5.1l-1.55 1.55M6.65 17.35 5.1 18.9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "battery":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 7h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M3.5 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M10.5 10.2v3.6M9 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "droplet":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2s7 7 7 12a7 7 0 1 1-14 0c0-5 7-12 7-12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "camera":
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 7h10l2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
  }
}

export default function DivisionsCarousel({ items = [] }) {
  const scrollerRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const tick = () => {
      if (!paused) {
        el.scrollLeft += 0.6;
        const max = el.scrollWidth - el.clientWidth;
        if (max > 0 && el.scrollLeft >= max - 1) {
          el.scrollLeft = 0;
        }
      }
    };

    const id = window.setInterval(tick, 16);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      ref={scrollerRef}
      className="flex gap-5 overflow-x-auto pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      aria-label="Our divisions"
    >
      {items.map((d) => (
        <Link
          key={d.id}
          to={d.to}
          className="min-w-[260px] max-w-[320px] flex-1"
          data-aos="fade-up"
        >
          <div className="card h-full p-6 transition duration-300 hover:-translate-y-[2px] hover:shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50">
                <Icon name={d.icon} />
              </div>
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                Division
              </span>
            </div>
            <div className="mt-4 text-lg font-extrabold tracking-tight text-ink-900">
              {d.title}
            </div>
            <div className="mt-2 text-sm text-zinc-600">{d.description}</div>
            <div className="mt-5 text-sm font-semibold text-brand-orange">
              View details →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}


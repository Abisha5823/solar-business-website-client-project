import React from "react";
import { Link } from "react-router-dom";

export function ProductCard({ title, subtitle, bullets = [], to, image }) {
  return (
    <div className="card group overflow-hidden" data-aos="fade-up">
      <div className="aspect-[16/10] bg-surface-50 img-zoom">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-lg font-extrabold tracking-tight text-ink-900">
              {title}
            </div>
            <div className="mt-1 text-sm text-zinc-600">{subtitle}</div>
          </div>
          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-brand-orange">
            Popular
          </span>
        </div>

        {bullets.length > 0 ? (
          <ul className="mt-4 space-y-2 text-sm text-zinc-700">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-orange" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link to={to} className="btn btn-primary w-full sm:w-auto">
            View Details
          </Link>
          <Link to="/contact" className="btn btn-secondary w-full sm:w-auto">
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProductGrid({ items }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  );
}


import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS, SITE } from "../config/site.js";

function Dot() {
  return <span className="mx-2 text-zinc-300">•</span>;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
          <div className="flex items-center gap-3">

      <div className="leading-tight">
      <div className="text-base md:text-lg font-semibold tracking-wide text-gray-900"
         style={{ fontFamily: 'Cambria, Georgia, serif' }}>
      {SITE.name}
    </div>
    <div className="text-xs text-gray-500 mt-0.10"
         style={{ fontFamily: 'Cambria, Georgia, serif' }}>
      {SITE.tagline}
    </div>
      </div>
            </div>
            <p className="p mt-4 max-w-xl">
              Trusted, product-focused solutions for homes and businesses — solar
              installations, reliable batteries, RO systems, and CCTV camera
              setups with neat finishing and after-sales support.
            </p>

            <div className="mt-5 flex flex-wrap items-center text-sm text-zinc-600">
              <a className="link font-semibold" href={`tel:+${SITE.phoneE164}`}>
                {SITE.phoneDisplay}
              </a>
              <Dot />
              <a className="link font-semibold" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-extrabold text-ink-900">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link className="text-zinc-600 hover:text-ink-900" to={l.to}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-extrabold text-ink-900">Business Hours</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              {SITE.businessHours.map((b) => (
                <li key={b.label} className="flex items-center justify-between gap-3">
                  <span className="font-semibold text-zinc-700">{b.label}</span>
                  <span>{b.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link to="/contact" className="btn btn-primary w-full">
                Get an Estimate
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-zinc-200 pt-6 text-sm text-zinc-500 md:flex-row md:items-center">
          <div>© {year} {SITE.name}. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
              Clean installation
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
              Quality brands
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
              Quick support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}


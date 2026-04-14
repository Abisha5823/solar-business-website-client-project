import React, { useMemo, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { NAV_LINKS, SITE } from "../config/site.js";

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
  <div className="leading-tight">
    <div className="text-base md:text-lg font-semibold tracking-wide text-gray-900"
         style={{ fontFamily: 'Cambria, Georgia, serif' }}>
      {SITE.name}
    </div>
    <div className="text-s text-gray-500 mt-0.5"
         style={{ fontFamily: 'Cambria, Georgia, serif' }}>
      {SITE.tagline}
    </div>
  </div>
</div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const primaryLinks = useMemo(() => NAV_LINKS, []);

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-200">
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {primaryLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                [
                  "rounded-xl px-3 py-2 text-sm font-semibold transition",
                  isActive ? "bg-orange-50 text-brand-orange" : "text-zinc-700 hover:bg-zinc-50",
                ].join(" ")
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary ml-2">
            Get Quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-orange-200 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={[
          "lg:hidden",
          open ? "block" : "hidden",
        ].join(" ")}
      >
        <div className="container-page pb-5">
          <div className="card p-3">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {primaryLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    [
                      "rounded-xl border px-3 py-3 text-sm font-semibold transition",
                      isActive
                        ? "border-orange-200 bg-orange-50 text-brand-orange"
                        : "border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50",
                    ].join(" ")
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <Link to="/contact" className="btn btn-primary w-full">
                Enquiry / Quote
              </Link>
              <a
                className="btn btn-secondary w-full"
                href={`tel:+${SITE.phoneE164}`}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


import React from "react";
import { Link } from "react-router-dom";

export default function PageHeader({
  kicker,
  title,
  subtitle,
  crumbs = [],
  bgImage = "",
  overlayClass = "bg-black/35"
}) {
  return (
    <section className="relative overflow-hidden min-h-[380px] md:min-h-[420px]">
      {bgImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-zinc-100" />
      )}

      <div className={`absolute inset-0 ${overlayClass}`} />

      <div className="relative container-page flex min-h-[380px] md:min-h-[420px] items-center py-16 md:py-24">
        <div className="flex flex-col gap-4">
          {crumbs.length > 0 ? (
            <nav className="text-sm text-white/80" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                {crumbs.map((c, idx) => (
                  <li key={`${c.to}-${idx}`} className="flex items-center gap-2">
                    {idx > 0 ? <span className="text-white/50">/</span> : null}
                    {c.to ? (
                      <Link className="hover:text-white" to={c.to}>
                        {c.label}
                      </Link>
                    ) : (
                      <span className="font-semibold text-white">{c.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          {kicker ? (
            <div className="w-fit rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-semibold text-white">
              {kicker}
            </div>
          ) : null}

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            {title}
          </h1>

          {subtitle ? (
            <p className="max-w-3xl text-base leading-7 text-white/90 md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
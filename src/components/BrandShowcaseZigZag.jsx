import React from "react";
import { Link } from "react-router-dom";

/**
 * Alternating zig-zag rows: even index = image left / text right; odd = text left / image right (desktop).
 * Mobile: even = image then text; odd = text then image.
 */
export default function BrandShowcaseZigZag({
  sectionTitle,
  sectionSubtext,
  items = [],
  kicker = "Brand showcase",
}) {
  return (
    <div className="w-full">
      <section className="section bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
            {kicker ? (
              <div className="kicker mx-auto w-fit">{kicker}</div>
            ) : null}
            <h2 className="h2 mt-4">{sectionTitle}</h2>
            {sectionSubtext ? (
              <p className="p mx-auto mt-4">{sectionSubtext}</p>
            ) : null}
          </div>
        </div>
      </section>

      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? "bg-white" : "bg-surface-50";

        return (
          <section
            key={item.id}
            className={`section ${bgClass} border-t border-zinc-100`}
            aria-labelledby={`brand-heading-${item.id}`}
          >
            <div className="container-page">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div
                  className={
                    isEven
                      ? "order-1 lg:order-1"
                      : "order-2 lg:order-2"
                  }
                  data-aos="fade-up"
                >
                  <div className="card overflow-hidden shadow-card transition duration-300 hover:shadow-soft">
                    <div className="aspect-[4/3] img-zoom bg-surface-100 sm:aspect-[16/10]">
                      <img
                        src={item.image}
                        alt={item.imageAlt || item.heading}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={
                    isEven
                      ? "order-2 lg:order-2"
                      : "order-1 lg:order-1"
                  }
                  data-aos="fade-up"
                  data-aos-delay="80"
                >
                  <div className="card border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:border-orange-200 hover:shadow-card md:p-8">
                    <h3
                      id={`brand-heading-${item.id}`}
                      className="text-2xl font-extrabold tracking-tight text-ink-900 md:text-3xl"
                    >
                      {item.heading}
                    </h3>
                    <p className="p mt-4">{item.paragraph}</p>
                    <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                      {(item.bullets || []).map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span
                            className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-brand-orange"
                            aria-hidden
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link
                        to={item.ctaTo || "/contact"}
                        className="btn btn-primary inline-flex"
                      >
                        {item.ctaLabel || "Get a quote"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

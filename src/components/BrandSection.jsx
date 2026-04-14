import React from "react";

function BrandPill({ name }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:-translate-y-[2px] hover:bg-zinc-50">
      {name}
    </div>
  );
}

export default function BrandSection({ title = "Brands we support", items = [] }) {
  return (
    <section className="section section-gray">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="kicker w-fit" data-aos="fade-up">
              Trusted Brands
            </div>
            <h2 className="h2 mt-4" data-aos="fade-up" data-aos-delay="50">
              {title}
            </h2>
            <p className="p mt-3 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
              We install and support popular brands. Availability may vary — contact us for the latest options and best fit for your usage.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
          {items.map((n) => (
            <BrandPill key={n} name={n} />
          ))}
        </div>
      </div>
    </section>
  );
}


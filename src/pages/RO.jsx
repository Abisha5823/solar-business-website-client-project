import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import CTASection from "../components/CTASection.jsx";
import BrandShowcaseZigZag from "../components/BrandShowcaseZigZag.jsx";
import ContactDetails from "../components/ContactDetails.jsx";
import { RO_SHOWCASE } from "../data/roBrandShowcase.js";

export default function RO() {
  return (
    <>
      <PageHeader
  kicker="RO"
  title="RO purifier systems"
  subtitle="Clean and safe water systems for home and business."
  bgImage="/gallery/ww.jpg"
  overlayClass="bg-black/30"
  crumbs={[
    { label: "Home", to: "/" },
    { label: "RO" }
  ]}
/>

      <section className="section">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card p-7 md:p-8" data-aos="fade-up">
              <div className="kicker w-fit">Handled under Annbu Aqua</div>
              <h2 className="h2">Our RO service includes</h2>
              <p className="p mt-3">
                We help select the right RO model based on water quality and usage, then provide neat installation and support.
              </p>
              <div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm text-zinc-700">
                <div className="font-extrabold text-brand-orange">Trusted RO support</div>
                <div className="mt-1">
                  We provide trusted RO systems with product guidance, installation support, and customer-friendly service.
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-4">
                <div className="text-sm font-extrabold text-ink-900">Brands</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Kent", "Aqua"].map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                {[
                  "Installation with clean pipe routing",
                  "Filter replacement and periodic service",
                  "Guidance on maintenance schedule",
                  "Support for common issues"
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-orange" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn btn-primary">
                  Get RO Quote
                </Link>
                <Link to="/gallery" className="btn btn-secondary">
                  View Gallery
                </Link>
              </div>
            </div>

            <div className="card overflow-hidden" data-aos="fade-up">
              <div className="aspect-[16/11] img-zoom bg-surface-50">
                <img src="/gallery/wa.jpg" alt="RO purifier installation" />
              </div>
              <div className="p-6">
                <div className="text-sm font-extrabold text-ink-900">For accurate recommendation</div>
                <p className="p mt-2">
                  Share your water source (borewell/municipal), TDS if known, and daily usage. We’ll suggest the best-fit RO.
                </p>
                <div className="mt-6">
                  <Link to="/contact" className="btn btn-primary w-full">
                    Enquire for RO
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandShowcaseZigZag
        kicker="Brand showcase"
        sectionTitle={RO_SHOWCASE.sectionTitle}
        sectionSubtext={RO_SHOWCASE.sectionSubtext}
        items={RO_SHOWCASE.items}
      />
      <ContactDetails />
      <CTASection />
    </>
  );
}


import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import CTASection from "../components/CTASection.jsx";
import ContactDetails from "../components/ContactDetails.jsx";

export default function Solar() {
  return (
    <>
      <PageHeader
  kicker="Solar"
  title="Reliable solar solutions"
  subtitle="On-grid, off-grid and rooftop installation support."
  bgImage="/gallery/about.jpg"
  overlayClass="bg-black/30"
  crumbs={[
    { label: "Home", to: "/" },
    { label: "Solar" }
  ]}
/>
      <section className="section">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card p-7 md:p-8" data-aos="fade-up">
              <h2 className="h2">What we provide</h2>
              <p className="p mt-3">
                Solar systems designed for real usage — with correct sizing, quality components,
                and neat finishing.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { t: "Rooftop Solar", d: "Residential and commercial rooftops." },
                  { t: "On-grid / Off-grid", d: "As per site and backup needs." },
                  { t: "Hybrid Options", d: "Solar + battery for backup." },
                  { t: "Maintenance", d: "Inspection and support services." }
                ].map((x) => (
                  <div key={x.t} className="card-soft p-4">
                    <div className="text-sm font-extrabold text-ink-900">{x.t}</div>
                    <div className="mt-1 text-sm text-zinc-600">{x.d}</div>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn btn-primary">
                  Get Solar Quote
                </Link>
                <Link to="/gallery" className="btn btn-secondary">
                  View Work Photos
                </Link>
              </div>
            </div>

            <div className="card overflow-hidden" data-aos="fade-up">
              <div className="aspect-[16/11] img-zoom bg-surface-50">
                <img src="/gallery/s.jpg" alt="Solar rooftop installation" />
              </div>
              <div className="p-6">
                <div className="text-sm font-extrabold text-ink-900">Our approach</div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  {[
                    "Site visit and shading check",
                    "Usage-based sizing (kW) recommendation",
                    "Clean cabling and safe mounting",
                    "Clear walkthrough after installation"
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-orange" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link to="/contact" className="btn btn-primary w-full">
                    Enquire for Solar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactDetails />
      <CTASection />
    </>
  );
}


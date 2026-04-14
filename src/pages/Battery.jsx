import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import CTASection from "../components/CTASection.jsx";
import BrandShowcaseZigZag from "../components/BrandShowcaseZigZag.jsx";
import ContactDetails from "../components/ContactDetails.jsx";
import { BATTERY_SHOWCASE } from "../data/batteryBrandShowcase.js";

export default function Battery() {
  return (
    <>
      <PageHeader
        kicker="Battery & Inverter"
        title="Reliable backup power for daily use"
        bgImage="/gallery/bat.jpg"
        subtitle="We help select the right battery + inverter capacity for your home, shop, or office — with neat installation and guidance."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products" },
          { label: "Battery" }
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card p-7 md:p-8" data-aos="fade-up">
              <h2 className="h2">Ideal for</h2>
              <p className="p mt-3">
                Smooth backup power for lights, fans, computers, billing counters, and essential loads.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { t: "Home backup", d: "Comfortable backup for daily needs." },
                  { t: "Shops", d: "Keep billing and lighting running." },
                  { t: "Office", d: "Support for routers and computers." },
                  { t: "Hybrid upgrades", d: "Pair with solar if needed." }
                ].map((x) => (
                  <div key={x.t} className="card-soft p-4">
                    <div className="text-sm font-extrabold text-ink-900">{x.t}</div>
                    <div className="mt-1 text-sm text-zinc-600">{x.d}</div>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn btn-primary">
                  Get Battery Quote
                </Link>
                <Link to="/products" className="btn btn-secondary">
                  Back to Products
                </Link>
              </div>
            </div>

            <div className="card overflow-hidden" data-aos="fade-up">
              <div className="aspect-[16/11] img-zoom bg-surface-50">
                <img src="/gallery/b.jpg" alt="Battery and inverter setup" />
              </div>
              <div className="p-6">
                <div className="text-sm font-extrabold text-ink-900">Sizing guidance</div>
                <p className="p mt-2">
                  We guide you on inverter VA, battery capacity (Ah), and backup time based on load.
                </p>
                <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-4">
                  <div className="text-sm font-extrabold text-ink-900">For faster quote</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Share: number of fans/lights, TV, fridge, PC, and expected backup time.
                  </div>
                </div>
                <div className="mt-6">
                  <Link to="/contact" className="btn btn-primary w-full">
                    Enquire for Battery / Inverter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandShowcaseZigZag
        kicker="Trusted brands"
        sectionTitle={BATTERY_SHOWCASE.sectionTitle}
        sectionSubtext={BATTERY_SHOWCASE.sectionSubtext}
        items={BATTERY_SHOWCASE.items}
      />
      <ContactDetails />
      <CTASection />
    </>
  );
}


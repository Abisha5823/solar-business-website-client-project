import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import CTASection from "../components/CTASection.jsx";
import BrandShowcaseZigZag from "../components/BrandShowcaseZigZag.jsx";
import ContactDetails from "../components/ContactDetails.jsx";
import { CCTV_SHOWCASE } from "../data/cctvBrandShowcase.js";

export default function CCTV() {
  return (
    <>
      <PageHeader
        kicker="CCTV"
        title="Smart CCTV security for homes and business"
        subtitle="Camera systems, monitoring setup and installation support."
        bgImage="/gallery/cc.jpg"
        overlayClass="bg-black/40"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products" },
          { label: "CCTV" },
        ]}
      />


      <section className="section">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card p-7 md:p-8" data-aos="fade-up">
              <div className="kicker w-fit">Handled under CCTV Solutions</div>
              <h2 className="h2">What we install</h2>
              <p className="p mt-3">
                Camera solutions for safety, monitoring, and peace of mind — tailored to your site layout.
              </p>
              <div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm text-zinc-700">
                <div className="font-extrabold text-brand-orange">Authorised dealer support</div>
                <div className="mt-1">
                  We provide trusted CCTV brands with product selection help, installation, and setup support.
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-4">
                <div className="text-sm font-extrabold text-ink-900">Brands</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Dahua", "Hikvision", "CP Plus", "Hi Focus"].map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { t: "Indoor cameras", d: "Reception, rooms, counters." },
                  { t: "Outdoor cameras", d: "Gates, parking, perimeter." },
                  { t: "DVR/NVR setup", d: "Storage and playback." },
                  { t: "Mobile viewing", d: "Remote access support." }
                ].map((x) => (
                  <div key={x.t} className="card-soft p-4">
                    <div className="text-sm font-extrabold text-ink-900">{x.t}</div>
                    <div className="mt-1 text-sm text-zinc-600">{x.d}</div>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn btn-primary">
                  Get CCTV Quote
                </Link>
                <Link to="/gallery" className="btn btn-secondary">
                  See Installations
                </Link>
              </div>
            </div>

            <div className="card overflow-hidden" data-aos="fade-up">
              <div className="aspect-[16/11] img-zoom bg-surface-50">
                <img src="/gallery/Video.jpg" alt="CCTV installation" />
              </div>
              <div className="p-6">
                <div className="text-sm font-extrabold text-ink-900">For a fast quote</div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  {[
                    "Number of cameras required",
                    "Indoor/outdoor areas",
                    "Need night vision and audio?",
                    "DVR/NVR storage days needed"
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-orange" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link to="/contact" className="btn btn-primary w-full">
                    Enquire for CCTV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandShowcaseZigZag
        kicker="Brand showcase"
        sectionTitle={CCTV_SHOWCASE.sectionTitle}
        sectionSubtext={CCTV_SHOWCASE.sectionSubtext}
        items={CCTV_SHOWCASE.items}
      />
      <ContactDetails />
      <CTASection />
    </>
  );
}


import React from "react";
import { Link } from "react-router-dom";
import { SITE } from "../config/site.js";
import { PRODUCT_CATEGORIES, GALLERY_IMAGES } from "../data/catalog.js";
import { DIVISIONS } from "../data/divisions.js";
import { ProductGrid } from "../components/ProductCards.jsx";
import DivisionsCarousel from "../components/DivisionsCarousel.jsx";
import CTASection from "../components/CTASection.jsx";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-white to-white" />
      <div className="absolute -right-28 top-10 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute -left-28 top-36 h-72 w-72 rounded-full bg-zinc-200/40 blur-3xl" />

      <div className="relative container-page py-14 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="kicker w-fit" data-aos="fade-up">
              Local • Reliable • Premium Finish
            </div>
            <h1 className="h1 mt-4" data-aos="fade-up" data-aos-delay="50">
              Clean, dependable installations for{" "}
              <span className="text-brand-orange">Solar</span>, Batteries, RO & CCTV
            </h1>
            <p className="p mt-4 max-w-xl" data-aos="fade-up" data-aos-delay="100">
              Annbu Enterprises helps homeowners, shop owners, and businesses choose the
              right products — with proper sizing, neat wiring, and support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-aos="fade-up" data-aos-delay="150">
              <Link to="/contact" className="btn btn-primary">
                Get a Free Quote
              </Link>
              <Link to="/products" className="btn btn-secondary">
                View Products
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
              {[
                { k: "Fast Site Visit", v: "Quick estimate & guidance" },
                { k: "Neat Finishing", v: "Clean cabling & layout" },
                { k: "After-Sales", v: "Service and support" }
              ].map((x) => (
                <div key={x.k} className="card-soft p-4">
                  <div className="text-sm font-extrabold text-ink-900">{x.k}</div>
                  <div className="mt-1 text-sm text-zinc-600">{x.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="card overflow-hidden">
              <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6">
                <div className="img-zoom aspect-[4/3] bg-surface-50">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOujZDrxwXe4x9CFjK-rMk13V7PDhPjSZnQ&s" alt="Solar work" />
                </div>
                <div className="img-zoom aspect-[4/3] bg-surface-50">
                  <img src="/gallery/cctvhome.jpg" alt="CCTV work" />
                </div>
                <div className="img-zoom aspect-[4/3] bg-surface-50">
                  <img src="/gallery/bathome.jpg" alt="Battery work" />
                </div>
                <div className="img-zoom aspect-[4/3] bg-surface-50">
                  <img src="/gallery/rosys.jpg" alt="RO work" />
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-5 -left-5 hidden rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-soft lg:block">
              <div className="text-xs font-semibold text-zinc-500">Trusted local service</div>
              <div className="mt-1 text-sm font-extrabold text-ink-900">
                Premium, simple & clean
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniGallery() {
  return (
    <section className="section section-gray">
      <div className="container-page">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="kicker w-fit" data-aos="fade-up">
              Our Work
            </div>
            <h2 className="h2 mt-4" data-aos="fade-up" data-aos-delay="50">
              Quality finishing you can trust
            </h2>
            <p className="p mt-3 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
              A few examples of our installations. Visit the gallery for more.
            </p>
          </div>
          <Link to="/gallery" className="btn btn-secondary w-fit" data-aos="fade-up">
            View Gallery
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.slice(0, 6).map((img) => (
            <div key={img.src} className="card overflow-hidden" data-aos="fade-up">
              <div className="aspect-[16/11] img-zoom bg-white">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
              <div className="p-4">
                <div className="text-sm font-extrabold text-ink-900">{img.alt}</div>
                <div className="mt-1 text-sm text-zinc-600">Neat installation & support</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section bg-white">
        <div className="container-page">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="kicker w-fit" data-aos="fade-up">
                Our Divisions
              </div>
              <h2 className="h2 mt-4" data-aos="fade-up" data-aos-delay="50">
                Clear services under dedicated divisions
              </h2>
              <p className="p mt-3 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
                Explore what each division handles. We keep the enquiry flow simple and guide you to the right solution.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary w-fit" data-aos="fade-up">
              Enquire Now
            </Link>
          </div>

          <div className="mt-8">
            <DivisionsCarousel items={DIVISIONS} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="kicker w-fit" data-aos="fade-up">
                Products & Services
              </div>
              <h2 className="h2 mt-4" data-aos="fade-up" data-aos-delay="50">
                Solutions for homes, shops & businesses
              </h2>
              <p className="p mt-3 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
                Choose what you need — we’ll help you select the right model,
                capacity, and installation method for your location.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary w-fit" data-aos="fade-up">
              Enquire Now
            </Link>
          </div>

          <div className="mt-8">
            <ProductGrid items={PRODUCT_CATEGORIES} />
          </div>
        </div>
      </section>

      <MiniGallery />

      <CTASection />
    </>
  );
}


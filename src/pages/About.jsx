import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import CTASection from "../components/CTASection.jsx";

const divisions = [
  {
    title: "Yes Solar Solutions",
    badge: "Authorised Dealer for Tata, UTL, and Amaze Solar Panels",
    paragraph:
      "Yes Solar Solutions focuses on solar products and installation support for homes, shops, and commercial spaces. We provide trusted solar panels and practical guidance for customers looking for efficient and reliable power solutions. Our team supports customers in choosing suitable solar products based on their needs and usage.",
    points: [
      "Solar panel sales and support",
      "Rooftop solar guidance",
      "Trusted solar brands",
      "Customer-friendly product assistance",
    ],
    brands: ["Tata", "UTL", "Amaze"],
    buttonLabel: "View Solar Solutions",
    buttonTo: "/solar",
    image: "/gallery/sss.jpg",
    imageAlt: "Solar solutions",
  },
  {
    title: "Annbu Battery Service",
    badge: "Authorised Dealer for Exide, Amaron, Tata, Amaze, and Microtek",
    paragraph:
      "Annbu Battery Service provides dependable battery and inverter solutions for home, office, and shop backup needs. We offer trusted battery brands known for consistent performance and durability. Our goal is to help customers choose the right backup solution with proper support and reliable service.",
    points: [
      "Battery and inverter solutions",
      "Backup power support",
      "Trusted battery brands",
      "Suitable for home and commercial use",
    ],
    brands: ["Exide", "Amaron", "Tata", "Amaze", "Microtek"],
    buttonLabel: "View Battery Solutions",
    buttonTo: "/battery",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Battery and inverter solutions",
  },
  {
    title: "Annbu Aqua",
    badge: "Authorised Dealer for Kent and Aqua RO Systems",
    paragraph:
      "Annbu Aqua provides water purification solutions for safe and clean drinking water. We supply trusted RO systems suitable for homes and small businesses. Our service includes guidance for choosing the right purification system based on water usage and customer needs.",
    points: [
      "RO systems for home and business",
      "Safe drinking water solutions",
      "Trusted purification brands",
      "Practical support and guidance",
    ],
    brands: ["Kent", "Aqua"],
    buttonLabel: "View RO Solutions",
    buttonTo: "/ro",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "RO water purification solutions",
  },
  {
    title: "CCTV Solutions",
    badge: "Authorised Dealer for Dahua, Hikvision, CP Plus, and Hi Focus",
    paragraph:
      "We provide CCTV camera systems and security accessories for homes, offices, shops, and commercial environments. Our CCTV solutions are designed to improve safety, visibility, and monitoring. We help customers choose suitable surveillance products with clean installation support and reliable guidance.",
    points: [
      "Indoor and outdoor camera systems",
      "Trusted CCTV brands",
      "Security accessories",
      "Monitoring solutions for multiple spaces",
    ],
    brands: ["Dahua", "Hikvision", "CP Plus", "Hi Focus"],
    buttonLabel: "View CCTV Solutions",
    buttonTo: "/cctv",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "CCTV security solutions",
  },
];

function DivisionSection({ item, reverse = false, index }) {
  return (
    <section
      className={`section ${index % 2 === 0 ? "bg-white" : "section-gray"}`}
    >
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div
            className={reverse ? "lg:order-2" : ""}
            data-aos="fade-up"
          >
            <div className="kicker w-fit">Authorised Dealer</div>

            <h2 className="h2 mt-4">{item.title}</h2>

            <div className="mt-4 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-brand-orange">
              {item.badge}
            </div>

            <p className="p mt-5">{item.paragraph}</p>

            <ul className="mt-6 space-y-3 text-sm text-zinc-700">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-orange" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 shadow-card">
              <div className="text-sm font-extrabold text-ink-900">Brands We Handle</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.brands.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <Link to={item.buttonTo} className="btn btn-primary">
                {item.buttonLabel}
              </Link>
            </div>
          </div>

          <div
            className={reverse ? "lg:order-1" : ""}
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <div className="card overflow-hidden p-3 shadow-card">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-surface-100">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHeader
        kicker="About Us"
        title="A trustworthy local business with premium finishing"
        subtitle="We focus on clean installation, correct product sizing, and support — so customers of all ages can understand the options and make the right decision."
        bgImage="/gallery/sss.jpg"
        overlayClass="bg-black/30"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "About" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
            <div className="kicker mx-auto w-fit">Authorised Dealer</div>
            <h2 className="h2 mt-4">
              Authorised Dealer for Trusted Energy, Water and Security Solutions
            </h2>
            <p className="p mx-auto mt-4 max-w-3xl">
              We provide reliable solar, battery, RO, and CCTV solutions through
              our dedicated service divisions. We are an authorised dealer for
              trusted brands and support customers with product guidance,
              installation support, and after-sales service.
            </p>
          </div>

          <div
            className="mt-8 rounded-3xl border border-orange-200 bg-orange-50 p-5 shadow-card"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-extrabold uppercase tracking-wide text-brand-orange">
                  Authorised Dealer
                </div>
                <div className="mt-2 text-lg font-bold text-ink-900">
                  Trusted divisions for Solar, Battery, RO, and CCTV solutions
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Yes Solar Solutions",
                  "Annbu Battery Service",
                  "Annbu Aqua",
                  "CCTV Solutions",
                ].map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {divisions.map((item, index) => (
        <DivisionSection
          key={item.title}
          item={item}
          index={index}
          reverse={index % 2 !== 0}
        />
      ))}

      <section className="section section-gray">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
            <div className="kicker mx-auto w-fit">Why Choose Us</div>
            <h2 className="h2 mt-4">Reliable support with trusted brands</h2>
            <p className="p mx-auto mt-3 max-w-3xl">
              We focus on product quality, correct guidance, clean finishing,
              and dependable customer support so every customer can choose with
              confidence.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Trusted Product Brands",
                desc: "We provide products from reliable and well-known brands.",
              },
              {
                title: "Installation Support",
                desc: "We guide customers with proper setup and practical support.",
              },
              {
                title: "Customer-Friendly Service",
                desc: "We explain solutions clearly and help customers choose correctly.",
              },
              {
                title: "Reliable for Home & Business",
                desc: "Our solutions are suitable for residential and commercial needs.",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="card p-6"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="text-lg font-extrabold tracking-tight text-ink-900">
                  {item.title}
                </div>
                <p className="p mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to know what fits your usage?"
        subtitle="Share your requirement and we’ll suggest the best options with a clear quote."
      />
    </>
  );
}
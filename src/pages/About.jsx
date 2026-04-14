import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import CTASection from "../components/CTASection.jsx";

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
    { label: "About" }
  ]}
/>

      <section className="section">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card p-7 md:p-8" data-aos="fade-up">
              <h2 className="h2">What we do</h2>
              <p className="p mt-3">
                Anbu Enterprises provides end-to-end support for Solar solutions,
                Batteries & Inverters, RO systems, and CCTV camera setups for homes,
                shops, and business users.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                {[
                  "Right product selection and capacity guidance",
                  "Neat cabling and safe installation practices",
                  "Clear explanation and transparent quote flow",
                  "After-sales support and service reminders"
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-orange" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link to="/products" className="btn btn-secondary">
                  Browse Products
                </Link>
                <Link to="/contact" className="btn btn-primary">
                  Get an Estimate
                </Link>
              </div>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Clean & structured work",
                  desc: "Premium but simple — we keep installations tidy and easy to maintain."
                },
                {
                  title: "Product-focused guidance",
                  desc: "We recommend the right model based on usage, budget, and site conditions."
                },
                {
                  title: "Trustworthy local support",
                  desc: "Quick response for service and future upgrades."
                }
              ].map((x) => (
                <div key={x.title} className="card p-6" data-aos="fade-up">
                  <div className="text-lg font-extrabold tracking-tight text-ink-900">
                    {x.title}
                  </div>
                  <p className="p mt-2">{x.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Want to know what fits your usage?" subtitle="Share your requirement and we’ll suggest the best options with a clear quote." />
    </>
  );
}


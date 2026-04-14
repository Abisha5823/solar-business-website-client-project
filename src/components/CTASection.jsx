import React from "react";
import { Link } from "react-router-dom";
import { SITE } from "../config/site.js";

export default function CTASection({
  title = "Ready to get a quote?",
  subtitle = "Tell us what you need. We’ll suggest the right option for your home, shop, or business.",
  primaryLabel = "Send Enquiry",
  primaryTo = "/contact",
  secondaryLabel = "Call Now",
}) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="card overflow-hidden">
          <div className="grid gap-8 p-8 md:grid-cols-3 md:p-10">
            <div className="md:col-span-2">
              <div className="kicker w-fit" data-aos="fade-up">
                Quick Enquiry
              </div>
              <h2 className="h2 mt-4" data-aos="fade-up" data-aos-delay="50">
                {title}
              </h2>
              <p className="p mt-3" data-aos="fade-up" data-aos-delay="100">
                {subtitle}
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end md:justify-center">
              <Link to={primaryTo} className="btn btn-primary w-full md:w-auto" data-aos="fade-up">
                {primaryLabel}
              </Link>
              <a
                className="btn btn-secondary w-full md:w-auto"
                href={`tel:+${SITE.phoneE164}`}
                data-aos="fade-up"
                data-aos-delay="50"
              >
                {secondaryLabel}
              </a>
            </div>
          </div>
          <div className="h-2 w-full bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100" />
        </div>
      </div>
    </section>
  );
}


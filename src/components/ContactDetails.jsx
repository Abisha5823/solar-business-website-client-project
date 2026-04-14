import React from "react";
import { SITE } from "../config/site.js";

function InfoCard({ title, children }) {
  return (
    <div className="card p-6" data-aos="fade-up">
      <div className="text-sm font-extrabold text-ink-900">{title}</div>
      <div className="mt-3 text-sm text-zinc-600">{children}</div>
    </div>
  );
}

export default function ContactDetails() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard title="Call">
            <div className="space-y-2">
              <a className="link font-semibold" href={`tel:+${SITE.phoneE164}`}>
                {SITE.phoneDisplay}
              </a>
              <div className="text-xs text-zinc-500">
                Fast response for quotes and service requests.
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Email">
            <div className="space-y-2">
              <a className="link font-semibold" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              <div className="text-xs text-zinc-500">
                Share site details/photos for accurate pricing.
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Location">
            <div className="space-y-2">
              <div className="font-semibold text-zinc-800">
                {SITE.addressLines[0]}
              </div>
              <div className="text-zinc-600">{SITE.addressLines[1]}</div>
              <div className="text-xs text-zinc-500">
                Serving nearby areas for homes and businesses.
              </div>
              {SITE.googleMapsPlaceUrl ? (
                <a
                  className="link mt-2 inline-block text-sm font-semibold"
                  href={SITE.googleMapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions on Google Maps →
                </a>
              ) : null}
            </div>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}


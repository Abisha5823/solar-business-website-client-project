import React, { useMemo } from "react";
import { SITE } from "../config/site.js";

export default function ContactMapSection() {
  const embedSrc = useMemo(() => {
    const { lat, lng } = SITE.mapCoordinates;
    const q = encodeURIComponent(`${lat},${lng}`);
    return `https://maps.google.com/maps?q=${q}&z=16&hl=en&output=embed`;
  }, []);

  return (
    <section className="section section-gray" aria-labelledby="contact-map-heading">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <div className="kicker mx-auto w-fit">Visit us</div>
          <h2 id="contact-map-heading" className="h2 mt-4">
            Find us on Google Maps
          </h2>
          <p className="p mx-auto mt-3">
            Get directions to <span className="font-semibold text-ink-900">{SITE.name}</span> or
            open the full map in Google Maps.
          </p>
        </div>

        <div
          className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-card transition hover:shadow-soft"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[280px]">
            <iframe
              title="Yes Solar Solutions — Google Maps"
              src={embedSrc}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col gap-3 border-t border-zinc-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-sm text-zinc-600">
              Prefer the Google Maps app? Tap below for turn-by-turn directions.
            </p>
            <a
              href={SITE.googleMapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary shrink-0"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

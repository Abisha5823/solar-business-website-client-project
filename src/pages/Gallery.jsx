import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import CTASection from "../components/CTASection.jsx";
import GalleryGrid from "../components/GalleryGrid.jsx";
import { GALLERY_IMAGES } from "../data/catalog.js";

export default function Gallery() {
  return (
    <>
      <PageHeader
  kicker="Gallery"
  title="Our work gallery"
  subtitle="A few examples of our installations and finishing. Tap any image to preview."
  bgImage="/gallery/gg.jpg"
  overlayClass="bg-black/30"
  crumbs={[
    { label: "Home", to: "/" },
    { label: "Gallery" }
  ]}
/>

      <section className="section">
        <div className="container-page">
          <GalleryGrid items={GALLERY_IMAGES} />
        </div>
      </section>

      <CTASection />
    </>
  );
}


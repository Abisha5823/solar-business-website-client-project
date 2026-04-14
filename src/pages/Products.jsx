import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import CTASection from "../components/CTASection.jsx";
import { PRODUCT_CATEGORIES } from "../data/catalog.js";
import { ProductGrid } from "../components/ProductCards.jsx";

export default function Products() {
  return (
    <>
    <PageHeader
  kicker="Products"
  title="Products for homes, shops and businesses"
  subtitle="Explore solar systems, batteries, RO systems and CCTV solutions."
  bgImage="/gallery/product.jpg"
  overlayClass="bg-black/35"
  crumbs={[
    { label: "Home", to: "/" },
    { label: "Products" }
  ]}
/>

      <section className="section">
        <div className="container-page">
          <ProductGrid items={PRODUCT_CATEGORIES} />
        </div>
      </section>

      <CTASection />
    </>
  );
}


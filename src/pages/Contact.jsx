import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import ContactDetails from "../components/ContactDetails.jsx";
import ContactMapSection from "../components/ContactMapSection.jsx";
import EnquiryForm from "../components/EnquiryForm.jsx";
import CTASection from "../components/CTASection.jsx";

export default function Contact() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Get a quote or service support"
        subtitle="Share your requirement and we’ll respond quickly. You can also call or WhatsApp us anytime."
        bgImage="/gallery/cw.jpg"
  overlayClass="bg-black/30"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Contact" }
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-2">
            <EnquiryForm />
            <div className="card p-6 md:p-8" data-aos="fade-up">
              <div className="text-lg font-extrabold tracking-tight text-ink-900">
                What to include in your enquiry
              </div>
              <p className="p mt-3">
                The more details you share, the faster and more accurate our quote will be.
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  {
                    t: "Solar",
                    d: "Your monthly electricity bill, rooftop space, and location."
                  },
                  {
                    t: "Battery / Inverter",
                    d: "Approximate load (fans/lights/TV/fridge) and backup time needed."
                  },
                  {
                    t: "RO",
                    d: "Water source and TDS if known; daily drinking water usage."
                  },
                  {
                    t: "CCTV",
                    d: "Number of cameras, indoor/outdoor areas, and storage days needed."
                  }
                ].map((x) => (
                  <div key={x.t} className="card-soft p-4">
                    <div className="text-sm font-extrabold text-ink-900">{x.t}</div>
                    <div className="mt-1 text-sm text-zinc-600">{x.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactMapSection />

      <ContactDetails />
      <CTASection />
    </>
  );
}


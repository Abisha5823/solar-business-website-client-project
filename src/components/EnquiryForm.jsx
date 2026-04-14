import React, { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICES = [
  { id: "solar", label: "Solar" },
  { id: "battery", label: "Battery / Inverter" },
  { id: "ro", label: "RO System" },
  { id: "cctv", label: "CCTV Camera" },
  { id: "other", label: "Other" }
];

function getEmailJsConfig() {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  };
}

function validate(values) {
  const errs = {};
  if (!values.name?.trim()) errs.name = "Please enter your name.";
  if (!values.phone?.trim()) errs.phone = "Please enter your phone number.";
  if (values.phone && values.phone.replace(/\D/g, "").length < 10)
    errs.phone = "Please enter a valid phone number.";
  if (!values.service) errs.service = "Please select a service.";
  if (!values.message?.trim()) errs.message = "Please enter your requirement.";
  return errs;
}

export default function EnquiryForm({ defaultService = "" }) {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    location: "",
    message: ""
  });
  const [status, setStatus] = useState({ kind: "idle", message: "" });
  const [errors, setErrors] = useState({});

  const canSend = useMemo(() => {
    const cfg = getEmailJsConfig();
    return Boolean(cfg.serviceId && cfg.templateId && cfg.publicKey);
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!canSend) {
      setStatus({
        kind: "error",
        message:
          "Email service is not configured yet. Please set your EmailJS keys in the .env file, or contact by phone/WhatsApp."
      });
      return;
    }

    setStatus({ kind: "sending", message: "Sending enquiry…" });

    try {
      const cfg = getEmailJsConfig();
      const payload = {
        from_name: values.name,
        phone: values.phone,
        email: values.email,
        service: values.service,
        location: values.location,
        message: values.message
      };

      await emailjs.send(cfg.serviceId, cfg.templateId, payload, {
        publicKey: cfg.publicKey
      });

      setStatus({ kind: "success", message: "Enquiry sent successfully. We will contact you soon." });
      setValues({
        name: "",
        phone: "",
        email: "",
        service: defaultService,
        location: "",
        message: ""
      });
      setErrors({});
    } catch (err) {
      setStatus({
        kind: "error",
        message:
          "Something went wrong while sending. Please try again or contact via phone/WhatsApp."
      });
    }
  };

  return (
    <form onSubmit={onSubmit} className="card p-6 md:p-8" data-aos="fade-up">
      <div className="flex flex-col gap-2">
        <div className="text-lg font-extrabold tracking-tight text-ink-900">
          Enquiry Form
        </div>
        <div className="text-sm text-zinc-600">
          Share your requirement and we’ll get back with the best option and pricing.
        </div>
      </div>

      {!canSend ? (
        <div className="mt-5 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm text-zinc-700">
          <div className="font-extrabold text-brand-orange">Setup required</div>
          <div className="mt-1">
            Add EmailJS keys in <code className="font-semibold">.env</code>. See{" "}
            <code className="font-semibold">.env.example</code>.
          </div>
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-zinc-700">Name *</label>
          <input
            name="name"
            value={values.name}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-orange-200"
            placeholder="Your full name"
            autoComplete="name"
          />
          {errors.name ? <div className="mt-2 text-xs font-semibold text-red-600">{errors.name}</div> : null}
        </div>

        <div>
          <label className="text-sm font-semibold text-zinc-700">Phone *</label>
          <input
            name="phone"
            value={values.phone}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-orange-200"
            placeholder="10-digit mobile number"
            autoComplete="tel"
          />
          {errors.phone ? <div className="mt-2 text-xs font-semibold text-red-600">{errors.phone}</div> : null}
        </div>

        <div>
          <label className="text-sm font-semibold text-zinc-700">Email</label>
          <input
            name="email"
            value={values.email}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-orange-200"
            placeholder="Optional email"
            autoComplete="email"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-zinc-700">Service *</label>
          <select
            name="service"
            value={values.service}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-orange-200"
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.label}>
                {s.label}
              </option>
            ))}
          </select>
          {errors.service ? <div className="mt-2 text-xs font-semibold text-red-600">{errors.service}</div> : null}
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-semibold text-zinc-700">Location</label>
          <input
            name="location"
            value={values.location}
            onChange={onChange}
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-orange-200"
            placeholder="Area / city"
            autoComplete="address-level2"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-semibold text-zinc-700">Message *</label>
          <textarea
            name="message"
            value={values.message}
            onChange={onChange}
            rows={5}
            className="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-orange-200"
            placeholder="Example: 3kW solar for home, monthly bill ~₹2500, rooftop space available…"
          />
          {errors.message ? (
            <div className="mt-2 text-xs font-semibold text-red-600">{errors.message}</div>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="btn btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
          disabled={status.kind === "sending"}
        >
          {status.kind === "sending" ? "Sending…" : "Send Enquiry"}
        </button>

        {status.kind !== "idle" ? (
          <div
            className={[
              "text-sm font-semibold",
              status.kind === "success" ? "text-emerald-700" : "",
              status.kind === "error" ? "text-red-600" : "",
              status.kind === "sending" ? "text-zinc-600" : ""
            ].join(" ")}
            aria-live="polite"
          >
            {status.message}
          </div>
        ) : (
          <div className="text-sm text-zinc-500">
            We usually reply the same day.
          </div>
        )}
      </div>
    </form>
  );
}


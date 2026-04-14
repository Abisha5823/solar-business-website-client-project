# Anbu Enterprises — Business Website

Clean, modern, multi-page business website for Anbu Enterprise (Solar, Batteries, RO systems, CCTV).

## Tech

- React + Vite
- React Router (multi-page navigation)
- Tailwind CSS (light, professional theme)
- AOS (subtle fade-up scroll reveal)
- EmailJS (enquiry form)

## Getting started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure EmailJS (enquiry form)

Copy the env example:

```bash
copy .env.example .env
```

Fill:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

EmailJS template variables expected:

- `from_name`
- `phone`
- `email`
- `service`
- `location`
- `message`

### 3) Run locally

```bash
npm run dev
```

## Brand/Contact configuration

Update business details in:

- `src/config/site.js`

Update brands / gallery items in:

- `src/data/catalog.js`


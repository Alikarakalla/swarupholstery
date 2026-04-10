# Swar Upholstery Inc Website

Production-ready React + Vite website for **Swar Upholstery Inc**, a premium upholstery and furniture restoration company based in Ottawa.

## Overview

This project includes:

- React with JSX
- Vite setup
- React Router page routing
- Reusable components
- Scoped CSS modules plus shared global styling
- Responsive layouts for desktop, tablet, and mobile
- SEO-friendly page titles and meta descriptions
- Accessible semantic markup
- Placeholder local image assets prepared for future business photography
- Quote and contact forms structured for future backend integration

## Pages Included

- Home
- About
- Services
- Gallery
- Free Quote
- Contact
- 404 fallback

## Business Information Used

- Company: Swar Upholstery Inc
- Owner: Abd Swar
- Address: 1487 Lagan Way (off Belfast Rd.), Ottawa, ON K1B 3S4
- Phone: 343-987-8888
- Email: swarupholstery@gmail.com
- Website: intentionally left generic until the new domain is ready

## Project Structure

```text
.
├── public
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── images
│   ├── components
│   ├── data
│   ├── pages
│   ├── styles
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## Placeholder Assets To Replace

Current local placeholder artwork lives in [`src/assets/images`](./src/assets/images).

Recommended replacements:

- `hero-workshop.svg`
  Replace with a real upholstery workshop or studio image.
- `craftsmanship-detail.svg`
  Replace with close-up stitching, tools, or material detail photography.
- `seat-before.svg`
  Replace with a real before image of damaged or worn seating.
- `seat-after.svg`
  Replace with a real after image of restored seating.
- `luxury-interior.svg`
  Replace with premium automotive interior photography.
- `furniture-restoration.svg`
  Replace with furniture reupholstery or restoration work.
- `leather-repair.svg`
  Replace with leather or fabric repair detail imagery.
- `foam-rebuild.svg`
  Replace with process photography for foam rebuild or seat contour work.

You can keep the same filenames to avoid changing imports.

## Forms

- The **Free Quote** form is fully structured and validated in the UI.
- The **Contact** form is fully structured and validated in the UI.
- Both forms currently run in demo mode and show a confirmation message after submit.
- They are ready to connect later to:
  - a custom backend API
  - Formspree
  - Netlify Forms
  - a CRM or email workflow

## Content Notes

- Social links are placeholders and should be replaced with live business profiles.
- The website/domain field is intentionally not hardcoded yet.
- Testimonial copy is polished placeholder content and should be replaced with approved customer reviews.
- Gallery items and before/after entries are ready for real project photography.

## Styling Notes

- Typography uses a premium serif + sans pairing for a refined studio feel.
- The palette is built around black, white, beige, warm neutrals, and deep red accents.
- Layouts use CSS modules for clean scoping and maintainability.
- Motion is intentionally subtle and designed to feel polished, not distracting.

## Future Enhancements

- Backend form handling
- CMS or editable project gallery
- Real map embed on the contact page
- Live review integration
- Analytics and conversion tracking
- Image optimization and WebP/AVIF replacements for final photography


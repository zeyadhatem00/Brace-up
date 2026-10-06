# Brace up

Brace up is a React storefront for browsing handcrafted bracelets in braided cord, leather, beaded, and silver styles. The site presents product imagery, prices in EGP, material details, and a small brand story for the Brace up collection.

- **Live site:** [brace-up.vercel.app](https://brace-up.vercel.app)
- **Default branch:** `main`
- **Repository:** [zeyadhatem00/Brace-up](https://github.com/zeyadhatem00/Brace-up)

## What is implemented

- Responsive home page with a hero section, featured products, brand story CTA, and product highlights.
- Product catalog with client-side filters for **All**, **Cord**, **Chain**, **Beaded**, and **Leather**.
- Product detail routes at `/products/:slug`, including price, description, product details, material/warranty highlights, related products, and a link to order through Instagram.
- Static About and Contact pages, plus responsive header/footer navigation.
- Local product imagery and product records bundled with the frontend; no runtime API is required by the current source.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page and featured products |
| `/products` | Full catalog with category filtering |
| `/products/:slug` | Detail page for a catalog item |
| `/about` | Brand story, values, and displayed statistics |
| `/contact` | Displayed contact details and opening hours |

The current catalog contains six product records in `src/data/products.ts`. Product pages are driven by those local records and their imported assets.

## Tech stack

- React 19 with TypeScript
- Vite 8 for development and production builds
- React Router 7 for client-side routing
- Tailwind CSS 4 through `@tailwindcss/vite`
- Lucide React and Font Awesome for icons
- npm with the committed `package-lock.json` (lockfile version 3)

The repository does not declare a Node.js engine version. Use a current Node.js release with npm; the lockfile should be used for reproducible dependency installation.

## Getting started

### Prerequisites

- Node.js and npm
- A shell in the repository root

### Install dependencies

```bash
npm ci
```

### Start the development server

```bash
npm run dev
```

Vite will print the local URL when the server starts. Use the URL shown in the terminal rather than assuming a fixed port.

### Build for production

```bash
npm run build
```

This runs TypeScript project builds followed by `vite build` and writes the production output to `dist/`.

### Preview the production build

```bash
npm run preview
```

### Lint the repository

```bash
npm run lint
```

## Development notes

The app is mounted from `src/main.tsx`, which renders `App` and imports the global Tailwind stylesheet. `src/App.tsx` defines the browser router and wraps all pages with the shared layout. Vercel rewrites all requests to `index.html` in `vercel.json`, allowing client-side routes to resolve on refresh when deployed there.

Relevant areas of the codebase:

```text
src/
├── App.tsx                 # Router and route definitions
├── main.tsx                # React entrypoint
├── Pages/                  # Home, catalog, detail, About, and Contact views
├── components/
│   ├── layout/Layout.tsx   # Shared header / outlet / footer shell
│   ├── Header.tsx          # Responsive route navigation
│   ├── Footer.tsx          # Footer links, perks, and Instagram link
│   └── Productcard.tsx     # Reusable catalog card
├── data/products.ts        # Local product type, records, and slug lookup
├── assets/                 # Bundled bracelet and lifestyle images
└── index.css               # Tailwind import and design tokens
```

## Scope and current limitations

This repository is currently a frontend catalog and brand presentation rather than a complete commerce backend:

- Products, prices, descriptions, and filtering data are static local fixtures; there is no database or product API configured.
- There is no cart, checkout, authentication, payment processing, order persistence, or admin workflow in the inspected source.
- The product detail “order through Instagram” action opens the configured [@braceup.eg Instagram account](https://www.instagram.com/braceup.eg/); it is not an in-app order form.
- The home page’s newsletter call-to-action is visual copy only; no signup form or submission handler is implemented.
- The Contact page displays contact information but does not include a message form or submission endpoint.
- No `.env.example` file or `VITE_*` configuration is present, and no environment variables are required by the current code.

## Deployment

The repository includes `vercel.json` with a rewrite from every path to `/index.html`, which matches the React Router setup. The live URL above was reachable during this README review; deployment configuration and hosting credentials are not part of this repository.

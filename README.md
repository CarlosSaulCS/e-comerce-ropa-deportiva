# LuxeMotion — Luxury Performance Sportswear (Next.js)

An elegant, fully functional mock e‑commerce built with Next.js App Router + TypeScript + Tailwind.

## Requirements

- Node.js 18+ and npm

## Setup (Windows PowerShell)

```pwsh
# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open http://localhost:3000 (or the port shown in your terminal). If you previously had a dev server running and see unexpected errors, stop all dev tasks, delete the `.next` folder, and start again.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start the production server after build
- `npm run lint` — Lint
- `npm run type-check` — TypeScript check
- `npm run format` — Prettier format

## Notes

- Images sourced from Unsplash remote URLs (see image domains in config).
- Checkout is a mock (no real payments). Data is local in `src/data/products.ts`.
- Cart persists in localStorage.
- Some upstream Unsplash URLs may 404 occasionally. Replace with valid URLs or local assets if needed.

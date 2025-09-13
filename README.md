# LuxeMotion — Luxury Performance Sportswear (Next.js)

An elegant, fully functional mock e‑commerce built with Next.js App Router + TypeScript + Tailwind.

## 🚀 Live Demo

Deployed on Vercel: [View Live Site](https://e-comerce-ropa-deportiva.vercel.app)

## Requirements

- Node.js 18+ and npm

## Setup (Windows PowerShell)

```pwsh
# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open http://localhost:3000 (or the port shown in your terminal).

## Development Notes (Windows/OneDrive Users)

If you see EINVAL readlink errors during development:

1. Stop the dev server
2. Delete the `build` folder: `Remove-Item -Recurse -Force build`
3. Restart the dev server: `npm run dev`

This is due to OneDrive sync conflicts with build directories. The project uses a custom build directory in development but standard `.next` for production/Vercel.

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

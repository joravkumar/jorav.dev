# jorav.dev

My personal portfolio — a clean, minimal single-page site built with **Vite + React + TypeScript**. Software engineer with 7+ years shipping enterprise SaaS, full-stack and applied AI.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-checks, then outputs to dist/
npm run preview  # serve the production build locally
```

## Editing content

All copy lives in one place: [`src/data/portfolio.ts`](src/data/portfolio.ts) — profile, skills, experience, and projects. Items tagged with `placeholder: true` (and `TODO(jorav)` comments) are waiting on real content.

The accent color and all theme tokens are CSS variables in [`src/styles/global.css`](src/styles/global.css); light/dark are defined under `[data-theme="..."]`.

## License

Released under the 0BSD license.

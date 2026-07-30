# jorav.dev

My personal portfolio. A clean, fast, single-page site built with Vite, React, and TypeScript, and deployed on Vercel. Live at [jorav.dev](https://jorav.dev).

I'm a software engineer with 8+ years shipping enterprise SaaS across full-stack and applied AI.

## Highlights

- Single-page site with `Hero`, `About`, `Experience`, `Work`, and `Contact` sections.
- Light and dark themes with a persisted toggle, plus subtle scroll-reveal animations (respecting `prefers-reduced-motion`).
- Content-driven: all copy lives in one typed data file, so the markup stays untouched.
- Self-hosted fonts and no third-party CDNs, so it stays fast and private.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

## Scripts

```bash
npm run dev      # start the Vite dev server
npm run build    # type-check (tsc) then build to dist/
npm run preview  # serve the production build locally
npm run format   # Prettier over the repo
```

## Project structure

```
src/
  components/     # one component + CSS module per section (Hero, About, Work, ...)
  data/
    portfolio.ts  # all content: profile, skills, experience, projects
  styles/
    global.css    # design tokens, theme, base styles
public/fonts/     # self-hosted woff2 (Space Grotesk + JetBrains Mono)
```

## Customizing

- **Content** lives entirely in [`src/data/portfolio.ts`](src/data/portfolio.ts) (profile, skills, experience, projects). `TODO(jorav)` comments mark spots waiting on real content. The résumé at [`public/resume.pdf`](public/resume.pdf) is built from [`main.tex`](main.tex) — keep the two in sync, and rebuild with `xelatex main.tex` (XeLaTeX or LuaLaTeX is required; `fontspec` will fail under `pdflatex`).
- **Theme** tokens (accent color, surfaces, borders) are CSS variables in [`src/styles/global.css`](src/styles/global.css); light and dark are defined under `[data-theme="..."]`.
- **Fonts** (Space Grotesk for text, JetBrains Mono for labels) are self-hosted in [`public/fonts`](public/fonts), so there is no Google Fonts CDN. The same fonts are shared with [tools.jorav.dev](https://tools.jorav.dev) so the two sites read as one brand.

## Deployment

Deployed on Vercel. [`vercel.json`](vercel.json) rewrites all non-asset routes to `index.html` so client-side routing works on refresh.

## License

[0BSD](LICENSE). Do whatever you like with the code. The content and branding are mine.

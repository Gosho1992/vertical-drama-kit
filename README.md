# Vertical Drama Kit — Landing Site

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion +
React Three Fiber (Three.js). Dark cinematic landing page selling AI
Vertical Drama Production Kits, with Gumroad checkout links.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build locally
npm run lint     # ESLint
```

Requires Node.js 18.17+ (built and tested on Node 20/22).

## Environment variables

None. This project has no API routes, server actions, or third-party API
keys — all content lives in `config/site.ts` and `config/products.ts`, and
Gumroad checkout is just an outbound link (no Gumroad API integration). No
`.env` file is required for `npm run dev`, `npm run build`, or deployment.

## What to edit first

- **`config/products.ts`** — the 4 product cards (title, genre, version,
  poster image path, Gumroad URL). This is the only file you need to touch
  to change what's for sale. Add a new object to add a 5th product.
- **`public/posters/`** — the 4 live posters (`stay-away-from-me-straight.jpg`,
  `the-last-promise-straight.jpg`, `stay-away-from-me-boys-love.jpg`,
  `the-last-promise-boys-love.jpg`). The original placeholder SVGs
  (`product-1.svg` … `product-4.svg`) are unused and can be ignored/removed.
- **`config/site.ts`** — brand name, domain, contact email, meta
  description, keywords, and the copy for the "What We Provide," "Why
  Choose Us," and "Workflow" sections all live here. Current branding:
  **Vertical Drama Kit** / `https://veriticaldramasscript.com` /
  `zainzia1992@gmail.com`.
- **`public/showcase/`** — replace the 5 placeholder frames used in the
  Showcase carousel. `siteConfig.ogImage` currently points at the first
  product poster as a temporary OpenGraph/Twitter share image — swap in a
  dedicated 1200x630 social banner when one is designed.
- **`licenses/`** *(none present)* — no license terms were supplied when
  this was built; add whatever license/EULA applies to your kits before
  selling them.

## Deployment (Netlify)

This repo includes `netlify.toml`, pre-configured for zero-extra-setup
deploys:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Netlify resolves and installs `@netlify/plugin-nextjs` itself at build
time (it is not a package.json dependency) and gives this App Router site
full support for `next/image` optimization, static prerendering, and the
metadata routes (`robots.txt`, `sitemap.xml`, `manifest.webmanifest`,
favicons) — no manual adapter configuration needed.

**Option A — Git-connected (recommended):**
1. Push this repo to GitHub (see "GitHub" below).
2. In Netlify: **Add new site → Import an existing project** → pick the repo.
3. Build command and publish directory are read from `netlify.toml`
   automatically — leave the UI fields blank or matching the file.
4. Deploy. Every push to the connected branch redeploys automatically.

**Option B — Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify init      # links this folder to a Netlify site
netlify deploy --prod
```

No environment variables need to be set in the Netlify UI (see above).
Once deployed, update `siteConfig.url` in `config/site.ts` if the live
domain ever changes from `https://veriticaldramasscript.com` — it drives
the canonical URL, OpenGraph/Twitter URLs, sitemap, and JSON-LD.

## GitHub

`.gitignore` excludes `node_modules`, `.next`, build/cache output
(`out/`, `dist/`, `.cache/`, `.turbo/`, `*.tsbuildinfo`), logs (`*.log`,
`npm-debug.log*`, etc.), and any `.env*` file — nothing environment- or
machine-specific gets committed. Standard flow:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Notes

- The hero's 3D particle/light-ray background (`components/three/`) is
  lazy-loaded client-side only (`next/dynamic`, `ssr: false`) so it never
  blocks first paint or SEO crawling.
- Showcase carousel images are still placeholder SVGs; product-card and
  showcase images automatically skip Next.js image optimization for `.svg`
  files (`unoptimized` prop) since vector art doesn't benefit from it —
  once you swap in real `.jpg`/`.png`/`.webp` files, optimization applies
  automatically. The 4 real posters (`.jpg`) are already optimized normally.
- `components/ui/Icon.tsx` + `types/lucide-react.d.ts`: the installed
  `lucide-react` version didn't ship bundled TypeScript types in this build
  environment, so a small ambient declaration file was added. If a future
  `npm install` pulls a version with types included, you can delete
  `types/lucide-react.d.ts`.
- SEO: metadata, canonical URL, OpenGraph/Twitter cards, JSON-LD structured
  data (`app/layout.tsx`), `app/robots.ts`, `app/sitemap.ts`, and
  `app/manifest.ts` are all wired up from `config/site.ts`.
- Favicon (`app/icon.svg`), Apple touch icon (`app/apple-icon.png`), and
  manifest icons (`public/icons/icon-192.png`, `icon-512.png`) are a
  temporary "VDK" monogram mark — replace with a real logo when one is
  designed.

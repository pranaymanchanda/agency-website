# AURA — Retail Storefront

A modern, static e-commerce storefront demo (home & lifestyle), built with **Next.js 15 (App Router)**, **TypeScript** and **Tailwind CSS**. Client-side cart, category filtering, KWD pricing. Statically exported and ready for **Cloudflare**.

Part of the [GulfAutomation](https://agency-website.pranaykuwait.workers.dev) portfolio.

## Features

- Static export (`output: "export"`) — no server required
- Client-side cart with quantity controls, slide-out drawer, `localStorage` persistence
- Category filtering, sale/deals section, newsletter, trust badges
- KWD currency, Kuwait-focused copy
- SEO: metadata, JSON-LD (`Store`), `robots.txt`, `sitemap.xml`
- Minimal dependencies (only `next`, `react`, `react-dom`)

## Local development

```bash
cd retail-storefront
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # outputs ./out
```

## Deploy on Cloudflare

This site lives in a subfolder of the `agency-website` repo, so set the project's
**root directory** to `retail-storefront`.

**Cloudflare Pages (recommended):**
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `retail-storefront`

**Cloudflare Workers (Wrangler):** `wrangler.jsonc` is included and serves `./out`
as static assets, so `npx wrangler deploy` works without the OpenNext adapter.

## Customize

| What | Where |
| --- | --- |
| Products, prices, categories | `lib/products.ts` |
| Currency formatting | `lib/format.ts` |
| Brand name (AURA) | `components/Navbar.tsx`, `components/Footer.tsx`, `app/layout.tsx` |
| Site URL (SEO) | `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` |

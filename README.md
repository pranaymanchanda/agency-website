# Agency Website

Premium one-page agency site for an AI automation & web studio in Kuwait. Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, with full **English / Arabic (RTL)** language switching. Statically exported and ready for **Cloudflare Pages**.

## Features

- Static export (`output: "export"`) — pure HTML/CSS/JS, no server needed
- Bilingual EN ⇄ AR with automatic RTL layout, persisted in `localStorage`
- Sections: Hero, Services, Why Us, Portfolio, Process, Testimonials, FAQ, Contact, Footer
- SEO: metadata, Open Graph, JSON-LD, `robots.txt`, `sitemap.xml`
- Scroll-reveal animations, reduced-motion aware
- Minimal dependencies (only `next`, `react`, `react-dom`)

## Local development

```bash
cd agency-website
npm install
npm run dev        # http://localhost:3000
```

## Build static site

```bash
npm run build      # outputs to ./out
```

## Deploy to Cloudflare Pages (free)

**Option A — Dashboard:** Connect the repo, set:
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `agency-website`

**Option B — Wrangler CLI:**
```bash
npm run build
npx wrangler pages deploy out
```

## Customize

| What | Where |
| --- | --- |
| Brand name, tagline, all copy (EN + AR) | `lib/translations.ts` |
| Brand name placeholders `[Your Brand]` | `lib/translations.ts`, `app/layout.tsx` |
| WhatsApp number & contact email | `components/Contact.tsx` (top constants) |
| Accent color (`#2563eb`) | `tailwind.config.ts` |
| Social links | `components/Footer.tsx` |
| Site URL (SEO/sitemap/robots) | `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` |

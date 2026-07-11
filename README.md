# American Gage — americangage.com

Modern, SEO-optimized rebuild of the American Gage website. Next.js 15 (App Router) +
Tailwind CSS, deployed on Vercel.

## Stack

- **Next.js 15** — App Router, fully static output (all 21 pages prerendered)
- **Tailwind CSS 3** — design tokens from the AG logo (navy `#0e3a66`, gunmetal, CTA orange `#f26a1b`)
- **Fonts (self-hosted)** — Space Grotesk (display), Archivo (body), IBM Plex Mono (measurement specs)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy

Repo: `github.com/surgeadmin1/american-gage` → Vercel project (auto-deploys `main`).

### Environment variables (Vercel → Settings → Environment Variables)

| Var | Purpose |
| --- | --- |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Contact-form backend (e.g. a Formspree endpoint `https://formspree.io/f/xxxx`). Until set, the form falls back to opening a pre-filled email. |

### DNS cutover (when ready to go live)

1. Add `americangage.com` + `www` in Vercel → Domains.
2. Point the A/CNAME records per Vercel's instructions.
3. Old WordPress URLs are 301-redirected in `next.config.mjs` (`/capabilities/mass-2`, `/capabilities/dimensional-2`, old blog demo slugs, etc.).

## SEO features

- Per-page handwritten titles + meta descriptions (geo-targeted: "Orange County", "Placentia, CA")
- JSON-LD: `LocalBusiness` (sitewide), `Service` (services + each capability), `FAQPage`, `BreadcrumbList`
- `sitemap.xml` + `robots.txt` generated at build
- Fully static prerendered HTML — crawlable without JS (several competitors fail this)
- Descriptive alt text on all machinery photos, matched to the correct discipline

## Content architecture

All facts live in two data files — edit content there, not in page components:

- `data/capabilities.ts` — the 8 discipline pages (equipment, ranges, uncertainties, instrument lists)
- `data/faqs.ts` — FAQ page + FAQPage schema
- `lib/site.ts` — phone, address, hours, cert number, pickup routes, portal/scope URLs

## ⚠️ Facts to verify with the client before launch

Everything on the site was sourced from the client's existing site, cert PDFs, and photos —
but confirm these with American Gage directly:

1. **A2LA certificate number 4296.01** — taken from their actual A2LA cert PDFs (the old
   site's accreditations page incorrectly said 0086.01). Confirm against the current scope PDF.
2. **DMM resolution "up to 8.5 digits"** — old capabilities index said 8.5, old electrical
   page said 7.5. Photos show 8.5-digit-class references; confirm.
3. **Humidity uncertainty** — old pages conflict (0.58 %RH vs. a newer claim of 0.32 %RH via an
   RH Systems 473-RP2 chilled mirror). The site currently states range only (10–95 %RH); ask
   whether they own the 473-RP2 and want the uncertainty published.
4. **Vibration/accelerometer calibration** — announced on their 2026 blog post; mentioned
   briefly on the capabilities hub. Confirm scope before expanding.
5. **On-site pricing** ($275/$400/$800 minimums, $1.80/mile) and expedited fees — carried
   over from their current FAQ; confirm still current.
6. **"Over 1,000,000 calibrations performed"** — from their existing About page.
7. **Founding-year details** (1968 Orange CA, 1998 purchase, 2007 acquisition) — from their
   existing About page.

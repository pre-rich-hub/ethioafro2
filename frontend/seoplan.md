# SEO Plan — Simien Ethiopia Tours

Work the steps in order. Finish and commit one step before starting the next.
Site: `https://www.simienethiopiatours.com`

Priority stack after this plan: **SEO → GEO → i18n**

---

## Current state

### Done
- Root `metadataBase`, title template, default description, keywords (`app/layout.tsx`)
- Static `metadata` on marketing pages (about, contact, tours, destinations, experiences, blog, legal)
- `generateMetadata` on detail routes: tours, destinations, experiences, journal posts
- Admin + login routes set `robots: { index: false, follow: false }`
- Cloudinary images on public content (good for OG when wired correctly)

### Missing
- Post-deploy manual only: Search Console submit, live Analytics check, Rich Results Test

### Done (Step 1)
- `app/robots.ts` and `app/sitemap.ts` for public crawl discovery

### Done (Step 2)
- Shared `lib/seo/metadata.ts` helper (canonical, OG, Twitter, description truncate)
- Root metadata: no `v0.app` generator; Cloudinary Lalibela default OG; Twitter large image
- Static + detail pages use hardened metadata; 404 is `noindex`

### Done (Step 3)
- `JsonLd` component + `lib/seo/json-ld.ts` builders
- Home: TravelAgency + WebSite
- Tours / destinations / experiences / journal: entity schema + BreadcrumbList + Organization

### Done (Step 4)
- Tour place chips link to matching destinations; related experiences on tour pages
- Journal breadcrumbs align with JSON-LD; related destinations/tours per post
- Home hero CTAs are crawlable `/tours` + `/destinations` links
- Catalogue card alts improved; canonical host is `www.simienethiopiatours.com` (updated 2026-10-03 to match deployment)

### Done (Step 5)
- [`seo-verification.md`](seo-verification.md) — Analytics + Search Console + rich-results checklist
- [`geoplan.md`](geoplan.md) — GEO backlog (entities, facts, FAQs, answer-style copy)
- Title/soft-404 audit: no page-level fixes required

---

## Step 1 — Crawl basics

**Goal:** Search engines can discover every public URL and stay out of admin.

### Tasks
- [x] Add `frontend/app/robots.ts`
  - Allow `/`
  - Disallow `/admin`, `/login` (and any other private paths)
  - Point `sitemap` to `https://www.simienethiopiatours.com/sitemap.xml`
- [x] Add `frontend/app/sitemap.ts`
  - Home + static pages: `/`, `/about`, `/contact`, `/tours`, `/destinations`, `/experiences`, `/blog`, `/privacy`, `/terms`
  - Dynamic entries from catalogues: all tour, destination, experience, and blog slugs
  - Sensible `changeFrequency` / `priority` (home highest; legal lowest)
- [x] Verify locally: `/robots.txt` and `/sitemap.xml` render expected URLs
- [ ] After deploy: submit sitemap in Google Search Console (manual, one-time)

**Done when:** sitemap lists every public page; robots blocks admin/login.

---

## Step 2 — Metadata quality pass

**Goal:** Every public page has a strong, unique title + description + OG image.

### Tasks
- [x] Remove or replace `generator: 'v0.app'` in root layout
- [x] Set a proper default OG image (Cloudinary landscape, not logo)
- [x] Add Twitter card defaults (`summary_large_image`) in root metadata
- [x] Audit static pages — titles ≤ ~60 chars intent; descriptions unique and benefit-led
- [x] Harden `generateMetadata` for:
  - `/tours/[slug]`
  - `/destinations/[slug]`
  - `/experiences/[slug]`
  - `/blog/[slug]`
- [x] Per-detail metadata should include:
  - Unique `title` + `description`
  - `openGraph.images` from the page Cloudinary image
  - `alternates.canonical` for the slug URL
  - Optional `keywords` only where they add real value (destination/tour names)
- [x] Confirm 404 / not-found metadata does not look like a soft-404 indexable page

**Done when:** View-source / social debugger shows distinct titles, descriptions, and images on home, list, and several detail pages.

---

## Step 3 — Structured data (JSON-LD)

**Goal:** Rich, machine-readable entities for Google and answer engines.

### Tasks
- [x] Add a small helper (e.g. `frontend/lib/seo/json-ld.ts` or `components/seo/JsonLd.tsx`) that safely injects `<script type="application/ld+json">`
- [x] **Sitewide / home**
  - `Organization` + `TravelAgency` (or `TouristInformationCenter` if more accurate)
  - `WebSite` with `url`, `name`, optional `SearchAction` only if site search exists
- [x] **Tours** (`/tours/[slug]`)
  - `TouristTrip` and/or `Product` / `Offer` (price when known; “contact for price” / tailor-made when not)
  - Duration, location names, provider = Simien Ethiopia Tours
- [x] **Destinations** (`/destinations/[slug]`)
  - `TouristDestination` / `Place` with name, description, image, geo region if available
- [x] **Journal** (`/blog/[slug]`)
  - `Article` / `BlogPosting` with author, datePublished, image, publisher
- [x] **Breadcrumbs**
  - `BreadcrumbList` on all detail pages matching visible crumbs
- [ ] Validate a sample of each type in [Google Rich Results Test](https://search.google.com/test/rich-results)

**Done when:** Home, one tour, one destination, one journal post pass Rich Results / Schema checks without errors.

---

## Step 4 — On-page SEO & internal linking

**Goal:** Clear hierarchy and crawl paths between related content.

### Tasks
- [x] Confirm one primary `h1` per public page (heroes / titles)
- [x] Ensure visible breadcrumbs match JSON-LD breadcrumbs
- [x] Strengthen internal links:
  - Tour → related destinations + experiences
  - Destination → linked tours
  - Experience → related tours / destinations
  - Journal → relevant tours / destinations where natural
- [x] Home: ensure primary CTAs and key routes are crawlable links (not JS-only)
- [x] Image `alt` audit on heroes and catalogue cards (descriptive, not keyword-stuffed)
- [x] Check canonical host consistency (www vs apex) matches `metadataBase`

**Done when:** From any tour/destination detail page, a crawler can reach related catalogue pages via normal anchors.

---

## Step 5 — Measurement & handoff to GEO

**Goal:** Verify indexing and prepare the GEO workstream.

### Tasks
- [x] Confirm Analytics still fires on public pages
  - Wired via `components/common/Analytics.tsx` in production builds; post-deploy check listed in [`seo-verification.md`](seo-verification.md)
- [x] Search Console: coverage, sitemap status, sample URL inspection
  - Manual checklist documented in [`seo-verification.md`](seo-verification.md) (run after deploy)
- [x] Note any soft-404 / duplicate-title issues and fix
  - Audit found no page-level duplicate titles or soft-404 issues; 404/admin correctly noindex
- [x] Draft GEO follow-ups (next plan file or section):
  - See [`geoplan.md`](geoplan.md) — FAQ + FAQPage, entity naming, citeable facts, answer-style sections

**Done when:** SEO steps 1–4 are shipped; GEO has a short backlog ready.

---

## Out of scope for this SEO plan

- Full i18n / hreflang (comes after GEO)
- Paid ads / Search Ads copy
- Backend CMS for meta fields (static catalogues are enough for now)
- Rewriting all tour body copy for marketing tone (only SEO-critical fields)

---

## Suggested commit cadence

| Step | Suggested commit message |
|------|--------------------------|
| 1 | `feat(frontend): add robots.txt and sitemap for public routes` |
| 2 | `feat(frontend): harden page metadata and Open Graph images` |
| 3 | `feat(frontend): add JSON-LD structured data for catalogue pages` |
| 4 | `feat(frontend): improve on-page SEO and internal linking` |
| 5 | `chore(frontend): SEO verification notes / Search Console checklist` |

Work one step at a time. SEO Steps 1–5 are complete; start GEO from [`geoplan.md`](geoplan.md).

# SEO Verification Checklist

Use after deploying Steps 1–4. Site: `https://simienethiopiatours.com`

## Analytics (code confirmed)

- Vercel Analytics is wired in [`app/layout.tsx`](app/layout.tsx) via [`components/common/Analytics.tsx`](components/common/Analytics.tsx).
- It loads only when `NODE_ENV === 'production'` (correct for Vercel Analytics).
- Package present: `@vercel/analytics`.

### After deploy
- [ ] Open the Vercel project → Analytics and confirm page views on `/`, `/tours`, one tour slug.
- [ ] If Analytics is empty, confirm the production deployment is on Vercel and the Analytics product is enabled for the project.

## Google Search Console (manual)

- [ ] Verify property for `https://simienethiopiatours.com` (apex; matches `metadataBase`).
- [ ] Submit sitemap: `https://simienethiopiatours.com/sitemap.xml`
- [ ] Confirm `/robots.txt` shows Allow `/`, Disallow `/admin` + `/login`, and the sitemap URL.
- [ ] URL Inspection on samples:
  - `/`
  - `/tours`
  - one `/tours/[slug]`
  - one `/destinations/[slug]`
  - one `/blog/[slug]`
- [ ] Check Coverage / Pages for soft-404s, redirects, and excluded admin/login URLs.
- [ ] After indexing begins: watch for duplicate title / duplicate description warnings.

## Local / pre-deploy audit (2026-10-02)

| Check | Result |
|-------|--------|
| Public page titles unique (45 tours, 29 destinations, 9 experiences, 6 posts + static) | Pass — no page-level title collisions |
| Tour title vs destination name collisions | None |
| 404 `robots` | `noindex` |
| Admin `robots` | `noindex, nofollow` |
| Sitemap URL count | 98 public URLs |
| Canonical / OG host | `https://simienethiopiatours.com` (apex) |
| JSON-LD present | Home, tour, destination, experience, journal |

No soft-404 or duplicate-title code fixes required from this audit.

## Rich results (optional, post-deploy)

Validate with [Google Rich Results Test](https://search.google.com/test/rich-results):

- [ ] Home (TravelAgency / WebSite)
- [ ] One tour (TouristTrip + BreadcrumbList)
- [ ] One destination (TouristDestination)
- [ ] One journal post (BlogPosting)

## Handoff

SEO implementation Steps 1–4 are complete. Next workstream: **GEO** — see [`geoplan.md`](geoplan.md).

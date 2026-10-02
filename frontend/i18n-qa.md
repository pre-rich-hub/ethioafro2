# i18n QA checklist + handoff

Signed off: **2026-10-02** (local webpack `next dev` on `:3000`).

Companion plans: [`i18nplan.md`](i18nplan.md), [`seo-verification.md`](seo-verification.md), [`geo-verification.md`](geo-verification.md).

---

## Manual smoke (Step 6)

Checked each locale × Home, Tours list, one tour, one destination, Contact.

| Locale | Home | `/tours` | `/tours/the-historic-route` | `/destinations/lalibela` | `/contact` |
|--------|------|----------|-----------------------------|--------------------------|------------|
| `en` (unprefixed) | Pass | Pass | Pass | Pass | Pass |
| `es` | Pass | Pass | Pass | Pass | Pass |
| `fr` | Pass | Pass | Pass | Pass | Pass |
| `de` | Pass | Pass | Pass | Pass | Pass |
| `zh` | Pass | Pass | Pass | Pass | Pass |

Also confirmed:

- [x] `lang` attribute matches locale
- [x] `hreflang` / `x-default` present on samples
- [x] `/admin` stays outside locales (307 → `/login`)
- [x] Organization schema name remains **Simien Ethiopia Tours**

**25 / 25** key URL checks returned HTTP 200 with expected shell or catalogue copy where asserted.

---

## RTL

Not required for v1 (no Arabic / Hebrew locale).

---

## Fonts

| Stack | Role | Coverage |
|-------|------|----------|
| Inter (`--font-inter`) | UI sans | Latin (es/fr/de/en) |
| Fraunces (`--font-cormorant`) | Display serif | Latin |
| Noto Sans SC (`--font-noto-sc`) | CJK fallback | Simplified Chinese glyphs for `zh` |

`DocumentShell` loads Noto Sans SC with `preload: false`. CSS stacks it after Inter/Fraunces, then system CJK fallbacks (`PingFang SC`, `Microsoft YaHei`, `Songti SC`).

---

## Open backlog (post–v1)

### Pass-2 catalogue bodies

**Done (es / fr / de / zh):** destination detail + Lalibela/Simien FAQs, experience detail, journal bodies, About founder essay, **tour itineraries (45)**, enquiry activity chips. See Pass-2 status in [`i18nplan.md`](i18nplan.md).

Spot-checked locally: `/es/destinations/lalibela`, `/es/tours/the-historic-route`, `/de/about`, `/es/blog/when-to-visit-ethiopia` show translated deep copy.

Translations are **machine-assisted drafts** — schedule native-speaker review before treating them as final marketing copy.

**Pass-2 chrome leftovers — finished (2026-10-02):** detail-page chrome (destination / tour / experience / journal), breadcrumbs, CtaBand strings, card CTAs, Journal (`Blog` namespace, filter label, empty state, `Intl` date formatting, meta description) and Home Experiences featured rows are all in `messages/*.json`.

Spot-checked on `:3000`: `/es/destinations/lalibela` (no “At a Glance”), `/es/blog` (no “All Writing”; localized meta description), `/es|fr|de|zh/blog/lalibela-at-dawn` (localized date, breadcrumb, Direct Answer, Read Next), `/es|fr|zh/tours/*` (nights plural, From / per person, Tailor-made), `/de/experiences/injera-and-ethiopian-cooking`, `/zh` Experiences section in Chinese.

**Chrome mop-up also finished:** `EnquiryForm` (`Enquiry` namespace), `/tours` “All Journeys” filter + empty state, Home “Where to next” localized names/regions, tour audience bodies via `Tours.audience*` keys. Spot-checked `/es/contact`, `/es/tours`, `/es` (Where to next), `/zh` Experiences.

**Truly residual:**

1. Native-speaker review of machine-assisted translations
2. JSON-LD tailor-made offer description (English schema string)
3. Rare “not found” metadata titles on detail routes (noindex)

### Product / platform later

- Amharic (`am`) — fonts, picker, and translation scope
- CMS for catalogue copy instead of JSON overlays
- Admin UI translation (out of scope)
- Currency / price localization (USD display stays)

---

## Deploy handoff

1. Push `main` and deploy frontend.
2. Re-run Search Console samples from [`seo-verification.md`](seo-verification.md) including `/es`, `/fr/tours`, `/zh/contact`.
3. Spot-check Chinese pages visually after deploy (Noto load + glyph fallback).
4. Schedule Pass-2 when ready — do **not** machine-translate full itineraries without review.

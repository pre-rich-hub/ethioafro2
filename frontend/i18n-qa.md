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

### Pass-2 catalogue bodies (still English)

See Step 4 in [`i18nplan.md`](i18nplan.md). Priority suggestion:

1. Destination `paragraphs` / highlights / FAQs (high SEO)
2. About founder essay
3. Experience detail paragraphs
4. Tour day itineraries (largest volume — 45 × 4 locales)
5. Journal article bodies

### Product / platform later

- Amharic (`am`) — fonts, picker, and translation scope
- CMS for catalogue copy instead of JSON overlays
- Admin UI translation (out of scope)
- Currency / price localization (USD display stays)
- Human review of machine-assisted itinerary translations before publish

### Minor chrome leftovers

- Some detail-page labels still English (see Pass-2 list)
- Blog index meta description still English shell
- Enquiry form activity chips may still show English `short` depending on form wiring

---

## Deploy handoff

1. Push `main` and deploy frontend.
2. Re-run Search Console samples from [`seo-verification.md`](seo-verification.md) including `/es`, `/fr/tours`, `/zh/contact`.
3. Spot-check Chinese pages visually after deploy (Noto load + glyph fallback).
4. Schedule Pass-2 when ready — do **not** machine-translate full itineraries without review.

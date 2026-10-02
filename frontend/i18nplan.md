# i18n Plan — Simien Ethiopia Tours

Work the steps in order. Finish and commit one step before starting the next.
Depends on: SEO + GEO foundation already shipped.

**Stack choice:** [next-intl](https://next-intl.dev) on Next.js App Router (`frontend/`).
**Locales (match existing LanguagePicker):** `en` (default), `es`, `fr`, `de`, `zh`.
**URL strategy:** `localePrefix: 'as-needed'` — English stays unprefixed (`/tours`); other locales use `/es/tours`, `/fr/tours`, etc.

Priority after this plan: product polish / citation follow-ups as needed.

---

## Current state

### Done
- Locale routing via `next-intl` + `proxy.ts` (`localePrefix: 'as-needed'`, `localeDetection: false`)
- Guest pages under `app/[locale]/`; admin/login outside locales
- `<html lang={locale}>` via `DocumentShell`
- LanguagePicker / mobile language list switch locale while preserving path
- Message catalogs for Nav / Footer / Common / Cta / NotFound; chrome flips with locale
- SEO: sitemap, metadata helper, JSON-LD (English-only today)
- GEO: English FAQs, facts, direct answers

### Missing
- Marketing page shells still English (heroes, section labels)
- No hreflang / localized `alternates`
- Catalogue data (tours, destinations, journal) is English-only TypeScript
- Admin stays English-only (out of scope for guest i18n)

---

## Principles

- Translate **UI chrome and marketing shells** before full catalogue essays.
- Never invent tour facts in translation — keep numbers, place names, and licensed claims consistent with English source.
- Keep **one content source of truth in English**; add locale overlays rather than duplicating 45 tour files five times on day one.
- Preserve SEO: every public locale URL needs metadata + sitemap entries + hreflang.
- Admin (`/admin`, `/login`) stays English and outside locale prefixes.

---

## Step 1 — Routing foundation

**Goal:** Real locale URLs and a working language switcher (still mostly English copy).

### Tasks
- [x] Add `next-intl` dependency
- [x] Create `frontend/i18n/routing.ts` — locales, default `en`, `localePrefix: 'as-needed'`
- [x] Create `frontend/i18n/request.ts` + `frontend/proxy.ts` (guest routes only; skip `/admin`, `/api`, `/login`)
- [x] Move App Router tree under `frontend/app/[locale]/...` (or next-intl plugin equivalent for Next 16)
- [x] Shared layout sets `<html lang={locale}>`
- [x] Wire `LanguagePicker` / mobile language list to navigate between locale-prefixed paths (preserve current path)
- [x] Verify: `/`, `/es`, `/fr/tours`, `/de/about`, `/zh/contact` resolve; `/admin` unchanged

**Done when:** Switching language changes the URL and `lang` attribute; English URLs remain unprefixed.

---

## Step 2 — Message catalogs (UI chrome)

**Goal:** Nav, footer, common buttons, and shared components use translations.

### Tasks
- [x] Add `frontend/messages/{en,es,fr,de,zh}.json` (or `.ts`) with namespaces: `Nav`, `Footer`, `Common`, `Cta`, `NotFound`
- [x] Replace hardcoded strings in Navbar, Footer, Wordmark aria, LinkButton defaults, 404
- [x] Localize `routes.ts` **labels** (hrefs stay path-based; locale handled by next-intl `Link`)
- [x] Keep contact phone/email/address as shared constants (not translated numbers)

**Done when:** Switching locale updates nav/footer/CTA chrome without breaking layout.

---

## Step 3 — Marketing page shells

**Goal:** Static page chrome (heroes, section eyebrows, FAQ headings) translated; long catalogue bodies can stay English temporarily with a clear fallback.

### Priority pages
1. Home (Hero, BrandIntro, Why Ethiopia labels)
2. Contact + Tours list + Destinations list + Experiences list
3. About shell (titles/eyebrows; founder essay can follow in Step 4)
4. Legal page titles (privacy/terms) — full legal body may stay English initially with a notice, or ship translations if short enough

### Tasks
- [ ] Extract page shell strings into message files
- [ ] Use `getTranslations` / `useTranslations` in page components
- [ ] FAQ **questions/answers**: start with Contact + Tours FAQ sets in all locales (high intent); destination FAQs can lag one step
- [ ] Fallback: missing key → English (dev warning)

**Done when:** Home, Contact, Tours, Destinations, Experiences, About shells flip language cleanly.

---

## Step 4 — Catalogue content strategy

**Goal:** Tours, destinations, experiences, and journal readable in each locale without a 5× dump of giant TS files.

### Approach (locked)
- Keep English catalogues as source (`tour.data.ts`, etc.)
- Add parallel locale maps for **card-level fields** first: `title` / `name`, `teaser`, `summary`/`intro`/`excerpt`
- Defer full itinerary day text / long essays to a second pass (or CMS later)
- Where a locale string is missing, show English and mark `inLanguage` accurately in metadata when partially translated

### Tasks
- [ ] Define `Localized<T>` overlay types + loaders (`getTour(slug, locale)`, etc.)
- [ ] Translate destination names/teasers/intros (29) — highest SEO value
- [ ] Translate tour titles/teasers/summaries (45) — card + meta level
- [ ] Translate experience + journal card fields
- [ ] Wire detail pages to localized fields; leave deep itinerary English until pass 2
- [ ] Document pass-2 backlog: full itineraries, journal bodies, About founder letter

**Done when:** Listing cards and meta titles/descriptions are localized for all five languages; detail pages at least show localized title + summary.

---

## Step 5 — SEO / GEO for locales

**Goal:** International SEO does not regress.

### Tasks
- [ ] `alternates.languages` / hreflang on all public pages via metadata helper
- [ ] Extend `sitemap.ts` with locale variants (or sitemap index)
- [ ] Localize root/default metadata descriptions where message keys exist
- [ ] JSON-LD: set `inLanguage`; keep Organization name as **Simien Ethiopia Tours** (brand, not translated)
- [ ] Ensure LanguagePicker links are crawlable `<a href>`
- [ ] Update `seo-verification.md` / `geo-verification.md` with locale URL samples

**Done when:** View-source shows hreflang; sitemap lists non-English URLs; brand entity name unchanged in schema.

---

## Step 6 — QA checklist + handoff

### Tasks
- [ ] Manual pass: each locale × Home, Tours, one tour, one destination, Contact
- [ ] RTL: not required (no Arabic locale in v1)
- [ ] Fonts: confirm Fraunces/Inter cover Latin + check Chinese fallback (add Noto Sans SC or similar for `zh` if glyphs missing)
- [ ] Note open backlog (full essay translation, Amharic later, CMS)

**Done when:** Checklist signed off; i18nplan Step boxes ticked.

---

## Out of scope (v1)

- Amharic / other locales beyond EN·ES·FR·DE·ZH
- Translating admin UI
- Machine-translating full itinerary essays without review
- Currency / price localization (USD display stays; wording around price can translate)
- Separate domain per language

---

## Suggested commit cadence

| Step | Suggested commit message |
|------|--------------------------|
| 1 | `feat(frontend): add next-intl locale routing and language switcher` |
| 2 | `feat(frontend): translate nav, footer, and shared UI chrome` |
| 3 | `feat(frontend): localize marketing page shells and key FAQs` |
| 4 | `feat(frontend): add locale overlays for catalogue card content` |
| 5 | `feat(frontend): hreflang, localized sitemap, and JSON-LD language` |
| 6 | `chore(frontend): i18n QA notes and translation backlog` |

---

## Open decision (resolved for this plan)

| Topic | Decision |
|-------|----------|
| Library | next-intl |
| Locales | en, es, fr, de, zh |
| Prefix | as-needed (EN unprefixed) |
| Catalogue v1 | titles + teasers/summaries; long bodies later |
| Brand name | never translate “Simien Ethiopia Tours” in schema |

If you want Amharic (`am`) in v1, say so before Step 1 — it changes fonts, picker, and translation scope.

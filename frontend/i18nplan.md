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
- `<html lang={locale}>` via `DocumentShell` + Noto Sans SC CJK fallback for `zh`
- LanguagePicker / mobile language list — crawlable locale links
- Message catalogs for UI chrome + marketing page shells (Steps 2–3)
- Catalogue card/meta overlays for tours, destinations, experiences, journal (Step 4)
- SEO locales: hreflang, sitemap × 5, JSON-LD `inLanguage`, localized metadata (Step 5)
- QA signed off in [`i18n-qa.md`](i18n-qa.md) (Step 6)
- GEO: English FAQs, facts, direct answers; Lalibela + Simien destination FAQs localized (Pass-2)

### Missing / residual
- Native review of MT drafts; JSON-LD tailor-made schema string; Amharic/CMS later — see Step 4 + [`i18n-qa.md`](i18n-qa.md)
- Admin stays English-only (out of scope)

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
- [x] Extract page shell strings into message files
- [x] Use `getTranslations` / `useTranslations` in page components
- [x] FAQ **questions/answers**: start with Contact + Tours FAQ sets in all locales (high intent); destination FAQs can lag one step
- [x] Fallback: missing key → English (dev warning)

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
- [x] Define `Localized<T>` overlay types + loaders (`getTour(slug, locale)`, `getLocalizedTours`, `getDestination` / `getLocalizedDestinations`, `getActivity` / `getLocalizedActivities`, `getPost` / `getLocalizedPosts`, `getToursData(locale)`, `getTourData(slug, locale)`) — `lib/i18n/localized.ts` + `features/*/data/overlays/`
- [x] Translate destination names/teasers/intros/tag/region (29) — es, fr, de, zh
- [x] Translate tour titles/teasers/summaries (45) — es, fr, de, zh
- [x] Translate experience (9: title, teaser, intro, short, category, duration, where) + journal (6: title, excerpt, category, directAnswer) card fields — es, fr, de, zh
- [x] Wire detail pages to localized fields; leave deep itinerary English until pass 2 (home, tours, destinations, experiences, blog pages + `DestinationGrid`, `Destinations` carousel, `BlogArchive`/`JournalTeaser`, Footer, Destinations/Tours/Experiences nav dropdowns)
- [x] Document pass-2 backlog (below)

### Implementation notes
- Overlays live in `features/{tours,destinations,experiences,blog}/data/overlays/{es,fr,de,zh}.json`, keyed by slug; `applyOverlay` falls back to English per field (arrays such as `paragraphs`/`highlights`/`body` replace wholly).
- RSC pages/components use `getLocale()` from `next-intl/server`; client components (nav dropdowns, `useDestinations`) use `useLocale()` and call the sync `getLocalized*` utils (JSON + data only, safe in client bundles).
- Experience categories: grouping and `#anchor` ids stay keyed on the **English** category (`slugify`); only the visible label is localized (`getActivityCategoryLabels`).
- Merge order for tours: English static → locale overlay → live API `from` / `featured`.
- Metadata `title`/`description` on detail pages use localized fields; list pages now use `generateMetadata` (title from `Crumbs`, description from hero keys; Blog index description from `Blog.metaDescription`).

### Pass-2 status
**Done (es, fr, de, zh — deep-merged into Step 4 overlays; card fields kept):**
- [x] **Destination detail (29):** `bestTime`, `duration`, `altitude`, `highlights[]`, `paragraphs[]`
- [x] **Destination FAQs:** Lalibela + Simien (`lib/i18n/destination-faq-overlays/`)
- [x] **Experience detail (9):** `season`, `paragraphs[]`, `includes[]`, `goodToKnow`
- [x] **Journal (6):** `readTime`, `authorRole`, `body[]`
- [x] **About founder essay:** `founderP1–P4` + image alt/caption in `messages/*.json`
- [x] **Tour itineraries (45):** `days`, `style`, `season`, `group`, `from` wording, `includes[]`, `excludes[]`, `itinerary[]`, `places[]`
- [x] **Enquiry chips:** `EnquiryForm` uses `getLocalizedActivities(locale)` for `short` labels

**Pass-2 chrome leftovers — done (en, es, fr, de, zh):**
- [x] **Detail-page chrome** in message namespaces (no hard-coded English): `DestinationOverview`, `DestinationJourneys`, `DestinationEnquiry`, `TourOverview` / `Itinerary` / `Inclusions` / `Enquiry` / `PriceCard` (incl. ICU `Tours.nights` plural, From / per person / Tailor-made), `RelatedTours`, `TourRelatedExperiences`, `ExperienceStory` / `Places` / `Journeys` / `Enquiry`, `BlogRelatedCatalogue`, `BlogBody`, `RelatedPosts`
- [x] **Breadcrumbs** on destination, tour, experience and blog detail pages (`Crumbs`, `Nav.journal`, `Crumbs.ariaLabel`; `PageHero` + `BlogHeader`)
- [x] **CtaBand** props on destination / tour / blog detail + blog index → `Destinations.detailCta*`, `Tours.detailCta*`, `Blog.ctaTitle|ctaText|ctaSecondary|articleCta*`
- [x] **Card CTAs** — `Cta.explore` (DestinationCard, ActivityCard), `Cta.seeTheJourney` (TourCard), `Cta.enquireNow`; card image alts via `Destinations.cardAlt` / `Tours.cardAlt`
- [x] **Journal:** new `Blog` namespace (hero, archive, filter "All Writing" + aria + empty state, teaser, newsletter, article chrome, `metaDescription`); `BlogList` filter state no longer keyed on the English label
- [x] **Journal dates:** formatted from the English display date with `Intl.DateTimeFormat(locale)` via `lib/i18n/format-date.ts` (no per-locale `date` overlays needed). `toIsoDate` now reuses the same timezone-safe parser
- [x] **Home `Experiences`** featured rows → `Home.experiencesCard{1-4}{Eyebrow|Title|Text|Link}`
- [x] Locale-aware links: detail components, `PageHero`, `FaqSection` now use `@/i18n/navigation` `Link` (previously jumped to unprefixed English URLs); `FaqSection` default eyebrow → `Shared.commonQuestions`
- [x] Localized tour `from` handled: `isTailorMade()` accepts translated sentinels; `getPriceAmount()` extracts the `$` amount for price cards / enquiry line / Tours dropdown

**Still English / minor leftovers:**
- JSON-LD tailor-made price description string; rare “not found” metadata titles on detail routes (noindex)
- Native-speaker review of MT drafts before production marketing claims
- Amharic / CMS — later

**Also finished in chrome mop-up:**
- [x] `EnquiryForm` full UI (new `Enquiry` namespace + localized journey style chips)
- [x] `/tours` “All Journeys” filter + empty state (`Tours.allJourneys` / `emptyStyle` / `filterAria`)
- [x] Home “Where to next” names/regions from localized destinations + i18n `Link`
- [x] Tour audience “Who this is for / What this is not” bodies via `Tours.audience*` keys

**Done when (Pass-2 catalogue goal):** Detail pages show localized deep copy for destinations, tours, experiences, journal, and founder essay.

---

## Step 5 — SEO / GEO for locales

**Goal:** International SEO does not regress.

### Tasks
- [x] `alternates.languages` / hreflang on all public pages via metadata helper
- [x] Extend `sitemap.ts` with locale variants (or sitemap index)
- [x] Localize root/default metadata descriptions where message keys exist
- [x] JSON-LD: set `inLanguage`; keep Organization name as **Simien Ethiopia Tours** (brand, not translated)
- [x] Ensure LanguagePicker links are crawlable `<a href>`
- [x] Update `seo-verification.md` / `geo-verification.md` with locale URL samples

**Done when:** View-source shows hreflang; sitemap lists non-English URLs; brand entity name unchanged in schema.

---

## Step 6 — QA checklist + handoff

### Tasks
- [x] Manual pass: each locale × Home, Tours, one tour, one destination, Contact — **25/25 Pass** (2026-10-02); details in [`i18n-qa.md`](i18n-qa.md)
- [x] RTL: not required (no Arabic locale in v1)
- [x] Fonts: Fraunces/Inter for Latin; added **Noto Sans SC** CJK fallback for `zh` (`DocumentShell` + `globals.css`)
- [x] Note open backlog (Pass-2 bodies, Amharic later, CMS) — [`i18n-qa.md`](i18n-qa.md)

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

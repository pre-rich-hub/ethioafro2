# GEO Plan — Simien Ethiopia Tours

Generative Engine Optimization follows SEO Steps 1–4.
Goal: make Simien Ethiopia Tours easy for AI Overviews, chat answers, and citation engines to quote accurately.

Work these steps in order. Prefer small commits per step.

---

## Principles

- Answer first, then detail — short blocks models can lift cleanly.
- Keep entity names stable: **Simien Ethiopia Tours**, destination names as in the catalogue, tour titles unchanged.
- Prefer citeable facts with numbers/dates over adjectives.
- Do not invent awards, guest counts, or prices for tailor-made trips.

---

## Step 1 — Entity consistency

**Goal:** One canonical naming pattern everywhere (UI, metadata, JSON-LD).

### Tasks
- [x] Document canonical strings in a small `lib/seo/entities.ts` (company legal/display name, base URL, founding story one-liner).
- [x] Sweep About / home / footer / JSON-LD for drift (“Simien Ethiopia”, “Simien Tours”, etc.).
- [x] Normalize destination and tour style labels (no alternate spellings in nav vs body).

**Done when:** Company and place names match across layout, catalogue, and schema.

---

## Step 2 — Citeable facts

**Goal:** Stable fact blocks answer engines can quote.

### Tasks
- [x] Extract a short facts list (UNESCO sites, founding, base city, licensing, languages) into reusable copy or data.
- [x] Surface facts on About and optionally Home (not in the hero — keep hero clean).
- [x] Ensure JSON-LD Organization fields stay aligned with those facts.

**Done when:** About page has a clear, scannable fact set that matches schema.

---

## Step 3 — FAQ blocks + `FAQPage` schema

**Goal:** High-intent Q&A with matching structured data.

### Priority pages
1. `/contact` and/or Home (planning a trip)
2. `/tours` (how private trips work, pricing, group size)
3. Key destinations: Lalibela, Simien, Danakil, Omo
4. Key planning journal posts (link FAQ answers back to full essays)

### Tasks
- [x] Write 4–6 real FAQs per priority page (altitude, best season, visas, fitness, photography consent, tailor-made pricing).
- [x] Add `FAQPage` JSON-LD via the existing `JsonLd` helper.
- [x] Keep answers concise (2–4 sentences); link deeper for detail.

**Shipped:** Contact, Tours, Lalibela, Simien Mountains. Danakil/Omo and journal FAQs can follow later.

**Done when:** At least Home/Contact + Tours + two destinations ship FAQ + schema.

---

## Step 4 — Answer-style sections

**Goal:** Sections that read like direct answers, not only marketing narrative.

### Tasks
- [x] On destination pages: add a short “At a glance” (best time, altitude, typical stay) near the top — can reuse existing meta fields.
- [x] On tour pages: one-paragraph “Who this is for” / “What this is not” where missing.
- [x] On journal posts: open with a direct answer sentence when the title is a question/how-to.

**Done when:** Top destinations and flagship tours have a quotable summary block.

---

## Step 5 — Measurement

### Tasks
- [x] Re-check Search Console for FAQ rich results (if eligible).
  - Manual post-deploy checklist in [`geo-verification.md`](geo-verification.md)
- [x] Spot-check ChatGPT / Perplexity / Google AI Overview prompts (“best private Ethiopia tour operator”, “when to visit Lalibela”) and note citations.
  - Prompt list + log table in [`geo-verification.md`](geo-verification.md) (fill after deploy)
- [x] Feed gaps back into FAQ / facts copy.
  - Pre-deploy inventory documented; About page now includes Organization JSON-LD to match citeable facts
  - Follow-up backlog (Danakil/Omo FAQs, Home FAQ) listed in verification doc

**Done when:** GEO Steps 1–4 are shipped and a measurement checklist exists for ongoing citation checks.

---

## Out of scope (for later)

- Full i18n / hreflang (after GEO)
- Paid media
- Auto-generated FAQ spam

---

## Suggested commit cadence

| Step | Suggested commit |
|------|------------------|
| 1 | `feat(frontend): canonicalize GEO entity naming` |
| 2 | `feat(frontend): add citeable company and destination facts` |
| 3 | `feat(frontend): FAQ sections with FAQPage schema` |
| 4 | `feat(frontend): answer-style summaries on catalogue pages` |
| 5 | `chore(frontend): GEO citation spot-check notes` |

GEO Steps 1–5 are complete on the implementation side. Run [`geo-verification.md`](geo-verification.md) after deploy; then start i18n when ready.

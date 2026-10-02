# GEO Verification Checklist

Use after deploying GEO Steps 1–4. Site: `https://simienethiopiatours.com`

Companion to [`seo-verification.md`](seo-verification.md).

---

## Pre-deploy inventory (code — 2026-10-02)

| Page | Visible GEO signals | Structured data |
|------|---------------------|-----------------|
| `/` | Why Ethiopia citeable stats (after BrandIntro) | TravelAgency + WebSite |
| `/about` | Company “At a Glance” facts | TravelAgency (Organization) |
| `/contact` | FAQ section (5) | TravelAgency + FAQPage |
| `/tours` | FAQ section (6) | TravelAgency + FAQPage |
| `/destinations/lalibela` | At a glance + FAQ (5) | TouristDestination + BreadcrumbList + FAQPage |
| `/destinations/simien-mountains` | At a glance + FAQ (5) | TouristDestination + BreadcrumbList + FAQPage |
| `/tours/[slug]` | Who this is for / What this is not | TouristTrip + BreadcrumbList |
| `/blog/[slug]` | Direct Answer lead (all 6 posts) | BlogPosting + BreadcrumbList |

Canonical entity source: [`lib/seo/entities.ts`](lib/seo/entities.ts)  
Citeable facts: [`lib/seo/facts.ts`](lib/seo/facts.ts)  
FAQs: [`lib/seo/faq-data.ts`](lib/seo/faq-data.ts)

---

## Google Search Console / Rich results (manual, post-deploy)

- [ ] Rich Results Test — `/contact` (FAQ)
- [ ] Rich Results Test — `/tours` (FAQ)
- [ ] Rich Results Test — `/destinations/lalibela` (FAQ + destination)
- [ ] Rich Results Test — `/destinations/simien-mountains` (FAQ + destination)
- [ ] Rich Results Test — `/` (TravelAgency / WebSite)
- [ ] Search Console → Enhancements / rich result reports for FAQ (when available)
- [ ] Confirm no FAQ spam warnings or invalid FAQ items

---

## Answer-engine citation spot-checks (manual)

Run each prompt in a private/incognito session where possible. Note date, tool, and whether Simien Ethiopia Tours or our URLs appear.

### Prompts

1. “best private Ethiopia tour operator Addis Ababa”
2. “Simien Ethiopia Tours”
3. “when to visit Lalibela”
4. “best time to visit Ethiopia highlands vs Danakil”
5. “responsible travel Omo Valley photography”
6. “Simien Mountains trek altitude how many days”

### Log

| Date | Tool | Prompt # | Cited us? | Notes / gaps to fix |
|------|------|----------|-----------|---------------------|
| | ChatGPT | | | |
| | Perplexity | | | |
| | Google AI Overview | | | |
| | ChatGPT | | | |
| | Perplexity | | | |
| | Google AI Overview | | | |

### If we are missing

- Strengthen FAQ answers on the matching page
- Add a citeable fact or direct-answer line
- Ensure the page is in the sitemap and indexed (see SEO verification)
- Do **not** invent awards, guest counts, or prices

---

## Suggested follow-ups (backlog)

- FAQ sets for Danakil + Omo destinations
- FAQ on Home (planning a first trip) if Contact FAQs are not enough
- More hand-written tour audience overrides beyond the four flagships
- i18n / hreflang (after GEO measurement settles)

---

## Handoff

GEO implementation Steps 1–4 are complete. Step 5 is ongoing measurement — tick the boxes above after each deploy wave.

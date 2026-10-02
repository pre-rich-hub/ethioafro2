import { contact } from '@/lib/constants/contact'
import { SITE_URL } from '@/lib/seo/metadata'

/**
 * Canonical entity strings for SEO/GEO.
 * Prefer importing from here instead of hardcoding company names in UI or schema.
 */
export const company = {
  /** Full public / legal display name — use in titles, schema, copyright, prose. */
  name: 'Simien Ethiopia Tours',
  /**
   * Two-line lockup for the logo wordmark only (“Simien Ethiopia” + “Tours”).
   * Do not use as a standalone company name in body copy or schema.
   */
  wordmarkPrimary: 'Simien Ethiopia',
  wordmarkSecondary: 'Tours',
  tagline: 'Journeys Through the Land of Origins',
  /** One-line founding story for schema / answer engines. */
  foundingOneLiner:
    'A licensed, family-run Ethiopian tour company founded by Mihiret Getenat — born in Bahir Dar, trained in Addis Ababa, and built around private, tailor-made journeys.',
  founder: 'Mihiret Getenat',
  baseCity: 'Addis Ababa',
  country: 'Ethiopia',
  areaServed: 'Ethiopia',
  url: SITE_URL,
  email: contact.email,
  telephone: contact.phone,
  streetAddress: 'Bole Medhaniallem, Cape Verde Street 1000',
  addressLocality: 'Addis Ababa',
  addressCountry: 'ET',
  defaultDescription:
    'Private, tailor-made journeys through Ethiopia with a licensed Addis Ababa-based operator. Walk through kingdoms carved from stone, wake above the clouds in the Simien Mountains, and share coffee with families who have welcomed travellers for generations.',
  ogDescription:
    'Private, tailor-made journeys through Ethiopia, designed around you by a licensed local operator.',
} as const

export const defaultDocumentTitle = `${company.name} — ${company.tagline}`

export const titleTemplate = `%s · ${company.name}`

/** Destination names as they appear in the catalogue — keep UI/nav in sync with these. */
export const canonicalDestinationNames = [
  'Simien Mountains',
  'Gondar',
  'Lalibela',
  'Lake Tana & Blue Nile',
  'Danakil Depression',
  'Gheralta',
  'Ras Dashen',
  'Gorgora',
  'Guassa Plateau',
  'Awra Amba',
  'Choke Mountains',
  'Hayk & Istifanos',
  'Axum',
  'Omo Valley',
  'Bale Mountains',
  'Addis Ababa',
  'Harar',
  'Debre Libanos',
  'Tiya & Adadi Mariam',
  'Bishoftu & Mount Zuqualla',
  'Menagesha Suba Forest',
  'Wenchi Crater Lake',
  'Awash National Park',
  'Sof Omar Caves',
  'Borana & Yabelo',
  'Jimma',
  'Arba Minch & Nechisar',
  'Konso',
  'Sidama & Yirgacheffe',
] as const

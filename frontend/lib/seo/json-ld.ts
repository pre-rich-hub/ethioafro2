import type { Post } from '@/features/blog/types/blog.types'
import type { Destination } from '@/features/destinations/types/destination.types'
import type { Activity } from '@/features/experiences/types/experience.types'
import type { Tour } from '@/features/tours/types/tour.types'
import { isTailorMade } from '@/features/tours/utils/tour.utils'
import { company } from '@/lib/seo/entities'
import type { FaqItem } from '@/lib/seo/faq.types'
import { DEFAULT_OG_IMAGE, SITE_URL } from '@/lib/seo/metadata'

type JsonLdObject = Record<string, unknown>

export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

function absoluteUrl(path: string) {
  if (path.startsWith('http')) return path
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`
}

/** Parse display dates like "June 18, 2026" into ISO YYYY-MM-DD when possible. */
export function toIsoDate(displayDate: string): string | undefined {
  const parsed = Date.parse(displayDate)
  if (Number.isNaN(parsed)) return undefined
  return new Date(parsed).toISOString().slice(0, 10)
}

/** Parse "11 Days" / "1 Day" into ISO-8601 duration. */
export function toIsoDuration(daysLabel: string): string | undefined {
  const match = daysLabel.match(/(\d+)\s*Day/i)
  if (!match) return undefined
  return `P${match[1]}D`
}

function parseOfferPrice(from: string): number | undefined {
  const match = from.replace(/,/g, '').match(/\$(\d+(?:\.\d+)?)/)
  if (!match) return undefined
  return Number(match[1])
}

export function organizationJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': ORGANIZATION_ID,
    name: company.name,
    legalName: company.name,
    alternateName: `${company.wordmarkPrimary} ${company.wordmarkSecondary}`,
    description: company.foundingOneLiner,
    slogan: company.tagline,
    url: company.url,
    logo: absoluteUrl('/images/logo.png'),
    image: DEFAULT_OG_IMAGE,
    email: company.email,
    telephone: company.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.streetAddress,
      addressLocality: company.addressLocality,
      addressCountry: company.addressCountry,
    },
    areaServed: {
      '@type': 'Country',
      name: company.areaServed,
    },
    foundingLocation: {
      '@type': 'Place',
      name: 'Bahir Dar',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bahir Dar',
        addressCountry: 'ET',
      },
    },
    founder: {
      '@type': 'Person',
      name: company.founder,
      jobTitle: 'Founder',
    },
    knowsAbout: [
      'Private Ethiopia tours',
      'Simien Mountains',
      'Lalibela',
      'Danakil Depression',
      'Omo Valley',
      'Ethiopian coffee journeys',
    ],
  }
}

export function websiteJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: company.url,
    name: company.name,
    description: company.ogDescription,
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en',
  }
}

export function breadcrumbJsonLd(
  crumbs: { name: string; path?: string }[],
): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      ...(crumb.path ? { item: absoluteUrl(crumb.path) } : {}),
    })),
  }
}

export function tourJsonLd(tour: Tour): JsonLdObject {
  const url = absoluteUrl(`/tours/${tour.slug}`)
  const duration = toIsoDuration(tour.days)
  const price = isTailorMade(tour) ? undefined : parseOfferPrice(tour.from)

  const offer: JsonLdObject = {
    '@type': 'Offer',
    url,
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    ...(price !== undefined
      ? { price }
      : { description: 'Tailor-made quote — price on request' }),
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${url}#trip`,
    name: tour.title,
    description: tour.summary,
    url,
    image: tour.image,
    touristType: tour.style,
    ...(duration ? { duration } : {}),
    provider: { '@id': ORGANIZATION_ID },
    offers: offer,
    ...(tour.places.length
      ? {
          itinerary: {
            '@type': 'ItemList',
            name: `${tour.title} places`,
            itemListElement: tour.places.map((place, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: place,
            })),
          },
        }
      : {}),
  }
}

export function destinationJsonLd(destination: Destination): JsonLdObject {
  const url = absoluteUrl(`/destinations/${destination.slug}`)
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    '@id': `${url}#place`,
    name: destination.name,
    description: destination.intro,
    url,
    image: destination.image,
    touristType: destination.tag,
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: destination.region,
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: destination.region,
      addressCountry: 'ET',
    },
  }
}

export function experienceJsonLd(activity: Activity): JsonLdObject {
  const url = absoluteUrl(`/experiences/${activity.slug}`)
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${url}#experience`,
    name: activity.title,
    description: activity.teaser,
    url,
    image: activity.image,
    isAccessibleForFree: false,
    touristType: activity.category,
    provider: { '@id': ORGANIZATION_ID },
  }
}

export function articleJsonLd(post: Post): JsonLdObject {
  const url = absoluteUrl(`/blog/${post.slug}`)
  const datePublished = toIsoDate(post.date)

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    url,
    image: post.image,
    ...(datePublished ? { datePublished, dateModified: datePublished } : {}),
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: { '@id': ORGANIZATION_ID },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: post.category,
    inLanguage: 'en',
  }
}

export function faqPageJsonLd(faqs: FaqItem[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function graphJsonLd(...nodes: JsonLdObject[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.map(({ '@context': _ctx, ...rest }) => rest),
  }
}

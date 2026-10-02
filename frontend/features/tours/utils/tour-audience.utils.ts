import type { Tour } from '@/features/tours/types/tour.types'
import { tours as englishTours } from '@/features/tours/data/tour.data'

export type TourAudience = {
  forWhom: string
  notFor: string
}

type TFn = (key: string, values?: Record<string, string | number | Date>) => string

const OVERRIDE_SLUGS = [
  'the-historic-route',
  'simien-escarpment-trek',
  'omo-valley-immersion',
  'danakil-expedition',
] as const

/** Flagship routes get dedicated copy; others derive from English-source style. */
export function getTourAudience(tour: Tour, t: TFn): TourAudience {
  if ((OVERRIDE_SLUGS as readonly string[]).includes(tour.slug)) {
    const id = tour.slug.replace(/-/g, '_')
    return {
      forWhom: t(`audience_${id}_for`),
      notFor: t(`audience_${id}_not`),
    }
  }

  const english = englishTours.find((item) => item.slug === tour.slug)
  const style = (english?.style ?? tour.style).toLowerCase()
  const placesBlob = (english?.places ?? tour.places).join(' ').toLowerCase()
  const placesLabel =
    tour.places.slice(0, 3).join(', ') || t('audienceEthiopia')

  if (/danakil|dallol|erta ale/.test(placesBlob) || tour.slug.includes('danakil')) {
    return {
      forWhom: t('audience_danakil_expedition_for'),
      notFor: t('audience_danakil_expedition_not'),
    }
  }

  if (/omo|hamar|mursi|turmi/.test(placesBlob) || tour.slug.includes('omo')) {
    return {
      forWhom: t('audience_omo_valley_immersion_for'),
      notFor: t('audience_omo_valley_immersion_not'),
    }
  }

  if (
    /trek|climbing|expedition|hike/.test(style) ||
    /ras dashen|simien|bale|sanetti/.test(placesBlob)
  ) {
    return {
      forWhom: t('audienceTrekFor', { days: tour.days }),
      notFor: t('audienceTrekNot'),
    }
  }

  if (/family/.test(style)) {
    return {
      forWhom: t('audienceFamilyFor'),
      notFor: t('audienceFamilyNot'),
    }
  }

  if (/luxury/.test(style)) {
    return {
      forWhom: t('audienceLuxuryFor'),
      notFor: t('audienceLuxuryNot'),
    }
  }

  return {
    forWhom: t('audienceDefaultFor', { days: tour.days, places: placesLabel }),
    notFor: t('audienceDefaultNot'),
  }
}

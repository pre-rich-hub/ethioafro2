import type { Tour } from '@/features/tours/types/tour.types'

export type TourAudience = {
  forWhom: string
  notFor: string
}

/** Flagship routes get hand-written audience lines; others derive from style/places. */
const overrides: Record<string, TourAudience> = {
  'the-historic-route': {
    forWhom:
      'Travellers who want the classic northern circuit — Lalibela, Gondar, Axum and the Simien rim — at a private pace with boutique lodges and short domestic flights.',
    notFor:
      'Anyone chasing a cheap fixed group bus tour, or hoping to cover the Danakil and Omo in the same eleven days without rushing.',
  },
  'simien-escarpment-trek': {
    forWhom:
      'Walkers happy with consecutive days on trail at 3,000–4,200 metres, with mules carrying loads and nights in camp or on the rim.',
    notFor:
      'Guests who need paved paths, low altitude, or a lodge every night with no hiking between them.',
  },
  'omo-valley-immersion': {
    forWhom:
      'Travellers willing to slow down for community-led visits, markets and mediation rather than a photo-stop circuit.',
    notFor:
      'Anyone expecting pay-per-photo “tribal tourism,” same-day multi-village ticking, or a luxury lodge every night in the lower Omo.',
  },
  'danakil-expedition': {
    forWhom:
      'Heat-tolerant travellers who accept basic camps, long drives and strict medical and water discipline below sea level.',
    notFor:
      'Young children, anyone with serious heart or heat-sensitivity issues, or guests who need hotel comfort throughout.',
  },
}

function derivedAudience(tour: Tour): TourAudience {
  const style = tour.style.toLowerCase()
  const places = tour.places.join(' ').toLowerCase()
  const blob = `${tour.title} ${tour.teaser} ${style} ${places}`.toLowerCase()

  if (/danakil|dallol|erta ale/.test(blob)) {
    return (
      overrides['danakil-expedition'] ?? {
        forWhom:
          'Travellers prepared for extreme heat, remote logistics and simple overnight conditions in the Afar lowlands.',
        notFor: 'Guests who need cool highland weather, short days or hotel standards throughout.',
      }
    )
  }

  if (/omo|hamar|mursi|turmi/.test(blob)) {
    return {
      forWhom:
        'Travellers interested in southern Ethiopia’s communities when visits are arranged with consent and a cultural mediator.',
      notFor:
        'Anyone looking for a rapid multi-stop photography circuit or transactional pay-per-frame encounters.',
    }
  }

  if (/trek|climbing|expedition|hike/.test(style) || /ras dashen|simien|bale|sanetti/.test(blob)) {
    return {
      forWhom: `Active travellers comfortable with ${tour.days.toLowerCase()} that include real walking, altitude and early starts.`,
      notFor:
        'Guests who prefer purely vehicle-based sightseeing, low elevation, or no trail days at all.',
    }
  }

  if (/family/.test(style)) {
    return {
      forWhom:
        'Families who want private pacing, sensible road time and rooming that works for children as well as adults.',
      notFor:
        'Groups seeking hard multi-day high-altitude treks or extreme lowland heat as the main focus.',
    }
  }

  if (/luxury/.test(style)) {
    return {
      forWhom:
        'Travellers who want private guiding and carefully chosen lodges, with days shaped around light and comfort rather than mileage.',
      notFor:
        'Budget backpackers or guests who want a large fixed group departure at the lowest possible price.',
    }
  }

  return {
    forWhom: `Travellers who want a private ${tour.days.toLowerCase()} journey through ${tour.places.slice(0, 3).join(', ') || 'Ethiopia'}, reshaped around their pace.`,
    notFor:
      'Anyone expecting a rigid large-group package that cannot change once booked.',
  }
}

export function getTourAudience(tour: Tour): TourAudience {
  return overrides[tour.slug] ?? derivedAudience(tour)
}

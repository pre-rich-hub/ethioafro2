'use client'

import { useTourFilters } from '../hooks/useTourFilters'
import { TourFilters } from './TourFilters'
import { Reveal } from '@/components/common/Reveal'
import { TourCard } from '@/features/tours/components/TourCard'
import { type Tour } from '@/features/tours/types/tour.types'


export function ToursGrid({ tours }: { tours: Tour[] }) {
  const { filters, active, groupRef, choose, visible } = useTourFilters(tours)

  return (
    <div>
      <TourFilters filters={filters} active={active} groupRef={groupRef} choose={choose} />

      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((t, i) => (
          <Reveal key={t.slug} delay={(i % 3) * 90}>
            <TourCard tour={t} />
          </Reveal>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">
          No journeys in this style yet — but we will design one.
        </p>
      )}
    </div>
  )
}

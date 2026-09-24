'use client'

import type { TourData } from '../../../types/tour-editor.types'
import { adminPanelClass } from '../../AdminPrimitives'

type Props = {
  tour?: TourData
  fieldClass: string
}

export function TourDescriptionFields({ tour, fieldClass }: Props) {
  return (
    <>
      <section className={adminPanelClass}>
        <label htmlFor="tourOverview" className="mb-5 block font-serif text-lg text-foreground">
          Overview
        </label>
        <textarea
          id="tourOverview"
          name="tourOverview"
          rows={6}
          className={`${fieldClass} resize-y`}
          defaultValue={tour?.overview ?? undefined}
          placeholder={tour ? undefined : "Describe the tour experience..."}
        />
      </section>
      {tour && (
        <section className={adminPanelClass}>
          <label htmlFor="tourMap" className="mb-5 block font-serif text-lg text-foreground">
            Journey map
          </label>
          <textarea
            id="tourMap"
            name="tourMap"
            rows={4}
            defaultValue={tour.journeyMap ?? ''}
            className={`${fieldClass} resize-y`}
            placeholder="URL or map markup for the tour journey"
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Leave empty to clear the journey map.
          </p>
        </section>
      )}
    </>
  )
}

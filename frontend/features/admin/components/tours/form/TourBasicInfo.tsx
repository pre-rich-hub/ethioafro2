'use client'

import Link from 'next/link'
import type { Destination, TourData } from '../../../types/tour-editor.types'
import { adminLabelClass, adminPanelClass } from '../../AdminPrimitives'

type Props = {
  tour?: TourData
  destinations: Destination[]
  selectedDestinations: number[]
  toggleDestination: (id: number) => void
  optionsLoading?: boolean
  fieldClass: string
}

export function TourBasicInfo({ tour, destinations, selectedDestinations, toggleDestination, optionsLoading, fieldClass }: Props) {
  return (
    <section className={adminPanelClass}>
      <h2 className="mb-5 font-serif text-lg text-foreground">Basic Information</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="tourTitle" className={adminLabelClass}>
            Tour Name
          </label>
          <input
            id="tourTitle"
            name="tourTitle"
            defaultValue={tour ? tour.name ?? '' : undefined}
            required
            className={fieldClass}
            placeholder={tour ? undefined : "e.g. Omo Valley Explorer"}
          />
        </div>
        <fieldset className="md:col-span-2">
          <legend className={adminLabelClass}>
            Destinations
          </legend>
          <p className="mb-3 text-xs text-muted-foreground">Choose one or more destinations for this tour.</p>
          {optionsLoading ? (
            <p className="text-sm text-muted-foreground">Loading destinations...</p>
          ) : (
            <div className="flex flex-wrap gap-3">
              {destinations.map((destination) => (
                <label
                  key={destination.id}
                  className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3.5 py-2 text-sm transition-colors ${selectedDestinations.includes(destination.id)
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-border bg-card text-muted-foreground hover:border-primary/50'
                    }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedDestinations.includes(destination.id)}
                    onChange={() => toggleDestination(destination.id)}
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary/30"
                  />
                  {destination.name}
                </label>
              ))}
            </div>
          )}
          {!tour && !optionsLoading && destinations.length === 0 ? (
            <p className="mt-2 text-xs text-amber-700">
              A tour needs a destination.{' '}
              <Link href="/admin/destinations" className="font-semibold underline underline-offset-2">
                Add a destination first
              </Link>
              .
            </p>
          ) : null}
        </fieldset>
        <div>
          <label htmlFor="tourDiscount" className={adminLabelClass}>
            Discount (%)
          </label>
          <input
            id="tourDiscount"
            name="tourDiscount"
            defaultValue={tour ? tour.discount ?? '' : undefined}
            type="number"
            min="0"
            max="100"
            className={fieldClass}
            placeholder={tour ? undefined : "e.g. 10"}
          />
        </div>
        <div>
          <label htmlFor="adultPrice" className={adminLabelClass}>
            Adult Price ($)
          </label>
          <input
            id="adultPrice"
            name="adultPrice"
            defaultValue={tour ? tour.adultPrice ?? '' : undefined}
            type="number"
            min="0"
            step="0.01"
            className={fieldClass}
            placeholder={tour ? undefined : "e.g. 2500"}
          />
        </div>
        <div>
          <label htmlFor="childPrice" className={adminLabelClass}>
            Child Price ($)
          </label>
          <input
            id="childPrice"
            name="childPrice"
            defaultValue={tour ? tour.childPrice ?? '' : undefined}
            type="number"
            min="0"
            step="0.01"
            className={fieldClass}
            placeholder={tour ? undefined : "e.g. 1500"}
          />
        </div>
        <div>
          <label htmlFor="tourRating" className={adminLabelClass}>
            Rating (0-5)
          </label>
          <input
            id="tourRating"
            name="tourRating"
            defaultValue={tour ? tour.rating ?? '' : undefined}
            type="number"
            min="0"
            max="5"
            step="0.1"
            className={fieldClass}
            placeholder={tour ? undefined : "e.g. 4.5"}
          />
        </div>
        <div className="flex items-end pb-2">
          <label className="flex cursor-pointer items-center gap-2.5">
            <input
              type="checkbox"
              name="isFeatured"
              defaultChecked={tour?.isFeatured}
              value="true"
              className="h-4 w-4 rounded border-border text-primary focus:ring-primary/30"
            />
            <span className="text-sm font-medium text-foreground">Featured Tour</span>
          </label>
        </div>
      </div>
    </section>
  )
}

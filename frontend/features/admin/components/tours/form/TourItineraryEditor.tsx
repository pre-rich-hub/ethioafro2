'use client'

import { ArrowDown, ArrowUp, Plus, X } from 'lucide-react'
import type { ItineraryDay } from '../../../types/tour-editor.types'
import { adminPanelClass } from '../../AdminPrimitives'

type Props = {
  itinerary: ItineraryDay[]
  addItineraryDay: () => void
  removeItineraryDay: (index: number) => void
  moveItineraryDay: (index: number, direction: 'up' | 'down') => void
  updateItineraryDay: (index: number, field: keyof ItineraryDay, value: string) => void
  fieldClass: string
  creating?: boolean
}

export function TourItineraryEditor({ itinerary, addItineraryDay, removeItineraryDay, moveItineraryDay, updateItineraryDay, fieldClass, creating }: Props) {
  return (
    <section className={adminPanelClass}>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-serif text-lg text-foreground">Itinerary</h2>
        <button
          type="button"
          onClick={addItineraryDay}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          <Plus size={14} /> Add Day
        </button>
      </div>
      <div className="space-y-4">
        {itinerary.map((day, i) => (
          <div
            key={i}
            className="rounded-lg border border-border bg-muted/20 p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">
                  Day {day.day}
                </span>
                <button
                  type="button"
                  onClick={() => moveItineraryDay(i, 'up')}
                  disabled={i === 0}
                  className="flex h-6 w-6 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-30"
                >
                  <ArrowUp size={13} />
                </button>
                <button
                  type="button"
                  onClick={() => moveItineraryDay(i, 'down')}
                  disabled={i === itinerary.length - 1}
                  className="flex h-6 w-6 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-30"
                >
                  <ArrowDown size={13} />
                </button>
              </div>
              <button
                type="button"
                onClick={() => removeItineraryDay(i)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
              >
                <X size={14} />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="md:col-span-2">
                <input
                  value={day.title}
                  onChange={(e) => updateItineraryDay(i, 'title', e.target.value)}
                  className={fieldClass}
                  placeholder={creating ? `Day ${day.day} title (e.g. Addis Ababa - Arba Minch)` : `Day ${day.day} title`}
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  value={day.activities}
                  onChange={(e) => updateItineraryDay(i, 'activities', e.target.value)}
                  rows={3}
                  className={`${fieldClass} resize-y`}
                  placeholder="Activities description..."
                />
              </div>
              <div>
                <input
                  value={day.overnight}
                  onChange={(e) => updateItineraryDay(i, 'overnight', e.target.value)}
                  className={fieldClass}
                  placeholder="Overnight location"
                />
              </div>
              <div>
                <input
                  value={day.meals ?? ''}
                  onChange={(e) => updateItineraryDay(i, 'meals', e.target.value)}
                  className={fieldClass}
                  placeholder={creating ? "Meals (e.g. Breakfast, lunch, dinner)" : "Meals"}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

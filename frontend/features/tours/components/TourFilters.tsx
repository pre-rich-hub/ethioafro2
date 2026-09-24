'use client'

import type { RefObject } from 'react'

type TourFiltersProps = {
  filters: string[]
  active: string
  groupRef: RefObject<HTMLDivElement | null>
  choose: (selectedStyle: string) => void
}

export function TourFilters({ filters, active, groupRef, choose }: TourFiltersProps) {
  return (
      <div
        ref={groupRef}
        role="group"
        aria-label="Filter journeys by style"
        className="mb-12 flex scroll-mt-28 flex-wrap gap-2 sm:mb-16"
      >
        {filters.map((f) => {
          const on = f === active
          return (
            <button
              key={f}
              type="button"
              aria-pressed={on}
              onClick={() => choose(f)}
              className={`border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 sm:text-[11px] ${
                on
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {f}
            </button>
          )
        })}
      </div>
  )
}

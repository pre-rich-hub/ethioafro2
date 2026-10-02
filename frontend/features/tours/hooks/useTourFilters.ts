'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import type { Tour } from '../types/tour.types'
import { styleTokens } from '../utils/tour.utils'

export const ALL_JOURNEYS = '__all__'

export function useTourFilters(tours: Tour[]) {
  const t = useTranslations('Tours')

  const filters = useMemo(() => {
    const set = new Set<string>()
    tours.forEach((tour) => styleTokens(tour).forEach((s) => set.add(s)))
    return [ALL_JOURNEYS, ...Array.from(set).sort()]
  }, [tours])

  const [active, setActive] = useState(ALL_JOURNEYS)
  const groupRef = useRef<HTMLDivElement>(null)

  // Links like /tours?style=Wildlife open the grid pre-filtered. Read in an
  // effect so the page itself stays statically rendered.
  useEffect(() => {
    const style = new URLSearchParams(window.location.search).get('style')
    if (style && filters.includes(style)) {
      setActive(style)
      groupRef.current?.scrollIntoView({ block: 'start' })
    }
  }, [filters])

  const choose = (f: string) => {
    setActive(f)
    const url = new URL(window.location.href)
    if (f === ALL_JOURNEYS) url.searchParams.delete('style')
    else url.searchParams.set('style', f)
    window.history.replaceState(null, '', url)
  }

  const visible =
    active === ALL_JOURNEYS
      ? tours
      : tours.filter((tour) => styleTokens(tour).includes(active))

  const labelFor = (f: string) => (f === ALL_JOURNEYS ? t('allJourneys') : f)

  return { filters, active, groupRef, choose, visible, labelFor, emptyLabel: t('emptyStyle') }
}

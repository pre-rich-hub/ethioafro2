'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { Tour } from '../types/tour.types'
import { styleTokens } from '../utils/tour.utils'

export function useTourFilters(tours: Tour[]) {
  const filters = useMemo(() => {
    const set = new Set<string>()
    tours.forEach((t) => styleTokens(t).forEach((s) => set.add(s)))
    return ['All Journeys', ...Array.from(set).sort()]
  }, [tours])

  const [active, setActive] = useState('All Journeys')
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
    if (f === 'All Journeys') url.searchParams.delete('style')
    else url.searchParams.set('style', f)
    window.history.replaceState(null, '', url)
  }

  const visible =
    active === 'All Journeys'
      ? tours
      : tours.filter((t) => styleTokens(t).includes(active))


  return { filters, active, groupRef, choose, visible }
}

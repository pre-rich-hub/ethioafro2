import { activities } from '@/features/experiences/data/experience.data'
import { getActivityOverlayMap } from '../data/overlays'
import { applyOverlay, isDefaultLocale } from '@/lib/i18n/localized'
import type { Activity } from '../types/experience.types'

export function getActivity(slug: string, locale: string = 'en'): Activity | undefined {
  const base = activities.find((a) => a.slug === slug)
  if (!base) return undefined
  if (isDefaultLocale(locale)) return base
  return applyOverlay<Activity>(base, getActivityOverlayMap(locale)?.[slug])
}

export function getLocalizedActivities(locale: string = 'en'): Activity[] {
  if (isDefaultLocale(locale)) return activities
  const map = getActivityOverlayMap(locale)
  return activities.map((a) => applyOverlay<Activity>(a, map?.[a.slug]))
}

/**
 * English category → localized label. Grouping and anchors stay keyed on the
 * English category; only the visible label changes per locale.
 */
export function getActivityCategoryLabels(locale: string = 'en'): Record<string, string> {
  const labels: Record<string, string> = {}
  for (const a of getLocalizedActivities(locale)) {
    const base = activities.find((x) => x.slug === a.slug)
    if (base) labels[base.category] = a.category
  }
  return labels
}

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

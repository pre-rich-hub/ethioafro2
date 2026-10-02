import { posts } from '@/features/blog/data/blog.data'
import { getPostOverlayMap } from '../data/overlays'
import { applyOverlay, isDefaultLocale } from '@/lib/i18n/localized'
import type { Post } from '../types/blog.types'

export function getPost(slug: string, locale: string = 'en'): Post | undefined {
  const base = posts.find((p) => p.slug === slug)
  if (!base) return undefined
  if (isDefaultLocale(locale)) return base
  return applyOverlay<Post>(base, getPostOverlayMap(locale)?.[slug])
}

export function getLocalizedPosts(locale: string = 'en'): Post[] {
  if (isDefaultLocale(locale)) return posts
  const map = getPostOverlayMap(locale)
  return posts.map((p) => applyOverlay<Post>(p, map?.[p.slug]))
}

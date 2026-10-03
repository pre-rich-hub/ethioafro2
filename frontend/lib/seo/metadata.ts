import type { Metadata } from 'next'
import { cloudinaryImage } from '@/lib/cloudinary'
import { locales, routing, type AppLocale } from '@/i18n/routing'

export const SITE_URL = 'https://www.simienethiopiatours.com'

export const DEFAULT_OG_IMAGE = cloudinaryImage('lalibela', 1200)

export function truncateMetaDescription(text: string, max = 160): string {
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (normalized.length <= max) return normalized
  const sliced = normalized.slice(0, max - 1)
  const lastSpace = sliced.lastIndexOf(' ')
  const base = lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced
  return `${base.replace(/[.,;:\s]+$/, '')}…`
}

/** Unprefixed path → locale-prefixed path (`as-needed`: en stays bare). */
export function localizedPath(path: string, locale: string): string {
  const normalized =
    path === '/' ? '/' : path.startsWith('/') ? path.replace(/\/$/, '') || '/' : `/${path}`

  if (locale === routing.defaultLocale) return normalized
  if (normalized === '/') return `/${locale}`
  return `/${locale}${normalized}`
}

export function absoluteLocalizedUrl(path: string, locale: string = routing.defaultLocale): string {
  const localized = localizedPath(path, locale)
  return localized === '/' ? SITE_URL : `${SITE_URL}${localized}`
}

/** hreflang map including `x-default` → English. */
export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const locale of locales) {
    languages[locale] = absoluteLocalizedUrl(path, locale)
  }
  languages['x-default'] = absoluteLocalizedUrl(path, routing.defaultLocale)
  return languages
}

/** Schema.org / HTML lang codes. */
export function schemaLanguage(locale: string): string {
  if (locale === 'zh') return 'zh-Hans'
  return locale
}

type BuildPageMetadataInput = {
  title: string
  description: string
  /** Unprefixed path, e.g. `/tours/foo` or `/`. */
  path: string
  locale?: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
}

export function buildPageMetadata({
  title,
  description,
  path,
  locale = routing.defaultLocale,
  image = DEFAULT_OG_IMAGE,
  imageAlt = title,
  type = 'website',
}: BuildPageMetadataInput): Metadata {
  const descriptionMeta = truncateMetaDescription(description)
  const canonical = absoluteLocalizedUrl(path, locale)
  const ogImages = [{ url: image, width: 1200, alt: imageAlt }]

  return {
    title,
    description: descriptionMeta,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      title,
      description: descriptionMeta,
      url: canonical,
      type,
      locale: locale === 'zh' ? 'zh_CN' : locale,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: descriptionMeta,
      images: [image],
    },
  }
}

export function isAppLocale(value: string): value is AppLocale {
  return (locales as readonly string[]).includes(value)
}

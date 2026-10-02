import type { Metadata } from 'next'
import { cloudinaryImage } from '@/lib/cloudinary'

export const SITE_URL = 'https://simienethiopiatours.com'

export const DEFAULT_OG_IMAGE = cloudinaryImage('lalibela', 1200)

export function truncateMetaDescription(text: string, max = 160): string {
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (normalized.length <= max) return normalized
  const sliced = normalized.slice(0, max - 1)
  const lastSpace = sliced.lastIndexOf(' ')
  const base = lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced
  return `${base.replace(/[.,;:\s]+$/, '')}…`
}

type BuildPageMetadataInput = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = title,
  type = 'website',
}: BuildPageMetadataInput): Metadata {
  const descriptionMeta = truncateMetaDescription(description)
  const canonical = path === '/' ? SITE_URL : `${SITE_URL}${path}`
  const ogImages = [{ url: image, width: 1200, alt: imageAlt }]

  return {
    title,
    description: descriptionMeta,
    alternates: { canonical },
    openGraph: {
      title,
      description: descriptionMeta,
      url: canonical,
      type,
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

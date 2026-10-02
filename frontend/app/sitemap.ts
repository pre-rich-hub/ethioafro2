import type { MetadataRoute } from 'next'
import { posts } from '@/features/blog/data/blog.data'
import { destinations } from '@/features/destinations/data/destination.data'
import { activities } from '@/features/experiences/data/experience.data'
import { tours } from '@/features/tours/data/tour.data'
import {
  absoluteLocalizedUrl,
  languageAlternates,
} from '@/lib/seo/metadata'
import { locales } from '@/i18n/routing'

function entry(
  path: string,
  options: {
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
    priority: number
  },
): MetadataRoute.Sitemap {
  const now = new Date()
  return locales.map((locale) => ({
    url: absoluteLocalizedUrl(path, locale),
    lastModified: now,
    changeFrequency: options.changeFrequency,
    priority: options.priority,
    alternates: {
      languages: languageAlternates(path),
    },
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: {
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
    priority: number
  }[] = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/tours', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/destinations', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/experiences', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
  ]

  return [
    ...staticPaths.flatMap((p) => entry(p.path, p)),
    ...tours.flatMap((tour) =>
      entry(`/tours/${tour.slug}`, { changeFrequency: 'monthly', priority: 0.7 }),
    ),
    ...destinations.flatMap((destination) =>
      entry(`/destinations/${destination.slug}`, {
        changeFrequency: 'monthly',
        priority: 0.7,
      }),
    ),
    ...activities.flatMap((activity) =>
      entry(`/experiences/${activity.slug}`, {
        changeFrequency: 'monthly',
        priority: 0.7,
      }),
    ),
    ...posts.flatMap((post) =>
      entry(`/blog/${post.slug}`, { changeFrequency: 'monthly', priority: 0.7 }),
    ),
  ]
}

import type { MetadataRoute } from 'next'
import { posts } from '@/features/blog/data/blog.data'
import { destinations } from '@/features/destinations/data/destination.data'
import { activities } from '@/features/experiences/data/experience.data'
import { tours } from '@/features/tours/data/tour.data'

const siteUrl = 'https://simienethiopiatours.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/tours`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    {
      url: `${siteUrl}/destinations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/experiences`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const tourPages: MetadataRoute.Sitemap = tours.map((tour) => ({
    url: `${siteUrl}/tours/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const destinationPages: MetadataRoute.Sitemap = destinations.map((destination) => ({
    url: `${siteUrl}/destinations/${destination.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const experiencePages: MetadataRoute.Sitemap = activities.map((activity) => ({
    url: `${siteUrl}/experiences/${activity.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...tourPages, ...destinationPages, ...experiencePages, ...blogPages]
}

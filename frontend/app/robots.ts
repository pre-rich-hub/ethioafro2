import type { MetadataRoute } from 'next'

const siteUrl = 'https://simienethiopiatours.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/admin/', '/login'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}

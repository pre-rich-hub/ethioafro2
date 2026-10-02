import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep Turbopack scoped to frontend/. A stray repo-root lockfile made Next
  // watch the whole monorepo and thrash memory during compile.
  turbopack: {
    root: __dirname,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Serve resized AVIF/WebP instead of the ~2 MB source PNGs.
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/wwgwrs4y/**',
      },
    ],
  },
  async redirects() {
    // Retired surfaces — keep old URLs from 404ing.
    return [
      { source: '/outbound', destination: '/tours', permanent: true },
      { source: '/mountains', destination: '/tours', permanent: true },
      { source: '/festivals', destination: '/blog', permanent: true },
      { source: '/how-we-travel', destination: '/about', permanent: true },
      { source: '/how-we-travel/:slug', destination: '/about', permanent: true },
      // Former How We Travel chapters once lived under /experiences/*
      ...[
        'walk-with-the-people-who-live-there',
        'arrive-for-the-feast-days',
        'rest-at-the-edge-of-the-wild',
        'light-first-photography',
        'access-through-relationship',
        'coffee-traced-to-origin',
      ].map((slug) => ({
        source: `/experiences/${slug}`,
        destination: '/about',
        permanent: true,
      })),
    ]
  },
  async rewrites() {
    const apiBase = process.env.API_BASE_URL ?? 'http://localhost:5000'
    return [{ source: '/api/:path*', destination: `${apiBase}/api/:path*` }]
  },
}

export default nextConfig

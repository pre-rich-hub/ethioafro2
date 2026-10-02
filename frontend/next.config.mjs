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
    // Outbound tours were retired; send old links to the tour catalogue.
    // The six "How We Travel" pages moved from /experiences/* when that
    // address became the activities section.
    const howWeTravel = [
      'walk-with-the-people-who-live-there',
      'arrive-for-the-feast-days',
      'rest-at-the-edge-of-the-wild',
      'light-first-photography',
      'access-through-relationship',
      'coffee-traced-to-origin',
    ].map((slug) => ({
      source: `/experiences/${slug}`,
      destination: `/how-we-travel/${slug}`,
      permanent: true,
    }))
    return [
      { source: '/outbound', destination: '/tours', permanent: true },
      ...howWeTravel,
    ]
  },
  async rewrites() {
    const apiBase = process.env.API_BASE_URL ?? 'http://localhost:5000'
    return [{ source: '/api/:path*', destination: `${apiBase}/api/:path*` }]
  },
}

export default nextConfig

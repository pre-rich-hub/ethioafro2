/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Serve resized AVIF/WebP instead of the ~2 MB source PNGs.
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2678400,
  },
  async rewrites() {
    const apiBase = process.env.API_BASE_URL ?? 'http://localhost:5000'
    return [{ source: '/api/:path*', destination: `${apiBase}/api/:path*` }]
  },
}

export default nextConfig

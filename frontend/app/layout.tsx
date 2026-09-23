import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { FloatingSupport } from '@/components/floating-support'
import { RouteProgress } from '@/components/route-progress'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://simienethiopiatours.com'),
  title: {
    default: 'Simien Ethiopia Tours — Journeys Through the Land of Origins',
    template: '%s · Simien Ethiopia Tours',
  },
  description:
    'Private, tailor-made journeys through Ethiopia with a licensed Addis Ababa-based operator. Walk through kingdoms carved from stone, wake above the clouds in the Simien Mountains, and share coffee with families who have welcomed travellers for generations.',
  generator: 'v0.app',
  keywords: [
    'Simien Ethiopia Tours',
    'Ethiopia tour operator',
    'Private Ethiopia Tours',
    'Addis Ababa layover tour',
    'Lalibela',
    'Simien Mountains',
    'Danakil Depression',
    'Omo Valley',
    'South Omo tribes',
    'Ethiopia travel',
  ],
  openGraph: {
    title: 'Simien Ethiopia Tours — Journeys Through the Land of Origins',
    description:
      'Private, tailor-made journeys through Ethiopia, designed around you by a licensed local operator.',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1254,
        height: 1254,
        alt: 'Simien Ethiopia Tours',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#1A1A1A',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} bg-background`}
    >
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-[0.14em] focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <RouteProgress />
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
        <FloatingSupport />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

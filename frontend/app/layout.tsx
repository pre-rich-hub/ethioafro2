import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@/components/common/Analytics'
import { FloatingSupport } from '@/features/support'
import { RouteProgress } from '@/components/layout/RouteProgress'
import { DEFAULT_OG_IMAGE, SITE_URL } from '@/lib/seo/metadata'
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

const defaultTitle = 'Simien Ethiopia Tours — Journeys Through the Land of Origins'
const defaultDescription =
  'Private, tailor-made journeys through Ethiopia with a licensed Addis Ababa-based operator. Walk through kingdoms carved from stone, wake above the clouds in the Simien Mountains, and share coffee with families who have welcomed travellers for generations.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: '%s · Simien Ethiopia Tours',
  },
  description: defaultDescription,
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
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: defaultTitle,
    description:
      'Private, tailor-made journeys through Ethiopia, designed around you by a licensed local operator.',
    url: SITE_URL,
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        alt: 'Rock-hewn churches of Lalibela, Ethiopia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description:
      'Private, tailor-made journeys through Ethiopia, designed around you by a licensed local operator.',
    images: [DEFAULT_OG_IMAGE],
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
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingSupport />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

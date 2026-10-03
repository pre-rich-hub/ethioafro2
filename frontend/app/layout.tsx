import type { Metadata, Viewport } from 'next'
import {
  company,
  defaultDocumentTitle,
  titleTemplate,
} from '@/lib/seo/entities'
import { DEFAULT_OG_IMAGE, SITE_URL } from '@/lib/seo/metadata'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultDocumentTitle,
    template: titleTemplate,
  },
  description: company.defaultDescription,
  keywords: [
    company.name,
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
  // Canonicals are set per-page via buildPageMetadata (locale-aware).
  openGraph: {
    title: defaultDocumentTitle,
    description: company.ogDescription,
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
    title: defaultDocumentTitle,
    description: company.ogDescription,
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

/** Root layout is a passthrough so `[locale]` and admin can each own `<html lang>`. */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}

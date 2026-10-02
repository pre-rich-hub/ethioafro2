import { Fraunces, Inter, Noto_Sans_SC } from 'next/font/google'
import type { ReactNode } from 'react'

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

/** CJK fallback for `zh` (and any future CJK locales). Latin locales keep Inter/Fraunces. */
const notoSansSc = Noto_Sans_SC({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sc',
  display: 'swap',
  preload: false,
})

export function DocumentShell({
  lang,
  children,
}: {
  lang: string
  children: ReactNode
}) {
  return (
    <html
      lang={lang}
      className={`${inter.variable} ${cormorant.variable} ${notoSansSc.variable} bg-background`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}

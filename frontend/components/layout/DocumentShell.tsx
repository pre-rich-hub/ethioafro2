import { Fraunces, Inter } from 'next/font/google'
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

export function DocumentShell({
  lang,
  children,
}: {
  lang: string
  children: ReactNode
}) {
  return (
    <html lang={lang} className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}

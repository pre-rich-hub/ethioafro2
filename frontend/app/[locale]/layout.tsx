import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { hasLocale } from 'next-intl'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { DocumentShell } from '@/components/layout/DocumentShell'
import { Analytics } from '@/components/common/Analytics'
import { FloatingSupport } from '@/features/support'
import { RouteProgress } from '@/components/layout/RouteProgress'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <DocumentShell lang={locale}>
      <NextIntlClientProvider messages={messages}>
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
      </NextIntlClientProvider>
    </DocumentShell>
  )
}

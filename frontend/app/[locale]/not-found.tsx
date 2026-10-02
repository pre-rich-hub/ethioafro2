import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { LinkButton } from '@/components/common/LinkButton'
import { Link } from '@/i18n/navigation'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('NotFound')
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    robots: { index: false, follow: false },
  }
}

export default async function NotFound() {
  const t = await getTranslations('NotFound')

  return (
    <section className="shell flex min-h-[72svh] flex-col items-center justify-center py-32 text-center">
      <p className="eyebrow justify-center text-accent">
        <span className="rule" />
        {t('eyebrow')}
      </p>
      <h1 className="mt-6 max-w-[22ch] text-balance text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
        {t('title')}
      </h1>
      <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground sm:text-lg">
        {t('body')}
      </p>
      <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <LinkButton href="/">{t('backHome')}</LinkButton>
        <LinkButton href="/destinations" variant="outline" withArrow={false}>
          {t('seeDestinations')}
        </LinkButton>
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        {t('orPrefix')}{' '}
        <Link
          href="/contact"
          className="border-b border-accent/50 pb-0.5 text-primary transition-colors hover:border-accent hover:text-accent"
        >
          {t('writeToDesigner')}
        </Link>{' '}
        {t('orSuffix')}
      </p>
    </section>
  )
}

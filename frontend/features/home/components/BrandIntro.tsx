import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Reveal } from '@/components/common/Reveal'

export async function BrandIntro() {
  const t = await getTranslations('Home')

  const principles = [
    [t('brandPrinciple1Bold'), t('brandPrinciple1Rest')],
    [t('brandPrinciple2Bold'), t('brandPrinciple2Rest')],
    [t('brandPrinciple3Bold'), t('brandPrinciple3Rest')],
  ]

  return (
    <section id="about" className="scroll-mt-20 py-24 lg:py-40">
      <Reveal className="mx-auto max-w-[720px] px-6 text-center lg:px-10">
        <p className="mb-6 flex items-center justify-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em] text-accent">
          <span className="h-px w-10 bg-accent" />
          {t('brandEyebrow')}
          <span className="h-px w-10 bg-accent" />
        </p>
        <h2 className="text-balance font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
          {t('brandTitle')}
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>{t('brandP1')}</p>
          <p>{t('brandP2')}</p>
        </div>
        <Link
          href="/about"
          className="group mt-8 inline-flex items-center gap-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent sm:text-xs"
        >
          {t('brandLink')}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <Reveal delay={100} className="mx-auto mt-16 max-w-[1280px] px-6 lg:px-10">
        <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
          <Image
            src="https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1920/coffee-cupping-and-ceremony.png"
            alt="Hands pouring coffee from a traditional Ethiopian jebena during a coffee ceremony"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <Reveal
        delay={180}
        className="mx-auto mt-16 grid max-w-[1280px] gap-10 divide-y divide-border px-6 sm:grid-cols-3 sm:gap-8 sm:divide-y-0 sm:divide-x lg:px-10"
      >
        {principles.map(([bold, rest], i) => (
          <div key={i} className="pt-8 first:pt-0 sm:px-8 sm:pt-0 sm:first:pl-0">
            <span className="font-serif text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
            <span className="mt-2 block font-serif text-xl text-foreground">
              {bold}
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
              {rest}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  )
}

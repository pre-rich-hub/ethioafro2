import { getTranslations } from 'next-intl/server'
import { Reveal } from '@/components/common/Reveal'
import Image from 'next/image'
import { cloudinaryImage } from '@/lib/cloudinary'
import { company } from '@/lib/seo/entities'

export async function FounderLetter() {
  const t = await getTranslations('About')

  return (
    <section className="shell grid gap-14 py-16 sm:py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-24 lg:py-28">
      <Reveal className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow mb-6 text-accent">
          <span className="rule" />
          {t('founderEyebrow')}
        </p>
        <blockquote className="font-serif text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-[3.5rem]">
          <span aria-hidden className="mb-2 block text-7xl leading-none text-accent">
            &ldquo;
          </span>
          {t('founderQuote')}
        </blockquote>
        <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
          <span
            aria-hidden
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary font-serif text-xl text-accent"
          >
            MG
          </span>
          <div>
            <p className="font-serif text-2xl leading-tight text-foreground">
              Mihiret Getenat
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
              {t('founderRole', { company: company.name })}
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={120} className="space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
        <p className="font-serif text-2xl leading-snug text-foreground sm:text-[1.75rem]">
          {t('founderP1')}
        </p>
        <p>{t('founderP2')}</p>
        <p>{t('founderP3')}</p>
        <p>{t('founderP4', { company: company.name })}</p>
        <div className="relative mt-10 aspect-[16/10] overflow-hidden">
          <Image
            src={cloudinaryImage('simien-mountains')}
            alt={t('founderImageAlt')}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
          <p className="absolute bottom-0 left-0 bg-background/95 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground sm:text-[11px]">
            {t('founderImageCaption')}
          </p>
        </div>
      </Reveal>
    </section>
  )
}

import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Reveal } from '@/components/common/Reveal'
import { cloudinaryImage } from '@/lib/cloudinary'
import { ethiopiaFacts } from '@/lib/seo/facts'

export async function WhyEthiopia() {
  const t = await getTranslations('Home')

  const factLabels = [
    t('factLabel0'),
    t('factLabel1'),
    t('factLabel2'),
    t('factLabel3'),
  ]

  return (
    <section id="why" className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 opacity-25">
        <Image
          src={cloudinaryImage('christmas-to-epiphany', 1920)}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em] text-accent-light">
              <span className="h-px w-10 bg-accent-light" />
              {t('whyEyebrow')}
            </p>
            <h2 className="max-w-[15ch] text-balance font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              {t('whyTitle')}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-secondary-foreground/80">
              <p>{t('whyP1')}</p>
              <p>{t('whyP2')}</p>
            </div>
          </Reveal>

          <Reveal delay={140} className="flex items-center">
            <dl className="grid w-full grid-cols-2 gap-px overflow-hidden rounded-xl bg-secondary-foreground/15">
              {ethiopiaFacts.map((fact, i) => (
                <div key={fact.label} className="bg-secondary p-8 lg:p-10">
                  <dt className="font-serif text-4xl text-accent lg:text-5xl">{fact.value}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-secondary-foreground/70">
                    {factLabels[i] ?? fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

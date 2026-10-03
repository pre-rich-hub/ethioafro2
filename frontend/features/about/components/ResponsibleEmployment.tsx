import { getTranslations } from 'next-intl/server'
import { Reveal } from '@/components/common/Reveal'
import Image from 'next/image'
import { cloudinaryImage } from '@/lib/cloudinary'

export async function ResponsibleEmployment() {
  const t = await getTranslations('About')

  return (
    <section className="shell grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
      <Reveal className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]">
        <Image
          src={cloudinaryImage('village-homestay')}
          alt="A village host welcoming guests during a community stay"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </Reveal>
      <Reveal delay={120}>
        <p className="eyebrow mb-5 text-accent">
          {t('responsibleEyebrow')}
        </p>
        <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
          {t('responsibleTitle')}
        </h2>
        <div className="mt-7 space-y-5 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
          <p>{t('responsibleP1')}</p>
          <p>{t('responsibleP2')}</p>
        </div>
      </Reveal>
    </section>
  )
}

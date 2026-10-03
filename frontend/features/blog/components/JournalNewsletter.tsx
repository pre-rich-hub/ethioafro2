import { useTranslations } from 'next-intl'
import { Reveal } from '@/components/common/Reveal'
import { NewsletterForm } from '@/features/newsletter'


export function JournalNewsletter() {
  const t = useTranslations('Blog')

  return (
    <section className="bg-secondary text-secondary-foreground">
        <div className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <Reveal>
            <p className="eyebrow mb-5 text-accent-light">
              {t('newsletterEyebrow')}
            </p>
            <h2 className="max-w-[22ch] text-balance text-3xl leading-[1.1] text-background sm:text-4xl">
              {t('newsletterTitle')}
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-background/70">
              {t('newsletterBody')}
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:justify-self-end">
            <NewsletterForm />
          </Reveal>
        </div>
      </section>
  )
}

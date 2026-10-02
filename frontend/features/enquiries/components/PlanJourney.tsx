import { getTranslations } from 'next-intl/server'
import { Check } from 'lucide-react'
import { EnquiryForm } from '@/features/enquiries/components/EnquiryForm'
import { Reveal } from '@/components/common/Reveal'

export async function PlanJourney() {
  const t = await getTranslations('Home')

  const points = [t('planPoint1'), t('planPoint2'), t('planPoint3')]

  return (
    <section id="plan" className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="shell relative grid gap-12 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-32">
        <Reveal>
          <p className="eyebrow mb-6 text-accent-light">
            <span className="rule" />
            {t('planEyebrow')}
          </p>
          <h2 className="max-w-[16ch] text-balance font-serif text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            {t('planTitle')}
          </h2>
          <p className="mt-7 max-w-md text-pretty text-base leading-relaxed text-secondary-foreground/70 sm:text-lg">
            {t('planBody')}
          </p>
          <ul className="mt-10 space-y-4">
            {points.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-secondary-foreground sm:text-base"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  )
}

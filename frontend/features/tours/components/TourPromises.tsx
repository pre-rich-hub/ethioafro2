import { getTranslations } from 'next-intl/server'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'

export async function TourPromises() {
  const tp = await getTranslations('Promises')

  const promises = [
    { title: tp('promise1Title'), text: tp('promise1Text') },
    { title: tp('promise2Title'), text: tp('promise2Text') },
    { title: tp('promise3Title'), text: tp('promise3Text') },
    { title: tp('promise4Title'), text: tp('promise4Text') },
  ]

  return (
    <section className="border-y border-border bg-secondary text-secondary-foreground">
      <div className="shell py-16 sm:py-20 lg:py-28">
        <SectionHeading
          eyebrow={tp('toursEyebrow')}
          title={tp('toursTitle')}
          tone="dark"
        />
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className="border-t border-background/20 pt-6"
            >
              <p className="mb-3 font-serif text-xl text-background sm:text-2xl">
                {p.title}
              </p>
              <p className="text-pretty text-sm leading-relaxed text-background/70">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

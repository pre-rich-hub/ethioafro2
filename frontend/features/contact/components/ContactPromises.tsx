import { getTranslations } from 'next-intl/server'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'

export async function ContactPromises() {
  const tp = await getTranslations('Promises')

  const promises = [
    { title: tp('promise1Title'), text: tp('promise1Text') },
    { title: tp('promise2Title'), text: tp('promise2Text') },
    { title: tp('promise3Title'), text: tp('promise3Text') },
    { title: tp('promise4Title'), text: tp('promise4Text') },
  ]

  return (
    <section className="shell py-16 sm:py-20 lg:py-28">
      <SectionHeading
        eyebrow={tp('contactEyebrow')}
        title={tp('contactTitle')}
        align="center"
      />
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {promises.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 90}
            className="border-t border-border pt-6"
          >
            <p className="mb-3 font-serif text-xl text-foreground sm:text-2xl">
              {p.title}
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {p.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

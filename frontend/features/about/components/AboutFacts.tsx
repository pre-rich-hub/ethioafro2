import { getTranslations } from 'next-intl/server'
import { Reveal } from '@/components/common/Reveal'
import { company } from '@/lib/seo/entities'
import { ethiopiaFacts } from '@/lib/seo/facts'

export async function AboutFacts() {
  const t = await getTranslations('About')

  // Build localised fact rows (values/labels from messages; details stay English)
  const facts = [
    { value: t('factValue0'), label: t('factLabel0'), detail: ethiopiaFacts[0]?.detail },
    { value: t('factValue1'), label: t('factLabel1', { founder: company.founder }), detail: undefined },
    { value: t('factValue2'), label: t('factLabel2'), detail: undefined },
    { value: t('factValue3'), label: t('factLabel3'), detail: undefined },
    { value: t('factValue4'), label: t('factLabel4'), detail: undefined },
    { value: t('factValue5'), label: t('factLabel5'), detail: undefined },
  ]

  return (
    <section className="border-y border-border bg-muted/40">
      <div className="shell py-16 sm:py-20 lg:py-24">
        <Reveal className="mb-10 max-w-2xl sm:mb-14">
          <p className="eyebrow mb-5 text-accent">
            <span className="rule" />
            {t('factsEyebrow')}
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            {t('factsTitle', { company: company.name })}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            {t('factsBody')}
          </p>
        </Reveal>

        <dl className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact, i) => (
            <Reveal
              key={fact.label}
              as="div"
              delay={(i % 3) * 80}
              className="bg-card p-7 sm:p-8"
            >
              <dt className="font-serif text-3xl leading-none text-accent sm:text-4xl">
                {fact.value}
              </dt>
              <dd className="mt-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
                  {fact.label}
                </p>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}

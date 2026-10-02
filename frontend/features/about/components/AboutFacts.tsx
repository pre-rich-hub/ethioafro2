import { Reveal } from '@/components/common/Reveal'
import { companyFacts } from '@/lib/seo/facts'
import { company } from '@/lib/seo/entities'

export function AboutFacts() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="shell py-16 sm:py-20 lg:py-24">
        <Reveal className="mb-10 max-w-2xl sm:mb-14">
          <p className="eyebrow mb-5 text-accent">
            <span className="rule" />
            At a Glance
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            Facts you can quote about {company.name}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            Stable details for travellers, partners and anyone checking who we
            are — the same facts we publish in our structured data.
          </p>
        </Reveal>

        <dl className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {companyFacts.map((fact, i) => (
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
                {fact.detail && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {fact.detail}
                  </p>
                )}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}

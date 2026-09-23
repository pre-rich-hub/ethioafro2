import Link from 'next/link'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { contact } from '@/lib/site'

export type LegalSection = {
  id: string
  title: string
  blocks: { heading?: string; paragraphs: string[]; list?: string[] }[]
}

export function LegalPage({
  eyebrow,
  title,
  lede,
  updated,
  sections,
  related,
}: {
  eyebrow: string
  title: string
  lede: string
  updated: string
  sections: LegalSection[]
  related: { label: string; href: string }
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        lede={lede}
        image="/images/hero-simien.png"
        imageAlt="The Simien Mountains escarpment at first light"
        crumbs={[{ label: 'Home', href: '/' }, { label: title }]}
        compact
      />

      <section className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[260px_1fr] lg:gap-20 lg:py-24">
        {/* Contents — sticky on desktop */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
            Last updated
          </p>
          <p className="mt-1.5 font-serif text-xl text-foreground">{updated}</p>

          <nav aria-label="On this page" className="mt-8 border-t border-border pt-6">
            <p className="eyebrow mb-4 text-accent">
              <span className="rule" />
              On this page
            </p>
            <ol className="space-y-1">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-baseline gap-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="w-5 shrink-0 font-serif text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Body */}
        <div className="max-w-3xl">
          {sections.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-28 border-t border-border py-10 first:border-t-0 first:pt-0"
            >
              <p className="font-serif text-lg text-accent">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h2 className="mt-1 text-3xl leading-tight text-foreground sm:text-4xl">
                {s.title}
              </h2>
              <div className="mt-6 space-y-7">
                {s.blocks.map((b, j) => (
                  <div key={b.heading ?? j}>
                    {b.heading && (
                      <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground sm:text-xs">
                        {b.heading}
                      </h3>
                    )}
                    <div className={b.heading ? 'mt-3 space-y-4' : 'space-y-4'}>
                      {b.paragraphs.map((p) => (
                        <p
                          key={p.slice(0, 32)}
                          className="text-pretty leading-relaxed text-muted-foreground sm:text-[17px]"
                        >
                          {p}
                        </p>
                      ))}
                      {b.list && (
                        <ul className="divide-y divide-border border-y border-border">
                          {b.list.map((item) => (
                            <li
                              key={item}
                              className="flex gap-4 py-3.5 text-pretty leading-relaxed text-muted-foreground sm:text-[17px]"
                            >
                              <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}

          {/* Contact card */}
          <div className="mt-6 bg-secondary p-8 text-secondary-foreground sm:p-10">
            <p className="eyebrow text-accent">
              <span className="rule" />
              Questions?
            </p>
            <p className="mt-4 max-w-lg font-serif text-2xl leading-snug text-background sm:text-3xl">
              Ask us anything about this page — a real person will answer.
            </p>
            <div className="mt-7 flex flex-col gap-3 text-sm text-background/75 sm:flex-row sm:gap-8">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2.5 py-1 transition-colors hover:text-background"
              >
                <Mail className="h-4 w-4 text-accent" strokeWidth={1.5} />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                className="inline-flex items-center gap-2.5 py-1 transition-colors hover:text-background"
              >
                <Phone className="h-4 w-4 text-accent" strokeWidth={1.5} />
                {contact.phone}
              </a>
            </div>
            <Link
              href={related.href}
              className="group mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent transition-colors hover:text-background sm:text-xs"
            >
              {related.label}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

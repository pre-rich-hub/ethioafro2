import type { LegalSection } from '../types/legal.types'

export function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <>
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
    </>
  )
}

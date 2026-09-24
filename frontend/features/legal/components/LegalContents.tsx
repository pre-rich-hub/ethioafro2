import type { LegalSection } from '../types/legal.types'

export function LegalContents({ updated, sections }: { updated: string; sections: LegalSection[] }) {
  return (
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
  )
}

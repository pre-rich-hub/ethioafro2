import type { Experience } from '../types/travel-style.types'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function TravelNavigation({ prev, next }: { prev: Experience; next: Experience }) {
  return (
    <nav
      aria-label="More ways we travel"
      className="border-t border-border"
    >
      <div className="shell grid sm:grid-cols-2">
        {[
          { e: prev, dir: 'Previous', Icon: ArrowLeft },
          { e: next, dir: 'Next', Icon: ArrowRight },
        ].map(({ e: x, dir, Icon }, i) => (
          <Link
            key={dir}
            href={`/how-we-travel/${x.slug}`}
            className={`group flex flex-col gap-2 py-10 transition-colors sm:py-12 ${
              i === 1
                ? 'border-t border-border sm:items-end sm:border-l sm:border-t-0 sm:pl-10 sm:text-right'
                : 'sm:pr-10'
            }`}
          >
            <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[11px]">
              {i === 0 && <Icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />}
              {dir} · {x.number}
              {i === 1 && <Icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />}
            </span>
            <span className="font-serif text-2xl text-foreground transition-colors group-hover:text-accent sm:text-3xl">
              {x.title}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

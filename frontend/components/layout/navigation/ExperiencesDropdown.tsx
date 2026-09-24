'use client'

import { cn } from '@/lib/utils/cn'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { navExperiences } from './navigation.data'
import type { NavigationState } from './useNavigation'

type Props = Pick<NavigationState, 'dismissed' | 'dismiss'>

export function ExperiencesDropdown({ dismissed, dismiss }: Props) {
  return (
    <div className={cn(
      "absolute left-0 top-full w-full border-b border-border/60 bg-background/98 opacity-0 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 ease-out invisible -translate-y-3 pointer-events-none group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto z-45 text-foreground before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-accent/60 before:to-transparent",
      dismissed === 'Experiences' && '!invisible !pointer-events-none !opacity-0',
    )}>
      <div className="shell grid grid-cols-[1fr_3.4fr] gap-16 py-12">
        <div className="flex flex-col justify-between border-r border-border/60 pr-10">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Add to Any Journey
            </p>
            <h3 className="font-serif text-[2rem] leading-[1.1] text-foreground mb-5">
              Experiences
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Kitchens, coffee houses, farms and running
              trails — short experiences we fit into your
              route wherever they make sense.
            </p>
          </div>
          <Link
            href="/experiences"
            onClick={dismiss('Experiences')}
            className="group/cta mt-8 inline-flex items-center gap-2.5 self-start border-b border-accent/40 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent transition-colors duration-300 hover:border-accent"
          >
            View All Experiences
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-1" />
          </Link>
          <Link
            href="/how-we-travel"
            onClick={dismiss('Experiences')}
            className="group/cta mt-4 inline-flex items-center gap-2.5 self-start text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-300 hover:text-accent"
          >
            How We Travel
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-7">
          {navExperiences.map((a) => (
            <Link
              key={a.slug}
              href={`/experiences/${a.slug}`}
              onClick={dismiss('Experiences')}
              className="group/item flex flex-col gap-4"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm shadow-sm transition-shadow duration-300 group-hover/item:shadow-lg">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  sizes="220px"
                  className="object-cover transition-transform duration-700 ease-out group-hover/item:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"
                />
                <span className="absolute left-3 top-3 rounded-sm bg-background/95 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm">
                  {a.category}
                </span>
              </div>
              <div>
                <h4 className="font-serif text-base text-foreground transition-colors duration-300 group-hover/item:text-accent line-clamp-1">
                  {a.title}
                </h4>
                <p className="mt-1 block text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                  {a.duration}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

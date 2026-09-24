import { slugify } from '@/features/experiences/utils/experience.utils'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock3, MapPin } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { CtaBand } from '@/features/enquiries'
import { activities, activityCategories } from '@/features/experiences/data/experience.data'
import { type Activity } from '@/features/experiences/types/experience.types'

export function ActivityCard({ a }: { a: Activity }) {
  return (
    <Link
      href={`/experiences/${a.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-border bg-card transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={a.image}
          alt={a.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-sm bg-accent px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-foreground">
          {a.category}
        </span>
        <h3 className="absolute inset-x-0 bottom-0 p-5 font-serif text-2xl leading-tight text-background">
          {a.title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">{a.teaser}</p>
        <div className="mt-5 grid gap-2.5">
          <span className="flex items-center gap-2 text-xs text-foreground">
            <Clock3 className="h-3.5 w-3.5 shrink-0 text-accent" />
            {a.duration}
          </span>
          <span className="flex items-center gap-2 text-xs text-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
            {a.where}
          </span>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 border-t border-border pt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors duration-300 group-hover:text-accent">
          Explore
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

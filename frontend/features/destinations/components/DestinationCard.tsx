import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Mountain, CalendarDays, Clock3, ArrowRight } from 'lucide-react'
import { type Destination } from '@/features/destinations/types/destination.types'
import { cn } from '@/lib/utils/cn'

export function DestinationCard({
  destination: d,
  className,
  sizes = '(max-width: 1024px) 100vw, 33vw',
}: {
  destination: Destination
  className?: string
  height?: 'md' | 'lg'
  sizes?: string
}) {
  return (
    <Link
      href={`/destinations/${d.slug}`}
      className={cn(
        'group flex h-full flex-col overflow-hidden border border-border bg-card transition-shadow duration-300 hover:shadow-xl',
        className,
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={d.image || '/placeholder.svg'}
          alt={`${d.name}, Ethiopia`}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-sm bg-accent px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-foreground">
          {d.tag}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-light">
            {d.region}
          </p>
          <h3 className="mt-1 font-serif text-2xl text-background">
            {d.name}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          {d.teaser}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
            <span className="text-xs text-foreground">{d.region}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mountain className="h-3.5 w-3.5 shrink-0 text-accent" />
            <span className="text-xs text-foreground">{d.altitude}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock3 className="h-3.5 w-3.5 shrink-0 text-accent" />
            <span className="text-xs text-foreground">{d.bestTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5 shrink-0 text-accent" />
            <span className="text-xs text-foreground">{d.duration}</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 border-t border-border pt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors duration-300 group-hover:text-accent">
          Explore
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

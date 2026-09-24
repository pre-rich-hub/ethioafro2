import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Mountain } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { TourCard } from '@/features/tours'
import { EnquiryForm } from '@/features/enquiries'
import { CtaBand } from '@/features/enquiries'
import { destinations } from '@/features/destinations/data/destination.data'
import { getDestination } from '@/features/destinations/utils/destination.utils'
import { tours } from '@/features/tours/data/tour.data'
import type { ReactNode } from 'react'
import type { Tour } from '@/features/tours/types/tour.types'
import type { Destination } from '@/features/destinations/types/destination.types'
import type { Activity, ActivityCategory } from '@/features/experiences/types/experience.types'
import type { Post } from '@/features/blog/types/blog.types'
import type { Peak } from '@/features/mountains/types/mountain.types'


type Props = {
  d: Destination
  others: Destination[]
}

export function DestinationEnquiry({ d, others }: Props) {
  return (
    <section className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:py-28">
        <Reveal>
          <p className="eyebrow mb-5 text-accent">
            <span className="rule" />
            Plan This Destination
          </p>
          <h2 className="max-w-[20ch] text-balance text-3xl leading-[1.08] text-foreground sm:text-4xl lg:text-5xl">
            Build {d.name} into your journey
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            Nothing here is fixed. Tell us how long you have and what else you
            want to see, and a designer will draw the route — including the
            flights, the guides and the hours that matter.
          </p>

          <div className="mt-12">
            <p className="eyebrow mb-6 text-primary">
              <span className="rule" />
              Also Consider
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/destinations/${o.slug}`}
                    className="group flex items-center gap-4 border border-border bg-card p-3 transition-colors hover:border-primary/40"
                  >
                    <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm">
                      <Image
                        src={o.image || '/placeholder.svg'}
                        alt=""
                        aria-hidden
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-serif text-lg text-foreground transition-colors group-hover:text-primary">
                        {o.name}
                      </span>
                      <span className="block text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        {o.region}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <EnquiryForm subject={d.name} defaultStyles={['Luxury']} />
        </Reveal>
      </section>
  )
}

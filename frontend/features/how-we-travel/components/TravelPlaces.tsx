import { Reveal } from '@/components/common/Reveal'
import { DestinationCard } from '@/features/destinations'
import type { Destination } from '@/features/destinations/types/destination.types'

export function TravelPlaces({ places }: { places: Destination[] }) {
  return (
    <>
      {places.length > 0 && (
        <section className="border-t border-border bg-muted/40">
          <div className="shell py-16 sm:py-20 lg:py-24">
            <Reveal className="mb-10 max-w-2xl sm:mb-12">
              <p className="eyebrow mb-4 text-accent">
                <span className="rule" />
                Where It Happens
              </p>
              <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
                The places behind this idea
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {places.map((d, i) => (
                <Reveal key={d.slug} delay={i * 90} className="h-full">
                  <DestinationCard destination={d} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

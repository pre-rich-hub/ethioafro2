import Image from 'next/image'
import { Compass } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'
import { getLayoverPackagesData } from '@/lib/data'

export async function LayoverTeaser() {
  // Homepage section: baked at build time (the homepage is statically built);
  // a failing API falls back to the static catalog, so the build never breaks.
  const packages = await getLayoverPackagesData()

  return (
    <section className="border-y border-border bg-muted/40">
      <div className="shell grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-32">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow mb-6 text-primary">
            <span className="rule" />
            Outbound Tours
          </p>
          <h2 className="max-w-[20ch] text-balance font-serif text-[2.1rem] leading-[1.08] text-foreground sm:text-[2.6rem] lg:text-5xl">
            Ethiopia is the start, not the whole trip
          </h2>
          <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Addis is a hub before it's a destination. Ethiopian Airlines flies
            direct to Nairobi, Zanzibar, Kilimanjaro and Kigali — close enough
            that a second country is a genuine add-on, not a second trip.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {packages.map((p) => (
              <div key={p.slug} className="border-t border-border pt-4">
                <dt className="flex items-center gap-1.5 font-serif text-xl text-primary">
                  <Compass className="h-3.5 w-3.5 text-accent" aria-hidden />
                  {p.hours}
                </dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {p.title}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <LinkButton href="/outbound">Explore outbound tours</LinkButton>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:aspect-[5/6]">
            <Image
              src="/images/addis-skyline.png"
              alt="The Addis Ababa skyline at dusk seen from the Entoto hills"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-6 pt-16">
              <p className="text-[11px] uppercase tracking-[0.2em] text-background/80">
                Bole International · Addis Ababa
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

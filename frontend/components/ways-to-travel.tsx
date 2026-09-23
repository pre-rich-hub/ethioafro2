import Link from 'next/link'
import { ArrowRight, Compass, Gem, KeyRound, Users, UsersRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import type { Tour } from '@/lib/site'

const styles = [
  {
    style: 'Private',
    Icon: KeyRound,
    text: 'Your own guide, vehicle and dates, with every day shaped around you.',
  },
  {
    style: 'Family',
    Icon: Users,
    text: 'Short drives, family rooms and days that mix one big sight with time to play.',
  },
  {
    style: 'Luxury',
    Icon: Gem,
    text: 'The finest lodge at every stop, private guides, and nothing rushed.',
  },
  {
    style: 'Small Group',
    Icon: UsersRound,
    text: 'Set departures with other travellers — shared crews, same senior guides.',
  },
  {
    style: 'Expedition',
    Icon: Compass,
    text: 'Long, demanding journeys: summits, deserts and the far corners of the country.',
  },
]

function count(tours: Tour[], style: string) {
  return tours.filter((t) => t.style.split('·').map((s) => s.trim()).includes(style)).length
}

export function WaysToTravel({
  tours,
  // On the tours page itself the grid reads ?style= on load, so cards use a
  // full navigation there instead of a client-side link.
  onToursPage = false,
}: {
  tours: Tour[]
  onToursPage?: boolean
}) {
  return (
    <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
      {styles.map(({ style, Icon, text }, i) => {
        const n = count(tours, style)
        const href = `/tours?style=${encodeURIComponent(style)}`
        const className =
          'group flex h-full flex-col bg-background p-6 transition-colors duration-300 hover:bg-card sm:p-7'
        const body = (
          <>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <span className="mt-5 font-serif text-2xl text-foreground">{style}</span>
            <span className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
              {text}
            </span>
            <span className="mt-5 flex items-center justify-between border-t border-border pt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors group-hover:text-accent">
              {n} {n === 1 ? 'journey' : 'journeys'}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </>
        )
        return (
          <Reveal key={style} delay={i * 70} className="h-full">
            {onToursPage ? (
              <a href={href} className={className}>
                {body}
              </a>
            ) : (
              <Link href={href} className={className}>
                {body}
              </Link>
            )}
          </Reveal>
        )
      })}
    </div>
  )
}

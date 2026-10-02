'use client'

import Image from 'next/image'
import { ArrowRight, Compass, Gem, KeyRound, Users, UsersRound } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Reveal } from '@/components/common/Reveal'
import { localizeStyleToken } from '@/features/tours/utils/style-labels'
import { type Tour } from '@/features/tours/types/tour.types'

const cld = (slug: string) =>
  `https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1600/${slug}.png`

/** English tokens stay in URLs / filters; labels + copy come from messages. */
const styles = [
  {
    style: 'Private',
    Icon: KeyRound,
    image: cld('gondar'),
    textKey: 'waysPrivateText' as const,
  },
  {
    style: 'Family',
    Icon: Users,
    image: cld('lake-tana'),
    textKey: 'waysFamilyText' as const,
  },
  {
    style: 'Luxury',
    Icon: Gem,
    image: cld('lalibela'),
    textKey: 'waysLuxuryText' as const,
  },
  {
    style: 'Small Group',
    Icon: UsersRound,
    image: cld('simien-mountains'),
    textKey: 'waysSmallGroupText' as const,
  },
  {
    style: 'Expedition',
    Icon: Compass,
    image: cld('danakil-depression'),
    textKey: 'waysExpeditionText' as const,
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
  const t = useTranslations('Tours')

  return (
    // Three cards on the first desktop row, two wider ones on the second.
    <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-6">
      {styles.map(({ style, Icon, textKey, image }, i) => {
        const n = count(tours, style)
        const label = localizeStyleToken(style, t)
        const href = `/tours?style=${encodeURIComponent(style)}`
        const className =
          'group flex h-full flex-col bg-background transition-colors duration-300 hover:bg-card'
        const body = (
          <>
            <span className="relative block aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-[340px]">
              <Image
                src={image}
                alt={t('waysAlt', { style: label })}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/15 to-transparent" />
              <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-accent backdrop-blur-sm transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="absolute inset-x-0 bottom-0 p-6 font-serif text-3xl text-background sm:p-7 sm:text-4xl">
                {label}
              </span>
            </span>
            <span className="flex flex-1 flex-col p-6 sm:p-7">
              <span className="flex-1 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                {t(textKey)}
              </span>
              <span className="mt-5 flex items-center justify-between border-t border-border pt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors group-hover:text-accent">
                {t('waysJourneyCount', { count: n })}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </span>
          </>
        )
        return (
          <Reveal
            key={style}
            delay={i * 70}
            className={`h-full ${i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'} ${i === 4 ? 'sm:col-span-2 lg:col-span-3' : ''}`}
          >
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

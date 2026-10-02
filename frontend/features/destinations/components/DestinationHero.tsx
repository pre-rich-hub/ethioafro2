import { PageHero } from '@/components/common/PageHero'

export function DestinationHero() {
  return (
      <PageHero
        eyebrow="Where We Travel"
        title="Eight regions, each a different country in feel"
        lede="From churches quarried out of solid rock to a permanent lava lake below sea level — these are the places our designers can talk about by season, altitude and time of day."
        image="https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1600/lalibela.png"
        imageAlt="Rock-hewn churches of Lalibela, Ethiopia"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations' }]}
        compact
      />
  )
}

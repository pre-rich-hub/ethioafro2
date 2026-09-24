import { PageHero } from '@/components/common/PageHero'

export function DestinationHero() {
  return (
      <PageHero
        eyebrow="Where We Travel"
        title="Eight regions, each a different country in feel"
        lede="From churches quarried out of solid rock to a permanent lava lake below sea level — these are the places our designers can talk about by season, altitude and time of day."
        image="/images/gondar.png"
        imageAlt="The royal enclosure of Fasil Ghebbi in Gondar at golden hour"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations' }]}
        compact
      />
  )
}

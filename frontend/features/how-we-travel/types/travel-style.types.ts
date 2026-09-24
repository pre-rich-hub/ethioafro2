export type Experience = {
  slug: string
  number: string
  title: string
  tagline: string
  image: string
  gallery: string[]
  intro: string
  paragraphs: string[]
  highlights: string[]
  facts: { label: string; value: string }[]
  // Where the idea happens and which journeys carry it, by slug. The first
  // tour is the one we point to first.
  destinationSlugs: string[]
  tourSlugs: string[]
}

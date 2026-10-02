// Short, bookable add-ons that slot into any journey — shown at /experiences.
export type ActivityCategory =
  | 'Food & Drink'
  | 'Coffee'
  | 'Active'
  | 'Farm & Community'
  | 'Give Back'

export type Activity = {
  slug: string
  title: string
  // Short label for enquiry-form chips.
  short: string
  category: ActivityCategory
  duration: string
  where: string
  season: string
  image: string
  teaser: string
  intro: string
  paragraphs: string[]
  includes: string[]
  goodToKnow?: string
  destinationSlugs: string[]
  tourSlugs: string[]
}

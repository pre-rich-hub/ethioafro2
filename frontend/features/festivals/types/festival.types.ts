// Festival calendar for /festivals. Ethiopian-calendar dates shift by a day
// in some Gregorian years; moveable feasts are marked as such.
export type Festival = {
  slug: string
  name: string
  localName?: string
  when: string
  month: string
  where: string
  unesco?: string
  image: string
  text: string
  tourSlugs: string[]
  destinationSlugs: string[]
}

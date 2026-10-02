export type Post = {
  slug: string
  title: string
  category: string
  date: string
  readTime: string
  image: string
  author: string
  authorRole: string
  excerpt: string
  /** Direct answer sentence for GEO — shown above the essay body when present. */
  directAnswer?: string
  body: string[]
  featured?: boolean
}

export type LegalSection = {
  id: string
  title: string
  blocks: { heading?: string; paragraphs: string[]; list?: string[] }[]
}

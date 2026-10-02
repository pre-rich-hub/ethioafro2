export type FaqItem = {
  question: string
  answer: string
}

export type FaqSet = {
  eyebrow?: string
  title: string
  intro?: string
  items: FaqItem[]
}

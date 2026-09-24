// Ethiopia's climbable summits, for the Mountains guide. Heights follow the
// commonly cited figures; where sources differ we round down. Ranking beyond
// Ras Dashen is deliberately left out — published lists disagree.
export type Peak = {
  name: string
  height: number
  // Shown instead of the number where sources disagree on the exact height.
  heightLabel?: string
  range: string
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous'
  days: string
  season: string
  note: string
  tourSlug?: string
  destinationSlug?: string
}

import { company } from '@/lib/seo/entities'

export type CiteableFact = {
  /** Short value shown large — numbers preferred. */
  value: string
  /** Plain-language label answer engines can quote with the value. */
  label: string
  /** Optional longer sentence for schema / hover context. */
  detail?: string
}

/** Company facts — keep aligned with About copy and Organization JSON-LD. */
export const companyFacts: CiteableFact[] = [
  {
    value: 'Licensed',
    label: 'Ethiopian tour operator',
    detail: `${company.name} is a licensed Ethiopian tour company based in ${company.baseCity}.`,
  },
  {
    value: 'Family-run',
    label: `Founded by ${company.founder}`,
    detail: company.foundingOneLiner,
  },
  {
    value: company.baseCity,
    label: 'Headquarters in Ethiopia',
    detail: `${company.streetAddress}, ${company.addressLocality}, ${company.country}.`,
  },
  {
    value: 'Private',
    label: 'Tailor-made journeys only',
    detail:
      'Every itinerary is drawn from scratch around the guest — not sold as a fixed package from a shelf.',
  },
  {
    value: '10+',
    label: 'Languages on the ground',
    detail:
      'Designers, guides and drivers work with guests in ten languages and counting.',
  },
  {
    value: 'Simien',
    label: 'Named for the mountains where it began',
    detail:
      'The company takes its name from the Simien Mountains, where the founder first guided travellers while still in school.',
  },
]

/** Country facts used on Home / Why Ethiopia — citeable national context. */
export const ethiopiaFacts: CiteableFact[] = [
  {
    value: '3,000+',
    label: 'years of continuous civilization',
    detail:
      'Ethiopia is home to one of the world\'s oldest continuous civilizations, with its own calendar, script and church traditions.',
  },
  {
    value: '9',
    label: 'UNESCO World Heritage Sites',
    detail:
      'Ethiopia has nine UNESCO World Heritage Sites, from Lalibela and Axum to the Simien Mountains and the Konso Cultural Landscape.',
  },
  {
    value: '80+',
    label: 'living languages and cultures',
    detail:
      'More than eighty living languages are spoken across Ethiopia’s highland, lowland and southern communities.',
  },
  {
    value: '13',
    label: 'months in the Ethiopian calendar',
    detail:
      'Ethiopia keeps a thirteen-month calendar, distinct from the Gregorian year used by most visitors.',
  },
]

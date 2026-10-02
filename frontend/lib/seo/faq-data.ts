import type { FaqItem } from '@/lib/seo/faq.types'
import { company } from '@/lib/seo/entities'
import { contact } from '@/lib/constants/contact'

export const contactFaqs: FaqItem[] = [
  {
    question: 'How quickly will someone reply?',
    answer: `An Addis Ababa–based designer usually replies the same day during ${contact.hours}. Outside those hours we still monitor urgent messages, and someone on the ground remains reachable once your trip is underway.`,
  },
  {
    question: 'Do I need a finished itinerary before I write?',
    answer:
      'No. A rough window, how many travellers, and what draws you to Ethiopia is enough. We treat the catalogue routes as starting points and redraw the trip around your pace, altitude comfort and interests.',
  },
  {
    question: 'When do you take a deposit?',
    answer:
      'Only after you are happy with a draft itinerary and pricing. There is no obligation for an exploratory conversation, and we will not ask for payment while we are still shaping the trip.',
  },
  {
    question: 'Can you help with visas and flights?',
    answer:
      'We advise on Ethiopian e-visa requirements and domestic flight timing, and we book in-country logistics. International flights stay with you or your own agent unless you ask us to arrange something specific.',
  },
  {
    question: 'Who will I speak with?',
    answer: `You write to ${company.name} directly — not a call centre. One named designer follows your enquiry through to departure, with a phone and WhatsApp line open on the ground.`,
  },
]

export const toursFaqs: FaqItem[] = [
  {
    question: 'Are these fixed group packages?',
    answer:
      'No. Every journey on this site is a private starting point. We reshape days, lodges and pacing around you — most guests end up between two catalogue routes rather than booking one unchanged.',
  },
  {
    question: 'How does pricing work for tailor-made trips?',
    answer:
      'Some shorter routes show a from-price; many are quoted individually because lodge availability, domestic flights and group size change the total. We send a clear line-item quote before any deposit.',
  },
  {
    question: 'What group size do you work with?',
    answer:
      'Most private trips run for two to eight guests. Solo travellers and larger family groups are welcome — we adjust vehicles, rooms and guiding accordingly.',
  },
  {
    question: 'How fit do I need to be?',
    answer:
      'It depends on the route. Historic-route days can stay gentle; Simien and Bale treks need steady walking at altitude. Tell us your comfort level and we will avoid or include the harder legs honestly.',
  },
  {
    question: 'Do you include domestic flights and park fees?',
    answer:
      'Inclusions are listed on each tour page. Domestic flights, park fees, guides and most meals are usually included on longer circuits; international flights, visas and travel insurance are not.',
  },
  {
    question: 'Can children join?',
    answer:
      'Yes on many cultural and city routes. High escarpment treks and the Danakil are better for older teens and adults. We design family pacing and rooming from the first draft.',
  },
]

export const lalibelaFaqs: FaqItem[] = [
  {
    question: 'When is the best time to visit Lalibela?',
    answer:
      'October to March is the most reliable window for dry paths and clear light. Ethiopian Christmas (early January) and Timkat fill the churches with pilgrims — powerful if you want liturgy, quieter if you come midweek outside the feasts. See our journal piece on dawn visits for timing tips.',
  },
  {
    question: 'How many days should I spend?',
    answer:
      'Two to three full days is enough for both church clusters, a dawn visit and one outlying monastery such as Asheton Maryam or Yemrehanna Kristos. One rushed day only covers the highlights in tourist hours.',
  },
  {
    question: 'Is Lalibela difficult to walk?',
    answer:
      'The town sits around 2,500 metres. Paths between churches use trenches, steps and uneven rock — manageable for most visitors who take it slowly, but hard on knees and balance. We can plan rest stops and vehicle transfers where useful.',
  },
  {
    question: 'Should I see the churches at dawn?',
    answer:
      'Yes if you can. Early light and morning prayer show Lalibela as a living church rather than a midday monument. We time permits and a local guide so you arrive before the main tour groups.',
  },
  {
    question: 'Which journeys include Lalibela?',
    answer:
      'Lalibela anchors the Historic Route and several shorter highland itineraries. Tell us your dates and we will match a private circuit that gives the churches proper time rather than a tick-box stop.',
  },
]

export const simienFaqs: FaqItem[] = [
  {
    question: 'When is the best time for the Simien Mountains?',
    answer:
      'October to April is the main trekking season: clearer views and more stable trails after the rains. July to September is wetter, with muddier paths and more disrupted logistics — we usually advise other regions then.',
  },
  {
    question: 'How high is it, and will altitude be a problem?',
    answer:
      'Trail camps sit roughly between 3,000 and 4,200 metres, with Ras Dashen at 4,550 metres. Most guests manage well with gradual ascent, rest and hydration; we never rush the first night. Tell us honestly if you have heart or lung conditions.',
  },
  {
    question: 'Do I need to camp?',
    answer:
      'No. You can walk the classic escarpment and sleep in lodges on the rim, or go camp-to-camp with mules, scout and cook. We match the style to your comfort rather than forcing a single product.',
  },
  {
    question: 'How many days do the Simiens need?',
    answer:
      'Three to five days covers the classic Sankaber–Geech–Chenek line well. Longer trips add Ras Dashen or combine with Gondar and Lalibela. Less than two full days on the escarpment usually feels rushed.',
  },
  {
    question: 'Will I see geladas and walia ibex?',
    answer:
      'Gelada troops are commonly seen along the northern escarpment paths. Walia ibex are shyer and more likely around Chenek and higher cliffs — never guaranteed, but we time walks for the better hours.',
  },
]

export const destinationFaqsBySlug: Record<string, FaqItem[]> = {
  lalibela: lalibelaFaqs,
  'simien-mountains': simienFaqs,
}

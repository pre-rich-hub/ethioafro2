import type { LegalSection } from '../types/legal.types'

export const termsSections: LegalSection[] = [
  {
    id: 'booking',
    title: 'Booking',
    blocks: [
      {
        heading: 'Securing your journey',
        paragraphs: [
          'A private journey is confirmed once we receive a 30% deposit, unless your written proposal sets out a different arrangement. The balance is due no later than 60 days before departure. If you book within 60 days of departure, full payment is due at confirmation.',
        ],
      },
      {
        heading: 'Confirmation',
        paragraphs: [
          'Once the deposit or full payment arrives, we send a written confirmation with your itinerary, the services included, meeting details and the practical information you need before travelling.',
        ],
      },
      {
        heading: 'Changing your booking',
        paragraphs: [
          'Requests to change dates, accommodation, routing, activities or traveller details must reach us in writing at least 45 days before departure. Every change depends on availability and supplier rules, and may carry price differences or additional administrative or service costs.',
        ],
      },
    ],
  },
  {
    id: 'payment',
    title: 'Payment',
    blocks: [
      {
        heading: 'How to pay',
        paragraphs: [
          'We may accept bank transfer, major credit cards (Visa, Mastercard and American Express) and PayPal, where available. Prices are quoted in US dollars unless your written proposal says otherwise. Bank, card, transfer and intermediary charges are paid by the traveller unless we agree otherwise in writing.',
        ],
      },
      {
        heading: 'Schedule',
        paragraphs: [
          'The standard schedule is a 30% deposit at booking and the balance 60 days before departure. If a payment is late, supplier reservations may be released, services may change, or the booking may be cancelled under the cancellation terms below.',
        ],
      },
      {
        heading: 'Currency and taxes',
        paragraphs: [
          'Quoted prices include the local taxes and required service charges known at the time of confirmation. Where it cannot be avoided, we may pass on later increases caused by currency movements, new government taxes, changes to park or permit fees, fuel surcharges or other external costs.',
        ],
      },
    ],
  },
  {
    id: 'cancellation',
    title: 'Cancellation',
    blocks: [
      {
        heading: 'If you cancel',
        paragraphs: [
          'Cancellations must be made in writing. Refunds depend on how close to departure we receive them:',
        ],
        list: [
          'More than 60 days before departure — refundable amounts are returned, less a USD 150 administration fee and any non-refundable supplier costs.',
          '30 to 60 days before departure — up to 50% of recoverable tour costs may be refunded.',
          '15 to 29 days before departure — up to 25% of recoverable tour costs may be refunded.',
          'Fewer than 15 days before departure — payments are non-refundable, except for anything suppliers agree to return at their discretion.',
        ],
      },
      {
        heading: 'If we cancel',
        paragraphs: [
          'If we have to cancel a confirmed journey for reasons of safety, operational necessity, viability or circumstances beyond our control, we will refund recoverable payments or, where practical, offer to reschedule. We are not responsible for separate costs such as international flights, visas, insurance premiums or personal expenses, unless the law requires otherwise.',
        ],
      },
      {
        heading: 'Events beyond our control',
        paragraphs: [
          'We are not liable for cancellations, delays, route changes, missed services or extra costs caused by events outside our reasonable control — including natural disasters, pandemics, civil unrest, government action, border restrictions, airline disruption, strikes, severe weather and security incidents.',
        ],
      },
    ],
  },
  {
    id: 'liability',
    title: 'Liability',
    blocks: [
      {
        heading: 'Independent suppliers',
        paragraphs: [
          'We arrange services delivered by independent suppliers — hotels, lodges, airlines, restaurants, transport providers, local guides, parks, museums and activity operators. We choose them carefully, but we are not responsible for every act, omission, delay, policy or failure on their part.',
        ],
      },
      {
        heading: 'Injury and property',
        paragraphs: [
          'To the fullest extent the law allows, we are not responsible for personal injury, illness, death, loss, theft or damage to personal property during travel, except where it is caused by our proven negligence.',
        ],
      },
      {
        heading: 'Inherent risks',
        paragraphs: [
          'Trekking, wildlife viewing, boat trips, long road journeys, remote-area travel, cultural visits and other outdoor experiences carry risks of their own. By joining an itinerary you accept those risks and agree to follow the safety instructions of guides and service providers.',
        ],
      },
    ],
  },
  {
    id: 'insurance',
    title: 'Insurance',
    blocks: [
      {
        heading: 'Required for every traveller',
        paragraphs: [
          'Comprehensive travel insurance is required for everyone travelling with us. Your policy should cover cancellation and interruption, medical emergencies, evacuation, repatriation, baggage, delays, and every activity in your itinerary. We recommend medical and evacuation cover of at least USD 100,000.',
        ],
      },
      {
        heading: 'Proof of cover',
        paragraphs: [
          'We may ask for proof of adequate insurance at least 14 days before departure. If suitable proof is not provided when requested, final travel documents may be delayed or the booking cancelled under these terms.',
        ],
      },
      {
        heading: 'What we recommend',
        paragraphs: [
          'Beyond the essentials, we strongly recommend cover for supplier failure and for activity-specific risks such as trekking, high-altitude travel, remote driving and boat excursions — all common on our northern routes.',
        ],
      },
    ],
  },
  {
    id: 'your-responsibilities',
    title: 'Your responsibilities',
    blocks: [
      {
        heading: 'Travel documents',
        paragraphs: [
          'You are responsible for a valid passport, visas, entry permissions, vaccination and health requirements, transit documents, customs rules and any documents a particular activity needs. We are glad to offer general guidance, but we cannot be responsible for denied entry, denied boarding or missed services caused by missing or incorrect documents.',
        ],
      },
      {
        heading: 'Health and fitness',
        paragraphs: [
          'Please tell us about any medical conditions, dietary requirements, accessibility needs, allergies or physical limitations that could affect your trip. Some routes — particularly high-altitude treks — call for a reasonable level of fitness and a willingness to adapt to changing local conditions.',
        ],
      },
      {
        heading: 'Conduct',
        paragraphs: [
          'We ask every guest to follow their guide\'s instructions, respect local customs and laws, observe conservation rules, and act in a way that does not endanger themselves, other travellers, local communities, staff or property. We may remove anyone whose behaviour is unsafe, unlawful, abusive or disruptive, without refund of unrecoverable costs.',
        ],
      },
      {
        heading: 'Accurate information',
        paragraphs: [
          'Information you give us during enquiry, booking and preparation must be accurate and complete. False, incomplete or misleading information may lead to changed services, extra costs, refused participation, or cancellation without refund of unrecoverable costs.',
        ],
      },
    ],
  },
]

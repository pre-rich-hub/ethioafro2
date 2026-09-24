import { contact } from '@/lib/constants/contact'
import type { LegalSection } from '../types/legal.types'

export const privacySections: LegalSection[] = [
  {
    id: 'what-we-collect',
    title: 'What we collect',
    blocks: [
      {
        heading: 'What you tell us',
        paragraphs: [
          'Everything starts with what you choose to share — through our website forms, email, phone, WhatsApp, the newsletter sign-up, or conversations while we plan your trip. That can include your name, email, phone number and country, along with the details that shape an itinerary: destinations, dates, group size, budget, accommodation preferences, dietary and accessibility needs.',
        ],
      },
      {
        heading: 'Once a trip is confirmed',
        paragraphs: [
          'To actually operate a journey we may need more: passport and flight details, an emergency contact, insurance information, and any special requirements that hotels, airlines, guides or local authorities ask for.',
        ],
      },
      {
        heading: 'From the website itself',
        paragraphs: [
          'Like most sites, ours may record technical information such as your IP address, browser and device type, the pages you visit, how you arrived, and cookie or analytics data.',
        ],
      },
    ],
  },
  {
    id: 'how-we-use-it',
    title: 'How we use it',
    blocks: [
      {
        paragraphs: [
          'We use your information to answer enquiries, design private itineraries, prepare quotes, book and run confirmed travel, keep you informed of anything that affects your trip, maintain our administrative records, improve the website, and keep our services secure.',
          'If you subscribe to our newsletter, we will send occasional travel stories and offers. Every message carries an unsubscribe link, or you can simply ask us to stop.',
        ],
      },
    ],
  },
  {
    id: 'sharing',
    title: 'Who we share it with',
    blocks: [
      {
        paragraphs: [
          'A journey is delivered by many hands, so we share only what each of them reasonably needs: hotels and lodges, domestic airlines, drivers and transport providers, guides, restaurants, activity operators, payment processors, technology providers and professional advisers.',
          'We never sell personal information, and we never pass guest details to unrelated companies for their own marketing.',
        ],
      },
    ],
  },
  {
    id: 'payments',
    title: 'Payments',
    blocks: [
      {
        paragraphs: [
          'Where card or online payment is offered, it is handled by secure third-party payment processors. We do not intentionally store full card numbers on this website.',
        ],
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies & analytics',
    blocks: [
      {
        paragraphs: [
          'The site may use cookies and analytics tools to keep things working, understand how visitors use it, measure performance and improve what we publish. You can manage cookies in your browser settings, though some features may not work properly if they are switched off.',
        ],
      },
    ],
  },
  {
    id: 'security',
    title: 'Security & retention',
    blocks: [
      {
        paragraphs: [
          'We protect personal information with reasonable administrative, technical and organisational safeguards. No website, email system or online service can be guaranteed completely secure, but we take the responsibility seriously.',
          'We keep information only for as long as it is reasonably needed — for enquiries, bookings, accounting, legal obligations, resolving disputes and improving our service. After that, we delete, archive or anonymise it wherever practical.',
        ],
      },
    ],
  },
  {
    id: 'international',
    title: 'International transfers',
    blocks: [
      {
        paragraphs: [
          'Travel is international by nature. Hotels, airlines, local operators, technology providers and our own team work across different countries, so your information may be processed outside your home country. We transfer it only as far as needed to provide the services you asked for and to run our business.',
        ],
      },
    ],
  },
  {
    id: 'your-choices',
    title: 'Your choices',
    blocks: [
      {
        paragraphs: [
          'You can ask to see, correct, update or delete the personal information we hold about you, within the limits of legal, accounting, security and operational requirements. You can opt out of marketing messages at any time.',
        ],
      },
    ],
  },
  {
    id: 'children',
    title: 'Children',
    blocks: [
      {
        paragraphs: [
          'This website is intended for adults planning travel. We do not knowingly collect personal information from children without the involvement of a parent or guardian — family trips are planned with the adults travelling.',
        ],
      },
    ],
  },
  {
    id: 'updates',
    title: 'Changes to this policy',
    blocks: [
      {
        paragraphs: [
          `We may update this policy from time to time. The current version will always be on this page, with the date it last changed. Questions about privacy or requests about your data can be sent to ${contact.email}.`,
        ],
      },
    ],
  },
]

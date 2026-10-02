import type { FaqItem } from '@/lib/seo/faq.types'
import { contact } from '@/lib/constants/contact'
import { company } from '@/lib/seo/entities'

type TFn = (key: string, values?: Record<string, string>) => string

/**
 * Build localised contactFaqs from next-intl translation function.
 * Keep faq-data.ts as the English/JSON-LD source of truth; use these
 * helpers for page rendering in non-English locales.
 */
export function getContactFaqs(t: TFn): FaqItem[] {
  return [
    {
      question: t('faqQ1'),
      answer: t('faqA1', { hours: contact.hours }),
    },
    {
      question: t('faqQ2'),
      answer: t('faqA2'),
    },
    {
      question: t('faqQ3'),
      answer: t('faqA3'),
    },
    {
      question: t('faqQ4'),
      answer: t('faqA4'),
    },
    {
      question: t('faqQ5'),
      answer: t('faqA5', { company: company.name }),
    },
  ]
}

/**
 * Build localised toursFaqs from next-intl translation function.
 */
export function getToursFaqs(t: TFn): FaqItem[] {
  return [
    { question: t('faqQ1'), answer: t('faqA1') },
    { question: t('faqQ2'), answer: t('faqA2') },
    { question: t('faqQ3'), answer: t('faqA3') },
    { question: t('faqQ4'), answer: t('faqA4') },
    { question: t('faqQ5'), answer: t('faqA5') },
    { question: t('faqQ6'), answer: t('faqA6') },
  ]
}

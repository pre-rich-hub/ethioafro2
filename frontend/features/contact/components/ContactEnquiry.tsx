import { getTranslations } from 'next-intl/server'
import { Reveal } from '@/components/common/Reveal'
import { EnquiryForm } from '@/features/enquiries'
import { contact } from '@/lib/constants/contact'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

export async function ContactEnquiry() {
  const t = await getTranslations('Contact')

  return (
    <section className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:py-28">
      <Reveal>
        <p className="eyebrow mb-5 text-accent">
          <span className="rule" />
          {t('enquiryEyebrow')}
        </p>
        <h2 className="max-w-[18ch] text-balance text-3xl leading-[1.08] text-foreground sm:text-4xl lg:text-5xl">
          {t('enquiryTitle')}
        </h2>
        <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground sm:text-lg">
          {t('enquiryBody')}
        </p>

        <dl className="mt-12 space-y-7">
          <Detail icon={Phone} label={t('detailTelephone')}>
            <a
              href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
              className="border-b border-accent/40 pb-0.5 transition-colors hover:border-accent hover:text-primary"
            >
              {contact.phone}
            </a>
          </Detail>
          <Detail icon={MessageCircle} label={t('detailWhatsApp')}>
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-accent/40 pb-0.5 transition-colors hover:border-accent hover:text-primary"
            >
              {contact.whatsapp}
            </a>
          </Detail>
          <Detail icon={Mail} label={t('detailEmail')}>
            <a
              href={`mailto:${contact.email}`}
              className="break-all border-b border-accent/40 pb-0.5 transition-colors hover:border-accent hover:text-primary"
            >
              {contact.email}
            </a>
          </Detail>
          <Detail icon={MapPin} label={t('detailOffice')}>
            {contact.address}
          </Detail>
          <Detail icon={Clock} label={t('detailHours')}>
            {contact.hours}
          </Detail>
        </dl>
      </Reveal>

      <Reveal delay={120}>
        <EnquiryForm />
      </Reveal>
    </section>
  )
}

function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
      <div>
        <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </dt>
        <dd className="mt-1.5 text-pretty leading-relaxed text-foreground">
          {children}
        </dd>
      </div>
    </div>
  )
}

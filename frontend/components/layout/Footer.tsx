import Image from 'next/image'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { contact } from '@/lib/constants/contact'
import { company } from '@/lib/seo/entities'
import { getLocalizedDestinations } from '@/features/destinations/utils/destination.utils'
import { getLocalizedTours } from '@/features/tours/utils/tour-catalog.utils'
import { NewsletterForm } from '@/features/newsletter'

// Add each profile URL to show its button; entries left blank stay hidden
// so the footer never links to a dead "#".
const socials = [
  { name: 'Facebook', href: '' },
  { name: 'Instagram', href: '' },
  { name: 'YouTube', href: '' },
  { name: 'TripAdvisor', href: '' },
].filter((s) => s.href)

export async function Footer() {
  const t = await getTranslations('Footer')
  const locale = await getLocale()
  const destinations = getLocalizedDestinations(locale)
  const tours = getLocalizedTours(locale)

  const columns = [
    {
      title: t('destinations'),
      links: [
        ...destinations
          .slice(0, 5)
          .map((d) => ({ label: d.name, href: `/destinations/${d.slug}` })),
        { label: t('allDestinations'), href: '/destinations', more: true },
      ],
    },
    {
      title: t('tours'),
      links: [
        ...tours
          .slice(0, 4)
          .map((tour) => ({ label: tour.title, href: `/tours/${tour.slug}` })),
        { label: t('customItineraries'), href: '/contact' },
        { label: t('allTours'), href: '/tours', more: true },
      ],
    },
    {
      title: t('explore'),
      links: [
        { label: t('ourStory'), href: '/about' },
        { label: t('travelJournal'), href: '/blog' },
        { label: t('experiences'), href: '/experiences' },
        { label: t('responsibleTourism'), href: '/blog/responsible-travel-in-the-omo' },
        { label: t('whenToVisit'), href: '/blog/when-to-visit-ethiopia' },
        { label: t('contactUs'), href: '/contact' },
      ],
    },
  ]

  return (
    <footer className="bg-charcoal text-background">
      <div className="shell py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-10">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt={t('logoAlt', { name: company.name })}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover border border-accent-light/20"
              />
              <div className="flex flex-col">
                <span className="font-serif text-3xl leading-none">{company.wordmarkPrimary}</span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-accent-light mt-1">
                  {company.wordmarkSecondary}
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-background/60">
              {t('tagline')}
            </p>

            <ul className="mt-7 space-y-2 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                <span>{contact.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                  className="flex items-center gap-3 py-1 transition-colors hover:text-background"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-light" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 py-1 transition-colors hover:text-background"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent-light" />
                  {contact.email}
                </a>
              </li>
            </ul>

            {socials.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2.5">
              {socials.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-background/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-background/70 transition-colors duration-300 hover:border-accent-light hover:text-accent-light"
                >
                  {name}
                </a>
              ))}
            </div>
            )}
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-light sm:text-[11px]">
                {col.title}
              </h3>
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={
                        link.more
                          ? 'group inline-flex items-center gap-1.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-light transition-colors duration-300 hover:text-background'
                          : 'inline-block py-1.5 text-sm text-background/65 transition-colors duration-300 hover:text-background'
                      }
                    >
                      {link.label}
                      {link.more && (
                        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-background/15 pt-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-md">
              <p className="font-serif text-xl text-background sm:text-2xl">
                {t('newsletterTitle')}
              </p>
              <p className="mt-1.5 text-sm text-background/60">
                {t('newsletterBlurb')}
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-background/15 pt-8 text-xs text-background/50 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. {t('rightsReserved')}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <Link href="/privacy" className="py-1 transition-colors hover:text-background/80">
              {t('privacy')}
            </Link>
            <Link href="/terms" className="py-1 transition-colors hover:text-background/80">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

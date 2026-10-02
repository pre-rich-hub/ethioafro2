import { getTranslations } from 'next-intl/server'
import { PageHero } from '@/components/common/PageHero'

export async function DestinationHero() {
  const t = await getTranslations('Destinations')
  const tc = await getTranslations('Crumbs')

  return (
    <PageHero
      eyebrow={t('heroEyebrow')}
      title={t('heroTitle')}
      lede={t('heroLede')}
      image="https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1600/lalibela.png"
      imageAlt="Rock-hewn churches of Lalibela, Ethiopia"
      crumbs={[{ label: tc('home'), href: '/' }, { label: tc('destinations') }]}
      compact
    />
  )
}

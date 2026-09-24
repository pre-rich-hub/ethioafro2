import type { Metadata } from 'next'
import { AdminDestinations } from '@/features/admin/components/destinations/DestinationsClient'

export const metadata: Metadata = {
  title: 'Destinations',
  robots: { index: false, follow: false },
}

export default function AdminDestinationsPage() {
  return <AdminDestinations />
}

import type { Metadata } from 'next'
import { AdminTours } from '@/features/admin/components/tours/ToursClient'

export const metadata: Metadata = {
  title: 'Tours',
  robots: { index: false, follow: false },
}

export default function AdminToursPage() {
  return <AdminTours />
}

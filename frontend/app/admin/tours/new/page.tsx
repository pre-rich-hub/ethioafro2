import type { Metadata } from 'next'
import { AdminTourNew } from '@/features/admin/components/tours/TourNewClient'

export const metadata: Metadata = {
  title: 'New Tour',
  robots: { index: false, follow: false },
}

export default function AdminTourNewPage() {
  return <AdminTourNew />
}

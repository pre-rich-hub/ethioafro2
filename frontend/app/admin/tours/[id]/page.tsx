import type { Metadata } from 'next'
import { AdminTourEdit } from '@/features/admin/components/tours/TourEditClient'

export const metadata: Metadata = {
  title: 'Edit Tour',
  robots: { index: false, follow: false },
}

export default function AdminTourEditPage() {
  return <AdminTourEdit />
}

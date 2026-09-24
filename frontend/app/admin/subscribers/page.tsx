import type { Metadata } from 'next'
import { AdminSubscribers } from '@/features/admin/components/subscribers/SubscribersClient'

export const metadata: Metadata = {
  title: 'Subscribers',
  robots: { index: false, follow: false },
}

export default function AdminSubscribersPage() {
  return <AdminSubscribers />
}

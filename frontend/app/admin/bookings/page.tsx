import type { Metadata } from 'next'
import { AdminBookings } from '@/features/admin/components/bookings/BookingsClient'

export const metadata: Metadata = {
  title: 'Bookings',
  robots: { index: false, follow: false },
}

export default function AdminBookingsPage() {
  return <AdminBookings />
}

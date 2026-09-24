import type { Metadata } from 'next'
import { AdminDashboard } from '@/features/admin/components/dashboard/AdminDashboard'

export const metadata: Metadata = {
  title: 'Dashboard',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPage() {
  return <AdminDashboard />
}

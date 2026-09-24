import type { Metadata } from 'next'
import { AdminLayoverPackages } from '@/features/admin/components/layover-packages/LayoverPackagesClient'

export const metadata: Metadata = {
  title: 'Layover Packages',
  robots: { index: false, follow: false },
}

export default function AdminLayoverPackagesPage() {
  return <AdminLayoverPackages />
}

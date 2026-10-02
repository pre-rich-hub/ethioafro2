import { DocumentShell } from '@/components/layout/DocumentShell'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <DocumentShell lang="en">{children}</DocumentShell>
}

import { endpoints } from '@/lib/api/endpoints'
import type { ContactPayload } from '@/features/enquiries/types/enquiry.types'
import { request } from '@/lib/api/client'

export async function submitContact(payload: ContactPayload): Promise<void> {
  await request<null>(endpoints.contact, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

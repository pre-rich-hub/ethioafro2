'use client'

import { useState } from 'react'
import { adminRequest } from '../api/admin.api'
import type { BlockedDate } from '../types/tour-editor.types'

export function useTourBlockedDates(tourId: number) {
  // Blocked dates (unavailable booking days)
  const [blockedDates, setBlockedDates] = useState<BlockedDate[]>([])
  const [newBlockedDate, setNewBlockedDate] = useState('')
  const [blockedReason, setBlockedReason] = useState('')
  const [blockedSaving, setBlockedSaving] = useState(false)
  const [blockedDeleting, setBlockedDeleting] = useState<number | null>(null)
  const [blockedError, setBlockedError] = useState('')

  async function handleBlockedDateSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!newBlockedDate) return
    setBlockedSaving(true)
    setBlockedError('')
    try {
      await adminRequest(`/api/v1/admin/tours/${tourId}/blocked-dates`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dates: [newBlockedDate],
          reason: blockedReason.trim() || undefined,
        }),
      })
      const updated = await adminRequest<BlockedDate[]>(`/api/v1/admin/tours/${tourId}/blocked-dates`)
      setBlockedDates(updated)
      setNewBlockedDate('')
      setBlockedReason('')
    } catch (submitError) {
      setBlockedError(
        submitError instanceof Error ? submitError.message : 'Blocked date could not be added.',
      )
    } finally {
      setBlockedSaving(false)
    }
  }

  async function handleBlockedDateDelete(blockedDate: BlockedDate) {
    setBlockedDeleting(blockedDate.id)
    setBlockedError('')
    try {
      await adminRequest<null>(`/api/v1/admin/tours/${tourId}/blocked-dates/${blockedDate.id}`, {
        method: 'DELETE',
      })
      setBlockedDates((current) => current.filter((item) => item.id !== blockedDate.id))
    } catch (submitError) {
      setBlockedError(
        submitError instanceof Error ? submitError.message : 'Blocked date could not be removed.',
      )
    } finally {
      setBlockedDeleting(null)
    }
  }

  return {

    blockedDates,

    setBlockedDates,

    newBlockedDate,

    setNewBlockedDate,

    blockedReason,

    setBlockedReason,

    blockedSaving,

    blockedDeleting,

    blockedError,

    handleBlockedDateSubmit,

    handleBlockedDateDelete,

  }
}

'use client'

import { CalendarOff, Loader2, Plus, Trash2 } from 'lucide-react'
import type { BlockedDate } from '../../../types/tour-editor.types'
import { adminPanelClass } from '../../AdminPrimitives'

type Props = {
  blockedDates: BlockedDate[]
  newBlockedDate: string
  setNewBlockedDate: (value: string) => void
  blockedReason: string
  setBlockedReason: (value: string) => void
  blockedSaving: boolean
  blockedDeleting: number | null
  blockedError: string
  handleBlockedDateSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleBlockedDateDelete: (date: BlockedDate) => void
  fieldClass: string
}

export function TourBlockedDates({ blockedDates, newBlockedDate, setNewBlockedDate, blockedReason, setBlockedReason, blockedSaving, blockedDeleting, blockedError, handleBlockedDateSubmit, handleBlockedDateDelete, fieldClass }: Props) {
  return (
    <section className={adminPanelClass}>
      <div className="mb-1 flex items-center gap-2">
        <CalendarOff size={16} className="text-accent" />
        <h2 className="font-serif text-lg text-foreground">Blocked Dates</h2>
      </div>
      <p className="mb-5 text-xs text-muted-foreground">
        Dates when this tour cannot be booked. Shown to travelers on the booking form.
      </p>

      {blockedError && (
        <div role="alert" className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          {blockedError}
        </div>
      )}

      <form onSubmit={handleBlockedDateSubmit} className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-[auto_1fr_auto]">
        <input
          type="date"
          required
          value={newBlockedDate}
          onChange={(e) => setNewBlockedDate(e.target.value)}
          className={`${fieldClass} sm:w-44`}
          aria-label="Blocked date"
        />
        <input
          type="text"
          value={blockedReason}
          onChange={(e) => setBlockedReason(e.target.value)}
          className={fieldClass}
          placeholder="Reason (optional) — e.g. Fully booked"
          aria-label="Reason"
        />
        <button
          type="submit"
          disabled={blockedSaving || !newBlockedDate}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {blockedSaving && <Loader2 size={16} className="animate-spin" />}
          <Plus size={16} />
          Add
        </button>
      </form>

      {blockedDates.length === 0 ? (
        <p className="text-sm text-muted-foreground">No blocked dates. The tour is bookable on any date.</p>
      ) : (
        <ul className="divide-y divide-border rounded-lg border border-border">
          {blockedDates.map((blockedDate) => (
            <li key={blockedDate.id} className="flex items-center justify-between gap-3 px-4 py-2.5">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(`${blockedDate.date}T00:00:00`))}
                </p>
                {blockedDate.reason && (
                  <p className="text-xs text-muted-foreground">{blockedDate.reason}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => handleBlockedDateDelete(blockedDate)}
                disabled={blockedDeleting === blockedDate.id}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-600 disabled:cursor-wait disabled:opacity-50"
                aria-label={`Remove blocked date ${blockedDate.date}`}
              >
                {blockedDeleting === blockedDate.id ? (
                  <Loader2 size={15} className="animate-spin" />
                ) : (
                  <Trash2 size={15} />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

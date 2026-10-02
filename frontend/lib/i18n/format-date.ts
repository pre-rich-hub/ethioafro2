const MONTHS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

/**
 * Parse the English display dates used in catalogue data ("June 18, 2026")
 * into a UTC date. Done by hand (not `Date.parse`) so the result never shifts
 * a day with the server's time zone.
 */
export function parseDisplayDate(displayDate: string): Date | undefined {
  const match = displayDate.trim().match(/^([A-Za-z]+)\.?\s+(\d{1,2}),?\s+(\d{4})$/)
  if (!match) return undefined
  const month = MONTHS.indexOf(match[1].toLowerCase())
  if (month === -1) return undefined
  return new Date(Date.UTC(Number(match[3]), month, Number(match[2])))
}

/** Format a catalogue display date for a locale (`Intl.DateTimeFormat`); falls back to the source string. */
export function formatDisplayDate(displayDate: string, locale: string): string {
  const date = parseDisplayDate(displayDate)
  if (!date) return displayDate
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}

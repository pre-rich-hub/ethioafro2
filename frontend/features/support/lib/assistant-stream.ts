/**
 * Streaming reply state, kept out of the component so it can be tested.
 *
 * The rule that matters: a message id has to be captured when a delta arrives,
 * never read back out of mutable storage inside a state updater. React runs
 * updaters when it flushes, not when they are queued, and the last delta and the
 * done event arrive in the same task. Reading the id at flush time therefore saw
 * an already-cleared ref, every pending update matched nothing, and the reply
 * froze on its first token. A visitor saw "I" where the assistant had written
 * "I'm sorry, I don't have any tour listings in my current catalog."
 *
 * `appendDelta` returns the next active id so the caller can hold it in a ref
 * between deltas, and returns the state update to queue.
 */

export type StreamMessage = {
  id: string
  sender: 'bot' | 'user'
  text: string
  timestamp: Date
}

export type AppendDeltaResult = {
  /** Id to remember until the stream ends, or null when a new message was started. */
  nextActiveId: string
  /** Queue this into setState. */
  update: (previous: StreamMessage[]) => StreamMessage[]
}

export function appendDelta(
  activeId: string | null,
  delta: string,
  makeId: () => string,
  now: () => Date = () => new Date(),
): AppendDeltaResult {
  if (activeId === null) {
    const id = makeId()
    return {
      nextActiveId: id,
      update: (prev) => [
        ...prev,
        { id, sender: 'bot', text: delta, timestamp: now() },
      ],
    }
  }

  // Captured now, on purpose. See the note above.
  const target = activeId
  return {
    nextActiveId: target,
    update: (prev) =>
      prev.map((message) =>
        message.id === target ? { ...message, text: message.text + delta } : message,
      ),
  }
}

/** Applies a queued list of updates the way React would, at flush time. */
export function flushUpdates(previous: StreamMessage[], updates: AppendDeltaResult[]): StreamMessage[] {
  let state = previous
  for (const { update } of updates) state = update(state)
  return state
}

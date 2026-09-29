import { test } from 'node:test'
import assert from 'node:assert/strict'
import { appendDelta, flushUpdates } from '../features/support/lib/assistant-stream.ts'
import type { StreamMessage } from '../features/support/lib/assistant-stream.ts'

const makeId = () => 'bot-1'
const fixedNow = () => new Date(0)

// Reproduces the browser: a batch of deltas queues updates, the ref is cleared
// before React flushes, and only then does React run the updaters.
function stream(deltas: string[], clearBeforeFlush: boolean) {
    let activeId: string | null = null
    const updates = []
    for (const delta of deltas) {
        const result = appendDelta(activeId, delta, makeId, fixedNow)
        activeId = result.nextActiveId
        updates.push(result)
    }
    if (clearBeforeFlush) activeId = null // what finishStream() does in onDone
    return flushUpdates([], updates)
}

test('accumulates every delta into one message', () => {
    const messages = stream(['I', '’m', ' sorry', '.'], false)
    assert.equal(messages.length, 1)
    assert.equal(messages[0].text, 'I’m sorry.')
})

test('survives the ref being cleared before the flush, which was the live bug', () => {
    const deltas = ['I', '’m', ' sorry', ' for', ' that', '.']
    const messages = stream(deltas, true)
    assert.equal(messages.length, 1)
    assert.equal(
        messages[0].text,
        deltas.join(''),
        'deltas queued before onDone must not be dropped when the id is reset',
    )
})

test('a later stream starts a new message instead of extending the previous one', () => {
    const first = stream(['Hello'], false)
    const second = appendDelta(null, 'Again', () => 'bot-2', fixedNow)
    const messages = flushUpdates(first, [second])
    assert.equal(messages.length, 2)
    assert.equal(messages[0].text, 'Hello')
    assert.equal(messages[1].text, 'Again')
})

test('does not disturb user messages or other bot messages', () => {
    const history: StreamMessage[] = [
        { id: 'welcome', sender: 'bot', text: 'Selam!', timestamp: new Date(0) },
        { id: 'u1', sender: 'user', text: 'What tours do you offer?', timestamp: new Date(0) },
    ]
    const start = appendDelta(null, 'I', () => 'bot-9', fixedNow)
    const withFirst = flushUpdates(history, [start])
    const more = appendDelta('bot-9', ' can help', makeId, fixedNow)
    const done = flushUpdates(withFirst, [more])

    assert.equal(done.length, 3)
    assert.equal(done[0].text, 'Selam!')
    assert.equal(done[1].text, 'What tours do you offer?')
    assert.equal(done[2].text, 'I can help')
})

test('a delta for an id that is not in the list changes nothing', () => {
    const history: StreamMessage[] = []
    const result = appendDelta('missing', 'x', makeId, fixedNow)
    assert.deepEqual(flushUpdates(history, [result]), [])
})

test('new bot messages are marked as bot and stamped', () => {
    const [message] = stream(['I'], false)
    assert.equal(message.sender, 'bot')
    assert.ok(message.timestamp instanceof Date)
})

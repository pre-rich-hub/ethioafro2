'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const stops = [
  { src: '/images/lalibela.png', location: 'Lalibela' },
  { src: '/images/hero-simien.png', location: 'Simien Mountains' },
  { src: '/images/danakil.png', location: 'Danakil Depression' },
  { src: '/images/luxury-lodge.png', location: 'Kenya Safari Extension' },
  { src: '/images/omo-valley.png', location: 'Omo Valley' },
  { src: '/images/gondar.png', location: 'Gondar' },
  { src: '/images/bale-gelada.png', location: 'Bale Mountains' },
  { src: '/images/lake-tana.png', location: 'Lake Tana' },
]

// Three copies of the set so there's always more track to scroll into in
// either direction — the effect of an infinite loop without ever actually
// wrapping the DOM around.
const loopStops = [...stops, ...stops, ...stops]

const AUTO_SCROLL_SPEED = 0.4 // pixels per animation frame, ~24px/sec

export function WhereToNext() {
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const dragMoved = useRef(false)
  const dragStartX = useRef(0)
  const dragStartScroll = useRef(0)
  const pointerId = useRef<number | null>(null)
  const normalizeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isPaused = useRef(false)

  // Start the visible viewport inside the middle copy, so there's a full
  // set's worth of track to scroll through before either edge is reached.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.scrollLeft = track.scrollWidth / 3
  }, [])

  // Drift slowly to the right when no one is touching it. Paused on hover
  // or drag, and wraps instantly (same content on either side) so it never
  // visibly reaches an end.
  useEffect(() => {
    let frame: number
    const tick = () => {
      const track = trackRef.current
      if (track && !isPaused.current && !isDragging.current) {
        track.scrollLeft += AUTO_SCROLL_SPEED
        const singleWidth = track.scrollWidth / 3
        if (track.scrollLeft > singleWidth * 1.5) {
          track.scrollLeft -= singleWidth
        }
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  // Once scrolling settles, silently jump back into the middle copy if the
  // viewport has drifted into the first or third copy — same content, so
  // the jump is invisible to the eye.
  const scheduleNormalize = () => {
    if (normalizeTimeout.current) clearTimeout(normalizeTimeout.current)
    normalizeTimeout.current = setTimeout(() => {
      const track = trackRef.current
      if (!track) return
      const singleWidth = track.scrollWidth / 3
      if (track.scrollLeft < singleWidth * 0.5) {
        track.scrollLeft += singleWidth
      } else if (track.scrollLeft > singleWidth * 1.5) {
        track.scrollLeft -= singleWidth
      }
    }, 120)
  }

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })
    scheduleNormalize()
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return
    const track = trackRef.current
    if (!track) return
    isDragging.current = false
    dragMoved.current = false
    dragStartX.current = e.clientX
    dragStartScroll.current = track.scrollLeft
    pointerId.current = e.pointerId
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track || pointerId.current === null) return
    const delta = e.clientX - dragStartX.current
    if (!isDragging.current) {
      if (Math.abs(delta) <= 8) return
      isDragging.current = true
      dragMoved.current = true
      track.setPointerCapture(pointerId.current)
    }
    track.scrollLeft = dragStartScroll.current - delta
  }

  const endDrag = () => {
    isDragging.current = false
    pointerId.current = null
    scheduleNormalize()
  }

  return (
    <section className="relative bg-background py-16 sm:py-20 lg:py-24">
      <h2 className="mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground sm:mb-12">
        Where to Next?
      </h2>

      <div className="group/carousel relative">
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onScroll={scheduleNormalize}
          onMouseEnter={() => {
            isPaused.current = true
          }}
          onMouseLeave={() => {
            isPaused.current = false
          }}
          className="flex cursor-grab gap-3 overflow-x-auto px-3 pb-2 active:cursor-grabbing [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden"
        >
          {loopStops.map((s, i) => (
            <div
              key={`${s.location}-${i}`}
              className="group relative h-[220px] w-[150px] shrink-0 select-none overflow-hidden rounded-sm sm:h-[320px] sm:w-[220px]"
            >
              <Image
                src={s.src}
                alt={s.location}
                fill
                draggable={false}
                sizes="220px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-xs font-medium text-background sm:text-sm">
                {s.location}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollBy(-1)}
          aria-label="Scroll left"
          className="absolute left-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground opacity-0 shadow-lg transition-opacity duration-300 group-hover/carousel:opacity-100 sm:flex"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Scroll right"
          className="absolute right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground opacity-0 shadow-lg transition-opacity duration-300 group-hover/carousel:opacity-100 sm:flex"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}

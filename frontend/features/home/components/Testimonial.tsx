'use client'

import { useRef } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { testimonials } from '@/features/home/data/testimonial.data'

const initialColors = [
  'bg-primary text-primary-foreground',
  'bg-accent text-accent-foreground',
  'bg-secondary text-secondary-foreground',
]

export function Testimonial() {
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const dragMoved = useRef(false)
  const dragStartX = useRef(0)
  const dragStartScroll = useRef(0)
  const pointerId = useRef<number | null>(null)

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' })
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
  }

  return (
    <section className="bg-muted/40 py-24 lg:py-36">
      <div className="shell">
        <SectionHeading
          eyebrow="In Their Words"
          title="What guests actually said afterward"
          align="center"
        />

        <div className="group/carousel relative">
          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            className="flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto pb-2 active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 100}
                className="w-[85%] shrink-0 snap-start sm:w-[380px]"
              >
                <figure className="flex h-full select-none flex-col border border-border bg-card p-7">
                  <div className="flex items-center gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-serif text-sm ${initialColors[i % initialColors.length]}`}
                    >
                      {t.name.charAt(0)}
                    </span>
                    <span className="text-left">
                      <span className="block text-sm font-medium text-foreground">
                        {t.name}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {t.detail}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground opacity-0 shadow-lg transition-opacity duration-300 group-hover/carousel:opacity-100 sm:flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground opacity-0 shadow-lg transition-opacity duration-300 group-hover/carousel:opacity-100 sm:flex"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

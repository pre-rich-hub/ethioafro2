'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'

const shots = [
  {
    src: '/images/lalibela.png',
    location: 'Lalibela',
    description: 'First light reaching the trench walls of Bete Maryam.',
  },
  {
    src: '/images/hero-simien.png',
    location: 'Simien Mountains',
    description: 'A gelada troop working the grass along the escarpment edge.',
  },
  {
    src: '/images/danakil.png',
    location: 'Danakil Depression',
    description: 'Mineral terraces at Dallol, still shifting colour by the hour.',
  },
  {
    src: '/images/omo-valley.png',
    location: 'Omo Valley',
    description: 'Early river mist lifting off the banks of the Omo.',
  },
  {
    src: '/images/festival-timkat.png',
    location: 'Gondar',
    description: 'The Timkat crowd gathered around Fasilides\' flooded bath.',
  },
  {
    src: '/images/lake-tana.png',
    location: 'Lake Tana',
    description: 'A tankwa reed boat crossing toward the island monasteries.',
  },
]

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % shots.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [isPlaying, activeIndex])

  return (
    <section id="journal">
      <div className="relative h-screen w-full overflow-hidden bg-charcoal/10 group/viewport">
        {shots.map((shot, idx) => {
          const isActive = idx === activeIndex
          // Alternate animation direction/style
          const kbClass = idx % 2 === 0 ? 'animate-kb-1' : 'animate-kb-2'
          return (
            <div
              key={shot.src}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
            >
              <Image
                src={shot.src}
                alt={`${shot.location}, Ethiopia`}
                fill
                priority={idx === 0}
                sizes="100vw"
                className={`object-cover ${isActive ? kbClass : 'scale-100'}`}
              />
              {/* Subtle dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-black/30 z-20" />
            </div>
          )
        })}

        {/* Bottom-left metadata overlay */}
        <div className="absolute bottom-6 left-6 z-20 max-w-[70vw] md:max-w-md text-balance">
          <span className="text-[9px] uppercase tracking-[0.2em] text-accent-light font-semibold">
            Captured Moments
          </span>
          <h3 className="text-xl sm:text-2xl lg:text-3xl text-white font-serif mt-1 font-normal tracking-wide">
            {shots[activeIndex].location}
          </h3>
          <p className="text-xs sm:text-sm text-sand/80 mt-1 lines-clamp-2 md:line-clamp-none font-sans leading-relaxed">
            {shots[activeIndex].description}
          </p>
        </div>

        {/* Bottom-center dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex items-center gap-2">
          {shots.map((_, idx) => {
            const isActive = idx === activeIndex
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx)
                  setIsPlaying(true) // reset timer & keep playing on selection
                }}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${isActive ? 'w-8 bg-accent' : 'w-2 bg-white/40 hover:bg-white/80'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            )
          })}
        </div>

        {/* Bottom-right interactive controls overlay */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2.5 opacity-0 group-hover/viewport:opacity-100 md:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2.5 rounded-full bg-charcoal/60 backdrop-blur-md border border-sand/10 hover:border-accent hover:bg-accent hover:text-accent-foreground text-sand transition-all duration-300 cursor-pointer"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev - 1 + shots.length) % shots.length)}
            className="p-2.5 rounded-full bg-charcoal/60 backdrop-blur-md border border-sand/10 hover:border-accent hover:bg-accent hover:text-accent-foreground text-sand transition-all duration-300 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % shots.length)}
            className="p-2.5 rounded-full bg-charcoal/60 backdrop-blur-md border border-sand/10 hover:border-accent hover:bg-accent hover:text-accent-foreground text-sand transition-all duration-300 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic CSS animations styles injected locally */}
        <style>{`
          @keyframes kb-pan-1 {
            0% { transform: scale(1.03) translate(0%, 0%); }
            100% { transform: scale(1.08) translate(-1%, -0.5%); }
          }
          @keyframes kb-pan-2 {
            0% { transform: scale(1.08) translate(0%, 0%); }
            100% { transform: scale(1.03) translate(1%, 0.5%); }
          }
          .animate-kb-1 {
            animation: kb-pan-1 8000ms ease-out forwards;
          }
          .animate-kb-2 {
            animation: kb-pan-2 8000ms ease-out forwards;
          }
        `}</style>
      </div>
    </section>
  )
}

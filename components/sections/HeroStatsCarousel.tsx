'use client'

import Image from 'next/image'

interface Artist {
  id: string
  name: string
  role: string
  image: string
}

const defaultArtists: Artist[] = [
  {
    id: '1',
    name: 'Session Studio',
    role: 'Enregistrement',
    image: '/new_images/happy_existing_session.png',
  },
  {
    id: '2',
    name: 'Passion Vocale',
    role: 'Chant',
    image: '/new_images/lady_signing_passion_orangish.png',
  },
  {
    id: '3',
    name: 'Expression',
    role: 'Performance',
    image: '/new_images/passion_singing_yellow_green.png',
  },
  {
    id: '4',
    name: 'Studio Pro',
    role: 'Production',
    image: '/new_images/recording_session_blue_organgish.png',
  },
  {
    id: '5',
    name: 'Maître Djembé',
    role: 'Djembé',
    image: '/pattern_horizontal_continued_2.png',
  },
]

interface HeroStatsCarouselProps {
  artists?: Artist[]
  className?: string
}

export function HeroStatsCarousel({
  artists = defaultArtists,
  className = '',
}: HeroStatsCarouselProps) {
  // Duplicate items for seamless loop
  const displayItems = [...artists, ...artists]
  const cardWidth = 120
  const gap = 12
  const totalWidth = artists.length * (cardWidth + gap)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated Row */}
      <div
        className="flex gap-3 animate-scroll-hero"
        style={{
          width: 'fit-content',
          ['--scroll-width' as string]: `${totalWidth}px`,
        }}
      >
        {displayItems.map((artist, index) => (
          <div
            key={`${artist.id}-${index}`}
            className="group relative flex-shrink-0 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300"
            style={{ width: cardWidth, height: 150 }}
          >
            {/* Artist Image */}
            <Image
              src={artist.image}
              alt={artist.name}
              fill
              className="object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-white font-semibold text-xs truncate">
                {artist.name}
              </p>
              <p className="text-white/70 text-[10px] truncate">
                {artist.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll-hero {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * var(--scroll-width)));
          }
        }
        .animate-scroll-hero {
          animation: scroll-hero 25s linear infinite;
        }
        .animate-scroll-hero:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

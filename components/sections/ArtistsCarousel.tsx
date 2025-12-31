'use client'

import Image from 'next/image'

interface Artist {
  id: string
  name: string
  role: string
  image: string
}

interface ArtistsCarouselProps {
  /** Artists to display */
  artists?: Artist[]
  /** Callback when an artist card is clicked */
  onArtistClick?: (artist: Artist) => void
  /** Card width in pixels (default: 160) */
  cardWidth?: number
  /** Card height in pixels (default: 200) */
  cardHeight?: number
  /** Animation duration in seconds (default: 30) */
  animationDuration?: number
  /** Title for the section */
  title?: string
}

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


export function ArtistsCarousel({
  artists = defaultArtists,
  onArtistClick,
  cardWidth = 160,
  cardHeight = 200,
  animationDuration = 30,
  title = 'Artistes en Résidence',
}: ArtistsCarouselProps) {
  // Duplicate items for seamless loop
  const displayItems = [...artists, ...artists]
  const gap = 16
  const totalWidth = artists.length * (cardWidth + gap)

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-earth-dark via-neutral-900 to-primary-900">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("/pattern_horizontal.png")`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 via-transparent to-accent-gold/20" />

      <div className="relative">
        {/* Section Header */}
        <div className="section-container text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
            Nos Talents
          </span>
          <h2 className="text-white mb-4">
            {title.split(' ')[0]} <span className="text-accent-gold">{title.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden py-4">
          {/* Animated Row */}
          <div
            className="flex gap-4 px-4 animate-scroll"
            style={{
              width: 'fit-content',
              ['--scroll-width' as string]: `${totalWidth}px`,
              ['--animation-duration' as string]: `${animationDuration}s`,
            }}
          >
            {displayItems.map((artist, index) => (
              <button
                key={`${artist.id}-${index}`}
                onClick={() => onArtistClick?.(artist)}
                className="group relative flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-800 shadow-xl hover:scale-105 transition-transform duration-300"
                style={{ width: cardWidth, height: cardHeight }}
              >
                {/* Artist Image */}
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm truncate">
                    {artist.name}
                  </p>
                  <p className="text-white/70 text-xs truncate">
                    {artist.role}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * var(--scroll-width)));
          }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration) linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

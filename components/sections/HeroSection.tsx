'use client'

import { useEffect, useState } from 'react'
import { Play, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui'
import { HeroStatsCarousel } from './HeroStatsCarousel'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Bill_hero_promo_1.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

        {/* Real African pattern overlay */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url("/pattern_horizontal_continued_2.png")`,
            backgroundSize: '300px',
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Floating music notes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted && (
            <>
              <div className="absolute top-1/4 left-1/4 text-primary-500/20 text-8xl animate-float">♪</div>
              <div className="absolute top-1/3 right-1/4 text-accent-gold/20 text-6xl animate-float animation-delay-200">♫</div>
              <div className="absolute bottom-1/3 left-1/3 text-white/10 text-7xl animate-float animation-delay-400">♬</div>
              <div className="absolute top-2/3 right-1/3 text-primary-500/15 text-5xl animate-float animation-delay-600">♩</div>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container pt-32 pb-20">
        <div className="max-w-4xl px-3 max-w-[90vw]">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              En collaboration: Tamtando • Burkina Faso
            </span>
          </div>

          {/* Main Heading - Google Flow Style */}
          <div
            className={`text-white mb-6 transition-all duration-700 delay-100 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="hero-title-flow text-accent-gold">
              ASSOURA
            </h1>
            <h2 className="hero-title-flow text-white mt-1">
              Académie des Métiers
            </h2>
            <h2 className="hero-title-flow text-primary-400">
              de la Musique
            </h2>
          </div>

          {/* Subtitle */}
          <p 
            className={`text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Préserver et valoriser le patrimoine musical burkinabè tout en formant 
            la nouvelle génération de professionnels de l&apos;industrie musicale.
            <span className="block mt-2 text-accent-gold/90 italic">
              &quot;Assoura&quot; - Boucher les trous en langue Kassena
            </span>
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-row gap-3 sm:gap-4 mb-16 transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button href="/programs" variant="primary" size="lg">
              <span className="lg:hidden">Nos formations</span>
              <span className="hidden lg:inline">Découvrir nos formations</span>
            </Button>
            <Button variant="secondary" size="lg" icon={<Play className="w-5 h-5" />}>
              Voir la vidéo
            </Button>
          </div>

          {/* Artists Carousel */}
          <div
            className={`transition-all duration-700 delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-white/60 text-sm mb-3">Artistes en Résidence</p>
            <HeroStatsCarousel />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>

      {/* Decorative side element with pattern */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3">
        <div className="relative w-full h-full">
          {/* Pattern decoration */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              // backgroundImage: `url("/pattern_vertical.png")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
    </section>
  )
}
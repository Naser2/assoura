'use client'

import { useEffect, useState, useRef } from 'react'

const stats = [
  { value: 84, suffix: 'M FCFA', label: 'Budget du projet', description: 'Infrastructure et équipements' },
  { value: 5, suffix: '+', label: 'Bâtiments prévus', description: 'Campus complet' },
  { value: 6, suffix: '', label: 'Programmes de formation', description: 'Pour tous les profils' },
  { value: 2, suffix: ' ans', label: 'Durée du projet', description: 'Phase de construction' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider">
      {count}{suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth-dark via-neutral-900 to-primary-900">
        {/* Real African pattern */}
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
      </div>

      <div className="relative section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
            Le Projet en Chiffres
          </span>
          <h2 className="text-white mb-4">
            Un Projet <span className="text-accent-gold">Ambitieux</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            L&apos;Académie Assoura représente un investissement majeur pour 
            l&apos;avenir de la musique burkinabè et africaine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-accent-gold mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h4 className="text-white font-semibold text-lg mb-1">
                {stat.label}
              </h4>
              <p className="text-white/50 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Infrastructure Preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: 'Résidence', price: '39.1M FCFA' },
            { name: 'Bâtiment Admin.', price: '16.6M FCFA' },
            { name: 'Magasin', price: '8.2M FCFA' },
            { name: 'Salle de répétition', price: '14.3M FCFA' },
            { name: 'Cafétéria', price: '5.8M FCFA' },
          ].map((item) => (
            <div
              key={item.name}
              className="p-6 rounded-xl bg-white/5 border border-white/10 text-center hover:border-accent-gold/50 transition-colors"
            >
              <h4 className="text-white font-semibold text-lg mb-2">{item.name}</h4>
              <p className="text-accent-gold text-base font-medium">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
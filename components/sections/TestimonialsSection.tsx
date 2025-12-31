'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Amadou Traoré',
    role: 'Musicien & Arrangeur',
    content: 'L\'Académie Assoura représente une opportunité unique pour les jeunes talents burkinabè. Enfin une structure qui comprend les besoins réels de notre industrie musicale.',
    image: '/portraits/amadou_traore.jpeg',
  },
  {
    id: 2,
    name: 'Fatou Diallo',
    role: 'Chanteuse',
    content: 'La vision de Bil Aka Kora pour préserver notre patrimoine musical tout en nous préparant aux défis contemporains est exactement ce dont notre pays a besoin.',
    image: '/new_images/lady_signing_passion_orangish.png',
  },
  {
    id: 3,
    name: 'Moussa Konaté',
    role: 'Formateur Studio',
    content: 'Collaborer avec Assoura est une expérience enrichissante. Le partage culturel entre l\'Italie et le Burkina Faso à travers la musique crée des ponts extraordinaires.',
    image: '/new_images/happy_existing_session.png',
  },
  {
    id: 4,
    name: 'Aminata Sawadogo',
    role: 'Artiste Vocale',
    content: 'Travailler avec les enfants et les personnes en situation de handicap à travers la musique est une mission qui nous tient à cœur. Assoura incarne ces valeurs d\'inclusion.',
    image: '/new_images/passion_singing_yellow_green.png',
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-gradient-sand overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="mb-4">
            Ce qu&apos;ils disent de{' '}
            <span className="text-primary-500">Nous</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Découvrez les retours de nos partenaires, artistes et formateurs 
            qui partagent notre vision pour la musique africaine.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-soft p-8 md:p-12">
              {/* Quote icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 bg-primary-500 rounded-2xl flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              <div className="pt-4">
                <p className="text-neutral-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                  &quot;{testimonials[currentIndex].content}&quot;
                </p>
                
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary-500 text-base">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary-500 w-8'
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:border-primary-500 hover:text-primary-500 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
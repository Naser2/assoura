'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react'

const upcomingEvents = [
  {
    id: 'seminaire-tamtando-2026',
    title: 'Séminaires de Formation',
    subtitle: 'En collaboration avec Tamtando',
    date: '02 Janvier 2026',
    location: 'Académie Assoura, Ouagadougou',
    price: '15 000 FCFA',
    image: '/PHOTO-2025-12-30-07-04-08.jpg',
    workshops: [
      {
        name: 'Les Congas',
        instructor: 'Marco Giovinazzo',
        time: '10H GMT',
        description: 'Les entraînements et rythmes principaux',
      },
      {
        name: 'Le chœur d\'enfants',
        instructor: 'Luigina Stevenin',
        time: '14H GMT',
        description: 'Répertoires et techniques d\'apprentissage',
      },
    ],
    featured: true,
  },
  {
    id: 'masterclass-percussion',
    title: 'Masterclass Percussion Traditionnelle',
    subtitle: 'Rythmes Kassena',
    date: '15 Janvier 2026',
    location: 'Académie Assoura',
    price: '10 000 FCFA',
    image: '/djembe_percusion.png',
    workshops: [],
    featured: false,
  },
  {
    id: 'camp-vacances',
    title: 'Camp Vacances Musical',
    subtitle: 'Pour enfants et adolescents',
    date: 'Février 2026',
    location: 'Académie Assoura',
    price: 'Sur inscription',
    image: '/kid_singing_red_tone.png',
    workshops: [],
    featured: false,
  },
]

export function EventsPreview() {
  const featuredEvent = upcomingEvents.find(e => e.featured)
  const otherEvents = upcomingEvents.filter(e => !e.featured)

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-orange/10 text-accent-orange text-sm font-medium mb-4">
              Événements à venir
            </span>
            <h2 className="mb-4">
              Rejoignez nos{' '}
              <span className="text-accent-orange">Prochains Événements</span>
            </h2>
            <p className="text-neutral-600 text-lg">
              Masterclasses, séminaires, showcases et concerts pour permettre 
              aux artistes de se produire et de tester leurs créations en public.
            </p>
          </div>
          <Link 
            href="/events" 
            className="btn-secondary self-start lg:self-auto border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
          >
            Tous les événements
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Featured Event */}
        {featuredEvent && (
          <div className="mb-12">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-accent-orange">
              {/* Real African pattern */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `url("/pattern_horizontal_continued_2.png")`,
                  backgroundSize: '200px',
                  backgroundRepeat: 'repeat',
                }}
              />
              
              <div className="relative grid lg:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Content */}
                <div className="text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      Événement Vedette
                    </span>
                    <span className="px-3 py-1 bg-accent-gold text-earth-dark rounded-full text-sm font-bold">
                      {featuredEvent.price}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-heading mb-2">
                    {featuredEvent.title}
                  </h3>
                  <p className="text-white/80 text-xl mb-6">
                    {featuredEvent.subtitle}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-white/90">
                      <Calendar className="w-5 h-5 text-accent-gold" />
                      {featuredEvent.date}
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <MapPin className="w-5 h-5 text-accent-gold" />
                      {featuredEvent.location}
                    </div>
                  </div>
                  
                  {/* Workshops */}
                  <div className="space-y-4 mb-8">
                    {featuredEvent.workshops.map((workshop) => (
                      <div
                        key={workshop.name}
                        className="p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="font-semibold text-lg">{workshop.name}</h4>
                            <p className="text-white/70 text-sm">
                              Avec <span className="text-accent-gold font-medium">{workshop.instructor}</span>
                            </p>
                            <p className="text-white/60 text-sm mt-1">
                              {workshop.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm">
                            <Clock className="w-4 h-4" />
                            {workshop.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="btn bg-white text-primary-500 hover:bg-white/90">
                      S&apos;inscrire maintenant
                    </Link>
                    <a href="tel:+22676394747" className="btn bg-white/10 border border-white/30 text-white hover:bg-white/20">
                      +226 76 39 47 47
                    </a>
                  </div>
                </div>
                
                {/* Visual - Event Flyer */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={featuredEvent.image}
                        alt={featuredEvent.title}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherEvents.map((event) => (
            <div key={event.id} className="card card-hover">
              {/* Event Image */}
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-primary-500" />
                  <span className="text-sm text-neutral-600">{event.date}</span>
                </div>

                <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                <p className="text-neutral-500 text-sm mb-4">{event.subtitle}</p>

                <div className="flex items-center justify-between">
                  <span className="text-primary-500 font-semibold">{event.price}</span>
                  <Link
                    href={`/events#${event.id}`}
                    className="text-sm text-neutral-500 hover:text-primary-500 transition-colors"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
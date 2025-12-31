import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Événements',
  description: 'Découvrez les événements, séminaires et masterclasses de l\'Académie Assoura des Métiers de la Musique.',
}

const events = [
  {
    id: 'seminaire-tamtando-2026',
    title: 'Séminaires de Formation',
    subtitle: 'En collaboration avec Tamtando',
    date: '02 Janvier 2026',
    time: '10H00 - 18H00',
    location: 'Académie Assoura, Ouagadougou',
    price: '15 000 FCFA',
    description: 'Deux ateliers exceptionnels animés par les formateurs de Tamtando : Les Congas avec Marco Giovinazzo et Le chœur d\'enfants avec Luigina Stevenin.',
    featured: true,
    workshops: [
      { name: 'Les Congas', instructor: 'Marco Giovinazzo', time: '10H GMT' },
      { name: 'Le chœur d\'enfants', instructor: 'Luigina Stevenin', time: '14H GMT' },
    ],
  },
  {
    id: 'masterclass-percussion',
    title: 'Masterclass Percussion Traditionnelle',
    subtitle: 'Rythmes Kassena',
    date: '15 Janvier 2026',
    time: '14H00 - 17H00',
    location: 'Académie Assoura',
    price: '10 000 FCFA',
    description: 'Explorez les rythmes traditionnels Kassena avec des maîtres percussionnistes locaux.',
    featured: false,
    image: '/new_images/passion_singing_yellow_green.png',
  },
  {
    id: 'camp-vacances',
    title: 'Camp Vacances Musical',
    subtitle: 'Pour enfants et adolescents',
    date: 'Février 2026',
    time: 'Programme complet',
    location: 'Académie Assoura',
    price: 'Sur inscription',
    description: 'Activités ludiques et immersives pour les tout-petits, enfants et adolescents pendant les vacances scolaires.',
    featured: false,
    image: '/KidLooking_djemebe_smile_red_tone_and_projectnamde.png',
  },
  {
    id: 'concert-showcase',
    title: 'Showcase des Étudiants',
    subtitle: 'Concert de fin de session',
    date: 'Mars 2026',
    time: '19H00',
    location: 'Salle de spectacle, Ouagadougou',
    price: 'Entrée libre',
    description: 'Les étudiants de l\'Académie présentent leurs créations et démontrent leurs acquis sur scène.',
    featured: false,
    image: '/new_images/lady_signing_passion_orangish.png',
  },
]

export default function EventsPage() {
  const featuredEvent = events.find(e => e.featured)
  const otherEvents = events.filter(e => !e.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-earth-dark via-neutral-900 to-primary-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative section-container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              Événements
            </span>
            <h1 className="text-white mb-6">
              Nos Prochains{' '}
              <span className="text-accent-gold">Événements</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              Masterclasses, séminaires, showcases et concerts pour permettre
              aux artistes de se produire et de tester leurs créations en public.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-accent-orange">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                    Événement Vedette
                  </span>
                  <span className="px-3 py-1 bg-accent-gold text-earth-dark rounded-full text-sm font-bold">
                    {featuredEvent.price}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-heading text-white mb-2">
                  {featuredEvent.title}
                </h2>
                <p className="text-white/80 text-xl mb-6">{featuredEvent.subtitle}</p>

                <div className="flex flex-wrap gap-6 mb-8 text-white/90">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent-gold" />
                    {featuredEvent.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent-gold" />
                    {featuredEvent.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent-gold" />
                    {featuredEvent.location}
                  </div>
                </div>

                <p className="text-white/80 mb-8 max-w-2xl">{featuredEvent.description}</p>

                {featuredEvent.workshops && (
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {featuredEvent.workshops.map((workshop) => (
                      <div key={workshop.name} className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                        <h4 className="font-semibold text-white text-lg">{workshop.name}</h4>
                        <p className="text-white/70 text-sm">
                          Avec <span className="text-accent-gold font-medium">{workshop.instructor}</span>
                        </p>
                        <p className="text-white/60 text-sm mt-1">{workshop.time}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn bg-white text-primary-500 hover:bg-white/90">
                    S&apos;inscrire maintenant
                  </Link>
                  <a href="tel:+22676394747" className="btn bg-white/10 border border-white/30 text-white hover:bg-white/20">
                    +226 76 39 47 47
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Events */}
      <section className="section-padding bg-gradient-sand">
        <div className="section-container">
          <h2 className="text-2xl font-semibold mb-8">Autres Événements</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherEvents.map((event) => (
              <div key={event.id} className="card card-hover">
                <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 relative overflow-hidden">
                  {event.image ? (
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Calendar className="w-12 h-12 text-neutral-400" />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-primary-500" />
                    <span className="text-sm text-neutral-600">{event.date}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <p className="text-neutral-500 text-sm mb-4">{event.subtitle}</p>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{event.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <span className="text-primary-500 font-semibold">{event.price}</span>
                    <Link
                      href="/contact"
                      className="text-sm text-neutral-500 hover:text-primary-500 transition-colors inline-flex items-center gap-1"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500">
        <div className="section-container text-center">
          <h2 className="text-white mb-6">Vous souhaitez organiser un événement ?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            L&apos;Académie Assoura met ses espaces à disposition pour vos événements
            musicaux, conférences et ateliers.
          </p>
          <Link href="/contact" className="btn btn-lg bg-white text-primary-500 hover:bg-white/90">
            Contactez-nous
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}

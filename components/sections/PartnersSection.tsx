'use client'

import Image from 'next/image'
import { Users } from 'lucide-react'

const partners = [
  {
    name: 'Tamtando',
    type: 'Partenaire Principal',
    description: 'Groupe italien spécialisé dans les programmes musicaux inclusifs',
    logo: '/portraits/logo/logo_tamtando_234x80_marrone.png',
    isImage: true,
  },
  {
    name: 'Bil Aka Kora',
    type: 'Fondateur',
    description: 'Artiste burkinabè, créateur de la Djongo music',
    logo: '/portraits/bill_portrait.jpg',
    isAvatar: true,
  },
]

const supporters = [
  'Ministère de la Culture - Burkina Faso',
  'Financement Participatif',
  'Partenaires Internationaux',
  'Communauté Kassena',
]

export function PartnersSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-gold/10 text-accent-gold text-sm font-medium mb-4">
            Nos Partenaires
          </span>
          <h2 className="mb-4">
            Une Collaboration{' '}
            <span className="text-accent-gold">Internationale</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            L&apos;Académie Assoura naît de la collaboration entre artistes burkinabè 
            et partenaires internationaux, unis par la passion de la musique.
          </p>
        </div>

        {/* Main Partners */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="relative group"
            >
              <div className="card card-hover p-8 h-full">
                <div className="flex items-start gap-6">
                  {partner.isAvatar ? (
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-primary-100">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : partner.isImage ? (
                    <div className="w-24 h-20 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-2">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={234}
                        height={80}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-sand flex items-center justify-center text-4xl flex-shrink-0">
                      {partner.logo}
                    </div>
                  )}
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-xs rounded-full mb-3">
                      {partner.type}
                    </span>
                    <h3 className="text-2xl font-semibold mb-2">{partner.name}</h3>
                    <p className="text-neutral-600">{partner.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporters */}
        <div className="relative rounded-3xl bg-gradient-to-br from-earth-light to-accent-sand p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
              <Users className="w-6 h-6 text-primary-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Soutiens & Financements</h3>
              <p className="text-neutral-600 text-sm">Recherche de partenaires</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supporters.map((supporter) => (
              <div
                key={supporter}
                className="px-6 py-4 bg-white rounded-xl text-center hover:shadow-soft transition-shadow"
              >
                <p className="text-neutral-700 font-medium text-sm">{supporter}</p>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-center text-neutral-600">
            Vous souhaitez soutenir le projet ?{' '}
            <a href="/contact" className="text-primary-500 font-medium hover:underline">
              Contactez-nous
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
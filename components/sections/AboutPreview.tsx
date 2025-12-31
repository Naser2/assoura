'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Target, Heart, Globe, Sparkles } from 'lucide-react'
import { CategoryPill, CornerPatterns } from '@/components/ui'

const features = [
  {
    icon: Target,
    title: 'Notre Mission',
    description: 'Structurer et professionnaliser le secteur musical au Burkina Faso en offrant des formations de qualité.',
    color: 'bg-primary-500',
  },
  {
    icon: Heart,
    title: 'Inclusion',
    description: 'Permettre aux amateurs, aux tout-petits et aux personnes en situation de handicap de s\'épanouir.',
    color: 'bg-accent-orange',
  },
  {
    icon: Globe,
    title: 'Patrimoine',
    description: 'Préserver et valoriser les musiques traditionnelles burkinabè tout en les adaptant aux réalités contemporaines.',
    color: 'bg-accent-gold',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Fusionner tradition et modernité à travers la Djongo music, une identité forte sur la scène internationale.',
    color: 'bg-earth-brown',
  },
]

export function AboutPreview() {
  return (
    <section className="relative section-padding bg-white overflow-hidden">
      {/* 4 Corner Patterns - Flyer Style */}
      <CornerPatterns
        patternUrl="/pattern_horizontal_continued_2.png"
        opacity={100}
        size="lg"
        fillColor="#C41E3A"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <CategoryPill size="lg" className="mb-4">
            À Propos de l&apos;Académie
          </CategoryPill>
          <h2 className="mb-6">
            Une Vision pour la{' '}
            <span className="text-gradient">Musique Africaine</span>
          </h2>
          <p className="text-neutral-600 text-lg">
            Fondée par l&apos;artiste <strong>Bil Aka Kora</strong> en collaboration avec le groupe italien{' '}
            <strong>Tamtando</strong>, l&apos;Académie Assoura des Métiers de la Musique 
            est née d&apos;une volonté de combler le manque de structures de formation 
            professionnelle pour les artistes burkinabè.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group card card-hover p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bil Aka Kora Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              {/* Real Bil Aka Kora image */}
              <Image
                src="/Bil-Aka-Kora-pc75fl7ngqq3uh4mgyamj69rzqwggfxvmisupapcp4.jpeg"
                alt="Bil Aka Kora - Fondateur de l'Académie Assoura"
                fill
                className="object-cover"
              />

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-gold rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary-500 rounded-2xl" />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-8 -right-4 lg:right-8 bg-white rounded-2xl shadow-xl p-4 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🎸</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Djongo Music</p>
                  <p className="text-neutral-500 text-xs">Tradition & Modernité</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="decorative-line mb-6" />
            <h3 className="text-3xl md:text-4xl font-heading mb-6">
              Bil Aka Kora
              <span className="block text-primary-500 text-xl font-normal mt-2">
                Fondateur & Visionnaire
              </span>
            </h3>
            <div className="space-y-4 text-neutral-600">
              <p>
                À travers la <strong>Djongo music</strong>, Bil Aka Kora a su conjuguer 
                traditions et modernité pour donner une identité forte à la musique 
                burkinabè sur la scène internationale.
              </p>
              <p>
                Son expertise dans la fusion des rythmes traditionnels kassena avec 
                des influences modernes servira de référence pour inculquer aux 
                apprenants l&apos;importance de l&apos;innovation musicale dans le respect des traditions.
              </p>
              <p>
                L&apos;Académie Assoura incarnera les valeurs de <em>force</em>, 
                d&apos;<em>endurance</em> et de <em>communion</em> que véhicule la danse Djongo.
              </p>
            </div>
            
            <Link
              href="/about"
              className="inline-flex items-center justify-center lg:justify-start gap-2 mt-8 text-primary-500 font-medium hover:text-primary-600 group w-full lg:w-auto"
            >
              En savoir plus sur notre histoire
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
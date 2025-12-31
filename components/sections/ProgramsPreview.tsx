'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Mic2, Headphones, Music, Users, Settings, FileText } from 'lucide-react'

const programs = [
  {
    id: 'production',
    icon: Headphones,
    title: 'Production Musicale',
    description: 'Techniques d\'enregistrement, mixage et mastering pour créer des productions professionnelles.',
    features: ['Enregistrement', 'Mixage', 'Mastering', 'Sound Design'],
    color: 'from-primary-500 to-primary-600',
    delay: 0,
  },
  {
    id: 'direction',
    icon: Music,
    title: 'Direction Musicale',
    description: 'Apprentissage des techniques de direction et de coordination musicale pour orchestres et ensembles.',
    features: ['Direction d\'orchestre', 'Coordination', 'Répertoire', 'Arrangement'],
    color: 'from-accent-orange to-primary-500',
    delay: 100,
  },
  {
    id: 'live',
    icon: Settings,
    title: 'Métiers du Live',
    description: 'Formation complète aux métiers techniques du spectacle vivant.',
    features: ['Ingénierie son', 'Éclairage', 'Scénographie', 'Événementiel'],
    color: 'from-accent-gold to-accent-orange',
    delay: 200,
  },
  {
    id: 'management',
    icon: Users,
    title: 'Management Musical',
    description: 'Stratégies de promotion, distribution digitale et gestion de carrière artistique.',
    features: ['Promotion', 'Distribution', 'Gestion label', 'Marketing'],
    color: 'from-earth-brown to-earth-dark',
    delay: 300,
  },
  {
    id: 'droits',
    icon: FileText,
    title: 'Droits & Contrats',
    description: 'Propriété intellectuelle, droit d\'auteur et aspects juridiques de l\'industrie musicale.',
    features: ['Droit d\'auteur', 'Contrats', 'Édition', 'SACEM'],
    color: 'from-neutral-700 to-neutral-900',
    delay: 400,
  },
  {
    id: 'chant',
    icon: Mic2,
    title: 'Chant & Instruments',
    description: 'Formation vocale et instrumentale pour tous les niveaux, des débutants aux confirmés.',
    features: ['Technique vocale', 'Instruments trad.', 'Percussions', 'Congas'],
    color: 'from-primary-600 to-primary-800',
    delay: 500,
  },
]

export function ProgramsPreview() {
  return (
    <section className="section-padding bg-gradient-sand">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500 text-white text-sm font-medium mb-4">
              Nos Formations
            </span>
            <h2 className="mb-4">
              Des Programmes Adaptés à{' '}
              <span className="text-primary-500">Chaque Profil</span>
            </h2>
            <p className="text-neutral-600 text-lg">
              Que vous soyez artiste débutant, technicien confirmé ou entrepreneur 
              de l&apos;industrie musicale, nous avons un programme fait pour vous.
            </p>
          </div>
          <Link 
            href="/programs" 
            className="btn-secondary self-start lg:self-auto"
          >
            Voir tous les programmes
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Link
              key={program.id}
              href={`/programs#${program.id}`}
              className="group card card-hover overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${program.color}`} />
              
              <div className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-500 transition-colors">
                  {program.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                  {program.description}
                </p>
                
                {/* Features Tags */}
                <div className="flex flex-wrap gap-2">
                  {program.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Arrow */}
                <div className="mt-5 flex items-center text-primary-500 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Inclusion Banner */}
        <div className="mt-12 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-500 via-primary-600 to-accent-orange p-8 md:p-12">
          {/* Real African pattern */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url("/pattern_horizontal_continued.png")`,
              backgroundSize: '250px',
              backgroundRepeat: 'repeat',
            }}
          />
          
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-sm mb-4">
                Programme Inclusif
              </span>
              <h3 className="text-2xl md:text-3xl font-heading text-white mb-4">
                La Musique pour Tous
              </h3>
              <p className="text-white/90 mb-6">
                L&apos;Académie Assoura propose des programmes adaptés aux personnes 
                en situation de handicap, notamment celles souffrant de déficience 
                intellectuelle, grâce à l&apos;expérience du groupe Tamtando.
              </p>
              <Link 
                href="/programs#inclusion" 
                className="btn bg-white text-primary-500 hover:bg-white/90"
              >
                Découvrir nos programmes inclusifs
              </Link>
            </div>
            
            <div className="hidden md:flex justify-end">
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/lady_singing_indigo_red_tone.png.png"
                  alt="Chanteuse - Programme inclusif"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
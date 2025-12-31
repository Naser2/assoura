import { Metadata } from 'next'
import Link from 'next/link'
import { Headphones, Music, Settings, Users, FileText, Mic2, Heart, Baby, ArrowRight, Check, Clock, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Formations',
  description: 'Découvrez nos programmes de formation professionnelle aux métiers de la musique: production, direction musicale, métiers du live, management et plus.',
}

const professionalPrograms = [
  {
    id: 'production',
    icon: Headphones,
    title: 'Production Musicale',
    description: 'Maîtrisez les techniques professionnelles d\'enregistrement, de mixage et de mastering pour créer des productions de qualité internationale.',
    features: [
      'Techniques d\'enregistrement studio',
      'Mixage audio professionnel',
      'Mastering et finalisation',
      'Sound design et création sonore',
    ],
    duration: '6 mois',
    level: 'Débutant à Avancé',
    color: 'from-primary-500 to-primary-600',
  },
  {
    id: 'direction',
    icon: Music,
    title: 'Direction Musicale',
    description: 'Apprenez les techniques de direction et de coordination musicale pour diriger orchestres, ensembles et chorales.',
    features: [
      'Techniques de direction d\'orchestre',
      'Coordination musicale',
      'Construction du répertoire',
      'Arrangement et orchestration',
    ],
    duration: '8 mois',
    level: 'Intermédiaire à Avancé',
    color: 'from-accent-orange to-primary-500',
  },
  {
    id: 'live',
    icon: Settings,
    title: 'Métiers du Live',
    description: 'Formation complète aux métiers techniques du spectacle vivant: son, lumière et gestion événementielle.',
    features: [
      'Ingénierie du son live',
      'Conception d\'éclairage',
      'Scénographie',
      'Gestion d\'événements',
    ],
    duration: '6 mois',
    level: 'Tous niveaux',
    color: 'from-accent-gold to-accent-orange',
  },
  {
    id: 'management',
    icon: Users,
    title: 'Management & Entrepreneuriat',
    description: 'Développez les compétences nécessaires pour gérer des carrières artistiques et entreprendre dans l\'industrie musicale.',
    features: [
      'Stratégies de promotion',
      'Distribution digitale',
      'Gestion de label',
      'Marketing musical',
    ],
    duration: '4 mois',
    level: 'Tous niveaux',
    color: 'from-earth-brown to-earth-dark',
  },
  {
    id: 'droits',
    icon: FileText,
    title: 'Droits & Contrats',
    description: 'Comprenez les aspects juridiques de l\'industrie musicale pour protéger vos créations et négocier vos contrats.',
    features: [
      'Propriété intellectuelle',
      'Droit d\'auteur',
      'Contrats de production',
      'Édition musicale',
    ],
    duration: '3 mois',
    level: 'Tous niveaux',
    color: 'from-neutral-700 to-neutral-900',
  },
  {
    id: 'instruments',
    icon: Mic2,
    title: 'Chant & Instruments',
    description: 'Formation vocale et instrumentale couvrant les instruments traditionnels et modernes.',
    features: [
      'Technique vocale',
      'Instruments traditionnels',
      'Percussions africaines',
      'Congas et djembé',
    ],
    duration: 'Variable',
    level: 'Débutant à Avancé',
    color: 'from-primary-600 to-primary-800',
  },
]

const inclusivePrograms = [
  {
    id: 'amateur',
    icon: Music,
    title: 'Programme Amateurs',
    description: 'Pour tous ceux qui souhaitent développer leurs compétences musicales pour le plaisir ou dans une perspective semi-professionnelle.',
    features: [
      'Ateliers découverte',
      'Cours de groupe',
      'Progression personnalisée',
      'Pas de prérequis',
    ],
  },
  {
    id: 'enfants',
    icon: Baby,
    title: 'Éveil Musical Enfants',
    description: 'Programmes adaptés aux tout-petits pour développer leur sensibilité musicale dès le plus jeune âge.',
    features: [
      'Activités ludiques',
      'Découverte des instruments',
      'Chants et comptines',
      'Développement moteur',
    ],
  },
  {
    id: 'inclusion',
    icon: Heart,
    title: 'Programme Inclusif',
    description: 'Programmes spécialement conçus pour les personnes en situation de handicap, développés avec l\'expertise de Tamtando.',
    features: [
      'Approches pédagogiques adaptées',
      'Développement personnel',
      'Expression artistique',
      'Renforcement de la confiance',
    ],
  },
]

export default function ProgramsPage() {
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
              Nos Formations
            </span>
            <h1 className="text-white mb-6">
              Des Programmes pour{' '}
              <span className="text-accent-gold">Chaque Profil</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              Que vous soyez artiste débutant, technicien confirmé ou entrepreneur 
              de l&apos;industrie musicale, l&apos;Académie Assoura propose des formations 
              adaptées à vos ambitions.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Programs */}
      <section id="professional" className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
              Formation Professionnelle
            </span>
            <h2 className="mb-4">
              Métiers de la{' '}
              <span className="text-primary-500">Musique</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Des formations complètes pour devenir un professionnel accompli 
              de l&apos;industrie musicale burkinabè et internationale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalPrograms.map((program) => (
              <div
                key={program.id}
                id={program.id}
                className="card card-hover overflow-hidden scroll-mt-32"
              >
                {/* Header */}
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                
                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-5`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                  <p className="text-neutral-600 text-sm mb-6">{program.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-neutral-600">
                        <Check className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Meta */}
                  <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                    <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                      <Users className="w-4 h-4" />
                      {program.level}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusive Programs */}
      <section id="amateur" className="section-padding bg-gradient-sand scroll-mt-32">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-orange text-white text-sm font-medium mb-4">
              Programmes Inclusifs
            </span>
            <h2 className="mb-4">
              La Musique pour{' '}
              <span className="text-accent-orange">Tous</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              L&apos;Académie Assoura s&apos;ouvre aux amateurs, aux tout-petits et aux 
              personnes en situation de handicap avec des programmes adaptés.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {inclusivePrograms.map((program) => (
              <div
                key={program.id}
                id={program.id}
                className="card p-8 text-center scroll-mt-32"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-orange/20 to-primary-500/20 flex items-center justify-center">
                  <program.icon className="w-10 h-10 text-accent-orange" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-neutral-600 text-sm mb-6">{program.description}</p>
                
                <ul className="space-y-2 text-left">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-neutral-600">
                      <Check className="w-4 h-4 text-accent-orange mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Tamtando Partnership */}
          <div className="mt-12 p-8 bg-white rounded-3xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-accent-orange/20 to-primary-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-5xl">🎭</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  En partenariat avec Tamtando
                </h3>
                <p className="text-neutral-600 mb-4">
                  L&apos;Académie Assoura intègre une dimension inclusive en s&apos;appuyant 
                  sur l&apos;expérience du groupe italien Tamtando, qui expérimente 
                  depuis plusieurs années l&apos;accompagnement musical des personnes 
                  en situation de déficience intellectuelle.
                </p>
                <p className="text-primary-500 font-medium">
                  La musique comme puissant moyen d&apos;expression et de développement personnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
              Activités Complémentaires
            </span>
            <h2 className="mb-4">
              Au-delà des{' '}
              <span className="text-primary-500">Formations</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Residences */}
            <div className="card card-hover p-8">
              <div className="w-14 h-14 rounded-2xl bg-primary-500 flex items-center justify-center mb-5">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Résidences d&apos;Artistes</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Développez votre projet musical avec un accompagnement personnalisé 
                lors de nos résidences artistiques.
              </p>
              <Link 
                href="/residencies" 
                className="inline-flex items-center text-primary-500 font-medium text-sm hover:text-primary-600"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            {/* Masterclasses */}
            <div className="card card-hover p-8">
              <div className="w-14 h-14 rounded-2xl bg-accent-orange flex items-center justify-center mb-5">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Masterclasses</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Rencontrez des experts du secteur: artistes, producteurs, 
                avocats spécialisés et ingénieurs du son.
              </p>
              <Link 
                href="/events" 
                className="inline-flex items-center text-accent-orange font-medium text-sm hover:text-accent-orange/80"
              >
                Voir les événements
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            {/* Camp Vacances */}
            <div className="card card-hover p-8">
              <div className="w-14 h-14 rounded-2xl bg-accent-gold flex items-center justify-center mb-5">
                <Baby className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Camp Vacances</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Activités ludiques et immersives pour les tout-petits, enfants 
                et adolescents pendant les vacances.
              </p>
              <Link 
                href="/events" 
                className="inline-flex items-center text-accent-gold font-medium text-sm hover:text-accent-gold/80"
              >
                Découvrir
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="section-container text-center">
          <h2 className="text-white mb-6">
            Prêt à Commencer votre Formation ?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contactez-nous pour en savoir plus sur nos programmes et 
            trouver la formation qui correspond à vos objectifs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-lg bg-white text-primary-500 hover:bg-white/90">
              S&apos;inscrire maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/pricing" className="btn btn-lg bg-white/10 border border-white/30 text-white hover:bg-white/20">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
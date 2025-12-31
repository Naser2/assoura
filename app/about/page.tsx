import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Target, Heart, Globe, Sparkles, Users, Building2, Music } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À Propos',
  description: 'Découvrez l\'histoire de l\'Académie Assoura des Métiers de la Musique, fondée par Bil Aka Kora en collaboration avec Tamtando.',
}

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Former des professionnels de haut niveau capables de rayonner sur la scène internationale.',
  },
  {
    icon: Heart,
    title: 'Inclusion',
    description: 'Rendre la musique accessible à tous, y compris aux personnes en situation de handicap.',
  },
  {
    icon: Globe,
    title: 'Patrimoine',
    description: 'Préserver et valoriser les musiques traditionnelles burkinabè.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Conjuguer tradition et modernité pour créer une identité musicale unique.',
  },
]

const timeline = [
  {
    year: 'Origines',
    title: 'La Djongo Music',
    description: 'Bil Aka Kora développe la Djongo music, fusionnant les rythmes traditionnels kassena avec des influences modernes.',
  },
  {
    year: 'Partenariat',
    title: 'Collaboration avec Tamtando',
    description: 'Rencontre avec le groupe italien Tamtando, spécialisé dans les programmes musicaux inclusifs.',
  },
  {
    year: 'Vision',
    title: 'Naissance du Projet Assoura',
    description: 'Conception de l\'Académie pour combler le manque de structures de formation professionnelle au Burkina Faso.',
  },
  {
    year: 'En cours',
    title: 'Réalisation',
    description: 'Construction des infrastructures et lancement des premiers programmes de formation.',
  },
]

interface FounderCardProps {
  image: {
    src: string
    alt: string
    type: 'avatar' | 'logo'
  }
  name: string
  role: string
  roleColor: string
  description: string
}

function FounderCard({ image, name, role, roleColor, description }: FounderCardProps) {
  return (
    <div className="card card-hover p-8">
      <div className="flex items-start gap-6">
        {image.type === 'avatar' ? (
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-primary-100">
            <Image
              src={image.src}
              alt={image.alt}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-28 h-20 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-2">
            <Image
              src={image.src}
              alt={image.alt}
              width={234}
              height={80}
              className="w-full h-auto object-contain"
            />
          </div>
        )}
        <div>
          <h3 className="text-2xl font-semibold mb-2">{name}</h3>
          <p className={`${roleColor} md:mb-4`}>{role}</p>
          <p className="hidden md:block text-neutral-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <p className="md:hidden text-neutral-600 text-sm leading-relaxed mt-6">
        {description}
      </p>
    </div>
  )
}

const founders: FounderCardProps[] = [
  {
    image: {
      src: '/portraits/bill_portrait.jpg',
      alt: 'Bil Aka Kora',
      type: 'avatar',
    },
    name: 'Bil Aka Kora',
    role: 'Fondateur • Artiste Burkinabè',
    roleColor: 'text-primary-500',
    description: "À travers la Djongo music, Bil Aka Kora a su conjuguer traditions et modernité pour donner une identité forte à la musique burkinabè sur la scène internationale. Son expertise dans la fusion des rythmes traditionnels kassena avec des influences modernes servira de référence pour l'Académie.",
  },
  {
    image: {
      src: '/portraits/logo/logo_tamtando_234x80_marrone.png',
      alt: 'Tamtando',
      type: 'logo',
    },
    name: 'Tamtando',
    role: 'Partenaire Principal • Italie',
    roleColor: 'text-accent-orange',
    description: "Groupe italien spécialisé dans les programmes musicaux inclusifs, Tamtando a développé une expertise unique dans l'accompagnement des personnes en situation de déficience intellectuelle à travers la musique. Cette expérience enrichit la dimension inclusive de l'Académie Assoura.",
  },
]

export default function AboutPage() {
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
              Notre Histoire
            </span>
            <h1 className="text-white mb-6">
              L&apos;Académie{' '}
              <span className="text-accent-gold">Assoura</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-4">
              &quot;Assoura&quot; en langue Kassena signifie &quot;Boucher les trous&quot;. 
              Notre mission est de combler le fossé entre le talent brut et 
              l&apos;excellence professionnelle dans l&apos;industrie musicale burkinabè.
            </p>
            <p className="text-white/60">
              Une initiative de Bil Aka Kora en collaboration avec le groupe italien Tamtando
            </p>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
                Contexte
              </span>
              <h2 className="mb-6">
                Pourquoi{' '}
                <span className="text-primary-500">Assoura</span> ?
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  L&apos;Afrique, et en particulier le Burkina Faso, regorge d&apos;une 
                  richesse musicale exceptionnelle, portée par des artistes innovants. 
                  Pourtant, malgré la diversité et la vitalité de cette scène musicale, 
                  les structures de formation professionnelle adaptées aux besoins des 
                  artistes, techniciens et autres métiers de l&apos;industrie musicale 
                  restent insuffisantes.
                </p>
                <p>
                  L&apos;absence de formations spécialisées limite les opportunités pour 
                  les jeunes talents de se professionnaliser et de s&apos;intégrer 
                  durablement dans le marché de la musique.
                </p>
                <p>
                  Par ailleurs, la musique est une forme d&apos;expression universelle 
                  accessible à tous. Pourtant, les amateurs passionnés, les personnes 
                  en situation de handicap et les tout-petits rencontrent encore trop 
                  d&apos;obstacles pour accéder à des formations adaptées.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
                <Image
                  src="/new_images/recording_session_blue_organgish.png"
                  alt="Session d'enregistrement à l'Académie Assoura"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-gold rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-sand">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500 text-white text-sm font-medium mb-4">
              Nos Valeurs
            </span>
            <h2 className="mb-4">
              Les Piliers de notre{' '}
              <span className="text-primary-500">Vision</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary-500 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-gold/10 text-accent-gold text-sm font-medium mb-4">
              Les Fondateurs
            </span>
            <h2 className="mb-4">
              Une Vision{' '}
              <span className="text-accent-gold">Partagée</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((founder) => (
              <FounderCard key={founder.name} {...founder} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-earth-dark text-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
              Notre Parcours
            </span>
            <h2 className="text-white mb-4">
              L&apos;Histoire du{' '}
              <span className="text-accent-gold">Projet</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative pl-8 pb-12 last:pb-0">
                {/* Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-3 top-3 w-0.5 h-full bg-white/20" />
                )}
                
                {/* Dot */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary-500 border-4 border-earth-dark" />
                
                {/* Content */}
                <div className="bg-white/5 rounded-2xl p-6 ml-4">
                  <span className="text-accent-gold font-medium text-sm">{item.year}</span>
                  <h3 className="text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Preview */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
              Infrastructure
            </span>
            <h2 className="mb-4">
              Un Campus{' '}
              <span className="text-primary-500">Emblématique</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              L&apos;Académie Assoura sera un espace architectural inspiré de 
              l&apos;esprit de la Djongo music, incarnant les valeurs de force, 
              d&apos;endurance et de communion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Building2, name: 'Résidence', budget: '39.1M FCFA' },
              { icon: Building2, name: 'Bâtiment Administratif', budget: '16.6M FCFA' },
              { icon: Building2, name: 'Magasin', budget: '8.2M FCFA' },
              { icon: Music, name: 'Salle de Répétition', budget: '14.3M FCFA' },
              { icon: Users, name: 'Cafétéria', budget: '5.8M FCFA' },
            ].map((building) => (
              <div key={building.name} className="card p-6 text-center">
                <building.icon className="w-10 h-10 text-primary-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-1">{building.name}</h4>
                <p className="text-primary-500 text-sm font-medium">{building.budget}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-primary-50 rounded-2xl text-center">
            <p className="text-lg font-semibold text-primary-700">
              Budget Total: <span className="text-2xl">84 165 154 FCFA</span>
            </p>
            <p className="text-primary-600 mt-2">
              Durée du projet: 2 ans • Zone d&apos;intervention: Nationale
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="section-container text-center">
          <h2 className="text-white mb-6">
            Rejoignez l&apos;Aventure Assoura
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Que vous soyez artiste, partenaire potentiel ou simplement passionné 
            par la musique africaine, il y a une place pour vous dans ce projet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-lg bg-white text-primary-500 hover:bg-white/90">
              Nous contacter
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/programs" className="btn btn-lg bg-white/10 border border-white/30 text-white hover:bg-white/20">
              Découvrir les programmes
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
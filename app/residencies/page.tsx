import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Home, Music, Users, Mic2, ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Résidences d\'Artistes',
  description: 'Découvrez nos résidences d\'artistes à l\'Académie Assoura. Développez votre projet musical avec un accompagnement personnalisé.',
}

const residencyTypes = [
  {
    name: 'Résidence Création',
    duration: '1-2 semaines',
    description: 'Pour développer un nouveau projet musical, composer et arranger vos morceaux dans un cadre inspirant.',
    features: [
      'Hébergement sur place',
      'Accès au studio d\'enregistrement',
      'Accompagnement artistique',
      'Salle de répétition dédiée',
    ],
    price: '100 000 FCFA / semaine',
    icon: Music,
  },
  {
    name: 'Résidence Enregistrement',
    duration: '3-5 jours',
    description: 'Pour enregistrer votre album ou EP dans des conditions professionnelles avec notre équipe technique.',
    features: [
      'Studio équipé professionnel',
      'Ingénieur du son dédié',
      'Mixage et pré-mastering',
      'Hébergement optionnel',
    ],
    price: '75 000 FCFA / jour',
    icon: Mic2,
  },
  {
    name: 'Résidence Formation',
    duration: '2-4 semaines',
    description: 'Immersion intensive pour perfectionner vos compétences avec nos formateurs experts.',
    features: [
      'Programme personnalisé',
      'Cours individuels quotidiens',
      'Hébergement et restauration',
      'Certificat de formation',
    ],
    price: 'Sur devis',
    icon: Users,
  },
]

const benefits = [
  'Cadre inspirant au cœur du Burkina Faso',
  'Équipements professionnels de qualité',
  'Réseau d\'artistes et professionnels',
  'Accompagnement artistique personnalisé',
  'Possibilité de showcase en fin de résidence',
  'Mise en relation avec l\'industrie locale',
]

export default function ResidenciesPage() {
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
              Résidences d&apos;Artistes
            </span>
            <h1 className="text-white mb-6">
              Un Espace pour{' '}
              <span className="text-accent-gold">Créer</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              Développez votre projet musical dans un cadre inspirant avec
              un accompagnement personnalisé et des équipements professionnels.
            </p>
          </div>
        </div>
      </section>

      {/* Residency Types */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
              Nos Formules
            </span>
            <h2 className="mb-4">
              Types de <span className="text-primary-500">Résidences</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Choisissez la formule qui correspond à votre projet et vos objectifs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {residencyTypes.map((type) => (
              <div key={type.name} className="card card-hover p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary-500 flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                <p className="text-primary-500 text-sm font-medium mb-4">
                  {type.duration}
                </p>
                <p className="text-neutral-600 text-sm mb-6">{type.description}</p>

                <ul className="space-y-2 mb-6">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-neutral-600">
                      <Check className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-neutral-100">
                  <p className="font-semibold text-primary-500">{type.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gradient-sand">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent-gold/10 text-accent-gold text-sm font-medium mb-4">
                Pourquoi nous choisir
              </span>
              <h2 className="mb-6">
                Les Avantages de nos{' '}
                <span className="text-accent-gold">Résidences</span>
              </h2>
              <p className="text-neutral-600 mb-8">
                L&apos;Académie Assoura offre un cadre unique pour développer
                votre créativité et concrétiser vos projets musicaux.
              </p>

              <ul className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary-100 to-accent-sand overflow-hidden flex items-center justify-center">
                <Home className="w-24 h-24 text-primary-500/30" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-gold rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Comment <span className="text-primary-500">ça marche</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Contactez-nous',
                  description: 'Présentez votre projet et vos besoins. Nous échangeons sur vos objectifs et la formule adaptée.',
                },
                {
                  step: 2,
                  title: 'Planification',
                  description: 'Nous définissons ensemble les dates, le programme et les ressources nécessaires à votre résidence.',
                },
                {
                  step: 3,
                  title: 'Résidence',
                  description: 'Installez-vous et créez ! Notre équipe vous accompagne tout au long de votre séjour.',
                },
                {
                  step: 4,
                  title: 'Restitution',
                  description: 'Présentez votre travail lors d\'un showcase ou repartez avec vos créations finalisées.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="section-padding bg-earth-dark text-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <Calendar className="w-12 h-12 text-accent-gold mx-auto mb-4" />
            <h2 className="text-white mb-4">Disponibilités</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Nos résidences sont disponibles tout au long de l&apos;année,
              sous réserve de disponibilité. Contactez-nous pour vérifier
              les créneaux libres.
            </p>
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn btn-lg bg-accent-gold text-earth-dark hover:bg-yellow-400">
              Vérifier les disponibilités
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-500">
        <div className="section-container text-center">
          <h2 className="text-white mb-6">Prêt à créer ?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contactez-nous pour discuter de votre projet et réserver votre résidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-lg bg-white text-primary-500 hover:bg-white/90">
              Demander une résidence
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="tel:+22676394747" className="btn btn-lg bg-white/10 border border-white/30 text-white hover:bg-white/20">
              +226 76 39 47 47
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

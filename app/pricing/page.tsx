import { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tarifs',
  description: 'Découvrez les tarifs des formations professionnelles et programmes de l\'Académie Assoura des Métiers de la Musique.',
}

const pricingPlans = [
  {
    name: 'Formation Courte',
    description: 'Ateliers et masterclasses ponctuels',
    price: '15 000',
    period: 'par session',
    features: [
      'Accès à un atelier de 3-4 heures',
      'Support de cours inclus',
      'Certificat de participation',
      'Accès aux équipements pendant la session',
    ],
    popular: false,
    color: 'neutral',
  },
  {
    name: 'Formation Standard',
    description: 'Programme complet de 3-4 mois',
    price: '150 000',
    period: 'par trimestre',
    features: [
      'Cours théoriques et pratiques',
      'Accès aux studios et équipements',
      'Suivi personnalisé',
      'Certificat de formation',
      'Participation aux showcases',
      'Supports pédagogiques complets',
    ],
    popular: true,
    color: 'primary',
  },
  {
    name: 'Formation Pro',
    description: 'Programme intensif de 6-8 mois',
    price: '350 000',
    period: 'par semestre',
    features: [
      'Tout le programme Standard',
      'Mentorat individuel',
      'Stage pratique garanti',
      'Networking avec professionnels',
      'Priorité sur les résidences',
      'Accompagnement carrière',
      'Diplôme professionnel',
    ],
    popular: false,
    color: 'accent',
  },
]

const additionalPricing = [
  { name: 'Cours individuel (1h)', price: '10 000 FCFA' },
  { name: 'Location studio (2h)', price: '25 000 FCFA' },
  { name: 'Résidence artistique (1 semaine)', price: '100 000 FCFA' },
  { name: 'Camp vacances enfants', price: '50 000 FCFA' },
  { name: 'Programme inclusif', price: 'Tarif adapté' },
]

export default function PricingPage() {
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
              Tarifs
            </span>
            <h1 className="text-white mb-6">
              Investissez dans votre{' '}
              <span className="text-accent-gold">Avenir Musical</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              Des formules adaptées à chaque profil et à chaque budget.
              Formations professionnelles accessibles à tous.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative card p-8 ${
                  plan.popular ? 'border-2 border-primary-500 shadow-glow !overflow-visible' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 text-white text-sm font-medium rounded-full whitespace-nowrap">
                    Populaire
                  </span>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-neutral-500 text-sm">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <span className="text-4xl font-bold text-primary-500">
                    {plan.price}
                  </span>
                  <span className="text-neutral-500 text-sm ml-1">FCFA</span>
                  <p className="text-neutral-400 text-sm">{plan.period}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`btn w-full justify-center ${
                    plan.popular ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  S&apos;inscrire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Pricing */}
      <section className="section-padding bg-gradient-sand">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Autres <span className="text-primary-500">Services</span>
              </h2>
              <p className="text-neutral-600">
                Tarifs pour les services ponctuels et programmes spéciaux
              </p>
            </div>

            <div className="card divide-y divide-neutral-100">
              {additionalPricing.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-4">
                  <span className="text-neutral-700">{item.name}</span>
                  <span className="font-semibold text-primary-500">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-2xl">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Facilités de paiement</h4>
                  <p className="text-neutral-600 text-sm">
                    Possibilité de paiement en plusieurs fois pour les formations
                    longues. Des bourses sont disponibles pour les étudiants
                    méritants. Contactez-nous pour en savoir plus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Questions <span className="text-primary-500">Fréquentes</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'Quels sont les modes de paiement acceptés ?',
                  a: 'Nous acceptons les paiements en espèces, par Mobile Money (Orange Money, Moov Money) et par virement bancaire.',
                },
                {
                  q: 'Y a-t-il des frais d\'inscription ?',
                  a: 'Des frais d\'inscription de 10 000 FCFA sont demandés une seule fois lors de la première inscription.',
                },
                {
                  q: 'Puis-je changer de formule en cours de formation ?',
                  a: 'Oui, vous pouvez upgrader vers une formule supérieure à tout moment en payant la différence.',
                },
                {
                  q: 'Des bourses sont-elles disponibles ?',
                  a: 'Oui, nous proposons des bourses partielles aux étudiants talentueux ayant des difficultés financières. Contactez-nous pour plus d\'informations.',
                },
              ].map((faq, index) => (
                <div key={index} className="card p-6">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-neutral-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-500">
        <div className="section-container text-center">
          <h2 className="text-white mb-6">Prêt à vous lancer ?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contactez-nous pour discuter de vos objectifs et trouver
            la formule qui vous convient le mieux.
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

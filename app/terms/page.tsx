import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Conditions Générales',
  description: 'Conditions générales d\'utilisation de l\'Académie Assoura des Métiers de la Musique.',
}

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-earth-dark via-neutral-900 to-primary-900">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">
              Conditions Générales
            </h1>
            <p className="text-white/70">
              Dernière mise à jour : Janvier 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto prose prose-neutral">
            <h2>1. Objet</h2>
            <p>
              Les présentes conditions générales régissent l&apos;utilisation des services
              de formation proposés par l&apos;Académie Assoura des Métiers de la Musique
              (ci-après &quot;l&apos;Académie&quot;), située à Ouagadougou, Burkina Faso.
            </p>

            <h2>2. Inscription aux formations</h2>
            <p>
              L&apos;inscription à nos formations est ouverte à toute personne remplissant
              les conditions requises pour le programme choisi. L&apos;inscription est
              effective après :
            </p>
            <ul>
              <li>Réception du dossier complet</li>
              <li>Paiement des frais d&apos;inscription</li>
              <li>Confirmation écrite de l&apos;Académie</li>
            </ul>

            <h2>3. Tarifs et paiement</h2>
            <p>
              Les tarifs des formations sont indiqués sur notre page <Link href="/pricing" className="text-primary-500 hover:underline">Tarifs</Link>.
              Le paiement peut être effectué en espèces, par Mobile Money ou par virement bancaire.
              Des facilités de paiement peuvent être accordées sur demande.
            </p>

            <h2>4. Annulation et remboursement</h2>
            <p>
              En cas d&apos;annulation de la part de l&apos;étudiant :
            </p>
            <ul>
              <li>Plus de 15 jours avant le début : remboursement intégral moins les frais de dossier</li>
              <li>Entre 7 et 15 jours : remboursement de 50%</li>
              <li>Moins de 7 jours : aucun remboursement</li>
            </ul>
            <p>
              L&apos;Académie se réserve le droit d&apos;annuler une session si le nombre minimum
              d&apos;inscrits n&apos;est pas atteint. Dans ce cas, les frais sont intégralement remboursés.
            </p>

            <h2>5. Propriété intellectuelle</h2>
            <p>
              Les supports de cours et contenus pédagogiques sont la propriété exclusive
              de l&apos;Académie Assoura. Leur reproduction ou diffusion sans autorisation
              écrite est interdite.
            </p>

            <h2>6. Comportement</h2>
            <p>
              Les étudiants s&apos;engagent à respecter le règlement intérieur de l&apos;Académie,
              les autres étudiants et le personnel. Tout comportement inapproprié peut
              entraîner l&apos;exclusion sans remboursement.
            </p>

            <h2>7. Responsabilité</h2>
            <p>
              L&apos;Académie ne saurait être tenue responsable des objets personnels des
              étudiants. Les instruments et équipements prêtés doivent être utilisés
              avec soin et restitués en bon état.
            </p>

            <h2>8. Modification des conditions</h2>
            <p>
              L&apos;Académie se réserve le droit de modifier les présentes conditions.
              Les étudiants seront informés de tout changement significatif.
            </p>

            <h2>9. Contact</h2>
            <p>
              Pour toute question concernant ces conditions, contactez-nous à{' '}
              <a href="mailto:contact@assoura-academy.bf" className="text-primary-500 hover:underline">
                contact@assoura-academy.bf
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales de l\'Académie Assoura des Métiers de la Musique.',
}

export default function LegalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-earth-dark via-neutral-900 to-primary-900">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">
              Mentions Légales
            </h1>
            <p className="text-white/70">
              Informations légales concernant ce site
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto prose prose-neutral">
            <h2>Éditeur du site</h2>
            <p>
              <strong>Académie Assoura des Métiers de la Musique</strong><br />
              Association à but non lucratif<br />
              Siège social : Ouagadougou, Burkina Faso<br />
              Téléphone : +226 76 39 47 47<br />
              Email : contact@assoura-academy.bf
            </p>

            <h2>Directeur de la publication</h2>
            <p>
              <strong>Bil Aka Kora</strong><br />
              Fondateur de l&apos;Académie Assoura
            </p>

            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, etc.)
              est protégé par le droit d&apos;auteur et la propriété intellectuelle.
              Toute reproduction, représentation, modification, publication, adaptation
              de tout ou partie des éléments du site, quel que soit le moyen ou le
              procédé utilisé, est interdite, sauf autorisation écrite préalable.
            </p>

            <h2>Crédits</h2>
            <p>
              <strong>Conception et développement :</strong> Équipe Assoura<br />
              <strong>Design graphique :</strong> Inspiré de l&apos;identité visuelle Assoura<br />
              <strong>Photographies :</strong> Académie Assoura / Tamtando
            </p>

            <h2>Partenaires</h2>
            <p>
              <strong>Tamtando</strong><br />
              Partenaire principal - Italie<br />
              Spécialisé dans les programmes musicaux inclusifs
            </p>

            <h2>Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens hypertextes vers d&apos;autres sites.
              L&apos;Académie Assoura n&apos;exerce aucun contrôle sur ces sites et décline
              toute responsabilité quant à leur contenu.
            </p>

            <h2>Données personnelles</h2>
            <p>
              Pour en savoir plus sur la gestion de vos données personnelles,
              consultez notre{' '}
              <a href="/privacy" className="text-primary-500 hover:underline">
                Politique de Confidentialité
              </a>.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit burkinabè.
              En cas de litige, les tribunaux de Ouagadougou seront seuls compétents.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales :<br />
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

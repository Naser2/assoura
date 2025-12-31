import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité et protection des données de l\'Académie Assoura des Métiers de la Musique.',
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-earth-dark via-neutral-900 to-primary-900">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">
              Politique de Confidentialité
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
            <h2>1. Collecte des données</h2>
            <p>
              L&apos;Académie Assoura des Métiers de la Musique collecte les données
              personnelles suivantes dans le cadre de ses activités :
            </p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Adresse postale (si nécessaire)</li>
              <li>Informations relatives à l&apos;inscription aux formations</li>
            </ul>

            <h2>2. Utilisation des données</h2>
            <p>
              Vos données personnelles sont utilisées pour :
            </p>
            <ul>
              <li>Gérer votre inscription aux formations</li>
              <li>Vous contacter concernant nos services</li>
              <li>Vous envoyer des informations sur nos événements (avec votre consentement)</li>
              <li>Améliorer nos services</li>
            </ul>

            <h2>3. Protection des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger
              vos données personnelles contre tout accès non autorisé, modification,
              divulgation ou destruction.
            </p>

            <h2>4. Partage des données</h2>
            <p>
              Vos données personnelles ne sont pas vendues, échangées ou louées à des tiers.
              Elles peuvent être partagées avec :
            </p>
            <ul>
              <li>Nos partenaires de formation (avec votre consentement)</li>
              <li>Les autorités compétentes si la loi l&apos;exige</li>
            </ul>

            <h2>5. Conservation des données</h2>
            <p>
              Vos données sont conservées pendant la durée nécessaire aux finalités
              pour lesquelles elles ont été collectées, et conformément aux obligations
              légales applicables.
            </p>

            <h2>6. Vos droits</h2>
            <p>
              Conformément à la réglementation applicable, vous disposez des droits suivants :
            </p>
            <ul>
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit à la portabilité des données</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à{' '}
              <a href="mailto:contact@assoura-academy.bf" className="text-primary-500 hover:underline">
                contact@assoura-academy.bf
              </a>
            </p>

            <h2>7. Cookies</h2>
            <p>
              Notre site peut utiliser des cookies pour améliorer votre expérience
              de navigation. Vous pouvez configurer votre navigateur pour refuser
              les cookies.
            </p>

            <h2>8. Modifications</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour occasionnellement.
              Nous vous encourageons à la consulter régulièrement.
            </p>

            <h2>9. Contact</h2>
            <p>
              Pour toute question concernant cette politique, contactez-nous :<br />
              Email : <a href="mailto:contact@assoura-academy.bf" className="text-primary-500 hover:underline">contact@assoura-academy.bf</a><br />
              Téléphone : +226 76 39 47 47<br />
              Adresse : Ouagadougou, Burkina Faso
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

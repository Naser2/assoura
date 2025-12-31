import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

const footerLinks = {
  navigation: [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/about' },
    { name: 'Formations', href: '/programs' },
    { name: 'Événements', href: '/events' },
  ],
  programs: [
    { name: 'Formation Professionnelle', href: '/programs#professional' },
    { name: 'Cours pour Amateurs', href: '/programs#amateur' },
    { name: 'Programmes Inclusifs', href: '/programs#inclusion' },
    { name: 'Résidences d\'artistes', href: '/residencies' },
  ],
  legal: [
    { name: 'Conditions générales', href: '/terms' },
    { name: 'Politique de confidentialité', href: '/privacy' },
    { name: 'Mentions légales', href: '/legal' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
  { name: 'Twitter', href: '#', icon: Twitter },
]

export function Footer() {
  return (
    <footer className="bg-earth-dark text-white">
      {/* Main Footer */}
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 40 40" className="w-8 h-8 text-white" fill="currentColor">
                    <rect x="8" y="8" width="4" height="24" rx="1" />
                    <rect x="14" y="8" width="4" height="24" rx="1" />
                    <rect x="20" y="8" width="4" height="24" rx="1" />
                    <rect x="26" y="8" width="4" height="24" rx="1" />
                    <rect x="6" y="4" width="28" height="4" rx="1" />
                  </svg>
                </div>
                <div>
                  <span className="font-display text-2xl tracking-wider">ASSOURA</span>
                  <p className="text-xs text-white/60">Académie des Métiers de la Musique</p>
                </div>
              </div>
            </Link>
            
            <p className="mt-6 text-white/70 text-sm leading-relaxed">
              Assoura en langue Kassena signifie &quot;Boucher les trous&quot;. 
              Notre mission est de structurer et professionnaliser le secteur musical au Burkina Faso.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-heading text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="font-heading text-lg mb-6">Nos Programmes</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+22676394747"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">+226 76 39 47 47</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@assoura-academy.bf"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">contact@assoura-academy.bf</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Ouagadougou, Burkina Faso
                  </span>
                </div>
              </li>
            </ul>
            
            {/* Partners */}
            <div className="mt-8">
              <p className="text-white/50 text-xs mb-3">En collaboration avec</p>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-white/10 rounded-lg">
                  <span className="text-sm font-medium">Tamtando</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Assoura Academy. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/50 hover:text-white text-xs transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
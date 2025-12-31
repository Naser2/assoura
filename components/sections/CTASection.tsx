'use client'

import Link from 'next/link'
import { Phone, Mail, ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        {/* Real African pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("/pattern_horizontal.png")`,
            backgroundSize: '300px',
            backgroundRepeat: 'repeat',
          }}
        />
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent-gold/10 rounded-full blur-xl" />
      </div>

      <div className="relative section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
            Rejoignez l&apos;Académie
          </span>
          
          {/* Heading */}
          <h2 className="text-white mb-6">
            Prêt à Transformer votre{' '}
            <span className="text-accent-gold">Passion</span> en{' '}
            <span className="text-accent-gold">Carrière</span> ?
          </h2>
          
          {/* Description */}
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Que vous soyez artiste en herbe, technicien passionné ou entrepreneur 
            de la musique, l&apos;Académie Assoura vous accompagne vers l&apos;excellence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="btn btn-lg bg-white text-primary-500 hover:bg-white/90 shadow-lg"
            >
              S&apos;inscrire maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/programs"
              className="btn btn-lg bg-white/10 border border-white/30 text-white hover:bg-white/20"
            >
              Voir les programmes
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="tel:+22676394747"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span>+226 76 39 47 47</span>
            </a>
            <a
              href="mailto:contact@assoura-academy.bf"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span>contact@assoura-academy.bf</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
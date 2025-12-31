'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Home, Info, GraduationCap, Calendar, Building, CreditCard, Image as ImageIcon, Phone } from 'lucide-react'

const navigation = [
  { name: 'Accueil', href: '/', icon: Home },
  { name: 'À Propos', href: '/about', icon: Info },
  {
    name: 'Formations',
    href: '/programs',
    icon: GraduationCap,
    children: [
      { name: 'Professionnels', href: '/programs#professional' },
      { name: 'Amateurs', href: '/programs#amateur' },
      { name: 'Inclusion', href: '/programs#inclusion' },
    ],
  },
  { name: 'Événements', href: '/events', icon: Calendar },
  { name: 'Résidences', href: '/residencies', icon: Building },
  { name: 'Tarifs', href: '/pricing', icon: CreditCard },
  { name: 'Galerie', href: '/gallery', icon: ImageIcon },
  { name: 'Contact', href: '/contact', icon: Phone },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Determine if header should show light or dark style
  const showLightHeader = scrolled && !isOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showLightHeader
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-auto">
              <Image
                src={showLightHeader ? '/assoura_logo_light.png' : '/assoura_logo_dark.png'}
                alt="Assoura - Académie des Métiers de la Musique"
                width={180}
                height={48}
                className="h-12 w-auto object-contain transition-all duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                    showLightHeader
                      ? 'text-neutral-700 hover:text-primary-500 hover:bg-primary-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-xl py-2 min-w-48 border border-neutral-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-neutral-700 hover:text-primary-500 hover:bg-primary-50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-sm"
            >
              S&apos;inscrire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Ouvrir le menu"
            title="Ouvrir le menu"
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showLightHeader ? 'text-neutral-700' : 'text-white'
            }`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-[85%] max-w-sm bg-neutral-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-800">
            <Image
              src="/assoura_logo_dark.png"
              alt="Assoura"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer le menu"
              title="Fermer le menu"
              className="p-2 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* CTA Button */}
          <div className="p-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 px-6 bg-accent-gold text-neutral-900 font-semibold text-center rounded-full hover:bg-yellow-400 transition-colors"
            >
              S&apos;inscrire maintenant
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-4 py-2 z-50">
            <div className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 font-medium transition-colors"
                    >
                      <Icon className="w-5 h-5 text-neutral-500" />
                      {item.name}
                      {item.children && <ChevronDown className="w-4 h-4 ml-auto" />}
                    </Link>
                    {item.children && (
                      <div className="ml-12 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-neutral-500 hover:text-white transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Drawer Footer - Pattern decoration */}
          <div className="p-4 border-t border-neutral-800">
            <div
              className="h-16 opacity-20 rounded-lg"
              style={{
                backgroundImage: `url("/pattern_horizontal_continued_2.png")`,
                backgroundSize: '100px',
                backgroundRepeat: 'repeat',
              }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
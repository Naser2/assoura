import type { Metadata } from 'next'
import '../globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://assoura-academy.bf'),
  title: {
    default: 'Assoura | Académie des Métiers de la Musique',
    template: '%s | Assoura Academy',
  },
  description: 'L\'Académie Assoura des Métiers de la Musique au Burkina Faso - Formation professionnelle, préservation du patrimoine musical et inclusion à travers la musique.',
  keywords: ['musique', 'Burkina Faso', 'académie', 'formation musicale', 'Bil Aka Kora', 'Djongo music', 'Tamtando', 'Assoura'],
  authors: [{ name: 'Assoura Academy' }],
  creator: 'Bil Aka Kora',
  openGraph: {
    type: 'website',
    locale: 'fr_BF',
    url: 'https://assoura-academy.bf',
    siteName: 'Assoura Academy',
    title: 'Assoura | Académie des Métiers de la Musique',
    description: 'Formation professionnelle aux métiers de la musique au Burkina Faso',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Assoura Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Assoura Academy',
    description: 'Académie des Métiers de la Musique au Burkina Faso',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

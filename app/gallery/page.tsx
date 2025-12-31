import { Metadata } from 'next'
import { Camera, Play, Music } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Découvrez en images l\'Académie Assoura des Métiers de la Musique, nos événements et nos étudiants.',
}

const categories = ['Tous', 'Événements', 'Formations', 'Concerts', 'Infrastructure']

const galleryItems = [
  { id: 1, title: 'Séminaire Tamtando 2025', category: 'Événements', type: 'image' },
  { id: 2, title: 'Atelier Percussion', category: 'Formations', type: 'image' },
  { id: 3, title: 'Concert de fin d\'année', category: 'Concerts', type: 'video' },
  { id: 4, title: 'Studio d\'enregistrement', category: 'Infrastructure', type: 'image' },
  { id: 5, title: 'Masterclass Djongo', category: 'Formations', type: 'image' },
  { id: 6, title: 'Showcase étudiant', category: 'Concerts', type: 'image' },
  { id: 7, title: 'Salle de répétition', category: 'Infrastructure', type: 'image' },
  { id: 8, title: 'Rencontre avec Bil Aka Kora', category: 'Événements', type: 'video' },
  { id: 9, title: 'Cours de chant', category: 'Formations', type: 'image' },
  { id: 10, title: 'Performance live', category: 'Concerts', type: 'image' },
  { id: 11, title: 'Bâtiment principal', category: 'Infrastructure', type: 'image' },
  { id: 12, title: 'Festival Assoura', category: 'Événements', type: 'video' },
]

export default function GalleryPage() {
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
              Galerie
            </span>
            <h1 className="text-white mb-6">
              L&apos;Académie en{' '}
              <span className="text-accent-gold">Images</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              Revivez les moments forts de l&apos;Académie Assoura à travers notre
              galerie photos et vidéos.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-neutral-100 sticky top-0 z-40">
        <div className="section-container py-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === 'Tous'
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 cursor-pointer"
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <Play className="w-12 h-12 text-neutral-400" />
                  ) : (
                    <Camera className="w-12 h-12 text-neutral-400" />
                  )}
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-white/70 text-sm">{item.category}</p>
                  </div>

                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Charger plus de médias
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-gradient-sand">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
              Vidéos
            </span>
            <h2 className="mb-4">
              Nos <span className="text-primary-500">Vidéos</span> à la Une
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Présentation de l\'Académie Assoura', duration: '5:30' },
              { title: 'Concert de la Djongo Music', duration: '12:45' },
            ].map((video, index) => (
              <div key={index} className="card card-hover overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center relative">
                  <Music className="w-16 h-16 text-neutral-400" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-4 right-4 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

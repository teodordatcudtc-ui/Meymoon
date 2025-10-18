'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Camera, Users, Award } from 'lucide-react'

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Studio interior - spațiu principal',
      category: 'Studio',
      description: 'Spațiul principal al studioului nostru, cu echipament modern și atmosferă relaxantă.',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Clasă de Pilates Mat',
      category: 'Clase',
      description: 'Clasă de Pilates Mat cu instrucțiuni personalizate și atenție la detalii.',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1506905925346-14b1e61d00aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Spațiu de relaxare',
      category: 'Relaxare',
      description: 'Zona dedicată relaxării și meditației, perfectă pentru Somatic Breathwork.',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Echipament Reformer',
      category: 'Echipament',
      description: 'Aparatele Reformer profesionale pentru clase avansate de Pilates.',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Antrenor în acțiune',
      category: 'Echipă',
      description: 'Antrenorii noștri certificați oferă instrucțiuni personalizate și atenție la detalii.',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1506905925346-14b1e61d00aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Atmosferă calmă',
      category: 'Atmosferă',
      description: 'Atmosfera relaxantă și primitoare care face din fiecare ședință o experiență specială.',
    },
  ]

  const categories = ['Toate', 'Studio', 'Clase', 'Relaxare', 'Echipament', 'Echipă', 'Atmosferă']
  const [activeCategory, setActiveCategory] = useState('Toate')

  const filteredImages = activeCategory === 'Toate' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Galerie
            <span className="block text-gradient">Foto</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Descoperă atmosfera studioului nostru și vezi cum arată o ședință de Pilates la Meymoon Studio.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-primary-100 hover:text-primary-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg mb-1">{image.alt}</h3>
                  <p className="text-sm text-white/90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="relative">
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  width={800}
                  height={600}
                  className="rounded-lg max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {filteredImages[selectedImage].alt}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {filteredImages[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-4">
              Vrei să experimentezi atmosfera noastră?
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-3xl mx-auto">
              Rezervă o ședință de probă gratuită și descoperă de ce Meymoon Studio 
              este alegerea perfectă pentru călătoria ta de Pilates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/programari"
                className="btn-primary text-lg px-8 py-4 group"
              >
                Rezervă Ședința de Probă
                <Camera className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="btn-secondary text-lg px-8 py-4"
              >
                Contactează-ne
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageGallery
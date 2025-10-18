import { Metadata } from 'next'
import ImageGallery from '@/components/ImageGallery'

export const metadata: Metadata = {
  title: 'Galerie - Meymoon Pilates Studio | Imagini din Studio',
  description: 'Descoperă atmosfera relaxantă a studioului nostru de Pilates din București. Imagini cu echipamentul premium, clasele noastre și echipa de antrenori.',
  keywords: 'galerie pilates București, imagini studio pilates, echipament pilates, clase pilates imagini, Meymoon studio galerie',
  openGraph: {
    title: 'Galerie - Meymoon Pilates Studio | Imagini din Studio',
    description: 'Descoperă atmosfera relaxantă a studioului nostru de Pilates din București. Imagini cu echipamentul premium, clasele noastre și echipa de antrenori.',
    images: ['/og-gallery.jpg'],
  },
}

export default function Gallery() {
  return (
    <>
      <ImageGallery />
    </>
  )
}

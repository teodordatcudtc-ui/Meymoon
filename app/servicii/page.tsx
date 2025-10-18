import { Metadata } from 'next'
import ServicesList from '@/components/ServicesList'
import ClassTypes from '@/components/ClassTypes'

export const metadata: Metadata = {
  title: 'Servicii Pilates - Meymoon Studio | Clase Mat, Reformer, Somatic Breathwork',
  description: 'Descoperă serviciile noastre de Pilates: clase Mat, Reformer, Somatic Breathwork, antrenamente private și workshop-uri. Prețuri competitive și instrucțiuni profesionale.',
  keywords: 'servicii pilates București, clase pilates mat, pilates reformer, somatic breathwork, antrenamente private pilates, workshop pilates',
  openGraph: {
    title: 'Servicii Pilates - Meymoon Studio | Clase Mat, Reformer, Somatic Breathwork',
    description: 'Descoperă serviciile noastre de Pilates: clase Mat, Reformer, Somatic Breathwork, antrenamente private și workshop-uri. Prețuri competitive și instrucțiuni profesionale.',
    images: ['/og-services.jpg'],
  },
}

export default function Services() {
  return (
    <>
      <ServicesList />
      <ClassTypes />
    </>
  )
}

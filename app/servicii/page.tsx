import { Metadata } from 'next'
import ServicesHero from '@/components/ServicesHero'
import ServicesList from '@/components/ServicesList'
import SomaticBreathwork from '@/components/SomaticBreathwork'

export const metadata: Metadata = {
  title: 'Servicii - Pilates și Somatic Breathwork | Meymoon Studio București',
  description: 'Descoperă serviciile noastre complete: Pilates Mat, Pilates Reformer, Somatic Breathwork, clase de grup și personalizate. Programează o ședință de probă gratuită!',
  keywords: 'servicii pilates București, Pilates Mat, Pilates Reformer, Somatic Breathwork, clase pilates, pilates personalizat, wellness București',
  openGraph: {
    title: 'Servicii - Pilates și Somatic Breathwork | Meymoon Studio București',
    description: 'Descoperă serviciile noastre complete: Pilates Mat, Pilates Reformer, Somatic Breathwork, clase de grup și personalizate. Programează o ședință de probă gratuită!',
    url: 'https://meymoonstudio.ro/servicii',
    images: [
      {
        url: '/images/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Servicii Pilates și Somatic Breathwork la Meymoon Studio',
      },
    ],
  },
}

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <SomaticBreathwork />
    </>
  )
}

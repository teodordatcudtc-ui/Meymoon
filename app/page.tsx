import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ServicesPreview from '@/components/ServicesPreview'
import SchedulePreview from '@/components/SchedulePreview'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'Meymoon Pilates Studio - București | Clase de Pilates Premium',
  description: 'Studio premium de Pilates în București. Clase de Pilates Mat, Reformer, Somatic Breathwork și antrenamente private. Rezervă acum la Strada Negoiu 51.',
  openGraph: {
    title: 'Meymoon Pilates Studio - București | Clase de Pilates Premium',
    description: 'Studio premium de Pilates în București. Clase de Pilates Mat, Reformer, Somatic Breathwork și antrenamente private.',
    images: ['/og-image.jpg'],
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ServicesPreview />
      <SchedulePreview />
      <Testimonials />
      <CTA />
    </>
  )
}

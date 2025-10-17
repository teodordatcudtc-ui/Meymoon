import { Metadata } from 'next'
import AboutHero from '@/components/AboutHero'
import OurStory from '@/components/OurStory'
import Values from '@/components/Values'
import Mission from '@/components/Mission'

export const metadata: Metadata = {
  title: 'Despre noi - Meymoon Pilates Studio | Viziunea și misiunea noastră',
  description: 'Descoperă povestea Meymoon Pilates Studio, viziunea noastră despre wellness și cum ne-am dedicat să te ajutăm să-ți atingi obiectivele de sănătate prin Pilates și Somatic Breathwork.',
  keywords: 'despre Meymoon, studio pilates București, viziune wellness, misiune pilates, echipa pilates',
  openGraph: {
    title: 'Despre noi - Meymoon Pilates Studio | Viziunea și misiunea noastră',
    description: 'Descoperă povestea Meymoon Pilates Studio, viziunea noastră despre wellness și cum ne-am dedicat să te ajutăm să-ți atingi obiectivele de sănătate prin Pilates și Somatic Breathwork.',
    url: 'https://meymoonstudio.ro/despre',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Echipa Meymoon Pilates Studio',
      },
    ],
  },
}

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <Values />
      <Mission />
    </>
  )
}

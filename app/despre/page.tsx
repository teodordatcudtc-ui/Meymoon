import { Metadata } from 'next'
import OurStory from '@/components/OurStory'
import Team from '@/components/Team'
import SomaticBreathwork from '@/components/SomaticBreathwork'
import Values from '@/components/Values'

export const metadata: Metadata = {
  title: 'Despre Noi - Meymoon Pilates Studio | Povestea Studioului Nostru',
  description: 'Descoperă povestea Meymoon Pilates Studio din București. Antrenori certificați, atmosferă profesională și servicii premium de Pilates și Somatic Breathwork.',
  keywords: 'despre meymoon studio, antrenori pilates București, echipa studio pilates, somatic breathwork București, povestea studioului',
  openGraph: {
    title: 'Despre Noi - Meymoon Pilates Studio | Povestea Studioului Nostru',
    description: 'Descoperă povestea Meymoon Pilates Studio din București. Antrenori certificați, atmosferă profesională și servicii premium de Pilates și Somatic Breathwork.',
    images: ['/og-about.jpg'],
  },
}

export default function About() {
  return (
    <>
      <OurStory />
      <Team />
      <SomaticBreathwork />
      <Values />
    </>
  )
}

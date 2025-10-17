import { Metadata } from 'next'
import TrainersHero from '@/components/TrainersHero'
import TrainersList from '@/components/TrainersList'

export const metadata: Metadata = {
  title: 'Traineri - Echipa noastră de instructori certificați | Meymoon Studio',
  description: 'Cunoaște instructorii noștri certificați, pasionați de wellness și dedicați să te ajute să-ți atingi obiectivele de sănătate și fitness prin Pilates și Somatic Breathwork.',
  keywords: 'instructori pilates București, traineri certificați, echipa Meymoon, specialisti wellness, instructori Somatic Breathwork',
  openGraph: {
    title: 'Traineri - Echipa noastră de instructori certificați | Meymoon Studio',
    description: 'Cunoaște instructorii noștri certificați, pasionați de wellness și dedicați să te ajute să-ți atingi obiectivele de sănătate și fitness prin Pilates și Somatic Breathwork.',
    url: 'https://meymoonstudio.ro/traineri',
    images: [
      {
        url: '/images/og-trainers.jpg',
        width: 1200,
        height: 630,
        alt: 'Echipa de instructori Meymoon Pilates Studio',
      },
    ],
  },
}

export default function Trainers() {
  return (
    <>
      <TrainersHero />
      <TrainersList />
    </>
  )
}

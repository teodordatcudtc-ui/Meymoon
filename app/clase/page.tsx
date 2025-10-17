import { Metadata } from 'next'
import ClassesHero from '@/components/ClassesHero'
import ClassesSchedule from '@/components/ClassesSchedule'
import BookingProcess from '@/components/BookingProcess'
import ClassTypes from '@/components/ClassTypes'

export const metadata: Metadata = {
  title: 'Clase și Program - Pilates și Somatic Breathwork | Meymoon Studio',
  description: 'Vezi programul complet de clase de Pilates și Somatic Breathwork la Meymoon Studio. Rezervă-ți locul la clasele noastre profesionale în București, Sector 3.',
  keywords: 'program clase pilates București, rezervare clase pilates, program pilates sector 3, clase Somatic Breathwork, program studio pilates',
  openGraph: {
    title: 'Clase și Program - Pilates și Somatic Breathwork | Meymoon Studio',
    description: 'Vezi programul complet de clase de Pilates și Somatic Breathwork la Meymoon Studio. Rezervă-ți locul la clasele noastre profesionale în București, Sector 3.',
    url: 'https://meymoonstudio.ro/clase',
    images: [
      {
        url: '/images/og-classes.jpg',
        width: 1200,
        height: 630,
        alt: 'Programul claselor de Pilates la Meymoon Studio',
      },
    ],
  },
}

export default function Classes() {
  return (
    <>
      <ClassesHero />
      <ClassTypes />
      <ClassesSchedule />
      <BookingProcess />
    </>
  )
}

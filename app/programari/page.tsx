import { Metadata } from 'next'
import BookingProcess from '@/components/BookingProcess'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Programări - Meymoon Pilates Studio | Rezervă Clasa Ta',
  description: 'Rezervă-ți clasa de Pilates la Meymoon Studio București. Formular simplu de programare pentru clase Mat, Reformer, Somatic Breathwork și antrenamente private.',
  keywords: 'programări pilates București, rezervă clasă pilates, programare pilates, Meymoon studio programări',
  openGraph: {
    title: 'Programări - Meymoon Pilates Studio | Rezervă Clasa Ta',
    description: 'Rezervă-ți clasa de Pilates la Meymoon Studio București. Formular simplu de programare pentru clase Mat, Reformer, Somatic Breathwork și antrenamente private.',
    images: ['/og-booking.jpg'],
  },
}

export default function Booking() {
  return (
    <>
      <BookingProcess />
      <ContactForm />
    </>
  )
}

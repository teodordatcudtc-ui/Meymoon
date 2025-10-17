import { Metadata } from 'next'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Contact - Meymoon Pilates Studio | Programează o ședință gratuită',
  description: 'Contactează Meymoon Pilates Studio pentru programare sau informații. Sună la 0751 901 111 sau vizitează-ne la Strada Negoiu 51, București. Prima ședință gratuită!',
  keywords: 'contact pilates București, programare pilates, telefon pilates studio, adresă pilates sector 3, Meymoon Studio contact',
  openGraph: {
    title: 'Contact - Meymoon Pilates Studio | Programează o ședință gratuită',
    description: 'Contactează Meymoon Pilates Studio pentru programare sau informații. Sună la 0751 901 111 sau vizitează-ne la Strada Negoiu 51, București. Prima ședință gratuită!',
    url: 'https://meymoonstudio.ro/contact',
    images: [
      {
        url: '/images/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Meymoon Pilates Studio',
      },
    ],
  },
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <MapSection />
    </>
  )
}

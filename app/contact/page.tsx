import { Metadata } from 'next'
import ContactInfo from '@/components/ContactInfo'
import MapSection from '@/components/MapSection'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - Meymoon Pilates Studio | Strada Negoiu 51, București',
  description: 'Contactează Meymoon Pilates Studio din București. Telefon: 0751 901 111, Adresă: Strada Negoiu 51. Rezervări, întrebări și informații despre clasele de Pilates.',
  keywords: 'contact pilates București, telefon pilates, adresă studio pilates, rezervări pilates, Meymoon studio contact',
  openGraph: {
    title: 'Contact - Meymoon Pilates Studio | Strada Negoiu 51, București',
    description: 'Contactează Meymoon Pilates Studio din București. Telefon: 0751 901 111, Adresă: Strada Negoiu 51. Rezervări, întrebări și informații despre clasele de Pilates.',
    images: ['/og-contact.jpg'],
  },
}

export default function Contact() {
  return (
    <>
      <ContactInfo />
      <MapSection />
      <ContactForm />
    </>
  )
}

import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Meymoon Pilates Studio - Clase de Pilates și Somatic Breathwork în București',
  description: 'Descoperă beneficiile Pilates și Somatic Breathwork la Meymoon Studio. Clase profesionale în București, Sector 3. Programează o ședință gratuită!',
  keywords: 'pilates București, studio pilates București, Somatic Breathwork București, clase pilates sector 3, pilates personalizat, wellness București',
  authors: [{ name: 'Meymoon Pilates Studio' }],
  creator: 'Meymoon Pilates Studio',
  publisher: 'Meymoon Pilates Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://meymoonstudio.ro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Meymoon Pilates Studio - Clase de Pilates și Somatic Breathwork în București',
    description: 'Descoperă beneficiile Pilates și Somatic Breathwork la Meymoon Studio. Clase profesionale în București, Sector 3. Programează o ședință gratuită!',
    url: 'https://meymoonstudio.ro',
    siteName: 'Meymoon Pilates Studio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Meymoon Pilates Studio - Interior studio modern',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meymoon Pilates Studio - Clase de Pilates și Somatic Breathwork în București',
    description: 'Descoperă beneficiile Pilates și Somatic Breathwork la Meymoon Studio. Clase profesionale în București, Sector 3.',
    images: ['/images/og-image.jpg'],
    creator: '@meymoonstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#906054" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "Meymoon Pilates Studio",
              "description": "Studio de Pilates și Somatic Breathwork în București, Sector 3",
              "url": "https://meymoonstudio.ro",
              "telephone": "+40751901111",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Strada Negoiu 51",
                "addressLocality": "București",
                "postalCode": "031126",
                "addressCountry": "RO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "44.425774803717935",
                "longitude": "26.13108950531052"
              },
              "openingHours": "Mo-Fr 07:00-21:00,Sa 08:00-18:00,Su 09:00-17:00",
              "sameAs": [
                "https://www.instagram.com/meymoonstudio/",
                "https://www.facebook.com/p/MeyMoon-Studio-61558528991097/"
              ],
              "image": "https://meymoonstudio.ro/images/studio-interior.jpg",
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Sari la conținutul principal
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

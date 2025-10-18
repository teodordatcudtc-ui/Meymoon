import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Meymoon Pilates Studio - București | Clase de Pilates Premium',
  description: 'Studio premium de Pilates în București. Clase de Pilates Mat, Reformer, Somatic Breathwork și antrenamente private. Rezervă acum la Strada Negoiu 51.',
  keywords: 'pilates București, studio pilates, clase pilates, reformer pilates, somatic breathwork București, antrenor pilates, pilates privat',
  authors: [{ name: 'Meymoon Pilates Studio' }],
  creator: 'Meymoon Pilates Studio',
  publisher: 'Meymoon Pilates Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://meymoonstudio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Meymoon Pilates Studio - București | Clase de Pilates Premium',
    description: 'Studio premium de Pilates în București. Clase de Pilates Mat, Reformer, Somatic Breathwork și antrenamente private.',
    url: 'https://meymoonstudio.com',
    siteName: 'Meymoon Pilates Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Meymoon Pilates Studio - București',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meymoon Pilates Studio - București | Clase de Pilates Premium',
    description: 'Studio premium de Pilates în București. Clase de Pilates Mat, Reformer, Somatic Breathwork și antrenamente private.',
    images: ['/og-image.jpg'],
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Meymoon Pilates Studio',
  description: 'Studio premium de Pilates în București. Clase de Pilates Mat, Reformer, Somatic Breathwork și antrenamente private.',
  url: 'https://meymoonstudio.com',
  telephone: '+40751901111',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Strada Negoiu 51',
    addressLocality: 'București',
    postalCode: '031126',
    addressCountry: 'RO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.4268,
    longitude: 26.1025,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/meymoonstudio/',
    'https://www.facebook.com/p/MeyMoon-Studio-61558528991097/',
  ],
  priceRange: '$$',
  serviceArea: {
    '@type': 'City',
    name: 'București',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicii Pilates',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pilates Mat',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pilates Reformer',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Somatic Breathwork',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Antrenamente Private',
        },
      },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#906054',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
}

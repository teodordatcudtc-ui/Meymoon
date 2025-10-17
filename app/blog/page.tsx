import { Metadata } from 'next'
import BlogHero from '@/components/BlogHero'
import BlogList from '@/components/BlogList'

export const metadata: Metadata = {
  title: 'Blog - Sfaturi de Wellness și Pilates | Meymoon Studio',
  description: 'Descoperă sfaturi de wellness, tehnici de Pilates și Somatic Breathwork în blogul nostru. Articole pentru o viață mai sănătoasă și echilibrată.',
  keywords: 'blog pilates, sfaturi wellness, tehnici respirație, pilates București, wellness blog, articole pilates',
  openGraph: {
    title: 'Blog - Sfaturi de Wellness și Pilates | Meymoon Studio',
    description: 'Descoperă sfaturi de wellness, tehnici de Pilates și Somatic Breathwork în blogul nostru. Articole pentru o viață mai sănătoasă și echilibrată.',
    url: 'https://meymoonstudio.ro/blog',
    images: [
      {
        url: '/images/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog Meymoon Pilates Studio',
      },
    ],
  },
}

export default function Blog() {
  return (
    <>
      <BlogHero />
      <BlogList />
    </>
  )
}

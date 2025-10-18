import { Metadata } from 'next'
import BlogList from '@/components/BlogList'

export const metadata: Metadata = {
  title: 'Blog - Meymoon Pilates Studio | Sfaturi Wellness și Pilates',
  description: 'Descoperă sfaturi de wellness, tehnici de Pilates și articole despre Somatic Breathwork. Blog-ul nostru te ajută să-ți îmbunătățești stilul de viață.',
  keywords: 'blog pilates București, sfaturi wellness, tehnici pilates, somatic breathwork, stil de viață sănătos, articole pilates',
  openGraph: {
    title: 'Blog - Meymoon Pilates Studio | Sfaturi Wellness și Pilates',
    description: 'Descoperă sfaturi de wellness, tehnici de Pilates și articole despre Somatic Breathwork. Blog-ul nostru te ajută să-ți îmbunătățești stilul de viață.',
    images: ['/og-blog.jpg'],
  },
}

export default function Blog() {
  return (
    <>
      <BlogList />
    </>
  )
}

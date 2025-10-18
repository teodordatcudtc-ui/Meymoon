'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react'

interface Article {
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
  tags: string[]
  content: string
}

interface BlogArticleProps {
  article: Article
}

const BlogArticle = ({ article }: BlogArticleProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Înapoi la Blog
              </Link>
            </motion.div>

            {/* Article Meta */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <div className="flex items-center space-x-4 text-sm text-neutral-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString('ro-RO')}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight"
            >
              {article.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 leading-relaxed mb-8"
            >
              {article.excerpt}
            </motion.p>

            {/* Tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 mb-8"
            >
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </motion.div>

            {/* Share Button */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4"
            >
              <button className="flex items-center space-x-2 text-neutral-600 hover:text-blue-500 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Partajează</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </motion.div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="card p-8"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Despre {article.author}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {article.author} este un antrenor certificat de Pilates cu peste 5 ani de experiență 
                    în domeniul wellness-ului. Specializat în {article.category.toLowerCase()}, 
                    {article.author} își dedică timpul să ajute oamenii să-și găsească echilibrul 
                    prin mișcarea conștientă și respirația conștientă.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-serif font-bold text-neutral-900 text-center mb-12"
            >
              Articole Similare
            </motion.h3>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div
                variants={itemVariants}
                className="card p-6 group hover:scale-105 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-neutral-900 mb-3 group-hover:text-blue-500 transition-colors">
                  Pilates pentru Începători: Ghidul Complet
                </h4>
                <p className="text-neutral-600 mb-4">
                  Tot ce trebuie să știi despre Pilates dacă ești începător. 
                  De la echipament la exerciții de bază.
                </p>
                <Link
                  href="/blog/pilates-pentru-incepatori"
                  className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
                >
                  Citește articolul
                  <ArrowLeft className="ml-1 w-4 h-4 rotate-180" />
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="card p-6 group hover:scale-105 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-neutral-900 mb-3 group-hover:text-blue-500 transition-colors">
                  Cum să reduci stresul prin mișcarea conștientă
                </h4>
                <p className="text-neutral-600 mb-4">
                  Tehnici practice pentru a gestiona stresul zilnic prin 
                  Pilates și Somatic Breathwork.
                </p>
                <Link
                  href="/blog/reducerea-stresului-prin-miscare"
                  className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
                >
                  Citește articolul
                  <ArrowLeft className="ml-1 w-4 h-4 rotate-180" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center text-white"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-serif font-bold mb-4"
            >
              Gata să încerci practica?
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-lg mb-6 opacity-90 max-w-2xl mx-auto"
            >
              Rezervă-ți prima clasă gratuită și descoperă personal beneficiile 
              Pilates-ului și Somatic Breathwork-ului.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/programari"
                className="bg-white text-blue-500 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
              >
                Rezervă Prima Clasă Gratuită
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-500 px-8 py-4 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center"
              >
                Contactează-ne
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </article>
  )
}

export default BlogArticle

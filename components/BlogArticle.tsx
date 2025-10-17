'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react'
import Link from 'next/link'

interface BlogArticleProps {
  article: {
    title: string
    excerpt: string
    author: string
    date: string
    readTime: string
    category: string
    image: string
    content: string
  }
}

const BlogArticle = ({ article }: BlogArticleProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-primary-50 to-accent-50 py-16"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-accent-600 hover:text-accent-700 transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Înapoi la blog
            </Link>

            <div className="mb-6">
              <span className="bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-primary-600 mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-primary-500">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime} de citit</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Article Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-16"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <p className="text-primary-600 text-lg">Imagine articol</p>
                <p className="text-primary-500 text-sm">{article.category}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Article Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="pb-16"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Author Bio */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-primary-50 py-16"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-primary-800 mb-2">
                    {article.author}
                  </h3>
                  <p className="text-accent-600 font-medium mb-4">
                    {article.category === 'Somatic Breathwork' ? 'Specialist Somatic Breathwork' : 
                     article.category === 'Pilates' ? 'Instructor Pilates' : 'Specialist Wellness'}
                  </p>
                  <p className="text-primary-600 leading-relaxed">
                    {article.author} este un specialist certificat cu peste 5 ani de experiență în domeniul wellness-ului. 
                    Dedicat să-și împărtășească cunoștințele și să ajute oamenii să-și îmbunătățească calitatea vieții 
                    prin metode științifice și abordări holistice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Related Articles */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="py-16"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-playfair font-bold text-primary-800 text-center mb-12">
              Articole similare
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl h-48 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">P</span>
                    </div>
                    <p className="text-primary-600 text-sm">Pilates</p>
                  </div>
                </div>
                <h4 className="text-xl font-playfair font-semibold text-primary-800 mb-3 group-hover:text-accent-600 transition-colors duration-300">
                  5 tehnici de respirație pentru relaxare profundă
                </h4>
                <p className="text-primary-600 text-sm mb-4">
                  Descoperă tehnici simple de respirație pe care le poți practica acasă pentru a reduce stresul.
                </p>
                <Link
                  href="/blog/tehnici-de-respiratie-pentru-relaxare"
                  className="text-accent-600 font-medium hover:text-accent-700 transition-colors duration-300"
                >
                  Citește mai mult →
                </Link>
              </div>

              <div className="card p-6 group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl h-48 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">W</span>
                    </div>
                    <p className="text-primary-600 text-sm">Wellness</p>
                  </div>
                </div>
                <h4 className="text-xl font-playfair font-semibold text-primary-800 mb-3 group-hover:text-accent-600 transition-colors duration-300">
                  Reducerea stresului prin mișcare conștientă
                </h4>
                <p className="text-primary-600 text-sm mb-4">
                  Învață cum mișcarea conștientă poate fi un instrument puternic pentru gestionarea stresului.
                </p>
                <Link
                  href="/blog/reducerea-stresului-prin-mișcare-conștientă"
                  className="text-accent-600 font-medium hover:text-accent-700 transition-colors duration-300"
                >
                  Citește mai mult →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bg-gradient-to-r from-accent-600 to-accent-700 py-16"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Gata să începi călătoria ta de wellness?
            </h3>
            <p className="text-xl text-accent-100 mb-8">
              Programează o ședință gratuită și descoperă cum te poate ajuta Pilates și 
              Somatic Breathwork să-ți îmbunătățești viața.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-accent-600 px-8 py-4 rounded-2xl font-medium hover:bg-accent-50 transition-colors duration-300"
              >
                Programează ședința gratuită
              </Link>
              <Link
                href="/servicii"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-accent-600 transition-colors duration-300"
              >
                Vezi serviciile
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default BlogArticle

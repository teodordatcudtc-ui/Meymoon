'use client'

import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

const BlogHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-accent-50 via-white to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <BookOpen className="w-4 h-4 fill-current" />
            <span>Blog & Resurse</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight"
          >
            Resurse
            <span className="block text-gradient">Educaționale</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Descoperă articole despre Pilates, Somatic Breathwork, wellness și 
            sfaturi pentru o viață mai sănătoasă și echilibrată.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogHero
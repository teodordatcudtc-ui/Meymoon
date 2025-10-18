'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const ServicesHero = () => {
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
            <Star className="w-4 h-4 fill-current" />
            <span>Serviciile Noastre</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight"
          >
            Servicii
            <span className="block text-gradient">Premium</span>
            <span className="block">de Pilates</span>
          </motion.h1>

        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHero
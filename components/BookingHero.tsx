'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const BookingHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-secondary-50 via-white to-accent-50">
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
            className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Calendar className="w-4 h-4 fill-current" />
            <span>Rezervă o Ședință</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight"
          >
            Programează-te
            <span className="block text-gradient">Astăzi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Completează formularul de mai jos pentru a rezerva o ședință de Pilates 
            sau Somatic Breathwork. Te vom contacta în cel mai scurt timp.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default BookingHero
'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const AboutHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-primary-100">
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
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Heart className="w-4 h-4 fill-current" />
            <span>Despre Meymoon Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight"
          >
            Povestea
            <span className="block text-gradient">Noastră</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            De peste 5 ani, ne dedicăm să aducem armonia și echilibrul în viața 
            clienților noștri prin mișcarea conștientă și respirația conștientă.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutHero
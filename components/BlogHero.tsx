'use client'

import { motion } from 'framer-motion'
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react'

const BlogHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-accent-200/30 rounded-full blur-2xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-60 h-60 bg-primary-200/20 rounded-full blur-2xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-3 bg-accent-100 text-accent-700 px-6 py-3 rounded-full mb-6"
          >
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">Blog Wellness</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-playfair font-bold text-primary-800 mb-6"
          >
            Blogul nostru de{' '}
            <span className="text-gradient">wellness</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Descoperă sfaturi de wellness, tehnici de Pilates, metode de respirație 
            și multe altele în blogul nostru dedicat sănătății și echilibrului personal.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary-800 mb-2">20+</div>
            <div className="text-primary-600">Articole de wellness</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary-800 mb-2">2x</div>
            <div className="text-primary-600">Articole noi pe lună</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary-800 mb-2">5+</div>
            <div className="text-primary-600">Experți în wellness</div>
          </div>
        </motion.div>

        {/* Featured Article Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <span>Articol recomandat</span>
              </div>
              <h2 className="text-2xl font-playfair font-bold text-primary-800 mb-4">
                Beneficiile Somatic Breathwork pentru sănătatea mentală
              </h2>
              <p className="text-primary-600 mb-6 leading-relaxed">
                Descoperă cum tehnica de respirație conștientă poate transforma 
                sănătatea ta mentală și poate reduce stresul zilnic într-un mod natural.
              </p>
              <div className="flex items-center space-x-4 text-sm text-primary-500 mb-6">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>15 Decembrie 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>Alexandru Popescu</span>
                </div>
              </div>
              <a
                href="/blog/beneficiile-somatic-breathwork"
                className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors duration-300 group"
              >
                Citește articolul complet
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">SB</span>
                </div>
                <p className="text-green-600 text-lg">Somatic Breathwork</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogHero

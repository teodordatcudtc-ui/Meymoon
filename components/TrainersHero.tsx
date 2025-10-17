'use client'

import { motion } from 'framer-motion'
import { Users, Award, Heart, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const TrainersHero = () => {
  const stats = [
    { icon: Users, value: '4', label: 'Instructori certificați' },
    { icon: Award, value: '15+', label: 'Certificări profesionale' },
    { icon: Heart, value: '500+', label: 'Clienți transformați' },
    { icon: Star, value: '4.9', label: 'Rating mediu' }
  ]

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
            <Users className="w-5 h-5" />
            <span className="font-medium">Echipa noastră</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-playfair font-bold text-primary-800 mb-6"
          >
            Cunoaște{' '}
            <span className="text-gradient">instructorii</span>
            <br />
            noștri
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Echipa noastră de instructori certificați este pasionată de wellness și dedicată 
            să te ajute să-ți atingi obiectivele de sănătate și fitness prin metode științifice 
            și abordări personalizate.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="#instructori"
              className="btn-primary text-lg px-8 py-4 group"
            >
              Vezi echipa completă
              <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="btn-secondary text-lg px-8 py-4"
            >
              Programează o ședință
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary-800 mb-2">{stat.value}</div>
              <div className="text-primary-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto shadow-xl"
        >
          <h2 className="text-2xl font-playfair font-bold text-primary-800 text-center mb-8">
            Ce ne face speciali
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">Certificări profesionale</h3>
              <p className="text-sm text-primary-600">
                Toți instructorii noștri sunt certificați de organizații internaționale recunoscute
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">Pasiune pentru wellness</h3>
              <p className="text-sm text-primary-600">
                Ne dedicăm cu pasiune transformării vieții prin mișcare conștientă
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">Abordare personalizată</h3>
              <p className="text-sm text-primary-600">
                Fiecare program este adaptat nevoilor și obiectivelor individuale
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrainersHero

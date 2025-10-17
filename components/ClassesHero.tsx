'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ClassesHero = () => {
  const stats = [
    { icon: Calendar, value: '7', label: 'Zile pe săptămână' },
    { icon: Clock, value: '12+', label: 'Clase zilnic' },
    { icon: Users, value: '500+', label: 'Clienți activi' },
    { icon: Star, value: '4.9', label: 'Rating mediu' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-playfair font-bold text-primary-800 mb-6"
          >
            Clase și{' '}
            <span className="text-gradient">program</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Descoperă programul nostru variat de clase de Pilates și Somatic Breathwork. 
            Fiecare clasă este condusă de instructori certificați și adaptată nevoilor tale.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="#program"
              className="btn-primary text-lg px-8 py-4 group"
            >
              Vezi programul complet
              <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="btn-secondary text-lg px-8 py-4"
            >
              Rezervă o clasă
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
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

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">Prima ședință gratuită</h3>
              <p className="text-primary-600 text-sm">
                Toți clienții noi pot face prima ședință gratuită pentru a descoperi stilul nostru.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">Rezervare ușoară</h3>
              <p className="text-primary-600 text-sm">
                Rezervă-ți locul la clasele noastre în doar câteva click-uri prin sistemul nostru online.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">Flexibilitate</h3>
              <p className="text-primary-600 text-sm">
                Poți anula sau reprograma o clasă cu cel puțin 4 ore înainte de începerea acesteia.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClassesHero

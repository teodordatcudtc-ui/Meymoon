'use client'

import { motion } from 'framer-motion'
import { Heart, Zap, Wind, Users, Target, Clock } from 'lucide-react'

const ServicesHero = () => {
  const services = [
    { icon: Heart, name: 'Pilates Mat', color: 'from-pink-500 to-rose-500' },
    { icon: Zap, name: 'Pilates Reformer', color: 'from-blue-500 to-indigo-500' },
    { icon: Wind, name: 'Somatic Breathwork', color: 'from-green-500 to-emerald-500' },
    { icon: Users, name: 'Clase de Grup', color: 'from-purple-500 to-violet-500' },
    { icon: Target, name: 'Personalizat', color: 'from-orange-500 to-amber-500' },
    { icon: Clock, name: 'Pentru Seniori', color: 'from-teal-500 to-cyan-500' }
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
            Serviciile{' '}
            <span className="text-gradient">noastre</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed"
          >
            Descoperă gama completă de servicii de wellness și fitness pe care le oferim. 
            Fiecare program este conceput să-ți aducă beneficii concrete și să te ajute 
            să-ți atingi obiectivele de sănătate.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center group"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-sm font-medium text-primary-800 group-hover:text-accent-600 transition-colors duration-300">
                {service.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto shadow-xl">
            <h2 className="text-2xl font-playfair font-bold text-primary-800 mb-4">
              Gata să începi transformarea?
            </h2>
            <p className="text-primary-600 mb-6">
              Programează o ședință de probă gratuită și descoperă serviciul 
              care ți se potrivește cel mai bine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary"
              >
                Programează ședința gratuită
              </a>
              <a
                href="/clase"
                className="btn-secondary"
              >
                Vezi programul
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHero

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent-200 rounded-full opacity-20 animate-float animation-delay-400"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-secondary-200 rounded-full opacity-20 animate-float animation-delay-800"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>Studio Premium de Pilates în București</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-neutral-900 mb-6 leading-tight"
            >
              Descoperă
              <span className="block text-gradient">Armonia</span>
              <span className="block">Prin Mișcare</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed max-w-2xl"
            >
              Învață să-ți conectezi mintea cu corpul prin Pilates și Somatic Breathwork. 
              Clase mici, antrenori certificați, atmosferă calmă și profesională.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            >
              <Link
                href="/programari"
                className="btn-primary text-base px-6 py-3 inline-flex items-center justify-center group whitespace-nowrap"
              >
                Rezervă Prima Ta Clasă
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/servicii"
                className="btn-secondary text-base px-6 py-3 inline-flex items-center justify-center group whitespace-nowrap"
              >
                <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                Explorează Serviciile
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-1">500+</div>
                <div className="text-sm text-neutral-600">Clienți Mulțumiți</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-1">5+</div>
                <div className="text-sm text-neutral-600">Ani Experiență</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-1">15+</div>
                <div className="text-sm text-neutral-600">Clase Săptămânal</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Pilates studio interior cu echipament profesional"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Meymoon Studio</h4>
                    <p className="text-sm text-neutral-600">Strada Negoiu 51, București</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-400 rounded-full opacity-20 animate-float animation-delay-600"></div>
          </motion.div>
        </div>
      </div>

      {/* Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="hero-wave"></div>
      </div>
    </section>
  )
}

export default Hero

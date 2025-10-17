'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Play, ArrowRight } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 gradient-bg">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-50 to-accent-100"
          animate={{
            backgroundPosition: [
              '0% 0%',
              '100% 100%',
              '0% 0%',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-accent-200/30 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-primary-300/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-playfair font-bold text-primary-800 mb-6"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          >
            Descoperă{' '}
            <span className="text-gradient">echilibrul</span>
            <br />
            prin mișcare
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-primary-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Pilates și Somatic Breathwork pentru o viață mai sănătoasă, 
            mai echilibrată și mai plină de energie.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Link
              href="/contact"
              className="btn-primary text-lg px-8 py-4 group"
            >
              <Calendar className="w-5 h-5 inline mr-2" />
              Programează o ședință
              <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/clase"
              className="btn-secondary text-lg px-8 py-4 group"
            >
              <Play className="w-5 h-5 inline mr-2" />
              Vezi programul
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">500+</div>
              <div className="text-primary-600">Clienți mulțumiți</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">5+</div>
              <div className="text-primary-600">Ani experiență</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">100%</div>
              <div className="text-primary-600">Rezultate garantate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

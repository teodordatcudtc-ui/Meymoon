'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Award, Target } from 'lucide-react'

const AboutHero = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary-800 mb-6">
                Despre{' '}
                <span className="text-gradient">Meymoon</span>
              </h1>
              <p className="text-xl text-primary-600 leading-relaxed">
                Suntem mai mult decât un studio de Pilates. Suntem o comunitate dedicată 
                transformării vieții prin mișcare conștientă, respirație controlată și 
                conexiunea profundă cu propriul corp.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Pasiune</h3>
                <p className="text-sm text-primary-600">Pentru wellness și transformare</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Comunitate</h3>
                <p className="text-sm text-primary-600">Sprijin și încurajare</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Excelență</h3>
                <p className="text-sm text-primary-600">Instrucțiuni de calitate</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Rezultate</h3>
                <p className="text-sm text-primary-600">Transformări reale</p>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-primary-200 to-accent-200 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-4xl">M</span>
                  </div>
                  <p className="text-primary-600 text-lg">Studio interior</p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-800">500+</div>
                    <div className="text-xs text-primary-600">Clienți fericiți</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-800">5+</div>
                    <div className="text-xs text-primary-600">Ani experiență</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero

'use client'

import { motion } from 'framer-motion'
import { Target, Heart, Users, Star } from 'lucide-react'

const Mission = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-6">
                Misiunea noastră
              </h2>
              <p className="text-xl text-primary-600 leading-relaxed mb-6">
                Să democratizăm accesul la wellness autentic prin metode științifice 
                și abordări holistice, creând o comunitate în care fiecare persoană 
                poate descoperi și cultiva potențialul său interior.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">Obiectivul nostru</h3>
                  <p className="text-primary-600">
                    Să devenim centrul de referință pentru Pilates și Somatic Breathwork 
                    în București, oferind servicii de cea mai înaltă calitate.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">Viziunea noastră</h3>
                  <p className="text-primary-600">
                    Un viitor în care fiecare persoană trăiește în armonie cu propriul corp, 
                    cu încredere în abilitățile sale și cu o conexiune profundă cu sine.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">Impactul nostru</h3>
                  <p className="text-primary-600">
                    Să transformăm vieți prin mișcare conștientă, creând o comunitate 
                    puternică de oameni care se sprijină reciproc în călătoria lor de wellness.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Visual */}
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary-200 to-accent-200 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-primary-600 text-lg">Spațiu dedicat wellness-ului</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-primary-50 rounded-2xl">
                <div className="text-3xl font-bold text-accent-600 mb-2">500+</div>
                <div className="text-primary-600 text-sm">Lives transformate</div>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-2xl">
                <div className="text-3xl font-bold text-accent-600 mb-2">5+</div>
                <div className="text-primary-600 text-sm">Ani de experiență</div>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-2xl">
                <div className="text-3xl font-bold text-accent-600 mb-2">4.9</div>
                <div className="text-primary-600 text-sm">Rating mediu</div>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-2xl">
                <div className="text-3xl font-bold text-accent-600 mb-2">100%</div>
                <div className="text-primary-600 text-sm">Dedicare</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">Alătură-te comunității noastre</h3>
              <p className="text-accent-100 text-sm mb-4">
                Descoperă cum poți transforma viața ta prin mișcare conștientă
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-accent-600 px-6 py-3 rounded-xl font-medium hover:bg-accent-50 transition-colors duration-300"
              >
                Începe acum
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Mission

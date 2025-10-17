'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock, Phone } from 'lucide-react'

const MapSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-6">
            Locația noastră
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Ne găsești în inima Bucureștiului, la Strada Negoiu 51, Sector 3. 
            Studio este ușor accesibil cu transportul public și cu mașina.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-primary-100 rounded-3xl p-4 shadow-xl">
              <div className="rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2327.8067771712017!2d26.13108950531052!3d44.425774803717935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ffe20e18488b%3A0x2266d9644cd76f38!2sMeymoon%20Pilates%20Studio!5e0!3m2!1sen!2sro!4v1760708428584!5m2!1sen!2sro"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locația Meymoon Pilates Studio"
                  className="w-full h-96 rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">
                    Adresa noastră
                  </h3>
                  <p className="text-primary-700 leading-relaxed">
                    Strada Negoiu 51<br />
                    București 031126<br />
                    Sector 3, România
                  </p>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">
                    Cum să ajungi
                  </h3>
                  <div className="space-y-2 text-sm text-primary-600">
                    <p><strong>Metrou:</strong> Stația Piața Victoriei (10 min mers)</p>
                    <p><strong>Autobuz:</strong> Linia 131, 205 (stația în apropiere)</p>
                    <p><strong>Mașină:</strong> Parcare disponibilă în zonă</p>
                    <p><strong>Taxi/Uber:</strong> Accesibil din toată Bucureștiul</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">
                    Program de lucru
                  </h3>
                  <div className="space-y-1 text-sm text-primary-600">
                    <p><strong>Luni - Vineri:</strong> 07:00 - 21:00</p>
                    <p><strong>Sâmbătă:</strong> 08:00 - 18:00</p>
                    <p><strong>Duminică:</strong> 09:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">
                Ai întrebări despre locație?
              </h3>
              <p className="text-accent-100 text-sm mb-4">
                Sună-ne pentru direcții sau informații despre accesibilitate.
              </p>
              <a
                href="tel:0751901111"
                className="bg-white text-accent-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-50 transition-colors duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Sună acum
              </a>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-100 to-accent-100 rounded-3xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-playfair font-bold text-primary-800 mb-6">
              Informații despre accesibilitate
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-primary-800 mb-2">Accesibilitate</h4>
                <p className="text-sm text-primary-600">
                  Studio este complet accesibil pentru persoanele cu dizabilități. 
                  Avem lift și facilități adaptate.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-800 mb-2">Parcare</h4>
                <p className="text-sm text-primary-600">
                  Parcare gratuită disponibilă în fața studioului. 
                  Spațiu rezervat pentru clienți.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-800 mb-2">Transport public</h4>
                <p className="text-sm text-primary-600">
                  Ușor accesibil cu metroul (Piața Victoriei) și autobuzul. 
                  Doar 5-10 minute mers pe jos.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MapSection

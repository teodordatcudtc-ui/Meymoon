'use client'

import { motion } from 'framer-motion'
import { Heart, Zap, Wind, Users, Target, Clock } from 'lucide-react'
import Link from 'next/link'

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Pilates Mat',
      description: 'Exerciții fundamentale de Pilates pe covoraș, perfecte pentru începători și avansați. Îmbunătățește flexibilitatea, forța musculară și postura.',
      features: ['Flexibilitate', 'Forță musculară', 'Postură corectă', 'Concentrare'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Wind,
      title: 'Somatic Breathwork',
      description: 'Tehnici de respirație conștientă pentru eliberarea stresului și anxietății. Somatic Breathwork te ajută să conectezi mintea cu corpul prin respirație controlată.',
      features: ['Eliberare stres', 'Conștientizare corporală', 'Relaxare profundă', 'Echilibru mental'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Clase de Grup',
      description: 'Sesiuni energizante în grup mic pentru o experiență socială și motivațională. Perfecte pentru cei care preferă dinamica de grup.',
      features: ['Motivație de grup', 'Energie comună', 'Socializare', 'Preț accesibil'],
      color: 'from-purple-500 to-violet-500'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-6">
            Serviciile noastre
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Descoperă gama completă de servicii de wellness și fitness pe care le oferim 
            pentru a-ți transforma viața prin mișcare conștientă și respirație controlată.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-playfair font-semibold text-primary-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-primary-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <span className="text-sm text-primary-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/servicii"
                className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors duration-300 group-hover:translate-x-1"
              >
                Află mai multe
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Gata să începi transformarea?
            </h3>
            <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
              Programează o ședință de probă gratuită și descoperă cum te poate ajuta 
              Pilates și Somatic Breathwork să-ți îmbunătățești calitatea vieții.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-accent-600 px-8 py-4 rounded-2xl font-medium hover:bg-accent-50 transition-colors duration-300"
              >
                Programează ședința gratuită
              </Link>
              <Link
                href="/clase"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-accent-600 transition-colors duration-300"
              >
                Vezi programul complet
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

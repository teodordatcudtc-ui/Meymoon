'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Award, Shield, Lightbulb, Target } from 'lucide-react'

const Values = () => {
  const values = [
    {
      icon: Heart,
      title: 'Pasiune autentică',
      description: 'Ne dedicăm cu pasiune transformării vieții prin mișcare conștientă. Fiecare sesiune este o oportunitate de a te conecta cu propriul corp și de a descoperi potențialul tău interior.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Users,
      title: 'Comunitate suportivă',
      description: 'Cream un spațiu sigur și primitor unde fiecare persoană se simte acceptată și încurajată. Comunitatea noastră este construită pe respect, înțelegere și sprijin reciproc.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Award,
      title: 'Excelență profesională',
      description: 'Toți instructorii noștri sunt certificați și se perfecționează constant. Ne angajăm să oferim instrucțiuni de cea mai înaltă calitate, adaptate nevoilor individuale.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Shield,
      title: 'Siguranță și încredere',
      description: 'Siguranța ta este prioritatea noastră. Fiecare exercițiu este adaptat nivelului tău de fitness, iar progresul se face întotdeauna în ritmul tău natural.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'Inovație și adaptare',
      description: 'Continuăm să învățăm și să ne adaptăm la nevoile comunității noastre. Integrăm tehnici moderne cu metodele clasice de Pilates și Somatic Breathwork.',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: Target,
      title: 'Rezultate măsurabile',
      description: 'Ne concentrăm pe rezultate concrete și măsurabile. Fiecare program este conceput să-ți aducă beneficii vizibile în sănătatea și calitatea vieții tale.',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-6">
            Valorile noastre
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Acestea sunt principiile care ne ghidează în fiecare zi și care fac din 
            Meymoon Studio un spațiu special pentru transformarea personală.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-playfair font-semibold text-primary-800 mb-4">
                {value.title}
              </h3>
              
              <p className="text-primary-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Angajamentul nostru față de tine
            </h3>
            <p className="text-xl text-accent-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ne angajăm să-ți oferim o experiență transformatoare, sigură și personalizată. 
              Fiecare sesiune este o oportunitate de a te apropia de versiunea cea mai bună a ta.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-accent-100 text-sm">Personalizat</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-accent-100 text-sm">Sprijin</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">0%</div>
                <div className="text-accent-100 text-sm">Judecăți</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">∞</div>
                <div className="text-accent-100 text-sm">Pasiune</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Values

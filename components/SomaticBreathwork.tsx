'use client'

import { motion } from 'framer-motion'
import { Wind, Heart, Brain, Shield, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const SomaticBreathwork = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Eliberarea stresului',
      description: 'Tehnici de respirație care activează sistemul nervos parasimpatic, reducând nivelul de cortizol și stres.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Brain,
      title: 'Conștientizare corporală',
      description: 'Înveți să asculți semnalele corpului tău și să răspunzi la nevoile sale în mod conștient.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Shield,
      title: 'Echilibru mental',
      description: 'Practica regulată îmbunătățește starea de spirit, reduce anxietatea și crește reziliența.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Îmbunătățirea somnului',
      description: 'Tehnici de respirație care pregătesc corpul pentru somn profund și reparator.',
      color: 'from-purple-500 to-violet-500'
    }
  ]

  const techniques = [
    'Respirația diafragmatică',
    'Respirația în 4 timpi',
    'Respirația alternativă',
    'Respirația de eliberare',
    'Meditația în mișcare',
    'Scanning corporal'
  ]

  const testimonials = [
    {
      name: 'Ana Maria',
      text: 'Somatic Breathwork m-a ajutat să gestionez anxietatea mult mai bine. După doar câteva sesiuni, mă simt mult mai calmă și centrată.',
      role: 'Manager'
    },
    {
      name: 'Mihai',
      text: 'Tehnica lui Alexandru este extraordinară. Am învățat să mă conectez cu corpul meu într-un mod pe care nu credeam că este posibil.',
      role: 'Antreprenor'
    },
    {
      name: 'Elena',
      text: 'Somnul meu s-a îmbunătățit dramatic după ce am început Somatic Breathwork. Recomand cu toată încrederea!',
      role: 'Profesoară'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-3 bg-accent-100 text-accent-700 px-6 py-3 rounded-full mb-6">
            <Wind className="w-5 h-5" />
            <span className="font-medium">Somatic Breathwork</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-6">
            Descoperă puterea{' '}
            <span className="text-gradient">respirației conștiente</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-4xl mx-auto leading-relaxed">
            Somatic Breathwork este o practică transformatoare care combină tehnici de respirație 
            conștientă cu mișcare somatică pentru a crea o conexiune profundă între minte și corp. 
            Înveți să folosești respirația ca instrument de vindecare și echilibru.
          </p>
        </motion.div>

        {/* What is Somatic Breathwork */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-playfair font-bold text-primary-800">
              Ce este Somatic Breathwork?
            </h3>
            <div className="space-y-4 text-primary-600 leading-relaxed">
              <p>
                Somatic Breathwork este o abordare holistică a wellness-ului care se concentrează 
                pe conexiunea dintre respirație, mișcare și conștientizare corporală. Prin tehnici 
                specializate de respirație, înveți să accesezi stările de relaxare profundă și 
                să eliberezi tensiunile acumulate în corp.
              </p>
              <p>
                Practica noastră combină elemente din yoga, meditație și terapie somatică pentru 
                a crea o experiență completă de vindecare și transformare. Fiecare sesiune este 
                ghidată de un instructor certificat care te însoțește pas cu pas în călătoria 
                de reconectare cu propriul corp.
              </p>
            </div>
            <div className="bg-accent-50 rounded-2xl p-6">
              <h4 className="font-semibold text-primary-800 mb-3">Tehnici incluse:</h4>
              <div className="grid grid-cols-2 gap-2">
                {techniques.map((technique, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent-600 flex-shrink-0" />
                    <span className="text-sm text-primary-700">{technique}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wind className="w-12 h-12 text-white" />
                </div>
                <p className="text-primary-600 text-lg">Spațiu dedicat</p>
                <p className="text-primary-500 text-sm">Somatic Breathwork</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-playfair font-bold text-primary-800 text-center mb-12">
            Beneficiile Somatic Breathwork
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-primary-800 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-primary-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-playfair font-bold text-primary-800 text-center mb-12">
            Ce spun clienții noștri
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <p className="text-primary-600 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                    <span className="text-accent-600 font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-primary-800">{testimonial.name}</div>
                    <div className="text-sm text-primary-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Gata să începi călătoria?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Descoperă puterea transformatoare a Somatic Breathwork într-o sesiune 
              ghidată de specialistul nostru Alexandru Popescu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-2xl font-medium hover:bg-green-50 transition-colors duration-300 inline-flex items-center justify-center"
              >
                Programează sesiunea
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/clase"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-green-600 transition-colors duration-300"
              >
                Vezi programul
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SomaticBreathwork

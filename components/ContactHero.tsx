'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ContactHero = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '0751 901 111',
      href: 'tel:0751901111',
      description: 'Sună-ne pentru programare rapidă'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@meymoonstudio.ro',
      href: 'mailto:contact@meymoonstudio.ro',
      description: 'Trimite-ne un mesaj'
    },
    {
      icon: MapPin,
      title: 'Adresă',
      value: 'Strada Negoiu 51, București 031126',
      href: 'https://maps.google.com/?q=Strada+Negoiu+51,+București+031126',
      description: 'Vizitează-ne la studio'
    },
    {
      icon: Clock,
      title: 'Program',
      value: 'L-V: 07:00-21:00, S: 08:00-18:00, D: 09:00-17:00',
      href: null,
      description: 'Programul nostru de lucru'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20">
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
            Contactează-ne
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Suntem aici să te ajutăm să începi călătoria ta de wellness. 
            Contactează-ne pentru programare, întrebări sau pentru a rezerva 
            prima ta ședință gratuită.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="tel:0751901111"
              className="btn-primary text-lg px-8 py-4 group"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Sună acum: 0751 901 111
            </a>
            <Link
              href="#formular"
              className="btn-secondary text-lg px-8 py-4 group"
            >
              Trimite mesaj
              <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-primary-800 mb-2">
                {info.title}
              </h3>
              
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-accent-600 font-medium hover:text-accent-700 transition-colors duration-300 block mb-2"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-primary-800 font-medium mb-2">
                  {info.value}
                </p>
              )}
              
              <p className="text-sm text-primary-600">
                {info.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 bg-gradient-to-r from-accent-600 to-accent-700 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-playfair font-bold mb-4">
            Prima ședință este gratuită!
          </h3>
          <p className="text-accent-100 mb-6 max-w-2xl mx-auto">
            Descoperă beneficiile Pilates și Somatic Breathwork fără nicio obligație. 
            Programează ședința ta gratuită de probă astăzi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0751901111"
              className="bg-white text-accent-600 px-8 py-4 rounded-2xl font-medium hover:bg-accent-50 transition-colors duration-300"
            >
              Programează acum
            </a>
            <Link
              href="/clase"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-accent-600 transition-colors duration-300"
            >
              Vezi programul
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero

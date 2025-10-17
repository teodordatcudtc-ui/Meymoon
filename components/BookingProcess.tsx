'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

const BookingProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Alege clasa',
      description: 'Browsea programul nostru și alege clasa care ți se potrivește cel mai bine.',
      icon: Calendar,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      number: '02',
      title: 'Rezervă locul',
      description: 'Completează formularul de rezervare sau contactează-ne direct.',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '03',
      title: 'Confirmă rezervarea',
      description: 'Primești confirmarea prin email și SMS cu toate detaliile.',
      icon: CheckCircle,
      color: 'from-purple-500 to-violet-500'
    },
    {
      number: '04',
      title: 'Vino la clasă',
      description: 'Prezintă-te cu 10 minute înainte de începerea clasei.',
      icon: Clock,
      color: 'from-orange-500 to-amber-500'
    }
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefon',
      description: 'Sună-ne pentru rezervare rapidă',
      contact: '0751 901 111',
      action: 'Sună acum',
      href: 'tel:0751901111',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Trimite-ne un email cu detaliile',
      contact: 'contact@meymoonstudio.ro',
      action: 'Trimite email',
      href: 'mailto:contact@meymoonstudio.ro',
      color: 'from-blue-500 to-indigo-500'
    }
  ]

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
            Cum să rezervi
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Rezervarea este simplă și rapidă. Urmărește acești pași pentru a-ți 
            asigura locul la clasa dorită.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-playfair font-semibold text-primary-800 mb-3">
                {step.title}
              </h3>
              <p className="text-primary-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-playfair font-bold text-primary-800 text-center mb-12">
            Contactează-ne pentru rezervare
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-2xl font-playfair font-semibold text-primary-800 mb-3">
                  {method.title}
                </h4>
                <p className="text-primary-600 mb-4">
                  {method.description}
                </p>
                <p className="text-lg font-medium text-accent-600 mb-6">
                  {method.contact}
                </p>
                
                <a
                  href={method.href}
                  className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors duration-300 group-hover:translate-x-1"
                >
                  {method.action}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-100 to-accent-100 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-playfair font-bold text-primary-800 text-center mb-8">
            Informații importante pentru rezervare
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-primary-800 mb-2">Anulare</h4>
              <p className="text-sm text-primary-600">
                Poți anula cu cel puțin 4 ore înainte de începerea clasei
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-primary-800 mb-2">Prima ședință</h4>
              <p className="text-sm text-primary-600">
                Prima ședință este gratuită pentru toți clienții noi
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-primary-800 mb-2">Echipamente</h4>
              <p className="text-sm text-primary-600">
                Toate echipamentele sunt incluse în preț
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-primary-800 mb-2">Programare</h4>
              <p className="text-sm text-primary-600">
                Rezervă cu cel puțin 2 ore înainte de începerea clasei
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Gata să începi?
            </h3>
            <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
              Programează prima ta ședință gratuită și descoperă 
              cum te poate ajuta Pilates să-ți îmbunătățești viața.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-accent-600 px-8 py-4 rounded-2xl font-medium hover:bg-accent-50 transition-colors duration-300"
              >
                Programează ședința gratuită
              </Link>
              <Link
                href="/servicii"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-accent-600 transition-colors duration-300"
              >
                Vezi serviciile
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BookingProcess

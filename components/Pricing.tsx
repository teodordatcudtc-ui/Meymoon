'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Check, Star, ArrowRight, Clock, Users } from 'lucide-react'

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const pricingPlans = [
    {
      name: 'Clasă Simplă',
      description: 'Perfect pentru începători sau cei care doresc să încerce Pilates.',
      price: '80',
      period: 'RON/clasă',
      features: [
        '1 clasă de Pilates Mat',
        'Durată: 60 minute',
        'Grup mic (max 8 persoane)',
        'Echipament inclus',
        'Instrucțiuni detaliate',
        'Atmosferă relaxantă',
      ],
      popular: false,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
    },
    {
      name: 'Abonament Lunar',
      description: 'Cel mai popular pentru practicanții regulari de Pilates.',
      price: '280',
      period: 'RON/lună',
      features: [
        '8 clase de Pilates Mat',
        'Durată: 60 minute/clasă',
        'Grupuri mici (max 8 persoane)',
        'Echipament inclus',
        'Instrucțiuni personalizate',
        'Flexibilitate în programare',
        'Acces la toate clasele',
        'Suport online',
      ],
      popular: true,
      color: 'bg-primary-500',
      bgColor: 'bg-primary-50',
      textColor: 'text-primary-700',
    },
    {
      name: 'Abonament Premium',
      description: 'Pentru cei care doresc acces complet la toate serviciile.',
      price: '450',
      period: 'RON/lună',
      features: [
        '12 clase de Pilates Mat',
        '4 clase de Reformer',
        '2 sesiuni Somatic Breathwork',
        'Durată: 60-90 minute/clasă',
        'Grupuri mici (max 6 persoane)',
        'Echipament premium inclus',
        'Instrucțiuni personalizate',
        'Flexibilitate maximă',
        'Acces la toate clasele',
        'Suport online și offline',
        'Consultanță gratuită',
      ],
      popular: false,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
    },
  ]

  const additionalServices = [
    {
      name: 'Pilates Reformer',
      price: '120 RON/clasă',
      description: 'Clase pe aparatul Reformer pentru o experiență intensivă',
    },
    {
      name: 'Somatic Breathwork',
      price: '100 RON/sesiune',
      description: 'Tehnici de respirație conștientă pentru relaxare profundă',
    },
    {
      name: 'Antrenament Privat',
      price: '200 RON/sesiune',
      description: 'Sesiuni one-on-one personalizate pentru rezultate optime',
    },
    {
      name: 'Workshop Special',
      price: '150 RON/sesiune',
      description: 'Sesiuni tematice și workshop-uri de weekend',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4" />
            <span>Prețuri și Pachete</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6"
          >
            Alege
            <span className="block text-gradient">Pachetul Potrivit</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            Oferim pachete flexibile adaptate nevoilor și bugetului fiecăruia. 
            Prima clasă este gratuită pentru clienții noi!
          </motion.p>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative group ${
                plan.popular ? 'md:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Cel mai popular
                  </div>
                </div>
              )}
              
              <div className={`card p-8 h-full ${
                plan.popular 
                  ? 'border-2 border-primary-500 shadow-2xl' 
                  : 'group-hover:scale-105'
              } transition-all duration-300`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-500">
                      {plan.price}
                    </span>
                    <span className="text-neutral-600 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/programari"
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary-500 text-white hover:bg-primary-600 transform hover:scale-105'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  Alege Pachetul
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-serif font-bold text-neutral-900 text-center mb-12"
          >
            Servicii Suplimentare
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                className="card p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  {service.name}
                </h4>
                <div className="text-2xl font-bold text-primary-500 mb-3">
                  {service.price}
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 text-center mb-8">
              Întrebări Frecvente
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  Pot să anulez o clasă?
                </h4>
                <p className="text-neutral-600">
                  Da, poți anula o clasă cu cel puțin 24 de ore înainte fără costuri suplimentare.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  Ce trebuie să aduc la clasă?
                </h4>
                <p className="text-neutral-600">
                  Doar haine confortabile și o sticlă de apă. Echipamentul este inclus în preț.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  Pot să schimb nivelul clasei?
                </h4>
                <p className="text-neutral-600">
                  Da, poți schimba nivelul clasei oricând, în funcție de progresul tău.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  Există reducere pentru studenți?
                </h4>
                <p className="text-neutral-600">
                  Da, oferim 10% reducere pentru studenți cu carnet de student valid.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Gata să începi călătoria ta de wellness?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Rezervă-ți prima clasă gratuită și descoperă beneficiile Pilates-ului 
              într-un mediu profesional și relaxant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programari"
                className="bg-white text-primary-500 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
              >
                Rezervă Prima Clasă Gratuită
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center"
              >
                Contactează-ne
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing

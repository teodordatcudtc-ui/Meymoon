'use client'

import { motion } from 'framer-motion'
import { Heart, Zap, Wind, Users, Target, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ServicesList = () => {
  const services = [
    {
      id: 'pilates-mat',
      icon: Heart,
      title: 'Pilates Mat',
      subtitle: 'Fundamentele Pilates pe covoraș',
      description: 'Exerciții fundamentale de Pilates pe covoraș, perfecte pentru începători și avansați. Îmbunătățește flexibilitatea, forța musculară și postura prin mișcare controlată și respirație conștientă.',
      duration: '60 minute',
      level: 'Toate nivelurile',
      maxStudents: 12,
      benefits: [
        'Îmbunătățirea flexibilității',
        'Dezvoltarea forței musculare',
        'Corectarea posturii',
        'Creșterea concentrării',
        'Reducerea stresului',
        'Îmbunătățirea coordonării'
      ],
      features: [
        'Instrucțiuni detaliate',
        'Adaptare la nivelul individual',
        'Echipamente de calitate',
        'Grupuri mici pentru atenție personalizată'
      ],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      id: 'pilates-reformer',
      icon: Zap,
      title: 'Pilates Reformer',
      subtitle: 'Experiență intensă cu aparatul Reformer',
      description: 'Clase intensive cu aparatul Reformer pentru o experiență de Pilates completă. Dezvoltă forța, controlul și coordonarea într-un mod sigur și eficient, cu rezistență variabilă.',
      duration: '60 minute',
      level: 'Intermediar - Avansat',
      maxStudents: 8,
      benefits: [
        'Dezvoltarea forței musculare',
        'Îmbunătățirea controlului',
        'Creșterea coordonării',
        'Siguranță în exerciții',
        'Rezistență variabilă',
        'Corectarea posturii'
      ],
      features: [
        'Aparate Reformer profesionale',
        'Instrucțiuni personalizate',
        'Grupuri foarte mici',
        'Progresie graduală'
      ],
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      id: 'somatic-breathwork',
      icon: Wind,
      title: 'Somatic Breathwork',
      subtitle: 'Tehnici de respirație conștientă',
      description: 'Tehnici de respirație conștientă pentru eliberarea stresului și anxietății. Somatic Breathwork te ajută să conectezi mintea cu corpul prin respirație controlată și mișcare somatică.',
      duration: '45 minute',
      level: 'Toate nivelurile',
      maxStudents: 10,
      benefits: [
        'Eliberarea stresului',
        'Conștientizarea corporală',
        'Relaxare profundă',
        'Echilibru mental',
        'Îmbunătățirea somnului',
        'Reducerea anxietății'
      ],
      features: [
        'Tehnici de respirație specializate',
        'Meditație ghidată',
        'Spațiu calm și relaxant',
        'Instrucțiuni personalizate'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      id: 'clase-grup',
      icon: Users,
      title: 'Clase de Grup',
      subtitle: 'Energie comună și motivație',
      description: 'Sesiuni energizante în grup mic pentru o experiență socială și motivațională. Perfecte pentru cei care preferă dinamica de grup și energia comună în practica de wellness.',
      duration: '60 minute',
      level: 'Toate nivelurile',
      maxStudents: 15,
      benefits: [
        'Motivație de grup',
        'Energie comună',
        'Socializare',
        'Preț accesibil',
        'Varietate de exerciții',
        'Sprijin reciproc'
      ],
      features: [
        'Grupuri diverse',
        'Instrucțiuni clare',
        'Echipamente complete',
        'Program variat'
      ],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50'
    },
    {
      id: 'pilates-personalizat',
      icon: Target,
      title: 'Pilates Personalizat',
      subtitle: 'Program adaptat nevoilor tale',
      description: 'Sesiuni one-on-one adaptate nevoilor tale specifice. Ideal pentru recuperare după accidentări, obiective foarte specifice sau pentru cei care preferă atenția individuală.',
      duration: '60 minute',
      level: 'Personalizat',
      maxStudents: 1,
      benefits: [
        'Program personalizat',
        'Atenție individuală',
        'Recuperare ghidată',
        'Obiective specifice',
        'Progresie rapidă',
        'Flexibilitate de program'
      ],
      features: [
        'Instrucțiuni personalizate',
        'Program adaptat',
        'Flexibilitate de orar',
        'Echipamente specializate'
      ],
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50 to-amber-50'
    },
    {
      id: 'pilates-seniori',
      icon: Clock,
      title: 'Pilates pentru Seniori',
      subtitle: 'Mobilitate și echilibru pentru vârsta a treia',
      description: 'Clase special adaptate pentru vârsta a treia, cu accent pe mobilitate, echilibru și prevenirea osteoporozei. Abordare delicată și sigură pentru sănătatea articulară.',
      duration: '45 minute',
      level: 'Începător',
      maxStudents: 10,
      benefits: [
        'Mobilitate articulară',
        'Îmbunătățirea echilibrului',
        'Prevenirea osteoporozei',
        'Siguranță în exerciții',
        'Îmbunătățirea somnului',
        'Reducerea durerilor'
      ],
      features: [
        'Exerciții adaptate',
        'Instrucțiuni clare',
        'Progresie graduală',
        'Spațiu sigur'
      ],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50'
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
            Servicii complete de wellness
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Fiecare serviciu este conceput cu atenție la detalii pentru a-ți oferi 
            cea mai bună experiență de wellness și pentru a-ți ajuta să-ți atingi obiectivele.
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-playfair font-bold text-primary-800">
                      {service.title}
                    </h3>
                    <p className="text-accent-600 font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-primary-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-primary-50 rounded-xl p-4">
                    <Clock className="w-6 h-6 text-accent-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-primary-800">{service.duration}</div>
                  </div>
                  <div className="bg-primary-50 rounded-xl p-4">
                    <Award className="w-6 h-6 text-accent-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-primary-800">{service.level}</div>
                  </div>
                  <div className="bg-primary-50 rounded-xl p-4">
                    <Users className="w-6 h-6 text-accent-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-primary-800">Max {service.maxStudents}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-3">Beneficii:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent-600 flex-shrink-0" />
                          <span className="text-sm text-primary-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-3">Caracteristici:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent-600 flex-shrink-0" />
                          <span className="text-sm text-primary-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors duration-300 group"
                >
                  Programează o ședință
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className={`w-full h-80 bg-gradient-to-br ${service.bgColor} rounded-3xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-center">
                    <div className={`w-24 h-24 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <service.icon className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-primary-600 text-lg">Spațiu dedicat</p>
                    <p className="text-primary-500 text-sm">{service.title}</p>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 bg-white/50 rounded-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesList

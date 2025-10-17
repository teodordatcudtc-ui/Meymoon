'use client'

import { motion } from 'framer-motion'
import { Heart, Zap, Wind, Users, Target, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ClassTypes = () => {
  const classTypes = [
    {
      id: 'pilates-mat',
      icon: Heart,
      title: 'Pilates Mat',
      description: 'Exerciții fundamentale de Pilates pe covoraș, perfecte pentru toate nivelurile.',
      duration: '60 min',
      level: 'Toate nivelurile',
      maxStudents: 12,
      benefits: [
        'Îmbunătățirea flexibilității',
        'Dezvoltarea forței musculare',
        'Corectarea posturii',
        'Creșterea concentrării'
      ],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      schedule: 'Luni-Vineri: 07:00, 09:00, 18:00, 19:30 | Sâmbătă: 09:00, 12:00 | Duminică: 10:00, 15:00'
    },
    {
      id: 'pilates-reformer',
      icon: Zap,
      title: 'Pilates Reformer',
      description: 'Clase intensive cu aparatul Reformer pentru o experiență completă de Pilates.',
      duration: '60 min',
      level: 'Intermediar - Avansat',
      maxStudents: 8,
      benefits: [
        'Dezvoltarea forței musculare',
        'Îmbunătățirea controlului',
        'Creșterea coordonării',
        'Siguranță în exerciții'
      ],
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50',
      schedule: 'Marți, Joi, Vineri: 18:30 | Sâmbătă: 16:00'
    },
    {
      id: 'somatic-breathwork',
      icon: Wind,
      title: 'Somatic Breathwork',
      description: 'Tehnici de respirație conștientă pentru eliberarea stresului și anxietății.',
      duration: '45 min',
      level: 'Toate nivelurile',
      maxStudents: 10,
      benefits: [
        'Eliberarea stresului',
        'Conștientizarea corporală',
        'Relaxare profundă',
        'Echilibru mental'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      schedule: 'Luni: 19:30 | Miercuri: 09:30 | Joi: 20:00 | Sâmbătă: 10:30 | Duminică: 11:30'
    },
    {
      id: 'pilates-seniori',
      icon: Clock,
      title: 'Pilates pentru Seniori',
      description: 'Clase special adaptate pentru vârsta a treia, cu accent pe mobilitate și echilibru.',
      duration: '45 min',
      level: 'Începător',
      maxStudents: 10,
      benefits: [
        'Mobilitate articulară',
        'Îmbunătățirea echilibrului',
        'Prevenirea osteoporozei',
        'Siguranță în exerciții'
      ],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50',
      schedule: 'Luni, Marți, Joi, Vineri: 09:00 | Sâmbătă: 12:00 | Duminică: 15:00'
    },
    {
      id: 'pilates-personalizat',
      icon: Target,
      title: 'Pilates Personalizat',
      description: 'Sesiuni one-on-one adaptate nevoilor tale specifice și obiectivelor personale.',
      duration: '60 min',
      level: 'Personalizat',
      maxStudents: 1,
      benefits: [
        'Program personalizat',
        'Atenție individuală',
        'Recuperare ghidată',
        'Obiective specifice'
      ],
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50 to-amber-50',
      schedule: 'Programare individuală - contactează-ne pentru disponibilitate'
    },
    {
      id: 'clase-grup',
      icon: Users,
      title: 'Clase de Grup',
      description: 'Sesiuni energizante în grup mic pentru o experiență socială și motivațională.',
      duration: '60 min',
      level: 'Toate nivelurile',
      maxStudents: 15,
      benefits: [
        'Motivație de grup',
        'Energie comună',
        'Socializare',
        'Preț accesibil'
      ],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50',
      schedule: 'Marți: 10:00, 20:00 | Miercuri: 07:30 | Joi: 10:00 | Vineri: 20:00'
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
            Tipuri de clase
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Descoperă varietatea claselor noastre, fiecare adaptată pentru a-ți oferi 
            cea mai bună experiență de wellness și să-ți ajute să-ți atingi obiectivele.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classTypes.map((classType, index) => (
            <motion.div
              key={classType.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 group hover:scale-105 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${classType.color} rounded-xl flex items-center justify-center`}>
                  <classType.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-primary-800">
                    {classType.title}
                  </h3>
                  <p className="text-sm text-accent-600">{classType.duration} • {classType.level}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-primary-600 mb-6 leading-relaxed">
                {classType.description}
              </p>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-primary-50 rounded-lg">
                  <Clock className="w-5 h-5 text-accent-600 mx-auto mb-1" />
                  <div className="text-sm font-medium text-primary-800">{classType.duration}</div>
                </div>
                <div className="text-center p-3 bg-primary-50 rounded-lg">
                  <Users className="w-5 h-5 text-accent-600 mx-auto mb-1" />
                  <div className="text-sm font-medium text-primary-800">Max {classType.maxStudents}</div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary-800 mb-3">Beneficii:</h4>
                <ul className="space-y-2">
                  {classType.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent-600 flex-shrink-0" />
                      <span className="text-sm text-primary-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Schedule */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary-800 mb-2">Program:</h4>
                <p className="text-xs text-primary-600 leading-relaxed">
                  {classType.schedule}
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="w-full bg-accent-600 text-white py-3 rounded-xl font-medium hover:bg-accent-700 transition-colors duration-300 text-center inline-flex items-center justify-center group-hover:scale-105"
              >
                Rezervă acum
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
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
            <h3 className="text-2xl font-playfair font-bold text-primary-800 mb-4">
              Informații importante
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-primary-800 mb-2">Rezervare</h4>
                <p className="text-sm text-primary-600">
                  Rezervă-ți locul cu cel puțin 2 ore înainte de începerea clasei. 
                  Poți anula cu cel puțin 4 ore înainte.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-800 mb-2">Echipamente</h4>
                <p className="text-sm text-primary-600">
                  Toate echipamentele sunt incluse în preț. Doar adu-ți prosopul, 
                  apa și hainele de sport.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-800 mb-2">Prima ședință</h4>
                <p className="text-sm text-primary-600">
                  Prima ședință este gratuită pentru toți clienții noi. 
                  Contactează-ne pentru a programa.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClassTypes

'use client'

import { motion } from 'framer-motion'
import { Award, Star, Users, Heart, Instagram, Facebook, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const TrainersList = () => {
  const trainers = [
    {
      id: 'maria-ionescu',
      name: 'Maria Ionescu',
      role: 'Instructor Principal Pilates',
      experience: '8 ani experiență',
      specialties: ['Pilates Mat', 'Pilates Reformer', 'Rehabilitare'],
      bio: 'Maria este instructor certificat în Pilates cu peste 8 ani de experiență. Specializată în recuperarea post-traumatică și îmbunătățirea posturii, Maria a ajutat sute de clienți să-și redescopere mobilitatea și sănătatea. Abordarea sa empatică și tehnică precisă fac din fiecare sesiune o experiență transformatoare.',
      image: '/images/trainers/maria-ionescu.jpg',
      rating: 4.9,
      students: 250,
      certifications: ['PMA Certified', 'Polestar Pilates', 'Anatomy Trains'],
      social: {
        instagram: 'https://instagram.com/maria_pilates',
        facebook: 'https://facebook.com/maria.pilates'
      },
      achievements: [
        'Instructorul anului 2023',
        'Peste 250 de clienți transformați',
        'Specialist în recuperare post-traumatică'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'alexandru-popescu',
      name: 'Alexandru Popescu',
      role: 'Specialist Somatic Breathwork',
      experience: '6 ani experiență',
      specialties: ['Somatic Breathwork', 'Meditație', 'Mindfulness'],
      bio: 'Alexandru este specialist în Somatic Breathwork și meditație, cu o abordare holistică a wellness-ului. Tehnica sa unică combină respirația conștientă cu mișcarea pentru a crea o experiență transformatoare. Cu o înțelegere profundă a conexiunii minte-corp, Alexandru ghidează clienții către o sănătate mentală îmbunătățită.',
      image: '/images/trainers/alexandru-popescu.jpg',
      rating: 4.8,
      students: 180,
      certifications: ['Somatic Breathwork Institute', 'Mindfulness Teacher', 'Yoga Alliance'],
      social: {
        instagram: 'https://instagram.com/alex_breathwork',
        facebook: 'https://facebook.com/alexandru.breathwork'
      },
      achievements: [
        'Specialist certificat Somatic Breathwork',
        'Peste 180 de clienți ajutați',
        'Workshop-uri internaționale'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'elena-stoica',
      name: 'Elena Stoica',
      role: 'Instructor Pilates Seniori',
      experience: '5 ani experiență',
      specialties: ['Pilates Seniori', 'Mobilitate Articulară', 'Echilibru'],
      bio: 'Elena s-a specializat în lucrul cu seniorii, dezvoltând programe adaptate pentru îmbunătățirea mobilității și echilibrului. Abordarea sa empatică și răbdătoare face din fiecare sesiune o experiență plăcută și benefică. Elena înțelege provocările specifice vârstei a treia și adaptează fiecare exercițiu pentru siguranță și eficiență maximă.',
      image: '/images/trainers/elena-stoica.jpg',
      rating: 4.9,
      students: 120,
      certifications: ['Senior Fitness Specialist', 'Pilates for Seniors', 'Fall Prevention'],
      social: {
        instagram: 'https://instagram.com/elena_senior_pilates',
        facebook: 'https://facebook.com/elena.senior.pilates'
      },
      achievements: [
        'Specialist în fitness pentru seniori',
        'Programe de prevenire a căderilor',
        'Peste 120 de seniori activi'
      ],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'cristian-marin',
      name: 'Cristian Marin',
      role: 'Instructor Pilates Reformer',
      experience: '7 ani experiență',
      specialties: ['Pilates Reformer', 'Pilates Personalizat', 'Performance'],
      bio: 'Cristian este specialist în Pilates Reformer și lucrul personalizat. Cu o abordare tehnică precisă și motivațională, ajută clienții să-și atingă obiectivele de fitness prin metoda Pilates. Experiența sa vastă în lucrul cu atleți și persoane cu nevoi speciale îl face un instructor versatil și eficient.',
      image: '/images/trainers/cristian-marin.jpg',
      rating: 4.7,
      students: 200,
      certifications: ['Balanced Body Reformer', 'Pilates Method Alliance', 'Personal Training'],
      social: {
        instagram: 'https://instagram.com/cristian_reformer',
        facebook: 'https://facebook.com/cristian.reformer'
      },
      achievements: [
        'Specialist în Pilates Reformer',
        'Peste 200 de clienți transformați',
        'Instrucțiuni pentru atleți'
      ],
      color: 'from-blue-500 to-indigo-500'
    }
  ]

  return (
    <section id="instructori" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-6">
            Echipa noastră de instructori
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Fiecare instructor din echipa noastră aduce experiență, pasiune și 
            certificări profesionale pentru a-ți oferi cea mai bună experiență de wellness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 group hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Trainer Image */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary-200 to-accent-200 rounded-3xl flex items-center justify-center mx-auto md:mx-0">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-3xl">
                          {trainer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <p className="text-primary-600 text-sm">Foto profesională</p>
                    </div>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-playfair font-bold text-primary-800 mb-2">
                      {trainer.name}
                    </h3>
                    <p className="text-accent-600 font-medium mb-2">{trainer.role}</p>
                    <p className="text-sm text-primary-600">{trainer.experience}</p>
                  </div>

                  {/* Rating and Stats */}
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-semibold text-primary-800">{trainer.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-primary-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{trainer.students} clienți</span>
                    </div>
                    <div className="flex items-center space-x-1 text-primary-600">
                      <Award className="w-4 h-4" />
                      <span className="text-sm">{trainer.certifications.length} certificări</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-primary-600 leading-relaxed mb-6">
                    {trainer.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary-800 mb-3">Specializări:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty, specIndex) => (
                        <span
                          key={specIndex}
                          className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary-800 mb-3">Realizări:</h4>
                    <ul className="space-y-1">
                      {trainer.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center space-x-2 text-sm text-primary-600">
                          <Heart className="w-3 h-3 text-accent-600 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3 mb-6">
                    <a
                      href={trainer.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center hover:bg-accent-100 transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4 text-primary-600" />
                    </a>
                    <a
                      href={trainer.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center hover:bg-accent-100 transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4 text-primary-600" />
                    </a>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/traineri/${trainer.id}`}
                    className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Vezi profilul complet
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
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
              Vrei să lucrezi cu echipa noastră?
            </h3>
            <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
              Programează o ședință de probă cu oricare dintre instructorii noștri 
              și descoperă stilul de predare care ți se potrivește cel mai bine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-accent-600 px-8 py-4 rounded-2xl font-medium hover:bg-accent-50 transition-colors duration-300"
              >
                Programează ședința de probă
              </Link>
              <Link
                href="/clase"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-accent-600 transition-colors duration-300"
              >
                Vezi programul claselor
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrainersList

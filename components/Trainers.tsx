'use client'

import { motion } from 'framer-motion'
import { Award, Star, Users, Heart, Instagram, Facebook } from 'lucide-react'
import Link from 'next/link'

const Trainers = () => {
  const trainers = [
    {
      id: 'maria-ionescu',
      name: 'Maria Ionescu',
      role: 'Instructor Principal Pilates',
      experience: '8 ani experiență',
      specialties: ['Pilates Mat', 'Pilates Reformer', 'Rehabilitare'],
      bio: 'Maria este instructor certificat în Pilates cu peste 8 ani de experiență. Specializată în recuperarea post-traumatică și îmbunătățirea posturii, Maria a ajutat sute de clienți să-și redescopere mobilitatea și sănătatea.',
      image: '/images/trainers/maria-ionescu.jpg',
      rating: 4.9,
      students: 250,
      certifications: ['PMA Certified', 'Polestar Pilates', 'Anatomy Trains'],
      social: {
        instagram: 'https://instagram.com/maria_pilates',
        facebook: 'https://facebook.com/maria.pilates'
      }
    },
    {
      id: 'alexandru-popescu',
      name: 'Alexandru Popescu',
      role: 'Specialist Somatic Breathwork',
      experience: '6 ani experiență',
      specialties: ['Somatic Breathwork', 'Meditație', 'Mindfulness'],
      bio: 'Alexandru este specialist în Somatic Breathwork și meditație, cu o abordare holistică a wellness-ului. Tehnica sa unică combină respirația conștientă cu mișcarea pentru a crea o experiență transformatoare.',
      image: '/images/trainers/alexandru-popescu.jpg',
      rating: 4.8,
      students: 180,
      certifications: ['Somatic Breathwork Institute', 'Mindfulness Teacher', 'Yoga Alliance'],
      social: {
        instagram: 'https://instagram.com/alex_breathwork',
        facebook: 'https://facebook.com/alexandru.breathwork'
      }
    },
    {
      id: 'elena-stoica',
      name: 'Elena Stoica',
      role: 'Instructor Pilates Seniori',
      experience: '5 ani experiență',
      specialties: ['Pilates Seniori', 'Mobilitate Articulară', 'Echilibru'],
      bio: 'Elena s-a specializat în lucrul cu seniorii, dezvoltând programe adaptate pentru îmbunătățirea mobilității și echilibrului. Abordarea sa empatică și răbdătoare face din fiecare sesiune o experiență plăcută și benefică.',
      image: '/images/trainers/elena-stoica.jpg',
      rating: 4.9,
      students: 120,
      certifications: ['Senior Fitness Specialist', 'Pilates for Seniors', 'Fall Prevention'],
      social: {
        instagram: 'https://instagram.com/elena_senior_pilates',
        facebook: 'https://facebook.com/elena.senior.pilates'
      }
    },
    {
      id: 'cristian-marin',
      name: 'Cristian Marin',
      role: 'Instructor Pilates Reformer',
      experience: '7 ani experiență',
      specialties: ['Pilates Reformer', 'Pilates Personalizat', 'Performance'],
      bio: 'Cristian este specialist în Pilates Reformer și lucrul personalizat. Cu o abordare tehnică precisă și motivațională, ajută clienții să-și atingă obiectivele de fitness prin metoda Pilates.',
      image: '/images/trainers/cristian-marin.jpg',
      rating: 4.7,
      students: 200,
      certifications: ['Balanced Body Reformer', 'Pilates Method Alliance', 'Personal Training'],
      social: {
        instagram: 'https://instagram.com/cristian_reformer',
        facebook: 'https://facebook.com/cristian.reformer'
      }
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
            Echipa noastră
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Cunoaște instructorii noștri certificați, pasionați de wellness și dedicați 
            să te ajute să-ți atingi obiectivele de sănătate și fitness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 group hover:scale-105 transition-all duration-300 flex flex-col h-full"
            >
              {/* Trainer Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <div className="w-full h-64 bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-2xl">
                        {trainer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <p className="text-primary-600 text-sm">Foto profesională</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-primary-800">{trainer.rating}</span>
                </div>
              </div>

              {/* Trainer Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-playfair font-semibold text-primary-800 mb-1">
                  {trainer.name}
                </h3>
                <p className="text-accent-600 font-medium mb-2">{trainer.role}</p>
                <p className="text-sm text-primary-600">{trainer.experience}</p>
              </div>

              {/* Stats */}
              <div className="flex justify-center space-x-6 mb-4 text-center">
                <div>
                  <div className="flex items-center justify-center space-x-1 text-primary-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">{trainer.students}</span>
                  </div>
                  <p className="text-xs text-primary-500">studenți</p>
                </div>
                <div>
                  <div className="flex items-center justify-center space-x-1 text-primary-600">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">{trainer.certifications.length}</span>
                  </div>
                  <p className="text-xs text-primary-500">certificări</p>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-primary-700 mb-2">Specializări:</h4>
                <div className="flex flex-wrap gap-1">
                  {trainer.specialties.map((specialty, specIndex) => (
                    <span
                      key={specIndex}
                      className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio Preview */}
              <p className="text-sm text-primary-600 mb-4 line-clamp-3 flex-grow">
                {trainer.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-3 mb-4">
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
                className="block w-full text-center bg-accent-600 text-white py-3 rounded-xl font-medium hover:bg-accent-700 transition-colors duration-300 min-h-[48px] flex items-center justify-center mt-auto"
              >
                Vezi profilul complet
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
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Vrei să lucrezi cu echipa noastră?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
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

export default Trainers

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, CheckCircle, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ClassesSchedule = () => {
  const [selectedDay, setSelectedDay] = useState(0)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedClass, setSelectedClass] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    class: '',
    time: '',
    day: ''
  })

  const days = ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică']

  const schedule = [
    { day: 'Luni', classes: [
      { time: '07:00', class: 'Pilates Mat', instructor: 'Maria Ionescu', available: true, spots: 8 },
      { time: '09:00', class: 'Pilates pentru Seniori', instructor: 'Elena Stoica', available: true, spots: 6 },
      { time: '18:00', class: 'Pilates Mat', instructor: 'Maria Ionescu', available: false, spots: 0 },
      { time: '19:30', class: 'Somatic Breathwork', instructor: 'Alexandru Popescu', available: true, spots: 4 }
    ]},
    { day: 'Marți', classes: [
      { time: '08:00', class: 'Pilates Mat', instructor: 'Maria Ionescu', available: true, spots: 10 },
      { time: '10:00', class: 'Clase de Grup', instructor: 'Cristian Marin', available: true, spots: 12 },
      { time: '18:30', class: 'Pilates Reformer', instructor: 'Cristian Marin', available: true, spots: 5 },
      { time: '20:00', class: 'Pilates Mat', instructor: 'Maria Ionescu', available: true, spots: 8 }
    ]},
    { day: 'Miercuri', classes: [
      { time: '07:30', class: 'Pilates Mat', instructor: 'Maria Ionescu', available: true, spots: 9 },
      { time: '09:30', class: 'Somatic Breathwork', instructor: 'Alexandru Popescu', available: true, spots: 6 },
      { time: '18:00', class: 'Pilates Reformer', instructor: 'Cristian Marin', available: true, spots: 7 },
      { time: '19:30', class: 'Pilates Mat', instructor: 'Maria Ionescu', available: false, spots: 0 }
    ]},
    { day: 'Joi', classes: [
      { time: '08:00', class: 'Pilates pentru Seniori', instructor: 'Elena Stoica', available: true, spots: 8 },
      { time: '10:00', class: 'Clase de Grup', instructor: 'Cristian Marin', available: true, spots: 10 },
      { time: '18:30', class: 'Pilates Reformer', instructor: 'Cristian Marin', available: true, spots: 6 },
      { time: '20:00', class: 'Somatic Breathwork', instructor: 'Alexandru Popescu', available: true, spots: 5 }
    ]},
    { day: 'Vineri', classes: [
      { time: '07:00', class: 'Pilates Mat', instructor: 'Maria Ionescu', available: true, spots: 7 },
      { time: '09:00', class: 'Pilates pentru Seniori', instructor: 'Elena Stoica', available: true, spots: 9 },
      { time: '18:00', class: 'Pilates Reformer', instructor: 'Cristian Marin', available: true, spots: 4 },
      { time: '19:30', class: 'Pilates Mat', instructor: 'Maria Ionescu', available: true, spots: 11 }
    ]},
    { day: 'Sâmbătă', classes: [
      { time: '09:00', class: 'Pilates Mat', instructor: 'Maria Ionescu', available: true, spots: 8 },
      { time: '10:30', class: 'Somatic Breathwork', instructor: 'Alexandru Popescu', available: true, spots: 7 },
      { time: '12:00', class: 'Pilates pentru Seniori', instructor: 'Elena Stoica', available: true, spots: 5 },
      { time: '16:00', class: 'Pilates Reformer', instructor: 'Cristian Marin', available: true, spots: 6 }
    ]},
    { day: 'Duminică', classes: [
      { time: '10:00', class: 'Pilates Mat', instructor: 'Maria Ionescu', available: true, spots: 9 },
      { time: '11:30', class: 'Somatic Breathwork', instructor: 'Alexandru Popescu', available: true, spots: 8 },
      { time: '15:00', class: 'Pilates pentru Seniori', instructor: 'Elena Stoica', available: true, spots: 7 }
    ]}
  ]

  const handleBooking = (className: string, time: string, day: string) => {
    setSelectedClass(`${className} - ${time}`)
    setFormData(prev => ({ ...prev, class: className, time, day }))
    setIsBookingOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking data:', formData)
    alert('Mulțumim pentru rezervare! Te vom contacta în curând pentru confirmare.')
    setIsBookingOpen(false)
    setFormData({ name: '', phone: '', email: '', class: '', time: '', day: '' })
  }

  return (
    <section id="program" className="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-6">
            Programul săptămânii
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Alege ziua și clasa potrivită pentru tine. Toate clasele sunt conduse de 
            instructori certificați și adaptate nevoilor tale.
          </p>
        </motion.div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {days.map((day, index) => (
            <button
              key={day}
              onClick={() => setSelectedDay(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedDay === index
                  ? 'bg-accent-600 text-white shadow-lg'
                  : 'bg-white text-primary-700 hover:bg-accent-50 hover:text-accent-700'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Table */}
        <motion.div
          key={selectedDay}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-playfair font-bold text-primary-800 mb-8 text-center">
            {schedule[selectedDay].day}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schedule[selectedDay].classes.map((cls, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  cls.available
                    ? 'border-primary-200 hover:border-accent-300 hover:shadow-lg cursor-pointer'
                    : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                }`}
                onClick={() => cls.available && handleBooking(cls.class, cls.time, schedule[selectedDay].day)}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-800 mb-2">{cls.time}</div>
                  <h4 className="text-lg font-semibold text-primary-800 mb-2">{cls.class}</h4>
                  <p className="text-sm text-accent-600 mb-3">{cls.instructor}</p>
                  
                  {cls.available ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-1 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">{cls.spots} locuri libere</span>
                      </div>
                      <button className="w-full bg-accent-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-accent-700 transition-colors duration-300">
                        Rezervă
                      </button>
                    </div>
                  ) : (
                    <div className="text-gray-500 text-sm">
                      Complet
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Booking Modal */}
        {isBookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsBookingOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-playfair font-semibold text-primary-800">
                  Rezervă o clasă
                </h3>
                <button
                  onClick={() => setIsBookingOpen(false)}
                  className="p-2 hover:bg-primary-100 rounded-lg transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-primary-600" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Numele complet
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Clasa selectată
                  </label>
                  <input
                    type="text"
                    value={selectedClass}
                    readOnly
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl bg-primary-50 text-primary-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Confirmă rezervarea
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}

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
              Nu găsești clasa potrivită?
            </h3>
            <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
              Contactează-ne pentru program personalizat sau pentru a programa 
              o ședință de probă gratuită.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-accent-600 px-8 py-4 rounded-2xl font-medium hover:bg-accent-50 transition-colors duration-300 inline-flex items-center justify-center"
              >
                Contactează-ne
                <ArrowRight className="w-5 h-5 ml-2" />
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

export default ClassesSchedule

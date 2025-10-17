'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, Users, X, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const Classes = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedClass, setSelectedClass] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    class: '',
    time: ''
  })

  const classes = [
    { id: 'pilates-mat', name: 'Pilates Mat', duration: '60 min', level: 'Toate nivelurile', maxStudents: 12 },
    { id: 'reformer', name: 'Pilates Reformer', duration: '60 min', level: 'Intermediar', maxStudents: 8 },
    { id: 'breathwork', name: 'Somatic Breathwork', duration: '45 min', level: 'Toate nivelurile', maxStudents: 10 },
    { id: 'seniors', name: 'Pilates pentru Seniori', duration: '45 min', level: 'Începător', maxStudents: 10 },
    { id: 'personal', name: 'Pilates Personalizat', duration: '60 min', level: 'Personalizat', maxStudents: 1 }
  ]

  const schedule = [
    { day: 'Luni', classes: [
      { time: '07:00', class: 'Pilates Mat', available: true },
      { time: '09:00', class: 'Pilates pentru Seniori', available: true },
      { time: '18:00', class: 'Pilates Reformer', available: false },
      { time: '19:30', class: 'Somatic Breathwork', available: true }
    ]},
    { day: 'Marți', classes: [
      { time: '08:00', class: 'Pilates Mat', available: true },
      { time: '10:00', class: 'Pilates pentru Seniori', available: true },
      { time: '18:30', class: 'Pilates Reformer', available: true },
      { time: '20:00', class: 'Pilates Mat', available: true }
    ]},
    { day: 'Miercuri', classes: [
      { time: '07:30', class: 'Pilates Mat', available: true },
      { time: '09:30', class: 'Somatic Breathwork', available: true },
      { time: '18:00', class: 'Pilates Reformer', available: true },
      { time: '19:30', class: 'Pilates Mat', available: false }
    ]},
    { day: 'Joi', classes: [
      { time: '08:00', class: 'Pilates pentru Seniori', available: true },
      { time: '10:00', class: 'Pilates Mat', available: true },
      { time: '18:30', class: 'Pilates Reformer', available: true },
      { time: '20:00', class: 'Somatic Breathwork', available: true }
    ]},
    { day: 'Vineri', classes: [
      { time: '07:00', class: 'Pilates Mat', available: true },
      { time: '09:00', class: 'Pilates pentru Seniori', available: true },
      { time: '18:00', class: 'Pilates Reformer', available: true },
      { time: '19:30', class: 'Pilates Mat', available: true }
    ]},
    { day: 'Sâmbătă', classes: [
      { time: '09:00', class: 'Pilates Mat', available: true },
      { time: '10:30', class: 'Somatic Breathwork', available: true },
      { time: '12:00', class: 'Pilates pentru Seniori', available: true },
      { time: '16:00', class: 'Pilates Reformer', available: true }
    ]},
    { day: 'Duminică', classes: [
      { time: '10:00', class: 'Pilates Mat', available: true },
      { time: '11:30', class: 'Somatic Breathwork', available: true },
      { time: '15:00', class: 'Pilates pentru Seniori', available: true }
    ]}
  ]

  const handleBooking = (className: string, time: string) => {
    setSelectedClass(`${className} - ${time}`)
    setFormData(prev => ({ ...prev, class: className, time }))
    setIsBookingOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Booking data:', formData)
    alert('Mulțumim pentru rezervare! Te vom contacta în curând pentru confirmare.')
    setIsBookingOpen(false)
    setFormData({ name: '', phone: '', email: '', class: '', time: '' })
  }

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
            Programul nostru
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Alege clasa potrivită pentru tine din programul nostru variat. 
            Toate clasele sunt conduse de instructori certificați și adaptate nevoilor tale.
          </p>
        </motion.div>

        {/* Classes Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {classes.map((cls, index) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="text-xl font-playfair font-semibold text-primary-800 mb-3">
                {cls.name}
              </h3>
              <div className="space-y-2 text-primary-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-accent-500" />
                  <span>{cls.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-accent-500" />
                  <span>Max {cls.maxStudents} persoane</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-500" />
                  <span>{cls.level}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schedule Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary-50 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-playfair font-semibold text-primary-800 mb-8 text-center">
            Program săptămânal
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary-200">
                  <th className="text-left py-4 px-2 font-semibold text-primary-700">Ziua</th>
                  <th className="text-left py-4 px-2 font-semibold text-primary-700">07:00-08:00</th>
                  <th className="text-left py-4 px-2 font-semibold text-primary-700">09:00-10:00</th>
                  <th className="text-left py-4 px-2 font-semibold text-primary-700">18:00-19:00</th>
                  <th className="text-left py-4 px-2 font-semibold text-primary-700">19:30-20:30</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((day, dayIndex) => (
                  <tr key={day.day} className="border-b border-primary-100">
                    <td className="py-4 px-2 font-medium text-primary-700">{day.day}</td>
                    {day.classes.map((cls, clsIndex) => (
                      <td key={clsIndex} className="py-4 px-2">
                        {cls.available ? (
                          <button
                            onClick={() => handleBooking(cls.class, cls.time)}
                            className="text-left hover:bg-accent-100 p-2 rounded-lg transition-colors duration-200 w-full"
                          >
                            <div className="text-sm font-medium text-primary-800">{cls.class}</div>
                            <div className="text-xs text-primary-600">{cls.time}</div>
                          </button>
                        ) : (
                          <div className="text-sm text-primary-400 italic">Complet</div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Booking Modal */}
        <AnimatePresence>
          {isBookingOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setIsBookingOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
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
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-primary-600 mb-6">
            Nu găsești clasa potrivită? Contactează-ne pentru program personalizat!
          </p>
          <Link
            href="/contact"
            className="btn-primary"
          >
            Contactează-ne
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Classes

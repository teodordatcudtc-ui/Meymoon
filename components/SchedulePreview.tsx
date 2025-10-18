'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react'

const SchedulePreview = () => {

  const schedule = [
    { day: 'Luni', classes: ['Pilates Mat - 9:00', 'Reformer - 18:00', 'Somatic Breathwork - 19:30'] },
    { day: 'Marți', classes: ['Pilates Mat - 8:00', 'Pilates Mat - 18:30', 'Private Sessions'] },
    { day: 'Miercuri', classes: ['Reformer - 9:30', 'Pilates Mat - 18:00', 'Somatic Breathwork - 19:00'] },
    { day: 'Joi', classes: ['Pilates Mat - 8:30', 'Reformer - 18:30', 'Private Sessions'] },
    { day: 'Vineri', classes: ['Pilates Mat - 9:00', 'Reformer - 17:30', 'Somatic Breathwork - 19:00'] },
    { day: 'Sâmbătă', classes: ['Pilates Mat - 10:00', 'Reformer - 11:30', 'Workshop Special'] },
    { day: 'Duminică', classes: ['Închis', '', ''] },
  ]


  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Calendar className="w-4 h-4" />
            <span>Programul Claselor</span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6"
          >
            Programul
            <span className="block text-gradient">Săptămânii</span>
          </h2>

          <p
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            Găsește clasa potrivită pentru tine din programul nostru variat. 
            Toate clasele sunt adaptate nivelului tău și au loc într-o atmosferă relaxantă.
          </p>
        </div>

        <div
          className="max-w-6xl mx-auto"
        >
          {/* Desktop Schedule */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-t-2xl p-6">
              <h3 className="text-2xl font-serif font-bold text-white text-center">
                Programul Claselor
              </h3>
            </div>
            
            <div className="bg-white rounded-b-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-7 gap-0">
                {schedule.map((day, index) => (
                  <div
                    key={day.day}
                    className={`p-4 border-r border-neutral-200 last:border-r-0 ${
                      day.day === 'Duminică' ? 'bg-neutral-50' : 'bg-white'
                    }`}
                  >
                    <h4 className={`font-semibold text-center mb-4 ${
                      day.day === 'Duminică' ? 'text-neutral-400' : 'text-primary-500'
                    }`}>
                      {day.day}
                    </h4>
                    <div className="space-y-2">
                      {day.classes.map((cls, clsIndex) => (
                        <div
                          key={clsIndex}
                          className={`text-xs p-2 rounded text-center ${
                            cls === 'Închis' || cls === ''
                              ? 'text-neutral-400'
                              : 'bg-primary-50 text-primary-700 font-medium'
                          }`}
                        >
                          {cls || ''}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Schedule */}
          <div className="lg:hidden space-y-4">
            {schedule.map((day, index) => (
              <div
                key={day.day}
                className={`card p-6 ${
                  day.day === 'Duminică' ? 'bg-neutral-50' : 'bg-white'
                }`}
              >
                <h4 className={`text-lg font-semibold mb-4 ${
                  day.day === 'Duminică' ? 'text-neutral-400' : 'text-primary-500'
                }`}>
                  {day.day}
                </h4>
                <div className="space-y-2">
                  {day.classes.map((cls, clsIndex) => (
                    <div
                      key={clsIndex}
                      className={`text-sm p-3 rounded-lg ${
                        cls === 'Închis' || cls === ''
                          ? 'text-neutral-400'
                          : 'bg-primary-50 text-primary-700 font-medium'
                      }`}
                    >
                      {cls || ''}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Info */}
        <div
          className="mt-16"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-500" />
              </div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">Durata Claselor</h4>
              <p className="text-neutral-600">
                Pilates Mat: 60 min<br />
                Reformer: 60 min<br />
                Somatic Breathwork: 90 min
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-500" />
              </div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">Dimensiunea Grupurilor</h4>
              <p className="text-neutral-600">
                Maximum 8 persoane<br />
                Atenție personalizată<br />
                Instrucțiuni detaliate
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-secondary-500" />
              </div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">Rezervări</h4>
              <p className="text-neutral-600">
                Rezervă online<br />
                Anulare gratuită<br />
                Flexibilitate maximă
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            className="text-center"
          >
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Gata să începi călătoria ta?
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Rezervă-ți prima clasă și descoperă beneficiile Pilates-ului 
                într-un mediu profesional și relaxant.
              </p>
              <Link
                href="/programari"
                className="bg-white text-accent-500 hover:bg-accent-50 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
              >
                Rezervă Acum
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SchedulePreview

'use client'

import { Calendar, User, CreditCard, CheckCircle } from 'lucide-react'

const BookingProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Completează Formularul',
      description: 'Completează formularul de rezervare cu datele tale și serviciul dorit.',
      icon: User,
      details: [
        'Numele complet',
        'Numărul de telefon',
        'Adresa de email',
        'Serviciul dorit',
        'Data preferată',
        'Observații speciale',
      ],
    },
    {
      number: '02',
      title: 'Confirmarea Rezervării',
      description: 'Te vom contacta în cel mai scurt timp pentru a confirma rezervarea.',
      icon: Calendar,
      details: [
        'Confirmare prin telefon',
        'Confirmare prin email',
        'Detalii despre ședință',
        'Instrucțiuni de pregătire',
        'Informații despre plată',
        'Politica de anulare',
      ],
    },
    {
      number: '03',
      title: 'Plata și Pregătirea',
      description: 'Efectuează plata și pregătește-te pentru prima ta ședință.',
      icon: CreditCard,
      details: [
        'Plata online sigură',
        'Plata la studio',
        'Echipament inclus',
        'Instrucțiuni de pregătire',
        'Ce să aduci cu tine',
        'Programul de sosire',
      ],
    },
    {
      number: '04',
      title: 'Prima Ședință',
      description: 'Bucură-te de prima ta experiență de Pilates la Meymoon Studio.',
      icon: CheckCircle,
      details: [
        'Evaluare inițială',
        'Instrucțiuni personalizate',
        'Exerciții adaptate',
        'Feedback și sugestii',
        'Planificarea următoarelor ședințe',
        'Întrebări și răspunsuri',
      ],
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            <span>Procesul de rezervare</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Cum Să
            <span className="block text-gradient">Rezervezi</span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Procesul de rezervare este simplu și rapid. Urmărește acești pași 
            pentru a-ți rezerva prima ședință de Pilates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="card p-8 h-full text-center group-hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-secondary-500" />
                </div>

                <div className="text-3xl font-bold text-secondary-500 mb-4">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary-500 transition-colors">
                  {step.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-4">
              Gata să Începi?
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-3xl mx-auto">
              Completează formularul de mai jos pentru a-ți rezerva prima ședință de Pilates. 
              Te vom contacta în cel mai scurt timp pentru a confirma rezervarea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#booking-form"
                className="btn-primary text-lg px-8 py-4 group"
              >
                Completează Formularul
                <Calendar className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0751901111"
                className="btn-secondary text-lg px-8 py-4"
              >
                Sună-ne: 0751 901 111
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingProcess
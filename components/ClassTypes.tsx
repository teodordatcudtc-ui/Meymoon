'use client'

import { Users, Clock, Star, Target } from 'lucide-react'

const ClassTypes = () => {
  const classTypes = [
    {
      title: 'Începători',
      description: 'Perfect pentru cei care nu au experiență cu Pilates sau doresc să învețe bazele.',
      level: 'Începător',
      duration: '60 min',
      maxStudents: 8,
      features: [
        'Instrucțiuni de bază',
        'Tehnici de respirație',
        'Exerciții fundamentale',
        'Atenție personalizată',
        'Progres gradual',
        'Atmosferă relaxantă',
      ],
      benefits: [
        'Înțelegerea principiilor Pilates',
        'Dezvoltarea forței de bază',
        'Îmbunătățirea posturii',
        'Creșterea flexibilității',
        'Reducerea stresului',
        'Încredere în mișcare',
      ],
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      recommended: true,
    },
    {
      title: 'Intermediar',
      description: 'Pentru cei cu experiență de bază care doresc să aprofundeze practica.',
      level: 'Intermediar',
      duration: '60 min',
      maxStudents: 8,
      features: [
        'Exerciții complexe',
        'Variante avansate',
        'Corectarea posturii',
        'Dezvoltarea forței',
        'Coordonare îmbunătățită',
        'Challenging workouts',
      ],
      benefits: [
        'Dezvoltarea forței profunde',
        'Îmbunătățirea coordonării',
        'Corectarea posturii',
        'Rezistență și flexibilitate',
        'Confidență în mișcare',
        'Rezultate vizibile',
      ],
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      recommended: false,
    },
    {
      title: 'Avansat',
      description: 'Pentru practicanții experimentați care doresc provocări și progres constant.',
      level: 'Avansat',
      duration: '75 min',
      maxStudents: 6,
      features: [
        'Exerciții complexe',
        'Secvențe avansate',
        'Tehnici profesionale',
        'Corectare individuală',
        'Workouts intense',
        'Dezvoltare continuă',
      ],
      benefits: [
        'Forță și rezistență maximă',
        'Flexibilitate extinsă',
        'Control corporal perfect',
        'Tehnici avansate',
        'Performanță optimă',
        'Maestrie în mișcare',
      ],
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
      recommended: false,
    },
  ]

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            <span>Alege nivelul potrivit</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Alege
            <span className="block text-gradient">Nivelul Potrivit</span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Fiecare nivel este adaptat pentru a-ți oferi cea mai bună experiență de Pilates, 
            indiferent de experiența ta anterioară.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classTypes.map((classType, index) => (
            <div key={index} className="group">
              <div className="card p-8 h-full group-hover:scale-105 transition-all duration-300 flex flex-col">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${classType.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-8 h-8 ${classType.color} rounded-full`}></div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {classType.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    {classType.description}
                  </p>

                  {classType.recommended && (
                    <div className="inline-flex items-center space-x-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Recomandat</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm text-neutral-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-primary-500" />
                      <span>Durată</span>
                    </div>
                    <span className="font-medium">{classType.duration}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-neutral-600">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary-500" />
                      <span>Max studenți</span>
                    </div>
                    <span className="font-medium">{classType.maxStudents}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-neutral-900">Ce include:</h4>
                  <ul className="space-y-2">
                    {classType.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-neutral-900">Beneficii:</h4>
                  <ul className="space-y-2">
                    {classType.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Level Badge */}
                <div className="text-center mt-auto">
                  <span className={`inline-block ${classType.bgColor} ${classType.color} px-4 py-2 rounded-full text-sm font-medium`}>
                    {classType.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
              Nu știi ce nivel să alegi?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-3xl mx-auto">
              Contactează-ne pentru o evaluare gratuită și îți vom recomanda 
              nivelul potrivit pentru experiența și obiectivele tale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0751901111"
                className="btn-primary text-lg px-8 py-4"
              >
                Sună-ne: 0751 901 111
              </a>
              <a
                href="/programari"
                className="btn-secondary text-lg px-8 py-4"
              >
                Rezervă Evaluare
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClassTypes
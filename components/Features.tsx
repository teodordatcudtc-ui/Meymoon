'use client'

import { Users, Award, Heart, Shield } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Award,
      title: 'Antrenori Certificați',
      description: 'Echipa noastră de instructori sunt certificați și au experiență de peste 5 ani în domeniul Pilates și wellness.',
      color: 'text-primary-500',
      bgColor: 'bg-primary-100',
    },
    {
      icon: Users,
      title: 'Clase Mici',
      description: 'Grupuri de maximum 8 persoane pentru o atenție personalizată și o experiență de calitate superioară.',
      color: 'text-accent-500',
      bgColor: 'bg-accent-100',
    },
    {
      icon: Heart,
      title: 'Somatic Breathwork',
      description: 'Tehnici unice de respirație conștientă pentru relaxare profundă și conectare cu corpul tău.',
      color: 'text-secondary-500',
      bgColor: 'bg-secondary-100',
    },
    {
      icon: Shield,
      title: 'Atmosferă Calmă',
      description: 'Spațiu dedicat relaxării și reflecției, cu design minimalist și echipament de ultimă generație.',
      color: 'text-neutral-500',
      bgColor: 'bg-neutral-100',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Ce ne face diferiți</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            De ce să alegi
            <span className="block text-gradient">Meymoon Studio?</span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Ne dedicăm să oferim o experiență de Pilates autentică și transformatoare, 
            combinând tradiția cu inovația pentru a-ți aduce echilibrul și forța interioară.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="group">
              <div className="card p-8 h-full text-center group-hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary-500 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-4">
              Experiența Meymoon
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-3xl mx-auto">
              Fiecare clasă este o călătorie de descoperire a propriei forțe interioare. 
              Te învățăm să te conectezi cu corpul tău, să respiri conștient și să găsești 
              echilibrul perfect între mișcare și liniște.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-primary-500 text-white px-4 py-2 rounded-full">Echipament Premium</span>
              <span className="bg-accent-500 text-white px-4 py-2 rounded-full">Instrucțiuni Personalizate</span>
              <span className="bg-secondary-500 text-white px-4 py-2 rounded-full">Atmosferă Relaxantă</span>
              <span className="bg-neutral-500 text-white px-4 py-2 rounded-full">Rezultate Garantate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
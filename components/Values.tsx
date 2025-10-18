'use client'

import { Heart, Target, Users, Award, Shield, Leaf } from 'lucide-react'

const Values = () => {
  const values = [
    {
      icon: Heart,
      title: 'Pasiune',
      description: 'Ne dedicăm cu pasiune să oferim o experiență de Pilates autentică și transformatoare.',
      color: 'text-primary-500',
      bgColor: 'bg-primary-100',
    },
    {
      icon: Target,
      title: 'Excelență',
      description: 'Ne străduim să oferim servicii de cea mai înaltă calitate în fiecare ședință.',
      color: 'text-accent-500',
      bgColor: 'bg-accent-100',
    },
    {
      icon: Users,
      title: 'Comunitate',
      description: 'Creăm un spațiu sigur și primitor unde fiecare client se simte parte din familie.',
      color: 'text-secondary-500',
      bgColor: 'bg-secondary-100',
    },
    {
      icon: Award,
      title: 'Profesionalism',
      description: 'Echipa noastră este formată din antrenori certificați cu experiență vastă.',
      color: 'text-neutral-500',
      bgColor: 'bg-neutral-100',
    },
    {
      icon: Shield,
      title: 'Siguranță',
      description: 'Prioritizăm siguranța și bunăstarea clienților noștri în fiecare moment.',
      color: 'text-primary-500',
      bgColor: 'bg-primary-100',
    },
    {
      icon: Leaf,
      title: 'Sustenabilitate',
      description: 'Promovăm un stil de viață sănătos și sustenabil prin mișcarea conștientă.',
      color: 'text-accent-500',
      bgColor: 'bg-accent-100',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4 fill-current" />
            <span>Valorile noastre</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Valorile
            <span className="block text-gradient">Meymoon Studio</span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Acestea sunt principiile care ne ghidează în fiecare zi și ne ajută să oferim 
            o experiență de Pilates autentică și transformatoare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="card p-8 h-full text-center group-hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary-500 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-4">
              De ce sunt importante valorile noastre?
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-3xl mx-auto">
              Valorile noastre nu sunt doar cuvinte pe hârtie - sunt principiile care ne ghidează 
              în fiecare interacțiune cu clienții noștri și în fiecare decizie pe care o luăm.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-500" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Autenticitate</h4>
                <p className="text-sm text-neutral-600">Suntem autentici în tot ceea ce facem și în modul în care interacționăm cu clienții noștri</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent-500" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Orientare către Rezultate</h4>
                <p className="text-sm text-neutral-600">Ne concentrăm pe rezultatele concrete și pe progresul clienților noștri</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary-500" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Respect Reciproc</h4>
                <p className="text-sm text-neutral-600">Respectăm clienții noștri și ne așteptăm la același respect înapoi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
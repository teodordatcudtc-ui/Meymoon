'use client'

import Image from 'next/image'
import { Heart, Target, Users, Award } from 'lucide-react'

const OurStory = () => {
  const storyPoints = [
    {
      year: '2019',
      title: 'Începutul Călătoriei',
      description: 'Am deschis primul nostru studio cu o viziune clară: să aducem armonia și echilibrul în viața oamenilor prin mișcarea conștientă.',
      icon: Heart,
    },
    {
      year: '2020',
      title: 'Expansiunea Echipei',
      description: 'Am crescut echipa cu antrenori certificați și am introdus Somatic Breathwork ca parte integrantă a programului nostru.',
      icon: Users,
    },
    {
      year: '2022',
      title: 'Recunoaștere Locală',
      description: 'Am devenit unul dintre studiourile de Pilates cele mai apreciate din București, cu peste 200 de clienți mulțumiți.',
      icon: Award,
    },
    {
      year: '2024',
      title: 'Viziunea Viitorului',
      description: 'Continuăm să ne dezvoltăm și să oferim experiențe transformatoare, adaptându-ne nevoilor comunității noastre.',
      icon: Target,
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4 fill-current" />
            <span>Povestea noastră</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Călătoria
            <span className="block text-gradient">Meymoon Studio</span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            De la o viziune simplă la unul dintre cele mai apreciate studiouri de Pilates din București, 
            călătoria noastră a fost una de pasiune, dedicare și rezultate extraordinare.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Echipa Meymoon Pilates Studio"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                Misiunea Noastră
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Ne dedicăm să oferim o experiență de Pilates autentică și transformatoare, 
                combinând tradiția cu inovația pentru a-ți aduce echilibrul și forța interioară.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                Viziunea Noastră
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Să devenim un spațiu de referință pentru wellness și mișcare conștientă, 
                unde fiecare client poate descoperi potențialul său interior.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {storyPoints.map((point, index) => (
            <div key={index} className="group">
              <div className="card p-6 h-full text-center group-hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-8 h-8 text-primary-500" />
                </div>
                
                <div className="text-3xl font-bold text-primary-500 mb-2">{point.year}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-500 transition-colors">
                  {point.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurStory
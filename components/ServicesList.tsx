'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Users, Star, CheckCircle } from 'lucide-react'

const ServicesList = () => {
  const services = [
    {
      id: 'pilates-mat',
      title: 'Pilates Mat',
      description: 'Clase tradiționale de Pilates pe covoraș, perfecte pentru toate nivelurile de experiență.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '60 min',
      level: 'Toate nivelurile',
      price: 'De la 80 RON',
      features: [
        'Instrucțiuni personalizate',
        'Echipament inclus',
        'Grupuri mici (max 8 persoane)',
        'Tehnici de respirație',
        'Îmbunătățirea posturii',
        'Flexibilitate și forță',
      ],
      benefits: [
        'Îmbunătățirea posturii',
        'Dezvoltarea forței musculare',
        'Creșterea flexibilității',
        'Reducerea durerilor de spate',
        'Îmbunătățirea echilibrului',
        'Reducerea stresului',
      ],
    },
    {
      id: 'pilates-reformer',
      title: 'Pilates Reformer',
      description: 'Clase avansate pe aparatul Reformer pentru o experiență de Pilates completă și intensă.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '60 min',
      level: 'Intermediar - Avansat',
      price: 'De la 120 RON',
      features: [
        'Aparat Reformer profesional',
        'Instrucțiuni detaliate',
        'Grupuri mici (max 6 persoane)',
        'Exerciții variate',
        'Resistență ajustabilă',
        'Monitorizare personalizată',
      ],
      benefits: [
        'Dezvoltarea forței profunde',
        'Îmbunătățirea coordonării',
        'Corectarea posturii',
        'Rezistență și flexibilitate',
        'Reabilitare și prevenție',
        'Rezultate rapide și vizibile',
      ],
    },
    {
      id: 'somatic-breathwork',
      title: 'Somatic Breathwork',
      description: 'Tehnici de respirație conștientă pentru relaxare profundă și conectare cu corpul.',
      image: 'https://images.unsplash.com/photo-1506905925346-14b1e61d00aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '45 min',
      level: 'Toate nivelurile',
      price: 'De la 70 RON',
      features: [
        'Tehnici de respirație variate',
        'Meditație ghidată',
        'Relaxare profundă',
        'Grupuri mici (max 10 persoane)',
        'Atmosferă calmă',
        'Echipament confortabil',
      ],
      benefits: [
        'Reducerea stresului',
        'Îmbunătățirea somnului',
        'Echilibru emoțional',
        'Conectare cu corpul',
        'Claritate mentală',
        'Energie și vitalitate',
      ],
    },
    {
      id: 'private-sessions',
      title: 'Ședințe Private',
      description: 'Antrenamente one-on-one adaptate nevoilor și obiectivelor tale specifice.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '60 min',
      level: 'Personalizat',
      price: 'De la 150 RON',
      features: [
        'Atenție 100% personalizată',
        'Program flexibil',
        'Plan de antrenament individual',
        'Echipament complet',
        'Monitorizare constantă',
        'Suport continuu',
      ],
      benefits: [
        'Rezultate rapide',
        'Atenție personalizată',
        'Flexibilitate de program',
        'Obiective specifice',
        'Progres accelerat',
        'Confidențialitate',
      ],
    },
    {
      id: 'workshops',
      title: 'Workshop-uri & Retreats',
      description: 'Sesiuni speciale de dezvoltare personală și wellness pentru experiențe transformatoare.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '2-4 ore',
      level: 'Toate nivelurile',
      price: 'De la 200 RON',
      features: [
        'Teme specializate',
        'Instrucțiuni experte',
        'Grupuri mici',
        'Materiale incluse',
        'Certificat de participare',
        'Networking',
      ],
      benefits: [
        'Cunoaștere profundă',
        'Experiență intensivă',
        'Dezvoltare personală',
        'Comunitate',
        'Inspirație',
        'Transformare',
      ],
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Serviciile noastre</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Servicii
            <span className="block text-gradient">Complete</span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Descoperă gama noastră de servicii de Pilates și wellness, 
            adaptate nevoilor și nivelului fiecărui client.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <span className="bg-white/90 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">
                      {service.duration}
                    </span>
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {service.level}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-neutral-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-primary-500" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary-500" />
                      <span>{service.level}</span>
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-primary-500 mb-6">
                    {service.price}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-3">Ce include:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                            <CheckCircle className="w-4 h-4 text-primary-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-3">Beneficii:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                            <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/programari"
                      className="btn-primary text-lg px-8 py-4 group"
                    >
                      Rezervă Acum
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-4">
              Nu știi ce serviciu să alegi?
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-3xl mx-auto">
              Contactează-ne pentru o consultație gratuită și îți vom recomanda 
              serviciul potrivit pentru nevoile și obiectivele tale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-lg px-8 py-4"
              >
                Contactează-ne
              </Link>
              <Link
                href="/programari"
                className="btn-secondary text-lg px-8 py-4"
              >
                Rezervă Consultație
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesList
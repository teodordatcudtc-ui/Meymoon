'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Users, Star } from 'lucide-react'

const ServicesPreview = () => {
  const services = [
    {
      id: 'pilates-mat',
      title: 'Pilates Mat',
      description: 'Clase tradiționale de Pilates pe covoraș, perfecte pentru începători și avansați.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '60 min',
      level: 'Toate nivelurile',
      price: 'De la 80 RON',
      features: ['Instrucțiuni personalizate', 'Echipament inclus', 'Grupuri mici'],
    },
    {
      id: 'somatic-breathwork',
      title: 'Somatic Breathwork',
      description: 'Tehnici de respirație conștientă pentru relaxare profundă și conectare cu corpul.',
      image: 'https://images.unsplash.com/photo-1506905925346-14b1e61d00aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '45 min',
      level: 'Toate nivelurile',
      price: 'De la 70 RON',
      features: ['Tehnici de respirație', 'Meditație ghidată', 'Relaxare profundă'],
    },
    {
      id: 'private-sessions',
      title: 'Ședințe Private',
      description: 'Antrenamente one-on-one adaptate nevoilor și obiectivelor tale specifice.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '60 min',
      level: 'Personalizat',
      price: 'De la 150 RON',
      features: ['Atenție 100% personalizată', 'Program flexibil', 'Rezultate rapide'],
    },
  ]

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Servicii populare</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Servicii
            <span className="block text-gradient">Premium</span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Descoperă gama noastră de servicii de Pilates și wellness, 
            adaptate nevoilor și nivelului fiecărui client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="card overflow-hidden h-full group-hover:scale-105 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <span className="bg-white/90 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">
                      {service.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-3 group-hover:text-primary-500 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{service.level}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary-500">
                      {service.price}
                    </div>
                    <Link
                      href="/servicii"
                      className="btn-primary group-hover:scale-105 transition-transform duration-200 whitespace-nowrap inline-flex items-center"
                    >
                      Detalii
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/servicii"
            className="btn-secondary text-base px-6 py-3 whitespace-nowrap inline-flex items-center"
          >
            Vezi Toate Serviciile
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
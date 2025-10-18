'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Brain, Leaf, Clock, Users, ArrowRight } from 'lucide-react'

const SomaticBreathwork = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Reducerea Stresului',
      description: 'Tehnici de respirație care activează sistemul nervos parasimpatic pentru relaxare profundă.',
    },
    {
      icon: Brain,
      title: 'Îmbunătățirea Concentrării',
      description: 'Respirația conștientă îmbunătățește funcțiile cognitive și capacitatea de focus.',
    },
    {
      icon: Leaf,
      title: 'Echilibru Emoțional',
      description: 'Practica regulată ajută la gestionarea emoțiilor și dezvoltarea stabilității mentale.',
    },
    {
      icon: Users,
      title: 'Conectare cu Corpul',
      description: 'Înveți să asculți și să răspunzi la nevoile corpului tău prin respirație.',
    },
  ]

  const techniques = [
    'Respirația Diafragmatică',
    'Respirația Alternativă (Nadi Shodhana)',
    'Respirația 4-7-8',
    'Respirația Coherentă',
    'Respirația de Purificare',
    'Respirația de Ancorare',
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4 fill-current" />
            <span>Somatic Breathwork</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Ce Este
            <span className="block text-gradient">Somatic Breathwork?</span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Somatic Breathwork este o practică transformatoare care combină tehnici de respirație conștientă 
            cu mișcarea corpului pentru a accesa și elibera tensiunile profunde din sistemul nervos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-14b1e61d00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Somatic Breathwork la Meymoon Studio"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/20 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                Beneficiile Somatic Breathwork
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Această practică unică te ajută să accesezi stările profunde de relaxare, 
                să eliberezi tensiunile din corp și să dezvolți o conexiune mai profundă cu tine însuți.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-secondary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">{benefit.title}</h4>
                    <p className="text-sm text-neutral-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                Tehnici de Respirație
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Învețăm diverse tehnici de respirație adaptate nevoilor individuale, 
                de la tehnici de relaxare la tehnici energizante.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techniques.map((technique, index) => (
                <div key={index} className="flex items-center space-x-3 bg-secondary-50 rounded-lg p-3">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                  <span className="text-sm font-medium text-neutral-700">{technique}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Practică Somatic Breathwork"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-4">
              Gata să Începi Somatic Breathwork?
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-3xl mx-auto">
              Descoperă puterea transformatoare a respirației conștiente. 
              Prima ședință de Somatic Breathwork este gratuită!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programari"
                className="btn-primary text-lg px-8 py-4 group"
              >
                Rezervă Prima Ședință
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/servicii"
                className="btn-secondary text-lg px-8 py-4"
              >
                Vezi Toate Serviciile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SomaticBreathwork
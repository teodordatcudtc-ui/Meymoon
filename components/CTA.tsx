'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-400"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-float animation-delay-800"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Gata să Începi
            <span className="block text-gradient-light">Călătoria Ta?</span>
          </h2>

          <p className="text-xl text-primary-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Alătură-te comunității noastre de Pilates și descoperă puterea mișcării conștiente. 
            Prima ședință este gratuită!
          </p>

          <div className="flex flex-row gap-3 justify-center mb-12">
            <Link
              href="/programari"
              className="btn-white btn-small group whitespace-nowrap"
            >
              Completează Formularul
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="btn-outline-white btn-small whitespace-nowrap"
            >
              Sună-ne
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sună-ne</h3>
              <p className="text-primary-100">0751 901 111</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-primary-100">info@meymoonstudio.ro</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Vizitează-ne</h3>
              <p className="text-primary-100">Strada Negoiu 51, București</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="hero-wave"></div>
      </div>
    </section>
  )
}

export default CTA
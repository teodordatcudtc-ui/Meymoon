'use client'

import { MapPin, Navigation, Clock, Phone } from 'lucide-react'

const MapSection = () => {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Găsește-ne
            <span className="block text-gradient">La Studio</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Studio-ul nostru este situat în inima Bucureștiului, într-o zonă accesibilă 
            și cu parcare disponibilă.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.2345678901234!2d26.123456789012345!3d44.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f1234567890%3A0x1234567890abcdef!2sStrada%20Negoiu%2051%2C%20București%20031126!5e0!3m2!1sro!2sro!4v1234567890123!5m2!1sro!2sro"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația Meymoon Studio - Strada Negoiu 51, București"
              ></iframe>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
                Informații de Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Adresa</h4>
                    <p className="text-neutral-600">
                      Strada Negoiu 51<br />
                      București 031126<br />
                      România
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Telefon</h4>
                    <p className="text-neutral-600">
                      <a href="tel:0751901111" className="hover:text-primary-500 transition-colors">
                        0751 901 111
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Program</h4>
                    <div className="text-neutral-600 space-y-1">
                      <p>Luni - Vineri: 8:00 - 20:00</p>
                      <p>Sâmbătă: 9:00 - 14:00</p>
                      <p>Duminică: Închis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6">
              <h4 className="font-semibold text-neutral-900 mb-4">Cum să ajungi la noi:</h4>
              <div className="space-y-3 text-sm text-neutral-600">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                  <p>Cu metroul: Stația Piața Victoriei (5 min pe jos)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                  <p>Cu autobuzul: Linia 131, 205, 282 (stația în fața studioului)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                  <p>Cu mașina: Parcare disponibilă în zonă</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                  <p>Cu taxi/Uber: Adresa exactă: Strada Negoiu 51</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.google.com/?q=Strada+Negoiu+51+Bucuresti"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center group"
              >
                <Navigation className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Deschide în Google Maps
              </a>
              <a
                href="tel:0751901111"
                className="btn-secondary text-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Sună Acum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
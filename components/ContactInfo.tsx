'use client'

import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react'

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Sună-ne',
      description: 'Pentru rezervări sau întrebări',
      value: '0751 901 111',
      action: 'tel:0751901111',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Trimite-ne un mesaj',
      value: 'info@meymoonstudio.ro',
      action: 'mailto:info@meymoonstudio.ro',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
    {
      icon: MapPin,
      title: 'Vizitează-ne',
      description: 'Strada Negoiu 51, București',
      value: '031126, București',
      action: 'https://maps.google.com/?q=Strada+Negoiu+51+Bucuresti',
      color: 'text-red-500',
      bgColor: 'bg-red-100',
    },
    {
      icon: Clock,
      title: 'Program',
      description: 'Luni - Vineri: 8:00 - 20:00',
      value: 'Sâmbătă: 9:00 - 14:00',
      action: null,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
    },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/meymoonstudio/',
      icon: Instagram,
      color: 'text-pink-500',
      bgColor: 'bg-pink-100',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/p/MeyMoon-Studio-61558528991097/',
      icon: Facebook,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            <span>Contactează-ne</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Să Vorbim
            <span className="block text-gradient">Despre Pilates</span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Ai întrebări despre serviciile noastre? Vrei să rezervezi o ședință? 
            Contactează-ne prin telefon, email sau vizitează-ne la studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="group">
              <div className="card p-8 h-full text-center group-hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 ${method.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className={`w-8 h-8 ${method.color}`} />
                </div>

                <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors">
                  {method.title}
                </h3>

                <p className="text-neutral-600 mb-4 text-sm">
                  {method.description}
                </p>

                {method.action ? (
                  <a
                    href={method.action}
                    className={`text-lg font-medium ${method.color} hover:underline`}
                  >
                    {method.value}
                  </a>
                ) : (
                  <div className="text-lg font-medium text-neutral-700">
                    {method.value}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
            Urmărește-ne pe Social Media
          </h3>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Descoperă sfaturi de wellness, exerciții de Pilates și momente din viața studioului nostru.
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-16 h-16 ${social.bgColor} rounded-2xl flex items-center justify-center group hover:scale-110 transition-transform duration-300`}
              >
                <social.icon className={`w-8 h-8 ${social.color} group-hover:scale-110 transition-transform`} />
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-4">
              Gata să Începi Călătoria Ta de Pilates?
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-3xl mx-auto">
              Contactează-ne astăzi pentru a rezerva prima ta ședință de Pilates sau 
              pentru a afla mai multe despre serviciile noastre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0751901111"
                className="btn-primary text-lg px-8 py-4 group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Sună Acum: 0751 901 111
              </a>
              <a
                href="/programari"
                className="btn-secondary text-lg px-8 py-4"
              >
                Rezervă Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '0751 901 111',
      href: 'tel:0751901111',
      description: 'Sună-ne pentru programare rapidă sau întrebări',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@meymoonstudio.ro',
      href: 'mailto:contact@meymoonstudio.ro',
      description: 'Trimite-ne un email cu întrebările tale',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: MapPin,
      title: 'Adresă',
      value: 'Strada Negoiu 51, București 031126',
      href: 'https://maps.google.com/?q=Strada+Negoiu+51,+București+031126',
      description: 'Vizitează-ne la studio pentru o ședință',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Clock,
      title: 'Program de lucru',
      value: 'Luni - Vineri: 07:00 - 21:00\nSâmbătă: 08:00 - 18:00\nDuminică: 09:00 - 17:00',
      href: null,
      description: 'Programul nostru de lucru',
      color: 'from-orange-500 to-amber-500'
    }
  ]

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      href: 'https://www.instagram.com/meymoonstudio/',
      description: 'Urmărește-ne pentru sfaturi de wellness',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      href: 'https://www.facebook.com/p/MeyMoon-Studio-61558528991097/',
      description: 'Conectează-te cu comunitatea noastră',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      href: 'https://wa.me/40751901111',
      description: 'Mesajează-ne pentru programare rapidă',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-6">
            Informații de contact
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Suntem aici să te ajutăm cu orice întrebare ai avea. 
            Contactează-ne prin orice metodă preferi.
          </p>
        </motion.div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${detail.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <detail.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-playfair font-semibold text-primary-800 mb-3">
                    {detail.title}
                  </h3>
                  
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.href.startsWith('http') ? '_blank' : undefined}
                      rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-accent-600 font-medium hover:text-accent-700 transition-colors duration-300 block mb-3"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-primary-800 font-medium mb-3 whitespace-pre-line">
                      {detail.value}
                    </p>
                  )}
                  
                  <p className="text-primary-600 leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-playfair font-bold text-primary-800 text-center mb-12">
            Urmărește-ne pe social media
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-primary-800 mb-2 group-hover:text-accent-600 transition-colors duration-300">
                    {social.name}
                  </h4>
                  
                  <p className="text-primary-600">
                    {social.description}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-100 to-accent-100 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-playfair font-bold text-primary-800 text-center mb-8">
            Acțiuni rapide
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="tel:0751901111"
              className="bg-white rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Phone className="w-8 h-8 text-accent-600 mx-auto mb-3" />
              <h4 className="font-semibold text-primary-800 mb-2">Sună acum</h4>
              <p className="text-sm text-primary-600">0751 901 111</p>
            </Link>
            
            <Link
              href="https://wa.me/40751901111"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-primary-800 mb-2">WhatsApp</h4>
              <p className="text-sm text-primary-600">Mesajează-ne</p>
            </Link>
            
            <Link
              href="#formular"
              className="bg-white rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Mail className="w-8 h-8 text-accent-600 mx-auto mb-3" />
              <h4 className="font-semibold text-primary-800 mb-2">Formular</h4>
              <p className="text-sm text-primary-600">Trimite mesaj</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfo

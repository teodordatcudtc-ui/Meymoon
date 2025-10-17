'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: '',
    preferredContact: 'email'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const services = [
    'Pilates Mat',
    'Pilates Reformer',
    'Somatic Breathwork',
    'Clase de Grup',
    'Pilates Personalizat',
    'Pilates pentru Seniori',
    'Informații generale'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form data:', formData)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: '',
        preferredContact: 'email'
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="formular" className="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-6">
            Trimite-ne un mesaj
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Completează formularul de mai jos și te vom contacta în cel mai scurt timp. 
            Răspundem la toate mesajele în maximum 24 de ore.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Numele complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Numele tău complet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-300"
                    placeholder="email@exemplu.com"
                  />
                </div>
              </div>

              {/* Phone and Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-300"
                    placeholder="0751 901 111"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Serviciu de interes
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Selectează un serviciu</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Subiect *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Subiectul mesajului tău"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Mesajul tău *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Descrie întrebarea ta sau ce te interesează..."
                />
              </div>

              {/* Preferred Contact */}
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-3">
                  Preferi să fii contactat prin:
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-accent-600 border-primary-300 focus:ring-accent-500"
                    />
                    <span className="ml-2 text-primary-700">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-accent-600 border-primary-300 focus:ring-accent-500"
                    />
                    <span className="ml-2 text-primary-700">Telefon</span>
                  </label>
                </div>
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl">
                  <CheckCircle className="w-5 h-5" />
                  <span>Mesajul a fost trimis cu succes! Te vom contacta în curând.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl">
                  <AlertCircle className="w-5 h-5" />
                  <span>A apărut o eroare. Te rugăm să încerci din nou sau să ne suni.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-600 text-white py-4 px-8 rounded-xl font-medium hover:bg-accent-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Se trimite...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Trimite mesajul
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-playfair font-semibold text-primary-800 mb-6">
                Informații de contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">Telefon</h4>
                    <a
                      href="tel:0751901111"
                      className="text-accent-600 hover:text-accent-700 transition-colors duration-300"
                    >
                      0751 901 111
                    </a>
                    <p className="text-sm text-primary-600 mt-1">
                      Luni - Duminică: 07:00 - 21:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">Email</h4>
                    <a
                      href="mailto:contact@meymoonstudio.ro"
                      className="text-accent-600 hover:text-accent-700 transition-colors duration-300"
                    >
                      contact@meymoonstudio.ro
                    </a>
                    <p className="text-sm text-primary-600 mt-1">
                      Răspundem în maximum 24 de ore
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">Adresă</h4>
                    <p className="text-primary-700">
                      Strada Negoiu 51<br />
                      București 031126
                    </p>
                    <p className="text-sm text-primary-600 mt-1">
                      Sector 3, București
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Prima ședință gratuită
              </h3>
              <p className="text-accent-100 mb-6">
                Toți clienții noi pot face prima ședință gratuită pentru a descoperi 
                stilul nostru de predare și beneficiile Pilates.
              </p>
              <a
                href="tel:0751901111"
                className="bg-white text-accent-600 px-6 py-3 rounded-xl font-medium hover:bg-accent-50 transition-colors duration-300 inline-block"
              >
                Programează acum
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

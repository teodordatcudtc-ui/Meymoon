'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  message: string
  gdprConsent: boolean
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const services = [
    'Pilates Mat',
    'Pilates Reformer',
    'Somatic Breathwork',
    'Antrenament Privat',
    'Workshop Special',
    'Consultație Gratuită',
  ]

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00'
  ]

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In a real application, you would send the data to your backend
      console.log('Form data:', data)
      
      toast.success('Rezervarea ta a fost trimisă cu succes! Te vom contacta în curând.')
      reset()
    } catch (error) {
      toast.error('A apărut o eroare. Te rugăm să încerci din nou.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Send className="w-4 h-4" />
            <span>Rezervă Acum</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6"
          >
            Completează
            <span className="block text-gradient">Formularul</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            Completează formularul de mai jos pentru a-ți rezerva clasa de Pilates. 
            Te vom contacta în cel mai scurt timp pentru a confirma rezervarea.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="lg:col-span-1"
          >
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
                  Informații de Contact
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Telefon</h4>
                      <a
                        href="tel:0751901111"
                        className="text-primary-500 hover:text-primary-600 transition-colors"
                      >
                        0751 901 111
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Email</h4>
                      <a
                        href="mailto:contact@meymoonstudio.com"
                        className="text-accent-500 hover:text-accent-600 transition-colors"
                      >
                        contact@meymoonstudio.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Adresă</h4>
                      <p className="text-neutral-600">
                        Strada Negoiu 51<br />
                        București 031126
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Program</h4>
                      <div className="text-neutral-600 space-y-1">
                        <p>Lun-Vin: 8:00-20:00</p>
                        <p>Sâm: 9:00-14:00</p>
                        <p>Dum: Închis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white">
                <h4 className="text-lg font-semibold mb-3">Prima Clasă Gratuită!</h4>
                <p className="text-primary-100 mb-4">
                  Clienții noi beneficiază de prima clasă gratuită pentru a încerca serviciile noastre.
                </p>
                <div className="text-sm text-primary-100">
                  *Valabil pentru prima rezervare
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="lg:col-span-2"
          >
            <motion.div
              variants={itemVariants}
              className="card p-8"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Numele este obligatoriu' })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Introdu numele tău complet"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'Email-ul este obligatoriu',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email-ul nu este valid'
                        }
                      })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="introdu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', { required: 'Telefonul este obligatoriu' })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="0751 901 111"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                      Serviciu dorit *
                    </label>
                    <select
                      id="service"
                      {...register('service', { required: 'Serviciul este obligatoriu' })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Selectează serviciul</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-2">
                      Data preferată *
                    </label>
                    <input
                      type="date"
                      id="date"
                      {...register('date', { required: 'Data este obligatorie' })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-neutral-700 mb-2">
                      Ora preferată *
                    </label>
                    <select
                      id="time"
                      {...register('time', { required: 'Ora este obligatorie' })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Selectează ora</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-500">{errors.time.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Mesaj (opțional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Spune-ne despre obiectivele tale sau dacă ai întrebări speciale..."
                  />
                </div>

                {/* GDPR Consent */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="gdprConsent"
                    {...register('gdprConsent', { required: 'Trebuie să accepți prelucrarea datelor' })}
                    className="mt-1 w-4 h-4 text-primary-500 border-neutral-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="gdprConsent" className="text-sm text-neutral-600">
                    Accept prelucrarea datelor mele personale conform{' '}
                    <a href="/politica-confidentialitate" className="text-primary-500 hover:underline">
                      Politicii de Confidențialitate
                    </a>
                    . *
                  </label>
                </div>
                {errors.gdprConsent && (
                  <p className="text-sm text-red-500">{errors.gdprConsent.message}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner mr-3"></div>
                      Se trimite...
                    </>
                  ) : (
                    <>
                      Trimite Rezervarea
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

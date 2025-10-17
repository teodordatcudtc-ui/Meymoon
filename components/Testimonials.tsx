'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Ana Maria Popescu',
      role: 'Manager IT',
      age: 34,
      image: '/images/testimonials/ana-popescu.jpg',
      rating: 5,
      text: 'Am început Pilates la Meymoon Studio acum 6 luni și nu pot să cred cât de mult s-a schimbat viața mea. Postura mea s-a îmbunătățit dramatic, durerile de spate au dispărut complet, și mă simt mult mai energică. Maria este un instructor extraordinar - răbdătoare, profesionistă și foarte atentă la detalii.',
      class: 'Pilates Mat',
      duration: '6 luni'
    },
    {
      id: 2,
      name: 'Mihai Ionescu',
      role: 'Antreprenor',
      age: 42,
      image: '/images/testimonials/mihai-ionescu.jpg',
      rating: 5,
      text: 'Somatic Breathwork cu Alexandru a fost o experiență transformatoare. După doar câteva sesiuni, am învățat să gestionez stresul mult mai bine și să dorm mai bine noaptea. Tehnica lui este foarte eficientă și abordarea sa calmă mă face să mă simt în siguranță să explorez emoțiile.',
      class: 'Somatic Breathwork',
      duration: '3 luni'
    },
    {
      id: 3,
      name: 'Elena Dumitrescu',
      role: 'Profesoară',
      age: 58,
      image: '/images/testimonials/elena-dumitrescu.jpg',
      rating: 5,
      text: 'La vârsta mea, credeam că nu mai pot să fac exerciții intense. Elena m-a dovedit contrariul! Clasele pentru seniori sunt perfect adaptate nevoilor noastre. Mobilitatea mi s-a îmbunătățit considerabil, iar durerile de articulații au scăzut semnificativ. Recomand cu încredere!',
      class: 'Pilates pentru Seniori',
      duration: '8 luni'
    },
    {
      id: 4,
      name: 'Cristina Radu',
      role: 'Designer',
      age: 29,
      image: '/images/testimonials/cristina-radu.jpg',
      rating: 5,
      text: 'Pilates Reformer cu Cristian este exact ce aveam nevoie! Sesiunile personalizate m-au ajutat să-mi ating obiectivele de fitness într-un mod sigur și eficient. Cristian este foarte tehnic și motivațional. În doar 4 luni am văzut rezultate incredibile!',
      class: 'Pilates Reformer',
      duration: '4 luni'
    },
    {
      id: 5,
      name: 'Andrei Stoica',
      role: 'Medic',
      age: 45,
      image: '/images/testimonials/andrei-stoica.jpg',
      rating: 5,
      text: 'Ca medic, pot să confirm beneficiile științifice ale Pilates. La Meymoon Studio am găsit o echipă foarte profesionistă care înțelege anatomia și fiziologia corpului uman. Clasele sunt adaptate perfect pentru nevoile individuale. Este un investiment în sănătatea mea pe care îl fac cu plăcere.',
      class: 'Pilates Mat + Reformer',
      duration: '1 an'
    },
    {
      id: 6,
      name: 'Ioana Marin',
      role: 'Mamă',
      age: 31,
      image: '/images/testimonials/ioana-marin.jpg',
      rating: 5,
      text: 'După nașterea celui de-al doilea copil, corpul meu avea nevoie de o abordare delicată. Somatic Breathwork m-a ajutat să mă reconectez cu corpul meu și să-mi recuperez forța. Alexandru este foarte empatic și înțelege provocările pe care le trăiesc mamele. Mulțumesc pentru suportul oferit!',
      class: 'Somatic Breathwork',
      duration: '5 luni'
    }
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-6">
            Ce spun clienții noștri
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Descoperă experiențele transformatoare ale clienților noștri și cum 
            Pilates și Somatic Breathwork le-au schimbat viața în bine.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="bg-white p-8 md:p-12 shadow-xl"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Client Image */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-1">
                          <span className="text-white font-bold text-lg">
                            {testimonials[currentSlide].name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-accent-200 mx-auto md:mx-0 mb-4" />
                    
                    {/* Rating */}
                    <div className="flex justify-center md:justify-start space-x-1 mb-4">
                      {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg md:text-xl text-primary-700 leading-relaxed mb-6 italic">
                      "{testimonials[currentSlide].text}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="space-y-2">
                      <h4 className="text-xl font-playfair font-semibold text-primary-800">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-accent-600 font-medium">
                        {testimonials[currentSlide].role}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center md:justify-start space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-primary-600">
                        <span>{testimonials[currentSlide].age} ani</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{testimonials[currentSlide].class}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{testimonials[currentSlide].duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent-50 transition-colors duration-300 group"
              aria-label="Testimonial anterior"
            >
              <ChevronLeft className="w-6 h-6 text-primary-600 group-hover:text-accent-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-accent-600 scale-125'
                      : 'bg-primary-300 hover:bg-primary-400'
                  }`}
                  aria-label={`Mergi la testimonialul ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent-50 transition-colors duration-300 group"
              aria-label="Testimonial următor"
            >
              <ChevronRight className="w-6 h-6 text-primary-600 group-hover:text-accent-600" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600 mb-2">500+</div>
            <div className="text-primary-600">Clienți mulțumiți</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600 mb-2">4.9</div>
            <div className="text-primary-600">Rating mediu</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600 mb-2">95%</div>
            <div className="text-primary-600">Recomandări</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600 mb-2">5+</div>
            <div className="text-primary-600">Ani experiență</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

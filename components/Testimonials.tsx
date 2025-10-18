'use client'

import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Popescu',
      role: 'Client de 2 ani',
      content: 'Meymoon Studio a schimbat complet perspectiva mea asupra Pilates-ului. Instrucțiile sunt clare, atmosfera este relaxantă, și simt o îmbunătățire reală a posturii și flexibilității.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Alexandru Ionescu',
      role: 'Client de 1 an',
      content: 'Somatic Breathwork-ul practicat aici m-a ajutat să reduc stresul zilnic. Antrenorii sunt foarte profesioniști și atenți la detalii. Recomand cu încredere!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Elena Dumitrescu',
      role: 'Client de 3 ani',
      content: 'Clasele de Pilates Mat sunt extraordinare! Am început ca începătoare și acum pot face exerciții pe care nu credeam că le voi face vreodată. Mulțumesc echipei!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Quote className="w-4 h-4" />
            <span>Testimoniale</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Ce Spun
            <span className="block text-gradient">Clienții Noștri</span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Descoperă experiențele transformatoare ale clienților noștri și 
            cum Pilates și Somatic Breathwork le-au schimbat viața.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="card p-8 h-full group-hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-neutral-600 mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </blockquote>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
              Rating Mediu: 4.9/5
            </h3>
            <p className="text-neutral-600 mb-6">
              Peste 200 de clienți mulțumiți recomandă serviciile noastre
            </p>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
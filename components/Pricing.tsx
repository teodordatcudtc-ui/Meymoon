'use client'

import { motion } from 'framer-motion'
import { Check, Star, Clock, Users, Heart } from 'lucide-react'
import Link from 'next/link'

const Pricing = () => {
  const plans = [
    {
      name: 'Pachet Începător',
      description: 'Perfect pentru cei care încep călătoria în Pilates',
      price: '299',
      period: 'lună',
      popular: false,
      features: [
        '4 clase de Pilates Mat pe lună',
        'Acces la toate clasele de grup',
        'Instrucțiuni pentru începători',
        'Echipamente incluse',
        'Sprijin online'
      ],
      icon: Heart,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100'
    },
    {
      name: 'Pachet Standard',
      description: 'Cel mai popular - echilibru perfect între preț și beneficii',
      price: '499',
      period: 'lună',
      popular: true,
      features: [
        '8 clase pe lună (orice tip)',
        '1 sesiune Somatic Breathwork inclusă',
        'Acces la toate clasele de grup',
        'Echipamente incluse',
        'Sprijin online',
        'Reducere 10% la sesiuni personalizate'
      ],
      icon: Star,
      color: 'from-accent-500 to-accent-600',
      bgColor: 'from-accent-50 to-accent-100'
    },
    {
      name: 'Pachet Premium',
      description: 'Pentru cei care vor experiența completă de wellness',
      price: '799',
      period: 'lună',
      popular: false,
      features: [
        'Clase nelimitate pe lună',
        '2 sesiuni Somatic Breathwork incluse',
        '1 sesiune personalizată inclusă',
        'Acces la toate clasele de grup',
        'Echipamente incluse',
        'Sprijin online 24/7',
        'Reducere 20% la sesiuni personalizate',
        'Acces la workshop-uri speciale'
      ],
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ]

  const addOns = [
    {
      name: 'Sesiune Personalizată',
      price: '150',
      period: 'sesiune',
      description: 'Sesiune one-on-one cu instructor certificat'
    },
    {
      name: 'Somatic Breathwork',
      price: '80',
      period: 'sesiune',
      description: 'Sesiune individuală de Somatic Breathwork'
    },
    {
      name: 'Pachet 10 Clase',
      price: '450',
      period: 'pachet',
      description: '10 clase la alegere (valabile 3 luni)'
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
            Prețuri și pachete
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Alege pachetul care ți se potrivește cel mai bine. Toate pachetele includ 
            echipamente și sprijin online. Prima ședință este gratuită pentru toți!
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative card p-8 ${
                plan.popular ? 'ring-2 ring-accent-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Cel mai popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-primary-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-primary-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-primary-800">{plan.price}</span>
                  <span className="text-primary-600 ml-2">lei/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span className="text-primary-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full py-4 rounded-2xl font-medium text-center transition-all duration-300 ${
                  plan.popular
                    ? 'bg-accent-600 text-white hover:bg-accent-700 hover:scale-105'
                    : 'bg-primary-200 text-primary-800 hover:bg-primary-300 hover:scale-105'
                }`}
              >
                Alege pachetul
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-playfair font-bold text-primary-800 text-center mb-12">
            Servicii suplimentare
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addOn, index) => (
              <motion.div
                key={addOn.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-50 rounded-2xl p-6 text-center"
              >
                <h4 className="text-xl font-semibold text-primary-800 mb-2">
                  {addOn.name}
                </h4>
                <div className="flex items-baseline justify-center mb-3">
                  <span className="text-3xl font-bold text-accent-600">{addOn.price}</span>
                  <span className="text-primary-600 ml-2">lei/{addOn.period}</span>
                </div>
                <p className="text-primary-600 text-sm mb-4">{addOn.description}</p>
                <Link
                  href="/contact"
                  className="text-accent-600 font-medium hover:text-accent-700 transition-colors duration-300"
                >
                  Programează acum
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-100 to-accent-100 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-primary-800 text-center mb-12">
            Întrebări frecvente
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary-800 mb-3">
                Pot să schimb pachetul oricând?
              </h4>
              <p className="text-primary-600">
                Da, poți schimba pachetul oricând. Modificările intră în vigoare 
                de la următoarea lună de facturare.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-800 mb-3">
                Ce se întâmplă dacă nu pot veni la o clasă?
              </h4>
              <p className="text-primary-600">
                Poți anula o clasă cu cel puțin 4 ore înainte. Clasele anulate 
                pot fi reprogramate în aceeași lună.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-800 mb-3">
                Echipamentele sunt incluse?
              </h4>
              <p className="text-primary-600">
                Da, toate echipamentele necesare sunt incluse în preț. 
                Doar adu-ți prosopul și apa.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-800 mb-3">
                Pot să fac prima ședință gratuită?
              </h4>
              <p className="text-primary-600">
                Absolut! Prima ședință este gratuită pentru toți clienții noi. 
                Contactează-ne pentru a programa.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Gata să începi?
            </h3>
            <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
              Programează ședința ta gratuită de probă și descoperă 
              care pachet ți se potrivește cel mai bine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-accent-600 px-8 py-4 rounded-2xl font-medium hover:bg-accent-50 transition-colors duration-300"
              >
                Programează ședința gratuită
              </Link>
              <Link
                href="/clase"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-accent-600 transition-colors duration-300"
              >
                Vezi programul claselor
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing

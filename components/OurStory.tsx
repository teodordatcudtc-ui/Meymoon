'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Heart, Target } from 'lucide-react'

const OurStory = () => {
  const milestones = [
    {
      year: '2019',
      title: 'Începutul călătoriei',
      description: 'Maria Ionescu a deschis primul studio de Pilates în București, cu o viziune clară: să aducă wellness-ul autentic în viața oamenilor.',
      icon: Heart
    },
    {
      year: '2020',
      title: 'Expansiunea echipei',
      description: 'S-au alăturat primii instructori specializați, iar studioul a început să ofere clase de grup și sesiuni personalizate.',
      icon: Users
    },
    {
      year: '2021',
      title: 'Introducerea Somatic Breathwork',
      description: 'Alexandru Popescu s-a alăturat echipei, aducând specializarea în Somatic Breathwork și o abordare holistică a wellness-ului.',
      icon: Target
    },
    {
      year: '2022',
      title: 'Recunoaștere națională',
      description: 'Studio a fost recunoscut ca unul dintre cele mai bune centre de Pilates din București, cu peste 300 de clienți activi.',
      icon: Calendar
    },
    {
      year: '2023',
      title: 'Comunitate înfloritoare',
      description: 'Am ajuns la peste 500 de clienți mulțumiți și am dezvoltat programe specializate pentru seniori și recuperare.',
      icon: Users
    },
    {
      year: '2024',
      title: 'Viitorul wellness-ului',
      description: 'Continuăm să inovăm și să ne adaptăm nevoilor comunității noastre, rămânând fideli viziunii noastre de wellness autentic.',
      icon: Heart
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
            Povestea noastră
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            De la o viziune simplă la o comunitate înfloritoare de wellness, 
            descoperă cum am construit Meymoon Studio pas cu pas.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-600 to-primary-300 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year */}
                <div className="flex-shrink-0 w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                  {milestone.year}
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                  <div className="card p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <milestone.icon className="w-6 h-6 text-accent-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-playfair font-semibold text-primary-800 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-primary-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Story Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-100 to-accent-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-playfair font-bold text-primary-800 mb-6">
              De ce Meymoon?
            </h3>
            <p className="text-lg text-primary-700 leading-relaxed max-w-4xl mx-auto mb-8">
              Numele "Meymoon" vine din credința noastră că fiecare persoană are propriul ritm natural, 
              ca fazele lunii. La fel cum luna influențează mareele, noi credem că fiecare dintre noi 
              are un ciclu natural de energie și regenerare. Pilates și Somatic Breathwork ne ajută 
              să ne conectăm cu acest ritm natural și să trăim în armonie cu propriul corp.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-600 mb-2">500+</div>
                <div className="text-primary-600">Clienți transformați</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-600 mb-2">5+</div>
                <div className="text-primary-600">Ani de experiență</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-600 mb-2">100%</div>
                <div className="text-primary-600">Dedicare la calitate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurStory

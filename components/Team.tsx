'use client'

import Image from 'next/image'
import { Award, Star, Instagram, Facebook } from 'lucide-react'

const Team = () => {
  const team = [
    {
      name: 'Maria Popescu',
      role: 'Fondator & Antrenor Principal',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      certifications: ['Pilates Mat Instructor', 'Somatic Breathwork Facilitator', 'Yoga Alliance RYT-200'],
      experience: '8 ani experiență',
      specialties: ['Pilates Mat', 'Somatic Breathwork', 'Rehabilitation'],
      social: {
        instagram: 'https://instagram.com/maria_pilates',
        facebook: 'https://facebook.com/maria.pilates',
      },
    },
    {
      name: 'Alexandru Ionescu',
      role: 'Antrenor Senior',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      certifications: ['Pilates Reformer Instructor', 'Anatomy & Physiology', 'Movement Analysis'],
      experience: '6 ani experiență',
      specialties: ['Pilates Reformer', 'Advanced Mat', 'Postural Analysis'],
      social: {
        instagram: 'https://instagram.com/alex_pilates',
        facebook: 'https://facebook.com/alex.pilates',
      },
    },
    {
      name: 'Elena Dumitrescu',
      role: 'Antrenor & Wellness Coach',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      certifications: ['Pilates Mat Instructor', 'Breathwork Facilitator', 'Mindfulness Coach'],
      experience: '5 ani experiență',
      specialties: ['Somatic Breathwork', 'Mindful Movement', 'Stress Management'],
      social: {
        instagram: 'https://instagram.com/elena_wellness',
        facebook: 'https://facebook.com/elena.wellness',
      },
    },
  ]

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Echipa noastră</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Antrenorii
            <span className="block text-gradient">Noștri</span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Cunoaște echipa noastră de antrenori certificați și pasionați, 
            care te vor ghida în călătoria ta de Pilates și wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="card overflow-hidden h-full group-hover:scale-105 transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">
                      {member.experience}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-primary-500 font-medium mb-4">{member.role}</p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Certificări:</h4>
                      <div className="space-y-1">
                        {member.certifications.map((cert, certIndex) => (
                          <div key={certIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                            <Award className="w-4 h-4 text-primary-500" />
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Specializări:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, specIndex) => (
                          <span key={specIndex} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
              De ce să alegi echipa noastră?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-500" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Certificări Internaționale</h4>
                <p className="text-sm text-neutral-600">Toți antrenorii noștri sunt certificați la standarde internaționale</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-accent-500" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Experiență Vastă</h4>
                <p className="text-sm text-neutral-600">Peste 20 de ani de experiență combinată în domeniul wellness</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-secondary-500" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Pasiune & Dedicare</h4>
                <p className="text-sm text-neutral-600">Ne dedicăm 100% succesului și bunăstării clienților noștri</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
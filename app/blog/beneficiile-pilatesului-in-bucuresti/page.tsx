import { Metadata } from 'next'
import Image from 'next/image'
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Beneficiile Pilates-ului în București: De ce să alegi un studio local | Meymoon Studio',
  description: 'Descoperă de ce Pilates-ul este perfect pentru viața urbană din București și cum te poate ajuta să reduci stresul zilnic. Ghid complet cu beneficii și sfaturi practice.',
  keywords: 'pilates București, beneficii pilates, studio pilates București, reducerea stresului, wellness București, exerciții pilates',
  openGraph: {
    title: 'Beneficiile Pilates-ului în București: De ce să alegi un studio local',
    description: 'Descoperă de ce Pilates-ul este perfect pentru viața urbană din București și cum te poate ajuta să reduci stresul zilnic.',
    images: ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
}

export default function BeneficiilePilatesuluiInBucuresti() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Înapoi la Blog
            </Link>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <Calendar className="w-4 h-4" />
                <span>15 Ianuarie 2024</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <User className="w-4 h-4" />
                <span>Maria Popescu</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <Clock className="w-4 h-4" />
                <span>5 min citire</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Beneficiile Pilates-ului în București:
              <span className="block text-gradient">De ce să alegi un studio local</span>
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              În ritmul alert al vieții urbane din București, Pilates-ul oferă o oază de liniște și echilibru. 
              Descoperă cum această practică poate transforma viața ta zilnică în capitală.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Pilates', 'București', 'Wellness', 'Stres', 'Urban'].map((tag) => (
                <span
                  key={tag}
                  className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative">
        <div className="container-custom">
          <div
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Studio de Pilates modern în București cu echipament profesional"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg prose-neutral max-w-none"
            >
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">De ce Pilates-ul este perfect pentru București?</h2>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Bucureștiul, cu ritmul său alert și stilul de viață urban, poate fi o provocare constantă pentru sănătatea noastră fizică și mentală. 
                Între aglomerația din trafic, orele lungi de stat la birou și stresul zilnic, corpul nostru are nevoie de o practică care să 
                restaureze echilibrul și să ne ofere puterea necesară pentru a face față provocărilor capitalei.
              </p>

              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Pilates-ul, cu accentul său pe controlul corpului, respirația conștientă și mișcările precise, 
                este exact ceea ce ai nevoie pentru a naviga cu succes prin viața urbană din București.
              </p>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">1. Combaterea efectelor statului la birou</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Mulți dintre noi petrecem 8-10 ore pe zi în fața computerului, ceea ce duce la probleme de postură, 
                tensiune în gât și umeri, și dureri de spate. Pilates-ul se concentrează pe întărirea centrului corpului 
                (core-ul) și pe îmbunătățirea posturii, oferind o soluție directă la aceste probleme comune.
              </p>

              <div className="bg-primary-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-semibold text-primary-800 mb-3">💡 Sfat pentru începători:</h4>
                <p className="text-primary-700">
                  Începe cu exerciții de bază de Pilates Mat care se pot face și acasă. 
                  Doar 15-20 de minute pe zi pot face o diferență semnificativă în postura ta.
                </p>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">2. Reducerea stresului urban</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Bucureștiul poate fi o sursă constantă de stres - de la aglomerația din trafic la presiunea profesională. 
                Pilates-ul, prin respirația controlată și mișcările fluide, activează sistemul nervos parasimpatic, 
                ajutând la reducerea nivelului de cortizol și la promovarea unei stări de relaxare profundă.
              </p>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">3. Îmbunătățirea flexibilității și mobilității</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Viața urbană tinde să ne limiteze mișcările - de la statul în mașină la statul la birou. 
                Pilates-ul ajută la menținerea și îmbunătățirea flexibilității articulațiilor, 
                prevenind rigiditatea și durerile asociate cu stilul de viață sedentar.
              </p>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">4. Crearea unei rutine de wellness</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                În București, unde timpul pare să fie întotdeauna limitat, Pilates-ul oferă o rutină eficientă 
                care poate fi adaptată la programul tău ocupat. Fie că alegi clase de 45 de minute sau sesiuni 
                private de 60 de minute, poți găsi opțiuni care se potrivesc stilului tău de viață.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Beneficiile specifice pentru viața din București</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-accent-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-accent-800 mb-3">🚗 Pentru șoferii din București</h4>
                  <ul className="text-accent-700 space-y-2">
                    <li>• Întărirea mușchilor de spate</li>
                    <li>• Îmbunătățirea posturii la volan</li>
                    <li>• Reducerea tensiunii din gât și umeri</li>
                    <li>• Creșterea concentrării</li>
                  </ul>
                </div>

                <div className="bg-secondary-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-secondary-800 mb-3">💼 Pentru profesioniștii de la birou</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• Combaterea efectelor statului prelungit</li>
                    <li>• Îmbunătățirea circulației sanguine</li>
                    <li>• Reducerea durerilor de spate</li>
                    <li>• Creșterea nivelului de energie</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">De ce să alegi un studio local?</h2>

              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Alegerea unui studio de Pilates local în București vine cu beneficii unice pe care nu le găsești 
                în centrele de fitness mari sau în clasele online:
              </p>

              <ul className="list-disc list-inside text-lg text-neutral-600 leading-relaxed mb-8 space-y-3">
                <li><strong>Instrucțiuni personalizate:</strong> Antrenorii locali înțeleg provocările specifice ale vieții din București</li>
                <li><strong>Grupuri mici:</strong> Atenție individualizată și corectare personalizată a exercițiilor</li>
                <li><strong>Flexibilitate de program:</strong> Clase adaptate programului de lucru din București</li>
                <li><strong>Comunitate locală:</strong> Oportunitatea de a cunoaște oameni cu stiluri de viață similare</li>
                <li><strong>Accesibilitate:</strong> Locații convenabile în diferite zone ale orașului</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Cum să începi în București</h2>

              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Dacă ești nou în Pilates sau în București, iată câteva pași pentru a începe:
              </p>

              <div className="bg-neutral-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-semibold text-neutral-800 mb-4">Pași pentru început:</h4>
                <ol className="list-decimal list-inside text-neutral-700 space-y-2">
                  <li>Caută un studio aproape de casă sau de locul de muncă</li>
                  <li>Începe cu o clasă de începători sau o sesiune de evaluare</li>
                  <li>Investește în echipament de bază (covoraș, șosete antiderapante)</li>
                  <li>Stabilește un program realist - chiar și o clasă pe săptămână este un început bun</li>
                  <li>Fii răbdător cu tine însuți - progresul vine treptat</li>
                </ol>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Concluzie</h2>

              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Pilates-ul nu este doar o formă de exercițiu - este o investiție în sănătatea ta fizică și mentală, 
                special adaptată pentru provocările vieții urbane din București. Fie că lucrezi în centru, 
                locuiești în periferie sau îți petreci zilele în trafic, Pilates-ul poate fi cheia pentru o viață 
                mai echilibrată și mai sănătoasă în capitală.
              </p>

              <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Gata să începi călătoria ta cu Pilates-ul?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Rezervă-ți prima clasă gratuită la Meymoon Studio și descoperă personal 
                  beneficiile Pilates-ului pentru viața din București.
                </p>
                <Link
                  href="/programari"
                  className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
                >
                  Rezervă Prima Clasă Gratuită
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
              Articole Similare
            </h2>
            <p className="text-lg text-neutral-600">
              Descoperă mai multe sfaturi despre Pilates și wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ce-este-somatic-breathwork" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-14b1e5d07187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Somatic Breathwork"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors">
                    Ce este Somatic Breathwork
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Explorează tehnica transformatoare de respirație conștientă
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blog/pilates-pentru-incepatori" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Pilates pentru începători"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors">
                    Pilates pentru Începători
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Ghidul complet de început pentru Pilates
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blog/reducera-stresului-prin-miscare" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-14b1e5d07187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Reducerea stresului prin mișcare"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors">
                    Cum să reduci stresul prin mișcare
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Tehnici practice pentru gestionarea stresului zilnic
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
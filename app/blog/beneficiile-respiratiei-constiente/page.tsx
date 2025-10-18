import { Metadata } from 'next'
import Image from 'next/image'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Beneficiile Respirației Conștiente pentru Sănătatea Mentală | Meymoon Studio',
  description: 'Cum tehnica de respirație conștientă îți poate îmbunătăți starea mentală și emoțională. Ghid complet cu exerciții și beneficii științifice.',
  keywords: 'respirație conștientă, sănătate mentală, somatic breathwork, tehnici de respirație, wellness, anxietate, stres',
  openGraph: {
    title: 'Beneficiile Respirației Conștiente pentru Sănătatea Mentală',
    description: 'Cum tehnica de respirație conștientă îți poate îmbunătăți starea mentală și emoțională.',
    images: ['https://images.unsplash.com/photo-1506905925346-14b1e5d07187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
}

export default function BeneficiileRespiratieiConstiente() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-accent-50 via-white to-primary-50">
        <div className="container-custom">
          <div
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Înapoi la Blog
            </Link>

            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <Calendar className="w-4 h-4" />
                <span>15 Decembrie 2023</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <User className="w-4 h-4" />
                <span>Elena Dumitrescu</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <Clock className="w-4 h-4" />
                <span>6 min citire</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Beneficiile Respirației Conștiente
              <span className="block text-gradient">pentru Sănătatea Mentală</span>
            </h1>

            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              Respirația conștientă nu este doar o tehnică de relaxare - este un instrument puternic 
              pentru îmbunătățirea sănătății mentale și emoționale. Descoperă știința din spatele 
              acestei practici transformatoare.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Respirație', 'Sănătate Mentală', 'Somatic Breathwork', 'Wellness', 'Anxietate'].map((tag) => (
                <span
                  key={tag}
                  className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium"
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
              src="https://images.unsplash.com/photo-1506905925346-14b1e5d07187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Tehnici de respirație conștientă pentru sănătatea mentală"
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
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Cum funcționează respirația conștientă</h2>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Respirația conștientă este o tehnică care implică controlul voluntar al ritmului și 
                adâncimii respirației pentru a influența sistemul nervos autonom. Când respiri conștient, 
                activezi sistemul nervos parasimpatic, care este responsabil de răspunsul de relaxare 
                al corpului.
              </p>

              <div className="bg-accent-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-semibold text-accent-800 mb-3">🧠 Știința din spatele respirației conștiente:</h4>
                <ul className="text-accent-700 space-y-2">
                  <li>• <strong>Sistemul nervos parasimpatic:</strong> Se activează prin respirația lentă și profundă</li>
                  <li>• <strong>Vagus nerve:</strong> Nervul vagus transmite semnale de relaxare către creier</li>
                  <li>• <strong>Neurotransmițători:</strong> Crește nivelul de GABA, serotonină și dopamină</li>
                  <li>• <strong>Hormoni:</strong> Reduce cortizolul și adrenalina, hormonii stresului</li>
                </ul>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Beneficiile pentru sănătatea mentală</h2>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">1. Reducerea anxietății și panicii</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Respirația conștientă este una dintre cele mai eficiente tehnici pentru gestionarea 
                anxietății și atacurilor de panică. Prin controlul respirației, poți întrerupe ciclul 
                de hiperventilație care caracterizează aceste stări.
              </p>

              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-green-800 mb-3">Tehnica 4-7-8 pentru anxietate:</h4>
                <ol className="list-decimal list-inside text-green-700 space-y-2">
                  <li>Inspiră prin nas timp de 4 secunde</li>
                  <li>Ține respirația timp de 7 secunde</li>
                  <li>Expiră prin gură timp de 8 secunde</li>
                  <li>Repetă de 4 ori sau până simți relaxarea</li>
                </ol>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">2. Îmbunătățirea stării de spirit</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Respirația conștientă poate avea un impact pozitiv asupra stării de spirit prin 
                eliberarea de endorfine și îmbunătățirea circulației sanguine către creier.
              </p>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">3. Creșterea concentrării și atenției</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Practicarea regulată a respirației conștiente îmbunătățește capacitatea de concentrare 
                și atenție prin activarea cortexului prefrontal, zona creierului responsabilă de 
                funcțiile executive.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Tehnici de respirație conștientă</h2>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">1. Respirația diafragmatică (Belly Breathing)</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Tehnica fundamentală care te învață să respiri cu diafragma în loc de piept:
              </p>

              <div className="bg-primary-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-primary-800 mb-3">Cum se execută:</h4>
                <ol className="list-decimal list-inside text-primary-700 space-y-2">
                  <li>Întinde-te confortabil sau șezi cu spatele drept</li>
                  <li>Pune o mână pe piept și una pe burtă</li>
                  <li>Inspiră lent prin nas, simțind cum burta se umflă</li>
                  <li>Pieptul trebuie să rămână relativ nemișcat</li>
                  <li>Expiră lent prin gură, simțind cum burta se lasă</li>
                  <li>Repetă timp de 5-10 minute</li>
                </ol>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">2. Box Breathing (Respirația în pătrat)</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                O tehnică folosită de militari și sportivi pentru controlul stresului:
              </p>

              <div className="bg-secondary-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-secondary-800 mb-3">Cum se execută:</h4>
                <ol className="list-decimal list-inside text-secondary-700 space-y-2">
                  <li>Inspiră prin nas timp de 4 secunde</li>
                  <li>Ține respirația timp de 4 secunde</li>
                  <li>Expiră prin nas timp de 4 secunde</li>
                  <li>Pauză timp de 4 secunde înainte de următoarea inspirație</li>
                  <li>Repetă ciclul de 4-8 ori</li>
                </ol>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">3. Alternate Nostril Breathing (Nadi Shodhana)</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                O tehnică din yoga care echilibrează sistemul nervos:
              </p>

              <div className="bg-accent-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-accent-800 mb-3">Cum se execută:</h4>
                <ol className="list-decimal list-inside text-accent-700 space-y-2">
                  <li>Șezi confortabil cu spatele drept</li>
                  <li>Folosește degetul mare pentru a închide nara dreaptă</li>
                  <li>Inspiră prin nara stângă</li>
                  <li>Închide nara stângă cu degetul inelar</li>
                  <li>Expiră prin nara dreaptă</li>
                  <li>Repetă procesul în sens invers</li>
                  <li>Continuă timp de 5-10 minute</li>
                </ol>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Beneficiile pe termen lung</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-green-800 mb-3">🧠 Beneficii cognitive:</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• Îmbunătățirea memoriei</li>
                    <li>• Creșterea concentrării</li>
                    <li>• Îmbunătățirea proceselor de gândire</li>
                    <li>• Reducerea &quot;brain fog&quot;-ului</li>
                    <li>• Creșterea creativității</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-blue-800 mb-3">💓 Beneficii emoționale:</h4>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Reducerea stresului cronic</li>
                    <li>• Îmbunătățirea stării de spirit</li>
                    <li>• Creșterea rezilienței</li>
                    <li>• Reducerea irascibilității</li>
                    <li>• Îmbunătățirea relațiilor</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Când să practici respirația conștientă</h2>

              <div className="space-y-6 mb-8">
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-yellow-800 mb-3">🌅 Dimineața</h4>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• Pentru a începe ziua cu energie pozitivă</li>
                    <li>• Pentru a seta intenția pentru zi</li>
                    <li>• Pentru a reduce anxietatea matinală</li>
                    <li>• Pentru a îmbunătăți concentrarea</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-orange-800 mb-3">🌞 În timpul zilei</h4>
                  <ul className="text-orange-700 space-y-2">
                    <li>• Înainte de prezentări importante</li>
                    <li>• Când simți tensiunea crescând</li>
                    <li>• În pauzele de la muncă</li>
                    <li>• Înainte de decizii importante</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-purple-800 mb-3">🌙 Seara</h4>
                  <ul className="text-purple-700 space-y-2">
                    <li>• Pentru a elibera tensiunile zilei</li>
                    <li>• Pentru a pregăti corpul pentru somn</li>
                    <li>• Pentru a procesa experiențele zilei</li>
                    <li>• Pentru a reduce stresul acumulat</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Integrarea în viața zilnică</h2>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Rutina zilnică de respirație</h3>
              
              <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-neutral-800 mb-4">Programul zilnic recomandat:</h4>
                <ul className="text-neutral-700 space-y-2">
                  <li>• <strong>Dimineața (5 min):</strong> Respirație diafragmatică pentru a începe ziua</li>
                  <li>• <strong>La prânz (3 min):</strong> Box breathing pentru a reîncărca energia</li>
                  <li>• <strong>Seara (10 min):</strong> Tehnici de relaxare pentru a elibera tensiunea</li>
                  <li>• <strong>Când e nevoie:</strong> Tehnica 4-7-8 pentru situații stresante</li>
                </ul>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Semnale că ai nevoie de respirație conștientă</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-red-800 mb-3">🚨 Semnale fizice:</h4>
                  <ul className="text-red-700 space-y-2">
                    <li>• Respirație superficială și rapidă</li>
                    <li>• Tensiune în gât și umeri</li>
                    <li>• Palpitări sau ritm cardiac accelerat</li>
                    <li>• Transpirație fără efort fizic</li>
                    <li>• Tremor sau neliniște</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-orange-800 mb-3">🧠 Semnale mentale:</h4>
                  <ul className="text-orange-700 space-y-2">
                    <li>• Gânduri care se învârt în cerc</li>
                    <li>• Dificultăți de concentrare</li>
                    <li>• Sentimente de copleșire</li>
                    <li>• Irascibilitate crescută</li>
                    <li>• Anxietate sau îngrijorare excesivă</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Concluzie</h2>

              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Respirația conștientă este un instrument gratuit, accesibil și extrem de eficient 
                pentru îmbunătățirea sănătății mentale și emoționale. Prin practicarea regulată a 
                acestor tehnici, poți construi o fundație solidă pentru o viață mai echilibrată, 
                mai sănătoasă și mai fericită. Începe cu câteva minute pe zi și observă cum 
                transformarea se întâmplă treptat, dar sigur.
              </p>

              <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Gata să explorezi puterea respirației conștiente?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Rezervă o sesiune de Somatic Breathwork la Meymoon Studio și descoperă 
                  personal beneficiile transformatoare ale acestei practici.
                </p>
                <Link
                  href="/programari"
                  className="bg-white text-accent-600 hover:bg-accent-50 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
                >
                  Rezervă Sesiunea Ta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

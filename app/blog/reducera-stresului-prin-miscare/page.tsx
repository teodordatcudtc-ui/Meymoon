import { Metadata } from 'next'
import Image from 'next/image'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cum să reduci stresul prin mișcarea conștientă | Meymoon Studio',
  description: 'Tehnici practice pentru a gestiona stresul zilnic prin Pilates și Somatic Breathwork. Ghid complet cu exerciții și sfaturi pentru o viață mai echilibrată.',
  keywords: 'reducerea stresului, mișcare conștientă, pilates stres, somatic breathwork, wellness, gestionarea stresului',
  openGraph: {
    title: 'Cum să reduci stresul prin mișcarea conștientă',
    description: 'Tehnici practice pentru a gestiona stresul zilnic prin Pilates și Somatic Breathwork.',
    images: ['https://images.unsplash.com/photo-1506905925346-14b1e5d07187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
}

export default function ReducereaStresuluiPrinMiscare() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary-50 via-white to-accent-50">
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
                <span>28 Decembrie 2023</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <User className="w-4 h-4" />
                <span>Maria Popescu</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <Clock className="w-4 h-4" />
                <span>8 min citire</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Cum să reduci stresul
              <span className="block text-gradient">prin mișcarea conștientă</span>
            </h1>

            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              În lumea modernă, stresul pare să fie o constantă. Descoperă cum Pilates-ul și Somatic Breathwork 
              pot fi instrumentele tale pentru o viață mai echilibrată și mai sănătoasă.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Stres', 'Mișcare', 'Wellness', 'Sănătate', 'Relaxare'].map((tag) => (
                <span
                  key={tag}
                  className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-medium"
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
              alt="Tehnici de reducere a stresului prin mișcare conștientă"
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
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Cum funcționează mișcarea împotriva stresului</h2>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Când simțim stres, corpul nostru intră în modul &quot;luptă sau fugă&quot;, eliberând hormoni precum 
                cortizolul și adrenalina. Mișcarea conștientă, precum Pilates-ul și Somatic Breathwork, 
                activează sistemul nervos parasimpatic, care contrabalansează aceste efecte și aduce corpul 
                într-o stare de relaxare și echilibru.
              </p>

              <div className="bg-secondary-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-semibold text-secondary-800 mb-3">🧠 Știința din spatele mișcării anti-stres:</h4>
                <ul className="text-secondary-700 space-y-2">
                  <li>• <strong>Endorfine:</strong> Mișcarea eliberează endorfine, hormonii fericirii</li>
                  <li>• <strong>Serotonină:</strong> Crește nivelul de serotonină, îmbunătățind starea de spirit</li>
                  <li>• <strong>Cortizol:</strong> Reduce nivelul de cortizol, hormonul stresului</li>
                  <li>• <strong>Oxigenare:</strong> Îmbunătățește circulația și oxigenarea creierului</li>
                </ul>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Tehnici de Pilates pentru reducerea stresului</h2>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">1. Cat-Cow Stretch (Întinderea Pisică-Vacă)</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Un exercițiu excelent pentru eliberarea tensiunii din coloana vertebrală și gât:
              </p>

              <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-neutral-800 mb-3">Cum se execută:</h4>
                <ol className="list-decimal list-inside text-neutral-700 space-y-2">
                  <li>Începe în poziția de mâini și genunchi</li>
                  <li>Inspiră și arcuiește spatele (poziția vacăi)</li>
                  <li>Expiră și rotunjește spatele (poziția pisicii)</li>
                  <li>Repetă 10-15 ori cu mișcări lente și controlate</li>
                  <li>Concentrează-te pe respirație și pe eliberarea tensiunii</li>
                </ol>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">2. Child&apos;s Pose (Poziția Copilului)</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                O poziție de relaxare profundă care calmează sistemul nervos:
              </p>

              <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-neutral-800 mb-3">Cum se execută:</h4>
                <ol className="list-decimal list-inside text-neutral-700 space-y-2">
                  <li>Începe în poziția de mâini și genunchi</li>
                  <li>Îndoaie genunchii și așează-ți fundul pe călcâie</li>
                  <li>Întinde brațele în față și coboară fruntea pe covoraș</li>
                  <li>Respiră profund și simte cum tensiunea se eliberează</li>
                  <li>Menține poziția 2-5 minute</li>
                </ol>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Tehnici de Somatic Breathwork pentru relaxare</h2>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">1. Respirația 4-7-8</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                O tehnică simplă dar foarte eficientă pentru reducerea rapidă a stresului:
              </p>

              <div className="bg-accent-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-accent-800 mb-3">Cum se execută:</h4>
                <ol className="list-decimal list-inside text-accent-700 space-y-2">
                  <li>Inspiră prin nas timp de 4 secunde</li>
                  <li>Ține respirația timp de 7 secunde</li>
                  <li>Expiră prin gură timp de 8 secunde</li>
                  <li>Repetă ciclul de 4 ori</li>
                  <li>Practică de 2-3 ori pe zi sau când simți stresul</li>
                </ol>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">2. Body Scan Breathing</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                O tehnică de conștientizare corporală care te ajută să identifici și să eliberezi tensiunile:
              </p>

              <div className="bg-accent-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-accent-800 mb-3">Cum se execută:</h4>
                <ol className="list-decimal list-inside text-accent-700 space-y-2">
                  <li>Întinde-te confortabil pe spate</li>
                  <li>Începe să respiri profund și lent</li>
                  <li>Concentrează-te pe fiecare parte a corpului, de la degetele de la picioare la vârful capului</li>
                  <li>La fiecare inspirație, imaginează-ți că respiri în acea zonă</li>
                  <li>La fiecare expirație, imaginează-ți că eliberezi tensiunea din acea zonă</li>
                  <li>Petrece 1-2 minute pe fiecare zonă a corpului</li>
                </ol>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Rutina zilnică anti-stres</h2>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Dimineața (5-10 minute)</h3>
              
              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-green-800 mb-3">Rutina matinală:</h4>
                <ul className="text-green-700 space-y-2">
                  <li>• 5 minute de respirație 4-7-8 în pat</li>
                  <li>• 3 minute de Cat-Cow Stretch</li>
                  <li>• 2 minute de Child&apos;s Pose</li>
                  <li>• Setează intenția pentru zi</li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">În timpul zilei (2-5 minute)</h3>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">Pauze de relaxare:</h4>
                <ul className="text-blue-700 space-y-2">
                  <li>• La birou: 5 respirații profunde la fiecare oră</li>
                  <li>• În trafic: Respirația 4-7-8 la semafor</li>
                  <li>• Înainte de o prezentare: Body Scan Breathing</li>
                  <li>• Când simți tensiunea: Child&apos;s Pose sau Cat-Cow</li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Seara (10-15 minute)</h3>
              
              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-purple-800 mb-3">Rutina de seară:</h4>
                <ul className="text-purple-700 space-y-2">
                  <li>• 5 minute de Body Scan Breathing</li>
                  <li>• 5 minute de exerciții de întindere ușoară</li>
                  <li>• 5 minute de respirație 4-7-8 în pat</li>
                  <li>• Reflectează asupra zilei și eliberează tensiunile</li>
                </ul>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Semnale că ai nevoie de o pauză anti-stres</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-red-800 mb-3">🚨 Semnale fizice:</h4>
                  <ul className="text-red-700 space-y-2">
                    <li>• Tensiune în gât și umeri</li>
                    <li>• Dureri de cap frecvente</li>
                    <li>• Probleme de somn</li>
                    <li>• Oboseală constantă</li>
                    <li>• Tensiune musculară</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-orange-800 mb-3">🧠 Semnale emoționale:</h4>
                  <ul className="text-orange-700 space-y-2">
                    <li>• Irritabilitate crescută</li>
                    <li>• Anxietate sau îngrijorare</li>
                    <li>• Dificultăți de concentrare</li>
                    <li>• Sentimente de copleșire</li>
                    <li>• Schimbări de dispoziție</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Beneficiile pe termen lung</h2>

              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Practicarea regulată a acestor tehnici poate duce la îmbunătățiri semnificative în:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-primary-50 rounded-xl p-6 text-center">
                  <h4 className="text-xl font-semibold text-primary-800 mb-2">Sănătatea fizică</h4>
                  <ul className="text-primary-700 text-sm space-y-1">
                    <li>• Reducerea tensiunii musculare</li>
                    <li>• Îmbunătățirea calității somnului</li>
                    <li>• Fortificarea sistemului imunitar</li>
                    <li>• Reducerea riscului de boli cardiovasculare</li>
                  </ul>
                </div>

                <div className="bg-accent-50 rounded-xl p-6 text-center">
                  <h4 className="text-xl font-semibold text-accent-800 mb-2">Sănătatea mentală</h4>
                  <ul className="text-accent-700 text-sm space-y-1">
                    <li>• Reducerea nivelului de anxietate</li>
                    <li>• Îmbunătățirea stării de spirit</li>
                    <li>• Creșterea rezilienței</li>
                    <li>• Îmbunătățirea concentrării</li>
                  </ul>
                </div>

                <div className="bg-secondary-50 rounded-xl p-6 text-center">
                  <h4 className="text-xl font-semibold text-secondary-800 mb-2">Calitatea vieții</h4>
                  <ul className="text-secondary-700 text-sm space-y-1">
                    <li>• Relații mai bune</li>
                    <li>• Performanță mai bună la muncă</li>
                    <li>• Creativitate sporită</li>
                    <li>• Sens general de bine</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Concluzie</h2>

              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Stresul este inevitabil în viața modernă, dar nu trebuie să ne controleze. Prin practicarea 
                regulată a mișcării conștiente și a tehnicilor de respirație, poți construi un arsenal puternic 
                de instrumente pentru gestionarea stresului și pentru o viață mai echilibrată și mai sănătoasă.
              </p>

              <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Gata să începi să-ți gestionezi stresul prin mișcare?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Rezervă-ți o sesiune de Pilates sau Somatic Breathwork la Meymoon Studio și 
                  descoperă personal puterea mișcării conștiente.
                </p>
                <Link
                  href="/programari"
                  className="bg-white text-secondary-600 hover:bg-secondary-50 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
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

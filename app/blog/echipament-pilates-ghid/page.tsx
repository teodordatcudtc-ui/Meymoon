import { Metadata } from 'next'
import Image from 'next/image'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ghidul Complet pentru Echipamentul de Pilates | Meymoon Studio',
  description: 'Tot ce trebuie să știi despre echipamentul de Pilates: de la covoraș la Reformer. Ghid complet cu recomandări și sfaturi de achiziție.',
  keywords: 'echipament pilates, covoraș pilates, reformer pilates, echipament fitness, ghid echipament pilates',
  openGraph: {
    title: 'Ghidul Complet pentru Echipamentul de Pilates',
    description: 'Tot ce trebuie să știi despre echipamentul de Pilates: de la covoraș la Reformer.',
    images: ['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
}

export default function EchipamentPilatesGhid() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
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
                <span>20 Decembrie 2023</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <User className="w-4 h-4" />
                <span>Alexandru Ionescu</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <Clock className="w-4 h-4" />
                <span>9 min citire</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Ghidul Complet pentru
              <span className="block text-gradient">Echipamentul de Pilates</span>
            </h1>

            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              De la covorașul de bază la Reformer-ul profesional, descoperă tot ce ai nevoie 
              pentru a-ți construi un studio de Pilates complet acasă sau pentru a înțelege 
              echipamentul din studiourile profesionale.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Echipament', 'Pilates', 'Reformer', 'Ghid', 'Fitness'].map((tag) => (
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
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Echipament profesional de Pilates într-un studio modern"
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
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Echipamentul esențial pentru începători</h2>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Pentru a începe cu Pilates-ul, ai nevoie de foarte puțin echipament. Iată ce este absolut necesar 
                pentru a construi o fundație solidă în practica ta de Pilates.
              </p>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">1. Covoraș de Pilates (Mat)</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Covorașul este echipamentul cel mai important și cel mai folosit în Pilates. 
                Alege unul de calitate pentru confort și durabilitate.
              </p>

              <div className="bg-primary-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-primary-800 mb-3">Caracteristici importante:</h4>
                <ul className="text-primary-700 space-y-2">
                  <li>• <strong>Grosime:</strong> 6-8mm pentru confort optim</li>
                  <li>• <strong>Material:</strong> PVC sau TPE pentru durabilitate</li>
                  <li>• <strong>Dimensiuni:</strong> 180x60cm (dimensiunea standard)</li>
                  <li>• <strong>Suprafață:</strong> Antiderapantă pe ambele părți</li>
                  <li>• <strong>Greutate:</strong> 1-2kg pentru portabilitate</li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">2. Șosete antiderapante</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Șosetele antiderapante îți oferă stabilitate și previne alunecarea pe covoraș, 
                permițându-ți să te concentrezi pe exerciții fără griji.
              </p>

              <div className="bg-accent-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-accent-800 mb-3">Caracteristici optime:</h4>
                <ul className="text-accent-700 space-y-2">
                  <li>• <strong>Material:</strong> Coton cu cauciuc antiderapant</li>
                  <li>• <strong>Grosime:</strong> Subțire pentru simțirea covorașului</li>
                  <li>• <strong>Design:</strong> Fără degete pentru flexibilitate</li>
                  <li>• <strong>Îngrijire:</strong> Spălare la mașină, temperatură moderată</li>
                </ul>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Echipament pentru nivel intermediar</h2>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">1. Bandă elastică (Resistance Band)</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Banda elastică adaugă rezistență la exerciții și poate fi folosită pentru întărirea 
                mușchilor și îmbunătățirea flexibilității.
              </p>

              <div className="bg-secondary-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-secondary-800 mb-3">Tipuri de benzi elastice:</h4>
                <ul className="text-secondary-700 space-y-2">
                  <li>• <strong>Benzi lungi:</strong> Pentru exerciții de întindere și flexibilitate</li>
                  <li>• <strong>Benzi scurte cu mânere:</strong> Pentru exerciții de rezistență</li>
                  <li>• <strong>Benzi circulare:</strong> Pentru exerciții de picioare și glutee</li>
                  <li>• <strong>Benzi cu diferite rezistențe:</strong> De la ușoare la foarte grele</li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">2. Mingea de Pilates (Pilates Ball)</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Mingea de Pilates adaugă instabilitate la exerciții, întărește centrul corpului 
                și îmbunătățește echilibrul și coordonarea.
              </p>

              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-green-800 mb-3">Dimensiuni recomandate:</h4>
                <ul className="text-green-700 space-y-2">
                  <li>• <strong>55cm:</strong> Pentru persoane înalte (peste 1.70m)</li>
                  <li>• <strong>45cm:</strong> Pentru persoane de înălțime medie (1.60-1.70m)</li>
                  <li>• <strong>35cm:</strong> Pentru persoane scunde (sub 1.60m)</li>
                  <li>• <strong>Material:</strong> PVC sau TPE pentru durabilitate</li>
                </ul>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Echipament avansat pentru studio</h2>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">1. Reformer-ul de Pilates</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Reformer-ul este echipamentul cel mai iconic al Pilates-ului, oferind o varietate 
                enormă de exerciții cu rezistență ajustabilă.
              </p>

              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-purple-800 mb-3">Componente principale:</h4>
                <ul className="text-purple-700 space-y-2">
                  <li>• <strong>Cadru:</strong> Structura principală din lemn sau metal</li>
                  <li>• <strong>Carriage (Sania):</strong> Platforma mobilă pe care stai</li>
                  <li>• <strong>Springs (Arcuri):</strong> Pentru rezistență ajustabilă</li>
                  <li>• <strong>Footbar (Bara de picioare):</strong> Pentru exerciții de picioare</li>
                  <li>• <strong>Straps (Curele):</strong> Pentru exerciții de brațe și picioare</li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">2. Cadillac (Trapeze Table)</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Cadillac-ul este un echipament versatil care permite o gamă largă de exerciții 
                în poziții diferite - șezând, întins sau în picioare.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">Caracteristici unice:</h4>
                <ul className="text-blue-700 space-y-2">
                  <li>• <strong>Platformă înaltă:</strong> Pentru exerciții în poziție verticală</li>
                  <li>• <strong>Bare de susținere:</strong> Pentru exerciții de întindere</li>
                  <li>• <strong>Trapeze:</strong> Pentru exerciții de agățare</li>
                  <li>• <strong>Roller bar:</strong> Pentru exerciții de spate</li>
                </ul>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Echipament suplimentar util</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-yellow-800 mb-3">🏋️‍♀️ Echipament de rezistență</h4>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• <strong>Ghemele de mână:</strong> Pentru exerciții de brațe</li>
                    <li>• <strong>Magic Circle:</strong> Pentru exerciții de centru</li>
                    <li>• <strong>Foam Roller:</strong> Pentru auto-masaj</li>
                    <li>• <strong>Blocuri de yoga:</strong> Pentru sprijin în exerciții</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-red-800 mb-3">📱 Accesorii digitale</h4>
                  <ul className="text-red-700 space-y-2">
                    <li>• <strong>Timer:</strong> Pentru sesiuni structurate</li>
                    <li>• <strong>Muzică relaxantă:</strong> Pentru atmosferă calmă</li>
                    <li>• <strong>Aplicații mobile:</strong> Pentru exerciții ghidate</li>
                    <li>• <strong>Jurnal de antrenament:</strong> Pentru urmărirea progresului</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Cum să alegi echipamentul potrivit</h2>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Pentru începători</h3>
              
              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-green-800 mb-3">Echipamentul de bază:</h4>
                <ul className="text-green-700 space-y-2">
                  <li>• Covoraș de Pilates de calitate</li>
                  <li>• Șosete antiderapante</li>
                  <li>• Haine confortabile</li>
                  <li>• Spațiu de practică (2x1m)</li>
                  <li>• <strong>Buget estimat:</strong> 200-400 RON</li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Pentru nivel intermediar</h3>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">Echipament suplimentar:</h4>
                <ul className="text-blue-700 space-y-2">
                  <li>• Set de benzi elastice (3-5 rezistențe diferite)</li>
                  <li>• Mingea de Pilates</li>
                  <li>• Foam roller</li>
                  <li>• Blocuri de yoga</li>
                  <li>• <strong>Buget estimat:</strong> 400-800 RON</li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Pentru studio profesional</h3>
              
              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-purple-800 mb-3">Echipament profesional:</h4>
                <ul className="text-purple-700 space-y-2">
                  <li>• Reformer de Pilates</li>
                  <li>• Cadillac (Trapeze Table)</li>
                  <li>• Wunda Chair</li>
                  <li>• Ladder Barrel</li>
                  <li>• <strong>Buget estimat:</strong> 15,000-50,000 RON</li>
                </ul>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Îngrijirea și întreținerea echipamentului</h2>

              <div className="space-y-6 mb-8">
                <div className="bg-neutral-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-neutral-800 mb-3">Covoraș de Pilates:</h4>
                  <ul className="text-neutral-700 space-y-2">
                    <li>• Curăță cu șervețel umed după fiecare utilizare</li>
                    <li>• Spală cu apă și săpun blând o dată pe săptămână</li>
                    <li>• Lasă să se usuce complet înainte de a-l înfășura</li>
                    <li>• Depozitează într-un loc uscat și răcoros</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-neutral-800 mb-3">Echipament cu arcuri (Reformer, etc.):</h4>
                  <ul className="text-neutral-700 space-y-2">
                    <li>• Curăță regulat cu șervețel umed</li>
                    <li>• Verifică arcurile pentru uzură o dată pe lună</li>
                    <li>• Ungi părțile mobile cu ulei de mașină ușor</li>
                    <li>• Verifică șuruburile și conexiunile</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-neutral-800 mb-3">Echipament textil (benzi, șosete):</h4>
                  <ul className="text-neutral-700 space-y-2">
                    <li>• Spală la mașină la temperatură moderată</li>
                    <li>• Nu folosi înălbitor sau detergent agresiv</li>
                    <li>• Lasă să se usuce la aer liber</li>
                    <li>• Verifică pentru uzură înainte de fiecare utilizare</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Unde să cumperi echipamentul</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-green-800 mb-3">🏪 Magazine fizice</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• Poți testa echipamentul înainte de cumpărare</li>
                    <li>• Consiliere personalizată de la vânzători</li>
                    <li>• Garantie și service local</li>
                    <li>• Livrare imediată</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-blue-800 mb-3">🛒 Magazine online</h4>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Prețuri mai competitive</li>
                    <li>• Varietate mai mare de produse</li>
                    <li>• Recenzii de la alți cumpărători</li>
                    <li>• Livrare la domiciliu</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Concluzie</h2>

              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Echipamentul de Pilates poate varia de la un covoraș simplu la un studio complet cu 
                Reformer și Cadillac. Cel mai important este să începi cu echipamentul de bază și să 
                adaugi progresiv echipament suplimentar pe măsură ce progresezi în practica ta. 
                Calitatea este mai importantă decât cantitatea - investește în echipament de calitate 
                care va dura mulți ani.
              </p>

              <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Vrei să încerci echipamentul profesional?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Rezervă o sesiune la Meymoon Studio și experimentează cu echipamentul profesional 
                  de Pilates sub îndrumarea antrenorilor noștri certificați.
                </p>
                <Link
                  href="/programari"
                  className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
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

import { Metadata } from 'next'
import Image from 'next/image'
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pilates pentru Începători: Ghidul Complet de Început | Meymoon Studio',
  description: 'Tot ce trebuie să știi despre Pilates dacă ești începător. De la echipament la exerciții de bază, ghid complet pentru începerea călătoriei tale cu Pilates.',
  keywords: 'pilates începători, exerciții pilates, ghid pilates, pilates mat, pilates pentru începători București, exerciții de bază pilates',
  openGraph: {
    title: 'Pilates pentru Începători: Ghidul Complet de Început',
    description: 'Tot ce trebuie să știi despre Pilates dacă ești începător. De la echipament la exerciții de bază.',
    images: ['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
}

export default function PilatesPentruIncepatori() {
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
                <span>5 Ianuarie 2024</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <User className="w-4 h-4" />
                <span>Alexandru Ionescu</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <Clock className="w-4 h-4" />
                <span>6 min citire</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Pilates pentru Începători:
              <span className="block text-gradient">Ghidul Complet de Început</span>
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              Ești nou în lumea Pilates-ului? Acest ghid complet te va ghida prin primii pași, 
              de la echipamentul de bază la exercițiile fundamentale, pentru a-ți construi o fundație solidă.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Pilates', 'Începători', 'Ghid', 'Exerciții', 'Wellness'].map((tag) => (
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
              alt="Exerciții de Pilates pentru începători într-un studio modern"
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
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Ce este Pilates-ul?</h2>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Pilates-ul este un sistem de exerciții dezvoltat de Joseph Pilates în anii 1920, 
                care se concentrează pe întărirea centrului corpului (core-ul), îmbunătățirea posturii, 
                flexibilității și controlului corporal. Metoda combină mișcări precise cu respirație 
                conștientă pentru a crea o experiență de antrenament completă.
              </p>

              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Spre deosebire de alte forme de exerciții, Pilates-ul se concentrează pe calitatea 
                mișcării, nu pe cantitate. Fiecare exercițiu este executat cu control și precizie, 
                făcându-l accesibil pentru persoane de toate vârstele și nivelurile de fitness.
              </p>

              <div className="bg-primary-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-semibold text-primary-800 mb-3">💡 Principiile fundamentale ale Pilates-ului:</h4>
                <ul className="text-primary-700 space-y-2">
                  <li>• <strong>Concentrarea:</strong> Atenție completă la fiecare mișcare</li>
                  <li>• <strong>Controlul:</strong> Execuție precisă și controlată</li>
                  <li>• <strong>Centrarea:</strong> Focus pe centrul corpului (core)</li>
                  <li>• <strong>Respirația:</strong> Coordonarea respirației cu mișcarea</li>
                  <li>• <strong>Precizia:</strong> Execuția corectă a fiecărui exercițiu</li>
                  <li>• <strong>Fluența:</strong> Mișcări fluide și grațioase</li>
                </ul>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">De ce să începi cu Pilates?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-accent-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-accent-800 mb-3">🏃‍♀️ Pentru începători în fitness</h4>
                  <ul className="text-accent-700 space-y-2">
                    <li>• Intensitate moderată, perfectă pentru începători</li>
                    <li>• Exerciții adaptabile la orice nivel</li>
                    <li>• Risc redus de accidentări</li>
                    <li>• Învățare progresivă și structurată</li>
                  </ul>
                </div>

                <div className="bg-secondary-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-secondary-800 mb-3">💪 Pentru sportivi experimentați</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• Îmbunătățirea performanței în alte sporturi</li>
                    <li>• Prevenirea accidentărilor</li>
                    <li>• Întărirea mușchilor de sprijin</li>
                    <li>• Îmbunătățirea controlului corporal</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Echipamentul de bază pentru începători</h2>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Echipamentul esențial</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Pentru a începe cu Pilates-ul, ai nevoie de foarte puțin echipament. Iată ce este absolut necesar:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-green-800 mb-3">1. Covoraș de Pilates (Mat)</h4>
                  <p className="text-green-700 mb-3">
                    Un covoraș antiderapant de cel puțin 6mm grosime este esențial pentru confort și siguranță.
                  </p>
                  <ul className="text-green-700 space-y-1">
                    <li>• Grosime: 6-8mm pentru confort optim</li>
                    <li>• Material: PVC sau TPE pentru durabilitate</li>
                    <li>• Dimensiuni: 180x60cm (dimensiunea standard)</li>
                    <li>• Suprafață: Antiderapantă pe ambele părți</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-blue-800 mb-3">2. Șosete antiderapante</h4>
                  <p className="text-blue-700 mb-3">
                    Șosetele antiderapante îți oferă stabilitate și previne alunecarea pe covoraș.
                  </p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Material: Coton cu cauciuc antiderapant</li>
                    <li>• Grosime: Subțire pentru simțirea covorașului</li>
                    <li>• Design: Fără degete pentru flexibilitate</li>
                    <li>• Spălare: La mașină, la temperatură moderată</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-purple-800 mb-3">3. Haine confortabile</h4>
                  <p className="text-purple-700 mb-3">
                    Hainele trebuie să permită mișcarea liberă și să nu îți distragă atenția.
                  </p>
                  <ul className="text-purple-700 space-y-1">
                    <li>• Material: Coton sau materiale tehnice</li>
                    <li>• Fit: Aproape de corp, dar nu strâmt</li>
                    <li>• Culori: Neutre sau închise pentru confort</li>
                    <li>• Funcționalitate: Fără fermoare sau decorațiuni</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Echipament opțional pentru începători</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-yellow-800 mb-3">🏋️‍♀️ Echipament suplimentar</h4>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• <strong>Bandă elastică:</strong> Pentru exerciții de rezistență</li>
                    <li>• <strong>Mingea de Pilates:</strong> Pentru exerciții de echilibru</li>
                    <li>• <strong>Rolă de spumă:</strong> Pentru auto-masaj</li>
                    <li>• <strong>Blocuri de yoga:</strong> Pentru sprijin în exerciții</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-red-800 mb-3">📱 Accesorii digitale</h4>
                  <ul className="text-red-700 space-y-2">
                    <li>• <strong>Aplicații mobile:</strong> Pentru exerciții ghidate</li>
                    <li>• <strong>Timer:</strong> Pentru sesiuni structurate</li>
                    <li>• <strong>Jurnal de antrenament:</strong> Pentru urmărirea progresului</li>
                    <li>• <strong>Muzică relaxantă:</strong> Pentru atmosferă calmă</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Exerciții de bază pentru începători</h2>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">1. The Hundred (Suta)</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Un exercițiu fundamental care încălzește corpul și întărește centrul:
              </p>

              <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-neutral-800 mb-3">Cum se execută:</h4>
                <ol className="list-decimal list-inside text-neutral-700 space-y-2">
                  <li>Întinde-te pe spate cu genunchii îndoiți</li>
                  <li>Ridică capul și umerii de pe covoraș</li>
                  <li>Întinde brațele de-a lungul corpului</li>
                  <li>Ridică picioarele la unghi de 90 de grade</li>
                  <li>Bate brațele în sus și în jos 100 de ori</li>
                  <li>Respiră în 5 timpi la inspirație și 5 la expirație</li>
                </ol>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">2. Roll Up (Ridicarea)</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Un exercițiu excelent pentru întărirea abdominalelor și îmbunătățirea flexibilității coloanei:
              </p>

              <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-neutral-800 mb-3">Cum se execută:</h4>
                <ol className="list-decimal list-inside text-neutral-700 space-y-2">
                  <li>Întinde-te pe spate cu brațele deasupra capului</li>
                  <li>Inspiră și ridică brațele către tavan</li>
                  <li>Expiră și ridică capul și umerii</li>
                  <li>Continuă să te ridici vertebra cu vertebra</li>
                  <li>Ajungi în poziția șezând cu brațele întinse</li>
                  <li>Reveniți în poziția inițială în mișcare inversă</li>
                </ol>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">3. Single Leg Circle (Cercul cu un picior)</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                Un exercițiu pentru întărirea centrului și îmbunătățirea stabilității:
              </p>

              <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-neutral-800 mb-3">Cum se execută:</h4>
                <ol className="list-decimal list-inside text-neutral-700 space-y-2">
                  <li>Întinde-te pe spate cu brațele de-a lungul corpului</li>
                  <li>Ridică un picior la unghi de 90 de grade</li>
                  <li>Menține centrul stabil și umerii pe covoraș</li>
                  <li>Desenează cercuri mici cu piciorul</li>
                  <li>Fă 5 cercuri în sensul acelor de ceasornic</li>
                  <li>Fă 5 cercuri în sensul invers</li>
                  <li>Repetă cu celălalt picior</li>
                </ol>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Cum să începi prima ta sesiune</h2>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Pregătirea pentru prima sesiune</h3>

              <div className="bg-primary-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-semibold text-primary-800 mb-4">Înainte de prima clasă:</h4>
                <ul className="list-disc list-inside text-primary-700 space-y-2">
                  <li>Nu mânca o oră înainte de clasă</li>
                  <li>Bea apă înainte și după antrenament</li>
                  <li>Îmbracă-te confortabil</li>
                  <li>Ajungi cu 10 minute înainte pentru a te familiariza</li>
                  <li>Informează instructorul despre orice probleme de sănătate</li>
                  <li>Nu te aștepta să fii perfect - progresul vine treptat</li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Structura unei sesiuni de începători</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4 bg-green-50 rounded-lg p-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800">Încălzire (5-10 minute)</h4>
                    <p className="text-green-700">Exerciții ușoare pentru pregătirea corpului</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-blue-50 rounded-lg p-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800">Exerciții de bază (30-40 minute)</h4>
                    <p className="text-blue-700">Serie de exerciții fundamentale de Pilates</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-purple-50 rounded-lg p-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-800">Răcire și relaxare (5-10 minute)</h4>
                    <p className="text-purple-700">Exerciții de relaxare și întindere</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Erori comune la începători</h2>

              <div className="bg-yellow-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-semibold text-yellow-800 mb-4">⚠️ Erori de evitat:</h4>
                <ul className="list-disc list-inside text-yellow-700 space-y-2">
                  <li><strong>Respirația incorectă:</strong> Nu ține respirația - coordonează-o cu mișcarea</li>
                  <li><strong>Mișcări prea rapide:</strong> Pilates-ul se bazează pe control, nu pe viteză</li>
                  <li><strong>Ignorarea centrului:</strong> Concentrează-te întotdeauna pe întărirea core-ului</li>
                  <li><strong>Comparația cu alții:</strong> Fiecare progresează în ritmul său</li>
                  <li><strong>Ignorarea durerilor:</strong> Dacă ceva doare, oprește-te și întreabă instructorul</li>
                </ul>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">De câte ori să practici ca începător</h2>

              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Pentru începători, recomandăm să începi cu 2-3 sesiuni pe săptămână, fiecare de 45-60 de minute. 
                Aceasta îți permite să te familiarizezi cu exercițiile fără să te suprasoliciți.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 rounded-xl p-6 text-center">
                  <h4 className="text-xl font-semibold text-green-800 mb-2">Săptămâna 1-2</h4>
                  <p className="text-green-700">2 sesiuni/săptămână</p>
                  <p className="text-sm text-green-600">Pentru familiarizare</p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <h4 className="text-xl font-semibold text-blue-800 mb-2">Săptămâna 3-4</h4>
                  <p className="text-blue-700">3 sesiuni/săptămână</p>
                  <p className="text-sm text-blue-600">Pentru construirea rutinei</p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 text-center">
                  <h4 className="text-xl font-semibold text-purple-800 mb-2">După 1 lună</h4>
                  <p className="text-purple-700">3-4 sesiuni/săptămână</p>
                  <p className="text-sm text-purple-600">Pentru progres constant</p>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Când să cauți ajutor profesional</h2>

              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Deși poți învăța multe din cărți și video-uri, lucrul cu un instructor certificat 
                este esențial pentru a învăța tehnica corectă și a evita accidentările.
              </p>

              <div className="bg-accent-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-semibold text-accent-800 mb-4">Când să alegi un instructor:</h4>
                <ul className="list-disc list-inside text-accent-700 space-y-2">
                  <li>Ai probleme de sănătate sau accidentări anterioare</li>
                  <li>Vrei să înveți tehnica corectă de la început</li>
                  <li>Ai nevoie de motivație și structură</li>
                  <li>Vrei să progresezi mai rapid</li>
                  <li>Preferi un mediu social și de învățare</li>
                </ul>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Concluzie</h2>

              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Pilates-ul este o investiție excelentă în sănătatea ta fizică și mentală. Ca începător, 
                cel mai important este să începi cu pași mici, să fii răbdător cu tine însuți și să te 
                bucuri de procesul de învățare. Cu echipamentul de bază și exercițiile fundamentale, 
                poți construi o fundație solidă pentru o practică de lungă durată.
              </p>

              <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Gata să începi călătoria ta cu Pilates-ul?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Rezervă-ți prima clasă de începători la Meymoon Studio și descoperă 
                  personal beneficiile acestei practici transformatoare.
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
              Explorează mai multe despre Pilates și wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/beneficiile-pilatesului-in-bucuresti" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Beneficiile Pilates-ului în București"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors">
                    Beneficiile Pilates-ului în București
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    De ce să alegi un studio local pentru Pilates
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blog/echipament-pilates-ghid" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Ghidul Complet pentru Echipamentul de Pilates"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors">
                    Ghidul Complet pentru Echipamentul de Pilates
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Tot ce trebuie să știi despre echipamentul de Pilates
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

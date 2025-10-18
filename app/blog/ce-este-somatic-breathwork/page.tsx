import { Metadata } from 'next'
import Image from 'next/image'
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ce este Somatic Breathwork și cum te poate transforma viața | Meymoon Studio',
  description: 'Explorează tehnica transformatoare de respirație conștientă care îți poate aduce liniștea interioară și echilibrul. Ghid complet despre Somatic Breathwork.',
  keywords: 'somatic breathwork, respirație conștientă, meditație, relaxare, wellness, terapie prin respirație, București',
  openGraph: {
    title: 'Ce este Somatic Breathwork și cum te poate transforma viața',
    description: 'Explorează tehnica transformatoare de respirație conștientă care îți poate aduce liniștea interioară și echilibrul.',
    images: ['https://images.unsplash.com/photo-1506905925346-14b1e5d07187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
}

export default function CeEsteSomaticBreathwork() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-accent-50 via-white to-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
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
                <span>10 Ianuarie 2024</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <User className="w-4 h-4" />
                <span>Elena Dumitrescu</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <Clock className="w-4 h-4" />
                <span>7 min citire</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Ce este Somatic Breathwork
              <span className="block text-gradient">și cum te poate transforma viața</span>
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              Descoperă puterea transformatoare a respirației conștiente. Somatic Breathwork este o tehnică 
              profundă care îți poate aduce liniștea interioară, echilibrul emoțional și o conexiune mai profundă cu tine însuți.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Somatic Breathwork', 'Respirație', 'Relaxare', 'Meditație', 'Wellness'].map((tag) => (
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
              alt="Sesiune de Somatic Breathwork într-un spațiu calm și relaxant"
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
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Ce este Somatic Breathwork?</h2>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Somatic Breathwork este o practică terapeutică care combină tehnici de respirație conștientă cu 
                mișcări corporale și intenție pentru a accesa și elibera tensiunile emoționale și fizice stocate 
                în corp. Spre deosebire de meditația tradițională, Somatic Breathwork se concentrează pe 
                activarea sistemului nervos parasimpatic prin respirație controlată și mișcări intenționate.
              </p>

              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Această tehnică se bazează pe înțelegerea că corpul nostru stochează experiențele emoționale 
                și că prin respirație conștientă putem accesa și elibera aceste tensiuni, permițând vindecarea 
                la nivel somatic (corporal).
              </p>

              <div className="bg-accent-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-semibold text-accent-800 mb-3">🌬️ Definiție simplă:</h4>
                <p className="text-accent-700">
                  Somatic Breathwork = Respirație conștientă + Mișcări corporale + Intenție = 
                  Eliberarea tensiunilor emoționale și fizice stocate în corp
                </p>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Originea și știința din spatele Somatic Breathwork</h2>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Somatic Breathwork își are rădăcinile în practicile antice de respirație din tradițiile 
                orientale, dar a fost adaptat și modernizat pentru a se potrivi nevoilor contemporane. 
                Tehnica combină elemente din:
              </p>

              <ul className="list-disc list-inside text-lg text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li><strong>Pranayama</strong> (tehnici de respirație din yoga)</li>
                <li><strong>Meditația de conștientizare</strong> (mindfulness)</li>
                <li><strong>Terapia somatică</strong> (focus pe experiența corporală)</li>
                <li><strong>Neurobiologia modernă</strong> (înțelegerea sistemului nervos)</li>
    </ul>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Cum funcționează din punct de vedere științific?</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Când practici Somatic Breathwork, respirația controlată activează sistemul nervos parasimpatic, 
                ceea ce duce la:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-primary-800 mb-3">🧠 Efecte pe creier</h4>
                  <ul className="text-primary-700 space-y-2">
                    <li>• Creșterea nivelului de GABA (neurotransmițător calmant)</li>
                    <li>• Reducerea activității în amygdala (centrul fricii)</li>
                    <li>• Stimularea cortexului prefrontal (gândirea rațională)</li>
                    <li>• Activarea sistemului de recompensă</li>
                  </ul>
                </div>

                <div className="bg-secondary-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-secondary-800 mb-3">💓 Efecte pe corp</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• Reducerea ritmului cardiac</li>
                    <li>• Scăderea tensiunii arteriale</li>
                    <li>• Îmbunătățirea digestiei</li>
                    <li>• Stimularea sistemului imunitar</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Beneficiile Somatic Breathwork</h2>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">1. Reducerea stresului și anxietății</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Una dintre cele mai puternice beneficii ale Somatic Breathwork este capacitatea sa de a reduce 
                semnificativ nivelul de stres și anxietate. Prin respirația controlată, corpul intră într-o 
                stare de relaxare profundă, permițând sistemului nervos să se recalibreze.
              </p>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">2. Eliberarea tensiunilor emoționale</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Corpul nostru stochează experiențele emoționale sub formă de tensiuni fizice. Somatic Breathwork 
                oferă o modalitate sigură și controlată de a accesa și elibera aceste tensiuni, permițând 
                vindecarea emoțională la nivel somatic.
              </p>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">3. Îmbunătățirea calității somnului</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Practicarea regulată a Somatic Breathwork poate îmbunătăți semnificativ calitatea somnului 
                prin reducerea nivelului de cortizol și activarea sistemului de relaxare natural al corpului.
              </p>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">4. Creșterea conștientizării corporale</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Somatic Breathwork te învață să fii mai conștient de semnalele corpului tău, permițându-ți 
                să identifici și să răspunzi mai eficient la nevoile tale fizice și emoționale.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Cum să practici Somatic Breathwork</h2>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Pregătirea pentru practică</h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Înainte de a începe o sesiune de Somatic Breathwork, este important să creezi un spațiu 
                sigur și confortabil:
              </p>

              <div className="bg-neutral-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-semibold text-neutral-800 mb-4">Mediul ideal:</h4>
                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                  <li>Un spațiu liniștit, fără distrageri</li>
                  <li>Temperatură confortabilă</li>
                  <li>Iluminat blând sau lumânări</li>
                  <li>O suprafață confortabilă (covoraș, pat sau scaun)</li>
                  <li>Haine largi și confortabile</li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Tehnici de bază</h3>

              <div className="space-y-6 mb-8">
                <div className="bg-primary-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-primary-800 mb-3">1. Respirația în 4 timpi</h4>
                  <p className="text-primary-700 mb-3">
                    O tehnică fundamentală care te ajută să te centrezi și să te relaxezi:
                  </p>
                  <ol className="list-decimal list-inside text-primary-700 space-y-1">
                    <li>Inspiră prin nas timp de 4 secunde</li>
                    <li>Ține respirația timp de 4 secunde</li>
                    <li>Expiră prin gură timp de 4 secunde</li>
                    <li>Pauză timp de 4 secunde înainte de următoarea inspirație</li>
                  </ol>
                </div>

                <div className="bg-accent-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-accent-800 mb-3">2. Respirația circulară</h4>
                  <p className="text-accent-700 mb-3">
                    O tehnică mai avansată pentru eliberarea tensiunilor:
                  </p>
                  <ol className="list-decimal list-inside text-accent-700 space-y-1">
                    <li>Inspiră profund prin nas</li>
                    <li>Expiră rapid prin gură</li>
                    <li>Continuă acest ciclu rapid timp de 2-3 minute</li>
                    <li>Încetinește treptat și revino la respirația normală</li>
                  </ol>
                </div>

                <div className="bg-secondary-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-secondary-800 mb-3">3. Respirația cu mișcări corporale</h4>
                  <p className="text-secondary-700 mb-3">
                    Combină respirația cu mișcări intenționate:
                  </p>
                  <ol className="list-decimal list-inside text-secondary-700 space-y-1">
                    <li>Inspiră și ridică brațele deasupra capului</li>
                    <li>Expiră și coboară brațele în lateral</li>
                    <li>Adaugă mișcări ale gâtului și umerilor</li>
                    <li>Permite corpului să se miște liber cu respirația</li>
                  </ol>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Când să practici Somatic Breathwork</h2>

              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Somatic Breathwork poate fi practicat în orice moment al zilei, dar anumite perioade 
                pot fi mai benefice:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-green-800 mb-3">🌅 Dimineața</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• Pentru a începe ziua cu energie pozitivă</li>
                    <li>• Pentru a seta intenția pentru zi</li>
                    <li>• Pentru a reduce anxietatea matinală</li>
                    <li>• Pentru a îmbunătăți concentrarea</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-blue-800 mb-3">🌙 Seara</h4>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Pentru a elibera tensiunile zilei</li>
                    <li>• Pentru a pregăti corpul pentru somn</li>
                    <li>• Pentru a procesa experiențele zilei</li>
                    <li>• Pentru a reduce stresul acumulat</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Contraindicații și precauții</h2>

              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Deși Somatic Breathwork este în general sigur, există câteva situații în care ar trebui 
                să fii precaut:
              </p>

              <div className="bg-yellow-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-semibold text-yellow-800 mb-3">⚠️ Situații în care să eviți Somatic Breathwork:</h4>
                <ul className="list-disc list-inside text-yellow-700 space-y-2">
                  <li>În timpul sarcinii (fără consultarea medicului)</li>
                  <li>Dacă ai probleme de sănătate cardiovasculară severe</li>
                  <li>Dacă ai epilepsie sau convulsii</li>
                  <li>Dacă ai probleme psihiatrice severe</li>
                  <li>Dacă ești sub influența alcoolului sau drogurilor</li>
                </ul>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">De ce să alegi un studio specializat?</h2>

              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Deși poți practica Somatic Breathwork singur, lucrul cu un instructor certificat oferă 
                beneficii unice:
              </p>

              <ul className="list-disc list-inside text-lg text-neutral-600 leading-relaxed mb-8 space-y-3">
                <li><strong>Siguranță:</strong> Un instructor poate să te ghideze prin tehnici avansate în siguranță</li>
                <li><strong>Personalizare:</strong> Tehnici adaptate nevoilor și experienței tale specifice</li>
                <li><strong>Suport emoțional:</strong> Ghidare prin procesele emoționale care pot apărea</li>
                <li><strong>Progresie structurată:</strong> Un program de învățare pas cu pas</li>
                <li><strong>Comunitate:</strong> Oportunitatea de a practica cu alții într-un mediu sigur</li>
    </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Concluzie</h2>

              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Somatic Breathwork este o tehnică puternică de vindecare și transformare care îți poate 
                aduce liniștea interioară, echilibrul emoțional și o conexiune mai profundă cu tine însuți. 
                Fie că lucrezi cu un instructor sau practici singur, această tehnică poate fi o investiție 
                transformatoare în sănătatea ta mentală și emoțională.
              </p>

              <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Gata să explorezi puterea Somatic Breathwork-ului?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Rezervă-ți o sesiune de Somatic Breathwork la Meymoon Studio și descoperă 
                  personal beneficiile transformatoare ale acestei tehnici.
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
              Explorează mai multe despre wellness și tehnici de relaxare
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

            <Link href="/blog/beneficiile-respiratiei-constiente" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-14b1e5d07187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Beneficiile respirației conștiente"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors">
                    Beneficiile Respirației Conștiente
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Pentru sănătatea mentală și emoțională
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
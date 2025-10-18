import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termeni și Condiții - Meymoon Pilates Studio',
  description: 'Termenii și condițiile de utilizare a serviciilor Meymoon Pilates Studio. Informații despre rezervări, anulări și reguli de studio.',
  robots: 'index, follow',
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Termeni și
              <span className="block text-gradient">Condiții</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg prose-neutral">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">1. Informații Generale</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Acest document stabilește termenii și condițiile de utilizare a serviciilor oferite de Meymoon Pilates Studio 
                (denumit în continuare &quot;Studio&quot;, &quot;noi&quot;, &quot;ne&quot; sau &quot;nostru&quot;), cu sediul în București, Strada Negoiu 51.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Prin utilizarea serviciilor noastre, vă exprimați acordul cu acești termeni și condiții. 
                Dacă nu sunteți de acord cu oricare dintre acestea, vă rugăm să nu utilizați serviciile noastre.
              </p>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">2. Servicii Oferite</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Meymoon Pilates Studio oferă următoarele servicii:
              </p>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li>Clase de Pilates Mat</li>
                <li>Clase de Pilates Reformer</li>
                <li>Sesțiuni de Somatic Breathwork</li>
                <li>Antrenamente private</li>
                <li>Workshop-uri și evenimente speciale</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">3. Rezervări și Anulări</h2>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">3.1 Rezervări</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Toate rezervările trebuie făcute cu cel puțin 24 de ore înainte de începerea clasei. 
                Rezervările se pot face online prin platforma noastră sau prin telefon.
              </p>
              
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">3.2 Politica de Anulare</h3>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li>Anulări făcute cu cel puțin 12 ore înainte: credit complet sau rambursare</li>
                <li>Anulări făcute între 12-2 ore înainte: credit de 50%</li>
                <li>Anulări făcute cu mai puțin de 2 ore: fără credit sau rambursare</li>
                <li>Întârzieri de peste 10 minute: intrarea în clasă poate fi refuzată</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">4. Plata și Prețuri</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Prețurile pentru serviciile noastre sunt afișate pe site-ul nostru și pot fi modificate în orice moment. 
                Plata se poate face prin:
              </p>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li>Numerar la studio</li>
                <li>Card bancar</li>
                <li>Transfer bancar</li>
                <li>Plăți online</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">5. Reguli de Studio</h2>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">5.1 Îmbrăcăminte și Echipament</h3>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-4 space-y-2">
                <li>Îmbrăcăminte confortabilă și potrivită pentru exerciții</li>
                <li>Picioarele goale sau șosete antiderapante</li>
                <li>Echipamentul de protecție va fi furnizat de studio</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-4">5.2 Comportament</h3>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li>Respectarea instrucțiunilor antrenorului</li>
                <li>Menținerea unei atmosfere liniștite și respectuoase</li>
                <li>Interzicerea utilizării telefonului în timpul claselor</li>
                <li>Informarea antrenorului despre orice probleme de sănătate</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">6. Responsabilitate și Limitări</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Participarea la clasele de Pilates și Somatic Breathwork se face pe propriul risc. 
                Vă rugăm să consultați un medic înainte de a începe orice program de exerciții.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Meymoon Pilates Studio nu își asumă responsabilitatea pentru accidente sau răniri care pot apărea 
                în timpul participării la clase, cu excepția cazurilor de neglijență dovedită.
              </p>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">7. Confidențialitate</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Respectăm confidențialitatea datelor dumneavoastră personale conform Politicii de Confidențialitate. 
                Informațiile furnizate vor fi utilizate doar în scopul furnizării serviciilor noastre.
              </p>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">8. Modificări ale Termenilor</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. 
                Modificările vor fi notificate prin intermediul site-ului nostru sau prin email.
              </p>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">9. Contact</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Pentru întrebări sau nelămuriri privind acești termeni și condiții, vă rugăm să ne contactați:
              </p>
              <div className="bg-neutral-50 rounded-lg p-6">
                <p className="text-neutral-700 mb-2"><strong>Email:</strong> info@meymoonstudio.ro</p>
                <p className="text-neutral-700 mb-2"><strong>Telefon:</strong> 0751 901 111</p>
                <p className="text-neutral-700"><strong>Adresă:</strong> Strada Negoiu 51, București</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

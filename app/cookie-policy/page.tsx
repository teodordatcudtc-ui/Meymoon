import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - Meymoon Pilates Studio',
  description: 'Politica de cookie-uri a Meymoon Pilates Studio. Informații despre tipurile de cookie-uri utilizate și cum să le gestionați.',
  robots: 'index, follow',
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Politica de
              <span className="block text-gradient">Cookie-uri</span>
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
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">1. Ce sunt cookie-urile?</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Cookie-urile sunt fișiere text mici care sunt plasate pe computerul sau dispozitivul mobil 
                dumneavoastră când vizitați un site web. Acestea permit site-ului să-și amintească de 
                acțiunile și preferințele dumneavoastră pe o perioadă de timp, astfel încât să nu trebuiască 
                să le reintroduceți de fiecare dată când reveniți la site sau navigați de la o pagină la alta.
              </p>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">2. Cum utilizăm cookie-urile</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Meymoon Pilates Studio utilizează cookie-uri pentru a îmbunătăți experiența dumneavoastră 
                pe site-ul nostru, pentru a analiza modul în care site-ul nostru este utilizat și pentru 
                a personaliza conținutul și reclamele.
              </p>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">3. Tipuri de cookie-uri pe care le utilizăm</h2>
              
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">3.1 Cookie-uri strict necesare</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Aceste cookie-uri sunt esențiale pentru funcționarea site-ului nostru și nu pot fi dezactivate. 
                Ele includ:
              </p>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li>Cookie-uri de sesiune pentru navigarea pe site</li>
                <li>Cookie-uri de securitate pentru protecția datelor</li>
                <li>Cookie-uri pentru funcționalitatea de rezervare</li>
                <li>Cookie-uri pentru preferințele de limbă</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-4">3.2 Cookie-uri de performanță</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Aceste cookie-uri ne ajută să înțelegem cum vizitatorii interacționează cu site-ul nostru, 
                colectând și raportând informații anonime:
              </p>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li>Google Analytics pentru analiza traficului</li>
                <li>Cookie-uri pentru măsurarea performanței paginilor</li>
                <li>Cookie-uri pentru identificarea paginilor populare</li>
                <li>Cookie-uri pentru detectarea erorilor</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-4">3.3 Cookie-uri de funcționalitate</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Aceste cookie-uri permit site-ului să-și amintească alegerile pe care le faceți și 
                să ofere caracteristici îmbunătățite și mai personale:
              </p>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li>Preferințele de afișare</li>
                <li>Setările de accesibilitate</li>
                <li>Informații despre sesiunile de rezervare</li>
                <li>Preferințele de comunicare</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-4">3.4 Cookie-uri de marketing</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Aceste cookie-uri sunt utilizate pentru a afișa reclame care sunt relevante pentru 
                dumneavoastră și interesele dumneavoastră:
              </p>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li>Cookie-uri de rețele publicitare</li>
                <li>Cookie-uri pentru urmărirea conversiilor</li>
                <li>Cookie-uri pentru personalizarea reclamelor</li>
                <li>Cookie-uri pentru remarketing</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">4. Cookie-uri terțe părți</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Site-ul nostru poate conține cookie-uri de la terțe părți, cum ar fi:
              </p>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li><strong>Google Analytics:</strong> pentru analiza traficului și comportamentului utilizatorilor</li>
                <li><strong>Google Maps:</strong> pentru afișarea hărților interactive</li>
                <li><strong>Rețele sociale:</strong> pentru butoanele de partajare socială</li>
                <li><strong>Servicii de plată:</strong> pentru procesarea plăților online</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">5. Durata de viață a cookie-urilor</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-50">
                      <th className="border border-neutral-300 px-4 py-2 text-left">Tip de Cookie</th>
                      <th className="border border-neutral-300 px-4 py-2 text-left">Durata</th>
                      <th className="border border-neutral-300 px-4 py-2 text-left">Descriere</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 px-4 py-2">Sesiune</td>
                      <td className="border border-neutral-300 px-4 py-2">Până la închiderea browser-ului</td>
                      <td className="border border-neutral-300 px-4 py-2">Cookie-uri temporare pentru navigare</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 px-4 py-2">Persistent</td>
                      <td className="border border-neutral-300 px-4 py-2">1-2 ani</td>
                      <td className="border border-neutral-300 px-4 py-2">Cookie-uri care rămân pe dispozitiv</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 px-4 py-2">Analytics</td>
                      <td className="border border-neutral-300 px-4 py-2">2 ani</td>
                      <td className="border border-neutral-300 px-4 py-2">Cookie-uri pentru analiza traficului</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">6. Cum să gestionați cookie-urile</h2>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">6.1 Prin browser</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Puteți controla și/sau șterge cookie-urile oricând doriți. Puteți șterge toate cookie-urile 
                care sunt deja pe computerul dumneavoastră și puteți seta majoritatea browserelor să le blocheze. 
                Dacă faceți acest lucru, este posibil să trebuiască să ajustați manual unele preferințe de 
                fiecare dată când vizitați un site.
              </p>

              <h3 className="text-xl font-semibold text-neutral-800 mb-4">6.2 Instrucțiuni pentru browsere populare:</h3>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li><strong>Chrome:</strong> Setări {'>'} Confidențialitate și securitate {'>'} Cookie-uri</li>
                <li><strong>Firefox:</strong> Opțiuni {'>'} Confidențialitate și securitate {'>'} Cookie-uri</li>
                <li><strong>Safari:</strong> Preferințe {'>'} Confidențialitate {'>'} Cookie-uri</li>
                <li><strong>Edge:</strong> Setări {'>'} Cookie-uri și permisiuni site</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">7. Consimțământul pentru cookie-uri</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Când vizitați site-ul nostru pentru prima dată, vă vom afișa o notificare despre cookie-uri 
                care vă permite să alegeți ce tipuri de cookie-uri acceptați. Puteți modifica preferințele 
                dumneavoastră oricând prin setările browser-ului sau prin contactarea noastră.
              </p>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">8. Impactul dezactivării cookie-urilor</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Dacă alegeți să dezactivați cookie-urile, unele funcționalități ale site-ului nostru 
                pot fi afectate:
              </p>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li>Nu vă vom putea aminti preferințele</li>
                <li>Funcționalitatea de rezervare poate fi limitată</li>
                <li>Conținutul personalizat nu va fi disponibil</li>
                <li>Analiza performanței site-ului va fi afectată</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">9. Modificări ale politicii</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Ne rezervăm dreptul de a modifica această politică de cookie-uri în orice moment. 
                Orice modificări vor fi publicate pe această pagină cu o dată de actualizare revizuită. 
                Vă încurajăm să consultați periodic această pagină pentru a fi la curent cu orice modificări.
              </p>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">10. Contact</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Pentru întrebări despre această politică de cookie-uri, vă rugăm să ne contactați:
              </p>
              <div className="bg-neutral-50 rounded-lg p-6">
                <p className="text-neutral-700 mb-2"><strong>Email:</strong> info@meymoonstudio.ro</p>
                <p className="text-neutral-700 mb-2"><strong>Telefon:</strong> 0751 901 111</p>
                <p className="text-neutral-700"><strong>Adresă:</strong> Strada Negoiu 51, București</p>
              </div>

              <div className="mt-8 p-6 bg-accent-50 rounded-lg">
                <p className="text-accent-700 font-medium">
                  <strong>Notă:</strong> Această politică de cookie-uri este conformă cu Regulamentul General 
                  privind Protecția Datelor (GDPR) și Directiva ePrivacy a Uniunii Europene.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

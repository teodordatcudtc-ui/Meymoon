import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate - Meymoon Pilates Studio',
  description: 'Politica de confidențialitate a Meymoon Pilates Studio. Informații despre colectarea, utilizarea și protejarea datelor personale.',
  robots: 'index, follow',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-accent-50 via-white to-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Politica de
              <span className="block text-gradient">Confidențialitate</span>
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
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">1. Introducere</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Meymoon Pilates Studio (denumit în continuare &quot;Studio&quot;, &quot;noi&quot;, &quot;ne&quot; sau &quot;nostru&quot;) 
                se angajează să protejeze confidențialitatea și securitatea datelor dumneavoastră personale. 
                Această politică de confidențialitate explică cum colectăm, utilizăm și protejăm informațiile dumneavoastră.
              </p>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">2. Informații pe care le colectăm</h2>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">2.1 Informații personale</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Colectăm următoarele tipuri de informații personale:
              </p>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li>Nume și prenume</li>
                <li>Adresă de email</li>
                <li>Număr de telefon</li>
                <li>Adresă de domiciliu</li>
                <li>Data nașterii</li>
                <li>Informații despre sănătate (doar dacă sunt relevante pentru serviciile noastre)</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-4">2.2 Informații tehnice</h3>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li>Adresa IP</li>
                <li>Tipul de browser și versiunea</li>
                <li>Sistemul de operare</li>
                <li>Pagini vizitate pe site-ul nostru</li>
                <li>Timpul petrecut pe site</li>
                <li>Referințele de la care ați ajuns pe site</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">3. Cum utilizăm informațiile</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Utilizăm informațiile colectate în următoarele scopuri:
              </p>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li>Furnizarea serviciilor de Pilates și Somatic Breathwork</li>
                <li>Procesarea rezervărilor și plăților</li>
                <li>Comunicarea cu dumneavoastră despre serviciile noastre</li>
                <li>Îmbunătățirea calității serviciilor oferite</li>
                <li>Conformarea cu obligațiile legale</li>
                <li>Marketing și comunicări promoționale (doar cu consimțământul dumneavoastră)</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">4. Partajarea informațiilor</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Nu vindem, nu închiriem și nu partajăm informațiile dumneavoastră personale cu terțe părți, 
                cu excepția următoarelor situații:
              </p>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li>Cu consimțământul dumneavoastră explicit</li>
                <li>Pentru a ne conforma cu obligațiile legale</li>
                <li>Pentru a proteja drepturile și siguranța noastră sau a altor persoane</li>
                <li>Cu furnizori de servicii care ne ajută să operăm afacerea (sub contracte stricte de confidențialitate)</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">5. Securitatea datelor</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Implementăm măsuri de securitate tehnice și organizaționale adecvate pentru a proteja 
                informațiile dumneavoastră personale împotriva accesului neautorizat, modificării, 
                divulgării sau distrugerii. Acestea includ:
              </p>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li>Criptarea datelor sensibile</li>
                <li>Accesul restricționat la informațiile personale</li>
                <li>Monitorizarea regulată a sistemelor de securitate</li>
                <li>Instruirea personalului privind protecția datelor</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">6. Cookie-uri</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Site-ul nostru utilizează cookie-uri pentru a îmbunătăți experiența dumneavoastră de navigare. 
                Pentru informații detaliate despre utilizarea cookie-urilor, vă rugăm să consultați 
                <a href="/cookie-policy" className="text-primary-500 hover:text-primary-600 underline">Politica noastră de Cookie-uri</a>.
              </p>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">7. Drepturile dumneavoastră</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Conform GDPR, aveți următoarele drepturi:
              </p>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed mb-6 space-y-2">
                <li>Dreptul de a accesa datele dumneavoastră personale</li>
                <li>Dreptul de a rectifica datele inexacte</li>
                <li>Dreptul de a șterge datele (dreptul de a fi uitat)</li>
                <li>Dreptul de a restricționa procesarea</li>
                <li>Dreptul la portabilitatea datelor</li>
                <li>Dreptul de a vă opune procesării</li>
                <li>Dreptul de a retrage consimțământul</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">8. Păstrarea datelor</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Păstrăm informațiile dumneavoastră personale doar atât timp cât este necesar pentru 
                îndeplinirea scopurilor pentru care au fost colectate sau conform cerințelor legale. 
                În general, păstrăm datele pentru o perioadă de 3 ani de la ultima interacțiune.
              </p>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">9. Modificări ale politicii</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Ne rezervăm dreptul de a modifica această politică de confidențialitate în orice moment. 
                Modificările vor fi notificate prin intermediul site-ului nostru sau prin email. 
                Vă încurajăm să consultați periodic această pagină pentru a fi la curent cu orice modificări.
              </p>

              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">10. Contact</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Pentru întrebări sau solicitări privind această politică de confidențialitate sau 
                pentru a vă exercita drepturile, vă rugăm să ne contactați:
              </p>
              <div className="bg-neutral-50 rounded-lg p-6">
                <p className="text-neutral-700 mb-2"><strong>Email:</strong> info@meymoonstudio.ro</p>
                <p className="text-neutral-700 mb-2"><strong>Telefon:</strong> 0751 901 111</p>
                <p className="text-neutral-700"><strong>Adresă:</strong> Strada Negoiu 51, București</p>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <p className="text-primary-700 font-medium">
                  <strong>Notă:</strong> Această politică de confidențialitate este conformă cu Regulamentul General 
                  privind Protecția Datelor (GDPR) al Uniunii Europene.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

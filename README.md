# Meymoon Pilates Studio - Website

Un site web premium pentru studio-ul de Pilates Meymoon din București, construit cu Next.js 14, TypeScript și Tailwind CSS.

## 🚀 Caracteristici

- **Design Premium**: Interfață modernă și elegantă optimizată pentru studio-uri de Pilates
- **Responsive**: Mobile-first design care funcționează perfect pe toate dispozitivele
- **SEO Optimizat**: Meta tags complete, sitemap, robots.txt și structură JSON-LD
- **Performanță**: Optimizat pentru viteza de încărcare și Core Web Vitals
- **Accesibilitate**: Respectă standardele WCAG pentru accesibilitate
- **Animații**: Micro-interacțiuni și tranziții fluide cu Framer Motion
- **Formulare**: Sistem de rezervare complet cu validare client-side

## 📋 Pagini Incluse

- **Acasă**: Hero section, caracteristici, servicii, program, testimoniale
- **Despre**: Povestea studioului, echipa, valorile, Somatic Breathwork
- **Servicii**: Lista completă de servicii cu prețuri și detalii
- **Programări**: Formular de rezervare cu validare
- **Galerie**: Grid de imagini cu lightbox și filtrare
- **Blog**: Articole SEO-optimizate despre Pilates și wellness
- **Contact**: Informații de contact, hartă Google Maps, formulare

## 🛠️ Tehnologii

- **Next.js 14** - Framework React cu App Router
- **TypeScript** - Tipizare statică pentru cod mai sigur
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animații și tranziții
- **React Hook Form** - Gestionarea formularelor
- **React Hot Toast** - Notificări toast
- **Lucide React** - Iconuri SVG

## 🚀 Instalare și Rulare

### Cerințe
- Node.js 18+ 
- npm sau yarn

### Pași de instalare

1. **Clonează repository-ul**
   ```bash
   git clone <repository-url>
   cd meymoon-pilates-studio
   ```

2. **Instalează dependențele**
   ```bash
   npm install
   # sau
   yarn install
   ```

3. **Rulează în modul development**
   ```bash
   npm run dev
   # sau
   yarn dev
   ```

4. **Deschide în browser**
   ```
   http://localhost:3000
   ```

### Comenzi disponibile

```bash
# Development
npm run dev          # Rulează serverul de development

# Production
npm run build        # Construiește aplicația pentru producție
npm run start        # Rulează aplicația în modul producție

# Linting
npm run lint         # Rulează ESLint pentru verificarea codului

# Export static
npm run export       # Generează site-ul static pentru hosting
```

## 📁 Structura Proiectului

```
meymoon-pilates-studio/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Stiluri globale
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Pagina principală
│   ├── despre/            # Pagina Despre
│   ├── servicii/          # Pagina Servicii
│   ├── programari/        # Pagina Programări
│   ├── galerie/           # Pagina Galerie
│   ├── blog/              # Pagina Blog + articole
│   └── contact/           # Pagina Contact
├── components/            # Componente React
│   ├── Header.tsx         # Header cu navigare
│   ├── Footer.tsx         # Footer cu informații
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Secțiunea caracteristici
│   ├── ServicesPreview.tsx # Preview servicii
│   ├── SchedulePreview.tsx # Preview program
│   ├── Testimonials.tsx   # Testimoniale
│   ├── CTA.tsx            # Call-to-action
│   ├── AboutHero.tsx      # Hero pentru Despre
│   ├── OurStory.tsx       # Povestea studioului
│   ├── Team.tsx           # Echipa
│   ├── SomaticBreathwork.tsx # Detalii Somatic Breathwork
│   ├── Values.tsx         # Valorile studioului
│   ├── ServicesHero.tsx   # Hero pentru Servicii
│   ├── ServicesList.tsx   # Lista serviciilor
│   ├── ClassTypes.tsx     # Tipuri de clase
│   ├── Pricing.tsx        # Prețuri
│   ├── BookingHero.tsx    # Hero pentru Programări
│   ├── BookingProcess.tsx # Procesul de rezervare
│   ├── ContactForm.tsx    # Formular de contact
│   ├── GalleryHero.tsx    # Hero pentru Galerie
│   ├── ImageGallery.tsx   # Galeria de imagini
│   ├── BlogHero.tsx       # Hero pentru Blog
│   ├── BlogList.tsx       # Lista articolelor
│   ├── BlogArticle.tsx    # Articol individual
│   ├── ContactHero.tsx    # Hero pentru Contact
│   ├── ContactInfo.tsx    # Informații de contact
│   └── MapSection.tsx     # Secțiunea cu hartă
├── public/                # Fișiere statice
│   ├── robots.txt         # Robots.txt pentru SEO
│   ├── sitemap.xml        # Sitemap XML
│   ├── manifest.json      # Web App Manifest
│   └── favicon.ico        # Favicon
├── next.config.js         # Configurația Next.js
├── tailwind.config.js     # Configurația Tailwind
├── tsconfig.json          # Configurația TypeScript
└── package.json           # Dependențe și scripturi
```

## 🎨 Design System

### Paleta de Culori
- **Primary**: `#906054` (Maro-roz profund)
- **Secondary**: `#e7ded9` (Crem deschis)
- **Accent**: `#22c55e` (Verde pentru CTA)
- **Neutral**: Gama de griuri pentru text și background

### Tipografie
- **Serif**: Playfair Display (pentru titluri)
- **Sans**: Inter (pentru text)

### Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 📧 Configurare Formular de Contact

Pentru a activa formularul de rezervare, înlocuiește `PLACEHOLDER_FORM_ENDPOINT` din `components/ContactForm.tsx` cu endpoint-ul tău:

### Opțiuni recomandate:

1. **Formspree**
   ```javascript
   const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
   ```

2. **Tally**
   ```javascript
   const FORM_ENDPOINT = 'https://tally.so/r/YOUR_FORM_ID'
   ```

3. **Webhook n8n**
   ```javascript
   const FORM_ENDPOINT = 'https://your-n8n-instance.com/webhook/booking'
   ```

## 🚀 Deployment

### Vercel (Recomandat)
1. Conectează repository-ul la Vercel
2. Configurează variabilele de mediu
3. Deploy automat la fiecare push

### Netlify
1. Conectează repository-ul la Netlify
2. Configurează build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
3. Deploy

### Hosting Static
1. Rulează `npm run export`
2. Uploadează conținutul din `out/` pe server

## 🔧 Configurări SEO

### Google Analytics
Adaugă ID-ul tău Google Analytics în `app/layout.tsx`:
```javascript
// Înlocuiește 'your-google-verification-code' cu ID-ul tău
verification: {
  google: 'your-google-verification-code',
}
```

### Meta Tags
Toate paginile au meta tags complete pentru SEO. Actualizează:
- `metadataBase` în `app/layout.tsx`
- Imagini Open Graph în fiecare pagină
- JSON-LD schema în `app/layout.tsx`

## 📱 Optimizări Mobile

- Design mobile-first
- Touch-friendly butoane și linkuri
- Imagini responsive cu `srcset`
- Lazy loading pentru imagini
- Swipe gestures în galerie

## ♿ Accesibilitate

- Semantic HTML5
- ARIA labels pentru elemente interactive
- Keyboard navigation
- Screen reader friendly
- High contrast support
- Reduced motion support

## 🎯 Performance

- Image optimization cu Next.js
- Code splitting automat
- Lazy loading pentru componente
- Critical CSS inlined
- Tree shaking pentru bundle-uri mici

## 📞 Suport

Pentru întrebări sau probleme:
- Email: contact@meymoonstudio.com
- Telefon: 0751 901 111

## 📄 Licență

Acest proiect este proprietatea Meymoon Pilates Studio. Toate drepturile rezervate.

---

**Meymoon Pilates Studio** - București, România
Strada Negoiu 51, București 031126

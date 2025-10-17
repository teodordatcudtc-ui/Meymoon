# Meymoon Pilates Studio - Website Premium

Un site web premium, modern și complet funcțional pentru Meymoon Pilates Studio, construit cu Next.js 14, TypeScript și Tailwind CSS.

## 🎯 Caracteristici

### Design & UX
- **Design premium modern** cu paleta de culori personalizată (#e7ded9, #906054)
- **Responsive design** mobile-first cu optimizare pentru toate dispozitivele
- **Animații fluide** și micro-interacțiuni pentru o experiență premium
- **Accessibility** completă (ARIA, keyboard navigation, contrast optim)
- **Performance optimizat** cu lazy loading și optimizări SEO

### Funcționalități
- **Pagini complete**: Acasă, Despre, Servicii, Clase, Traineri, Blog, Contact
- **Sistem de rezervare** cu modal interactiv
- **Blog cu articole** și sistem de categorii
- **Profiluri detaliate** pentru instructori
- **Integrare Google Maps** cu locația exactă
- **Formulare de contact** cu validare
- **Newsletter signup** în footer

### SEO & Performance
- **SEO maxim** cu meta tags, Open Graph, Twitter Cards
- **Schema.org LocalBusiness** pentru optimizare locală
- **Sitemap.xml** și robots.txt
- **Optimizare Lighthouse** pentru performanță maximă
- **Lazy loading** pentru imagini și componente

## 🛠 Tehnologii

- **Next.js 14** - React framework cu App Router
- **TypeScript** - Type safety și developer experience
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animații și interacțiuni
- **Lucide React** - Iconuri moderne
- **Swiper** - Carousel și slider-uri

## 📁 Structura proiectului

```
meymoon-pilates-studio/
├── app/                          # App Router (Next.js 14)
│   ├── globals.css              # Stiluri globale
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Homepage
│   ├── despre/                  # Pagina Despre
│   ├── servicii/                # Pagina Servicii
│   ├── clase/                   # Pagina Clase
│   ├── traineri/                # Pagina Traineri
│   ├── blog/                    # Blog și articole
│   └── contact/                 # Pagina Contact
├── components/                   # Componente reutilizabile
│   ├── Header.tsx               # Header cu navigare
│   ├── Footer.tsx               # Footer complet
│   ├── Hero.tsx                 # Hero section
│   ├── Services.tsx             # Secțiunea servicii
│   ├── Classes.tsx              # Secțiunea clase
│   ├── Trainers.tsx             # Secțiunea instructori
│   ├── Testimonials.tsx         # Testimoniale
│   └── ...                      # Alte componente
├── public/                      # Assets statice
│   ├── robots.txt               # Robots.txt pentru SEO
│   ├── sitemap.xml              # Sitemap XML
│   ├── manifest.json            # PWA manifest
│   └── _headers                 # Headers pentru securitate
├── tailwind.config.js           # Configurare Tailwind
├── next.config.js               # Configurare Next.js
├── tsconfig.json                # Configurare TypeScript
└── package.json                 # Dependințe și scripturi
```

## 🚀 Instalare și rulare

### Cerințe
- Node.js 18+ 
- npm, yarn sau pnpm

### Instalare
```bash
# Clonează repository-ul
git clone [repository-url]
cd meymoon-pilates-studio

# Instalează dependințele
npm install
# sau
yarn install
# sau
pnpm install
```

### Dezvoltare
```bash
# Pornește serverul de dezvoltare
npm run dev
# sau
yarn dev
# sau
pnpm dev
```

Aplicația va fi disponibilă la `http://localhost:3000`

### Build pentru producție
```bash
# Creează build-ul de producție
npm run build
# sau
yarn build
# sau
pnpm build

# Pornește serverul de producție
npm start
# sau
yarn start
# sau
pnpm start
```

### Export static
```bash
# Generează site-ul static
npm run export
# sau
yarn export
# sau
pnpm export
```

## 📱 Pagini și funcționalități

### 🏠 Homepage
- Hero section cu animații și CTA-uri
- Secțiunea servicii cu carduri interactive
- Programul claselor cu sistem de rezervare
- Profiluri scurte ale instructorilor
- Testimoniale cu carousel
- Statistici și informații despre studio

### 📖 Despre
- Povestea studioului și viziunea
- Valorile și principiile
- Misiunea și obiectivele
- Timeline cu evoluția studioului

### 🧘 Servicii
- Lista completă de servicii
- Secțiune specială pentru Somatic Breathwork
- Prețuri și pachete
- Beneficii și caracteristici pentru fiecare serviciu

### 📅 Clase
- Programul complet săptămânal
- Tipuri de clase cu descrieri
- Sistem de rezervare cu modal
- Informații despre instrucțiuni și echipamente

### 👥 Traineri
- Profiluri detaliate ale instructorilor
- Specializări și certificări
- Realizări și experiență
- Link-uri către social media

### 📝 Blog
- Articole despre wellness și Pilates
- Sistem de categorii
- Articole complete cu conținut SEO optimizat
- Newsletter signup

### 📞 Contact
- Informații de contact complete
- Formular de contact cu validare
- Integrare Google Maps
- Link-uri către social media și WhatsApp

## 🎨 Design System

### Paleta de culori
- **Primary**: #e7ded9 (ton cald, crem)
- **Accent**: #906054 (maro-roșiatic, accent puternic)
- **Neutrals**: Variațiuni de gri și alb

### Tipografie
- **Headings**: Playfair Display (serif elegant)
- **Body**: Inter (sans-serif curat)

### Componente
- **Butoane**: Stiluri primary/secondary cu hover effects
- **Carduri**: Design rotunjit cu umbre și hover animations
- **Formulare**: Stiluri consistente cu validare vizuală
- **Navigare**: Header sticky cu blur effect

## 🔧 Configurare

### Variabile de mediu
Creează un fișier `.env.local` pentru variabilele de mediu:

```env
NEXT_PUBLIC_SITE_URL=https://meymoonstudio.ro
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### Personalizare
- **Culori**: Modifică `tailwind.config.js` pentru a schimba paleta
- **Fonturi**: Actualizează importurile în `app/globals.css`
- **Conținut**: Editează componentele din `components/` și `app/`

## 📈 SEO și Performance

### Optimizări implementate
- Meta tags complete pentru fiecare pagină
- Open Graph și Twitter Cards
- Schema.org LocalBusiness
- Sitemap.xml automat
- Robots.txt configurat
- Lazy loading pentru imagini
- Optimizare pentru Core Web Vitals

### Testare performance
```bash
# Instalează Lighthouse CLI
npm install -g lighthouse

# Testează performance-ul
lighthouse http://localhost:3000 --output html --output-path ./lighthouse.html
```

## 🚀 Deployment

### Vercel (Recomandat)
1. Conectează repository-ul la Vercel
2. Configurează variabilele de mediu
3. Deploy automat la fiecare push

### Netlify
1. Conectează repository-ul la Netlify
2. Configurează build command: `npm run build`
3. Configurează publish directory: `out`

### Server tradițional
1. Rulează `npm run build`
2. Uploadează conținutul din `out/` pe server
3. Configurează serverul pentru SPA routing

## 📞 Suport

Pentru întrebări sau suport tehnic, contactează:
- **Email**: contact@meymoonstudio.ro
- **Telefon**: 0751 901 111

## 📄 Licență

Acest proiect este proprietatea Meymoon Pilates Studio. Toate drepturile rezervate.

---

**Meymoon Pilates Studio** - Transformă-ți viața prin mișcare conștientă și respirație controlată.

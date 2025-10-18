import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Acasă', href: '/' },
    { name: 'Despre', href: '/despre' },
    { name: 'Servicii', href: '/servicii' },
    { name: 'Programări', href: '/programari' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'Pilates Mat', href: '/servicii#pilates-mat' },
    { name: 'Pilates Reformer', href: '/servicii#pilates-reformer' },
    { name: 'Somatic Breathwork', href: '/servicii#somatic-breathwork' },
    { name: 'Antrenamente Private', href: '/servicii#antrenamente-private' },
    { name: 'Workshop-uri', href: '/servicii#workshop-uri' },
  ]

  const legal = [
    { name: 'Termeni și Condiții', href: '/termeni-si-conditii' },
    { name: 'Politica de Confidențialitate', href: '/politica-de-confidentialitate' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Studio Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary-100">Meymoon</h3>
                <p className="text-sm text-neutral-400 -mt-1">Pilates Studio</p>
              </div>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Studio premium de Pilates în București, dedicat să-ți aducă echilibrul, 
              forța și armonia prin mișcarea conștientă.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/meymoonstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/p/MeyMoon-Studio-61558528991097/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-100">Link-uri Rapide</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-100">Servicii</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-100">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-neutral-300">
                    Strada Negoiu 51<br />
                    București 031126
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:0751901111"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  0751 901 111
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:contact@meymoonstudio.com"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  contact@meymoonstudio.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-neutral-300">
                  <p className="font-medium">Program:</p>
                  <p>Lun-Vin: 8:00-20:00</p>
                  <p>Sâm: 9:00-14:00</p>
                  <p>Dum: Închis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4 text-primary-100">
              Abonează-te la Newsletter
            </h4>
            <p className="text-neutral-400 mb-6">
              Primește sfaturi de wellness, programul claselor și oferte speciale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Abonează-te
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              © {currentYear} Meymoon Pilates Studio. Toate drepturile rezervate.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {legal.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

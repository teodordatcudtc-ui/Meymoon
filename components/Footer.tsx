import Link from 'next/link'
import { Phone, MapPin, Clock, Instagram, Facebook, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-custom">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Studio Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-600 to-accent-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-semibold">Meymoon</h3>
                <p className="text-primary-200 text-sm">Pilates Studio</p>
              </div>
            </div>
            <p className="text-primary-200 leading-relaxed">
              Descoperă puterea transformatoare a Pilates și Somatic Breathwork 
              într-un spațiu dedicat wellness-ului și echilibrului personal.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/meymoonstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/p/MeyMoon-Studio-61558528991097/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:0751901111"
                className="flex items-center space-x-3 text-primary-200 hover:text-white transition-colors duration-300"
              >
                <Phone className="w-5 h-5 text-accent-400" />
                <span>0751 901 111</span>
              </a>
              <a
                href="mailto:contact@meymoonstudio.ro"
                className="flex items-center space-x-3 text-primary-200 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-5 h-5 text-accent-400" />
                <span>contact@meymoonstudio.ro</span>
              </a>
              <div className="flex items-start space-x-3 text-primary-200">
                <MapPin className="w-5 h-5 text-accent-400 mt-0.5" />
                <div>
                  <p>Strada Negoiu 51</p>
                  <p>București 031126</p>
                </div>
              </div>
            </div>
          </div>

          {/* Program */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold">Program</h4>
            <div className="space-y-3 text-primary-200">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent-400" />
                <div>
                  <p className="font-medium">Luni - Vineri</p>
                  <p className="text-sm">07:00 - 21:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent-400" />
                <div>
                  <p className="font-medium">Sâmbătă</p>
                  <p className="text-sm">08:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent-400" />
                <div>
                  <p className="font-medium">Duminică</p>
                  <p className="text-sm">09:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold">Newsletter</h4>
            <p className="text-primary-200 text-sm">
              Abonează-te pentru sfaturi de wellness și oferte speciale.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="w-full px-4 py-3 bg-primary-700 border border-primary-600 rounded-xl text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-accent-600 text-white px-4 py-3 rounded-xl font-medium hover:bg-accent-700 transition-colors duration-300"
              >
                Abonează-te
              </button>
            </form>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-300 text-sm">
              © {currentYear} Meymoon Pilates Studio. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/politica-confidentialitate" className="text-primary-300 hover:text-white transition-colors duration-300">
                Politica de confidențialitate
              </Link>
              <Link href="/termeni-si-conditii" className="text-primary-300 hover:text-white transition-colors duration-300">
                Termeni și condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

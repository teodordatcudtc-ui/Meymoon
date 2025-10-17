'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Acasă', href: '/' },
    { name: 'Despre', href: '/despre' },
    { name: 'Servicii', href: '/servicii' },
    { name: 'Clase', href: '/clase' },
    { name: 'Traineri', href: '/traineri' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-600 to-accent-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-playfair font-semibold text-primary-800">
                Meymoon
              </h1>
              <p className="text-sm text-primary-600">Pilates Studio</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-primary-700 hover:text-accent-600 transition-colors duration-300 font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:0751901111"
              className="flex items-center space-x-2 text-primary-700 hover:text-accent-600 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">0751 901 111</span>
            </a>
            <Link
              href="/contact"
              className="btn-primary text-sm px-6 py-3"
            >
              Programează
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-primary-700 hover:text-accent-600 transition-colors duration-300"
            aria-label="Deschide meniul"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-md rounded-2xl mt-4 shadow-xl overflow-hidden"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-primary-700 hover:text-accent-600 transition-colors duration-300 font-medium py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-primary-200">
                  <a
                    href="tel:0751901111"
                    className="flex items-center space-x-2 text-primary-700 hover:text-accent-600 transition-colors duration-300 py-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">0751 901 111</span>
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-primary text-sm px-6 py-3 mt-4 inline-block"
                  >
                    Programează
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header

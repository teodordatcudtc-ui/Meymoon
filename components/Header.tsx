'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Instagram, Facebook } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Acasă', href: '/' },
    { name: 'Despre', href: '/despre' },
    { name: 'Servicii', href: '/servicii' },
    { name: 'Programări', href: '/programari' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-serif font-bold text-primary-500 group-hover:text-primary-600 transition-colors">
                Meymoon
              </h1>
              <p className="text-sm text-neutral-600 -mt-1">Pilates Studio</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors duration-300 hover:text-primary-500 ${
                  isActive(item.href)
                    ? 'text-primary-500'
                    : 'text-neutral-700'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500"
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/programari"
              className="btn-primary text-sm"
            >
              Rezervă Acum
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors hover:bg-primary-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-500" />
            ) : (
              <Menu className="w-6 h-6 text-primary-500" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-neutral-200"
            >
              <div className="py-6 space-y-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 text-lg font-medium transition-colors hover:bg-primary-50 hover:text-primary-500 ${
                        isActive(item.href) ? 'text-primary-500 bg-primary-50' : 'text-neutral-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="px-4 pt-4 border-t border-neutral-200">
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/meymoonstudio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/p/MeyMoon-Studio-61558528991097/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header

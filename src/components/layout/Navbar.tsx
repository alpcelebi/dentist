import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/cn'
import { SITE_NAME, getWhatsAppLink, getPhoneLink } from '@/lib/constants'
import { Container } from './Container'

const navLinks = [
  { href: '/', label: 'Ana Sayfa' }, 
  { href: '/tedaviler', label: 'Tedaviler' },
  { href: '/hekimlerimiz', label: 'Hekimlerimiz' },
  { href: '/klinik', label: 'Klinik' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/iletisim', label: 'İletişim' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Ana navigasyon">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 font-display text-xl md:text-2xl font-bold text-primary-700 hover:text-primary-600 transition-colors"
          >
            <span className="text-2xl md:text-3xl">🦷</span>
            <span>{SITE_NAME}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                  location.pathname === link.href
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50/50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50 rounded-xl transition-colors"
              aria-label="Telefon ile arayın"
            >
              <Phone size={16} />
              <span>Ara</span>
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] rounded-xl transition-colors shadow-sm"
              aria-label="WhatsApp ile yazın"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors cursor-pointer"
            aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <Container className="py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={closeMenu}
                    className={cn(
                      'px-4 py-3 rounded-xl text-base font-medium transition-colors',
                      location.pathname === link.href
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-600 hover:text-primary-700 hover:bg-gray-50'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                  <a
                    href={getPhoneLink()}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-primary-600 rounded-xl"
                    aria-label="Telefon ile arayın"
                  >
                    <Phone size={16} />
                    Ara
                  </a>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#25D366] rounded-xl"
                    aria-label="WhatsApp ile yazın"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

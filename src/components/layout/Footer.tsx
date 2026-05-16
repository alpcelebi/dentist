import { Link } from 'react-router-dom'
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import { Container } from './Container'
import {
  SITE_NAME,
  PHONE,
  ADDRESS,
  WORKING_HOURS,
  getPhoneLink,
  getWhatsAppLink, 
  GOOGLE_MAPS_URL, 
} from '@/lib/constants'

const quickLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/tedaviler', label: 'Tedaviler' },
  { href: '/hekimlerimiz', label: 'Hekimlerimiz' },
  { href: '/klinik', label: 'Klinik' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/iletisim', label: 'İletişim' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-white mb-4">
              <span className="text-2xl">🦷</span>
              {SITE_NAME}
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Modern teknoloji ve uzman kadromuzla gülüşünüze değer katıyoruz. Sağlıklı ve estetik gülüşler için yanınızdayız.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={getPhoneLink()}
                  className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={16} className="shrink-0 mt-0.5" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle size={16} className="shrink-0 mt-0.5" />
                  WhatsApp ile Yazın
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <MapPin size={16} className="shrink-0 mt-0.5" />
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Çalışma Saatleri</h3>
            <ul className="space-y-2">
              {WORKING_HOURS.map((item) => (
                <li key={item.day} className="flex items-start gap-2.5 text-sm text-gray-400">
                  <Clock size={16} className="shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-gray-300">{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <Container className="py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} {SITE_NAME}. Tüm hakları saklıdır.</p>
            <p>
              Tedavi ücretleri muayene sonrası belirlenir. Site bilgileri bilgilendirme amaçlıdır.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

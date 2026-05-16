import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, ArrowRight, Shield, Award, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { getWhatsAppLink, getPhoneLink } from '@/lib/constants'

const stats = [
  { icon: Users, label: 'Mutlu Hasta', value: '10.000+' },
  { icon: Award, label: 'Yıllık Deneyim', value: '15+' },
  { icon: Shield, label: 'Başarılı Tedavi', value: '25.000+' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-light" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary-100)_0%,_transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <Container className="relative pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-600">
                Randevu İçin Hemen Arayın
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Sağlıklı Gülüşler,{' '}
              <span className="text-gradient">Mutlu Yüzler</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Modern teknoloji ve uzman kadromuzla, diş sağlığınız ve estetik gülüşünüz için yanınızdayız. Güvenle gülümseyin.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/tedaviler">
                <Button size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                  Tedavilerimiz
                </Button>
              </Link>
              <Button
                as="a"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                icon={<MessageCircle size={18} />}
              >
                WhatsApp
              </Button>
              <Button
                as="a"
                href={getPhoneLink()}
                variant="outline"
                size="lg"
                icon={<Phone size={18} />}
              >
                Hemen Ara
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <stat.icon size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary-200 via-primary-100 to-accent-100 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-8xl mb-6 block">🦷</span>
                    <p className="text-primary-700 font-display text-2xl font-bold">Luna Dental</p>
                    <p className="text-primary-500 mt-2 text-sm">Gülüşünüze Değer Katıyoruz</p>
                  </div>
                </div>
              </div>
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 top-1/4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">%100 Steril</p>
                    <p className="text-xs text-gray-500">Hijyen Garantisi</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-6 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <Award size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Uzman Kadro</p>
                    <p className="text-xs text-gray-500">15+ Yıl Deneyim</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

import { Phone, MessageCircle, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { getPhoneLink, getWhatsAppLink, GOOGLE_MAPS_URL, PHONE } from '@/lib/constants'

const actions = [
  {
    icon: Phone,
    label: 'Hemen Ara',
    sublabel: PHONE,
    href: getPhoneLink(),
    color: 'bg-primary-600 hover:bg-primary-700',
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp'tan Yaz",
    sublabel: 'Hızlı yanıt alın',
    href: getWhatsAppLink(),
    color: 'bg-[#25D366] hover:bg-[#20BD5A]',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Yol Tarifi Al',
    sublabel: 'Google Maps',
    href: GOOGLE_MAPS_URL,
    color: 'bg-accent-600 hover:bg-accent-700',
    external: true,
  },
]

export function ContactQuickActions() {
  return (
    <section className="py-12 bg-gray-900">
      <Container>
        <div className="grid md:grid-cols-3 gap-4">
          {actions.map((action, index) => (
            <motion.a
              key={action.label}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`flex items-center gap-4 p-5 rounded-2xl text-white transition-all duration-300 ${action.color} hover:scale-[1.02] hover:shadow-xl`}
              aria-label={action.label}
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <action.icon size={24} />
              </div>
              <div>
                <p className="font-semibold text-lg">{action.label}</p>
                <p className="text-sm text-white/70">{action.sublabel}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  )
}

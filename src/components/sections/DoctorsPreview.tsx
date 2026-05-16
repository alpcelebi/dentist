import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle, UserCircle } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Button } from '@/components/ui/Button'
import { doctors } from '@/data/doctors'
import { getPhoneLink, getWhatsAppLink } from '@/lib/constants'

export function DoctorsPreview() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader
          title="Hekimlerimiz"
          subtitle="Alanında uzman, deneyimli ve sürekli kendini geliştiren hekim kadromuz."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <UserCircle size={80} className="text-primary-200" />
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                <p className="text-sm text-primary-600 font-medium">{doctor.title}</p>
                <p className="text-xs text-gray-500 mt-1">{doctor.specialty}</p>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed line-clamp-3">
                  {doctor.bio}
                </p>
                <div className="flex gap-2 mt-4">
                  <a
                    href={getPhoneLink()}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-primary-700 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
                    aria-label={`${doctor.name} - Ara`}
                  >
                    <Phone size={14} />
                    Ara
                  </a>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-white bg-[#25D366] rounded-xl hover:bg-[#20BD5A] transition-colors"
                    aria-label={`${doctor.name} - WhatsApp`}
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/hekimlerimiz">
            <Button variant="outline" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
              Tüm Hekimlerimiz
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

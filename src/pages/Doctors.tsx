import { motion } from 'framer-motion'
import { Phone, MessageCircle, UserCircle } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { doctors } from '@/data/doctors'
import { getPhoneLink, getWhatsAppLink } from '@/lib/constants'
import { ContactQuickActions } from '@/components/sections/ContactQuickActions'

export default function Doctors() {
  return (
    <>
      <section className="pt-28 md:pt-32 pb-16 gradient-light">
        <Container>
          <SectionHeader
            title="Hekimlerimiz"
            subtitle="Alanında uzman, deneyimli ve sürekli kendini geliştiren hekim kadromuzla tanışın."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center overflow-hidden relative">
                  <UserCircle size={100} className="text-primary-200" />
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
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                  <p className="text-primary-600 font-medium mt-1">{doctor.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{doctor.specialty}</p>
                  <p className="text-sm text-gray-500 mt-4 leading-relaxed">{doctor.bio}</p>
                  <div className="flex gap-3 mt-6">
                    <a
                      href={getPhoneLink()}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold text-primary-700 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
                      aria-label={`${doctor.name} - Ara`}
                    >
                      <Phone size={16} />
                      Ara
                    </a>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#25D366] rounded-xl hover:bg-[#20BD5A] transition-colors"
                      aria-label={`${doctor.name} - WhatsApp`}
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      <ContactQuickActions />
    </>
  )
}

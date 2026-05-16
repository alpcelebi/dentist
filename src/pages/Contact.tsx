import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Clock, Navigation } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Button } from '@/components/ui/Button'
import {
  PHONE,
  ADDRESS,
  WORKING_HOURS,
  GOOGLE_MAPS_EMBED,
  getPhoneLink,
  getWhatsAppLink,
  GOOGLE_MAPS_URL,
  SITE_NAME,
} from '@/lib/constants'

export default function Contact() {
  return (
    <>
      <section className="pt-28 md:pt-32 pb-16 gradient-light">
        <Container>
          <SectionHeader
            title="İletişim"
            subtitle="Bize hemen ulaşın. Form doldurmaya gerek yok, doğrudan arayın veya WhatsApp'tan yazın."
          />
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left - Actions */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Hemen Bize Ulaşın
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Tedavileriniz, muayene randevusu veya sorularınız için bizi doğrudan arayabilir ya da
                WhatsApp üzerinden mesaj gönderebilirsiniz. En kısa sürede size dönüş yapacağız.
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Button
                    as="a"
                    href={getPhoneLink()}
                    variant="phone"
                    size="xl"
                    fullWidth
                    icon={<Phone size={22} />}
                  >
                    Hemen Ara — {PHONE}
                  </Button>
                </motion.div>

                {/* WhatsApp */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Button
                    as="a"
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="whatsapp"
                    size="xl"
                    fullWidth
                    icon={<MessageCircle size={22} />}
                  >
                    WhatsApp'tan Yaz
                  </Button>
                </motion.div>

                {/* Directions */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Button
                    as="a"
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="xl"
                    fullWidth
                    icon={<Navigation size={22} />}
                  >
                    Yol Tarifi Al
                  </Button>
                </motion.div>
              </div>

              {/* Info Cards */}
              <div className="mt-10 space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">Adres</h3>
                    <p className="text-sm text-gray-500 mt-1">{ADDRESS}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-2">Çalışma Saatleri</h3>
                    {WORKING_HOURS.map((item) => (
                      <div key={item.day} className="flex justify-between text-sm text-gray-500 py-0.5">
                        <span>{item.day}</span>
                        <span className="font-medium text-gray-700 ml-4">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="sticky top-28">
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    src={GOOGLE_MAPS_EMBED}
                    width="100%"
                    height="500"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${SITE_NAME} Konum`}
                    className="w-full"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-3 text-center">
                  {SITE_NAME} — {ADDRESS}
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}

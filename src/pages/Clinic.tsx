import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Award, HeartHandshake, MessageCircle } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Button } from '@/components/ui/Button'
import { Accordion } from '@/components/ui/Accordion'
import { faqItems } from '@/data/faq'
import { getWhatsAppLink, SITE_NAME } from '@/lib/constants'
import { ContactQuickActions } from '@/components/sections/ContactQuickActions'

const clinicValues = [
  {
    icon: Award,
    title: 'Misyonumuz',
    description:
      'Her hastamıza en üst düzeyde diş sağlığı hizmeti sunmak, güvenilir ve konforlu bir tedavi deneyimi yaşatmak. Gülüşünüze değer katmak en büyük motivasyonumuz.',
  },
  {
    icon: Cpu,
    title: 'Teknolojimiz',
    description:
      'Dijital röntgen, panoramik görüntüleme, intraoral kamera, 3D tarayıcı ve CAD/CAM sistemleri ile en güncel teknolojiyi kullanıyoruz. Hassas teşhis, etkili tedavi.',
  },
  {
    icon: ShieldCheck,
    title: 'Sterilizasyon',
    description:
      'Sağlık Bakanlığı standartlarının üzerinde hijyen protokolleri uyguluyoruz. Otoklav sterilizasyon, tek kullanımlık malzemeler ve kapsamlı dezenfeksiyon süreçleri.',
  },
  {
    icon: HeartHandshake,
    title: 'Hasta Odaklı Yaklaşım',
    description:
      'Her hastamızın ihtiyacı farklıdır. Kişiye özel tedavi planları, detaylı bilgilendirme ve süreç boyunca şeffaf iletişim ile yanınızdayız.',
  },
]

export default function Clinic() {
  const clinicFaq = faqItems.slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-16 gradient-light">
        <Container>
          <SectionHeader
            title="Kliniğimiz"
            subtitle={`${SITE_NAME} olarak modern teknoloji, uzman kadro ve hasta odaklı yaklaşımımızla İstanbul'da hizmet veriyoruz.`}
          />
        </Container>
      </section>

      {/* About */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Güvenilir Diş Sağlığı, <span className="text-gradient">Modern Yaklaşım</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              {SITE_NAME}, İstanbul Kadıköy'de modern altyapısı ve uzman hekim kadrosuyla diş sağlığı
              alanında hizmet vermektedir. Estetik diş hekimliğinden implantolojiye, ortodontiden genel
              tedavilere kadar geniş bir yelpazede, hastalarımıza en iyi tedavi deneyimini sunmayı
              amaçlıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {clinicValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5">
                  <value.icon size={26} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Short */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionHeader
            title="Sık Sorulan Sorular"
            subtitle="Kliniğimiz hakkında merak edilenler."
          />
          <div className="max-w-3xl mx-auto">
            <Accordion items={clinicFaq} />
            <div className="mt-10 text-center">
              <Button
                as="a"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                icon={<MessageCircle size={18} />}
              >
                Daha Fazla Soru? WhatsApp'tan Yazın
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <ContactQuickActions />
    </>
  )
}

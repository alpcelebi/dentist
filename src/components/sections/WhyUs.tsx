import { motion } from 'framer-motion'
import { ShieldCheck, UserCheck, Cpu, HeartHandshake, Clock, Microscope } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Sterilizasyon Garantisi',
    description: 'Sağlık Bakanlığı standartlarının üzerinde sterilizasyon protokolleri uyguluyoruz.',
  },
  {
    icon: UserCheck,
    title: 'Uzman Hekim Kadrosu',
    description: 'Alanında deneyimli, sürekli kendini geliştiren uzman diş hekimleri.',
  },
  {
    icon: Cpu,
    title: 'Modern Teknoloji',
    description: 'Dijital röntgen, 3D tarayıcı ve CAD/CAM sistemleri ile hassas tedavi.',
  },
  {
    icon: HeartHandshake,
    title: 'Hasta Memnuniyeti',
    description: '10.000+ mutlu hasta ve %98 memnuniyet oranı ile güvenilir hizmet.',
  },
  {
    icon: Clock,
    title: 'Zamanında Tedavi',
    description: 'Randevularımız saatinde başlar, tedavi süreçleri planlı ve hızlı ilerler.',
  },
  {
    icon: Microscope,
    title: 'Detaylı Muayene',
    description: 'Her tedavi öncesi kapsamlı muayene ve kişiye özel tedavi planı oluşturuyoruz.',
  },
]

export function WhyUs() {
  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <SectionHeader
          title="Neden Luna Dental?"
          subtitle="Hastalarımızın güvenini kazanmamızı sağlayan temel değerlerimiz."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5">
                <reason.icon size={26} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

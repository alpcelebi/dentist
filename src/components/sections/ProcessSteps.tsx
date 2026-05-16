import { motion } from 'framer-motion'
import { Stethoscope, ClipboardList, HeartPulse } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'

const steps = [
  {
    number: '01',
    icon: Stethoscope,
    title: 'Muayene',
    description:
      'Detaylı ağız içi muayene, dijital röntgen ve panoramik film ile mevcut durumunuz değerlendirilir.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Tedavi Planı',
    description:
      'Size özel tedavi seçenekleri sunulur, süreç ve aşamalar detaylıca anlatılır.',
  },
  {
    number: '03',
    icon: HeartPulse,
    title: 'Uygulama & Takip',
    description:
      'Tedaviniz uzman hekimlerimiz tarafından uygulanır ve düzenli kontrol ile takip edilir.',
  },
]

export function ProcessSteps() {
  return (
    <section className="section-padding gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
      <Container className="relative">
        <SectionHeader
          title="Tedavi Sürecimiz"
          subtitle="3 basit adımda gülüşünüzü yeniliyoruz."
          light
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 text-center"
            >
              <span className="absolute -top-4 left-6 text-5xl font-bold text-white/10 font-display">
                {step.number}
              </span>
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-5">
                <step.icon size={30} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

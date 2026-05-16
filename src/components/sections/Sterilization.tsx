import { motion } from 'framer-motion'
import { ShieldCheck, Droplets, Wind, PackageCheck } from 'lucide-react'
import { Container } from '@/components/layout/Container'

const protocols = [
  {
    icon: PackageCheck,
    title: 'Tek Kullanımlık Malzeme',
    description: 'Eldiven, örtü, aspiratör ucu gibi malzemeler tek kullanımlıktır.',
  },
  {
    icon: ShieldCheck,
    title: 'Otoklav Sterilizasyon',
    description: 'Tüm cerrahi aletler yüksek basınç ve sıcaklıkta otoklav ile sterilize edilir.',
  },
  {
    icon: Droplets,
    title: 'Yüzey Dezenfeksiyonu',
    description: 'Her hasta arasında tüm yüzeyler medikal dezenfektanlarla silinir.',
  },
  {
    icon: Wind,
    title: 'Hava Filtrasyon',
    description: 'HEPA filtreli havalandırma sistemi ile temiz ve steril ortam sağlanır.',
  },
]

export function Sterilization() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-medium mb-4">
              <ShieldCheck size={14} />
              Hijyen ve Güvenlik
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sterilizasyon ve Hijyen{' '}
              <span className="text-gradient">Protokollerimiz</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Hastalarımızın sağlığı ve güvenliği en büyük önceliğimizdir. Kliniğimizde Sağlık Bakanlığı
              standartlarının üzerinde sterilizasyon protokolleri uygulanmaktadır.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {protocols.map((protocol, index) => (
                <motion.div
                  key={protocol.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                    <protocol.icon size={18} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">{protocol.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{protocol.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-green-50 via-primary-50 to-accent-50 flex items-center justify-center">
              <div className="text-center">
                <ShieldCheck size={80} className="text-green-500 mx-auto mb-4" />
                <p className="text-green-700 font-display text-xl font-bold">%100 Steril Ortam</p>
                <p className="text-green-500 text-sm mt-1">Sağlık Bakanlığı Onaylı</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

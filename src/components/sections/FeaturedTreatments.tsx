import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Sun, Diamond, Milestone, LayoutGrid, Layers, AlignCenter, Eye } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { treatments } from '@/data/treatments'
import { getTreatmentWhatsAppLink } from '@/lib/constants'
import { MessageCircle } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sparkles, Sun, Diamond, Milestone, LayoutGrid, Layers, AlignCenter, Eye,
}

export function FeaturedTreatments() {
  const featured = treatments.filter((t) => t.featured)

  return (
    <section className="section-padding bg-white" id="tedaviler">
      <Container>
        <SectionHeader
          title="Tedavilerimiz"
          subtitle="Uzman kadromuz ve modern teknolojimiz ile gülüşünüzü yeniden tasarlıyoruz."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featured.map((treatment, index) => {
            const Icon = iconMap[treatment.icon]
            return (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-4">
                    {Icon ? <Icon size={24} className="text-primary-600" /> : <Sparkles size={24} className="text-primary-600" />}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{treatment.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                    {treatment.description}
                  </p>
                  <Badge variant="info" className="mb-4 self-start">
                    Muayene sonrası planlanır
                  </Badge>
                  <a
                    href={getTreatmentWhatsAppLink(treatment.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#25D366] hover:text-[#20BD5A] transition-colors"
                  >
                    <MessageCircle size={14} />
                    Bilgi Al
                  </a>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link to="/tedaviler">
            <Button variant="outline" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
              Tüm Tedavileri Gör
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

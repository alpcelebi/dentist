import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Sparkles, Sun, Diamond, Milestone, LayoutGrid, Layers, AlignCenter, Eye, Shield, Zap, Minus, Heart, Droplets, Palette, Baby } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { treatments, categoryLabels, type TreatmentCategory } from '@/data/treatments'
import { getTreatmentWhatsAppLink, getWhatsAppLink } from '@/lib/constants'
import { ContactQuickActions } from '@/components/sections/ContactQuickActions'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sparkles, Sun, Diamond, Milestone, LayoutGrid, Layers, AlignCenter, Eye, Shield, Zap, Minus, Heart, Droplets, Palette, Baby,
}

const allCategories: ('all' | TreatmentCategory)[] = [
  'all',
  'estetik',
  'implant-protez',
  'ortodonti',
  'genel',
  'dis-eti',
]

const categoryFilterLabels: Record<string, string> = {
  all: 'Tümü',
  ...categoryLabels,
}

export default function Treatments() {
  const [activeCategory, setActiveCategory] = useState<'all' | TreatmentCategory>('all')

  const filtered =
    activeCategory === 'all'
      ? treatments
      : treatments.filter((t) => t.category === activeCategory)

  return (
    <>
      <section className="pt-28 md:pt-32 pb-16 gradient-light">
        <Container>
          <SectionHeader
            title="Tedavilerimiz"
            subtitle="Diş sağlığınız ve estetik gülüşünüz için kapsamlı tedavi seçeneklerimiz."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700 border border-gray-200'
                }`}
              >
                {categoryFilterLabels[cat]}
              </button>
            ))}
          </div>

          {/* Treatment Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((treatment) => {
                const Icon = iconMap[treatment.icon]
                return (
                  <Card key={treatment.id} className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center shrink-0">
                        {Icon ? (
                          <Icon size={24} className="text-primary-600" />
                        ) : (
                          <Sparkles size={24} className="text-primary-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{treatment.title}</h3>
                        <Badge variant="default" className="mt-1">
                          {categoryLabels[treatment.category]}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                      {treatment.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <Badge variant="info">Muayene sonrası planlanır</Badge>
                      <a
                        href={getTreatmentWhatsAppLink(treatment.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#25D366] hover:text-[#20BD5A] transition-colors"
                      >
                        <MessageCircle size={14} />
                        Bilgi Al
                      </a>
                    </div>
                  </Card>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Bottom CTA */}
          <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 mb-2">
              Tedavi ücretleri ve süreç hakkında detaylı bilgi için
            </p>
            <p className="text-sm text-gray-400 mb-6">
              Her tedavi planı kişiye özeldir. Muayene sonrası size en uygun seçenekler sunulur.
            </p>
            <Button
              as="a"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle size={18} />}
            >
              WhatsApp'tan Bilgi Al
            </Button>
          </div>
        </Container>
      </section>
      <ContactQuickActions />
    </>
  )
}

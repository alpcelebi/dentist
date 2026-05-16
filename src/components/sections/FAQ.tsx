import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { MessageCircle } from 'lucide-react'
import { faqItems } from '@/data/faq'
import { getWhatsAppLink } from '@/lib/constants'

interface FAQSectionProps {
  items?: typeof faqItems
  limit?: number
  showCTA?: boolean
}

export function FAQ({ items, limit, showCTA = true }: FAQSectionProps) {
  const displayItems = (items ?? faqItems).slice(0, limit)

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader
          title="Sık Sorulan Sorular"
          subtitle="Tedavilerimiz ve kliniğimiz hakkında merak ettiğiniz konular."
        />

        <div className="max-w-3xl mx-auto">
          <Accordion items={displayItems} />

          {showCTA && (
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500 mb-4">
                Başka bir sorunuz mu var? Bize ulaşın!
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
                WhatsApp'tan Sorun
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

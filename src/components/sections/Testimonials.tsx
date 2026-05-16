import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { testimonials } from '@/data/testimonials'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} yıldız`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <SectionHeader
          title="Hastalarımız Ne Diyor?"
          subtitle="Binlerce mutlu hastamızın deneyimlerinden bazıları."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote size={32} className="absolute top-4 right-4 text-primary-100" />
              <StarRating rating={testimonial.rating} />
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="mt-5 pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
                <p className="text-xs text-primary-600">{testimonial.treatment}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ImageIcon } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Button } from '@/components/ui/Button'
import { galleryImages } from '@/data/gallery'

export function GalleryPreview() {
  const previewImages = galleryImages.slice(0, 4)

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <SectionHeader
          title="Kliniğimizden Kareler"
          subtitle="Modern ve steril ortamımızda tedavi sürecinizi en konforlu şekilde geçirmenizi sağlıyoruz."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-200"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-50">
                <ImageIcon size={40} className="text-primary-300" />
              </div>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <p className="text-white text-xs p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/galeri">
            <Button variant="outline" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
              Tüm Galeriyi Gör
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

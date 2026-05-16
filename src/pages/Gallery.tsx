import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ImageIcon } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Modal } from '@/components/ui/Modal'
import { galleryImages, type GalleryImage } from '@/data/gallery'
import { ContactQuickActions } from '@/components/sections/ContactQuickActions'

const categories = [
  { value: 'all', label: 'Tümü' },
  { value: 'klinik', label: 'Klinik' },
  { value: 'tedavi', label: 'Tedavi' },
  { value: 'ekip', label: 'Ekip' },
] as const

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'all' | GalleryImage['category']>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const filtered =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <>
      <section className="pt-28 md:pt-32 pb-16 gradient-light">
        <Container>
          <SectionHeader
            title="Galeri"
            subtitle="Kliniğimizi ve tedavi süreçlerimizi yakından tanıyın."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
            >
              {filtered.map((image, index) => (
                <motion.button
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(image)}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 cursor-pointer"
                  aria-label={`${image.alt} - Büyütmek için tıklayın`}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-50">
                    <ImageIcon size={36} className="text-primary-300" />
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
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        {selectedImage && (
          <div className="relative">
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center">
              <ImageIcon size={60} className="text-gray-700 absolute" />
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="relative w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
            </div>
            <p className="text-white text-center mt-4 text-sm">{selectedImage.alt}</p>
          </div>
        )}
      </Modal>

      <ContactQuickActions />
    </>
  )
}

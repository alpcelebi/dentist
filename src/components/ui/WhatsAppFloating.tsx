import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { getWhatsAppLink } from '@/lib/constants'

export function WhatsAppFloating() {
  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-105 transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
    >
      <MessageCircle size={24} className="shrink-0" />
      <span className="hidden sm:inline font-semibold text-sm">WhatsApp</span>
    </motion.a>
  )
}

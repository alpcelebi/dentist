export const SITE_NAME = 'Luna Dental Clinic'
export const SITE_TAGLINE = 'Gülüşünüze Değer Katıyoruz'
export const CITY = 'İstanbul'

export const PHONE = '+90 5XX XXX XX XX'
export const PHONE_RAW = '+905XXXXXXXXX'
export const WHATSAPP_NUMBER = '905XXXXXXXXX'

export const ADDRESS = 'Örnek Mahallesi, Sağlık Caddesi No:42, Kadıköy / İstanbul'
export const GOOGLE_MAPS_URL = 'https://maps.google.com/?q=Luna+Dental+Clinic+Istanbul'
export const GOOGLE_MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6!2d29.0!3d41.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAw!5e0!3m2!1str!2str!4v1'

export const WORKING_HOURS = [
  { day: 'Pazartesi - Cuma', hours: '09:00 - 19:00' },
  { day: 'Cumartesi', hours: '09:00 - 17:00' },
  { day: 'Pazar', hours: 'Kapalı' },
]

export function getWhatsAppLink(message?: string): string {
  const defaultMessage = 'Merhaba, kliniğinizde muayene ve tedaviler hakkında bilgi almak istiyorum.'
  const msg = encodeURIComponent(message ?? defaultMessage)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
}

export function getPhoneLink(): string {
  return `tel:${PHONE_RAW}`
}

export function getTreatmentWhatsAppLink(treatmentName: string): string {
  const message = `Merhaba, ${treatmentName} hakkında bilgi almak istiyorum. Süreç ve uygunluk için detay paylaşabilir misiniz?`
  return getWhatsAppLink(message)
}

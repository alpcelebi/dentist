export type TreatmentCategory = 'estetik' | 'implant-protez' | 'ortodonti' | 'genel' | 'dis-eti'

export interface Treatment {
  id: string
  title: string
  category: TreatmentCategory
  description: string
  icon: string
  featured: boolean
}

export const categoryLabels: Record<TreatmentCategory, string> = {
  estetik: 'Estetik Diş Hekimliği',
  'implant-protez': 'İmplant & Protez',
  ortodonti: 'Ortodonti',
  genel: 'Genel Tedaviler',
  'dis-eti': 'Diş Eti Tedavileri',
}

export const treatments: Treatment[] = [
  {
    id: 'hollywood-smile',
    title: 'Hollywood Smile',
    category: 'estetik',
    description:
      'Doğal ve estetik bir gülüş tasarımı ile yüzünüze uyumlu, mükemmel bir gülümseme elde edin. Dijital gülüş tasarımı ile önceden sonucu görün.',
    icon: 'Sparkles',
    featured: true,
  },
  {
    id: 'dis-beyazlatma',
    title: 'Diş Beyazlatma',
    category: 'estetik',
    description:
      'Profesyonel beyazlatma yöntemleriyle dişlerinizi birkaç ton daha beyaz hale getirin. Güvenli ve etkili sonuçlar.',
    icon: 'Sun',
    featured: true,
  },
  {
    id: 'zirkonyum-kaplama',
    title: 'Zirkonyum Kaplama',
    category: 'estetik',
    description:
      'Doğal diş görünümüne en yakın, dayanıklı ve estetik zirkonyum kaplamalar ile gülüşünüzü yenileyin.',
    icon: 'Diamond',
    featured: true,
  },
  {
    id: 'dental-implant',
    title: 'Dental İmplant',
    category: 'implant-protez',
    description:
      'Eksik dişleriniz için kalıcı ve doğal hissettiren implant çözümleri. Titanyum vida üzerine porselen kaplama ile eksiksiz bir gülüş.',
    icon: 'Milestone',
    featured: true,
  },
  {
    id: 'all-on-4',
    title: 'All-on-4 İmplant',
    category: 'implant-protez',
    description:
      'Tam dişsiz çeneler için sadece 4 implant üzerine sabit protez uygulaması. Aynı gün dişlerinize kavuşun.',
    icon: 'LayoutGrid',
    featured: true,
  },
  {
    id: 'porselen-laminate',
    title: 'Porselen Laminate Veneer',
    category: 'estetik',
    description:
      'İnce porselen yaprakların dişlere yapıştırılmasıyla mükemmel estetik sonuçlar. Minimum diş kaybı ile maksimum estetik.',
    icon: 'Layers',
    featured: true,
  },
  {
    id: 'ortodonti-tel-tedavisi',
    title: 'Ortodonti (Tel Tedavisi)',
    category: 'ortodonti',
    description:
      'Çarpık ve düzensiz dişlerin düzeltilmesi için metal veya seramik braketlerle ortodontik tedavi.',
    icon: 'AlignCenter',
    featured: false,
  },
  {
    id: 'seffaf-plak',
    title: 'Şeffaf Plak (Invisalign)',
    category: 'ortodonti',
    description:
      'Görünmez şeffaf plaklar ile estetik kaygı duymadan dişlerinizi düzeltin. Çıkarılabilir, hijyenik ve konforlu.',
    icon: 'Eye',
    featured: true,
  },
  {
    id: 'dolgu-tedavisi',
    title: 'Dolgu Tedavisi',
    category: 'genel',
    description:
      'Çürük dişlerin estetik kompozit dolgu ile onarımı. Doğal diş renginde, dayanıklı dolgular.',
    icon: 'Shield',
    featured: false,
  },
  {
    id: 'kanal-tedavisi',
    title: 'Kanal Tedavisi',
    category: 'genel',
    description:
      'İltihaplanmış veya enfekte olmuş diş sinirinin tedavisi. Modern yöntemlerle ağrısız ve güvenli süreç.',
    icon: 'Zap',
    featured: false,
  },
  {
    id: 'dis-cekimi',
    title: 'Diş Çekimi',
    category: 'genel',
    description:
      'Yirmilik diş çekimi dahil tüm cerrahi ve basit diş çekimleri. Lokal anestezi ile ağrısız uygulama.',
    icon: 'Minus',
    featured: false,
  },
  {
    id: 'dis-eti-tedavisi',
    title: 'Diş Eti Tedavisi',
    category: 'dis-eti',
    description:
      'Diş eti kanaması, çekilme ve iltihaplanma tedavisi. Periodontal tedavi ile diş eti sağlığınızı koruyun.',
    icon: 'Heart',
    featured: false,
  },
  {
    id: 'dis-tasi-temizligi',
    title: 'Diş Taşı Temizliği',
    category: 'genel',
    description:
      'Ultrasonik cihazlarla diş taşı ve plak temizliği. Düzenli temizlik ile diş eti hastalıklarını önleyin.',
    icon: 'Droplets',
    featured: false,
  },
  {
    id: 'dis-eti-estetigi',
    title: 'Diş Eti Estetiği',
    category: 'dis-eti',
    description:
      'Gummy smile tedavisi ve diş eti şekillendirme ile gülüşünüzde estetik uyum sağlayın.',
    icon: 'Palette',
    featured: false,
  },
  {
    id: 'cocuk-dis-hekimligi',
    title: 'Çocuk Diş Hekimliği',
    category: 'genel',
    description:
      'Çocuklara özel yaklaşımla koruyucu ve tedavi edici diş hekimliği uygulamaları. Fissür örtücü, flor uygulaması.',
    icon: 'Baby',
    featured: false,
  },
]

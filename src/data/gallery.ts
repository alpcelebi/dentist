import { publicAsset } from '@/lib/assets'

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'klinik' | 'tedavi' | 'ekip'
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: publicAsset('images/gallery/clinic-1.jpg'),
    alt: 'Modern diş kliniği tedavi odası ve ekipmanları',
    category: 'klinik',
  },
  {
    id: '2',
    src: publicAsset('images/gallery/clinic-2.jpg'),
    alt: 'Son teknoloji tedavi ünitesi',
    category: 'klinik',
  },
  {
    id: '3',
    src: publicAsset('images/gallery/clinic-3.jpg'),
    alt: 'Profesyonel diş hekimliği aletleri',
    category: 'klinik',
  },
  {
    id: '4',
    src: publicAsset('images/gallery/clinic-4.jpg'),
    alt: 'Steril tedavi ortamı',
    category: 'klinik',
  },
  {
    id: '5',
    src: publicAsset('images/gallery/treatment-1.jpg'),
    alt: 'Hasta muayenesi ve tedavi süreci',
    category: 'tedavi',
  },
  {
    id: '6',
    src: publicAsset('images/gallery/treatment-2.jpg'),
    alt: 'Diş tedavisi uygulama anı',
    category: 'tedavi',
  },
  {
    id: '7',
    src: publicAsset('images/gallery/team-1.jpg'),
    alt: 'Luna Dental Clinic uzman ekibi',
    category: 'ekip',
  },
  {
    id: '8',
    src: publicAsset('images/gallery/clinic-5.jpg'),
    alt: 'Konforlu klinik ortamı',
    category: 'klinik',
  },
]

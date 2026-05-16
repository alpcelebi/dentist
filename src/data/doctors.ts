import { publicAsset } from '@/lib/assets'

export interface Doctor {
  id: string
  name: string
  title: string
  specialty: string
  bio: string
  image: string
}

export const doctors: Doctor[] = [
  {
    id: 'dr-ayse-yilmaz',
    name: 'Dr. Ayşe Yılmaz',
    title: 'Diş Hekimi',
    specialty: 'Estetik Diş Hekimliği & Gülüş Tasarımı',
    bio: '15 yılı aşkın deneyimi ile estetik diş hekimliği alanında uzmanlaşmış olan Dr. Ayşe Yılmaz, binlerce hastaya kusursuz gülüşler kazandırmıştır. Dijital gülüş tasarımı ve minimal invaziv yaklaşımlar konusunda sürekli kendini geliştirmektedir.',
    image: publicAsset('images/doctor-1.jpg'),
  },
  {
    id: 'dr-mehmet-kaya',
    name: 'Dr. Mehmet Kaya',
    title: 'Diş Hekimi, PhD',
    specialty: 'İmplantoloji & Ağız Cerrahisi',
    bio: 'İmplantoloji alanında doktora derecesine sahip olan Dr. Mehmet Kaya, karmaşık implant vakalarında geniş deneyime sahiptir. All-on-4, sinüs lifting ve kemik grefti operasyonlarında uzmanlaşmıştır.',
    image: publicAsset('images/doctor-2.jpg'),
  },
  {
    id: 'dr-elif-demir',
    name: 'Dr. Elif Demir',
    title: 'Uzman Diş Hekimi',
    specialty: 'Ortodonti',
    bio: 'Ortodonti uzmanı Dr. Elif Demir, geleneksel braket sistemlerinin yanı sıra şeffaf plak tedavileri konusunda da uzmanlaşmıştır. Çocuk ve yetişkin ortodontisinde kapsamlı deneyime sahiptir.',
    image: publicAsset('images/doctor-3.jpg'),
  },
]

export interface Testimonial {
  id: string
  name: string
  treatment: string
  text: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Zeynep K.',
    treatment: 'Hollywood Smile',
    text: 'Yıllardır gülümsemekten çekiniyordum. Luna Dental sayesinde artık özgüvenle gülümsüyorum. Dr. Ayşe Hanım\'ın titizliği ve ilgisi gerçekten takdire şayan. Sonuçtan çok memnunum.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ahmet B.',
    treatment: 'Dental İmplant',
    text: 'İmplant tedavisi sürecim çok rahat geçti. Dr. Mehmet Bey her aşamayı detaylıca anlattı ve hiç endişelenmedim. Artık doğal dişlerimden farkı yok. Kesinlikle tavsiye ediyorum.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Fatma S.',
    treatment: 'Ortodonti',
    text: 'Şeffaf plak tedavisi ile dişlerimi düzelttim. Kimse fark etmedi bile! Dr. Elif Hanım çok sabırlı ve ilgili. Kliniğin temizliği ve modern ortamı da ayrı bir güven veriyor.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Emre T.',
    treatment: 'Zirkonyum Kaplama',
    text: 'Zirkonyum kaplamalarım o kadar doğal görünüyor ki, en yakın arkadaşım bile yaptırdığımı anlamadı. Klinik çok profesyonel, her şey zamanında ve planlı ilerledi.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Selin M.',
    treatment: 'Diş Beyazlatma',
    text: 'Tek seansta dişlerimin ne kadar beyazlaştığına inanamadım! İşlem tamamen ağrısız ve sonuç muhteşem. Çok teşekkür ediyorum Luna Dental ekibine.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Murat D.',
    treatment: 'All-on-4 İmplant',
    text: 'Uzun süredir protez kullanıyordum ve çok rahatsızdı. All-on-4 tedavisi hayatımı değiştirdi. Artık rahatça yemek yiyebiliyorum ve gülümsüyorum. Tüm ekibe teşekkürler.',
    rating: 5,
  },
]

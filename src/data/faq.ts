export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'İlk muayene nasıl gerçekleşir?',
    answer:
      'İlk muayenenizde detaylı ağız içi muayene, gerekirse dijital röntgen ve panoramik film çekimi yapılır. Ardından tedavi seçenekleriniz ve süreç hakkında bilgilendirilirsiniz. Muayene için randevu almak için bizi arayabilir veya WhatsApp\'tan ulaşabilirsiniz.',
  },
  {
    id: '2',
    question: 'Tedavi ücretleri hakkında bilgi alabilir miyim?',
    answer:
      'Her hastanın tedavi ihtiyacı farklı olduğundan, ücretlendirme muayene sonrasında kişiye özel tedavi planına göre belirlenir. Detaylı bilgi ve muayene randevusu için bizimle iletişime geçebilirsiniz.',
  },
  {
    id: '3',
    question: 'İmplant tedavisi ağrılı mıdır?',
    answer:
      'İmplant operasyonu lokal anestezi altında gerçekleştirilir ve işlem sırasında herhangi bir ağrı hissedilmez. Operasyon sonrasında hafif bir ağrı ve şişlik olabilir, ancak reçete edilen ilaçlarla rahatlıkla kontrol altına alınır.',
  },
  {
    id: '4',
    question: 'Hollywood Smile ne kadar sürer?',
    answer:
      'Hollywood Smile tedavisi genellikle 5-7 gün içinde tamamlanır. İlk seansta dişler hazırlanır ve ölçü alınır, ikinci seansta porselen laminatlar veya kaplamalar uygulanır. Dijital gülüş tasarımı ile sonucu önceden görebilirsiniz.',
  },
  {
    id: '5',
    question: 'Kliniğinizde sterilizasyon nasıl sağlanıyor?',
    answer:
      'Kliniğimizde Sağlık Bakanlığı standartlarının üzerinde sterilizasyon protokolleri uygulanmaktadır. Tüm aletler otoklav ile sterilize edilir, tek kullanımlık malzemeler tercih edilir ve her hasta arasında kapsamlı dezenfeksiyon yapılır.',
  },
  {
    id: '6',
    question: 'Şeffaf plak (Invisalign) tedavisi ne kadar sürer?',
    answer:
      'Şeffaf plak tedavisinin süresi vakanın karmaşıklığına göre 6 ay ile 18 ay arasında değişir. Tedavi süresi ve uygunluk muayene sonrasında belirlenir. Plaklar 2 haftada bir değiştirilir.',
  },
  {
    id: '7',
    question: 'Kliniğinize nasıl ulaşabilirim?',
    answer:
      'Kliniğimiz İstanbul Kadıköy\'de yer almaktadır. Toplu taşıma ve özel araçla kolayca ulaşabilirsiniz. Detaylı yol tarifi için web sitemizden "Yol Tarifi Al" butonunu kullanabilirsiniz.',
  },
  {
    id: '8',
    question: 'Çalışma saatleriniz nedir?',
    answer:
      'Kliniğimiz Pazartesi-Cuma 09:00-19:00 ve Cumartesi 09:00-17:00 saatleri arasında hizmet vermektedir. Pazar günleri kapalıyız. Randevu için bizi arayabilir veya WhatsApp üzerinden ulaşabilirsiniz.',
  },
]

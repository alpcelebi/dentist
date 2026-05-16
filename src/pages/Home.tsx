import { Hero } from '@/components/sections/Hero'
import { FeaturedTreatments } from '@/components/sections/FeaturedTreatments'
import { WhyUs } from '@/components/sections/WhyUs'
import { Sterilization } from '@/components/sections/Sterilization'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { GalleryPreview } from '@/components/sections/GalleryPreview'
import { DoctorsPreview } from '@/components/sections/DoctorsPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { ContactQuickActions } from '@/components/sections/ContactQuickActions'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedTreatments />
      <WhyUs />
      <Sterilization />
      <ProcessSteps />
      <GalleryPreview />
      <DoctorsPreview />
      <Testimonials />
      <FAQ limit={5} />
      <ContactQuickActions />
    </>
  )
}

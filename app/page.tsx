import { HeroSection } from '@/components/sections/HeroSection'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { ProgramsPreview } from '@/components/sections/ProgramsPreview'
import { StatsSection } from '@/components/sections/StatsSection'
import { ArtistsCarousel } from '@/components/sections/ArtistsCarousel'
import { EventsPreview } from '@/components/sections/EventsPreview'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProgramsPreview />
      <StatsSection />
      <ArtistsCarousel />
      <EventsPreview />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </>
  )
}

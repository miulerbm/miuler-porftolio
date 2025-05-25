import {
  MainLayout,
  HeroSection,
  AboutSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection,
} from '@/components'

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </MainLayout>
  )
}

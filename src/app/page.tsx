import { MainLayout, HeroSection } from '@/components'

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />

      {/* Secciones temporales para probar navegación */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-muted/30"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Sobre mí</h2>
          <p className="text-muted-foreground">Sección en construcción...</p>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Proyectos</h2>
          <p className="text-muted-foreground">Sección en construcción...</p>
        </div>
      </section>

      <section
        id="experience"
        className="min-h-screen flex items-center justify-center bg-muted/30"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Experiencia</h2>
          <p className="text-muted-foreground">Sección en construcción...</p>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-muted-foreground">Sección en construcción...</p>
        </div>
      </section>
    </MainLayout>
  )
}

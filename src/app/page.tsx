import { Button, ThemeToggle } from '@/components/ui'
import { cn } from '@/lib'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header temporal */}
      <header className="section-padding py-4 border-b">
        <div className="container-width flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gradient">Miuler</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Contenido de prueba */}
      <section className="section-padding py-16">
        <div className="container-width space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">
              ¡Configuración completada! 🎉
            </h2>
            <p className="text-muted-foreground text-lg">
              Theme provider, componentes UI y estilos funcionando correctamente
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>

          <div
            className={cn(
              'glass-effect rounded-lg p-6 max-w-md mx-auto',
              'animate-fade-up'
            )}
          >
            <h3 className="font-semibold mb-2">Prueba el Theme Toggle</h3>
            <p className="text-sm text-muted-foreground">
              Usa el botón en la esquina superior derecha para cambiar entre
              modo claro, oscuro y sistema.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

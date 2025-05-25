import { cn } from '@/lib'
import { TestComponent } from '@/components/TestComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <div className={cn('bg-blue-500', 'text-white', 'p-4', 'rounded')}>
        <h1>¡Hola desde el portafolio!</h1>
        <p>Si ves este texto con fondo azul, la configuración funciona ✅</p>
      </div>
      <TestComponent />
    </main>
  )
}

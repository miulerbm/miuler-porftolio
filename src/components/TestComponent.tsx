import { cn } from '@/lib'

export function TestComponent() {
  return (
    <div className={cn('text-green-600', 'font-bold')}>
      ✅ Import alias funciona correctamente
    </div>
  )
}

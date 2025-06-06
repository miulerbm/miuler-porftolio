import { Navigation } from '@/components/sections/Navigation'
import { Footer } from './Footer'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

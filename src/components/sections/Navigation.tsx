'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button, ThemeToggle } from '@/components/ui'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { cn } from '@/lib'

const navigationItems = [
  { name: 'Inicio', href: '#home' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Contacto', href: '#contact' },
]

const sectionIds = ['home', 'about', 'projects', 'experience', 'contact']

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(sectionIds, 50)
  const { scrollToSection, enableSectionSnap } = useSmoothScroll()

  // Habilitar snap scroll (opcional)
  useEffect(() => {
    const cleanup = enableSectionSnap()
    return cleanup
  }, [enableSectionSnap])

  const isActive = (href: string) => {
    const sectionId = href.replace('#', '')
    return activeSection === sectionId
  }

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    e?.preventDefault()
    setIsOpen(false)
    const sectionId = href.replace('#', '')
    scrollToSection(sectionId)
  }

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'glass-effect shadow-sm border-b' : 'bg-transparent'
        )}
      >
        <nav className="section-padding py-4">
          <div className="container-width flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-xl text-gradient">Miuler</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map(item => (
                <button
                  key={item.name}
                  onClick={e => handleNavClick(item.href, e)}
                  className={cn(
                    'relative font-medium transition-all duration-200 cursor-pointer group',
                    isActive(item.href)
                      ? 'text-primary'
                      : 'text-foreground/80 hover:text-foreground'
                  )}
                >
                  {item.name}
                  <div
                    className={cn(
                      'absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-200',
                      isActive(item.href)
                        ? 'opacity-100 scale-x-100'
                        : 'opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100'
                    )}
                  />
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <Button
                onClick={() => handleNavClick('#contact')}
                size="sm"
                className="hover:scale-105 transition-transform duration-200"
              >
                Contáctame
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="hover:scale-105 transition-transform duration-200"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-20 left-4 right-4 bg-card border rounded-lg shadow-lg p-6 animate-in slide-in-from-top duration-200">
            <div className="space-y-4">
              {navigationItems.map(item => (
                <button
                  key={item.name}
                  onClick={e => handleNavClick(item.href, e)}
                  className={cn(
                    'block w-full text-left py-3 font-medium transition-colors duration-200 cursor-pointer rounded-lg px-3 hover:bg-muted/50',
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary'
                  )}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t">
                <Button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full"
                >
                  Contáctame
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

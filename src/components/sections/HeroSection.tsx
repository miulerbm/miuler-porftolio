'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui'
import { cn } from '@/lib'

const roles = [
  'Full Stack Developer',
  'Frontend Specialist',
  'React Expert',
  'TypeScript Developer',
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="section-padding py-20 relative z-10">
        <div className="container-width">
          <div
            className={cn(
              'text-center space-y-8 transition-all duration-1000',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            )}
          >
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-primary font-medium text-lg">¡Hola! 👋 Soy</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-gradient">Miuler</span>
              </h1>
            </div>

            {/* Dynamic Role */}
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                <span className="inline-block min-w-0">
                  {roles[currentRole]}
                </span>
                <span className="animate-pulse ml-1">|</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Especializado en crear experiencias web modernas y escalables con
              React, Next.js y TypeScript. Transformo ideas en aplicaciones que
              los usuarios aman usar.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://github.com/miuler"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/miuler"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:hello@miuler.dev" aria-label="Email">
                <Button variant="outline" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .querySelector('#projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Ver Proyectos
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Contáctame
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-16 animate-bounce">
              <button
                onClick={scrollToAbout}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Scroll to about section"
              >
                <ChevronDown className="h-6 w-6 mx-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

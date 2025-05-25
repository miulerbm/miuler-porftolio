'use client'

import { useState } from 'react'
import { Code, User, Coffee, Heart } from 'lucide-react'
import { skills } from '@/data/portfolio'
import { cn } from '@/lib'

const categories = [
  { key: 'frontend', label: 'Frontend', icon: Code },
  { key: 'backend', label: 'Backend', icon: User },
  { key: 'tools', label: 'Herramientas', icon: Coffee },
] as const

export function AboutSection() {
  const [activeCategory, setActiveCategory] = useState<string>('frontend')

  const filteredSkills = skills.filter(
    skill => skill.category === activeCategory
  )

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="section-padding">
        <div className="container-width">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="text-gradient">mí</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conoce más sobre mi experiencia, habilidades y lo que me apasiona
              del desarrollo web
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  ¡Hola! Soy <strong>Miuler</strong>, un desarrollador Full
                  Stack apasionado por crear experiencias web excepcionales. Con
                  más de <strong>4 años de experiencia</strong>, me especializo
                  en tecnologías modernas como React, Next.js y TypeScript.
                </p>

                <p className="text-foreground leading-relaxed">
                  Mi enfoque se centra en escribir código limpio, escalable y
                  mantener las mejores prácticas de desarrollo. Me encanta
                  resolver problemas complejos y transformar ideas en
                  aplicaciones funcionales que los usuarios realmente disfruten
                  usar.
                </p>

                <p className="text-foreground leading-relaxed">
                  Cuando no estoy programando, me gusta mantenerme actualizado
                  con las últimas tendencias tecnológicas, contribuir a
                  proyectos open source y compartir conocimiento con la
                  comunidad de desarrolladores.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">
                    Años de experiencia
                  </div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Proyectos completados
                  </div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">
                    Tecnologías dominadas
                  </div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="flex items-center justify-center space-x-1">
                    <Heart className="h-4 w-4 text-red-500 fill-current" />
                    <span className="text-2xl font-bold text-primary">∞</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Pasión por el código
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Habilidades Técnicas</h3>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={cn(
                      'flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer',
                      activeCategory === key
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    )}
                    style={{ cursor: 'pointer' }}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {filteredSkills.map(skill => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

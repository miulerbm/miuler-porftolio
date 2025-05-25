'use client'

import { useState } from 'react'
import { Code, User, Coffee, Heart, Wrench } from 'lucide-react'
import { skills } from '@/data/portfolio'
import { cn } from '@/lib'

const categories = [
  { key: 'frontend', label: 'Frontend', icon: Code },
  { key: 'backend', label: 'Backend', icon: User },
  { key: 'tools', label: 'Herramientas', icon: Wrench },
] as const

// Mapeo de iconos para cada skill (usando emojis para simplicidad)
const skillIcons: Record<string, string> = {
  // Frontend
  React: '⚛️',
  'Next.js': '▲',
  Angular: '🅰️',
  'React Native': '📱',
  TypeScript: '🔷',
  JavaScript: '💛',
  HTML5: '🧡',
  CSS3: '💙',
  'Tailwind CSS': '🎨',
  'Material UI': '📦',
  Bootstrap: '🅱️',
  'Shadcn UI': '🎭',
  'Framer Motion': '🎬',
  'Redux Toolkit': '🔄',
  Zustand: '🐻',
  'Context API': '🔗',
  WebSockets: '🔌',

  // Backend
  'Node.js': '💚',
  Express: '🚀',
  'Java Spring Boot': '☕',
  Python: '🐍',
  PostgreSQL: '🐘',
  MongoDB: '🍃',
  Prisma: '🔺',
  Supabase: '⚡',
  Firebase: '🔥',

  // Tools
  Git: '📚',
  GitHub: '🐙',
  AWS: '☁️',
  GCP: '🌩️',
  Vercel: '▲',
  Docker: '🐳',
  Jest: '🃏',
  'React Testing Library': '🧪',
}

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
              <div className="prose prose-lg p-4">
                <p className="text-foreground leading-relaxed">
                  ¡Hola! Soy <strong>Miuler Blas</strong>, un desarrollador
                  Frontend con
                  <strong> más de 2 años de experiencia</strong>{' '}
                  especializándome en arquitecturas modernas y rendimiento
                  optimizado.
                </p>

                <p className="text-foreground leading-relaxed">
                  Combino{' '}
                  <strong>
                    ingenio técnico con comprensión profunda del negocio
                  </strong>
                  , habiendo creado soluciones para sectores de e-commerce,
                  delivery, turismo y empresarial que aportan valor real a
                  usuarios y stakeholders.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">
                    Años de experiencia
                  </div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">
                    Proyectos destacados
                  </div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">25+</div>
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
              {/* Skills Summary */}
              <div className="bg-card border rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-foreground mb-2">
                  Mi enfoque técnico
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Me especializo en <strong>ecosistemas React</strong>{' '}
                  (Next.js), Angular y desarrollo móvil, implementando
                  soluciones escalables con dominio en arquitecturas modernas
                  como
                  <strong> MicroFrontends, Clean Architecture</strong> y
                  principios <strong>SOLID</strong>.
                </p>
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
                      'flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer hover:scale-105',
                      activeCategory === key
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={cn(
                      'group bg-card border rounded-lg p-3 hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-105 hover:border-primary/50',
                      'animate-in fade-in slide-in-from-bottom-2'
                    )}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationDuration: '400ms',
                    }}
                  >
                    <div className="flex flex-row justify-center items-center space-y-2 text-center">
                      {/* Icon */}
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
                        {skillIcons[skill.name] || '🔧'}
                      </div>

                      {/* Skill Name */}
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                        {skill.name}
                      </span>
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

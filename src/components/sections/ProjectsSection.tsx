'use client'

import { useState } from 'react'
import { ExternalLink, Github, Filter } from 'lucide-react'
import { Button } from '@/components/ui'
import { projects } from '@/data/portfolio'
import { cn } from '@/lib'

const categories = [
  { key: 'all', label: 'Todos' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'web', label: 'Frontend' },
  { key: 'mobile', label: 'Mobile' },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = projects.filter(
    project => activeCategory === 'all' || project.category === activeCategory
  )

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3)

  return (
    <section id="projects" className="py-20">
      <div className="section-padding">
        <div className="container-width">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mis <span className="text-gradient">Proyectos</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Una selección de proyectos que destacan mi experiencia y
              habilidades técnicas
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={cn(
                  'flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors',
                  activeCategory === key
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                )}
              >
                <Filter className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map(project => (
              <div
                key={project.id}
                className="group bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Project Image */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🚀</div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      Destacado
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{project.technologies.length - 3} más
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Button variant="ghost" size="sm">
                          <Github className="h-4 w-4 mr-2" />
                          Código
                        </Button>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {filteredProjects.length > 3 && (
            <div className="text-center">
              <Button variant="outline" onClick={() => setShowAll(!showAll)}>
                {showAll
                  ? 'Ver menos'
                  : `Ver todos (${filteredProjects.length})`}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

'use client'

import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'
import { experience } from '@/data/portfolio'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="section-padding">
        <div className="container-width">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mi <span className="text-gradient">Experiencia</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un recorrido por mi trayectoria profesional y los logros más
              destacados
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-1.5 z-10"></div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
                  >
                    <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.position}
                          </h3>
                          {!exp.endDate && (
                            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                              Actual
                            </span>
                          )}
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-4 w-4" />
                            <span className="font-medium text-primary">
                              {exp.company}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {exp.startDate} - {exp.endDate || 'Presente'}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-medium text-foreground mb-2">
                          Logros destacados:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start space-x-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium text-foreground mb-2">
                          Tecnologías:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map(tech => (
                            <span
                              key={tech}
                              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

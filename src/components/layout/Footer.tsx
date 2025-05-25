'use client'

import { Heart, Github, Linkedin, Mail } from 'lucide-react'
import { contact } from '@/data/portfolio'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t">
      <div className="section-padding py-12">
        <div className="container-width">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="font-bold text-xl text-gradient">Miuler</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full Stack Developer especializado en crear experiencias web
                modernas y escalables con React, Next.js y TypeScript.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Enlaces rápidos</h3>
              <nav className="flex flex-col space-y-2">
                {[
                  { name: 'Inicio', href: '#home' },
                  { name: 'Sobre mí', href: '#about' },
                  { name: 'Proyectos', href: '#projects' },
                  { name: 'Experiencia', href: '#experience' },
                  { name: 'Contacto', href: '#contact' },
                ].map(link => (
                  <button
                    key={link.name}
                    onClick={() => {
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold">Contacto</h3>
              <div className="space-y-2">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>{contact.email}</span>
                </a>
                <p className="flex items-center space-x-2 text-muted-foreground text-sm">
                  <span>📍</span>
                  <span>{contact.location}</span>
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-2">
                <a
                  href={contact.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© {currentYear} Miuler. Hecho con</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>usando Next.js y Tailwind CSS</span>
            </div>

            <div className="text-sm text-muted-foreground">
              <span>Versión 1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

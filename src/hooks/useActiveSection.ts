'use client'

import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        // Encuentra la sección que está más visible
        let maxRatio = 0
        let mostVisibleSection = ''

        entries.forEach(entry => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            mostVisibleSection = entry.target.id
          }
        })

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection)
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9], // Múltiples thresholds para mejor detección
        rootMargin: `-${offset}px 0px -${offset}px 0px`,
      }
    )

    // Observar todas las secciones
    sectionIds.forEach(id => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sectionIds, offset])

  return activeSection
}

'use client'

import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        // Crear un mapa de visibilidad con scores
        const visibilityMap = new Map<string, number>()

        entries.forEach(entry => {
          const id = entry.target.id
          if (!id || !sectionIds.includes(id)) return

          // Calcular score basado en intersection ratio y posición
          const rect = entry.boundingClientRect
          const viewportHeight = window.innerHeight

          // Calcular qué tan centrada está la sección
          const center = rect.top + rect.height / 2
          const viewportCenter = viewportHeight / 2
          const centerDistance = Math.abs(center - viewportCenter)
          const centerScore = Math.max(0, 1 - centerDistance / viewportCenter)

          // Score final: intersección + bonus por estar centrada
          const score = entry.intersectionRatio * 0.7 + centerScore * 0.3

          if (entry.isIntersecting && score > 0.1) {
            visibilityMap.set(id, score)
          }
        })

        // Encontrar la sección con mejor score
        let bestSection = ''
        let bestScore = 0

        visibilityMap.forEach((score, sectionId) => {
          if (score > bestScore) {
            bestScore = score
            bestSection = sectionId
          }
        })

        // Solo actualizar si hay cambio y el score es significativo
        if (bestSection && bestSection !== activeSection && bestScore > 0.2) {
          setActiveSection(bestSection)
        }
      },
      {
        // Múltiples thresholds para detección más precisa
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        // Reducir el offset para mejor detección
        rootMargin: `-${offset}px 0px -${offset}px 0px`,
      }
    )

    // Observar todas las secciones
    const elements: Element[] = []
    sectionIds.forEach(id => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
        elements.push(element)
      }
    })

    // Activar la primera sección al inicio si estamos en el top
    const handleInitialState = () => {
      if (window.scrollY < 100 && sectionIds.length > 0) {
        setActiveSection(sectionIds[0])
      }
    }

    // Ejecutar al inicio
    setTimeout(handleInitialState, 100)

    return () => {
      observer.disconnect()
    }
  }, [sectionIds, offset])

  return activeSection
}

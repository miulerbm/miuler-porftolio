'use client'

import { useEffect, useRef } from 'react'

export function useSmoothScroll() {
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isScrollingRef = useRef(false)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Solo aplicar si no estamos ya scrolleando manualmente
      if (isScrollingRef.current) return

      const sections = document.querySelectorAll('section[id]')
      const currentScroll = window.scrollY
      const viewportHeight = window.innerHeight

      // Encontrar la sección actual
      let currentSectionIndex = -1
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (
          rect.top <= viewportHeight * 0.5 &&
          rect.bottom >= viewportHeight * 0.5
        ) {
          currentSectionIndex = index
        }
      })

      // Si detectamos scroll hacia abajo/arriba, ir a la siguiente/anterior sección
      if (Math.abs(e.deltaY) > 50) {
        // Threshold para evitar micro-scrolls
        e.preventDefault()

        let targetIndex = currentSectionIndex
        if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
          targetIndex = currentSectionIndex + 1
        } else if (e.deltaY < 0 && currentSectionIndex > 0) {
          targetIndex = currentSectionIndex - 1
        }

        if (targetIndex !== currentSectionIndex && targetIndex >= 0) {
          isScrollingRef.current = true
          const targetSection = sections[targetIndex]

          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })

          // Reset flag después del scroll
          setTimeout(() => {
            isScrollingRef.current = false
          }, 1000)
        }
      }

      // Clear timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Set new timeout
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false
      }, 150)
    }

    // Añadir event listener con passive: false para poder preventDefault
    document.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      document.removeEventListener('wheel', handleWheel)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    isScrollingRef.current = true
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      setTimeout(() => {
        isScrollingRef.current = false
      }, 1000)
    }
  }

  return { scrollToSection }
}

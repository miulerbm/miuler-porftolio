'use client'

import { useRef, useCallback } from 'react'

export function useSmoothScroll() {
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    // Marcar que estamos haciendo scroll programático
    isScrollingRef.current = true

    // Limpiar timeout anterior
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    // Calcular posición con offset para el header
    const rect = element.getBoundingClientRect()
    const offsetTop = window.scrollY + rect.top - 80 // 80px para el header

    // Scroll suave nativo del browser
    window.scrollTo({
      top: Math.max(0, offsetTop),
      behavior: 'smooth',
    })

    // Reset flag después del scroll
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false
    }, 800) // Tiempo más corto para mayor responsividad
  }, [])

  const enableSectionSnap = useCallback(() => {
    let wheelTimeout: NodeJS.Timeout | null = null
    let accumulatedDelta = 0
    let lastScrollTime = 0
    let consecutiveScrolls = 0
    const wheelThreshold = 120
    const rapidScrollThreshold = 3

    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) return

      const now = Date.now()
      const deltaTime = now - lastScrollTime
      lastScrollTime = now

      if (deltaTime < 100) {
        consecutiveScrolls++
      } else {
        consecutiveScrolls = 1
        accumulatedDelta = 0
      }

      if (wheelTimeout) clearTimeout(wheelTimeout)

      accumulatedDelta += Math.abs(e.deltaY)

      if (
        consecutiveScrolls < rapidScrollThreshold ||
        accumulatedDelta < wheelThreshold
      ) {
        wheelTimeout = setTimeout(() => {
          accumulatedDelta = 0
          consecutiveScrolls = 0
        }, 300)
        return
      }

      // Obtener secciones y castear a HTMLElement[]
      const rawSections = document.querySelectorAll('section[id]')
      const sections = Array.from(rawSections) as HTMLElement[]
      const viewportHeight = window.innerHeight
      const isScrollingDown = e.deltaY > 0

      let currentSection: HTMLElement | null = null
      let currentIndex = -1
      sections.forEach((section, idx) => {
        const rect = section.getBoundingClientRect()
        if (rect.top < viewportHeight / 2 && rect.bottom > viewportHeight / 2) {
          currentSection = section
          currentIndex = idx
        }
      })

      if (!currentSection) return

      const rect = (currentSection as HTMLElement).getBoundingClientRect()
      const { height: secHeight, top: secTop, bottom: secBottom } = rect
      let canScrollInSection = false
      if (isScrollingDown) {
        canScrollInSection =
          secHeight > viewportHeight * 1.2 && secBottom > viewportHeight + 100
      } else {
        canScrollInSection = secHeight > viewportHeight * 1.2 && secTop < -100
      }

      if (canScrollInSection) {
        accumulatedDelta = 0
        consecutiveScrolls = 0
        return
      }

      const atTop = secTop >= -50
      const atBottom = secBottom <= viewportHeight + 50
      let targetIndex = currentIndex
      if (isScrollingDown && atBottom) {
        targetIndex = Math.min(currentIndex + 1, sections.length - 1)
      } else if (!isScrollingDown && atTop) {
        targetIndex = Math.max(currentIndex - 1, 0)
      }

      if (targetIndex !== currentIndex) {
        e.preventDefault()
        scrollToSection(sections[targetIndex].id)
      }

      accumulatedDelta = 0
      consecutiveScrolls = 0
      wheelTimeout = setTimeout(() => {
        accumulatedDelta = 0
        consecutiveScrolls = 0
      }, 300)
    }

    document.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      document.removeEventListener('wheel', handleWheel)
      if (wheelTimeout) clearTimeout(wheelTimeout)
    }
  }, [scrollToSection])

  return { scrollToSection, enableSectionSnap }
}

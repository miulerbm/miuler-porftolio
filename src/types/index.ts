export interface Skill {
  name: string
  level: number // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'fullstack' | 'other'
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate?: string // undefined for current job
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Contact {
  email: string
  phone?: string
  location: string
  social: {
    github: string
    linkedin: string
    twitter?: string
  }
}

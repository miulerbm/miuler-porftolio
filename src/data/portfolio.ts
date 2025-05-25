import { Skill, Project, Experience, Contact } from '@/types'

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 88, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },
  { name: 'Prisma', level: 80, category: 'backend' },

  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'AWS', level: 65, category: 'tools' },
  { name: 'Vercel', level: 90, category: 'tools' },
]

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description:
      'Plataforma de comercio electrónico completa con panel de administración',
    longDescription:
      'Desarrollé una plataforma de e-commerce completa con React, Next.js y Stripe. Incluye gestión de productos, carrito de compras, procesamiento de pagos y panel de administración.',
    image: '/projects/ecommerce.jpg',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Stripe',
      'Prisma',
      'PostgreSQL',
    ],
    githubUrl: 'https://github.com/miuler/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.miuler.dev',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'task-manager',
    title: 'Task Manager App',
    description:
      'Aplicación de gestión de tareas con colaboración en tiempo real',
    longDescription:
      'Aplicación web para gestión de tareas con funcionalidades de colaboración en tiempo real, notificaciones push y sincronización entre dispositivos.',
    image: '/projects/taskmanager.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/miuler/task-manager',
    liveUrl: 'https://tasks.miuler.dev',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'Dashboard del clima con geolocalización y predicciones',
    longDescription:
      'Dashboard interactivo del clima que utiliza APIs externas para mostrar condiciones actuales y pronósticos. Incluye geolocalización y visualizaciones atractivas.',
    image: '/projects/weather.jpg',
    technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
    githubUrl: 'https://github.com/miuler/weather-dashboard',
    liveUrl: 'https://weather.miuler.dev',
    featured: false,
    category: 'web',
  },
]

export const experience: Experience[] = [
  {
    id: 'senior-dev',
    company: 'TechCorp Solutions',
    position: 'Senior Full Stack Developer',
    location: 'Lima, Perú (Remoto)',
    startDate: '2022-03',
    description:
      'Lidero el desarrollo de aplicaciones web modernas y mentoreo a desarrolladores junior.',
    achievements: [
      'Migré la aplicación principal de JavaScript vanilla a React, mejorando el rendimiento en 40%',
      'Implementé CI/CD pipelines que redujeron el tiempo de deployment de 2 horas a 15 minutos',
      'Lideré un equipo de 4 desarrolladores en proyectos críticos para clientes enterprise',
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'Docker',
    ],
  },
  {
    id: 'fullstack-dev',
    company: 'StartupXYZ',
    position: 'Full Stack Developer',
    location: 'Lima, Perú',
    startDate: '2020-08',
    endDate: '2022-02',
    description:
      'Desarrollé features end-to-end y contribuí a la arquitectura de la plataforma.',
    achievements: [
      'Construí el sistema de autenticación y autorización desde cero',
      'Desarrollé 15+ componentes reutilizables que se usan en toda la aplicación',
      'Optimicé queries de base de datos, reduciendo tiempos de carga en 60%',
    ],
    technologies: ['React', 'Express', 'MongoDB', 'Redis', 'Heroku'],
  },
  {
    id: 'frontend-dev',
    company: 'Digital Agency',
    position: 'Frontend Developer',
    location: 'Lima, Perú',
    startDate: '2019-01',
    endDate: '2020-07',
    description:
      'Desarrollé sitios web responsive y aplicaciones frontend para diversos clientes.',
    achievements: [
      'Entregué 20+ proyectos web con 100% de satisfacción del cliente',
      'Implementé mejores prácticas de SEO y accesibilidad',
      'Reduje el tiempo de carga promedio de sitios web en 50%',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'SASS', 'Webpack'],
  },
]

export const contact: Contact = {
  email: 'miulerbm00@gmail.com',
  phone: '+51 946 574 201',
  location: 'Trujillo, Perú',
  social: {
    github: 'https://github.com/miulerbm',
    linkedin: 'https://linkedin.com/in/miulerbm',
    twitter: 'https://twitter.com/miulerbm',
  },
}

import { Skill, Project, Experience, Contact } from '@/types'

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'React Native', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },

  // UI/UX
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Material UI', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Shadcn UI', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },

  // Estado y Comunicación
  { name: 'Redux Toolkit', category: 'frontend' },
  { name: 'Zustand', category: 'frontend' },
  { name: 'Context API', category: 'frontend' },
  { name: 'WebSockets', category: 'frontend' },

  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'Java Spring Boot', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Prisma', category: 'backend' },
  { name: 'Supabase', category: 'backend' },
  { name: 'Firebase', category: 'backend' },

  // Tools y DevOps
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'AWS', category: 'tools' },
  { name: 'GCP', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Jest', category: 'tools' },
  { name: 'React Testing Library', category: 'tools' },
]

export const projects: Project[] = [
  {
    id: 'axia-club',
    title: 'Axia Club',
    description:
      'Plataforma SaaS para gestión de servicios en discotecas con códigos QR y sistema de fidelización',
    longDescription:
      'Plataforma SaaS que facilita la gestión de servicios en discotecas mediante códigos QR y un sistema de fidelización basado en puntos. Optimizada para mejorar la asiduidad de clientes y la experiencia del usuario en ambientes nocturnos.',
    image: '/projects/axia.jpg',
    technologies: [
      'Next.js',
      'App Router',
      'Server Components',
      'Tailwind CSS',
      'Supabase',
      'Real Time',
      'Jest',
    ],
    githubUrl: 'https://github.com/miulerbm/axia-club',
    liveUrl: 'https://www.axiaclub.com/',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'keola-app',
    title: 'KeOla App',
    description:
      'Plataforma que integra e-commerce, delivery y fintech con KeOla Pay',
    longDescription:
      'Plataforma que integra e-commerce, delivery y fintech en una sola plataforma móvil con KeOla Pay como sistema de pagos digital. Optimizada para reducir tiempos de carga y mejorar la experiencia del usuario en dispositivos de gama media.',
    image: '/projects/keola.jpg',
    technologies: [
      'React Native',
      'Redux',
      'Zustand',
      'WebSockets',
      'Optimización',
    ],
    githubUrl: 'https://github.com/miulerbm/keola-app',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.appkeola',
    featured: true,
    category: 'mobile',
  },
  {
    id: 'gope-platform',
    title: 'Gope',
    description:
      'Plataforma integral de actividades recreativas con app móvil y dashboard administrativo',
    longDescription:
      'Plataforma integral de actividades recreativas que conecta usuarios con proveedores de servicios de ocio. Incluye aplicación móvil para usuarios finales y un dashboard administrativo para gestión y análisis de datos.',
    image: '/projects/gope.jpg',
    technologies: [
      'Next.js',
      'React Native',
      'MVVM',
      'Clean Architecture',
      'Micro Frontends',
      'Redux Toolkit',
    ],
    githubUrl: 'https://github.com/miulerbm/gope-platform',
    liveUrl: 'https://www.linkedin.com/company/gope-app/',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'keola-lottery',
    title: 'Keola Lottery',
    description:
      'Plataforma de lotería digital con compra de boletos y pagos online',
    longDescription:
      'Plataforma de lotería digital que permite a usuarios adquirir boletos, participar en sorteos y realizar cobros de manera 100% online. Incluye optimizaciones de carga e integraciones con múltiples métodos de pago.',
    image: '/projects/lottery.jpg',
    technologies: [
      'Angular 15',
      'SSR',
      'Lazy-Loading',
      'PayPal',
      'Culqi',
      'KeOla Pay',
    ],
    githubUrl: 'https://github.com/miulerbm/keola-lottery',
    liveUrl: 'https://www.facebook.com/keolalottery',
    featured: false,
    category: 'web',
  },
  {
    id: 'casecobra',
    title: 'CaseCobra',
    description:
      'E-commerce de fundas personalizadas para iPhone con sistema completo de compra',
    longDescription:
      'E-commerce especializado en fundas personalizadas para iPhone con sistema completo de compra, autenticación de usuarios y gestión de pagos. Implementa optimizaciones SEO para mejor visibilidad en buscadores.',
    image: '/projects/casecobra.jpg',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Shadcn/ui',
      'Kinde Auth',
      'Prisma',
      'PostgreSQL',
      'Stripe',
    ],
    githubUrl: 'https://github.com/miulerbm/casecobra',
    liveUrl: 'https://casecobra-woad.vercel.app/',
    featured: false,
    category: 'fullstack',
  },
  {
    id: 'miulerbm-portfolio',
    title: 'Portfolio Personal',
    description:
      'Sitio web personal con portafolio y blog técnico sobre desarrollo frontend',
    longDescription:
      'Sitio web personal con portafolio y blog técnico sobre desarrollo frontend. Diseñado para mostrar proyectos y compartir conocimientos sobre arquitecturas modernas y optimización web.',
    image: '/projects/portfolio.jpg',
    technologies: [
      'Next.js 14',
      'Velite',
      'Tailwind CSS',
      'Shadcn/ui',
      'Server Components',
      'SEO',
    ],
    githubUrl: 'https://github.com/miulerbm/portfolio',
    liveUrl: 'https://miulerbm.vercel.app/',
    featured: false,
    category: 'web',
  },
]

export const experience: Experience[] = [
  {
    id: 'keola-networks',
    company: 'KeOla Networks',
    position: 'Frontend Developer',
    location: 'Remoto',
    startDate: 'Jun 2024',
    description:
      'Desarrollo de aplicaciones web y móviles con tecnologías modernas, optimización de rendimiento y integración con microservicios.',
    achievements: [
      'Implementé páginas web con Next.js, reduciendo un 25% los tiempos de carga mediante técnicas SSR/SSG y componentes optimizados',
      'Desarrollé soluciones mobile con React Native, optimizando la gestión de estado con Zustand/Redux Toolkit, reduciendo re-renderizaciones en un 35%',
      'Integré microservicios con Java Spring Boot, creando interfaces robustas para APIs REST y mejorando la comunicación entre capas arquitectónicas',
    ],
    technologies: [
      'Next.js',
      'React',
      'Angular',
      'React Native',
      'TypeScript',
      'Redux',
      'Zustand',
      'WebSockets',
      'Tailwind CSS',
      'Bootstrap',
      'SCSS',
      'AWS',
      'GCP',
      'Git',
    ],
  },
  {
    id: 'gope',
    company: 'Gope',
    position: 'Frontend Developer',
    location: 'Remoto',
    startDate: 'Jul 2023',
    endDate: 'May 2024',
    description:
      'Construcción de dashboard administrativo y aplicación móvil utilizando arquitectura de microfrontends y patrones de diseño modernos.',
    achievements: [
      'Construí un dashboard para la administración de datos y recursos con Next.js utilizando arquitectura de microfrontends, aumentando la velocidad de despliegue en un 25%',
      'Implementé testing con Jest, alcanzando 80% de cobertura y garantizando el cumplimiento de requerimientos funcionales',
      'Integré APIs REST serverless en AWS y desarrollé app mobile con React Native siguiendo patrones MVVM y Clean Architecture, reduciendo el codebase en un 15%',
    ],
    technologies: [
      'Next.js',
      'React Native',
      'Micro Frontends',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'Jest',
      'Git',
    ],
  },
  {
    id: 'inversac',
    company: 'Inversac',
    position: 'IT Engineer',
    location: 'Trujillo, Perú',
    startDate: 'Jul 2022',
    endDate: 'Jun 2023',
    description:
      'Desarrollo de interfaces web para sistemas industriales y optimización de comunicación entre sistemas HMI y PLC.',
    achievements: [
      'Desarrollé interfaces web front-end con React.js para sistemas industriales, mejorando la experiencia del usuario y aumentando la productividad en un 25%',
      'Implementé pruebas automáticas para validar integraciones entre sistemas SAP y aplicaciones web, reduciendo errores en un 30%',
      'Optimicé la comunicación entre interfaces HMI y sistemas PLC mediante programación Grafcet',
    ],
    technologies: [
      'React',
      'Automatización',
      'Python',
      'Integración de sistemas',
      'Git',
    ],
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

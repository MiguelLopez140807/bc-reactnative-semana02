/**
 * Datos de ejemplo para el blog
 *
 * ¿Qué es?
 * Array de posts hardcoded para la práctica
 *
 * ¿Para qué?
 * Simular datos de una API sin necesitar backend
 */
export interface Post {
  id: number
  title: string
  author: string
  date: string
  excerpt: string
  content: string
  category: string
}

export const POSTS: Post[] = [
  {
    id: 1,
    title: 'Introducción a React Native',
    author: 'Juan Pérez',
    date: '2025-10-01',
    excerpt: 'Aprende los fundamentos de React Native y crea tu primera app.',
    content:
      'React Native es un framework increíble que permite crear aplicaciones móviles nativas usando React. En este artículo exploraremos los conceptos básicos...',
    category: 'Tutorial',
  },
  {
    id: 2,
    title: 'Navegación con React Navigation',
    author: 'María García',
    date: '2025-10-05',
    excerpt: 'Domina la navegación entre pantallas en React Native.',
    content:
      'La navegación es fundamental en cualquier app móvil. React Navigation proporciona herramientas poderosas para gestionar flujos de navegación complejos...',
    category: 'Guía',
  },
  {
    id: 3,
    title: 'Estilos con NativeWind',
    author: 'Carlos López',
    date: '2025-10-08',
    excerpt: 'Utiliza TailwindCSS en React Native con NativeWind.',
    content:
      'NativeWind trae la magia de TailwindCSS a React Native. Descubre cómo estilizar tus componentes de forma rápida y consistente...',
    category: 'Tutorial',
  },
  {
    id: 4,
    title: 'TypeScript en React Native',
    author: 'Ana Martínez',
    date: '2025-10-10',
    excerpt: 'Mejora tu código con TypeScript y type-safety.',
    content:
      'TypeScript añade tipos estáticos a JavaScript, lo que hace tu código más robusto y fácil de mantener. Aprende cómo integrarlo en React Native...',
    category: 'Avanzado',
  },
  {
    id: 5,
    title: 'Testing en React Native',
    author: 'Pedro Sánchez',
    date: '2025-10-11',
    excerpt: 'Escribe tests para tus componentes y pantallas.',
    content:
      'Los tests son esenciales para mantener la calidad del código. Exploramos Jest y React Native Testing Library para testear efectivamente...',
    category: 'Testing',
  },
]

export const getPostById = (id: number): Post | undefined => {
  return POSTS.find((post) => post.id === id)
}

export const getPostsByCategory = (category: string): Post[] => {
  return POSTS.filter((post) => post.category === category)
}
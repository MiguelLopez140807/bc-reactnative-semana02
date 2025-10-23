/**
 * Datos de ejemplo para el Dashboard
 *
 * ¿Para qué?
 * Simular datos de notificaciones, búsquedas y perfil
 */

export interface Notification {
    id: number
    title: string
    message: string
    time: string
    read: boolean
}

export interface SearchResult {
    id: number
    title: string
    category: string
    description: string
}

export interface UserProfile {
    name: string
    email: string
    avatar: string
    bio: string
    stats: {
    posts: number
    followers: number
    following: number
    } 
}

export const NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    title: 'Nuevo seguidor',
    message: 'Juan Pérez comenzó a seguirte',
    time: 'Hace 5 minutos',
    read: false,
  },
  {
    id: 2,
    title: 'Comentario en tu post',
    message: 'María comentó: "¡Excelente artículo!"',
    time: 'Hace 1 hora',
    read: false,
  },
  {
    id: 3,
    title: 'Nueva actualización',
    message: 'Hay una nueva versión disponible',
    time: 'Hace 2 horas',
    read: true,
  },
  {
    id: 4,
    title: 'Me gusta en tu foto',
    message: 'A Carlos le gustó tu publicación',
    time: 'Ayer',
    read: true,
  },
]

export const SEARCH_RESULTS: SearchResult[] = [
  {
    id: 1,
    title: 'React Native Basics',
    category: 'Tutorial',
    description: 'Learn the fundamentals of React Native development',
  },
  {
    id: 2,
    title: 'Advanced Navigation',
    category: 'Guide',
    description: 'Master complex navigation patterns',
  },
  {
    id: 3,
    title: 'State Management',
    category: 'Tutorial',
    description: 'Handle app state with Context and Redux',
  },
]

export const USER_PROFILE: UserProfile = {
  name: 'Ana García',
  email: 'ana.garcia@example.com',
  avatar: 'https://i.pravatar.cc/150?img=5',
  bio: 'Desarrolladora React Native apasionada por crear experiencias móviles increíbles 📱✨',
  stats: {
    posts: 42,
    followers: 1234,
    following: 567,
  },
}

export const getUnreadNotificationsCount = (): number => {
  return NOTIFICATIONS.filter((n) => !n.read).length
}
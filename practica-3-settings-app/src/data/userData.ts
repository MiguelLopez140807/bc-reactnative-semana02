export interface User {
  name: string
  email: string
  avatar: string
  role: string
}

export const CURRENT_USER: User = {
  name: 'Carlos Rodríguez',
  email: 'carlos.rodriguez@example.com',
  avatar: 'https://i.pravatar.cc/150?img=12',
  role: 'Desarrollador',
}

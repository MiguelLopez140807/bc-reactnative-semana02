/**
 * Tipos de navegación del Blog
 *
 * ¿Qué es?
 * Define los parámetros que cada pantalla puede recibir
 *
 * ¿Para qué?
 * Type-safety: TypeScript valida que pases los parámetros correctos
 *
 * ¿Cómo?
 * - undefined: La pantalla no recibe parámetros
 * - { key: type }: La pantalla recibe parámetros específicos
 */
export type BlogStackParamList = {
  PostList: undefined
  PostDetail: {
    postId: number
  }
  CreatePost: undefined
}
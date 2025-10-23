/**
 * Tipos de navegación del Dashboard
 *
 * Estructura:
 * - TabParamList: Navegación principal de tabs
 * - HomeStackParamList: Stack anidado en tab Home
 * - ProfileStackParamList: Stack anidado en tab Profile
 */

export type TabParamList = {
  HomeTab: undefined
  SearchTab: undefined
  ProfileTab: undefined
}

export type HomeStackParamList = {
  Home: undefined
  Notifications: undefined
}

export type SearchStackParamList = {
  Search: undefined
  Results: { query: string }
}

export type ProfileStackParamList = {
  Profile: undefined
  EditProfile: undefined
}
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { BlogNavigator } from './src/navigation/BlogNavigator'

/**
 * App Principal
 *
 * ¿Qué hace?
 * Punto de entrada que configura la navegación
 *
 * ¿Para qué?
 * Envuelve la app con NavigationContainer para habilitar navegación
 */

export default function App() {
  return (
    <NavigationContainer>
      <BlogNavigator />
    </NavigationContainer>
  )
}

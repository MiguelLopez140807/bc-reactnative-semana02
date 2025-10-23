import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { TabNavigator } from './src/navigation/TabNavigator'

/**
 * App - Punto de entrada de la aplicación
 *
 * ¿Qué hace?
 * Envuelve la app en NavigationContainer y renderiza TabNavigator
 *
 * ¿Cómo?
 * - NavigationContainer: contexto global de navegación
 * - TabNavigator: navegación principal con tabs
 * - StatusBar: configuración de la barra de estado
 */

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  )
}

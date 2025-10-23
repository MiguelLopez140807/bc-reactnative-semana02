import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import type { TabParamList } from './types'
import { HomeStack } from './stacks/HomeStack'
import { SearchScreen } from '../screens/search/SearchScreen'
import { ProfileStack } from './stacks/ProfileStack'
import { getUnreadNotificationsCount } from '../data/mockData'

/**
 * TabNavigator - Navegación principal con tabs
 *
 * ¿Qué hace?
 * Define los 3 tabs principales: Home, Search, Profile
 *
 * ¿Cómo?
 * - Íconos personalizados con Ionicons
 * - Badge en Home para notificaciones
 * - Stack anidado en Home y Profile
 */

const Tab = createBottomTabNavigator<TabParamList>()

export function TabNavigator() {
  const unreadCount = getUnreadNotificationsCount()
  const shouldShowBadge = unreadCount > 0

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'SearchTab') {
            iconName = focused ? 'search' : 'search-outline'
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'person' : 'person-outline'
          } else {
            iconName = 'help-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        headerShown: false, // Deshabilitamos headers globalmente
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Inicio',
          tabBarBadge: shouldShowBadge ? unreadCount : undefined,
        }}
      />

      <Tab.Screen
        name="SearchTab"
        component={SearchScreen}
        options={{
          title: 'Buscar',
        }}
      />

      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          title: 'Perfil',
        }}
      />
    </Tab.Navigator>
  )
}
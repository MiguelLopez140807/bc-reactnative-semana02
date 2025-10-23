import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { BlogStackParamList } from './types'
import { PostListScreen } from '../screens/PostListScreen'
import { PostDetailScreen } from '../screens/PostDetailScreen'
import { CreatePostScreen } from '../screens/CreatePostScreen'

/**
 * BlogNavigator - Stack Navigator del Blog
 *
 * ¿Qué hace?
 * Configura la navegación entre las 3 pantallas del blog
 *
 * ¿Para qué?
 * Gestionar el flujo de navegación: Lista → Detalle → Crear
 *
 * ¿Cómo?
 * Define las pantallas, sus nombres y opciones de header
 */

const Stack = createNativeStackNavigator<BlogStackParamList>()

export function BlogNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="PostList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3b82f6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitle: 'Atrás',
      }}
    >
      <Stack.Screen
        name="PostList"
        component={PostListScreen}
        options={{
          title: 'Blog',
          headerLargeTitle: true,
        }}
      />

      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{
          title: 'Artículo',
        }}
      />

      <Stack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          title: 'Nuevo Post',
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  )
}
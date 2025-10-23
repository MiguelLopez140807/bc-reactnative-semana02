import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { HomeStackParamList } from '../types'
import { HomeScreen } from '../../screens/home/HomeScreen'
import { NotificationsScreen } from '../../screens/home/NotificationsScreen'

const Stack = createNativeStackNavigator<HomeStackParamList>()

export function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // El Tab Navigator ya tiene header
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerShown: true,
          title: 'Notificaciones',
        }}
      />
    </Stack.Navigator>
  )
}
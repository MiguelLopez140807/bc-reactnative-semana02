import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { ProfileStackParamList } from '../types'
import { ProfileScreen } from '../../screens/profile/ProfileScreen'
import { EditProfileScreen } from '../../screens/profile/EditProfileScreen'

const Stack = createNativeStackNavigator<ProfileStackParamList>()

export function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerShown: true,
          title: 'Editar Perfil',
        }}
      />
    </Stack.Navigator>
  )
}
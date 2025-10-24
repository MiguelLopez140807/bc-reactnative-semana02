import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import type { MainStackParamList } from "./types"
import { HomeScreen } from "../screens/HomeScreen"

const Stack = createNativeStackNavigator<MainStackParamList>()

export function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

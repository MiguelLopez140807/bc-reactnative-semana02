import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Ionicons } from "@expo/vector-icons"
import type { DrawerParamList } from "./types"
import { MainStack } from "./MainStack"
import { SettingsScreen } from "../screens/SettingsScreen"
import { AboutScreen } from "../screens/AboutScreen"
import { HelpScreen } from "../screens/HelpScreen"
import { CustomDrawer } from "../components/CustomDrawer"

const Drawer = createDrawerNavigator<DrawerParamList>()

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: "#3b82f6",
        drawerInactiveTintColor: "#6b7280",
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "500",
        },
        drawerItemStyle: {
          marginVertical: 2,
          borderRadius: 8,
        },
        headerStyle: {
          backgroundColor: "#3b82f6",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="MainStack"
        component={MainStack}
        options={{
          title: "Inicio",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Configuración",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "Acerca de",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{
          title: "Ayuda",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="help-circle" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

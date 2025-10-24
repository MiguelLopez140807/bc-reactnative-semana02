import React from "react"
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from "react-native"
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer"
import { Ionicons } from "@expo/vector-icons"
import { CURRENT_USER } from "../data/userData"

export function CustomDrawer(props: any) {
  const handleLogout = () => {
    Alert.alert("Cerrar Sesión", "¿Estás seguro de que quieres salir?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Salir",
        style: "destructive",
        onPress: () => {
          console.log("Logout")
        },
      },
    ])
  }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: CURRENT_USER.avatar }}
              style={styles.avatar}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{CURRENT_USER.name}</Text>
              <Text style={styles.userEmail}>{CURRENT_USER.email}</Text>
              <View style={styles.roleBadge}>
                <Text style={styles.roleText}>{CURRENT_USER.role}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.separator} />
        <DrawerItemList {...props} />
        <View style={styles.separator} />

        <DrawerItem
          label="Favoritos"
          icon={({ color, size }) => (
            <Ionicons name="star-outline" size={size} color={color} />
          )}
          onPress={() => console.log("Favoritos")}
          labelStyle={styles.itemLabel}
        />

        <DrawerItem
          label="Historial"
          icon={({ color, size }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          )}
          onPress={() => console.log("Historial")}
          labelStyle={styles.itemLabel}
        />

        <DrawerItem
          label="Compartir App"
          icon={({ color, size }) => (
            <Ionicons name="share-social-outline" size={size} color={color} />
          )}
          onPress={() => console.log("Compartir")}
          labelStyle={styles.itemLabel}
        />
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="#ef4444" />
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
        <Text style={styles.versionText}>Versión 1.0.0</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 16, paddingVertical: 24, backgroundColor: "#3b82f6" },
  profileContainer: { flexDirection: "row", alignItems: "center", gap: 12 },
  avatar: { width: 64, height: 64, borderRadius: 32, borderWidth: 2, borderColor: "#ffffff" },
  userInfo: { flex: 1 },
  userName: { color: "#ffffff", fontWeight: "bold", fontSize: 18 },
  userEmail: { color: "#bfdbfe", fontSize: 14 },
  roleBadge: { backgroundColor: "#1e40af", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, marginTop: 4, alignSelf: "flex-start" },
  roleText: { color: "#ffffff", fontSize: 12, fontWeight: "600" },
  separator: { height: 1, backgroundColor: "#e5e7eb", marginVertical: 8 },
  itemLabel: { color: "#374151" },
  footer: { borderTopWidth: 1, borderTopColor: "#e5e7eb", padding: 16 },
  logoutButton: { flexDirection: "row", alignItems: "center", gap: 12, padding: 12, backgroundColor: "#fef2f2", borderRadius: 8 },
  logoutText: { color: "#dc2626", fontWeight: "600" },
  versionText: { textAlign: "center", fontSize: 12, color: "#9ca3af", marginTop: 12 },
})

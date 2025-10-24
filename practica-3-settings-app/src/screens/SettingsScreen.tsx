import React, { useState } from "react"
import { View, Text, ScrollView, Switch, TouchableOpacity, StyleSheet } from "react-native"

export function SettingsScreen() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [autoUpdate, setAutoUpdate] = useState(true)

  const SettingItem = ({ title, description, value, onValueChange }: {
    title: string
    description: string
    value: boolean
    onValueChange: (value: boolean) => void
  }) => (
    <View style={styles.settingItem}>
      <View style={styles.settingTextContainer}>
        <Text style={styles.settingTitle}>{title}</Text>
        <Text style={styles.settingDescription}>{description}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "#d1d5db", true: "#60a5fa" }}
        thumbColor={value ? "#3b82f6" : "#f3f4f6"}
      />
    </View>
  )

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>⚙️ Configuración</Text>

        <Text style={styles.sectionTitle}>GENERAL</Text>

        <SettingItem
          title="Notificaciones"
          description="Recibir alertas push"
          value={notifications}
          onValueChange={setNotifications}
        />

        <SettingItem
          title="Modo Oscuro"
          description="Usar tema oscuro"
          value={darkMode}
          onValueChange={setDarkMode}
        />

        <SettingItem
          title="Actualización Automática"
          description="Descargar actualizaciones automáticamente"
          value={autoUpdate}
          onValueChange={setAutoUpdate}
        />

        <Text style={styles.sectionTitle}>CUENTA</Text>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTitle}>Cambiar Contraseña</Text>
          <Text style={styles.menuArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTitle}>Privacidad</Text>
          <Text style={styles.menuArrow}>→</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitleDanger}>ZONA DE PELIGRO</Text>

        <TouchableOpacity style={styles.dangerItem}>
          <Text style={styles.dangerTitle}>Eliminar Cuenta</Text>
          <Text style={styles.dangerDescription}>Esta acción no se puede deshacer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb" },
  content: { padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", color: "#111827", marginBottom: 16 },
  sectionTitle: { fontSize: 12, fontWeight: "bold", color: "#4b5563", marginBottom: 8, marginTop: 24, letterSpacing: 1 },
  sectionTitleDanger: { fontSize: 12, fontWeight: "bold", color: "#dc2626", marginBottom: 8, marginTop: 24, letterSpacing: 1 },
  settingItem: { backgroundColor: "#ffffff", padding: 16, marginBottom: 8, borderRadius: 8, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  settingTextContainer: { flex: 1, marginRight: 12 },
  settingTitle: { fontWeight: "600", color: "#111827", fontSize: 16 },
  settingDescription: { fontSize: 14, color: "#4b5563", marginTop: 2 },
  menuItem: { backgroundColor: "#ffffff", padding: 16, marginBottom: 8, borderRadius: 8, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  menuTitle: { fontWeight: "600", color: "#111827", fontSize: 16 },
  menuArrow: { color: "#9ca3af", fontSize: 16 },
  dangerItem: { backgroundColor: "#fef2f2", padding: 16, borderRadius: 8, borderWidth: 1, borderColor: "#fecaca" },
  dangerTitle: { fontWeight: "600", color: "#dc2626", fontSize: 16 },
  dangerDescription: { fontSize: 14, color: "#b91c1c", marginTop: 4 },
})

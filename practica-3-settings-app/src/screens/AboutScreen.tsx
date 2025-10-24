import React from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"

export function AboutScreen() {
  const technologies = [
    "React Native 0.74+",
    "Expo SDK 51+", 
    "React Navigation 6",
    "NativeWind",
    "TypeScript",
  ]

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.icon}>Ì≥±</Text>
          <Text style={styles.appName}>Settings App</Text>
          <Text style={styles.version}>Versi√≥n 1.0.0</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Acerca de esta app</Text>
          <Text style={styles.description}>
            Aplicaci√≥n de ejemplo para demostrar el uso de Drawer Navigator con
            React Navigation. Incluye navegaci√≥n anidada, drawer personalizado y
            mejores pr√°cticas de desarrollo.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Desarrollado con</Text>
          <View style={styles.techList}>
            {technologies.map((tech, i) => (
              <View key={i} style={styles.techItem}>
                <Text style={styles.bullet}>‚Ä¢</Text>
                <Text style={styles.techText}>{tech}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  content: { padding: 16 },
  header: { alignItems: "center", paddingVertical: 24 },
  icon: { fontSize: 60, marginBottom: 16 },
  appName: { fontSize: 24, fontWeight: "bold", color: "#111827", marginBottom: 8 },
  version: { color: "#4b5563", fontSize: 16 },
  section: { marginTop: 16 },
  sectionTitle: { fontWeight: "600", color: "#111827", marginBottom: 8, fontSize: 16 },
  description: { color: "#4b5563", lineHeight: 24, fontSize: 14 },
  techList: { gap: 8 },
  techItem: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 8 },
  bullet: { color: "#3b82f6", fontSize: 16 },
  techText: { color: "#374151", fontSize: 14 },
})

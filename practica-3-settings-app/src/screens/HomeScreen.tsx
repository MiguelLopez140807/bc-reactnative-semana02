import React from "react"
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { MainStackParamList } from "../navigation/types"

type Props = NativeStackScreenProps<MainStackParamList, "Home">

export function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>��� Dashboard</Text>
        <Text style={styles.subtitle}>Bienvenido a tu panel de control</Text>

        <View style={styles.cardsContainer}>
          {[1, 2, 3].map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => navigation.navigate("Details", { itemId: item })}
              style={styles.card}
            >
              <Text style={styles.cardTitle}>Item #{item}</Text>
              <Text style={styles.cardSubtitle}>Toca para ver detalles</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>��� Tip del día</Text>
          <Text style={styles.infoText}>
            Desliza desde el borde izquierdo para abrir el menú lateral
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb" },
  content: { padding: 16 },
  title: { fontSize: 30, fontWeight: "bold", color: "#111827", marginBottom: 8 },
  subtitle: { color: "#4b5563", marginBottom: 24, fontSize: 16 },
  cardsContainer: { marginBottom: 24 },
  card: { backgroundColor: "#ffffff", padding: 20, borderRadius: 12, marginBottom: 12, elevation: 2 },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#111827", marginBottom: 8 },
  cardSubtitle: { color: "#4b5563", fontSize: 14 },
  infoCard: { backgroundColor: "#dbeafe", padding: 16, borderRadius: 12 },
  infoTitle: { color: "#1e40af", fontWeight: "600", marginBottom: 8, fontSize: 16 },
  infoText: { color: "#1d4ed8", fontSize: 14 },
})

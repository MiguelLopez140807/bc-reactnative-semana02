import React from "react"
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native"

export function HelpScreen() {
  const faqs = [
    {
      question: "¿Cómo abro el menú?",
      answer: "Desliza desde el borde izquierdo o toca el ícono de menú.",
    },
    {
      question: "¿Cómo cambio la configuración?",
      answer: "Ve a la sección Configuración en el menú lateral.",
    },
    {
      question: "¿Puedo personalizar el tema?",
      answer: "Sí, activa el modo oscuro en Configuración.",
    },
  ]

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>❓ Ayuda</Text>
        <Text style={styles.subtitle}>Preguntas frecuentes</Text>

        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqItem}>
            <Text style={styles.question}>{faq.question}</Text>
            <Text style={styles.answer}>{faq.answer}</Text>
          </View>
        ))}

        <TouchableOpacity style={styles.supportButton}>
          <Text style={styles.supportButtonText}>Contactar Soporte</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb" },
  content: { padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", color: "#111827", marginBottom: 8 },
  subtitle: { color: "#4b5563", marginBottom: 24, fontSize: 16 },
  faqItem: { backgroundColor: "#ffffff", padding: 16, borderRadius: 8, marginBottom: 12 },
  question: { fontWeight: "bold", color: "#111827", marginBottom: 8, fontSize: 16 },
  answer: { color: "#4b5563", fontSize: 14, lineHeight: 20 },
  supportButton: { backgroundColor: "#3b82f6", padding: 16, borderRadius: 8, alignItems: "center", marginTop: 16 },
  supportButtonText: { color: "#ffffff", fontWeight: "600", fontSize: 16 },
})

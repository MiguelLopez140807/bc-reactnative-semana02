import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { BlogStackParamList } from '../navigation/types'

/**
 * CreatePostScreen - Formulario para crear nuevo post
 *
 * ¿Qué hace?
 * Permite al usuario crear un nuevo artículo de blog
 *
 * ¿Para qué?
 * Demostrar formularios y navegación después de crear
 *
 * ¿Cómo funciona?
 * 1. Captura título, autor y contenido
 * 2. Valida que no estén vacíos
 * 3. Simula creación (en práctica real guardaría en DB)
 * 4. Vuelve a la lista con mensaje de éxito
 */

type Props = NativeStackScreenProps<BlogStackParamList, 'CreatePost'>

export function CreatePostScreen({ navigation }: Props) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = () => {
    // Validación simple
    if (!title.trim()) {
      Alert.alert('Error', 'El título es obligatorio')
      return
    }

    if (!author.trim()) {
      Alert.alert('Error', 'El autor es obligatorio')
      return
    }

    if (!content.trim()) {
      Alert.alert('Error', 'El contenido es obligatorio')
      return
    }

    // Simular creación exitosa
    Alert.alert('✅ Post creado', `"${title}" ha sido publicado exitosamente`, [
      {
        text: 'OK',
        onPress: () => {
          // Volver a la lista de posts
          navigation.navigate('PostList')
        },
      },
    ])
  }

  const handleCancel = () => {
    Alert.alert('Cancelar', '¿Descartar los cambios?', [
      { text: 'No', style: 'cancel' },
      {
        text: 'Sí, descartar',
        style: 'destructive',
        onPress: () => navigation.goBack(),
      },
    ])
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            ✍️ Nuevo Artículo
          </Text>
          <Text style={styles.headerSubtitle}>
            Comparte tus conocimientos con la comunidad
          </Text>
        </View>

        {/* Formulario */}
        <View style={styles.form}>
          {/* Título */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Título *
            </Text>
            <TextInput
              value={title}
              onChangeText={setTitle}
              placeholder="Ej: Introducción a React Native"
              style={styles.input}
              placeholderTextColor="#9ca3af"
            />
          </View>

          {/* Autor */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Autor *
            </Text>
            <TextInput
              value={author}
              onChangeText={setAuthor}
              placeholder="Tu nombre"
              style={styles.input}
              placeholderTextColor="#9ca3af"
            />
          </View>

          {/* Contenido */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Contenido *
            </Text>
            <TextInput
              value={content}
              onChangeText={setContent}
              placeholder="Escribe el contenido de tu artículo..."
              multiline
              numberOfLines={8}
              textAlignVertical="top"
              style={[styles.input, styles.textArea]}
              placeholderTextColor="#9ca3af"
            />
          </View>
        </View>

        {/* Botones */}
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.submitButton}
          >
            <Text style={styles.submitButtonText}>
              Publicar Artículo
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleCancel}
            style={styles.cancelButton}
          >
            <Text style={styles.cancelButtonText}>
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>

        {/* Ayuda */}
        <View style={styles.helpContainer}>
          <Text style={styles.helpText}>
            💡 <Text style={styles.helpBold}>Tip:</Text> Escribe contenido
            claro y útil para tus lectores.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  form: {
    gap: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  buttons: {
    marginTop: 24,
    gap: 12,
  },
  submitButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#374151',
    fontWeight: '600',
    fontSize: 16,
  },
  helpContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#eff6ff',
    borderRadius: 8,
  },
  helpText: {
    fontSize: 14,
    color: '#1e40af',
  },
  helpBold: {
    fontWeight: '600',
  },
})
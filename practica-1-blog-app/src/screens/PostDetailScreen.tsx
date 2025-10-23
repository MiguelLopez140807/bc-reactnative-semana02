import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { BlogStackParamList } from '../navigation/types'
import { getPostById } from '../data/posts'

/**
 * PostDetailScreen - Detalle completo de un post
 *
 * ¿Qué hace?
 * Muestra el contenido completo de un artículo
 *
 * ¿Para qué?
 * Permitir al usuario leer el artículo completo
 *
 * ¿Cómo funciona?
 * 1. Recibe postId como parámetro de navegación
 * 2. Busca el post en los datos
 * 3. Muestra título, autor, fecha y contenido completo
 */

type Props = NativeStackScreenProps<BlogStackParamList, 'PostDetail'>

export function PostDetailScreen({ route, navigation }: Props) {
  // Extraer el ID del post de los parámetros de navegación
  const { postId } = route.params

  // Buscar el post por ID
  const post = getPostById(postId)

  // Manejo de error: post no encontrado
  if (!post) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>
          ❌ Post no encontrado
        </Text>
        <Text style={styles.errorMessage}>
          El artículo que buscas no existe o fue eliminado.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.errorButton}
        >
          <Text style={styles.errorButtonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Header con categoría */}
        <View style={styles.categoryContainer}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>
              {post.category}
            </Text>
          </View>
        </View>

        {/* Título */}
        <Text style={styles.title}>
          {post.title}
        </Text>

        {/* Metadata */}
        <View style={styles.metadataContainer}>
          <View>
            <Text style={styles.authorText}>Por {post.author}</Text>
            <Text style={styles.dateText}>{post.date}</Text>
          </View>
        </View>

        {/* Contenido */}
        <Text style={styles.contentText}>
          {post.content}
        </Text>

        {/* Acciones */}
        <View style={styles.actionsContainer}>
          <Text style={styles.actionsTitle}>
            ¿Te gustó este artículo?
          </Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.likeButton}>
              <Text style={styles.likeButtonText}>👍 Me gusta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>🔖 Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Botón volver */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>
            ← Volver a la lista
          </Text>
        </TouchableOpacity>
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 16,
  },
  errorButton: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  errorButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryBadge: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  categoryText: {
    color: '#2563eb',
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
    lineHeight: 36,
  },
  metadataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  authorText: {
    fontSize: 14,
    color: '#6b7280',
  },
  dateText: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 4,
  },
  contentText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 32,
  },
  actionsContainer: {
    marginTop: 32,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  actionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  likeButton: {
    flex: 1,
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  likeButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#e5e7eb',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#374151',
    fontWeight: '600',
  },
  backButton: {
    marginTop: 24,
    marginBottom: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#374151',
    fontWeight: '600',
  },
})
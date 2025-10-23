import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { BlogStackParamList } from '../navigation/types'
import { POSTS } from '../data/posts'

/**
 * PostListScreen - Lista de posts del blog
 *
 * ¿Qué hace?
 * Muestra todos los posts en una lista scrolleable
 *
 * ¿Para qué?
 * Pantalla principal donde el usuario ve todos los artículos disponibles
 *
 * ¿Cómo funciona?
 * 1. Renderiza los posts con FlatList
 * 2. Al tocar un post, navega a PostDetail pasando el ID
 * 3. Botón para crear nuevo post
 */

type Props = NativeStackScreenProps<BlogStackParamList, 'PostList'>

export function PostListScreen({ navigation }: Props) {
  const handlePostPress = (postId: number) => {
    // Navegar a detalle pasando el ID del post
    navigation.navigate('PostDetail', { postId })
  }

  const handleCreatePress = () => {
    // Navegar a pantalla de creación
    navigation.navigate('CreatePost')
  }

  const renderPost = ({ item }: { item: (typeof POSTS)[0] }) => (
    <TouchableOpacity
      onPress={() => handlePostPress(item.id)}
      style={styles.postCard}
    >
      {/* Badge de categoría */}
      <View style={styles.categoryContainer}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>
            {item.category}
          </Text>
        </View>
      </View>

      {/* Título */}
      <Text style={styles.postTitle}>{item.title}</Text>

      {/* Excerpt */}
      <Text style={styles.postExcerpt} numberOfLines={2}>
        {item.excerpt}
      </Text>

      {/* Metadata */}
      <View style={styles.metadataContainer}>
        <Text style={styles.authorText}>{item.author}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={POSTS}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              📝 Mi Blog
            </Text>
            <Text style={styles.headerSubtitle}>
              {POSTS.length} artículos publicados
            </Text>
          </View>
        }
      />

      {/* Botón flotante para crear post */}
      <TouchableOpacity
        onPress={handleCreatePress}
        style={styles.floatingButton}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  listContainer: {
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  postCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
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
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  postExcerpt: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
    lineHeight: 20,
  },
  metadataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorText: {
    fontSize: 12,
    color: '#6b7280',
  },
  dateText: {
    fontSize: 12,
    color: '#9ca3af',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#3b82f6',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  floatingButtonText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
})
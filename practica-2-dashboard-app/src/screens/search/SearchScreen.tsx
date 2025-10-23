import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { SEARCH_RESULTS } from '../../data/mockData'

/**
 * SearchScreen - Búsqueda de contenido
 */

export function SearchScreen() {
  const [query, setQuery] = useState('')

  const filteredResults = SEARCH_RESULTS.filter((result) =>
    result.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Buscar..."
          style={styles.searchInput}
          placeholderTextColor="#9ca3af"
        />
      </View>

      {/* Results */}
      <FlatList
        data={filteredResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem}>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>
                  {item.category}
                </Text>
              </View>
            </View>
            <Text style={styles.resultTitle}>
              {item.title}
            </Text>
            <Text style={styles.resultDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {query ? 'No se encontraron resultados' : 'Escribe para buscar'}
            </Text>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  searchContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  searchInput: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  resultItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  categoryBadge: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  categoryText: {
    fontSize: 12,
    color: '#2563eb',
    fontWeight: '600',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  resultDescription: {
    color: '#6b7280',
    lineHeight: 20,
  },
  emptyContainer: {
    padding: 32,
    alignItems: 'center',
  },
  emptyText: {
    color: '#9ca3af',
    textAlign: 'center',
  },
})
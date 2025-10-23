import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { ProfileStackParamList } from '../../navigation/types'
import { USER_PROFILE } from '../../data/mockData'

/**
 * ProfileScreen - Perfil del usuario
 */

type Props = NativeStackScreenProps<ProfileStackParamList, 'Profile'>

export function ProfileScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      {/* Header con Avatar */}
      <View style={styles.header}>
        <Image
          source={{ uri: USER_PROFILE.avatar }}
          style={styles.avatar}
        />
        <Text style={styles.name}>
          {USER_PROFILE.name}
        </Text>
        <Text style={styles.email}>{USER_PROFILE.email}</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            {USER_PROFILE.stats.posts}
          </Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={[styles.statItem, styles.statItemBorder]}>
          <Text style={styles.statNumber}>
            {USER_PROFILE.stats.followers}
          </Text>
          <Text style={styles.statLabel}>Seguidores</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            {USER_PROFILE.stats.following}
          </Text>
          <Text style={styles.statLabel}>Siguiendo</Text>
        </View>
      </View>

      {/* Bio */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>{USER_PROFILE.bio}</Text>
      </View>

      {/* Edit Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile')}
          style={styles.editButton}
        >
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {['Configuración', 'Privacidad', 'Ayuda', 'Cerrar Sesión'].map(
          (option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionItem}
            >
              <Text style={styles.optionText}>{option}</Text>
              <Text style={styles.optionArrow}>→</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 16,
    backgroundColor: '#f9fafb',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  email: {
    fontSize: 16,
    color: '#6b7280',
  },
  statsContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
  },
  statItem: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  statItemBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#e5e7eb',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  bioContainer: {
    padding: 16,
  },
  bioText: {
    color: '#374151',
    lineHeight: 20,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  editButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  optionsContainer: {
    marginTop: 16,
  },
  optionItem: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    color: '#111827',
    fontSize: 16,
  },
  optionArrow: {
    color: '#9ca3af',
    fontSize: 16,
  },
})
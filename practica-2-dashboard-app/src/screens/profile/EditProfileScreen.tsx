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
import { USER_PROFILE } from '../../data/mockData'

/**
 * EditProfileScreen - Editar perfil
 */

export function EditProfileScreen({ navigation }: any) {
  const [name, setName] = useState(USER_PROFILE.name)
  const [bio, setBio] = useState(USER_PROFILE.bio)

  const handleSave = () => {
    Alert.alert('✅ Guardado', 'Tu perfil se actualizó correctamente', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ])
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Nombre
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Biografía
          </Text>
          <TextInput
            value={bio}
            onChangeText={setBio}
            multiline
            numberOfLines={4}
            style={[styles.input, styles.textArea]}
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity
          onPress={handleSave}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Guardar Cambios</Text>
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
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  saveButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { HomeStackParamList } from '../../navigation/types'
import { NOTIFICATIONS, type Notification } from '../../data/mockData'

/**
 * NotificationsScreen - Lista de notificaciones
 */

type Props = NativeStackScreenProps<HomeStackParamList, 'Notifications'>

export function NotificationsScreen({ navigation }: Props) {
  const renderNotification = ({ item }: { item: Notification }) => (
    <TouchableOpacity
      style={[
        styles.notificationItem,
        !item.read ? styles.unreadItem : styles.readItem
      ]}
    >
      <View style={styles.notificationContent}>
        <View
          style={[
            styles.notificationDot,
            !item.read ? styles.unreadDot : styles.readDot
          ]}
        />
        <View style={styles.notificationText}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationMessage}>{item.message}</Text>
          <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={NOTIFICATIONS}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerText}>
              {NOTIFICATIONS.filter((n) => !n.read).length} notificaciones sin
              leer
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
  header: {
    padding: 16,
    backgroundColor: '#f9fafb',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerText: {
    fontSize: 14,
    color: '#6b7280',
  },
  notificationItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  unreadItem: {
    backgroundColor: '#eff6ff',
  },
  readItem: {
    backgroundColor: '#ffffff',
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  notificationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 4,
  },
  unreadDot: {
    backgroundColor: '#3b82f6',
  },
  readDot: {
    backgroundColor: '#d1d5db',
  },
  notificationText: {
    flex: 1,
  },
  notificationTitle: {
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  notificationMessage: {
    color: '#6b7280',
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: '#9ca3af',
  },
})
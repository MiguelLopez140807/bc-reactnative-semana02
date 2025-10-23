import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { HomeStackParamList } from '../../navigation/types'
import { getUnreadNotificationsCount } from '../../data/mockData'

/**
 * HomeScreen - Pantalla principal del dashboard
 *
 * ¿Qué muestra?
 * Resumen de actividad y acceso rápido a notificaciones
 */

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>

export function HomeScreen({ navigation }: Props) {
  const unreadCount = getUnreadNotificationsCount()

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>
            👋 ¡Bienvenido!
          </Text>
          <Text style={styles.subtitle}>Aquí está tu resumen de hoy</Text>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, styles.blueCard]}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Tareas</Text>
          </View>
          <View style={[styles.statCard, styles.greenCard]}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Completadas</Text>
          </View>
        </View>

        {/* Notifications Card */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          style={styles.notificationCard}
        >
          <View style={styles.notificationContent}>
            <View style={styles.notificationLeft}>
              <View style={styles.notificationIcon}>
                <Text style={styles.iconText}>🔔</Text>
              </View>
              <View>
                <Text style={styles.notificationTitle}>
                  Notificaciones
                </Text>
                {unreadCount > 0 && (
                  <Text style={styles.notificationSubtitle}>
                    {unreadCount} sin leer
                  </Text>
                )}
              </View>
            </View>
            <Text style={styles.arrow}>→</Text>
          </View>
        </TouchableOpacity>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>
          Acciones Rápidas
        </Text>

        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionIcon}>📝</Text>
            <Text style={styles.actionText}>
              Nueva Nota
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionIcon}>📷</Text>
            <Text style={styles.actionText}>Foto</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionIcon}>📊</Text>
            <Text style={styles.actionText}>
              Reportes
            </Text>
          </TouchableOpacity>
        </View>

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>
          Actividad Reciente
        </Text>

        {[1, 2, 3].map((item) => (
          <View key={item} style={styles.activityCard}>
            <Text style={styles.activityTitle}>
              Tarea completada #{item}
            </Text>
            <Text style={styles.activityTime}>Hace {item} hora(s)</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
  },
  blueCard: {
    backgroundColor: '#3b82f6',
  },
  greenCard: {
    backgroundColor: '#10b981',
  },
  statNumber: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    color: '#e0f2fe',
    fontSize: 14,
  },
  notificationCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notificationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  notificationIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#f3e8ff',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 20,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  notificationSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  arrow: {
    color: '#9ca3af',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  actionIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
  },
  activityCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  activityTitle: {
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  activityTime: {
    fontSize: 12,
    color: '#6b7280',
  },
})
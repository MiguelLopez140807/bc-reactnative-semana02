# 📱 Práctica 3: Settings App con Drawer Navigator

**👤 Autor:** Miguel Lopez  
**📅 Fecha:** 23 de octubre de 2025  
**📚 Curso:** Semana 2 - Navegación React Native

## 🎯 Objetivo
Crear una aplicación de configuración profesional que demuestre el uso de **Drawer Navigator** con custom drawer content, navegación anidada, perfil de usuario y funcionalidades avanzadas.

## �️ Arquitectura de Navegación

```
DrawerNavigator (Principal)
├── MainStack → HomeStack
│   ├── HomeScreen (Dashboard)
│   └── DetailsScreen (Navegación anidada)
├── Settings → SettingsScreen (Configuración avanzada)
├── About → AboutScreen (Información de la app)
└── Help → HelpScreen (Centro de ayuda)

CustomDrawerContent:
├── Perfil de Usuario (Avatar, nombre, email)
├── Navegación Principal (DrawerItemList)
├── Opciones Adicionales (Favoritos, Historial, Compartir)
└── Logout (Con confirmación Alert)
```

## 🚀 Características Implementadas

### 🎨 Interfaz de Usuario:
- **Custom Drawer** con foto de perfil y datos del usuario
- **4 Pantallas Principales:** Home, Settings, About, Help
- **Navegación Stack** anidada para detalles
- **Iconos Ionicons** para cada sección
- **Diseño Profesional** con StyleSheet

### ⚡ Funcionalidades:
- **Dashboard Principal** con tarjetas interactivas
- **Configuración Avanzada** con switches y opciones
- **Información de la App** con detalles técnicos
- **Centro de Ayuda** con preguntas frecuentes
- **Logout con Confirmación** usando Alert

### 🔧 Configuración Técnica:
- **React Navigation v6** con tipos TypeScript
- **Drawer Navigator** con custom content
- **Stack Navigator** anidado
- **Expo Vector Icons** para iconografía
- **Gestión de Estado** con useState

## 📁 Estructura del Proyecto

```
practica-3-settings-app/
├── App.tsx                           # Componente principal con NavigationContainer
├── src/
│   ├── data/
│   │   └── userData.ts              # Datos del usuario para el drawer
│   ├── navigation/
│   │   ├── types.ts                 # Tipos TypeScript para navegación
│   │   ├── DrawerNavigator.tsx      # Configuración del Drawer Navigator
│   │   └── MainStack.tsx           # Stack Navigator anidado
│   ├── screens/
│   │   ├── HomeScreen.tsx          # Dashboard principal
│   │   ├── SettingsScreen.tsx      # Pantalla de configuración
│   │   ├── AboutScreen.tsx         # Información de la aplicación
│   │   └── HelpScreen.tsx          # Centro de ayuda
│   └── components/
│       └── CustomDrawer.tsx        # Custom drawer content
├── package.json
├── tsconfig.json
├── babel.config.js
└── README.md
```

## � Tecnologías Utilizadas

- **React Native**: 0.81.5
- **Expo**: 54.0.19
- **React Navigation v6**:
  - `@react-navigation/native`
  - `@react-navigation/drawer`
  - `@react-navigation/native-stack`
- **TypeScript**: Tipado estricto para navegación segura
- **Expo Vector Icons**: Íconos Ionicons para drawer y pantallas
- **pnpm**: Gestor de paquetes eficiente

## 🎨 Características de UI/UX

### 🏠 HomeScreen (Dashboard)
- **Tarjetas interactivas**: Navegación a pantalla de detalles con parámetros
- **Diseño tipo dashboard**: Cards con información organizada
- **Tip del día**: Sección informativa con consejos
- **Navegación Stack**: Flujo hacia DetailsScreen

### ⚙️ SettingsScreen (Configuración)
- **Switches funcionales**: Notificaciones, modo oscuro, auto-update
- **Secciones organizadas**: General, Cuenta, Zona de Peligro
- **Opciones de cuenta**: Cambiar contraseña, privacidad
- **Interfaz nativa**: Uso de Switch de React Native

### ℹ️ AboutScreen (Información)
- **Detalles de la app**: Versión, descripción, propósito
- **Tecnologías utilizadas**: Lista detallada del stack técnico
- **Diseño elegante**: Iconos y secciones bien organizadas
- **Footer informativo**: Datos del desarrollador

### 🆘 HelpScreen (Centro de Ayuda)
- **Preguntas frecuentes**: FAQs organizadas por categorías
- **Centro de soporte**: Opciones de contacto y ayuda
- **Guías de usuario**: Información de uso de la aplicación
- **Navegación intuitiva**: Acceso fácil a información de ayuda

### 🎨 CustomDrawer (Drawer Personalizado)
- **Perfil de usuario**: Avatar, foto, nombre, email y rol
- **Navegación principal**: Integración con DrawerItemList
- **Opciones adicionales**: Favoritos, Historial, Compartir
- **Logout seguro**: Confirmación con Alert antes de cerrar sesión

## �🚀 Instalación y Configuración

### 1. Instalar Dependencias
```bash
cd practica-3-settings-app
pnpm install
```

### 2. Dependencias Incluidas
```json
{
  "dependencies": {
    "@expo/vector-icons": "^15.0.3",
    "@react-navigation/drawer": "^7.6.0",
    "@react-navigation/native": "^7.1.18",
    "@react-navigation/native-stack": "^7.5.1",
    "expo": "~54.0.19",
    "react": "19.1.0",
    "react-native": "0.81.5",
    "react-native-safe-area-context": "^5.6.1",
    "react-native-screens": "^4.16.0"
  }
}
```

### 3. Ejecutar la Aplicación
```bash
pnpm start
```

## 📱 Pantallas y Funcionalidades

### 🏠 HomeScreen (Dashboard)
- **Tarjetas Interactivas** que navegan a pantalla de detalles
- **Diseño tipo Dashboard** con información resumida
- **Navegación Stack** para ver detalles de elementos
- **Estilo Profesional** con tarjetas elevadas

### ⚙️ SettingsScreen (Configuración)
- **Switches Funcionales** para notificaciones, modo oscuro, etc.
- **Secciones Organizadas** (General, Cuenta, Zona de Peligro)
- **Opciones de Cuenta** como cambiar contraseña y privacidad
- **Interfaz Nativa** usando Switch de React Native

### ℹ️ AboutScreen (Acerca de)
- **Información de la App** con versión y descripción
- **Tecnologías Utilizadas** con lista detallada
- **Diseño Elegante** con iconos y secciones claras
- **Footer Informativo** con datos del desarrollador

### 🆘 HelpScreen (Ayuda)
- **Preguntas Frecuentes** expandibles
- **Centro de Soporte** con opciones de contacto
- **Guías de Usuario** organizadas por categorías
- **Interfaz Intuitiva** para encontrar ayuda rápidamente

### 🎨 CustomDrawer (Drawer Personalizado)
- **Perfil de Usuario** con foto y datos personales
- **Navegación Principal** integrada con DrawerItemList
- **Opciones Adicionales** como Favoritos, Historial, Compartir
- **Botón de Logout** con confirmación de Alert

## 🔧 Configuración Técnica

### TypeScript Types
```typescript
// Tipos para el Drawer Navigator
export type DrawerParamList = {
  MainStack: undefined;
  Settings: undefined;
  About: undefined;
  Help: undefined;
};

// Tipos para el Stack Navigator anidado
export type MainStackParamList = {
  Home: undefined;
  Details: { itemId: string };
};
```

### Navegación Anidada
```typescript
// Drawer Navigator principal
const Drawer = createDrawerNavigator<DrawerParamList>();

// Stack Navigator anidado dentro del Drawer
const Stack = createNativeStackNavigator<MainStackParamList>();
```

### Custom Drawer Content
```typescript
// Drawer personalizado con perfil de usuario
const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Perfil de usuario */}
      <View style={styles.profileSection}>
        <Image source={{ uri: CURRENT_USER.avatar }} style={styles.avatar} />
        <Text style={styles.userName}>{CURRENT_USER.name}</Text>
        <Text style={styles.userEmail}>{CURRENT_USER.email}</Text>
      </View>
      
      {/* Navegación principal */}
      <DrawerItemList {...props} />
      
      {/* Opciones adicionales y logout */}
    </DrawerContentScrollView>
  );
};
```

## ✅ Checklist de Verificación

### 🏗️ Estructura Base:
- [ ] Drawer Navigator configurado correctamente
- [ ] Stack Navigator anidado funcionando
- [ ] Custom Drawer Content implementado
- [ ] Tipos TypeScript definidos
- [ ] 4 pantallas principales creadas

### 🎨 Interfaz de Usuario:
- [ ] Perfil de usuario en el drawer
- [ ] Iconos Ionicons en todas las secciones
- [ ] Diseño profesional con StyleSheet
- [ ] Navegación fluida entre pantallas
- [ ] Responsividad en diferentes tamaños

### ⚡ Funcionalidades:
- [ ] Dashboard con tarjetas interactivas
- [ ] Switches funcionales en Settings
- [ ] Información completa en About
- [ ] Centro de ayuda organizado
- [ ] Logout con confirmación Alert

### 🔧 Aspectos Técnicos:
- [ ] No errores de TypeScript
- [ ] Navegación tipada funcionando
- [ ] Imports correctos de dependencias
- [ ] Manejo de estado con useState
- [ ] Estructura de archivos organizada

## 🎨 Mejoras Opcionales

### 🟢 Nivel 1 (Fácil - 5 pts extra):
- [ ] Cambiar colores del tema
- [ ] Agregar más opciones en Settings
- [ ] Personalizar iconos del drawer
- [ ] Añadir más preguntas en Help
- [ ] Cambiar foto de perfil del usuario

### 🟡 Nivel 2 (Medio - 10 pts extra):
- [ ] Implementar tema oscuro funcional
- [ ] Agregar animaciones de transición
- [ ] Crear pantalla de perfil detallada
- [ ] Implementar búsqueda en Help
- [ ] Agregar notificaciones push simuladas

### 🔴 Nivel 3 (Avanzado - 15 pts extra):
- [ ] Integrar Context API para estado global
- [ ] Implementar persistencia con AsyncStorage
- [ ] Crear sistema de autenticación
- [ ] Agregar animaciones personalizadas
- [ ] Implementar i18n (internacionalización)

## � Problemas Comunes y Soluciones

### ❌ Error: "react-native-reanimated not found"
```bash
# Solución: No instalar reanimated para esta práctica
# Ya está configurado sin esta dependencia
```

### ❌ Error: "Cannot resolve @expo/vector-icons"
```bash
# Solución: Verificar instalación
pnpm install @expo/vector-icons
```

### ❌ Error: TypeScript "Property does not exist"
```bash
# Solución: Verificar tipos en src/navigation/types.ts
# Asegurar que los nombres coincidan exactamente
```

### ❌ Error: "Drawer not opening"
```bash
# Solución: Verificar que react-native-screens esté instalado
pnpm install react-native-screens react-native-safe-area-context
```

## 🎯 Criterios de Evaluación

### Funcionalidad (40 puntos):
- Drawer Navigator funciona correctamente (10 pts)
- Custom Drawer Content implementado (10 pts)
- Navegación Stack anidada (10 pts)
- Todas las pantallas operativas (10 pts)

### Diseño y UX (30 puntos):
- Interfaz profesional y consistente (10 pts)
- Iconos apropiados y estética (10 pts)
- Navegación intuitiva y fluida (10 pts)

### Código y Estructura (30 puntos):
- Código limpio y organizado (10 pts)
- TypeScript correctamente tipado (10 pts)
- Estructura de archivos lógica (10 pts)

### Total: 100 puntos + mejoras opcionales

---

## 🤝 Soporte y Recursos

- **React Navigation Docs:** [Drawer Navigator](https://reactnavigation.org/docs/drawer-navigator/)
- **Expo Vector Icons:** [Ionicons Directory](https://icons.expo.fyi/)
- **TypeScript:** [React Navigation Types](https://reactnavigation.org/docs/typescript/)

**¡Excelente trabajo completando la Práctica 3! 🎉**
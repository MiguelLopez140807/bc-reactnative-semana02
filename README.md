# 💻 Semana 2: Navegación en React Native

Ejercicios prácticos guiados para dominar los 3 tipos de navegación fundamentales en React Native.

## 📋 Índice de Prácticas

| # | Práctica | Navigator | Duración | Dificultad | Estado |
|---|----------|-----------|----------|------------|---------|
| 1 | Blog App | Stack Navigator | 45 min | ⭐⭐ | 📝 Pendiente |
| 2 | Dashboard App | Tab Navigator | 45 min | ⭐⭐ | 📝 Pendiente |
| 3 | Settings App | Drawer Navigator | 30 min | ⭐⭐⭐ | 📝 Pendiente |

**Tiempo Total:** ~2 horas

## 🎯 Objetivos Generales

Al completar las 3 prácticas, serás capaz de:

- ✅ Implementar **Stack Navigator** para flujos lineales
- ✅ Crear **Tab Navigator** con pestañas inferiores  
- ✅ Configurar **Drawer Navigator** con menú lateral
- ✅ Anidar navegadores (Stack dentro de Tab, Stack dentro de Drawer)
- ✅ Personalizar íconos, estilos y comportamientos
- ✅ Manejar navegación tipada con **TypeScript**
- ✅ Pasar parámetros entre pantallas
- ✅ Crear custom drawer content

## 📚 Requisitos Previos

### Conocimientos:
- ✅ React Native básico
- ✅ Componentes funcionales y hooks
- ✅ TypeScript básico (recomendado)
- ✅ Teoría de React Navigation

### Dependencias a Instalar:
```bash
# React Navigation y navegadores principales
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npm install @react-navigation/drawer

# Dependencias de Expo
npm install react-native-screens react-native-safe-area-context

# Para Drawer (práctica 3)
npm install react-native-gesture-handler react-native-reanimated

# Íconos
npm install @expo/vector-icons

# Styling (NativeWind - opcional)
npm install nativewind
npm install --save-dev tailwindcss
```

## 🗂️ Estructura del Proyecto

```
SEMANA 2 - NAVEGACION REACT NATIVE/
├── README.md                       # Este archivo
├── SETUP-INICIAL.md               # Guía de configuración
├── COMANDOS-UTILES.md             # Comandos frecuentes
│
├── practica-1-blog-app/           # Stack Navigator
│   ├── README.md                  # Guía específica
│   ├── package.json
│   ├── App.tsx
│   ├── src/
│   │   ├── types/                 # Tipos TypeScript
│   │   ├── screens/              # Pantallas principales
│   │   └── components/           # Componentes reutilizables
│   └── assets/
│
├── practica-2-dashboard-app/      # Tab Navigator
│   ├── README.md
│   ├── package.json
│   ├── App.tsx
│   ├── src/
│   │   ├── types/
│   │   ├── screens/
│   │   └── components/
│   └── assets/
│
└── practica-3-settings-app/       # Drawer Navigator
    ├── README.md
    ├── package.json
    ├── App.tsx
    ├── src/
    │   ├── types/
    │   ├── screens/
    │   └── components/
    └── assets/
```

## 🚀 Cómo Empezar

### 1. Configuración Inicial
```bash
cd "SEMANA 2 - NAVEGACION REACT NATIVE"
```

### 2. Práctica 1 - Blog App (Stack Navigator)
```bash
cd practica-1-blog-app
npm install
npm start
```

### 3. Práctica 2 - Dashboard App (Tab Navigator)  
```bash
cd practica-2-dashboard-app
npm install
npm start
```

### 4. Práctica 3 - Settings App (Drawer Navigator)
```bash
cd practica-3-settings-app
npm install  
npm start
```

## 📊 Sistema de Evaluación

### Por Práctica:
- Cada práctica vale **100 puntos**
- Se evalúan múltiples criterios
- Hay checkboxes de verificación

### Calificación General:
- **Práctica 1:** 33.33% (Stack Navigator)
- **Práctica 2:** 33.33% (Tab Navigator)  
- **Práctica 3:** 33.34% (Drawer Navigator)
- **Total:** 100% de la nota de prácticas

### Escala:
- **90-100:** ⭐⭐⭐⭐⭐ Excelente
- **80-89:** ⭐⭐⭐⭐ Muy Bueno
- **70-79:** ⭐⭐⭐ Bueno
- **60-69:** ⭐⭐ Suficiente
- **0-59:** ⭐ Insuficiente

## 🎨 Mejoras Opcionales

Cada práctica incluye 3 niveles de mejoras:

- 🟢 **Nivel 1 (Fácil):** Cambios visuales básicos, agregar más datos, modificar estilos
- 🟡 **Nivel 2 (Medio):** Nuevas funcionalidades, integración de APIs, optimizaciones
- 🔴 **Nivel 3 (Avanzado):** Características complejas, animaciones personalizadas, arquitectura avanzada

💡 **Tip:** Completa las mejoras opcionales para obtener puntos extra y profundizar tu aprendizaje.

## 🎓 Metodología

### Estructura de Cada Práctica:
1. 🎯 Objetivos de aprendizaje
2. 📋 Requisitos previos  
3. 🏗️ Estructura del proyecto
4. 📝 Setup inicial
5. 📝 Tipos TypeScript
6. 📝 Implementación paso a paso
7. ✅ Checklist de verificación
8. 🎨 Mejoras opcionales
9. 🐛 Problemas comunes y soluciones
10. 🎯 Criterios de evaluación

### Código con Documentación:
```tsx
/**
 * ComponentName - Descripción breve
 *
 * ¿Qué hace?
 * Explicación de la funcionalidad
 *
 * ¿Para qué?
 * Propósito y beneficios
 *
 * ¿Cómo funciona?
 * Pasos del proceso (cuando aplique)
 */
```

## 🤝 Soporte

- **En Clase:** Haz preguntas durante la implementación
- **En Casa:** Consulta el troubleshooting de cada práctica
- **Dudas:** Revisa la documentación oficial de React Navigation

---

**¡Vamos a dominar la navegación en React Native! 🚀**
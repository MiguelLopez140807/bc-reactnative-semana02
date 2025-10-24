# 💻 Semana 2: Navegación en React Native

**👤 Autor:** Miguel Lopez  
**📅 Fecha:** 23 de octubre de 2025  
**📚 Curso:** Desarrollo de Aplicaciones Móviles  
**🎯 Temática:** Navegación React Native con TypeScript

---

## 📖 Descripción General

Este repositorio contiene **3 prácticas completas** para dominar los tipos de navegación fundamentales en React Native. Cada práctica está organizada en su propia rama con una aplicación funcional y documentación específica.

## 🌳 Organización por Ramas

El proyecto está estructurado usando **Git branches** para mantener cada práctica independiente y organizada:

```
📦 SEMANA 2 - NAVEGACION REACT NATIVE
├── 🌿 main                    # Documentación general (este README)
├── 🌿 practica-1-blog-app     # Stack Navigator - Blog App
├── 🌿 practica-2-dashboard-app # Tab Navigator - Dashboard App  
└── 🌿 practica-3-settings-app # Drawer Navigator - Settings App
```

### 🔄 Cómo Navegar Entre Prácticas

```bash
# Ver todas las ramas disponibles
git branch -a

# Cambiar a una práctica específica
git checkout practica-1-blog-app     # Para la Práctica 1
git checkout practica-2-dashboard-app # Para la Práctica 2
git checkout practica-3-settings-app  # Para la Práctica 3

# Regresar al main
git checkout main
```

---

## 📚 Índice de Prácticas

| # | Práctica | Navigator | Duración | Dificultad | Rama | Estado |
|---|----------|-----------|----------|------------|------|---------|
| 1 | **Blog App** | Stack Navigator | 45 min | ⭐⭐ | `practica-1-blog-app` | ✅ Completa |
| 2 | **Dashboard App** | Tab Navigator | 45 min | ⭐⭐ | `practica-2-dashboard-app` | ✅ Completa |
| 3 | **Settings App** | Drawer Navigator | 45 min | ⭐⭐⭐ | `practica-3-settings-app` | ✅ Completa |

**⏱️ Tiempo Total:** ~2.25 horas

---

## 🎯 Objetivos de Aprendizaje

Al completar las 3 prácticas, dominarás:

### 📱 **Navegación React Native:**
- ✅ **Stack Navigator** para flujos lineales y jerarquías
- ✅ **Tab Navigator** con pestañas inferiores y badges
- ✅ **Drawer Navigator** con menú lateral personalizado
- ✅ **Navegación Anidada** (combinación de navegadores)

### 🔧 **Aspectos Técnicos:**
- ✅ **TypeScript** para navegación tipada y segura
- ✅ **React Navigation v6** configuración avanzada
- ✅ **Expo Vector Icons** integración de iconografía
- ✅ **Pasar parámetros** entre pantallas
- ✅ **Custom Components** para navegación personalizada

### 🎨 **UI/UX Profesional:**
- ✅ **Diseño consistente** con StyleSheet
- ✅ **Interfaces nativas** usando componentes de React Native
- ✅ **Experiencia de usuario** fluida y intuitiva

---

## � Cómo Empezar

### 1️⃣ **Clonar y Configurar:**
```bash
git clone <repository-url>
cd "SEMANA 2 - NAVEGACION REACT NATIVE"
```

### 2️⃣ **Elegir una Práctica:**
```bash
# Para comenzar con Stack Navigator
git checkout practica-1-blog-app

# Para Tab Navigator  
git checkout practica-2-dashboard-app

# Para Drawer Navigator
git checkout practica-3-settings-app
```

### 3️⃣ **Instalar y Ejecutar:**
```bash
# Ir al directorio de la práctica
cd practica-[1|2|3]-[nombre]-app

# Instalar dependencias
pnpm install

# Ejecutar la aplicación
pnpm start
```

---

## 📱 Resumen de Aplicaciones

### 🥇 **Práctica 1: Blog App** (`practica-1-blog-app`)
- **Navigator:** Stack Navigator
- **Características:** 
  - Lista de posts con navegación a detalles
  - Pantalla de comentarios anidada
  - Headers personalizados
  - Parámetros tipados entre pantallas

### 🥈 **Práctica 2: Dashboard App** (`practica-2-dashboard-app`)
- **Navigator:** Tab Navigator con Stack anidado
- **Características:**
  - 3 tabs: Home, Search, Profile
  - Badges de notificación
  - Iconos Ionicons dinámicos
  - Navegación anidada en Home y Profile

### 🥉 **Práctica 3: Settings App** (`practica-3-settings-app`)
- **Navigator:** Drawer Navigator con Stack anidado
- **Características:**
  - Custom Drawer Content con perfil de usuario
  - 4 pantallas: Home, Settings, About, Help
  - Switches funcionales y configuraciones
  - Logout con confirmación Alert

---

## � Stack Tecnológico

### **Core Technologies:**
- **React Native**: 0.81.5
- **Expo**: ~54.0.19
- **TypeScript**: Tipado estricto
- **React Navigation v6**: Navegación moderna

### **Navegación:**
- `@react-navigation/native`: Core de navegación
- `@react-navigation/native-stack`: Stack Navigator
- `@react-navigation/bottom-tabs`: Tab Navigator  
- `@react-navigation/drawer`: Drawer Navigator

### **UI Components:**
- `@expo/vector-icons`: Iconografía Ionicons
- `react-native-screens`: Optimización de pantallas
- `react-native-safe-area-context`: Áreas seguras

### **Gestión de Paquetes:**
- **pnpm**: Gestor eficiente de dependencias

---

## 📊 Sistema de Evaluación

### **Distribución de Puntos:**
- **Práctica 1 (Stack):** 33.33% - Navegación básica y parámetros
- **Práctica 2 (Tabs):** 33.33% - Tabs con navegación anidada  
- **Práctica 3 (Drawer):** 33.34% - Drawer personalizado y complejo

### **Criterios por Práctica:**
1. **Funcionalidad** (40%): Navegación operativa y características completas
2. **Diseño y UX** (30%): Interfaz profesional y navegación intuitiva
3. **Código** (30%): Estructura limpia, TypeScript correcto, organización

### **Escala de Calificación:**
- **90-100:** ⭐⭐⭐⭐⭐ Excelente - Implementación perfecta
- **80-89:** ⭐⭐⭐⭐ Muy Bueno - Pequeños detalles por mejorar
- **70-79:** ⭐⭐⭐ Bueno - Funcional con algunas mejoras necesarias
- **60-69:** ⭐⭐ Suficiente - Requiere correcciones importantes
- **0-59:** ⭐ Insuficiente - Necesita rehacer

---

## 🎨 Mejoras Opcionales

Cada práctica incluye **3 niveles de mejoras opcionales** para puntos extra:

- 🟢 **Nivel 1 (Fácil):** +5 pts - Cambios visuales, colores, textos
- 🟡 **Nivel 2 (Medio):** +10 pts - Nuevas funcionalidades, animaciones
- 🔴 **Nivel 3 (Avanzado):** +15 pts - Características complejas, APIs, Context

💡 **Tip:** Completa las mejoras para profundizar tu aprendizaje y obtener puntos extra.

---

## 📁 Estructura de Cada Práctica

Cada rama contiene una aplicación React Native completa con:

```
practica-[n]-[nombre]-app/
├── src/
│   ├── screens/           # Pantallas de la aplicación
│   ├── navigation/        # Configuración de navegadores
│   ├── components/        # Componentes reutilizables
│   ├── types/            # Tipos TypeScript
│   └── data/             # Datos mock para la aplicación
├── App.tsx               # Componente raíz
├── package.json          # Dependencias específicas
├── tsconfig.json         # Configuración TypeScript
├── babel.config.js       # Configuración Babel/Expo
├── screenshots/          # Capturas de pantalla
└── README.md            # Documentación específica de la práctica
```

---

## 🤝 Soporte y Recursos

### **Documentación Oficial:**
- [React Navigation v6](https://reactnavigation.org/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Native TypeScript](https://reactnative.dev/docs/typescript)

### **Iconografía:**
- [Expo Vector Icons Directory](https://icons.expo.fyi/)
- [Ionicons Official](https://ionic.io/ionicons)

### **Soporte en Clase:**
- Haz preguntas durante la implementación
- Consulta el troubleshooting de cada práctica
- Revisa los criterios de evaluación específicos

---

## 🏆 Reconocimientos

**¡Felicitaciones por completar las 3 prácticas de navegación!** 🎉

Has dominado:
- ✅ Stack Navigator para flujos lineales
- ✅ Tab Navigator con pestañas inferiores
- ✅ Drawer Navigator con contenido personalizado
- ✅ Navegación anidada y compleja
- ✅ TypeScript para navegación tipada
- ✅ Mejores prácticas de React Navigation v6

**¡Ahora estás listo para crear aplicaciones móviles con navegación profesional!** 🚀

---

**📝 Última actualización:** 23 de octubre de 2025  
**👨‍💻 Desarrollado por:** Miguel Lopez  
**🎓 Curso:** Semana 2 - Navegación React Native
# 📱 Práctica 1: Blog App - Stack Navigator

**Autor:** Miguel López  
**Fecha:** 23 de octubre de 2025  
**Duración:** 45 minutos  
**Dificultad:** ⭐⭐ Intermedio  

## 🎯 Descripción

Aplicación de blog desarrollada con React Native que implementa **Stack Navigator** para la navegación entre pantallas. Permite ver una lista de artículos, leer el detalle completo y crear nuevos posts.

## ✨ Funcionalidades

- 📋 **Lista de Posts**: Visualización de artículos con categorías y metadatos
- 📄 **Detalle de Post**: Lectura completa del artículo seleccionado
- ✍️ **Crear Post**: Formulario para agregar nuevos artículos
- 🧭 **Navegación Fluida**: Stack Navigator con headers personalizados
- 🔒 **TypeScript**: Tipado completo para mayor seguridad

## 🛠️ Tecnologías Utilizadas

- **React Native** 0.81.5
- **Expo** 54.0.19  
- **React Navigation v6** (Stack Navigator)
- **TypeScript** 5.9.3
- **pnpm** como gestor de paquetes

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js (v16 o superior)
- pnpm
- Expo CLI
- Expo Go (en el dispositivo móvil)

### Comandos para ejecutar
```bash
# 1. Cambiar a la rama de la práctica
git checkout practica-1-blog-app
cd practica-1-blog-app

# 2. Instalar dependencias
pnpm install

# 3. Iniciar el proyecto
pnpm start

# 4. Escanear QR con Expo Go o presionar:
# 'a' para Android
# 'w' para Web
```

## 🗂️ Estructura del Proyecto

```
practica-1-blog-app/
├── App.tsx                         # Punto de entrada con NavigationContainer
├── src/
│   ├── navigation/
│   │   ├── types.ts               # Tipos de navegación TypeScript
│   │   └── BlogNavigator.tsx      # Configuración del Stack Navigator
│   ├── screens/
│   │   ├── PostListScreen.tsx     # Pantalla principal - Lista de posts
│   │   ├── PostDetailScreen.tsx   # Pantalla de detalle del artículo
│   │   └── CreatePostScreen.tsx   # Pantalla de creación de posts
│   ├── data/
│   │   └── posts.ts              # Datos de ejemplo y utilidades
│   └── components/                # (Para futuras extensiones)
├── screenshots/                   # Capturas de pantalla
└── assets/                       # Recursos estáticos
```

## 🔄 Flujo de Navegación

```
PostListScreen (Lista) 
       ↓ (Toca post)
PostDetailScreen (Detalle)
       ↓ (Botón +)
CreatePostScreen (Modal)
       ↓ (Publicar)
PostListScreen (Vuelve a lista)
```

## 📱 Capturas de Pantalla

### Pantalla Principal - Lista de Posts
![Lista de Posts](screenshots/practica_1.1.jpg)
*Lista principal mostrando todos los artículos disponibles con categorías y metadatos*

### Detalle del Artículo
![Detalle del Post](screenshots/practica_1.2.jpg)
*Vista completa del artículo con contenido, autor y acciones*

### Crear Nuevo Post
![Crear Post](screenshots/practica_1.3.jpg)
*Formulario para crear nuevos artículos con validación*

## 🎨 Características del Diseño

- **Material Design**: Interfaces limpias y modernas
- **Tipografía**: Jerarquía clara de textos
- **Colores**: Paleta azul professional (#3b82f6)
- **Componentes**: Cards, botones y formularios consistentes
- **Responsive**: Adaptable a diferentes tamaños de pantalla

## 🧪 Funcionalidades Técnicas

### Stack Navigator
- Configuración de 3 pantallas principales
- Headers personalizados con estilo consistente
- Navegación modal para crear posts
- Botón "Atrás" automático en iOS/Android

### TypeScript
- Tipado completo de parámetros de navegación
- Interfaces definidas para datos de posts
- Props tipados en todos los componentes

### Gestión de Estado
- State local con useState para formularios
- Datos estáticos simulando API
- Validación de formularios con feedback

## 🚀 Comandos Útiles

```bash
# Iniciar desarrollo
pnpm start

# Limpiar caché
pnpm start --clear

# Verificar dependencias
pnpm list --depth=0

# Abrir en plataformas específicas
pnpm run android    # Android
pnpm run ios        # iOS (solo Mac)
pnpm run web        # Navegador web
```

## 📚 Conceptos Aprendidos

- ✅ Configuración de Stack Navigator
- ✅ Tipado de navegación con TypeScript
- ✅ Paso de parámetros entre pantallas
- ✅ Personalización de headers
- ✅ Presentación modal de pantallas
- ✅ Gestión de formularios en React Native
- ✅ Estructuración de proyectos escalables

## 🔗 Navegación Entre Prácticas

- **← Anterior**: Documentación teórica
- **→ Siguiente**: [Práctica 2: Dashboard App - Tab Navigator](../practica-2-dashboard-app/README.md)

## 📞 Contacto

**Miguel López**  
Fecha de desarrollo: 23 de octubre de 2025  

---

*Esta práctica forma parte del curso de Navegación en React Native - Semana 2*
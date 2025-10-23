# 💻 Comandos Útiles - Navegación React Native

Lista de comandos frecuentes para el desarrollo de las prácticas de navegación.

## 🚀 Comandos de Inicio

### Iniciar Proyecto:
```bash
# Desde cualquier práctica
pnpm start
# o
expo start

# Con caché limpio
pnpm start -- --clear
# o  
expo start --clear
```

### Abrir en Plataformas:
```bash
# Android (emulador o dispositivo)
pnpm run android
# o presionar 'a' en la terminal de Metro

# iOS (solo Mac)
pnpm run ios  
# o presionar 'i' en la terminal de Metro

# Web (navegador)
pnpm run web
# o presionar 'w' en la terminal de Metro
```

## 📦 Comandos de Instalación

### Dependencias Base (todas las prácticas):
```bash
pnpm install @react-navigation/native
pnpm install react-native-screens react-native-safe-area-context
```

### Stack Navigator (Práctica 1):
```bash
pnpm install @react-navigation/native-stack
```

### Tab Navigator (Práctica 2):
```bash
pnpm install @react-navigation/bottom-tabs
pnpm install @expo/vector-icons
```

### Drawer Navigator (Práctica 3):
```bash
pnpm install @react-navigation/drawer
pnpm install react-native-gesture-handler react-native-reanimated
```

### Opcional - Styling:
```bash
# NativeWind (Tailwind para React Native)
pnpm install nativewind
pnpm install --save-dev tailwindcss

# Styled Components
pnpm install styled-components
pnpm install --save-dev @types/styled-components-react-native
```

## 🔧 Comandos de Desarrollo

### TypeScript:
```bash
# Verificar tipos sin compilar
npx tsc --noEmit

# Generar declaraciones
npx tsc --declaration --emitDeclarationOnly

# Fix automático de tipos Expo
expo install --fix
```

### Limpieza de Caché:
```bash
# Limpiar caché de Metro
npx expo start --clear

# Limpiar caché completo
rm -rf node_modules
pnpm install
npx expo start --clear

# Solo en emergencias - reset completo
npx expo install --fix
```

### Debugging:
```bash
# Mostrar logs detallados
npx expo start --dev-client

# Tunnel (para dispositivos remotos)
npx expo start --tunnel

# Modo LAN
npx expo start --lan
```

## 📝 Comandos de Estructura

### Crear Directorios:
```bash
# Estructura típica de una práctica
mkdir src
mkdir src/screens
mkdir src/components  
mkdir src/types
mkdir src/navigation
mkdir assets
```

### Crear Archivos Base:
```bash
# Tipos de navegación
touch src/types/navigation.ts

# Stack Navigator
touch src/navigation/AppNavigator.tsx

# Pantallas principales
touch src/screens/HomeScreen.tsx
touch src/screens/DetailScreen.tsx
```

## 🧪 Comandos de Testing

### Jest (si configurado):
```bash
# Ejecutar tests
npm test

# Watch mode
npm test -- --watch

# Cobertura
npm test -- --coverage
```

### TypeScript Testing:
```bash
# Verificar todos los archivos
npx tsc --noEmit --project .

# Verificar archivo específico
npx tsc --noEmit src/screens/HomeScreen.tsx
```

## 📱 Comandos de Build

### Development Build:
```bash
# Build para development
npx expo export

# Prebuild (para development builds)
npx expo prebuild
```

### Production Build:
```bash
# Build para producción
npx expo build:android
npx expo build:ios

# EAS Build (recomendado)
npx eas build --platform android
npx eas build --platform ios
```

## 🔍 Comandos de Debugging

### React Native Debugger:
```bash
# Instalar React Native Debugger
npm install -g react-native-debugger

# Abrir debugger (puerto por defecto)
react-native-debugger
```

### Flipper (si configurado):
```bash
# Abrir Flipper
flipper
```

### Metro Bundle:
```bash
# Información del bundle
npx expo export --dump-sourcemap

# Analizar bundle
npx expo export --dev false --minify false
```

## 📊 Comandos de Análisis

### Bundle Size:
```bash
# Analizar tamaño del bundle
npx expo export --dump-sourcemap
npx react-native-bundle-visualizer

# Webpack Bundle Analyzer (si aplica)
npm install -g webpack-bundle-analyzer
```

### Dependencies:
```bash
# Listar dependencias instaladas
npm ls

# Verificar vulnerabilidades
npm audit

# Fix vulnerabilidades
npm audit fix
```

## 🎯 Comandos por Práctica

### Práctica 1 - Blog App:
```bash
cd practica-1-blog-app
npm install
npm start
# Presionar 'a' para Android o 'w' para web
```

### Práctica 2 - Dashboard App:
```bash
cd practica-2-dashboard-app  
npm install
npm start
# Verificar que los íconos de tabs se muestren correctamente
```

### Práctica 3 - Settings App:
```bash
cd practica-3-settings-app
npm install
npm start
# Verificar que el drawer se abra con swipe o botón
```

## 🚨 Comandos de Emergencia

### Reset Completo:
```bash
# Eliminar todo y empezar de nuevo
rm -rf node_modules
rm package-lock.json
npm install
npx expo install --fix
npx expo start --clear
```

### Reinstalar Expo CLI:
```bash
npm uninstall -g @expo/cli
npm install -g @expo/cli@latest
```

### Fix React Navigation:
```bash
# Reinstalar navegación
npm uninstall @react-navigation/native @react-navigation/native-stack
npm install @react-navigation/native @react-navigation/native-stack
```

## 📚 Comandos de Documentación

### Generar Documentación:
```bash
# TypeDoc (si configurado)
npx typedoc

# JSDoc
npm install -g jsdoc
jsdoc src/**/*.tsx
```

### Ver Documentación React Navigation:
```bash
# Abrir docs en navegador
open https://reactnavigation.org/docs/getting-started
```

## ⚡ Atajos de Teclado (Metro)

Cuando Metro esté corriendo:
- **a** - Abrir en Android
- **i** - Abrir en iOS  
- **w** - Abrir en Web
- **r** - Reload app
- **d** - Abrir Dev Menu
- **j** - Abrir debugger
- **c** - Clear cache y reload

---

**¡Guarda este archivo como referencia rápida! 📌**
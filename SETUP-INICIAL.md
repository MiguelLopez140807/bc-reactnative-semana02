# 🔧 Setup Inicial - Navegación React Native

Guía paso a paso para configurar el entorno de desarrollo para las prácticas de navegación.

## 📋 Prerrequisitos

### Software Necesario:
- ✅ **Node.js** (v16 o superior)
- ✅ **pnpm** (gestor de paquetes)
- ✅ **Expo CLI** (`pnpm install -g @expo/cli`)
- ✅ **Android Studio** (para emulador) o **Expo Go** (para dispositivo físico)
- ✅ **VS Code** (recomendado)
- ✅ **Git** (para manejo de ramas)

### Extensiones VS Code Recomendadas:
- ES7+ React/Redux/React-Native snippets
- TypeScript Importer
- Prettier - Code formatter
- Expo Tools

## 🚀 Configuración por Práctica

### Método 1: Configuración Individual
Cada práctica tiene su propio proyecto Expo independiente.

```bash
# Práctica 1 - Blog App
git checkout practica-1-blog-app
cd "SEMANA 2 - NAVEGACION REACT NATIVE/practica-1-blog-app"
npx create-expo-app . --template blank-typescript
pnpm install @react-navigation/native @react-navigation/native-stack
pnpm install react-native-screens react-native-safe-area-context

# Práctica 2 - Dashboard App  
git checkout practica-2-dashboard-app
cd "../practica-2-dashboard-app"
npx create-expo-app . --template blank-typescript
pnpm install @react-navigation/native @react-navigation/bottom-tabs
pnpm install react-native-screens react-native-safe-area-context @expo/vector-icons

# Práctica 3 - Settings App
git checkout practica-3-settings-app
cd "../practica-3-settings-app"  
npx create-expo-app . --template blank-typescript
pnpm install @react-navigation/native @react-navigation/drawer
pnpm install react-native-screens react-native-safe-area-context
pnpm install react-native-gesture-handler react-native-reanimated
```

### Método 2: Script Automatizado
Crea todas las prácticas de una vez:

```bash
# Crear script setup.bat (Windows)
echo "Configurando práctica 1..."
cd "practica-1-blog-app"
call npx create-expo-app . --template blank-typescript
call npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context

echo "Configurando práctica 2..."
cd "../practica-2-dashboard-app"
call npx create-expo-app . --template blank-typescript  
call npm install @react-navigation/native @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context @expo/vector-icons

echo "Configurando práctica 3..."
cd "../practica-3-settings-app"
call npx create-expo-app . --template blank-typescript
call npm install @react-navigation/native @react-navigation/drawer react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

echo "¡Setup completo!"
```

## 📦 Dependencias por Práctica

### Práctica 1 - Blog App (Stack Navigator):
```json
{
  "dependencies": {
    "@react-navigation/native": "^6.x",
    "@react-navigation/native-stack": "^6.x", 
    "react-native-screens": "^3.x",
    "react-native-safe-area-context": "^4.x",
    "expo": "~49.x",
    "react": "18.x",
    "react-native": "0.72.x"
  }
}
```

### Práctica 2 - Dashboard App (Tab Navigator):
```json
{
  "dependencies": {
    "@react-navigation/native": "^6.x",
    "@react-navigation/bottom-tabs": "^6.x",
    "@expo/vector-icons": "^13.x",
    "react-native-screens": "^3.x", 
    "react-native-safe-area-context": "^4.x",
    "expo": "~49.x",
    "react": "18.x",
    "react-native": "0.72.x"
  }
}
```

### Práctica 3 - Settings App (Drawer Navigator):
```json
{
  "dependencies": {
    "@react-navigation/native": "^6.x",
    "@react-navigation/drawer": "^6.x",
    "react-native-gesture-handler": "^2.x",
    "react-native-reanimated": "^3.x",
    "react-native-screens": "^3.x",
    "react-native-safe-area-context": "^4.x", 
    "expo": "~49.x",
    "react": "18.x",
    "react-native": "0.72.x"
  }
}
```

## ⚙️ Configuración de TypeScript

### tsconfig.json (para cada práctica):
```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/screens/*": ["src/screens/*"],
      "@/types/*": ["src/types/*"]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts"
  ]
}
```

## 🔧 Configuración de Babel

### babel.config.js (importante para Drawer Navigator):
```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',  // Importante para Drawer
    ],
  };
};
```

## 📱 Configuración del Emulador

### Android:
1. Abrir Android Studio
2. AVD Manager → Create Virtual Device  
3. Elegir Pixel 5 o similar
4. API Level 29+ (Android 10+)
5. Iniciar emulador

### iOS (solo en Mac):
1. Abrir Xcode
2. Window → Devices and Simulators
3. Crear simulador iPhone 13/14
4. iOS 15+ recomendado

## ✅ Verificación del Setup

### Comandos de Verificación:
```bash
# Verificar Node.js
node --version  # Debe ser v16+

# Verificar Expo CLI
expo --version

# Verificar proyecto
cd practica-1-blog-app
npm start
# Debe abrir Expo Dev Tools sin errores
```

### Checklist:
- [ ] Node.js v16+ instalado
- [ ] Expo CLI instalado globalmente
- [ ] Emulador Android funcionando
- [ ] VS Code con extensiones instaladas
- [ ] Primera práctica arranca sin errores
- [ ] Metro Bundler carga correctamente

## 🐛 Problemas Comunes

### Error: "Metro bundle failed"
```bash
# Limpiar caché
expo start --clear
```

### Error: "react-native-reanimated"  
```bash
# Verificar babel.config.js tiene el plugin
# Reinstalar dependencia
npm uninstall react-native-reanimated
npm install react-native-reanimated
```

### Error: TypeScript
```bash
# Regenerar tipos
expo install --fix
npx tsc --noEmit
```

## 🎯 Siguiente Paso

Una vez completado el setup inicial:
1. ✅ Ir a `practica-1-blog-app/README.md`
2. ✅ Seguir la guía de la Práctica 1
3. ✅ Implementar Stack Navigator paso a paso

---

**¡Setup completo! Ahora puedes empezar con las prácticas 🚀**
# Monitoreo de Sensores UTEQ — Campus La María

Aplicación React + Vite conectada a Firebase Realtime Database para visualizar en tiempo real
la temperatura, humedad y presión atmosférica de los sensores del campus.

## Requisitos

- Node.js 18 o superior
- Una base de datos Firebase Realtime Database con los datos importados (ver `firebase-rtdb-seed.json`)

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Configuración de Firebase

Las credenciales ya están cargadas en el archivo `.env` (no se sube a git). Si necesitas
regenerarlas en otro entorno, copia `.env.example` a `.env` y completa tus propios valores
desde la consola de Firebase.

## Importar los datos

1. Ve a **Firebase Console → Realtime Database**.
2. Abre el menú de opciones del nodo raíz y selecciona **Importar JSON**.
3. Selecciona el archivo `firebase-rtdb-seed.json` incluido en este proyecto.

> Importar en el nodo raíz reemplaza los datos existentes allí.

## Reglas recomendadas (solo lectura)

```json
{
  "rules": {
    ".read": true,
    ".write": false,
    "valoresHistoricos": {
      "$sensorId": {
        ".indexOn": ["timestamp"]
      }
    }
  }
}
```

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | Redirige al Dashboard del sensor `sensor_1207856160` |
| `/sensor/:sensorId` | Dashboard dinámico del sensor indicado |
| `/ubicaciones` | Lista de todos los sensores disponibles |

## Estructura

```
src/
├── components/
│   ├── Navbar.jsx
│   └── SensorCard.jsx
├── hooks/
│   └── useSensorData.js
├── pages/
│   ├── Dashboard.jsx
│   └── Ubicaciones.jsx
├── services/
│   └── firebase.js
├── App.jsx
├── main.jsx
└── styles.css
```

## Build de producción

```bash
npm run build
```

El resultado queda en `dist/`, listo para desplegar (por ejemplo en Firebase Hosting o GitHub Pages).

# Plan de Implementación - Demo Básico para Cumpleaños de Perrito

## Visión General
Este documento detalla el plan para implementar un demo básico de invitación para la celebración del cumpleaños de un perro. Esta implementación servirá como base para futuras expansiones a otros tipos de mascotas y niveles de paquetes.

## Estructura de Directorios
```
/app
  /demo
    /mascota
      /perro
        /basic
          page.tsx         # Página principal del demo
          layout.tsx       # Layout específico (opcional)
/components
  /demo
    /mascota
      /perro
        /basic
          DogHero.tsx      # Sección hero con foto del perro y cuenta regresiva
          DogInfo.tsx      # Información del evento y del perro
          DogActivities.tsx # Cronograma de actividades
          DogRSVP.tsx       # Sección para confirmar asistencia
          /data
            basic-demo-data.ts  # Datos del demo
          index.ts         # Archivo de exportación
/public
  /images
    /pets
      /dogs
        # Imágenes existentes:
        # dog_1.jpeg, dog_2.jpeg, dog_3.jpeg, dog_4.jpeg
      /icons
        # A crear:
        bone-icon.svg    # Icono de hueso
        paw-icon.svg     # Icono de huella
```

## Paso 1: Preparación de Recursos
- [ ] Crear la estructura de directorios necesaria para componentes y páginas
- [ ] Utilizar las imágenes existentes en `/public/images/pets/dogs/`
- [ ] Diseñar iconos de hueso y huella para decoración (ubicarlos en `/public/images/pets/icons/`)
- [ ] Establecer paleta de colores (azules, verdes, marrones suaves)

## Paso 2: Crear el Modelo de Datos
Crear el archivo `basic-demo-data.ts` con la siguiente estructura:

```typescript
export const dogBirthdayDemoData = {
  dog: {
    name: "Max",
    breed: "Golden Retriever",
    age: {
      human: 7,
      dog: 49
    },
    photo: "/images/pets/dogs/dog_1.jpeg",
    gallery: [
      "/images/pets/dogs/dog_1.jpeg",
      "/images/pets/dogs/dog_2.jpeg",
      "/images/pets/dogs/dog_3.jpeg",
      "/images/pets/dogs/dog_4.jpeg"
    ]
  },
  event: {
    title: "¡Woofday Party de Max!",
    date: "2025-09-15T16:00:00",
    location: {
      name: "Parque Canino Las Américas",
      address: "Av. Principal #123, Col. Centro, CDMX",
      coordinates: { lat: 19.4326, lng: -99.1332 }
    },
    description: "¡Ven a celebrar los 7 años de nuestro peludo favorito! Habrá juegos, premios y diversión para perros y humanos."
  },
  features: [
    "Galería de fotos de Max",
    "Cuenta regresiva al gran día",
    "Confirma tu asistencia",
    "Mapa del lugar",
    "Itinerario de actividades"
  ],
  activities: [
    { time: "16:00", activity: "Llegada de invitados" },
    { time: "16:30", activity: "Juegos para perros" },
    { time: "17:15", activity: "Pastel para Max" },
    { time: "17:30", activity: "Pastel para humanos" },
    { time: "18:00", activity: "Regalos y juguetes" },
    { time: "19:00", activity: "Despedida" }
  ],
  gifts: [
    "Juguetes mordedores",
    "Galletas para perros",
    "Pelota para jugar",
    "Donación a refugio animal"
  ],
  petFriendly: true,
  otherPetsWelcome: true,
  dressCode: "Casual y cómodo para humanos y perros",
  demo: {
    package: "basic",
    price: 299,
    features: [
      "Cuenta regresiva personalizada",
      "Información del evento con mapas",
      "Confirmación de asistencia",
      "Cronograma de actividades",
      "Adaptable a cualquier raza de perro"
    ]
  }
};
```

## Paso 3: Desarrollar Componentes Base

### DogHero Component
El componente de héroe mostrará:
- [ ] Imagen de fondo con temática canina
- [ ] Nombre del perro y título de la celebración
- [ ] Cuenta regresiva al evento
- [ ] Elementos decorativos de huellas o huesos

### DogInfo Component
- [ ] Información del perro (nombre, edad, raza)
- [ ] Detalles del evento (fecha, hora, lugar)
- [ ] Mapa integrado con la ubicación
- [ ] Descripción del evento
- [ ] Código de vestimenta
- [ ] Indicador si es amigable para mascotas

### DogActivities Component
- [ ] Cronograma visual de actividades
- [ ] Iconos relevantes para cada actividad
- [ ] Diseño de línea de tiempo con huellas de perro como conectores

### DogRSVP Component
- [ ] Formulario para confirmar asistencia
- [ ] Opción para indicar si traerá mascota
- [ ] Mensaje de confirmación personalizado
- [ ] Animación con temática de perros

## Paso 4: Crear Componente Exportador
Crear un archivo `index.ts` en `/components/demo/mascota/perro/basic` que exporte todos los componentes:

```typescript
export * from './DogHero';
export * from './DogInfo';
export * from './DogActivities';
export * from './DogRSVP';
```

## Paso 5: Desarrollar la Página Principal
Crear el archivo `page.tsx` en `/app/demo/mascota/perro/basic/`:

- [ ] Importar todos los componentes
- [ ] Estructurar la página con los componentes
- [ ] Agregar modal de contacto
- [ ] Implementar sección CTA para contratar el paquete
- [ ] Agregar navegación de regreso al catálogo

## Paso 6: Integración con el Catálogo

### Actualizar Datos del Catálogo
Añadir el nuevo demo al catálogo de productos:

- [ ] Agregar nueva entrada para el demo de perrito en `catalog-data.ts`
- [ ] Crear nueva categoría "Mascotas" si no existe
- [ ] Agregar imagen destacada para el catálogo
- [ ] Enlazar al demo `/demo/mascota/perro/basic`

## Paso 7: Pruebas y Optimización

- [ ] Verificar responsividad en dispositivos móviles
- [ ] Comprobar que todos los enlaces funcionen correctamente
- [ ] Validar accesibilidad básica
- [ ] Optimizar imágenes para carga rápida
- [ ] Probar la navegación entre el demo y el catálogo

## Paso 8: Preparación para Lanzamiento

- [ ] Revisar textos y ortografía
- [ ] Verificar consistencia visual con otros demos
- [ ] Asegurar que los CTA de contacto/compra funcionan
- [ ] Documentar características especiales para el equipo de ventas

## Consideraciones de Diseño

### Paleta de Colores Sugerida
- **Principal**: #4F6D7A (Azul petróleo)
- **Secundario**: #C0D6DF (Azul claro)
- **Acentos**: #DD6E42 (Naranja/marrón)
- **Fondos**: #EAEAEA (Gris claro)
- **Textos**: #222222 (Casi negro)

### Tipografía
- Títulos: Font-family principal con peso bold
- Cuerpo: Font-family principal con diferentes pesos
- Elementos decorativos: Considerar una fuente más juguetona para ciertos elementos

### Elementos Visuales Distintivos
- Huellas de perro como elementos decorativos
- Siluetas de diferentes razas de perros
- Iconos de huesos, comederos, juguetes
- Marcos de fotos con forma de hueso

## Próximos Pasos (Después de Esta Implementación)

- Crear demos para nivel premium y VIP
- Desarrollar equivalentes para cumpleaños de gatos
- Considerar otros tipos de mascotas populares (conejos, hámsters)
- Crear versiones para "gotchaversary" (aniversario de adopción)

## Evaluación de Éxito
- Tiempo de permanencia en la página del demo
- Tasa de clics en botones CTA
- Número de solicitudes relacionadas con invitaciones para mascotas
- Feedback de clientes sobre este tipo específico de invitación

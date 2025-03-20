# Zara Products Layouts

## Tabla de Contenidos

- [Zara Products Layouts](#zara-products-layouts)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Descripción](#descripción)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Tecnologías Usadas](#tecnologías-usadas)
    - [React](#react)
      - [Beneficios de React](#beneficios-de-react)
    - [TypeScript](#typescript)
      - [Beneficios de TypeScript](#beneficios-de-typescript)
    - [Vite](#vite)
      - [Beneficios de Vite](#beneficios-de-vite)
    - [ESLint](#eslint)
      - [Beneficios de ESLint](#beneficios-de-eslint)
    - [Prettier](#prettier)
      - [Beneficios de Prettier](#beneficios-de-prettier)
    - [Faker](#faker)
      - [Beneficios de Faker](#beneficios-de-faker)
    - [Vitest](#vitest)
      - [Beneficios de Vitest](#beneficios-de-vitest)
    - [React Testing Library](#react-testing-library)
      - [Beneficios de React Testing Library](#beneficios-de-react-testing-library)
  - [Instalación](#instalación)
  - [Contribuciones](#contribuciones)
  - [Licencia](#licencia)
  - [Futuros Pasos](#futuros-pasos)

## Descripción

Zara Products Layouts es una aplicación web que permite a los usuarios gestionar y organizar diseños de productos de manera intuitiva. Los usuarios pueden arrastrar y soltar tarjetas de productos para crear diseños personalizados, facilitando la visualización y administración de las exhibiciones de productos.

## Estructura del Proyecto

```plain-text
zara-products-layouts
├── public/                     # Recursos públicos
├── src/                        # Código fuente
│   ├── components/             # Componentes reutilizables
│   │   ├── product-card/       # Componente de tarjeta de producto
│   │   │   ├── hooks/          # Hooks para la tarjeta de producto
│   │   │   └── product-card.tsx
│   ├── pages/                  # Páginas de la aplicación
│   │   ├── editor/             # Página del editor
│   │   │   ├── components/     # Componentes específicos de la página del editor
│   │   │   │   └── file-management-form/
│   │   │   │       └── file-management-form.tsx
│   │   │   ├── hooks/          # Hooks para la página del editor
│   │   │   │   └── use-editor-page.ts
│   │   │   └── editor.tsx
│   ├── styles/                 # Estilos globales
│   ├── models/                 # Modelos TypeScript
│   ├── store/                  # Gestión de estado
│   └── utils/                  # Funciones utilitarias
├── .eslintrc.js                # Configuración de ESLint
├── .prettierrc                 # Configuración de Prettier
├── package.json                # Dependencias y scripts del proyecto
├── tsconfig.json               # Configuración de TypeScript
└── vite.config.ts              # Configuración de Vite
```

## Tecnologías Usadas

### React

Biblioteca para construir interfaces de usuario.

#### Beneficios de React

- **Componentización**: Permite dividir la interfaz en componentes reutilizables, facilitando el mantenimiento y escalabilidad del código.
- **Virtual DOM**: Mejora el rendimiento al actualizar solo las partes necesarias de la interfaz.
- **Ecosistema Amplio**: Ofrece una gran cantidad de bibliotecas y herramientas para extender sus capacidades.

### TypeScript

Lenguaje de programación que extiende JavaScript con tipos estáticos.

#### Beneficios de TypeScript

- **Detección de Errores**: Identifica errores en tiempo de desarrollo, reduciendo problemas en producción.
- **Autocompletado Mejorado**: Proporciona sugerencias más precisas en los editores de código.
- **Refactorización Segura**: Facilita la modificación del código sin introducir errores.

### Vite

Herramienta de desarrollo rápida y ligera para proyectos frontend.

#### Beneficios de Vite

- **Inicio Rápido**: Carga instantánea del proyecto gracias a su servidor de desarrollo optimizado.
- **Hot Module Replacement (HMR)**: Permite actualizaciones en tiempo real sin recargar la página.
- **Compilación Optimizada**: Genera builds más rápidas y eficientes.

### ESLint

Herramienta para identificar y reportar patrones en el código JavaScript.

#### Beneficios de ESLint

- **Código Consistente**: Ayuda a mantener un estilo uniforme en el equipo de desarrollo.
- **Prevención de Errores**: Detecta malas prácticas y posibles errores en el código.
- **Configuración Personalizable**: Permite adaptar las reglas a las necesidades del proyecto.

### Prettier

Formateador de código para mantener un estilo consistente.

#### Beneficios de Prettier

- **Formato Automático**: Asegura que todo el código siga un formato estándar.
- **Ahorro de Tiempo**: Reduce el tiempo dedicado a revisar y corregir estilos de código.
- **Integración con Editores**: Se integra fácilmente con herramientas como VS Code para formatear automáticamente al guardar.

### Faker

Biblioteca para generar datos falsos para pruebas y desarrollo.

#### Beneficios de Faker

- **Generación de Datos Realistas**: Permite crear datos de prueba realistas como nombres, direcciones y fechas.
- **Flexibilidad**: Ofrece una amplia variedad de tipos de datos para diferentes escenarios de prueba.
- **Automatización de Pruebas**: Facilita la creación de datos dinámicos para pruebas automatizadas.

### Vitest

Framework de pruebas unitarias rápido y ligero para proyectos frontend.

#### Beneficios de Vitest

- **Integración con Vite**: Se integra perfectamente con Vite, aprovechando su velocidad y configuración.
- **Pruebas Rápidas**: Ofrece tiempos de ejecución rápidos gracias a su enfoque optimizado.
- **Soporte para Mocking**: Permite simular dependencias para pruebas más controladas.

### React Testing Library

Conjunto de utilidades para probar componentes de React.

#### Beneficios de React Testing Library

- **Enfoque en el Usuario**: Facilita pruebas basadas en cómo los usuarios interactúan con la aplicación.
- **Selección Accesible**: Permite seleccionar elementos por texto, rol o etiquetas accesibles, fomentando buenas prácticas de accesibilidad.
- **Simplicidad**: Proporciona una API simple y directa para escribir pruebas claras y legibles.

## Instalación

Sigue estos pasos para instalar y ejecutar la aplicación:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/gondolier22/zara-products-layouts.git
   cd zara-products-layouts
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta la aplicación:

   ```bash
   npm run dev
   ```

La aplicación estará disponible en `http://localhost:5173`.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Futuros Pasos

- Agregar un botón flotante abajo a la derecha que permita desplazarse rápidamente al final de la página cuando el scroll no esté abajo.
- Mostrar un modal de advertencia al intentar eliminar el último producto de una fila, indicando que también se eliminará la fila.
- Implementar un control para que, al hacer drag, el scroll avance automáticamente antes de llegar al final de la página, mejorando la experiencia de usuario.

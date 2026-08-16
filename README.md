# Tech Store OS

Sistema de marca y producción de contenidos para Tech Store B&B.

## Versión actual

**v1.3.0 — Production Templates** incorpora una herramienta web reutilizable para editar, previsualizar y exportar piezas de Instagram y WhatsApp.

El proyecto se encuentra en [`production-templates/`](production-templates/README.md) e incluye:

- Story Master, producto y promoción.
- Carrusel educativo y portada de Reel.
- WhatsApp Status.
- Precio y financiación.
- Nuevo ingreso y unboxing.
- Canje de equipos.
- Contenido del local y el equipo.
- Exportación PNG en formatos 1080×1920 y 1080×1350.
- Controles editoriales para no inventar precios, stock, financiación, urgencia ni testimonios.

## Foundation v1.0

La raíz conserva el Brand Book interactivo original y su sistema visual inicial.

### Incluye
- Brand Book interactivo responsive.
- Navegación lateral y progreso de lectura.
- Hero, ADN, propósito, misión, visión, valores, personalidad, posicionamiento y filosofía.
- Sistema visual inicial con variables CSS.
- Animaciones de entrada.
- Estructura preparada para futuras versiones.

### Ejecutar Foundation
Abrir `index.html` directamente en un navegador moderno.

### Ejecutar Production Templates

```bash
cd production-templates
npm install
npm run dev
```

Requiere Node.js 22.13 o posterior.

> La identidad visual de producción utiliza como valores de trabajo Tech Blue `#3C7AC3`, Tech Dark `#252527` y White `#FFFFFF`.

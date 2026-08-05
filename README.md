# Dossier Reforma Integral

Sitio estático responsive que adapta a web el dossier de reforma integral de agosto de 2026. Conserva el contenido del documento y utiliza las diez imágenes originales entregadas para las comparativas de cinco estancias.

## Desarrollo local

No requiere instalación ni proceso de build. Sirve la carpeta raíz con cualquier servidor estático, por ejemplo:

```bash
python -m http.server 8000
```

Después abre `http://localhost:8000`.

## Publicación

El repositorio está preparado para publicarse desde la raíz mediante GitHub Pages. En **Settings → Pages**, selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`.

## Estructura

- `index.html`: contenido y estructura semántica.
- `styles.css`: diseño responsive, foco, alto contraste y reducción de movimiento.
- `script.js`: navegación móvil progresiva.
- `assets/`: imágenes originales antes/después.


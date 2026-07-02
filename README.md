# Cashflow TAO

Informe de una sola página (scroll continuo) que presenta el flujo de caja del
edificio **TAO** (De Mur, La Plata) para inversores. Muestra el presupuesto de
construcción actualizado a junio 2026 (índice CAC), desglosado en 5 etapas con
sus montos, porcentajes y desembolso mensual, más el cronograma de obra y un
resumen global.

## Stack

Sitio estático — HTML + CSS + un pequeño script JS, sin dependencias ni build.
Pensado para GitHub Pages.

```
index.html          Documento completo (todas las secciones)
css/styles.css      Tokens de diseño + estilos de componentes (temas night/day)
js/theme.js         Toggle de tema día/noche con preferencia persistida
assets/
  location-map.jpg      Plano de ubicación (Etapa 0 · Terreno)
  editorial-terraza.jpg Foto de terraza (cierre)
  favicon.svg
.nojekyll           Evita el procesamiento Jekyll en GitHub Pages
```

## Desarrollo

No requiere compilación. Para previsualizar localmente:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Temas

El documento tiene dos temas construidos con las mismas variables CSS:

- **night** (default, editorial oscuro)
- **day** (documento claro)

El botón flotante inferior derecho alterna entre ambos y guarda la elección en
`localStorage`. En la primera visita se respeta `prefers-color-scheme`.

## Deploy (GitHub Pages)

1. Push a la rama `main`.
2. En *Settings → Pages*, elegir **Deploy from a branch** → `main` / `root`.

## Datos

Todos los montos están en pesos argentinos (ARS), presupuesto a índice CAC
junio 2026. Total del edificio con terreno: **$ 7.578.785.699**. El contenido
(textos y montos) vive directamente en `index.html`.

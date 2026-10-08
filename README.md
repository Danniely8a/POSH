# POSH — Proyecto web editable

Incluye inicio, hero con ambiente decorado y accesos por categoría, catálogo de 256 referencias, búsqueda por código/nombre/medida, categorías, paginación, fichas y consultas por WhatsApp. Colores: lila, gris claro, blanco y negro.

**Sitio publicado:** https://posh-seven-cyan.vercel.app

## Ver la página
Abre `dist/index.html` en tu navegador. Funciona sin instalar dependencias y sin conexión, excepto los enlaces a Instagram/WhatsApp.

## Editar y generar
Instala Node.js. No se necesitan paquetes externos.

1. Editar los archivos de `src/`.
2. Ejecuta `npm run build` desde la carpeta del proyecto.
3. Abre `dist/index.html` o ejecuta `npm start` y visita http://localhost:3000.

## GitHub y Vercel (publicación automática)
- Repositorio: https://github.com/Danniely8a/POSH (rama `main`).
- Vercel está conectado al repositorio: cada `push` a `main` ejecuta `npm run build` y publica `dist/` automáticamente.
- Producción: https://posh-seven-cyan.vercel.app (proyecto `posh` en Vercel).

### Flujo para modificaciones futuras
1. Editar los archivos de `src/`.
2. Ejecutar `npm run build` y revisar el resultado en `dist/index.html` o en `npm start`.
3. `git add -A`, `git commit -m "descripcion del cambio"`, `git push origin main`.
4. Vercel despliega solo el cambio en unos segundos.

### Desplegar a mano desde la terminal (opcional)
Si prefieres forzar un deploy sin esperar al push: `vercel --prod` (requiere `vercel login` la primera vez).

## WhatsApp (pendiente de número)
En `src/config.js`, completa `whatsappNumber` con el código de país y el número, solo dígitos, sin `+`, espacios ni guiones. Modifica `whatsappMessage` si lo deseas y ejecuta `npm run build`.
El botón abre WhatsApp con un mensaje; las fichas incluyen el código del producto. Con el número vacío, muestra una alternativa de contacto por Instagram sin enviar mensajes a un destinatario desconocido.

## Dónde editar
- `src/index.html`: inicio, hero, secciones, textos y navegación.
- `src/style.css`: paleta, tipografías, tamaños y diseño responsive.
- `src/app.js`: búsqueda, categorías, fichas, hero y WhatsApp.
- `src/config.js`: contacto por WhatsApp.
- `src/products.json`: código, nombre, categoría, descripción, imagen y página del PDF de cada producto.
- `src/assets/`: logo y 253 fotografías optimizadas en WebP.
- `build.mjs`: genera una página autónoma con imágenes, catálogo, estilos y scripts integrados para evitar rutas rotas.
- `server.mjs`: servidor local opcional.
- `references/`: catálogo PDF y logo originales.

## Productos y límites
Los precios no están publicados: falta confirmar moneda y vigencia. Tres referencias del PDF no incluyen fotografía y se muestran como “Imagen no disponible”. Para agregar una foto, guarda el archivo en `src/assets/`, asigna su ruta a `image` en `src/products.json` y vuelve a generar la página.
Algunos productos sin título explícito utilizan un nombre general y su código. Revisa el contenido comercial antes de publicar al público.
Este proyecto es un catálogo estático: no incluye administración, inventario sincronizado, pagos ni servidor de ventas. WhatsApp prepara una consulta para que el visitante la envíe.

## Publicar por tu cuenta
El canal oficial es GitHub + Vercel (ver arriba). Si quieres otro alojamiento, sube `dist/index.html` a cualquier servidor de páginas estáticas; también puedes copiarlo a otro proyecto.

## Hero de ambiente
`src/assets/posh-ambiente-hero.png` es una escena inspiracional generada a partir de imágenes de productos del catálogo; no es una fotografía de una instalación real. El catálogo conserva las fotografías originales de los productos.

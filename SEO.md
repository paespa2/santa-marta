# 📱 Optimización SEO - Santa Marta Tours

## Meta Tags Recomendados para Agregar

Agrega estos meta tags dentro de `<head>` en index.html:

```html
<!-- Meta descripción (importante para Google) -->
<meta name="description" content="Descubre Santa Marta, el destino turístico único del Caribe colombiano. Playas vírgenes, Parque Tayrona, Ciudad Perdida y más.">

<!-- Palabras clave -->
<meta name="keywords" content="santa marta, turismo colombia, caribe, tayrona, ciudad perdida, viajes">

<!-- Author -->
<meta name="author" content="Santa Marta Tours">

<!-- Social Media -->
<meta property="og:title" content="Santa Marta - Destino Turístico Único">
<meta property="og:description" content="Vive la magia del Caribe colombiano con experiencias inolvidables">
<meta property="og:image" content="url-a-imagen-representativa.jpg">
<meta property="og:type" content="website">
<meta property="og:url" content="https://tusitio.com">

<!-- Twitter -->
<meta name="twitter:title" content="Santa Marta Tours">
<meta name="twitter:description" content="Destino turístico del Caribe colombiano">
<meta name="twitter:image" content="url-a-imagen.jpg">

<!-- Viewport (ya incluido) -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Charset (ya incluido) -->
<meta charset="UTF-8">

<!-- Color Theme -->
<meta name="theme-color" content="#FF6B35">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

## Estructura HTML Semántica

### Jerarquía Correcta

```html
<header> <!-- Encabezado principal -->
    <nav>Navegación</nav>
</header>

<main> <!-- Contenido principal -->
    <section id="inicio">
        <h1>Título principal</h1>
        <article>Contenido</article>
    </section>
    
    <section id="destinos">
        <h2>Destinos</h2>
        <article>Información destino</article>
    </section>
</main>

<aside> <!-- Opcional: barra lateral -->
    Contenido complementario
</aside>

<footer>
    Información final
</footer>
```

## Palabras Clave Objetivo

### Palabras Clave Principales
- Santa Marta turismo
- Parque Tayrona
- Ciudad Perdida
- Playas Caribe
- Destino Colombia

### Palabras Clave Secundarias
- Tours Santa Marta
- Viajes Caribe Colombia
- Experiencias turísticas
- Senderismo Tayrona
- Buceo Santa Marta

### Long-tail Keywords
- "Tour 5 días Ciudad Perdida"
- "Playa virgen Santa Marta"
- "Sierra Nevada trekking"
- "Reserva Tayrona información"

## Estrategia de Contenido

### Títulos (H1, H2, H3)

```html
<!-- Una sola H1 por página -->
<h1>Santa Marta - Destino Turístico Único del Caribe</h1>

<!-- H2 para secciones principales -->
<h2>Parque Nacional Tayrona</h2>
<h2>Actividades Emocionantes</h2>

<!-- H3 para subsecciones -->
<h3>Información de Entrada</h3>
<h3>Horarios y Servicios</h3>
```

### Alt Text para Imágenes

```html
<!-- ❌ Malo -->
<img src="playa.jpg" alt="imagen">

<!-- ✅ Bueno -->
<img src="playa.jpg" alt="Playa virgen de Santa Marta con arena blanca">

<!-- ✅ Mejor (descriptivo) -->
<img src="tayrona-playa.jpg" alt="Playa paradisíaca del Parque Nacional Tayrona con palmeras y aguas cristalinas">
```

## Optimización de Velocidad

### Optimizar Imágenes

1. **Comprimir antes de subir**
   - Usa https://tinypng.com
   - Usa https://imagecompressor.com

2. **Usar formatos eficientes**
   - PNG para gráficos
   - JPEG para fotos
   - WebP para mejor compresión

3. **Tamaños recomendados**
   - Destino cards: 400x300px
   - Hero image: 1920x1080px
   - Thumbnails: 200x200px

### Mejoras de Rendimiento

```css
/* Lazy loading de imágenes */
<img src="imagen.jpg" loading="lazy" alt="Descripción">

/* Preload de fuentes críticas */
<link rel="preload" as="font" href="fuente.woff2" type="font/woff2">
```

## Estructura de URL Recomendada

```
santamarta.com/             ← Home
santamarta.com/destinos/    ← Listado destinos
santamarta.com/actividades/ ← Listado actividades
santamarta.com/blog/        ← Blog
santamarta.com/contacto/    ← Contacto
```

## Contenido Optimizado para SEO

### Home Page (índice)
- Títulos claros y descriptivos
- Meta descripción atractiva
- Palabras clave naturales
- Imágenes de alta calidad

### Páginas de Destinos
```
Formato:
- H1: [Nombre destino] - [Ubicación]
- Descripción 150-160 caracteres
- Información práctica
- Imágenes de calidad
- Call to action
```

## Estructura de Datos (Schema.org)

```html
<!-- Agregar a secciones de destinos -->
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Place",
  "name": "Parque Nacional Tayrona",
  "description": "Uno de los parques más bellos del mundo",
  "location": {
    "address": "Santa Marta, Magdalena, Colombia"
  },
  "image": "url-imagen.jpg"
}
</script>
```

## Checklist SEO

### On-Page
- [ ] H1 única y descriptiva
- [ ] Meta descripción 150-160 caracteres
- [ ] URLs amigables
- [ ] Alt text en todas las imágenes
- [ ] Enlaces internos relevantes
- [ ] Palabras clave naturales
- [ ] Contenido de calidad (300+ palabras por página)

### Technical
- [ ] Mobile responsive
- [ ] HTTPS (certificado SSL)
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Velocidad < 3 segundos
- [ ] Sin errores 404
- [ ] Structured data

### Off-Page
- [ ] Links desde redes sociales
- [ ] Presencia en Google My Business
- [ ] Menciones en directorios turísticos
- [ ] Backlinks de calidad

## Herramientas Recomendadas

### Análisis
- Google Analytics: https://analytics.google.com
- Google Search Console: https://search.google.com/search-console
- Lighthouse: Integrado en F12 de Chrome

### Palabras Clave
- Google Keyword Planner: https://ads.google.com/home/tools/keyword-planner/
- Ubersuggest: https://ubersuggest.com
- Answer the Public: https://answerthepublic.com

### Auditoría
- GTmetrix: https://gtmetrix.com
- Screaming Frog: https://www.screamingfrog.co.uk

## Ejemplo Completo de Meta Tags

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Básico -->
    <title>Santa Marta Tours | Destino Turístico del Caribe Colombiano</title>
    <meta name="description" content="Descubre Santa Marta con sus playas vírgenes, el Parque Tayrona y la famosa Ciudad Perdida. Experiencias turísticas inolvidables en el Caribe.">
    <meta name="keywords" content="santa marta, turismo, caribe, tayrona, ciudad perdida, colombia">
    
    <!-- Open Graph (Redes Sociales) -->
    <meta property="og:title" content="Santa Marta Tours">
    <meta property="og:description" content="Descubre los mejores destinos turísticos de Santa Marta">
    <meta property="og:image" content="https://tusitio.com/imagen.jpg">
    <meta property="og:url" content="https://santamarta.com">
    
    <!-- Otros -->
    <meta name="theme-color" content="#FF6B35">
    <link rel="canonical" href="https://santamarta.com">
    
    <link rel="stylesheet" href="css/styles.css">
</head>
```

## Monitoreo de SEO

### Mensual
- Revisar ranking de palabras clave
- Analizar traffic de Google Analytics
- Revisar errores en Search Console

### Trimestral
- Auditoría técnica
- Análisis de competencia
- Actualizar contenido

### Anual
- Estrategia SEO completa
- Revisión de backlinks
- Planificación de contenido

---

**Con esta información tu sitio estará optimizado para motores de búsqueda!** 🚀

Para más información: https://developers.google.com/search

# 📋 Guía Rápida de Desarrollo - Santa Marta Tours

## 🚀 Inicio Rápido

1. **Abre el proyecto en tu editor**
   ```bash
   code "c:\Users\ppaes\OneDrive\Escritorio\santa marta bombastic"
   ```

2. **Abre el archivo `index.html` en el navegador**
   - Click derecho en `index.html` → Abrir con navegador
   - O arrastra el archivo al navegador

3. **Comienza a personalizar**
   - Edita colores en `css/styles.css`
   - Modifica textos en `index.html`
   - Añade funcionalidades en `js/script.js`

## 🎨 Personalización Rápida

### Cambiar el Color Principal
En `css/styles.css`, línea 10:
```css
--primary-color: #FF6B35; /* Cambia este color */
```

### Cambiar el Color Secundario
En `css/styles.css`, línea 11:
```css
--secondary-color: #004E89; /* Cambia este color */
```

### Agregar Nuevo Destino
En `index.html`, busca la sección `.destinos-grid` y añade:
```html
<div class="destino-card">
    <div class="destino-image" style="background: linear-gradient(135deg, #color1 0%, #color2 100%);">
        <i class="fas fa-icon"></i>
    </div>
    <h3>Nombre del Destino</h3>
    <p>Descripción del destino</p>
    <a href="#" class="btn btn-secondary">Más Información</a>
</div>
```

### Agregar Nueva Actividad
En `index.html`, busca `.actividades-grid` y añade:
```html
<div class="actividad-item">
    <div class="actividad-icon">
        <i class="fas fa-icon"></i>
    </div>
    <h3>Nombre Actividad</h3>
    <p>Descripción de la actividad</p>
</div>
```

## 📸 Cambiar Imágenes

En la sección de galería, reemplaza las URLs de placeholder:
```html
<!-- De esto: -->
<img src="https://via.placeholder.com/400x300?text=Playa+Dorada" alt="Playa Dorada">

<!-- A esto (URL real): -->
<img src="ruta/a/tu/imagen.jpg" alt="Playa Dorada">
```

## ⚙️ Configuración del Proyecto

### Información en `config.json`
Personaliza los datos del contacto, destinos y actividades:

```json
{
  "contacto": {
    "email": "tu-email@ejemplo.com",
    "telefono": "+57 XXX XXXX"
  }
}
```

## 🔗 Enlaces Útiles en el Código

### Fontawesome Icons
- Documentación: https://fontawesome.com/icons
- Busca iconos y úsalos: `<i class="fas fa-icon-name"></i>`

### Colores Gradientes
- Generador: https://cssgradient.io/
- Copiar el código y pegarlo en `background`

### Imagenes Placeholder
- https://via.placeholder.com/400x300?text=Tu+Texto

## 🧪 Testing en Navegador

### Ver en Móvil
1. Abre DevTools: `F12`
2. Haz click en el ícono de dispositivo móvil (esquina superior)
3. Prueba diferentes tamaños

### Revisar Elementos
1. `F12` → Elementos/Inspector
2. Selecciona elementos y modifica CSS en tiempo real

## 📝 Estructura de Archivos

```
index.html          ← Contenido principal
css/
  └─ styles.css     ← Estilos principales
  └─ components.css ← Componentes adicionales
js/
  └─ script.js      ← Funcionalidad interactiva
config.json         ← Datos de configuración
README.md           ← Documentación
GUIA_RAPIDA.md      ← Este archivo
```

## 🎯 Tareas Comunes

### Cambiar Logo/Nombre
Busca en `index.html`:
```html
<div class="logo">
    <i class="fas fa-mountain"></i>
    <span>Santa Marta Tours</span> <!-- Cambia aquí -->
</div>
```

### Agregar Sección Nueva
1. Crea un `<section class="nueva-seccion" id="nueva">` en HTML
2. Añade estilos en CSS
3. Añade funcionalidad en JS si es necesaria
4. Actualiza el menú de navegación

### Conectar Formulario a Email
Opción 1 - Usando Formspree:
1. Ve a https://formspree.io/
2. Crea una cuenta gratis
3. En `index.html`, busca el formulario
4. Cambia `action="tu-url-formspree"` en el form

Opción 2 - Usando EmailJS:
1. Ve a https://www.emailjs.com/
2. Sigue su documentación
3. Integra el script en `js/script.js`

## 🚀 Mejoras Futuras Simples

### 1. Agregar Más Imágenes
- Reemplaza URLs de placeholder con imágenes reales

### 2. Agregar Más Destinos
- Copia la estructura de destino-card y personaliza

### 3. Cambiar Tipografía
En `css/styles.css`:
```css
body {
    font-family: 'Tu-Fuente', sans-serif;
}
```

### 4. Agregar Animaciones CSS
En `css/styles.css`, crea tus animaciones:
```css
@keyframes miAnimacion {
    from { opacity: 0; }
    to { opacity: 1; }
}

.elemento {
    animation: miAnimacion 1s ease;
}
```

## 🐛 Solución de Problemas

### Las imágenes no cargan
- Verifica que la URL sea correcta
- Comprueba la consola (F12) para errores

### Estilos no aplican
- Limpia caché: `Ctrl+Shift+R` (Windows)
- Verifica que el archivo CSS esté vinculado correctamente

### JavaScript no funciona
- Abre la consola (F12)
- Busca errores en rojo
- Verifica que `script.js` esté correctamente vinculado

## 📚 Recursos de Aprendizaje

- **HTML**: https://developer.mozilla.org/es/docs/Web/HTML
- **CSS**: https://developer.mozilla.org/es/docs/Web/CSS
- **JavaScript**: https://developer.mozilla.org/es/docs/Web/JavaScript
- **Flexbox**: https://flexboxfroggy.com/
- **Grid**: https://cssgridgarden.com/

## 💡 Tips de Desarrollo

1. **Usa LiveServer** para ver cambios en tiempo real
   - Instala extensión "Live Server" en VS Code
   - Click derecho en index.html → "Open with Live Server"

2. **Organiza tu código**
   - Mantén archivos separados por tipo (HTML, CSS, JS)

3. **Comenta tu código**
   - Usa `<!-- comentario -->` en HTML
   - Usa `// comentario` en JavaScript
   - Usa `/* comentario */` en CSS

4. **Prueba en diferentes navegadores**
   - Chrome, Firefox, Safari, Edge

5. **Revisa el rendimiento**
   - F12 → Lighthouse para análisis

## 🎓 Próximos Pasos

Después de personalizar la página:

1. [ ] Cambiar imágenes por fotos reales
2. [ ] Conectar formulario a email real
3. [ ] Añadir más destinos y actividades
4. [ ] Optimizar imágenes
5. [ ] Agregar blog o sección de noticias
6. [ ] Implementar sistema de reservas
7. [ ] Hacer SEO optimization
8. [ ] Desplegar en servidor web

## 🌐 Despliegue (Hosting)

### Opciones Gratuitas:
- **Vercel**: https://vercel.com
- **Netlify**: https://www.netlify.com
- **GitHub Pages**: https://pages.github.com

### Pasos:
1. Sube los archivos a GitHub
2. Conecta con Vercel o Netlify
3. ¡Automáticamente desplegada!

---

**¡Feliz desarrollo! 🎉 Cualquier duda, revisa el README.md o busca en Google.**

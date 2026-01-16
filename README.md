# 🏝️ Santa Marta - Página Web Turística Moderna

Bienvenido a Santa Marta Tours, una página web moderna y responsiva dedicada a mostrar los mejores destinos y experiencias turísticas de Santa Marta, Colombia.

**🎉 Versión 2.0: Panel Administrativo Completo Implementado**

## 📁 Estructura del Proyecto

```
santa marta bombastic/
│
├── index.html                          # Página principal HTML
├── css/
│   └── styles.css                     # Estilos CSS modernos
├── js/
│   ├── auth.js                        # Sistema de autenticación
│   ├── perfil-admin.js                # Gestión de perfiles
│   ├── destinos.js                    # Sistema de destinos
│   └── admin-dashboard.js             # Panel admin mejorado (NUEVO)
│
├── DOCUMENTACIÓN/
│   ├── README.md                      # Este archivo
│   ├── GUIA_ADMIN_DASHBOARD.md       # Manual del panel admin
│   ├── EJEMPLOS_ADMIN_DASHBOARD.md   # Ejemplos de uso
│   ├── GUIA_PRUEBAS_ADMIN.md         # Guía de testing
│   └── RESUMEN_PANEL_ADMIN_v2.md     # Resumen de mejoras
│
└── git/
    └── Conectado a GitHub (paespa2/santa-marta)
```

## ✨ Características Principales

### 🔐 Sistema de Autenticación (v1.0)
- ✅ Registro de usuarios
- ✅ Login con email y contraseña
- ✅ Perfil de usuario editable
- ✅ Cambio de contraseña
- ✅ Roles: Admin y Cliente
- ✅ Logout seguro

### 🎨 Diseño Moderno
- Interfaz moderna y atractiva con gradientes y animaciones
- Diseño responsive que se adapta a todos los dispositivos
- Paleta de colores cuidadosamente seleccionada
- Tipografía clara y legible

### 📱 Responsive Design
- Mobile-first approach
- Menú hamburguesa para dispositivos móviles
- Grid y Flexbox para layouts adaptables
- Optimizado para pantallas de todas las tamaños

### 🎭 Interactividad
- Menú de navegación con scroll suave
- Animaciones al cargar elementos
- Galería con lightbox interactivo
- Contadores animados
- Formulario de contacto funcional
- Efectos parallax en hero section

### 📊 Panel Administrativo v2.0 (NUEVO)
- ✅ Dashboard con 5 estadísticas clave
- ✅ Gestión completa de usuarios (CRUD)
- ✅ Gestión de destinos turísticos
- ✅ Gestión de paquetes turísticos
- ✅ Registro de actividades (auditoría)
- ✅ Configuración centralizada del sitio
- ✅ Búsqueda y filtrado de usuarios
- ✅ Interfaz profesional con sidebar
- ✅ Formularios modales completos
- ✅ Diseño responsive (mobile-friendly)

### 📍 Secciones Incluidas

1. **Navegación**: Barra fija con logo y menú responsivo
2. **Hero Section**: Presentación impactante con gradientes
3. **Sobre Santa Marta**: Información general y estadísticas
4. **Destinos Principales**: 6 destinos turísticos destacados
5. **Actividades**: Actividades emocionantes disponibles
6. **Galería**: Galería de imágenes con efecto lightbox
7. **CTA**: Llamada a la acción
8. **Contacto**: Formulario de contacto y información de ubicación
9. **Footer**: Información de copyright y redes sociales

## 🚀 Cómo Iniciar el Proyecto

### Opción 1: Python HTTP Server (Recomendado)

```bash
cd "c:\Users\ppaes\OneDrive\Escritorio\santa marta bombastic"
python -m http.server 8000
```

Luego abre: **http://localhost:8000**

### Opción 2: Abrir Archivo Directo

```bash
Simplemente haz doble clic en index.html
O arrastra index.html a tu navegador
```

## 👤 Cuentas de Prueba

### Admin (Acceso completo)
```
Email:    admin@santamarta.com
Password: admin123
Rol:      Administrador
```

### Cliente (Usuario regular)
```
Email:    juan@example.com
Password: usuario123
Rol:      Cliente
```

## 📖 Guía de Uso Rápida

### Para Clientes
1. Inicia sesión con juan@example.com
2. Navega por destinos y paquetes
3. Edita tu perfil si es necesario

### Para Administradores
1. Inicia sesión con admin@santamarta.com
2. Haz clic en el menú de usuario
3. Selecciona "⚙️ Panel Admin"
4. Acceso a: Dashboard, Usuarios, Destinos, Paquetes, Actividades, Configuración

## 📚 Documentación Disponible

| Archivo | Descripción |
|---------|------------|
| **GUIA_ADMIN_DASHBOARD.md** | Manual completo del panel admin |
| **EJEMPLOS_ADMIN_DASHBOARD.md** | 7 escenarios prácticos de uso |
| **GUIA_PRUEBAS_ADMIN.md** | Guía detallada de testing |
| **RESUMEN_PANEL_ADMIN_v2.md** | Resumen técnico de mejoras |

## 🎨 Paleta de Colores

```
Primary Color:     #FF6B35 (Naranja vibrante)
Secondary Color:   #004E89 (Azul profundo)
Accent Color:      #1B9CFC (Azul claro)
Light Background:  #F7F9FC (Gris muy claro)
Dark Background:   #1A1A2E (Azul oscuro)
Text Dark:         #2D3436 (Gris oscuro)
Text Light:        #636E72 (Gris medio)
White:             #FFFFFF
```

## 🔧 Personalización

### Cambiar Colores
Edita el archivo `css/styles.css` y modifica las variables CSS al inicio:

```css
:root {
    --primary-color: #FF6B35;
    --secondary-color: #004E89;
    /* ... más colores ... */
}
```

### Agregar Contenido
1. **Destinos**: Edita la sección `.destinos` en `index.html`
2. **Actividades**: Modifica `.actividades-grid` en `index.html`
3. **Imágenes**: Reemplaza las URLs de placeholder en la galería

### Conectar Formulario
Actualmente el formulario es simulado. Para hacerlo funcional:
1. Usa un servicio como Formspree, EmailJS o tu backend propio
2. Modifica la función `contactForm.addEventListener` en `js/script.js`

## 📊 Destinos Incluidos

1. **Parque Tayrona** - Selva y playa virgen
2. **Ciudad Perdida** - Trekking arqueológico
3. **Playas Paradisíacas** - Arena blanca y aguas cristalinas
4. **Sierra Nevada** - Montaña tropical nevada
5. **Centro Histórico** - Arquitectura colonial
6. **Buceo Submarino** - Arrecifes y vida marina

## 🎯 Actividades Destacadas

- Senderismo y trekking
- Gastronomía local
- Fotografía de naturaleza
- Deportes acuáticos
- Experiencias culturales
- Tours nocturnos

## 📱 Compatibilidad

- ✅ Chrome/Edge (último)
- ✅ Firefox (último)
- ✅ Safari (último)
- ✅ Mobile (iOS/Android)
- ✅ Tablets
- ✅ Pantallas grandes

## 🎬 Características JavaScript

### Funciones Principales

1. **toggleMenu()** - Abre/cierra menú hamburguesa
2. **observer** - Anima elementos al entrar en viewport
3. **animateCounter()** - Anima números de estadísticas
4. **createLightbox()** - Abre galería en fullscreen
5. **preloadImages()** - Precarga imágenes para mejor rendimiento

### Eventos

- Click en hamburger para menú
- Scroll para cambios en navbar
- Intersection Observer para animaciones
- Click en galería para lightbox
- Submit del formulario

## 🌐 CDN Externas

- Font Awesome 6.4.0 - Iconos
- Google Fonts (a través de Segoe UI)

## 📝 Notas de Desarrollo

- El proyecto usa CSS Grid y Flexbox modernos
- JavaScript vanilla sin dependencias externas (excepto iconos)
- Soporta prefers-reduced-motion para accesibilidad
- Optimizado para rendimiento

## 🔄 Mejoras Futuras Sugeridas

- [ ] Integración con backend para formulario
- [ ] Sistema de reservas
- [ ] Blog de viajes
- [ ] Mapa interactivo
- [ ] Chat en vivo
- [ ] Integración con redes sociales
- [ ] Multi-idioma
- [ ] PWA (Progressive Web App)

## 📄 Licencia

Este proyecto es de uso libre para propósitos personales y comerciales.

## 👨‍💻 Autor

Creado con ❤️ para Santa Marta Tours

---

**¡Disfruta desarrollando la mejor experiencia turística para Santa Marta!** 🎉

Para cualquier pregunta o sugerencia, contacta a través del formulario en la página.

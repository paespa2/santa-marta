# 🎨 Referencia de Colores y Estilos

## Variables Principales (css/styles.css)

```css
:root {
    --primary-color: #FF6B35;      /* Naranja vibrante */
    --secondary-color: #004E89;    /* Azul profundo */
    --accent-color: #1B9CFC;       /* Azul claro */
    --light-bg: #F7F9FC;           /* Gris muy claro */
    --dark-bg: #1A1A2E;            /* Azul oscuro */
    --text-dark: #2D3436;          /* Gris oscuro */
    --text-light: #636E72;         /* Gris medio */
    --white: #FFFFFF;              /* Blanco puro */
    --border-radius: 12px;         /* Radio de bordes */
    --transition: all 0.3s ease;   /* Transición default */
}
```

## Uso de Variables

En cualquier propiedad CSS, puedes usar:

```css
color: var(--primary-color);
background: var(--secondary-color);
border-radius: var(--border-radius);
transition: var(--transition);
```

## Colores por Elemento

| Elemento | Color | Variable |
|----------|-------|----------|
| Botones | Naranja | `--primary-color` |
| Títulos | Azul | `--secondary-color` |
| Links | Azul | `--secondary-color` |
| Fondos | Gris claro | `--light-bg` |
| Texto | Gris oscuro | `--text-dark` |
| Texto secundario | Gris medio | `--text-light` |

## Gradientes Predefinidos

### Gradiente Azul-Morado (Hero)
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Gradiente Naranja (Botones)
```css
background: linear-gradient(135deg, #FF6B35, #FF8C42);
```

## Sombras Recomendadas

### Sombra Sutil
```css
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
```

### Sombra Media
```css
box-shadow: 0 10px 25px rgba(255, 107, 53, 0.2);
```

### Sombra Fuerte
```css
box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
```

## Tipografía

```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Tamaños recomendados */
h1: 4rem (64px)
h2: 2.5rem (40px)
h3: 1.5rem (24px)
p:  1rem (16px)
small: 0.85rem (13px)
```

## Espaciado Recomendado

```css
/* Padding */
Pequeño: 12px
Medio: 20px
Grande: 30px
Muy grande: 50px

/* Margen */
Pequeño: 10px
Medio: 20px
Grande: 30px
Muy grande: 60px
```

## Transiciones

```css
/* Rápida */
transition: all 0.2s ease;

/* Normal (default) */
transition: all 0.3s ease;

/* Lenta */
transition: all 0.5s ease;

/* Muy lenta */
transition: all 1s ease;
```

## Breakpoints (Puntos de Quiebre)

```css
/* Extra grande (Desktop) */
@media (min-width: 1200px) { }

/* Grande (Laptop) */
@media (max-width: 1199px) { }

/* Medio (Tablet) */
@media (max-width: 768px) { }

/* Pequeño (Móvil) */
@media (max-width: 480px) { }
```

## Ejemplos de Uso

### Cambiar color del botón
```css
.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), #FF8C42);
    color: var(--white);
}
```

### Crear una tarjeta
```css
.mi-tarjeta {
    background: var(--white);
    border-radius: var(--border-radius);
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
}

.mi-tarjeta:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}
```

### Texto con estilo
```css
.mi-texto {
    color: var(--text-dark);
    font-size: 1rem;
    line-height: 1.6;
    transition: var(--transition);
}

.mi-texto:hover {
    color: var(--primary-color);
}
```

## Animaciones Incluidas

```css
/* Fade in vertical */
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Rotación */
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Movimiento de fondo */
@keyframes moveBackground {
    0% { transform: translateX(0); }
    100% { transform: translateX(200px); }
}
```

## Clases Útiles Predefinidas

```html
<!-- Botones -->
<button class="btn btn-primary">Botón Primario</button>
<button class="btn btn-secondary">Botón Secundario</button>

<!-- Contenedor -->
<div class="container">Contenido limitado a 1200px</div>

<!-- Bordes y espacios -->
<div class="border-radius: var(--border-radius)">

<!-- Shadow -->
<div class="box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1)">
```

## Convenciones de Nombres

```
.nombre-elemento
.elemento-estado (ej: .btn-hover)
.elemento-tamaño (ej: .btn-large)
.elemento-tipo (ej: .btn-primary)
```

## Responsive Design Rápido

### Grid Responsivo
```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}
```

### Flex Responsivo
```css
.flex {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
```

## Performance Tips

1. **Usa CSS variables** para valores repetidos
2. **Evita valores hardcodeados** de colores
3. **Agrupa media queries** al final del archivo
4. **Minimiza especificidad** de selectores
5. **Usa clases** en lugar de IDs cuando sea posible

---

¡Con esta guía puedes personalizar cualquier aspecto visual del proyecto! 🎨

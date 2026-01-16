# 🔧 Documentación Técnica - Sistema de Autenticación

## Descripción General

El proyecto Santa Marta Tours ahora incluye un **sistema completo de autenticación** basado en localStorage con roles de usuario y un panel administrativo para gestionar destinos y paquetes.

---

## 📁 Estructura de Archivos

```
santa-marta-bombastic/
├── index.html                  # Página principal (actualizada)
├── js/
│   ├── script.js              # JavaScript original (sin cambios)
│   ├── auth.js                # NUEVO: Sistema de autenticación
│   ├── perfil-admin.js        # NUEVO: Perfil y panel admin
│   ├── destinos.js            # NUEVO: Páginas de destino dinámicas
│   └── ejemplos-avanzados.js  # Ejemplos adicionales
├── css/
│   ├── styles.css             # Estilos principales (actualizado)
│   └── components.css         # Componentes adicionales
├── config.json                # Configuración del sitio
└── [documentación]            # Guías y referencias
```

---

## 🔑 Archivos Principales

### 1. **auth.js** (572 líneas)

#### Clase: `SistemaAutenticacion`

```javascript
class SistemaAutenticacion {
    constructor()                              // Inicializa el sistema
    inicializarUsuariosPorDefecto()           // Crea usuarios por defecto
    obtenerTodosUsuarios()                    // Lee todos los usuarios
    registrar(nombre, email, pass, telefono)  // Registra nuevo usuario
    login(email, password)                    // Inicia sesión
    logout()                                  // Cierra sesión
    obtenerUsuarioActual()                    // Usuario autenticado
    estaAutenticado()                         // Verifica autenticación
    esAdmin()                                 // Verifica si es admin
    actualizarPerfil(datos)                   // Edita perfil
    cambiarPassword(actual, nueva)            // Cambia contraseña
}
```

#### Funciones Públicas

```javascript
// Crear y mostrar modales
crearModalLogin()                  // Crea el HTML del modal login
crearModalRegistro()               // Crea el HTML del modal registro
abrirLoginModal()                  // Muestra modal login
abrirRegistroModal()               // Muestra modal registro

// UI
actualizarUIAutenticacion()        // Actualiza navbar según estado
agregarEstilosAuth()               // Agrega CSS de auth al DOM

// Manejadores de formularios
manejarLogin()                     // Valida y procesa login
manejarRegistro()                  // Valida y procesa registro
```

#### Estructura de Objeto Usuario

```javascript
{
    id: 1,
    nombre: "Juan Pérez",
    email: "juan@example.com",
    password: "usuario123",           // ⚠️ Almacenada en texto plano (no seguro)
    rol: "cliente",                   // "admin" o "cliente"
    telefono: "+57 300 1234567",
    avatar: "https://via.placeholder.com/150?text=Juan",
    fechaRegistro: "2026-01-16T..."   // ISO string
}
```

#### Validaciones

- Email válido (regex)
- Contraseña mínimo 6 caracteres
- Confirmación de contraseña en registro
- Email único (no duplicados)

---

### 2. **perfil-admin.js** (400+ líneas)

#### Funciones de Perfil

```javascript
abrirPerfilUsuario()           // Muestra perfil actual del usuario
abrirEditarPerfil()            // Abre formulario de edición
guardarCambiosPerfil()         // Guarda cambios del perfil
abrirCambiarPassword()         // Modal para cambiar contraseña
guardarNuevaPassword()         // Valida y cambia contraseña
```

#### Funciones del Panel Admin

```javascript
abrirPanelAdmin()              // Abre el panel (solo admin)
cambiarTabAdmin(nombreTab)     // Cambia entre tabs del panel

// Renderizadores de tabs
renderizarTabDestinos()        // Muestra destinos disponibles
renderizarTabPaquetes()        // Muestra paquetes turísticos
renderizarTabUsuarios()        // Lista de usuarios registrados

// Gestión de destinos
abrirFormDestino()             // Abre formulario para crear destino
guardarDestino(datos)          // Guarda destino en localStorage
editarDestino(id)              // Abre edición de destino
eliminarDestino(id)            // Elimina un destino
```

#### Estructura de Objeto Destino

```javascript
{
    id: "1",
    nombre: "Parque Nacional Tayrona",
    descripcion: "Breve descripción...",
    descripcionLarga: "Descripción completa...",
    imagen: "https://...",
    imagenes: ["https://...", "https://..."],
    ubicacion: "Santa Marta, Magdalena",
    entrada: "COP $57,000",
    horario: "8:00 AM - 4:00 PM",
    duracion: "1 día",
    dificultad: "Baja",
    atractivos: ["Senderismo", "Playa", "Flora"],
    puntuacion: 4.8,
    resenas: 234
}
```

---

### 3. **destinos.js** (500+ líneas)

#### Clase: `GestorDestinos`

```javascript
class GestorDestinos {
    constructor()
    inicializarDestinosPorDefecto()    // Crea destinos iniciales
    inicializarPaquetesPorDefecto()    // Crea paquetes iniciales
    obtenerDestino(id)                 // Lee un destino por ID
    obtenerTodosDestinos()             // Lee todos los destinos
    obtenerPaquetesPorDestino(id)      // Paquetes de un destino
}
```

#### Funciones Públicas

```javascript
abrirDetalleDestino(id)        // Abre modal con detalle completo
renderizarPaquetes(lista)      // Crea HTML de paquetes
cambiarImagenPrincipal(elem)   // Cambia imagen en galería
reservarPaquete(id)            // Procesa reserva (placeholder)
agregarEstilosDetalle()        // Inyecta CSS de detalles
```

#### Estructura de Objeto Paquete

```javascript
{
    id: "1",
    nombre: "Tayrona Express",
    destinoId: "1",
    duracion: "1 día",
    precio: "COP $120,000",
    descripcion: "Tour de un día...",
    incluye: ["Entrada", "Guía", "Transporte", "Almuerzo"],
    itinerario: [
        "8:00 AM - Recogida en hotel",
        "9:30 AM - Llegada al parque",
        // ...
    ]
}
```

---

## 💾 localStorage Keys

| Clave | Contenido | Tipo |
|-------|-----------|------|
| `santa_marta_usuarios` | Array de objetos usuario | JSON |
| `santa_marta_usuario_actual` | Usuario autenticado | JSON |
| `santa_marta_destinos` | Array de destinos | JSON |
| `santa_marta_paquetes` | Array de paquetes | JSON |

---

## 🎨 Estilos CSS

Nuevos estilos agregados en `styles.css`:

```css
/* Autenticación */
.auth-buttons { }
.btn-auth-login { }
.btn-auth-register { }
.btn-user-toggle { }
.user-dropdown { }

/* Modales de autenticación */
.modal-backdrop { }
.modal-dialog { }
.modal-header { }
.modal-body { }
.modal-footer { }

/* Detalle de destino */
.detalle-dialog { }
.detalle-galeria { }
.detalle-info { }
.detalle-paquetes { }
.paquete-card { }
```

---

## 🔄 Flujo de Ejecución

### Página Carga (onLoad)

```
1. HTML renderiza
2. Se cargan scripts: auth.js → perfil-admin.js → destinos.js
3. DOMContentLoaded event dispara:
   - auth.obtenerUsuarioActual() lee localStorage
   - actualizarUIAutenticacion() actualiza navbar
   - Inicializa event listeners
4. GestorDestinos instancia → inicializa destinos por defecto
```

### Usuario Hace Click en "Iniciar Sesión"

```
1. abrirLoginModal() ejecuta
2. crearModalLogin() genera HTML
3. Modal se inserta en DOM
4. Esperamos input y click submit
5. manejarLogin() valida datos
6. auth.login(email, password) busca usuario
7. Si válido → guarda en localStorage
8. actualizarUIAutenticacion() refresca navbar
9. Modal se cierra automáticamente
```

### Usuario Hace Click en "Más Información" de Destino

```
1. abrirDetalleDestino('id') ejecuta
2. gestorDestinos.obtenerDestino(id) lee de localStorage
3. Crea HTML con galería, info, paquetes
4. Inserta modal en DOM
5. Usuario ve imágenes, paquetes, puede hacer click en "Reservar Ahora"
6. Si no autenticado → abre login
7. Si autenticado → registra la reserva
```

### Admin Accede a Panel

```
1. Usuario hace click "Panel Admin"
2. abrirPanelAdmin() verifica auth.esAdmin()
3. Si no es admin → alert y retorno
4. Si es admin → crea modal con 3 tabs
5. Cada tab renderiza su contenido
6. Admin puede CRUD destinos y paquetes
7. Cambios se guardan en localStorage
```

---

## 🔐 Flujos de Seguridad

### Login Seguro
```javascript
// ACTUAL (NO SEGURO - para desarrollo)
const usuarios = JSON.parse(localStorage.getItem('santa_marta_usuarios'));
const usuario = usuarios.find(u => u.email === email && u.password === password);

// RECOMENDADO (CON BACKEND)
const response = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
});
const { token } = await response.json();
localStorage.setItem('auth_token', token);
```

### Validación de Admin
```javascript
// Actual
const usuario = JSON.parse(localStorage.getItem('santa_marta_usuario_actual'));
if (usuario.rol === 'admin') { /* permitir */ }

// Mejor
// Verificar token en backend en cada request
```

---

## 🐛 Debugging

### Ver Todos los Usuarios en Console
```javascript
console.log(JSON.parse(localStorage.getItem('santa_marta_usuarios')));
```

### Ver Usuario Actual
```javascript
console.log(JSON.parse(localStorage.getItem('santa_marta_usuario_actual')));
```

### Ver Destinos
```javascript
console.log(JSON.parse(localStorage.getItem('santa_marta_destinos')));
```

### Limpiar y Reiniciar
```javascript
localStorage.clear();
location.reload();
```

---

## 📋 Matriz de Acceso (RBAC)

| Funcionalidad | Admin | Cliente | Anónimo |
|--------------|-------|---------|---------|
| Ver destinos | ✅ | ✅ | ✅ |
| Ver detalles | ✅ | ✅ | ✅ |
| Reservar | ✅ | ✅ | ❌ |
| Crear destino | ✅ | ❌ | ❌ |
| Editar destino | ✅ | ❌ | ❌ |
| Eliminar destino | ✅ | ❌ | ❌ |
| Panel admin | ✅ | ❌ | ❌ |
| Editar perfil | ✅ | ✅ | ❌ |

---

## ⚠️ Limitaciones Actuales

1. **Contraseña en texto plano** - Usar bcrypt en producción
2. **localStorage limitado** - Máx ~5MB por dominio
3. **Sin persistencia real** - Datos se pierden si se limpia caché
4. **Sin validación backend** - Cualquiera puede manipular localStorage
5. **Sin HTTPS** - Enviar credenciales sin encriptación
6. **Sin JWT** - Sesiones no expiran

---

## 🚀 Mejoras Propuestas

### Corto Plazo
- [ ] Encriptación de contraseñas con bcrypt
- [ ] Validación de email con confirmación
- [ ] Recuperación de contraseña
- [ ] Rate limiting en login

### Mediano Plazo
- [ ] Backend API REST
- [ ] Base de datos MongoDB/PostgreSQL
- [ ] JWT authentication
- [ ] Refresh tokens

### Largo Plazo
- [ ] Two-factor authentication
- [ ] Social login (Google, Facebook)
- [ ] Historial de reservas
- [ ] Sistema de ratings/reseñas
- [ ] Notificaciones por email

---

## 📞 Contacto

Repositorio: https://github.com/paespa2/santa-marta
Rama: main
Versión: 2.0

---

**Última actualización:** 16 de Enero, 2026

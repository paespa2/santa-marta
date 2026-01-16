# 📱 Guía de Autenticación y Administración

## Sistema de Autenticación

El sitio web de Santa Marta ahora cuenta con un **sistema completo de autenticación** con roles de usuario y un panel administrativo.

---

## 🔐 Usuarios de Prueba

### Cuenta de Administrador
- **Email:** `admin@santamarta.com`
- **Contraseña:** `admin123`
- **Rol:** Admin (acceso total al panel de administración)

### Cuenta de Cliente
- **Email:** `juan@example.com`
- **Contraseña:** `usuario123`
- **Rol:** Cliente (acceso normal al sitio)

---

## ✨ Características Principales

### 1. **Autenticación Unificada**
- Formulario de login y registro integrado en la navegación
- Modal elegante que aparece sin navegar a otra página
- Validación de email y contraseña
- Confirmación de contraseña en registro

### 2. **Perfil de Usuario**
- Visualización de datos personales
- Edición de perfil (nombre, teléfono, avatar)
- Cambio de contraseña seguro
- Información de fecha de registro

### 3. **Panel de Administración**
El panel admin está disponible solo para usuarios con rol "admin" y contiene:

#### 🏖️ **Tab: Destinos**
- Listar todos los destinos
- Crear nuevos destinos
- Editar destinos existentes
- Eliminar destinos
- Gestionar imágenes y descripciones

#### 📦 **Tab: Paquetes**
- Crear paquetes turísticos
- Asignar paquetes a destinos
- Definir precio y duración
- Establecer itinerario e inclusiones

#### 👥 **Tab: Usuarios**
- Ver lista de todos los usuarios registrados
- Información completa de cada usuario
- Datos de contacto y fecha de registro

### 4. **Páginas de Destino Detalladas**
- Galería de imágenes con thumbnails
- Información completa del destino
- Ubicación, entrada, horario
- Atractivos principales
- Paquetes turísticos disponibles
- Opción de reservar paquetes

---

## 🎯 Flujo de Uso

### Para Nuevos Usuarios
1. Haz click en **"Registrarse"** en la navegación
2. Completa el formulario con:
   - Nombre completo
   - Email válido
   - Contraseña (mínimo 6 caracteres)
   - Teléfono (opcional)
3. Confirma la contraseña
4. Automáticamente se abre el login

### Para Usuarios Existentes
1. Haz click en **"Iniciar Sesión"**
2. Ingresa tu email y contraseña
3. Se cerrará el modal y aparecerá tu menú de usuario

### Menú de Usuario (después de login)
Una vez autenticado, verás un botón con tu avatar:
- **Mi Perfil:** Edita tu información
- **Panel Admin:** (solo si eres administrador) Gestiona el contenido
- **Cerrar Sesión:** Cierra tu sesión

### Explorar Destinos
1. En la sección "Destinos Principales"
2. Haz click en **"Más Información"** de cualquier destino
3. Se abrirá una modal con:
   - Galería de imágenes
   - Información detallada
   - Paquetes disponibles
4. Selecciona un paquete y haz click en **"Reservar Ahora"**

---

## 🛠️ Administración de Contenido

### Crear un Nuevo Destino
1. Inicia sesión como administrador
2. Abre el **Panel Admin** desde el menú de usuario
3. Ve a la tab **"Destinos"**
4. Haz click en **"➕ Agregar Nuevo Destino"**
5. Completa el formulario:
   - Nombre del destino
   - Descripción corta
   - Descripción larga
   - URL de imagen
   - Ubicación
   - Atractivos (separados por comas)
6. Haz click en **"Guardar Destino"**

### Editar un Destino
1. En el Panel Admin, tab **"Destinos"**
2. Busca el destino en la lista
3. Haz click en **"✏️ Editar"**
4. Modifica los campos necesarios
5. Haz click en **"Guardar Cambios"**

### Crear un Paquete Turístico
1. En el Panel Admin, tab **"Paquetes"**
2. Haz click en **"➕ Crear Paquete"**
3. Selecciona el destino asociado
4. Completa:
   - Nombre del paquete
   - Duración
   - Precio
   - Descripción
   - Qué incluye (línea por línea)
   - Itinerario (día por día)
5. Guarda el paquete

---

## 💾 Almacenamiento de Datos

El sistema utiliza **localStorage** del navegador para almacenar:
- **Usuarios:** `santa_marta_usuarios`
- **Sesión actual:** `santa_marta_usuario_actual`
- **Destinos:** `santa_marta_destinos`
- **Paquetes:** `santa_marta_paquetes`

### Importante:
- Los datos persisten entre sesiones de navegación
- Si limpias el caché/almacenamiento del navegador, perderás los datos
- Actualmente no hay sincronización con servidor

---

## 🔒 Seguridad

### Implementado:
- ✅ Validación de email
- ✅ Verificación de contraseñas
- ✅ Rol-based access control (RBAC)
- ✅ Solo administradores pueden acceder al panel admin

### No implementado (requiere backend):
- ❌ Encriptación de contraseña
- ❌ JWT o sesiones del lado del servidor
- ❌ Recuperación de contraseña
- ❌ Two-factor authentication

---

## 📱 Responsividad

Todos los modales y componentes están optimizados para:
- ✅ Desktop
- ✅ Tablet
- ✅ Móvil

---

## 🚀 Próximos Pasos

Para mejorar el sistema:

1. **Backend:** Crear API con Node.js/Express
2. **Base de Datos:** Implementar MongoDB o PostgreSQL
3. **Autenticación:** JWT tokens en lugar de localStorage
4. **Seguridad:** Bcrypt para contraseñas, HTTPS
5. **Email:** Sistema de confirmación de email
6. **Pagos:** Integración con Stripe para reservas
7. **Notificaciones:** Sistema de alertas para reservas
8. **Búsqueda:** Filtro de destinos por categoría, precio, rating

---

## ✅ Checklist de Funciones

- [x] Login sin navegar a otra página
- [x] Registro de nuevos usuarios
- [x] Perfil de usuario editable
- [x] Cambio de contraseña
- [x] Panel de administración
- [x] Gestión de destinos
- [x] Gestión de paquetes
- [x] Página de detalle de destinos
- [x] Galería de imágenes
- [x] Sistema de roles (admin/cliente)
- [x] Validación de formularios
- [x] Responsive design
- [x] Almacenamiento persistente

---

## 📞 Soporte

Para reportar bugs o sugerencias, crea un issue en el repositorio de GitHub:
https://github.com/paespa2/santa-marta

---

**Última actualización:** 16 de Enero, 2026
**Versión:** 2.0 - Sistema de Autenticación Completo

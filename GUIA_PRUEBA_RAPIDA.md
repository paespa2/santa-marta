# 🚀 GUÍA RÁPIDA DE PRUEBA

## Instrucciones para Probar todas las Funcionalidades

---

## 1️⃣ Iniciar Sesión como Cliente

### Pasos:
1. Haz click en **"Iniciar Sesión"** (botón rojo en la navbar)
2. Aparecerá un modal elegante
3. Ingresa:
   - **Email:** `juan@example.com`
   - **Contraseña:** `usuario123`
4. Haz click en **"Iniciar Sesión"**
5. ✅ El modal se cierra y aparece tu nombre en la navbar

### Qué ves ahora:
- Tu nombre con un avatar circular
- Un menú dropdown al hacer hover
- Opción "Mi Perfil"
- Opción "Cerrar Sesión"

---

## 2️⃣ Explorar tu Perfil

### Pasos:
1. Haz hover sobre tu nombre (o click en mobile)
2. Haz click en **"👤 Mi Perfil"**
3. Se abre un modal con:
   - Tu nombre y email
   - Teléfono (si lo especificaste)
   - Avatar
   - Fecha de registro

### Qué puedes hacer:
- **Editar Perfil:** Cambiar nombre, teléfono, avatar
- **Cambiar Contraseña:** Actualizar tu contraseña

---

## 3️⃣ Ver Destino Detallado

### Pasos:
1. Desplázate a la sección **"Destinos Principales"**
2. Haz click en **"Más Información"** de cualquier destino
3. ¡Se abre una modal hermosa con:
   - **Galería de imágenes:** Haz click en los thumbnails para cambiar la imagen principal
   - **Información completa:** Ubicación, entrada, horario
   - **Atractivos:** Tags de lo que puedes hacer
   - **Paquetes:** Lista de ofertas disponibles

### Qué puedes hacer:
- Ver imágenes de la galería
- Cambiar imagen principal haciendo click en thumbnails
- Ver puntuación y reseñas
- Hacer click en **"Reservar Ahora"** en cualquier paquete

---

## 4️⃣ Registrar un Nuevo Usuario

### Pasos:
1. Haz click en **"Registrarse"** (botón naranja en la navbar)
2. Se abre el modal de registro con campos:
   - Nombre completo
   - Email
   - Contraseña (mínimo 6 caracteres)
   - Confirmar contraseña
   - Teléfono (opcional)
3. Completa los campos
4. Haz click en **"Registrarse"**
5. ✅ Automáticamente se abre el login

### Luego:
- Inicia sesión con tu nuevo usuario
- Explora todas las características de cliente

---

## 5️⃣ Administración (Solo Admin)

### Primero, inicia como Admin:
1. Haz click en **"Iniciar Sesión"**
2. Ingresa:
   - **Email:** `admin@santamarta.com`
   - **Contraseña:** `admin123`
3. Haz click en **"Iniciar Sesión"**

### Ahora accede al Panel Admin:
1. Haz hover sobre tu nombre (Admin Santa Marta)
2. Verás una opción extra **"⚙️ Panel Admin"**
3. Haz click para abrir el panel

### Panel Admin tiene 3 tabs:

#### 🏖️ **Tab 1: Destinos**
**Ver destinos:**
- Lista todos los destinos actuales
- Muestra: Nombre, descripción, ubicación, atractivos

**Crear destino:**
- Haz click en "➕ Agregar Nuevo Destino"
- Completa el formulario con:
  - Nombre
  - Descripción corta
  - Descripción larga
  - URL de imagen principal
  - URLs de imágenes adicionales
  - Ubicación
  - Precio de entrada
  - Atractivos (separados por comas)
- Haz click en "Guardar Destino"

**Editar destino:**
- Busca el destino en la lista
- Haz click en "✏️ Editar"
- Modifica los campos
- Haz click en "Guardar Cambios"

**Eliminar destino:**
- Busca el destino
- Haz click en "🗑️ Eliminar"
- Confirma la eliminación

#### 📦 **Tab 2: Paquetes**
**Ver paquetes:**
- Lista todos los paquetes turísticos

**Crear paquete:**
- Haz click en "➕ Crear Paquete Turístico"
- Selecciona el destino asociado
- Completa:
  - Nombre del paquete
  - Duración (ej: "1 día")
  - Precio (ej: "COP $150,000")
  - Descripción
  - Qué incluye (una línea por item)
  - Itinerario (un día por línea)
- Haz click en "Guardar Paquete"

**Resultado:**
- El paquete aparece en la página de detalle del destino
- Clientes pueden reservarlo

#### 👥 **Tab 3: Usuarios**
**Ver lista completa:**
- Muestra todos los usuarios registrados
- Email, nombre, rol, teléfono
- Fecha de registro

---

## 6️⃣ Probar Toda la Experiencia Cliente

### Flujo Completo:
1. **Registra un nuevo usuario**
   - Usa tu email personal
   - Contraseña segura
   
2. **Inicia sesión**
   - Verifica que aparece tu nombre
   
3. **Explora destinos**
   - Abre varios destinos
   - Mira imágenes
   - Lee información
   
4. **Reserva un paquete**
   - Haz click en "Reservar Ahora"
   - Recibirás confirmación
   
5. **Edita tu perfil**
   - Abre "Mi Perfil"
   - Cambia nombre o teléfono
   - Verifica que se guarden los cambios
   
6. **Cambia contraseña**
   - Desde "Mi Perfil"
   - Ingresa contraseña actual
   - Nueva contraseña
   - Confirma
   
7. **Cierra sesión**
   - Del menú de usuario
   - Aparecen nuevamente los botones Login/Registro

---

## 🎨 Elementos Visuales a Notar

### Navbar
- ✨ Logo con icono de montaña
- ✨ Enlaces de navegación con subrayado animado
- ✨ Botones de autenticación coloridos
- ✨ Menú de usuario con dropdown

### Modales
- ✨ Fondos oscuros semitransparentes
- ✨ Animaciones de entrada y salida
- ✨ Botón X para cerrar
- ✨ Validación visual de campos

### Destinos
- ✨ Tarjetas con gradientes coloridos
- ✨ Galería de imágenes responsiva
- ✨ Información bien estructurada
- ✨ Paquetes en tarjetas con sombra

### Panel Admin
- ✨ 3 tabs organizados
- ✨ Tablas con información
- ✨ Formularios con validación
- ✨ Botones de acción claros

---

## ❓ Preguntas Frecuentes

### ¿Dónde se guardan los datos?
En **localStorage** del navegador. Si limpias caché, se pierden.

### ¿Puedo tener múltiples usuarios?
Sí, cada uno con su propia sesión. Pero solo uno puede estar logueado a la vez.

### ¿Qué pasa si me cierro sesión?
Tus datos se guardan. Al volver a login entrarás con los mismos datos.

### ¿Puedo cambiar mi contraseña?
Sí, desde "Mi Perfil" → "Cambiar Contraseña"

### ¿Solo admin puede crear destinos?
Sí, el panel admin solo aparece para usuarios con rol = "admin"

### ¿Qué pasa si hago "Reservar Ahora"?
Actualmente muestra un mensaje de confirmación. En el futuro se conectará con un sistema de pagos.

---

## 🔐 Seguridad

### ⚠️ Importante:
- Las contraseñas se guardan en **texto plano** (para desarrollo)
- En producción usar **bcrypt**
- Los datos no se sincronizan con servidor
- Sin encriptación HTTPS

### Credenciales de Prueba son Públicas:
- No usar credenciales reales para desarrollo
- En producción: cambiar contraseñas

---

## ✅ Checklist de Prueba

- [ ] Login funciona
- [ ] Registro funciona
- [ ] Perfil se puede editar
- [ ] Contraseña se puede cambiar
- [ ] Panel admin es visible (admin only)
- [ ] Destinos se pueden crear
- [ ] Destinos se pueden editar
- [ ] Destinos se pueden eliminar
- [ ] Paquetes se pueden crear
- [ ] Galería de imágenes funciona
- [ ] Reserva registra evento
- [ ] Logout borra sesión
- [ ] Responsive en móvil
- [ ] Responsive en tablet
- [ ] Responsive en desktop

---

## 🎬 Grabación de Pantalla (Pasos)

Si quieres grabar los pasos:

1. Abre http://localhost:8000
2. Haz click en "Registrarse"
3. Completa formulario
4. Haz click en "Más Información" de un destino
5. Explora la galería
6. Vuelve y haz login como admin
7. Abre "Panel Admin"
8. Crea un nuevo destino
9. Crea un paquete para ese destino
10. Vuelve a cliente y ve el nuevo destino

---

## 📱 Pruebas en Móvil

En el navegador del móvil:
1. Abre `http://[tu-ip]:8000` (cambiar localhost por IP)
2. Los modales se adaptan al tamaño
3. El menú hamburguesa aparece en pantallas pequeñas
4. Los formularios son fáciles de llenar
5. Las imágenes se ven bien

---

## 🐛 Si Algo No Funciona

1. **Abre la consola:** F12 → Pestaña Console
2. **Busca errores:** Aparecerán en rojo
3. **Verifica localStorage:**
   ```javascript
   localStorage.getItem('santa_marta_usuario_actual')
   ```
4. **Limpia y recarga:**
   ```javascript
   localStorage.clear();
   location.reload();
   ```

---

**¡Disfruta probando el sistema! 🎉**

Cualquier pregunta o problema, reporta en:
https://github.com/paespa2/santa-marta/issues


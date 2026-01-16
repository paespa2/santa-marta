# 🧪 Guía de Prueba del Panel Administrativo Mejorado

## 📍 Estado Actual

✅ **Servidor HTTP:** Ejecutándose en `http://localhost:8000`  
✅ **Aplicación:** Santa Marta Tours (Sitio Web de Turismo)  
✅ **Panel Admin:** v2.0 - Completamente mejorado  
✅ **Base de datos:** localStorage (navegador)  
✅ **Commits:** 9 total en GitHub  

---

## 🎯 Objetivo de Prueba

Verificar que el nuevo panel administrativo mejorado funcione correctamente con:
- Dashboard con estadísticas
- Gestión completa de usuarios
- Gestión de destinos y paquetes
- Registro de actividades
- Configuración del sitio
- Interfaz responsive
- Persistencia de datos

---

## 🚀 Pasos para Probar

### 1️⃣ Acceder a la Aplicación

```
Abre en el navegador: http://localhost:8000
Deberías ver la página principal de Santa Marta Tours
```

**Verificación:**
- ✅ Logo visible ("🏔 Santa Marta Tours")
- ✅ Navegación superior (Inicio, Destinos, Actividades, Galería, Contacto)
- ✅ Botones "Iniciar Sesión" y "Registrarse"
- ✅ Destinos turísticos visibles

---

### 2️⃣ Iniciar Sesión como Administrador

```
1. Haz clic en "Iniciar Sesión"
2. Usa estas credenciales:
   Email: admin@santamarta.com
   Contraseña: admin123
3. Presiona "Entrar"
```

**Verificación:**
- ✅ Modal de login aparece
- ✅ Se aceptan las credenciales
- ✅ Se cierra el modal
- ✅ Aparece menú de usuario arriba (nombre + icono)

---

### 3️⃣ Abrir el Panel Administrativo

```
1. Haz clic en el icono de usuario (arriba derecha)
2. Se despliega un menú con opciones:
   - 👤 Mi Perfil
   - ⚙️ Panel Admin
   - 🚪 Cerrar Sesión
3. Haz clic en "⚙️ Panel Admin"
```

**Verificación:**
- ✅ Menú dropdown aparece
- ✅ Se abre el Panel Administrativo Mejorado
- ✅ Interfaz divide en sidebar + contenido

---

### 4️⃣ Explorar el Dashboard

```
El panel debe mostrar:
- Sidebar izquierdo con 6 opciones:
  📊 Dashboard
  👥 Usuarios
  🏖️ Destinos
  📦 Paquetes
  📝 Actividades
  ⚙️ Configuración

- Contenido principal con:
  5 Tarjetas de estadísticas (usuarios, destinos, paquetes)
  Botones de acciones rápidas
  Actividades recientes
```

**Verificación Dashboard:**
- ✅ Usuarios Total: 2
- ✅ Administradores: 1
- ✅ Clientes: 1
- ✅ Destinos: 6
- ✅ Paquetes: 2
- ✅ 3 botones de acción rápida

---

### 5️⃣ Crear Nuevo Usuario

```
1. En el Panel Admin, haz clic en "👥 Usuarios"
2. Presiona el botón "➕ Crear Nuevo Usuario"
3. Completa el formulario modal:
   Nombre Completo: Test User
   Email: test@example.com
   Contraseña: Test123!
   Teléfono: +57 310 1234567
   Rol: Cliente
4. Presiona "Crear Usuario"
```

**Verificación:**
- ✅ Modal de formulario aparece
- ✅ Se guarda el usuario
- ✅ Aparece en la tabla de usuarios
- ✅ En actividades: "usuario_creado"
- ✅ Dashboard muestra 3 usuarios ahora

---

### 6️⃣ Buscar Usuario

```
En la sección de Usuarios:
1. Escribe "test" en el campo de búsqueda
2. La tabla se filtra automáticamente
```

**Verificación:**
- ✅ Solo aparece el usuario que coincide
- ✅ La búsqueda es en tiempo real
- ✅ Vuelve al escribir algo diferente

---

### 7️⃣ Cambiar Rol de Usuario

```
En la tabla de usuarios:
1. Busca el usuario "juan"
2. Haz clic en el icono 🔄 (cambiar rol)
3. Confirma en el diálogo emergente
4. El rol cambia de "Cliente" a "Admin"
```

**Verificación:**
- ✅ Diálogo de confirmación aparece
- ✅ El rol se actualiza
- ✅ Badge de color cambia
- ✅ En Actividades: "rol_cambiado"
- ✅ Dashboard actualiza contador de admins

---

### 8️⃣ Crear Destino

```
1. Haz clic en "🏖️ Destinos"
2. Presiona "➕ Crear Nuevo Destino"
3. Completa el formulario:
   Nombre: Playas de Rodadero
   Descripción Corta: Playa urbana con arena blanca
   Descripción Larga: Playas hermosas a solo 10 km del centro
   Imagen: https://images.unsplash.com/photo-1507525428034-b723cf961d3e
   Ubicación: Gaira, Santa Marta
   Atractivos: Playa, Gastronomía, Vida nocturna
   Entrada: COP $0 (Acceso público)
4. Presiona "Crear Destino"
```

**Verificación:**
- ✅ Modal formulario aparece
- ✅ Destino se guarda y aparece en lista
- ✅ Se muestra thumbnail de imagen
- ✅ En actividades: "destino_creado"
- ✅ Dashboard muestra 7 destinos

---

### 9️⃣ Crear Paquete

```
1. Haz clic en "📦 Paquetes"
2. Presiona "➕ Crear Nuevo Paquete"
3. Completa el formulario:
   Nombre: Weekend Rodadero
   Destino: Playas de Rodadero
   Duración: 2 días y 1 noche
   Precio: COP $450,000 por persona
   Descripción: Incluye hotel 4 estrellas, desayuno y tour guiado
4. Presiona "Crear Paquete"
```

**Verificación:**
- ✅ Paquete se crea exitosamente
- ✅ Aparece en tabla con información
- ✅ Se vincula al destino correcto
- ✅ En actividades: "paquete_creado"
- ✅ Dashboard muestra 3 paquetes

---

### 🔟 Ver Actividades

```
1. Haz clic en "📝 Actividades"
2. Verás un historial con:
   - Acciones realizadas (usuario_creado, destino_creado, etc)
   - Descripción de cada acción
   - Usuario que la realizó (admin)
   - Fecha y hora exacta
```

**Verificación:**
- ✅ Se muestran todas las acciones en orden
- ✅ Incluye: usuario creado, rol cambiado, destino, paquete
- ✅ Cada entrada tiene timestamp completo
- ✅ Últimas acciones aparecen primero

---

### 1️⃣1️⃣ Configuración del Sitio

```
1. Haz clic en "⚙️ Configuración"
2. Verás campos para:
   Nombre del Sitio
   Email de Contacto
   Teléfono
   Dirección
   Color Primario (selector visual)
3. Cambia el nombre a: "Santa Marta Adventure Tours"
4. Presiona "Guardar Configuración"
```

**Verificación:**
- ✅ Formulario carga con valores actuales
- ✅ Selector de color funciona
- ✅ Se guardan los cambios
- ✅ En actividades: "configuracion_actualizada"
- ✅ Los cambios persisten

---

### 1️⃣2️⃣ Responsividad

```
1. Abre Developer Tools (F12)
2. Activa Responsive Design Mode (Ctrl+Shift+M)
3. Prueba con diferentes tamaños:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1366px
```

**Verificación:**
- ✅ En mobile: menú se reorganiza horizontalmente
- ✅ Tablas tienen scroll horizontal si es necesario
- ✅ Elementos se adaptan al ancho
- ✅ Botones son tocables
- ✅ Texto es legible

---

### 1️⃣3️⃣ Persistencia de Datos

```
1. Cierra completamente el navegador (Ctrl+Q)
2. Vuelve a abrir: http://localhost:8000
3. Inicia sesión nuevamente
4. Abre Panel Admin → Usuarios
```

**Verificación:**
- ✅ El usuario "Test User" sigue presente
- ✅ El rol de Juan cambió a Admin (persiste)
- ✅ Destino "Playas de Rodadero" sigue ahí
- ✅ Paquete "Weekend Rodadero" persiste
- ✅ Historial de actividades se mantiene

---

### 1️⃣4️⃣ Logout y Cambio de Usuario

```
1. En menú de usuario → "🚪 Cerrar Sesión"
2. Se recarga la página
3. Inicia sesión con otro usuario:
   Email: test@example.com
   Contraseña: Test123!
4. Intenta abrir Panel Admin
```

**Verificación:**
- ✅ Logout funciona correctamente
- ✅ Vuelve a la interfaz de login
- ✅ El nuevo usuario inicia sesión
- ✅ NO puede ver Panel Admin (es cliente)
- ✅ Aparece mensaje: "Solo administradores pueden acceder"

---

### 1️⃣5️⃣ Editar Destino

```
1. Haz clic en "🏖️ Destinos"
2. En el destino que creaste, haz clic en ✏️
3. Modifica algunos campos:
   Cambiar descripción
   Cambiar atractivos
4. Presiona "Actualizar Destino"
```

**Verificación:**
- ✅ Modal de edición se abre
- ✅ Campos contienen datos actuales
- ✅ Cambios se guardan
- ✅ En actividades: "destino_editado"
- ✅ Lista se actualiza automáticamente

---

### 1️⃣6️⃣ Eliminar Elemento

```
1. En la tabla de usuarios, busca "Test User"
2. Haz clic en 🗑️
3. Confirma en el diálogo: "¿Eliminar este usuario?"
4. El usuario desaparece de la lista
```

**Verificación:**
- ✅ Diálogo de confirmación aparece
- ✅ Usuario se elimina permanentemente
- ✅ En actividades: "usuario_eliminado"
- ✅ Total de usuarios en dashboard disminuye
- ✅ No se puede recuperar (sin undo)

---

## 📋 Checklist de Pruebas

```
FUNCIONALIDADES PRINCIPALES:
☐ Dashboard carga correctamente
☐ Estadísticas muestran números correctos
☐ Botones de acción rápida funcionan

GESTIÓN DE USUARIOS:
☐ Crear usuario nuevo funciona
☐ Búsqueda filtra usuarios
☐ Cambiar rol se ejecuta
☐ Eliminar usuario funciona
☐ Tabla muestra datos correctos

GESTIÓN DE DESTINOS:
☐ Crear destino funciona
☐ Formulario valida campos
☐ Lista muestra destinos
☐ Editar destino funciona
☐ Eliminar destino funciona

GESTIÓN DE PAQUETES:
☐ Crear paquete funciona
☐ Se vincula a destino correctamente
☐ Tabla muestra paquetes
☐ Eliminar paquete funciona

REGISTRO DE ACTIVIDADES:
☐ Se registran todas las acciones
☐ Muestra tipo, descripción, usuario, fecha
☐ Orden cronológico inverso (más reciente primero)

CONFIGURACIÓN:
☐ Formulario carga valores
☐ Se guardan cambios
☐ Se registra en actividades

INTERFAZ:
☐ Sidebar responsive
☐ Colores consistentes
☐ Animaciones fluidas
☐ Modales funcionan
☐ No hay errores en consola

DATOS:
☐ Persisten después de cerrar navegador
☐ localStorage actualiza correctamente
☐ No hay corrupción de datos
```

---

## ⚠️ Posibles Errores y Soluciones

### Error 1: "No tienes permisos de administrador"
```
Causa: No iniciaste sesión como admin
Solución: Usa admin@santamarta.com / admin123
```

### Error 2: Panel no carga
```
Causa: admin-dashboard.js no cargó
Solución: F12 → Console → Busca errores
Verifica que el archivo existe: js/admin-dashboard.js
```

### Error 3: Datos no se guardan
```
Causa: localStorage está deshabilitado
Solución: 
- Abre DevTools (F12)
- Storage → LocalStorage
- Verifica que haya datos guardados
- Habilita localStorage si está bloqueado
```

### Error 4: Estilos no se aplican
```
Causa: CSS no cargó completamente
Solución:
- Recarga la página (Ctrl+R)
- Limpia cache (Ctrl+Shift+Delete)
- Verifica en DevTools que los estilos se carguen
```

### Error 5: Búsqueda no funciona
```
Causa: Función de filtro tiene error
Solución:
- Abre Console (F12)
- Busca errores JavaScript
- Recarga el panel
```

---

## 🔍 Verificación Técnica

### Abrir Developer Tools (F12)

**Ir a Console:**
```
Debe estar limpia sin errores
Si hay errores en rojo:
  - Nota el mensaje
  - Busca la línea en el código
  - Reporta el problema
```

**Ir a Storage → LocalStorage:**
```
Debe estar:
santa_marta_usuarios
santa_marta_destinos
santa_marta_paquetes
santa_marta_registro_actividades
santa_marta_configuracion

Click en cada una para ver sus datos
```

**Ir a Network:**
```
Al crear elementos:
- admin-dashboard.js debe cargar (200 OK)
- No debe haber errores 404
- Los datos se guardan en localStorage (sin peticiones HTTP)
```

---

## 📊 Datos de Prueba

### Usuarios Precargados
```
Admin:
  Email: admin@santamarta.com
  Contraseña: admin123
  Rol: Administrador

Cliente:
  Email: juan@example.com
  Contraseña: usuario123
  Rol: Cliente
```

### Destinos Precargados (6)
```
1. Ciudad Perdida
2. Parque Tayrona
3. Playas de Rodadero
4. Sierra Nevada
5. Cabo San Juan
6. Arrecife de Coral
```

### Paquetes Precargados (2)
```
1. Expedición a Ciudad Perdida (4 días)
2. Tour Básico Tayrona (2 días)
```

---

## ✅ Criterios de Éxito

El panel administrativo se considera **EXITOSO** si:

```
✅ Todas las funcionalidades funcionan sin errores
✅ Los datos se guardan correctamente
✅ Las actividades se registran automáticamente
✅ La interfaz es responsive
✅ No hay errores en la consola JavaScript
✅ Persisten datos después de cerrar navegador
✅ Interfaz es intuitiva y fácil de usar
✅ Rendimiento es fluido sin lag
✅ Todos los botones responden
✅ Los formularios validan correctamente
```

---

## 📞 Reporte de Problemas

Si encuentras algún problema:

```
1. Anota exactamente qué hiciste
2. Qué resultado esperabas
3. Qué resultado obtuviste
4. Captura de pantalla si es posible
5. Error en consola (F12 → Console)
6. Datos en localStorage (F12 → Storage)
7. Tu navegador y versión
8. Sistema operativo
9. Hora y fecha del problema
```

---

## 🎓 Próximos Pasos

Después de completar las pruebas:

```
1. ✅ Verificar que todo funciona
2. ✅ Documentar problemas encontrados
3. ✅ Reportar errores al equipo
4. ✅ Esperar correcciones
5. ✅ Hacer pruebas de regresión
6. ✅ Aprobar para producción
```

---

**Fecha de Prueba:** Enero 2026  
**Versión:** 2.0  
**Estado:** Listo para Testing  
**Servidor:** http://localhost:8000  
**Repositorio:** https://github.com/paespa2/santa-marta

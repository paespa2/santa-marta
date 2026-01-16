# 📊 Guía del Panel Administrativo Mejorado

## 🎯 Descripción General

El nuevo panel administrativo proporciona una interfaz completa para que los administradores gestionen todos los aspectos del sitio de Santa Marta Tours. Con un diseño moderno y funcionalidades avanzadas, es la herramienta central de control del proyecto.

---

## 🚀 Características Principales

### 1. **Dashboard** 📊
El dashboard es la primera pantalla que ves al abrir el panel admin. Muestra:

- **Estadísticas Clave:**
  - Total de usuarios en el sistema
  - Número de administradores
  - Número de clientes
  - Total de destinos
  - Total de paquetes

- **Acciones Rápidas:**
  - Botón para crear nuevo destino
  - Botón para crear nuevo paquete
  - Botón para crear nuevo usuario

- **Actividades Recientes:**
  - Historial de las últimas acciones del sistema

---

### 2. **Gestión de Usuarios** 👥

#### Características:
- ✅ Ver lista completa de usuarios
- ✅ Buscar usuarios por nombre o email
- ✅ Cambiar rol (cliente ↔ admin)
- ✅ Crear nuevos usuarios
- ✅ Eliminar usuarios
- ✅ Ver información detallada (nombre, email, teléfono, fecha de registro)

#### Cómo crear un usuario:
1. Haz clic en "👥 Usuarios" en el menú lateral
2. Presiona el botón "➕ Crear Nuevo Usuario"
3. Completa el formulario:
   - **Nombre Completo:** Nombre del usuario
   - **Email:** Correo único
   - **Contraseña:** Contraseña inicial
   - **Teléfono:** Número de contacto (opcional)
   - **Rol:** Selecciona "Cliente" o "Administrador"
4. Presiona "Crear Usuario"

#### Cómo cambiar rol de usuario:
1. En la tabla de usuarios, haz clic en el icono 🔄 (cambiar rol)
2. Confirma la acción en el diálogo emergente
3. El rol se actualizará automáticamente

---

### 3. **Gestión de Destinos** 🏖️

#### Características:
- ✅ Ver todos los destinos
- ✅ Crear nuevos destinos
- ✅ Editar destinos existentes
- ✅ Eliminar destinos
- ✅ Administrar imágenes y descripciones

#### Crear un destino:
1. Haz clic en "🏖️ Destinos" en el menú lateral
2. Presiona "➕ Crear Nuevo Destino"
3. Completa los campos:
   - **Nombre:** Nombre del destino
   - **Descripción Corta:** Resumen (máx 200 caracteres)
   - **Descripción Larga:** Información detallada
   - **Imagen Principal:** URL de la imagen
   - **Ubicación:** Ubicación geográfica
   - **Atractivos:** Lista de puntos de interés (separados por comas)
   - **Entrada:** Información de acceso
4. Presiona "Crear Destino"

#### Editar un destino:
1. En la lista de destinos, haz clic en el icono ✏️
2. Modifica los campos que necesites
3. Presiona "Actualizar Destino"

#### Eliminar un destino:
1. En la lista de destinos, haz clic en el icono 🗑️
2. Confirma la eliminación

---

### 4. **Gestión de Paquetes** 📦

#### Características:
- ✅ Ver todos los paquetes turísticos
- ✅ Crear nuevos paquetes
- ✅ Vincular paquetes con destinos
- ✅ Definir precios y duraciones
- ✅ Eliminar paquetes

#### Crear un paquete:
1. Haz clic en "📦 Paquetes" en el menú lateral
2. Presiona "➕ Crear Nuevo Paquete"
3. Completa el formulario:
   - **Nombre:** Nombre del paquete turístico
   - **Destino:** Selecciona el destino destino
   - **Duración:** Duración del viaje (ej: 3 días, 1 semana)
   - **Precio:** Precio del paquete
   - **Descripción:** Detalles del paquete
4. Presiona "Crear Paquete"

#### Eliminar un paquete:
1. En la tabla de paquetes, haz clic en el icono 🗑️
2. Confirma la eliminación

---

### 5. **Registro de Actividades** 📝

#### Características:
- ✅ Historial completo de todas las acciones
- ✅ Ver quién, qué, cuándo y dónde
- ✅ Tipos de actividades:
  - Usuario creado
  - Usuario eliminado
  - Rol cambiado
  - Destino creado
  - Destino editado
  - Destino eliminado
  - Paquete creado
  - Paquete eliminado
  - Configuración actualizada

#### Ver actividades:
1. Haz clic en "📝 Actividades" en el menú lateral
2. Verás un historial con:
   - Tipo de acción
   - Descripción
   - Usuario que la realizó
   - Fecha y hora exacta

**Nota:** Las actividades se registran automáticamente en cada acción realizada en el panel.

---

### 6. **Configuración del Sitio** ⚙️

#### Características:
- ✅ Modificar información general
- ✅ Cambiar datos de contacto
- ✅ Personalizar colores del sitio
- ✅ Configuración centralizada

#### Configurar el sitio:
1. Haz clic en "⚙️ Configuración" en el menú lateral
2. Modifica los campos:
   - **Nombre del Sitio:** Nombre visible
   - **Email de Contacto:** Email para consultas
   - **Teléfono:** Número de contacto
   - **Dirección:** Ubicación física
   - **Color Primario:** Color de referencia (selector de color)
3. Presiona "Guardar Configuración"

**Nota:** Los cambios se guardan en localStorage y persistirán entre sesiones.

---

## 🔐 Seguridad y Permisos

### ¿Quién puede acceder?
- Solo usuarios con rol **Admin** pueden acceder al panel administrativo
- Los administradores pueden ver y gestionar todos los datos del sistema

### Cuentas de prueba:
```
Email: admin@santamarta.com
Contraseña: admin123
Rol: Administrador ✅

Email: juan@example.com
Contraseña: usuario123
Rol: Cliente ❌ (No tiene acceso al panel)
```

---

## 💾 Almacenamiento de Datos

Todos los datos se guardan en **localStorage** del navegador:

| Clave | Contenido |
|-------|-----------|
| `santa_marta_usuarios` | Base de datos de usuarios |
| `santa_marta_destinos` | Lista de destinos |
| `santa_marta_paquetes` | Lista de paquetes |
| `santa_marta_registro_actividades` | Historial de acciones |
| `santa_marta_configuracion` | Configuración del sitio |

---

## 🎨 Diseño y Navegación

### Estructura del Panel:

```
┌─────────────────────────────────────────┐
│  PANEL ADMINISTRATIVO                   │
├────────────────────┬────────────────────┤
│                    │                    │
│     MENÚ LATERAL   │   CONTENIDO PRINCIPAL
│  (6 opciones)      │                    │
│  - Dashboard       │  - Estadísticas    │
│  - Usuarios        │  - Tabla de datos  │
│  - Destinos        │  - Formularios     │
│  - Paquetes        │  - Historial       │
│  - Actividades     │  - Configuración   │
│  - Configuración   │                    │
│                    │                    │
└────────────────────┴────────────────────┘
```

### Colores y Temas:
- **Color Primario:** Naranja (#FF6B35) - Botones y acentos
- **Color Secundario:** Azul (#004E89) - Encabezados y fondos
- **Color de Acento:** Celeste (#1B9CFC) - Elementos interactivos

---

## 📋 Flujos de Trabajo Comunes

### Flujo 1: Crear Destino y Agregar Paquetes
1. Abre "Destinos"
2. Crea nuevo destino con imagen y descripción
3. Abre "Paquetes"
4. Crea paquete vinculado al destino
5. Verifica en el dashboard

### Flujo 2: Gestionar Equipo de Trabajo
1. Abre "Usuarios"
2. Crea nuevos usuarios como administradores o clientes
3. Monitorea en dashboard el total de usuarios
4. Usa "Actividades" para auditar cambios

### Flujo 3: Mantenimiento del Sitio
1. Abre "Configuración"
2. Actualiza información de contacto
3. Modifica colores si es necesario
4. Guarda cambios
5. Verifica el log en "Actividades"

---

## ⚡ Tips y Trucos

✅ **Búsqueda rápida:** En la tabla de usuarios, usa el campo de búsqueda para encontrar rápidamente a cualquier usuario.

✅ **Acciones rápidas:** El dashboard tiene botones de acceso rápido para crear destinos, paquetes y usuarios sin navegar.

✅ **Historial:** Siempre puedes ver qué se hizo, cuándo y quién lo hizo en la sección de Actividades.

✅ **Valores por defecto:** Los nuevos usuarios/destinos heredan configuraciones por defecto si no se especifican todos los campos.

✅ **Roles:** Un usuario puede cambiar de admin a cliente y viceversa desde el panel en cualquier momento.

---

## 🐛 Resolución de Problemas

### Problema: No puedo acceder al panel admin
**Solución:** Verifica que tu usuario tenga rol "admin". Pregunta a otro administrador que cambie tu rol.

### Problema: Los cambios no se guardan
**Solución:** Revisa que el localStorage esté habilitado en tu navegador. Intenta limpiar el caché.

### Problema: No veo datos en el dashboard
**Solución:** Asegúrate de haber creado al menos un destino o usuario primero.

### Problema: Se me cierra el panel de repente
**Solución:** Esto es normal al hacer cambios. El panel se actualiza automáticamente. Vuelve a abrirlo.

---

## 📞 Soporte

Para reportar problemas o sugerir mejoras, contacta al equipo de desarrollo.

---

**Última actualización:** Enero 2026  
**Versión:** 2.0 - Admin Dashboard Mejorado

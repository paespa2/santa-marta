# 🎬 Ejemplos de Uso del Panel Administrativo

## Escenario 1: Primer uso - Crear contenido turístico

### Paso 1: Iniciar sesión como administrador
```
1. Abre http://localhost:8000
2. Haz clic en "Iniciar Sesión"
3. Email: admin@santamarta.com
4. Contraseña: admin123
5. Presiona "Entrar"
```

### Paso 2: Acceder al panel administrativo
```
1. Después de iniciar sesión, haz clic en el icono de usuario (arriba derecha)
2. Selecciona "⚙️ Panel Admin"
3. Se abre el panel mejorado con el dashboard
```

### Paso 3: Ver estadísticas iniciales
```
Dashboard mostrará:
- Total de usuarios: 2 (admin + juan)
- Administradores: 1
- Clientes: 1
- Total de destinos: 6 (precargados)
- Total de paquetes: 2 (ejemplos)
- Actividades recientes: (vacío si es primera vez)
```

### Paso 4: Crear un nuevo destino
```
1. Haz clic en "🏖️ Destinos" en el menú lateral
2. Presiona "➕ Crear Nuevo Destino"
3. Completa el formulario:

Nombre: Parque Tayrona
Descripción Corta: Selva tropical con playas vírgenes
Descripción Larga: El Parque Nacional Tayrona es una joya de Colombia, 
donde la cordillera se encuentra con el mar Caribe. Playas 
cristalinas, jungla virgen y arqueología precolombina.

Imagen Principal: https://images.unsplash.com/photo-1469854523086-cc02fe5d8800

Ubicación: Aracataca, Magdalena
Atractivos: Playa Brava, Ciudad Perdida, Arrecife de coral
Entrada: COP $15,500 por persona

4. Presiona "Crear Destino"
5. El destino aparecerá en la lista
```

### Paso 5: Crear un paquete turístico
```
1. Haz clic en "📦 Paquetes" en el menú lateral
2. Presiona "➕ Crear Nuevo Paquete"
3. Completa el formulario:

Nombre: Aventura Tayrona 3 Días
Destino: Parque Tayrona (selecciona de la lista)
Duración: 3 días y 2 noches
Precio: COP $890,000 por persona
Descripción: Incluye transporte, hospedaje en cabaña, 
desayuno diario, caminata guiada y snorkel en arrecifes

4. Presiona "Crear Paquete"
5. El paquete se vincula automáticamente al destino
```

---

## Escenario 2: Gestión de equipo - Agregar administrador

### Objetivo: Crear una nueva cuenta de administrador para un miembro del equipo

```
1. Haz clic en "👥 Usuarios" en el menú lateral
2. Presiona "➕ Crear Nuevo Usuario"
3. Completa los datos:

Nombre Completo: María González
Email: maria@santamartaours.com
Contraseña: Maria.2024!
Teléfono: +57 310 456 7890
Rol: Administrador (selecciona de dropdown)

4. Presiona "Crear Usuario"
5. En la tabla de usuarios, verás a María con rol "👨‍💼 Admin"
```

### Hacer auditoría de cambios:
```
1. Haz clic en "📝 Actividades" en el menú lateral
2. Verás en el log:
   - usuario_creado: Usuario creado: María González (admin)
   - Fecha y hora exacta
   - Admin que lo creó
```

---

## Escenario 3: Operaciones administrativas - Cambiar rol de usuario

### Objetivo: Promover a un cliente a administrador

```
Situación: Juan (cliente) ha trabajado bien con nosotros 
y queremos hacerlo administrador.

1. Haz clic en "👥 Usuarios"
2. Busca a Juan usando el campo de búsqueda: "juan"
3. Aparecerá: juan@example.com (👤 Cliente)
4. Haz clic en el botón 🔄 (cambiar rol)
5. Confirma: "¿Cambiar rol de Juan González a admin?"
6. Presiona OK
7. Juan ahora aparecerá como "👨‍💼 Admin"
8. Verifica en "Actividades" que se registró: "rol_cambiado: Rol de Juan González cambiado a admin"
```

---

## Escenario 4: Mantenimiento - Actualizar configuración

### Objetivo: Cambiar los datos de contacto del sitio

```
1. Haz clic en "⚙️ Configuración" en el menú lateral
2. Actualiza los campos:

Nombre del Sitio: Santa Marta Tours & Adventures
Email de Contacto: reservas@santamarta-tours.com
Teléfono: +57 5 4211234
Dirección: Calle 22 No. 4-56, Santa Marta

Color Primario: (selector) - selecciona un naranja más brillante

3. Presiona "Guardar Configuración"
4. Verás el registro en "Actividades": 
   "configuracion_actualizada: Configuración del sitio actualizada"
```

---

## Escenario 5: Búsqueda y filtrado - Encontrar usuarios

### Objetivo: Encontrar a un usuario específico rápidamente

```
Tienes 50+ usuarios en el sistema y necesitas encontrar a "Carlos"

1. Haz clic en "👥 Usuarios"
2. En el campo "Buscar usuario...", escribe: "carlos"
3. La tabla se filtra automáticamente mostrando solo usuarios 
   que coincidan con "carlos" en nombre o email
4. Puedes ver sus detalles, rol, teléfono y fecha de registro
5. Haz clic en ✏️ para editar o 🔄 para cambiar rol
```

---

## Escenario 6: Auditoría completa - Ver historial de actividades

### Objetivo: Revisar todas las acciones realizadas hoy

```
1. Haz clic en "📝 Actividades"
2. Verás un listado con todas las acciones en orden de 
   más reciente a más antiguo:

Ejemplo de registro visible:
┌──────────────────────────────────────────────────┐
│ usuario_creado  │ Usuario creado: María González │
│ Por: admin      │ 2026-01-16 18:45:23           │
├──────────────────────────────────────────────────┤
│ rol_cambiado    │ Rol de Juan cambiado a admin   │
│ Por: admin      │ 2026-01-16 18:42:15           │
├──────────────────────────────────────────────────┤
│ paquete_creado  │ Paquete creado: Aventura...   │
│ Por: admin      │ 2026-01-16 18:35:42           │
└──────────────────────────────────────────────────┘

3. Puedes usar esto para auditoría y compliance
```

---

## Escenario 7: Flujo completo de una campaña

### Objetivo: Lanzar una nueva campaña turística "Semana de Playa"

```
PASO 1: Crear los destinos (🏖️ Destinos)
├─ Crear: Playas de Rodadero
├─ Crear: Bahía de Concha
└─ Crear: Punta de Betín

PASO 2: Crear paquetes para cada destino (📦 Paquetes)
├─ "Weekend Rodadero" vinculado a Playas de Rodadero
├─ "Concha Paradise" vinculado a Bahía de Concha
└─ "Adventure Betín" vinculado a Punta de Betín

PASO 3: Contratar guías turísticos (👥 Usuarios)
├─ Crear: Carlos Mendez (cliente)
├─ Crear: Laura Martínez (cliente)
└─ Crear: Roberto Pérez (cliente)

PASO 4: Verificar todo en Dashboard
├─ Total destinos: +3
├─ Total paquetes: +3
└─ Total usuarios: +3

PASO 5: Auditar en Actividades
└─ Ver registro de cada creación con timestamp

PASO 6: Publicar en redes
└─ Usar información del panel para marketing
```

---

## Errores Comunes y Soluciones

### Error 1: "No tienes permisos de administrador"
```
Causa: Intentas abrir el panel sin ser admin
Solución: 
1. Cierra sesión
2. Inicia con admin@santamarta.com / admin123
3. O pide a un admin que cambie tu rol
```

### Error 2: "Usuario ya existe"
```
Causa: Intentas crear un usuario con email duplicado
Solución:
1. Usa otro email
2. O busca el usuario existente y edítalo
3. Los emails deben ser únicos en el sistema
```

### Error 3: Los cambios no persisten
```
Causa: localStorage está deshabilitado
Solución:
1. Habilita localStorage en los ajustes de privacidad
2. Intenta en modo normal (no incógnito)
3. Limpia cache del navegador
```

### Error 4: Panel se cierra al hacer cambios
```
Causa: Esperado - el panel se actualiza tras cambios
Solución:
1. Esto es normal
2. Vuelve a abrir el panel admin
3. Verifica que el cambio se guardó
4. Busca en Actividades para confirmar
```

---

## Monitoreo y Métricas

### Usando el Dashboard para monitoreo:

```
Métrica 1: Crecimiento de usuarios
Cada día, nota el número en la card de "Usuarios Total"
Proyecta crecimiento mensual y anual.

Métrica 2: Contenido disponible
Card de "Destinos" y "Paquetes"
Mantén al menos 10-15 destinos activos.

Métrica 3: Equipo administrativo
Card de "Administradores"
Asegúrate de tener al menos 2-3 admins.

Métrica 4: Actividad
Revisa "Actividades recientes"
Muchas acciones = buen uso del sistema.
```

---

## Checklist Diario para Admin

```
☐ Verificar dashboard para estadísticas
☐ Revisar nuevas registraciones en Usuarios
☐ Confirmar que destinos/paquetes están actualizados
☐ Leer registro de Actividades
☐ Responder consultas de clientes
☐ Actualizar información de contacto si es necesario
☐ Hacer backup mental de números importantes
☐ Verificar colores/branding en Configuración
```

---

**Última actualización:** Enero 2026  
**Versión:** 2.0 - Con ejemplos prácticos

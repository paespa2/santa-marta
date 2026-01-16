# ⚡ INICIO RÁPIDO - 5 MINUTOS

## 🎯 Qué conseguirás en 5 minutos

✅ Sitio web turístico funcionando  
✅ Panel administrativo accesible  
✅ Ejemplos de datos listos para usar  

---

## 1️⃣ INSTALAR (30 segundos)

Abre tu terminal y ejecuta:

```bash
cd "c:\Users\ppaes\OneDrive\Escritorio\santa marta bombastic"
python -m http.server 8000
```

Deberías ver:
```
Serving HTTP on :: port 8000 (http://[::]:8000/)
```

---

## 2️⃣ ABRIR (5 segundos)

En tu navegador, abre:

```
http://localhost:8000
```

---

## 3️⃣ INICIAR SESIÓN (20 segundos)

### Opción A: Como Administrador (Completo)
```
1. Haz clic en "Iniciar Sesión"
2. Email: admin@santamarta.com
3. Password: admin123
4. Click "Entrar"
```

### Opción B: Como Cliente (Limitado)
```
1. Haz clic en "Iniciar Sesión"
2. Email: juan@example.com
3. Password: usuario123
4. Click "Entrar"
```

---

## 4️⃣ ACCEDER AL PANEL (20 segundos)

Si iniciaste como **ADMIN**:

```
1. Arriba derecha: Click en el icono 👤
2. Se abre un menú
3. Click en "⚙️ Panel Admin"
4. ¡Abierto!
```

---

## 5️⃣ EXPLORAR (2 minutos)

### 📊 Dashboard
Verás 5 tarjetas:
- 2 usuarios
- 6 destinos
- 2 paquetes

### 👥 Usuarios
Tabla con: admin, juan
Botones: Crear, Cambiar rol, Eliminar

### 🏖️ Destinos
6 destinos precargados:
- Ciudad Perdida
- Parque Tayrona
- Playas de Rodadero
- Sierra Nevada
- Cabo San Juan
- Arrecife de Coral

### 📦 Paquetes
2 paquetes de ejemplo

### 📝 Actividades
Historial de cambios

### ⚙️ Configuración
Datos del sitio personalizables

---

## 🎯 Primeras Acciones

### Crear un Usuario
```
1. Panel Admin → 👥 Usuarios
2. Click "➕ Crear Nuevo Usuario"
3. Llenar:
   Nombre: Tu Nombre
   Email: tumail@example.com
   Password: Password123
   Teléfono: +57 310 123 4567
   Rol: Cliente
4. Click "Crear Usuario"
```

### Crear un Destino
```
1. Panel Admin → 🏖️ Destinos
2. Click "➕ Crear Nuevo Destino"
3. Llenar:
   Nombre: Tu Destino
   Descripción: Breve descripción
   Imagen: URL de imagen
   Ubicación: Dónde está
4. Click "Crear Destino"
```

### Ver Actividades
```
1. Panel Admin → 📝 Actividades
2. Verás el historial de todo lo que hiciste
```

---

## 🔑 Cuentas de Prueba

| Rol | Email | Password |
|-----|-------|----------|
| 👨‍💼 Admin | admin@santamarta.com | admin123 |
| 👤 Cliente | juan@example.com | usuario123 |

---

## 📱 Probar Responsividad

1. Abre DevTools: `F12`
2. Click icono mobile: `Ctrl+Shift+M`
3. Cambia tamaño de pantalla
4. El sitio se adapta automáticamente

---

## ❌ Si algo no funciona

### Problema 1: Servidor no inicia
```
Solución: Asegúrate de tener Python instalado
python --version
```

### Problema 2: No puedo acceder al panel
```
Solución: Asegúrate de iniciar como admin
admin@santamarta.com / admin123
```

### Problema 3: Datos no se guardan
```
Solución: Abre DevTools (F12) → Storage → LocalStorage
Debe haber datos guardados ahí
```

---

## 📚 Próximos Pasos

### Para Aprender Más
```
1. Lee: README.md (5 min)
2. Lee: GUIA_ADMIN_DASHBOARD.md (15 min)
3. Lee: INDICE_COMPLETO_DOCUMENTACION.md (para navegar)
```

### Para Hacer Testing
```
1. Sigue: GUIA_PRUEBAS_ADMIN.md
2. 16 pasos completos para probar todo
```

### Para Personalizar
```
1. Edita: css/styles.css (colores)
2. Edita: index.html (textos)
3. Edita: js/admin-dashboard.js (funciones)
```

---

## 🎉 Listo!

¡Ya tienes Santa Marta Tours v2.0 ejecutándose localmente! 🏝️

**Lo que puedes hacer ahora:**
- ✅ Ver el sitio web
- ✅ Probar login
- ✅ Abrir panel admin
- ✅ Crear contenido
- ✅ Ver historial
- ✅ Personalizar

---

## 💡 Tips Pro

1. **Búsqueda rápida:** Ctrl+F para buscar en la página
2. **Modo offline:** Funciona sin internet (localStorage)
3. **Compartir:** Otros en tu red pueden acceder a tu_ip:8000
4. **Guardar cambios:** Se guardan automáticamente en localStorage
5. **Inspeccionar:** F12 → DevTools para ver datos

---

## 🔗 Enlaces Útiles

| Enlace | Descripción |
|--------|-------------|
| http://localhost:8000 | Sitio web local |
| https://github.com/paespa2/santa-marta | Repositorio GitHub |
| GUIA_ADMIN_DASHBOARD.md | Manual del admin |
| README.md | Documentación principal |

---

## 📞 Soporte Rápido

```
❓ Pregunta: ¿Cómo creo un usuario?
✅ Respuesta: Panel Admin → Usuarios → Crear

❓ Pregunta: ¿Dónde están mis datos?
✅ Respuesta: LocalStorage del navegador (F12 → Storage)

❓ Pregunta: ¿Puedo usar en móvil?
✅ Respuesta: Sí, es responsive

❓ Pregunta: ¿Necesito internet?
✅ Respuesta: No, funciona sin conexión

❓ Pregunta: ¿Puedo backup datos?
✅ Respuesta: Sí, expórtalos de localStorage
```

---

## ✨ Lo Que Ves en Pantalla

### Página Principal
```
[Logo] SANTA MARTA TOURS [Navegar] [Login/Register]
  |
  └─ HERO SECTION (Imagen grande)
     |
     ├─ SOBRE SANTA MARTA (Texto + estadísticas)
     |
     ├─ 6 DESTINOS (Cards con imágenes)
     |
     ├─ ACTIVIDADES (Cosas que hacer)
     |
     ├─ GALERÍA (Fotos)
     |
     ├─ CONTACTO (Formulario)
     |
     └─ FOOTER (Copyright + redes)
```

### Panel Admin
```
PANEL ADMINISTRATIVO
├─ SIDEBAR (Menú izquierdo con 6 opciones)
│  ├─ 📊 Dashboard
│  ├─ 👥 Usuarios
│  ├─ 🏖️ Destinos
│  ├─ 📦 Paquetes
│  ├─ 📝 Actividades
│  └─ ⚙️ Configuración
│
└─ CONTENIDO PRINCIPAL (Cambia según sección)
   └─ Formularios, tablas, estadísticas
```

---

## 🎓 Roles y Permisos

### Cliente (juan@example.com)
```
✅ Ver destinos
✅ Ver paquetes
✅ Editar mi perfil
❌ Ver panel admin
❌ Crear/editar contenido
```

### Administrador (admin@santamarta.com)
```
✅ Ver todo
✅ Crear usuarios
✅ Crear destinos
✅ Crear paquetes
✅ Ver actividades
✅ Cambiar configuración
```

---

## 🚀 Comandos Útiles

```bash
# Iniciar servidor
python -m http.server 8000

# Cambiar puerto (si 8000 está ocupado)
python -m http.server 8080

# Detener servidor
Ctrl+C (en terminal)

# Ver estado de git
git status

# Ver commits
git log --oneline

# Actualizar a GitHub
git add -A
git commit -m "mensaje"
git push origin main
```

---

## 📊 Datos Precargados

### Usuarios
- admin@santamarta.com (Admin)
- juan@example.com (Cliente)

### Destinos
- Ciudad Perdida
- Parque Tayrona
- Playas de Rodadero
- Sierra Nevada
- Cabo San Juan
- Arrecife de Coral

### Paquetes
- Expedición a Ciudad Perdida
- Tour Básico Tayrona

---

## 🎯 Objetivos por Rol

### 👨‍💼 Admin (Primera vez)
- [ ] Abrir panel admin
- [ ] Ver dashboard
- [ ] Crear 1 usuario
- [ ] Crear 1 destino
- [ ] Ver actividades

**Tiempo:** 20 minutos

### 👤 Cliente (Primera vez)
- [ ] Ver destinos
- [ ] Ver paquetes
- [ ] Editar perfil
- [ ] Explorar galería

**Tiempo:** 10 minutos

### 🧪 Tester (Verificar todo)
- [ ] Login funciona
- [ ] Panel abre
- [ ] CRUD funciona
- [ ] Datos persisten
- [ ] Sin errores

**Tiempo:** 30 minutos

---

## 🎉 ¡FELICIDADES!

Acabas de:
✅ Instalar Santa Marta Tours v2.0
✅ Acceder al panel administrativo
✅ Explorar las funcionalidades
✅ Crear contenido
✅ Ver el historial

**Ahora:**
1. Diviértete explorando
2. Lee las guías completas para aprender más
3. Personaliza según tus necesidades
4. Comparte tu experiencia

---

## 🏝️ ¡Bienvenido a Santa Marta Tours!

```
    ⛱️
   🌊
  🏖️
 🌴🌴
```

**Fecha:** Enero 2026  
**Versión:** 2.0  
**Estado:** ✅ Funcionando  
**Acceso:** http://localhost:8000

---

## 📞 Última Verificación

Antes de terminar, verifica que:

- [ ] El servidor está corriendo
- [ ] Puedes abrir http://localhost:8000
- [ ] Puedes iniciar sesión
- [ ] Puedes abrir panel admin
- [ ] Puedes ver datos

Si todo está ✅, **¡Estás listo!**

---

**¡Gracias por usar Santa Marta Tours!** 🙏✨

Para más información, lee: **INDICE_COMPLETO_DOCUMENTACION.md**

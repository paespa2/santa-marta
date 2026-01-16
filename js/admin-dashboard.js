// ============================================
// PANEL ADMINISTRATIVO MEJORADO CON DASHBOARD
// ============================================

class AdminDashboard {
    constructor() {
        this.registroActividades = 'santa_marta_registro_actividades';
        this.configuracionSitio = 'santa_marta_configuracion';
        this.inicializarConfiguracion();
    }

    inicializarConfiguracion() {
        const config = JSON.parse(localStorage.getItem(this.configuracionSitio) || '{}');
        if (Object.keys(config).length === 0) {
            const configDefault = {
                nombreSitio: 'Santa Marta Tours',
                email: 'info@santamartaours.com',
                telefono: '+57 5 421 1234',
                direccion: 'Santa Marta, Magdalena, Colombia',
                moneda: 'COP',
                colores: {
                    primario: '#FF6B35',
                    secundario: '#004E89',
                    acento: '#1B9CFC'
                }
            };
            localStorage.setItem(this.configuracionSitio, JSON.stringify(configDefault));
        }
    }

    obtenerEstadisticas() {
        const usuarios = JSON.parse(localStorage.getItem('santa_marta_usuarios') || '[]');
        const destinos = JSON.parse(localStorage.getItem('santa_marta_destinos') || '[]');
        const paquetes = JSON.parse(localStorage.getItem('santa_marta_paquetes') || '[]');
        const actividades = JSON.parse(localStorage.getItem(this.registroActividades) || '[]');

        return {
            totalUsuarios: usuarios.length,
            usuariosAdmin: usuarios.filter(u => u.rol === 'admin').length,
            usuariosClientes: usuarios.filter(u => u.rol === 'cliente').length,
            totalDestinos: destinos.length,
            totalPaquetes: paquetes.length,
            actividadesRecientes: actividades.slice(-10)
        };
    }

    registrarActividad(tipo, descripcion, usuario = null) {
        const actividades = JSON.parse(localStorage.getItem(this.registroActividades) || '[]');
        actividades.push({
            id: Date.now(),
            tipo: tipo, // 'usuario_creado', 'destino_editado', 'paquete_eliminado', etc
            descripcion: descripcion,
            usuario: usuario || auth.usuarioActual.nombre,
            fecha: new Date().toISOString(),
            timestamp: Date.now()
        });
        localStorage.setItem(this.registroActividades, JSON.stringify(actividades));
    }
}

const adminDashboard = new AdminDashboard();

// ============================================
// PANEL ADMINISTRATIVO PRINCIPAL
// ============================================

function abrirPanelAdminMejorado() {
    if (!auth.esAdmin()) {
        alert('Solo administradores pueden acceder al panel');
        return;
    }

    const panel = document.createElement('div');
    panel.id = 'adminPanelMejorado';
    panel.className = 'modal-backdrop show admin-panel-overlay';
    panel.innerHTML = `
        <div class="admin-panel-container">
            <div class="admin-sidebar">
                <div class="admin-header">
                    <h2>🔧 Panel Admin</h2>
                    <button class="btn-close" onclick="cerrarModal('adminPanelMejorado')">×</button>
                </div>
                
                <nav class="admin-menu">
                    <button class="admin-menu-item active" onclick="cambiarSeccionAdmin('dashboard')">
                        📊 Dashboard
                    </button>
                    <button class="admin-menu-item" onclick="cambiarSeccionAdmin('usuarios')">
                        👥 Usuarios
                    </button>
                    <button class="admin-menu-item" onclick="cambiarSeccionAdmin('destinos')">
                        🏖️ Destinos
                    </button>
                    <button class="admin-menu-item" onclick="cambiarSeccionAdmin('paquetes')">
                        📦 Paquetes
                    </button>
                    <button class="admin-menu-item" onclick="cambiarSeccionAdmin('actividades')">
                        📝 Actividades
                    </button>
                    <button class="admin-menu-item" onclick="cambiarSeccionAdmin('configuracion')">
                        ⚙️ Configuración
                    </button>
                </nav>
            </div>
            
            <div class="admin-content">
                <div id="dashboard-section" class="admin-section">
                    ${renderizarDashboard()}
                </div>
                <div id="usuarios-section" class="admin-section" style="display: none;">
                    ${renderizarGestionUsuarios()}
                </div>
                <div id="destinos-section" class="admin-section" style="display: none;">
                    ${renderizarGestionDestinos()}
                </div>
                <div id="paquetes-section" class="admin-section" style="display: none;">
                    ${renderizarGestionPaquetes()}
                </div>
                <div id="actividades-section" class="admin-section" style="display: none;">
                    ${renderizarRegistroActividades()}
                </div>
                <div id="configuracion-section" class="admin-section" style="display: none;">
                    ${renderizarConfiguracion()}
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(panel);
    agregarEstilosAdminPanel();
}

function cambiarSeccionAdmin(seccion) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.admin-section');
    secciones.forEach(s => s.style.display = 'none');

    // Mostrar sección seleccionada
    const seccionElement = document.getElementById(`${seccion}-section`);
    if (seccionElement) {
        seccionElement.style.display = 'block';
    }

    // Actualizar menú activo
    const menuItems = document.querySelectorAll('.admin-menu-item');
    menuItems.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
}

// ============================================
// DASHBOARD
// ============================================

function renderizarDashboard() {
    const stats = adminDashboard.obtenerEstadisticas();
    
    return `
        <div class="dashboard-container">
            <h2>Dashboard</h2>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">👥</div>
                    <div class="stat-info">
                        <h3>${stats.totalUsuarios}</h3>
                        <p>Usuarios Total</p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">👨‍💼</div>
                    <div class="stat-info">
                        <h3>${stats.usuariosAdmin}</h3>
                        <p>Administradores</p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">👤</div>
                    <div class="stat-info">
                        <h3>${stats.usuariosClientes}</h3>
                        <p>Clientes</p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">🏖️</div>
                    <div class="stat-info">
                        <h3>${stats.totalDestinos}</h3>
                        <p>Destinos</p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">📦</div>
                    <div class="stat-info">
                        <h3>${stats.totalPaquetes}</h3>
                        <p>Paquetes</p>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-section">
                <h3>Acciones Rápidas</h3>
                <div class="quick-actions">
                    <button class="action-btn" onclick="abrirFormularioDestino()">
                        ➕ Crear Destino
                    </button>
                    <button class="action-btn" onclick="abrirFormularioPaquete()">
                        ➕ Crear Paquete
                    </button>
                    <button class="action-btn" onclick="abrirFormularioUsuario()">
                        ➕ Crear Usuario
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// GESTIÓN DE USUARIOS AVANZADA
// ============================================

function renderizarGestionUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem('santa_marta_usuarios') || '[]');
    
    return `
        <div class="gestion-usuarios">
            <h2>Gestión de Usuarios</h2>
            
            <div class="acciones-top">
                <button class="btn btn-primary" onclick="abrirFormularioUsuario()">
                    ➕ Crear Nuevo Usuario
                </button>
                <input type="text" class="search-input" placeholder="Buscar usuario..." 
                       onkeyup="filtrarUsuarios(this.value)">
            </div>
            
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th>Teléfono</th>
                        <th>Registrado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    ${usuarios.map(usuario => `
                        <tr>
                            <td><img src="${usuario.avatar}" alt="${usuario.nombre}" class="avatar-mini"></td>
                            <td>${usuario.nombre}</td>
                            <td>${usuario.email}</td>
                            <td>
                                <span class="rol-badge rol-${usuario.rol}">
                                    ${usuario.rol === 'admin' ? '👨‍💼 Admin' : '👤 Cliente'}
                                </span>
                            </td>
                            <td>${usuario.telefono || '-'}</td>
                            <td>${new Date(usuario.fechaRegistro).toLocaleDateString()}</td>
                            <td class="acciones">
                                <button class="btn-icon" onclick="editarUsuario('${usuario.id}')" title="Editar">✏️</button>
                                <button class="btn-icon" onclick="cambiarRolUsuario('${usuario.id}')" title="Cambiar rol">🔄</button>
                                <button class="btn-icon btn-danger" onclick="eliminarUsuario('${usuario.id}')" title="Eliminar">🗑️</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function filtrarUsuarios(filtro) {
    const usuarios = JSON.parse(localStorage.getItem('santa_marta_usuarios') || '[]');
    const filtrados = usuarios.filter(u => 
        u.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        u.email.toLowerCase().includes(filtro.toLowerCase())
    );
    console.log(`Resultados: ${filtrados.length}/${usuarios.length}`);
}

function abrirFormularioUsuario() {
    const usuario = auth.usuarioActual;
    const form = document.createElement('div');
    form.id = 'formUsuarioModal';
    form.className = 'modal-backdrop show';
    form.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-header">
                <h2>Crear Nuevo Usuario</h2>
                <button class="modal-close" onclick="cerrarModal('formUsuarioModal')">×</button>
            </div>
            <form onsubmit="guardarNuevoUsuario(event)">
                <div class="form-group">
                    <label>Nombre Completo *</label>
                    <input type="text" id="usuarioNombre" required>
                </div>
                <div class="form-group">
                    <label>Email *</label>
                    <input type="email" id="usuarioEmail" required>
                </div>
                <div class="form-group">
                    <label>Contraseña *</label>
                    <input type="password" id="usuarioPassword" required>
                </div>
                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="tel" id="usuarioTelefono">
                </div>
                <div class="form-group">
                    <label>Rol *</label>
                    <select id="usuarioRol" required>
                        <option value="cliente">Cliente</option>
                        <option value="admin">Administrador</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="cerrarModal('formUsuarioModal')">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Crear Usuario</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(form);
}

function guardarNuevoUsuario(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('usuarioNombre').value;
    const email = document.getElementById('usuarioEmail').value;
    const password = document.getElementById('usuarioPassword').value;
    const telefono = document.getElementById('usuarioTelefono').value;
    const rol = document.getElementById('usuarioRol').value;
    
    const resultado = auth.registrar(nombre, email, password, telefono, rol);
    
    if (resultado.exito) {
        adminDashboard.registrarActividad('usuario_creado', `Usuario creado: ${nombre} (${rol})`);
        alert('Usuario creado correctamente');
        cerrarModal('formUsuarioModal');
    } else {
        alert(resultado.mensaje);
    }
}

function cambiarRolUsuario(usuarioId) {
    const usuarios = JSON.parse(localStorage.getItem('santa_marta_usuarios') || '[]');
    const usuario = usuarios.find(u => u.id == usuarioId);
    
    if (!usuario) return;
    
    const nuevoRol = usuario.rol === 'admin' ? 'cliente' : 'admin';
    
    if (confirm(`¿Cambiar rol de ${usuario.nombre} a ${nuevoRol}?`)) {
        usuario.rol = nuevoRol;
        localStorage.setItem('santa_marta_usuarios', JSON.stringify(usuarios));
        adminDashboard.registrarActividad('rol_cambiado', `Rol de ${usuario.nombre} cambiado a ${nuevoRol}`);
        alert('Rol actualizado');
        location.reload();
    }
}

function eliminarUsuario(usuarioId) {
    const usuarios = JSON.parse(localStorage.getItem('santa_marta_usuarios') || '[]');
    const usuario = usuarios.find(u => u.id == usuarioId);
    
    if (!usuario) return;
    
    if (confirm(`¿Eliminar a ${usuario.nombre}? Esta acción no se puede deshacer.`)) {
        const filtrados = usuarios.filter(u => u.id != usuarioId);
        localStorage.setItem('santa_marta_usuarios', JSON.stringify(filtrados));
        adminDashboard.registrarActividad('usuario_eliminado', `Usuario eliminado: ${usuario.nombre}`);
        alert('Usuario eliminado');
        location.reload();
    }
}

// ============================================
// GESTIÓN DE DESTINOS MEJORADA
// ============================================

function renderizarGestionDestinos() {
    const destinos = JSON.parse(localStorage.getItem('santa_marta_destinos') || '[]');
    
    return `
        <div class="gestion-destinos">
            <h2>Gestión de Destinos</h2>
            
            <button class="btn btn-primary" onclick="abrirFormularioDestino()">
                ➕ Crear Nuevo Destino
            </button>
            
            <div class="destinos-list">
                ${destinos.map(destino => `
                    <div class="destino-admin-card">
                        <img src="${destino.imagen}" alt="${destino.nombre}" class="destino-thumb">
                        <div class="destino-admin-info">
                            <h3>${destino.nombre}</h3>
                            <p>${destino.descripcion}</p>
                            <p class="ubicacion">📍 ${destino.ubicacion}</p>
                        </div>
                        <div class="destino-admin-acciones">
                            <button class="btn-icon" onclick="editarDestino('${destino.id}')" title="Editar">✏️</button>
                            <button class="btn-icon btn-danger" onclick="eliminarDestino('${destino.id}')" title="Eliminar">🗑️</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function abrirFormularioDestino(destinoId = null) {
    const destinos = JSON.parse(localStorage.getItem('santa_marta_destinos') || '[]');
    const destino = destinoId ? destinos.find(d => d.id === destinoId) : null;
    
    const form = document.createElement('div');
    form.id = 'formDestinoModal';
    form.className = 'modal-backdrop show';
    form.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-header">
                <h2>${destino ? 'Editar Destino' : 'Crear Nuevo Destino'}</h2>
                <button class="modal-close" onclick="cerrarModal('formDestinoModal')">×</button>
            </div>
            <form onsubmit="guardarDestino(event, '${destinoId || ''}')">
                <div class="form-group">
                    <label>Nombre *</label>
                    <input type="text" id="destiNombre" value="${destino?.nombre || ''}" required>
                </div>
                <div class="form-group">
                    <label>Descripción Corta *</label>
                    <input type="text" id="destiDescripcion" value="${destino?.descripcion || ''}" required>
                </div>
                <div class="form-group">
                    <label>Descripción Larga *</label>
                    <textarea id="destiDescripcionLarga" required>${destino?.descripcionLarga || ''}</textarea>
                </div>
                <div class="form-group">
                    <label>Imagen Principal (URL) *</label>
                    <input type="url" id="destiImagen" value="${destino?.imagen || ''}" required>
                </div>
                <div class="form-group">
                    <label>Ubicación *</label>
                    <input type="text" id="destiUbicacion" value="${destino?.ubicacion || ''}" required>
                </div>
                <div class="form-group">
                    <label>Atractivos (separados por comas)</label>
                    <input type="text" id="destiAtractivos" value="${destino?.atractivos?.join(', ') || ''}">
                </div>
                <div class="form-group">
                    <label>Entrada</label>
                    <input type="text" id="destiEntrada" value="${destino?.entrada || ''}">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="cerrarModal('formDestinoModal')">Cancelar</button>
                    <button type="submit" class="btn btn-primary">
                        ${destino ? 'Actualizar' : 'Crear'} Destino
                    </button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(form);
}

function guardarDestino(event, destinoId) {
    event.preventDefault();
    
    const nuevo = !destinoId;
    const destinos = JSON.parse(localStorage.getItem('santa_marta_destinos') || '[]');
    
    const datos = {
        nombre: document.getElementById('destiNombre').value,
        descripcion: document.getElementById('destiDescripcion').value,
        descripcionLarga: document.getElementById('destiDescripcionLarga').value,
        imagen: document.getElementById('destiImagen').value,
        ubicacion: document.getElementById('destiUbicacion').value,
        atractivos: document.getElementById('destiAtractivos').value.split(',').map(a => a.trim()).filter(a => a),
        entrada: document.getElementById('destiEntrada').value || 'Libre'
    };
    
    if (nuevo) {
        datos.id = String(Date.now());
        datos.imagenes = [datos.imagen];
        datos.puntuacion = 4.5;
        datos.resenas = 0;
        destinos.push(datos);
        adminDashboard.registrarActividad('destino_creado', `Destino creado: ${datos.nombre}`);
    } else {
        const indice = destinos.findIndex(d => d.id === destinoId);
        destinos[indice] = { ...destinos[indice], ...datos };
        adminDashboard.registrarActividad('destino_editado', `Destino actualizado: ${datos.nombre}`);
    }
    
    localStorage.setItem('santa_marta_destinos', JSON.stringify(destinos));
    alert(`Destino ${nuevo ? 'creado' : 'actualizado'} correctamente`);
    cerrarModal('formDestinoModal');
    location.reload();
}

// ============================================
// GESTIÓN DE PAQUETES
// ============================================

function renderizarGestionPaquetes() {
    const paquetes = JSON.parse(localStorage.getItem('santa_marta_paquetes') || '[]');
    const destinos = JSON.parse(localStorage.getItem('santa_marta_destinos') || '[]');
    
    return `
        <div class="gestion-paquetes">
            <h2>Gestión de Paquetes Turísticos</h2>
            
            <button class="btn btn-primary" onclick="abrirFormularioPaquete()">
                ➕ Crear Nuevo Paquete
            </button>
            
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Destino</th>
                        <th>Duración</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    ${paquetes.map(paquete => {
                        const destino = destinos.find(d => d.id === paquete.destinoId);
                        return `
                            <tr>
                                <td>${paquete.nombre}</td>
                                <td>${destino?.nombre || 'Destino eliminado'}</td>
                                <td>${paquete.duracion}</td>
                                <td>${paquete.precio}</td>
                                <td class="acciones">
                                    <button class="btn-icon" onclick="editarPaquete('${paquete.id}')" title="Editar">✏️</button>
                                    <button class="btn-icon btn-danger" onclick="eliminarPaquete('${paquete.id}')" title="Eliminar">🗑️</button>
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function abrirFormularioPaquete() {
    const destinos = JSON.parse(localStorage.getItem('santa_marta_destinos') || '[]');
    
    const form = document.createElement('div');
    form.id = 'formPaqueteModal';
    form.className = 'modal-backdrop show';
    form.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-header">
                <h2>Crear Nuevo Paquete Turístico</h2>
                <button class="modal-close" onclick="cerrarModal('formPaqueteModal')">×</button>
            </div>
            <form onsubmit="guardarPaquete(event)">
                <div class="form-group">
                    <label>Nombre del Paquete *</label>
                    <input type="text" id="paquNombre" required>
                </div>
                <div class="form-group">
                    <label>Destino *</label>
                    <select id="paquDestino" required>
                        <option value="">Seleccionar...</option>
                        ${destinos.map(d => `<option value="${d.id}">${d.nombre}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Duración *</label>
                    <input type="text" id="paquDuracion" placeholder="Ej: 3 días" required>
                </div>
                <div class="form-group">
                    <label>Precio *</label>
                    <input type="text" id="paquPrecio" placeholder="Ej: COP $300,000" required>
                </div>
                <div class="form-group">
                    <label>Descripción *</label>
                    <textarea id="paquDescripcion" required></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="cerrarModal('formPaqueteModal')">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Crear Paquete</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(form);
}

function guardarPaquete(event) {
    event.preventDefault();
    
    const paquetes = JSON.parse(localStorage.getItem('santa_marta_paquetes') || '[]');
    
    const nuevoPaquete = {
        id: String(Date.now()),
        nombre: document.getElementById('paquNombre').value,
        destinoId: document.getElementById('paquDestino').value,
        duracion: document.getElementById('paquDuracion').value,
        precio: document.getElementById('paquPrecio').value,
        descripcion: document.getElementById('paquDescripcion').value,
        incluye: [],
        itinerario: []
    };
    
    paquetes.push(nuevoPaquete);
    localStorage.setItem('santa_marta_paquetes', JSON.stringify(paquetes));
    adminDashboard.registrarActividad('paquete_creado', `Paquete creado: ${nuevoPaquete.nombre}`);
    alert('Paquete creado correctamente');
    cerrarModal('formPaqueteModal');
    location.reload();
}

function eliminarPaquete(paqueteId) {
    if (confirm('¿Eliminar este paquete?')) {
        const paquetes = JSON.parse(localStorage.getItem('santa_marta_paquetes') || '[]');
        const filtrados = paquetes.filter(p => p.id !== paqueteId);
        localStorage.setItem('santa_marta_paquetes', JSON.stringify(filtrados));
        adminDashboard.registrarActividad('paquete_eliminado', `Paquete eliminado`);
        location.reload();
    }
}

// ============================================
// REGISTRO DE ACTIVIDADES
// ============================================

function renderizarRegistroActividades() {
    const stats = adminDashboard.obtenerEstadisticas();
    
    return `
        <div class="registro-actividades">
            <h2>Registro de Actividades</h2>
            
            <div class="actividades-list">
                ${stats.actividadesRecientes.length === 0 ? 
                    '<p>No hay actividades registradas</p>' :
                    stats.actividadesRecientes.reverse().map(actividad => `
                        <div class="actividad-item">
                            <span class="actividad-tipo">${actividad.tipo}</span>
                            <span class="actividad-desc">${actividad.descripcion}</span>
                            <span class="actividad-usuario">Por: ${actividad.usuario}</span>
                            <span class="actividad-fecha">${new Date(actividad.fecha).toLocaleString()}</span>
                        </div>
                    `).join('')
                }
            </div>
        </div>
    `;
}

// ============================================
// CONFIGURACIÓN DEL SITIO
// ============================================

function renderizarConfiguracion() {
    const config = JSON.parse(localStorage.getItem(adminDashboard.configuracionSitio) || '{}');
    
    return `
        <div class="configuracion">
            <h2>Configuración del Sitio</h2>
            
            <form onsubmit="guardarConfiguracion(event)">
                <div class="form-group">
                    <label>Nombre del Sitio:</label>
                    <input type="text" id="confNombre" value="${config.nombreSitio || ''}">
                </div>
                <div class="form-group">
                    <label>Email de Contacto:</label>
                    <input type="email" id="confEmail" value="${config.email || ''}">
                </div>
                <div class="form-group">
                    <label>Teléfono:</label>
                    <input type="tel" id="confTelefono" value="${config.telefono || ''}">
                </div>
                <div class="form-group">
                    <label>Dirección:</label>
                    <input type="text" id="confDireccion" value="${config.direccion || ''}">
                </div>
                <div class="form-group">
                    <label>Color Primario:</label>
                    <input type="color" id="confColorPrimario" value="${config.colores?.primario || '#FF6B35'}">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Configuración</button>
                </div>
            </form>
        </div>
    `;
}

function guardarConfiguracion(event) {
    event.preventDefault();
    
    const config = {
        nombreSitio: document.getElementById('confNombre').value,
        email: document.getElementById('confEmail').value,
        telefono: document.getElementById('confTelefono').value,
        direccion: document.getElementById('confDireccion').value,
        moneda: 'COP',
        colores: {
            primario: document.getElementById('confColorPrimario').value,
            secundario: '#004E89',
            acento: '#1B9CFC'
        }
    };
    
    localStorage.setItem(adminDashboard.configuracionSitio, JSON.stringify(config));
    adminDashboard.registrarActividad('configuracion_actualizada', 'Configuración del sitio actualizada');
    alert('Configuración guardada');
}

// ============================================
// ESTILOS DEL PANEL ADMIN MEJORADO
// ============================================

function agregarEstilosAdminPanel() {
    if (document.querySelector('#estilos-admin-panel')) return;
    
    const estilos = document.createElement('style');
    estilos.id = 'estilos-admin-panel';
    estilos.textContent = `
        .admin-panel-overlay {
            z-index: 4000;
        }
        
        .admin-panel-container {
            display: flex;
            background: white;
            border-radius: 12px;
            max-width: 1400px;
            width: 95%;
            max-height: 90vh;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            animation: slideInUp 0.3s ease;
        }
        
        .admin-sidebar {
            width: 250px;
            background: linear-gradient(135deg, #004E89 0%, #1B9CFC 100%);
            color: white;
            display: flex;
            flex-direction: column;
            border-right: 1px solid rgba(255,255,255,0.1);
        }
        
        .admin-header {
            padding: 20px;
            border-bottom: 1px solid rgba(255,255,255,0.2);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .admin-header h2 {
            margin: 0;
            font-size: 1.5rem;
        }
        
        .admin-menu {
            flex: 1;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
        }
        
        .admin-menu-item {
            background: transparent;
            border: none;
            color: white;
            padding: 15px 20px;
            text-align: left;
            cursor: pointer;
            border-left: 3px solid transparent;
            transition: all 0.3s;
            font-size: 0.95rem;
        }
        
        .admin-menu-item:hover {
            background: rgba(255,255,255,0.1);
            border-left-color: #FF6B35;
        }
        
        .admin-menu-item.active {
            background: rgba(255,255,255,0.15);
            border-left-color: #FF6B35;
        }
        
        .admin-content {
            flex: 1;
            overflow-y: auto;
            padding: 30px;
        }
        
        .admin-section {
            animation: fadeIn 0.3s ease;
        }
        
        .dashboard-container {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }
        
        .stat-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            display: flex;
            gap: 15px;
            align-items: center;
        }
        
        .stat-icon {
            font-size: 2.5rem;
        }
        
        .stat-info h3 {
            margin: 0;
            font-size: 1.8rem;
        }
        
        .stat-info p {
            margin: 5px 0 0 0;
            opacity: 0.9;
        }
        
        .quick-actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        
        .action-btn {
            background: #FF6B35;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s;
        }
        
        .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
        }
        
        .admin-table {
            width: 100%;
            border-collapse: collapse;
            background: white;
        }
        
        .admin-table thead {
            background: #f7f9fc;
            border-bottom: 2px solid #004E89;
        }
        
        .admin-table th {
            padding: 12px;
            text-align: left;
            font-weight: 600;
            color: #004E89;
        }
        
        .admin-table td {
            padding: 12px;
            border-bottom: 1px solid #E8E8E8;
        }
        
        .admin-table tbody tr:hover {
            background: #f7f9fc;
        }
        
        .rol-badge {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
        }
        
        .rol-admin {
            background: #FF6B35;
            color: white;
        }
        
        .rol-cliente {
            background: #1B9CFC;
            color: white;
        }
        
        .avatar-mini {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            object-fit: cover;
        }
        
        .btn-icon {
            background: none;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 5px;
            transition: all 0.3s;
        }
        
        .btn-icon:hover {
            transform: scale(1.2);
        }
        
        .btn-icon.btn-danger:hover {
            color: #FF6B35;
        }
        
        .destino-admin-card {
            display: flex;
            gap: 15px;
            padding: 15px;
            background: #f7f9fc;
            border-radius: 8px;
            align-items: center;
            margin-bottom: 10px;
        }
        
        .destino-thumb {
            width: 80px;
            height: 80px;
            border-radius: 6px;
            object-fit: cover;
        }
        
        .destino-admin-info {
            flex: 1;
        }
        
        .destino-admin-info h3 {
            margin: 0 0 5px 0;
        }
        
        .ubicacion {
            color: #FF6B35;
            font-size: 0.9rem;
        }
        
        .actividad-item {
            display: grid;
            grid-template-columns: 150px 1fr 150px 150px;
            gap: 15px;
            padding: 12px;
            background: #f7f9fc;
            border-left: 3px solid #FF6B35;
            margin-bottom: 10px;
            border-radius: 4px;
        }
        
        .actividad-tipo {
            font-weight: 600;
            color: #004E89;
        }
        
        .actividad-usuario {
            color: #636E72;
            font-size: 0.9rem;
        }
        
        .actividad-fecha {
            color: #999;
            font-size: 0.85rem;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @media (max-width: 768px) {
            .admin-panel-container {
                flex-direction: column;
                max-height: 95vh;
            }
            
            .admin-sidebar {
                width: 100%;
                flex-direction: row;
            }
            
            .admin-menu {
                flex-direction: row;
                overflow-x: auto;
            }
            
            .stats-grid {
                grid-template-columns: 1fr;
            }
            
            .admin-table {
                font-size: 0.9rem;
            }
            
            .actividad-item {
                grid-template-columns: 1fr;
                gap: 5px;
            }
        }
    `;
    
    document.head.appendChild(estilos);
}

// Exportar para usar en perfil-admin.js
window.abrirPanelAdminMejorado = abrirPanelAdminMejorado;
window.adminDashboard = adminDashboard;

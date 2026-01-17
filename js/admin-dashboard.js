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
        cambiarSeccionAdmin('usuarios');
    } else {
        alert(resultado.mensaje);
    }
}

function editarUsuario(usuarioId) {
    const usuarios = JSON.parse(localStorage.getItem('santa_marta_usuarios') || '[]');
    const usuario = usuarios.find(u => u.id == usuarioId);
    
    if (!usuario) return;
    
    const form = document.createElement('div');
    form.id = 'formEditarUsuarioModal';
    form.className = 'modal-backdrop show';
    form.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-header">
                <h2>Editar Usuario: ${usuario.nombre}</h2>
                <button class="modal-close" onclick="cerrarModal('formEditarUsuarioModal')">×</button>
            </div>
            <form onsubmit="guardarUsuarioEditado(event, '${usuarioId}')">
                <div class="form-group">
                    <label>Nombre Completo *</label>
                    <input type="text" id="editNombre" value="${usuario.nombre}" required>
                </div>
                <div class="form-group">
                    <label>Email *</label>
                    <input type="email" id="editEmail" value="${usuario.email}" required>
                </div>
                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="tel" id="editTelefono" value="${usuario.telefono || ''}">
                </div>
                <div class="form-group">
                    <label>Rol</label>
                    <select id="editRol">
                        <option value="cliente" ${usuario.rol === 'cliente' ? 'selected' : ''}>Cliente</option>
                        <option value="admin" ${usuario.rol === 'admin' ? 'selected' : ''}>Administrador</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="cerrarModal('formEditarUsuarioModal')">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(form);
}

function guardarUsuarioEditado(event, usuarioId) {
    event.preventDefault();
    
    const usuarios = JSON.parse(localStorage.getItem('santa_marta_usuarios') || '[]');
    const usuario = usuarios.find(u => u.id == usuarioId);
    
    if (!usuario) return;
    
    const nombre = document.getElementById('editNombre').value;
    const email = document.getElementById('editEmail').value;
    const telefono = document.getElementById('editTelefono').value;
    const rol = document.getElementById('editRol').value;
    
    // Verificar que el email no esté en uso por otro usuario
    const emailExiste = usuarios.find(u => u.email === email && u.id != usuarioId);
    if (emailExiste) {
        alert('Este email ya está registrado');
        return;
    }
    
    usuario.nombre = nombre;
    usuario.email = email;
    usuario.telefono = telefono;
    usuario.rol = rol;
    
    localStorage.setItem('santa_marta_usuarios', JSON.stringify(usuarios));
    adminDashboard.registrarActividad('usuario_editado', `Usuario editado: ${nombre}`);
    alert('Usuario actualizado correctamente');
    cerrarModal('formEditarUsuarioModal');
    cambiarSeccionAdmin('usuarios');
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
        cambiarSeccionAdmin('usuarios');
    }
}

function eliminarUsuario(usuarioId) {
    const usuarios = JSON.parse(localStorage.getItem('santa_marta_usuarios') || '[]');
    const usuario = usuarios.find(u => u.id == usuarioId);
    
    if (!usuario) return;
    
    // Verificar que no sea el último admin
    const admins = usuarios.filter(u => u.rol === 'admin');
    if (usuario.rol === 'admin' && admins.length === 1) {
        alert('No puedes eliminar el único administrador del sistema');
        return;
    }
    
    if (confirm(`¿Eliminar a ${usuario.nombre}? Esta acción no se puede deshacer.`)) {
        const filtrados = usuarios.filter(u => u.id != usuarioId);
        localStorage.setItem('santa_marta_usuarios', JSON.stringify(filtrados));
        adminDashboard.registrarActividad('usuario_eliminado', `Usuario eliminado: ${usuario.nombre}`);
        alert('Usuario eliminado');
        cambiarSeccionAdmin('usuarios');
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
                    <div class="destino-admin-card ${destino.activo ? 'activo' : 'inactivo'}" data-destino-id="${destino.id}">
                        <img src="${destino.imagen}" alt="${destino.nombre}" class="destino-thumb">
                        <div class="destino-admin-info">
                            <h3>${destino.nombre}</h3>
                            <p>${destino.descripcion}</p>
                            <p class="ubicacion">📍 ${destino.ubicacion}</p>
                            <div class="estado-destino">
                                <span class="badge ${destino.activo ? 'badge-success' : 'badge-danger'}">
                                    ${destino.activo ? '✅ VISIBLE' : '❌ OCULTO'}
                                </span>
                            </div>
                        </div>
                        <div class="destino-admin-acciones">
                            <div class="toggle-container">
                                <label class="toggle-switch" title="${destino.activo ? 'Click para ocultar' : 'Click para mostrar'}">
                                    <input type="checkbox" ${destino.activo ? 'checked' : ''} onchange="toggleDestinoActivo('${destino.id}', this.checked)">
                                    <span class="slider round"></span>
                                </label>
                                <span class="toggle-label">${destino.activo ? 'ACTIVO' : 'INACTIVO'}</span>
                            </div>
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
        datos.activo = true;
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

function toggleDestinoActivo(destinoId, activo) {
    const resultado = gestorDestinos.actualizarEstadoDestino(destinoId, activo);
    if (resultado.exito) {
        adminDashboard.registrarActividad('destino_estado_cambiado', `Destino '${resultado.destino.nombre}' ${activo ? 'activado' : 'desactivado'}`);
        
        // Actualizar visualización en tiempo real sin recargar
        const card = document.querySelector(`[data-destino-id="${destinoId}"]`);
        if (card) {
            // Actualizar clase de la tarjeta
            card.classList.remove('activo', 'inactivo');
            card.classList.add(activo ? 'activo' : 'inactivo');
            
            // Actualizar badge
            const badge = card.querySelector('.badge');
            if (badge) {
                badge.className = activo ? 'badge badge-success' : 'badge badge-danger';
                badge.textContent = activo ? '✅ VISIBLE' : '❌ OCULTO';
            }
            
            // Actualizar label del toggle
            const label = card.querySelector('.toggle-label');
            if (label) {
                label.textContent = activo ? 'ACTIVO' : 'INACTIVO';
            }
            
            // Efecto visual de cambio
            card.style.transition = 'all 0.3s ease';
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 300);
        }
        
        // Mostrar notificación sin alert
        mostrarNotificacion(`Destino '${resultado.destino.nombre}' ${activo ? 'activado' : 'desactivado'} correctamente.`, 'success');
    } else {
        mostrarNotificacion('Error al cambiar el estado del destino.', 'error');
    }
}

// Función para mostrar notificaciones flotantes
function mostrarNotificacion(mensaje, tipo = 'success') {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.innerHTML = `
        <span>${mensaje}</span>
        <button onclick="this.parentElement.remove()" style="background: none; border: none; color: inherit; cursor: pointer; font-size: 1.2rem; margin-left: 12px;">×</button>
    `;
    
    const style = document.createElement('style');
    if (!document.querySelector('#estilos-notificaciones')) {
        style.id = 'estilos-notificaciones';
        style.textContent = `
            .notificacion {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 16px 20px;
                border-radius: 8px;
                background: white;
                color: #1a1a1a;
                box-shadow: 0 8px 24px rgba(0,0,0,0.15);
                display: flex;
                align-items: center;
                justify-content: space-between;
                z-index: 9999;
                animation: slideIn 0.3s ease;
                font-weight: 500;
                max-width: 400px;
            }
            
            .notificacion-success {
                border-left: 4px solid #27AE60;
                background: linear-gradient(90deg, rgba(39,174,96,0.05), white);
            }
            
            .notificacion-error {
                border-left: 4px solid #E74C3C;
                background: linear-gradient(90deg, rgba(231,76,60,0.05), white);
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
            
            @media (max-width: 600px) {
                .notificacion {
                    left: 10px;
                    right: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notificacion);
    
    // Auto-eliminar después de 4 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notificacion.remove(), 300);
    }, 4000);
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
        
        /* Modales dentro del panel admin - z-index mayor */
        #formDestinoModal,
        #formPaqueteModal,
        #formUsuarioModal,
        #formEditarUsuarioModal {
            z-index: 5000 !important;
        }
        
        .admin-panel-container {
            display: flex;
            background: white;
            border-radius: 16px;
            max-width: 1400px;
            width: 95%;
            max-height: 90vh;
            overflow: hidden;
            box-shadow: 0 25px 80px rgba(13, 115, 119, 0.12);
            animation: slideInUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .admin-sidebar {
            width: 260px;
            background: linear-gradient(180deg, #0D7377 0%, #0A5A5E 100%);
            color: white;
            display: flex;
            flex-direction: column;
            border-right: none;
            position: relative;
        }
        
        .admin-sidebar::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            width: 1px;
            height: 100%;
            background: linear-gradient(180deg, rgba(244, 211, 94, 0.3), transparent);
        }
        
        .admin-header {
            padding: 28px 24px;
            border-bottom: 2px solid rgba(244, 211, 94, 0.3);
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(255, 255, 255, 0.05);
        }
        
        .admin-header h2 {
            margin: 0;
            font-size: 1.6rem;
            font-weight: 800;
            letter-spacing: -0.5px;
            color: #F4D35E;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .admin-menu {
            flex: 1;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            padding: 8px 0;
        }
        
        .admin-menu::-webkit-scrollbar {
            width: 6px;
        }
        
        .admin-menu::-webkit-scrollbar-track {
            background: transparent;
        }
        
        .admin-menu::-webkit-scrollbar-thumb {
            background: rgba(244, 211, 94, 0.3);
            border-radius: 3px;
        }
        
        .admin-menu-item {
            background: transparent;
            border: none;
            color: rgba(255, 255, 255, 0.85);
            padding: 14px 24px;
            text-align: left;
            cursor: pointer;
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            font-size: 0.95rem;
            font-weight: 500;
            margin: 2px 0;
        }
        
        .admin-menu-item:hover {
            background: rgba(255,255,255,0.08);
            border-left-color: #F4D35E;
            color: white;
        }
        
        .admin-menu-item.active {
            background: rgba(255,255,255,0.12);
            border-left-color: #F4D35E;
            border-right-color: #F4D35E;
            color: white;
            font-weight: 600;
        }
        
        .admin-content {
            flex: 1;
            overflow-y: auto;
            padding: 40px;
            background: linear-gradient(135deg, #FFFFFF 0%, #f9f7f4 100%);
            color: #1a1a1a;
        }
        
        .admin-content::-webkit-scrollbar {
            width: 8px;
        }
        
        .admin-content::-webkit-scrollbar-track {
            background: transparent;
        }
        
        .admin-content::-webkit-scrollbar-thumb {
            background: rgba(13, 115, 119, 0.2);
            border-radius: 4px;
        }
        
        .admin-section {
            animation: fadeIn 0.4s ease-out;
        }
        
        .admin-section h2 {
            font-size: 2rem;
            color: #0D7377;
            margin-bottom: 32px;
            font-weight: 800;
            letter-spacing: -0.7px;
            border-bottom: 3px solid #F4D35E;
            padding-bottom: 12px;
            display: inline-block;
        }
        
        .admin-section h3 {
            font-size: 1.3rem;
            color: #14919B;
            margin: 28px 0 16px 0;
            font-weight: 700;
            letter-spacing: -0.3px;
        }
        
        .dashboard-container {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
        }
        
        .stat-card {
            background: linear-gradient(135deg, #0D7377 0%, #14919B 100%);
            color: white;
            padding: 28px 24px;
            border-radius: 12px;
            display: flex;
            gap: 18px;
            align-items: center;
            box-shadow: 0 8px 24px rgba(13, 115, 119, 0.18);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(244, 211, 94, 0.2);
        }
        
        .stat-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 40px rgba(13, 115, 119, 0.25);
            border-color: rgba(244, 211, 94, 0.4);
        }
        
        .stat-icon {
            font-size: 3rem;
            opacity: 1;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .stat-info h3 {
            margin: 0;
            font-size: 2.2rem;
            font-weight: 800;
            line-height: 1;
            letter-spacing: -0.5px;
        }
        
        .stat-info p {
            margin: 8px 0 0 0;
            opacity: 0.95;
            font-size: 0.95rem;
            font-weight: 600;
            letter-spacing: -0.2px;
        }
        
        .quick-actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 24px;
        }
        
        .action-btn {
            background: linear-gradient(135deg, #0D7377, #14919B);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 700;
            font-size: 0.95rem;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 12px rgba(13, 115, 119, 0.25);
            letter-spacing: -0.2px;
        }
        
        .action-btn:hover {
            background: linear-gradient(135deg, #14919B, #0D7377);
            box-shadow: 0 8px 20px rgba(13, 115, 119, 0.35);
            transform: translateY(-3px);
        }
        
        .admin-table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
            margin-top: 20px;
        }
        
        .admin-table thead {
            background: linear-gradient(90deg, #0D7377 0%, #14919B 100%);
            border-bottom: 3px solid #F4D35E;
        }
        
        .admin-table th {
            padding: 16px 18px;
            text-align: left;
            font-weight: 800;
            color: #FFFFFF;
            font-size: 0.95rem;
            text-transform: uppercase;
            letter-spacing: 0.7px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        .admin-table td {
            padding: 16px 18px;
            border-bottom: 1px solid #ede8e2;
            font-size: 0.95rem;
            color: #2a2a2a;
        }
        
        .admin-table tbody tr {
            transition: all 0.2s ease;
        }
        
        .admin-table tbody tr:hover {
            background: #f0fdfb;
            box-shadow: inset 0 0 10px rgba(13, 115, 119, 0.05);
        }
        
        .rol-badge {
            display: inline-block;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 700;
            text-transform: capitalize;
            letter-spacing: 0.3px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        .rol-admin {
            background: linear-gradient(135deg, #0D7377, #14919B);
            color: white;
            box-shadow: 0 4px 12px rgba(13, 115, 119, 0.3);
        }
        
        .rol-cliente {
            background: linear-gradient(135deg, #14919B, #1DB5BE);
            color: white;
            box-shadow: 0 4px 12px rgba(20, 145, 155, 0.3);
        }
        
        .avatar-mini {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid rgba(244, 211, 94, 0.4);
            background: white;
        }
        
        .btn-icon {
            background: none;
            border: none;
            font-size: 1.1rem;
            cursor: pointer;
            padding: 6px 10px;
            transition: all 0.2s ease;
            border-radius: 6px;
        }
        
        .btn-icon:hover {
            background: rgba(13, 115, 119, 0.1);
            transform: none;
        }
        
        .btn-icon.btn-danger:hover {
            background: rgba(231, 76, 60, 0.1);
            color: #E74C3C;
        }
        }
        
        .form-group {
            margin-bottom: 18px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 700;
            color: #0D7377;
            font-size: 0.95rem;
            letter-spacing: -0.2px;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 12px 14px;
            border: 2px solid #e8e8e8;
            border-radius: 8px;
            font-size: 0.95rem;
            color: #2a2a2a;
            font-family: inherit;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            background: white;
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
            color: #999;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
            outline: none;
            border-color: #0D7377;
            box-shadow: 0 0 0 3px rgba(13, 115, 119, 0.1);
            background: #fdfbf8;
        }
        
        .btn-icon {
            background: none;
            border: none;
            font-size: 1.1rem;
            cursor: pointer;
            padding: 6px 10px;
            transition: all 0.3s;
            border-radius: 6px;
        }
        
        .btn-icon:hover {
            background: rgba(13, 115, 119, 0.1);
            transform: none;
        }
        
        .btn-icon.btn-danger:hover {
            background: rgba(231, 76, 60, 0.1);
            color: #E74C3C;
        }
        
        .destino-admin-card {
            display: flex;
            gap: 15px;
            padding: 16px;
            background: white;
            border-radius: 10px;
            align-items: center;
            margin-bottom: 12px;
            border-left: 4px solid #0D7377;
            border-right: 1px solid #ede8e2;
            box-shadow: 0 2px 8px rgba(13, 115, 119, 0.08);
            transition: all 0.3s ease;
        }
        
        .destino-admin-card:hover {
            box-shadow: 0 6px 16px rgba(13, 115, 119, 0.12);
            transform: translateX(4px);
        }
        
        .destino-admin-card.activo {
            border-left-color: #27AE60;
        }
        
        .destino-admin-card.inactivo {
            border-left-color: #E74C3C;
            opacity: 0.8;
        }
        
        .destino-thumb {
            width: 80px;
            height: 80px;
            border-radius: 8px;
            object-fit: cover;
            border: 2px solid #ede8e2;
        }
        
        .destino-admin-info {
            flex: 1;
        }
        
        .destino-admin-info h3 {
            margin: 0 0 6px 0;
            color: #0D7377;
            font-weight: 700;
            font-size: 1.05rem;
        }
        
        .ubicacion {
            color: #0D7377;
            font-size: 0.9rem;
            font-weight: 600;
        }
        
        .actividad-item {
            display: grid;
            grid-template-columns: 150px 1fr 150px 150px;
            gap: 15px;
            padding: 14px;
            background: white;
            border-left: 4px solid #0D7377;
            border-right: 1px solid #ede8e2;
            margin-bottom: 10px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }
        
        .actividad-tipo {
            font-weight: 700;
            color: #0D7377;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.3px;
        }
        
        .actividad-usuario {
            color: #555;
            font-size: 0.9rem;
            font-weight: 500;
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

// ============================================
// FUNCIONES AUXILIARES DEL PANEL
// ============================================

function cerrarModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => modal.remove(), 300);
    }
}

// Alias para abrir el panel admin mejorado
function abrirPanelAdmin() {
    abrirPanelAdminMejorado();
}

// Función para editar un destino
function editarDestino(destinoId) {
    abrirFormularioDestino(destinoId);
}

// Función para eliminar un destino
function eliminarDestino(destinoId) {
    const destinos = JSON.parse(localStorage.getItem('santa_marta_destinos') || '[]');
    const destino = destinos.find(d => d.id === destinoId);
    
    if (!destino) return;
    
    if (confirm(`¿Eliminar el destino "${destino.nombre}"? Esta acción no se puede deshacer.`)) {
        const filtrados = destinos.filter(d => d.id !== destinoId);
        localStorage.setItem('santa_marta_destinos', JSON.stringify(filtrados));
        adminDashboard.registrarActividad('destino_eliminado', `Destino eliminado: ${destino.nombre}`);
        alert('Destino eliminado correctamente');
        location.reload();
    }
}

// Función para editar un paquete
function editarPaquete(paqueteId) {
    const paquetes = JSON.parse(localStorage.getItem('santa_marta_paquetes') || '[]');
    const destinos = JSON.parse(localStorage.getItem('santa_marta_destinos') || '[]');
    const paquete = paquetes.find(p => p.id === paqueteId);
    
    if (!paquete) return;
    
    const form = document.createElement('div');
    form.id = 'formPaqueteModal';
    form.className = 'modal-backdrop show';
    form.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-header">
                <h2>Editar Paquete Turístico</h2>
                <button class="modal-close" onclick="cerrarModal('formPaqueteModal')">×</button>
            </div>
            <form onsubmit="guardarPaqueteEditado(event, '${paqueteId}')">
                <div class="form-group">
                    <label>Nombre del Paquete *</label>
                    <input type="text" id="paquNombre" value="${paquete.nombre}" required>
                </div>
                <div class="form-group">
                    <label>Destino *</label>
                    <select id="paquDestino" required>
                        ${destinos.map(d => `<option value="${d.id}" ${d.id === paquete.destinoId ? 'selected' : ''}>${d.nombre}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Duración *</label>
                    <input type="text" id="paquDuracion" value="${paquete.duracion}" required>
                </div>
                <div class="form-group">
                    <label>Precio *</label>
                    <input type="text" id="paquPrecio" value="${paquete.precio}" required>
                </div>
                <div class="form-group">
                    <label>Descripción *</label>
                    <textarea id="paquDescripcion" required>${paquete.descripcion}</textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="cerrarModal('formPaqueteModal')">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Actualizar Paquete</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(form);
}

function guardarPaqueteEditado(event, paqueteId) {
    event.preventDefault();
    
    const paquetes = JSON.parse(localStorage.getItem('santa_marta_paquetes') || '[]');
    const indice = paquetes.findIndex(p => p.id === paqueteId);
    
    if (indice === -1) return;
    
    const paqueteActualizado = {
        ...paquetes[indice],
        nombre: document.getElementById('paquNombre').value,
        destinoId: document.getElementById('paquDestino').value,
        duracion: document.getElementById('paquDuracion').value,
        precio: document.getElementById('paquPrecio').value,
        descripcion: document.getElementById('paquDescripcion').value
    };
    
    paquetes[indice] = paqueteActualizado;
    localStorage.setItem('santa_marta_paquetes', JSON.stringify(paquetes));
    adminDashboard.registrarActividad('paquete_editado', `Paquete actualizado: ${paqueteActualizado.nombre}`);
    alert('Paquete actualizado correctamente');
    cerrarModal('formPaqueteModal');
    location.reload();
}

// Exportar para usar en perfil-admin.js
window.abrirPanelAdminMejorado = abrirPanelAdminMejorado;
window.adminDashboard = adminDashboard;

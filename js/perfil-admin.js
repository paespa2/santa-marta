// ============================================
// PERFIL DE USUARIO Y PANEL ADMINISTRATIVO
// ============================================

function abrirPerfilUsuario() {
    if (!auth.estaAutenticado()) {
        alert('Debes iniciar sesión primero');
        abrirLoginModal();
        return;
    }
    
    const usuario = auth.usuarioActual;
    const perfil = document.createElement('div');
    perfil.id = 'perfilModal';
    perfil.className = 'modal-backdrop show';
    perfil.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-header">
                <h2>Mi Perfil</h2>
                <button class="modal-close" onclick="cerrarModal('perfilModal')">×</button>
            </div>
            <div class="modal-body">
                <div class="perfil-container">
                    <div class="perfil-avatar-section">
                        <img src="${usuario.avatar}" alt="${usuario.nombre}" class="perfil-avatar">
                        <h3>${usuario.nombre}</h3>
                        <p class="perfil-rol">👤 ${usuario.rol === 'admin' ? 'Administrador' : 'Cliente'}</p>
                    </div>
                    
                    <div class="perfil-info">
                        <div class="info-group">
                            <label>Email:</label>
                            <p>${usuario.email}</p>
                        </div>
                        <div class="info-group">
                            <label>Teléfono:</label>
                            <p>${usuario.telefono || 'No especificado'}</p>
                        </div>
                        <div class="info-group">
                            <label>Miembro desde:</label>
                            <p>${new Date(usuario.fechaRegistro).toLocaleDateString('es-ES')}</p>
                        </div>
                    </div>
                </div>
                
                <div class="perfil-opciones">
                    <button onclick="abrirEditarPerfil()" class="btn btn-primary">✏️ Editar Perfil</button>
                    <button onclick="abrirCambiarPassword()" class="btn btn-secondary">🔒 Cambiar Contraseña</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(perfil);
}

function abrirEditarPerfil() {
    const usuario = auth.usuarioActual;
    const editar = document.createElement('div');
    editar.id = 'editarModal';
    editar.className = 'modal-backdrop show';
    editar.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-header">
                <h2>Editar Perfil</h2>
                <button class="modal-close" onclick="cerrarModal('editarModal')">×</button>
            </div>
            <form onsubmit="guardarCambiosPerfil(event)">
                <div class="form-group">
                    <label>Nombre:</label>
                    <input type="text" id="editNombre" value="${usuario.nombre}" required>
                </div>
                <div class="form-group">
                    <label>Teléfono:</label>
                    <input type="tel" id="editTelefono" value="${usuario.telefono || ''}">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(editar);
    cerrarModal('perfilModal');
}

function guardarCambiosPerfil(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('editNombre').value;
    const telefono = document.getElementById('editTelefono').value;
    
    const resultado = auth.actualizarPerfil({ nombre, telefono });
    
    if (resultado.exito) {
        alert('Perfil actualizado correctamente');
        cerrarModal('editarModal');
        actualizarUIAutenticacion();
        abrirPerfilUsuario();
    }
}

function abrirCambiarPassword() {
    const cambiar = document.createElement('div');
    cambiar.id = 'cambiarPasswordModal';
    cambiar.className = 'modal-backdrop show';
    cambiar.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-header">
                <h2>Cambiar Contraseña</h2>
                <button class="modal-close" onclick="cerrarModal('cambiarPasswordModal')">×</button>
            </div>
            <form onsubmit="guardarNuevaPassword(event)">
                <div id="passwordError"></div>
                <div class="form-group">
                    <label>Contraseña Actual:</label>
                    <input type="password" id="pwdActual" required>
                </div>
                <div class="form-group">
                    <label>Nueva Contraseña:</label>
                    <input type="password" id="pwdNueva" required>
                </div>
                <div class="form-group">
                    <label>Confirmar Contraseña:</label>
                    <input type="password" id="pwdConfirm" required>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Cambiar Contraseña</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(cambiar);
    cerrarModal('perfilModal');
}

function guardarNuevaPassword(event) {
    event.preventDefault();
    
    const pwdActual = document.getElementById('pwdActual').value;
    const pwdNueva = document.getElementById('pwdNueva').value;
    const pwdConfirm = document.getElementById('pwdConfirm').value;
    const errorDiv = document.getElementById('passwordError');
    
    if (pwdNueva !== pwdConfirm) {
        errorDiv.innerHTML = '<div class="mensaje-error">Las contraseñas no coinciden</div>';
        return;
    }
    
    const resultado = auth.cambiarPassword(pwdActual, pwdNueva);
    
    if (resultado.exito) {
        alert(resultado.mensaje);
        cerrarModal('cambiarPasswordModal');
        abrirPerfilUsuario();
    } else {
        errorDiv.innerHTML = `<div class="mensaje-error">${resultado.mensaje}</div>`;
    }
}

// ============================================
// PANEL ADMINISTRATIVO
// ============================================

function abrirPanelAdmin() {
    // Usar el nuevo panel mejorado con más funcionalidades
    abrirPanelAdminMejorado();
}

function abrirPanelAdminAntiguo() {
    if (!auth.esAdmin()) {
        alert('No tienes permisos de administrador');
        return;
    }
    
    const panel = document.createElement('div');
    panel.id = 'panelAdminModal';
    panel.className = 'modal-backdrop show admin-panel-overlay';
    panel.innerHTML = `
        <div class="admin-panel-dialog">
            <div class="modal-header">
                <h2>⚙️ Panel de Administración</h2>
                <button class="modal-close" onclick="cerrarModal('panelAdminModal')">×</button>
            </div>
            
            <div class="admin-tabs">
                <button class="admin-tab-btn active" onclick="cambiarTabAdmin('destinos')">🏖️ Destinos</button>
                <button class="admin-tab-btn" onclick="cambiarTabAdmin('paquetes')">📦 Paquetes</button>
                <button class="admin-tab-btn" onclick="cambiarTabAdmin('usuarios')">👥 Usuarios</button>
            </div>
            
            <div class="admin-content">
                <div id="tab-destinos" class="admin-tab-content show">
                    ${renderizarTabDestinos()}
                </div>
                <div id="tab-paquetes" class="admin-tab-content">
                    ${renderizarTabPaquetes()}
                </div>
                <div id="tab-usuarios" class="admin-tab-content">
                    ${renderizarTabUsuarios()}
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(panel);
    agregarEstilosAdmin();
}

function cambiarTabAdmin(tabName) {
    // Ocultar todos los tabs
    document.querySelectorAll('.admin-tab-content').forEach(tab => {
        tab.classList.remove('show');
    });
    
    // Desactivar todos los botones
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar tab seleccionado
    document.getElementById('tab-' + tabName).classList.add('show');
    event.target.classList.add('active');
}

function renderizarTabDestinos() {
    const destinos = JSON.parse(localStorage.getItem('santa_marta_destinos') || '[]');
    
    let html = '<div class="admin-section">';
    html += '<h3>Gestionar Destinos</h3>';
    html += '<button class="btn btn-primary" onclick="abrirFormDestino()">+ Nuevo Destino</button>';
    html += '<div class="destinos-admin-list">';
    
    if (destinos.length === 0) {
        html += '<p style="color: #999;">No hay destinos aún</p>';
    } else {
        destinos.forEach(destino => {
            html += `
                <div class="destino-admin-item">
                    <div class="destino-admin-info">
                        <h4>${destino.nombre}</h4>
                        <p>${destino.descripcion.substring(0, 100)}...</p>
                    </div>
                    <div class="destino-admin-actions">
                        <button class="btn btn-small btn-secondary" onclick="editarDestino('${destino.id}')">✏️</button>
                        <button class="btn btn-small btn-danger" onclick="eliminarDestino('${destino.id}')">🗑️</button>
                    </div>
                </div>
            `;
        });
    }
    
    html += '</div></div>';
    return html;
}

function renderizarTabPaquetes() {
    return `
        <div class="admin-section">
            <h3>Gestionar Paquetes Turísticos</h3>
            <button class="btn btn-primary" onclick="abrirFormPaquete()">+ Nuevo Paquete</button>
            <p style="color: #999; margin-top: 20px;">Funcionalidad de paquetes en desarrollo...</p>
        </div>
    `;
}

function renderizarTabUsuarios() {
    const usuarios = auth.obtenerTodosUsuarios();
    
    let html = '<div class="admin-section">';
    html += '<h3>Usuarios Registrados</h3>';
    html += '<div class="usuarios-admin-list">';
    
    usuarios.forEach(usuario => {
        html += `
            <div class="usuario-admin-item">
                <div class="usuario-admin-info">
                    <h4>${usuario.nombre}</h4>
                    <p>${usuario.email}</p>
                    <span class="badge-user">${usuario.rol}</span>
                </div>
            </div>
        `;
    });
    
    html += '</div></div>';
    return html;
}

function abrirFormDestino() {
    const form = document.createElement('div');
    form.id = 'formDestinoModal';
    form.className = 'modal-backdrop show';
    form.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-header">
                <h2>Nuevo Destino</h2>
                <button class="modal-close" onclick="cerrarModal('formDestinoModal')">×</button>
            </div>
            <form onsubmit="guardarDestino(event)">
                <div class="form-group">
                    <label>Nombre del Destino:</label>
                    <input type="text" id="destNombre" required>
                </div>
                <div class="form-group">
                    <label>Descripción:</label>
                    <textarea id="destDescripcion" rows="4" required></textarea>
                </div>
                <div class="form-group">
                    <label>URL de Imagen:</label>
                    <input type="url" id="destImagen" required>
                </div>
                <div class="form-group">
                    <label>Ubicación:</label>
                    <input type="text" id="destUbicacion" required>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Destino</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(form);
}

function guardarDestino(event) {
    event.preventDefault();
    
    const destino = {
        id: Date.now().toString(),
        nombre: document.getElementById('destNombre').value,
        descripcion: document.getElementById('destDescripcion').value,
        imagen: document.getElementById('destImagen').value,
        ubicacion: document.getElementById('destUbicacion').value,
        fechaCreacion: new Date().toISOString()
    };
    
    let destinos = JSON.parse(localStorage.getItem('santa_marta_destinos') || '[]');
    destinos.push(destino);
    localStorage.setItem('santa_marta_destinos', JSON.stringify(destinos));
    
    alert('Destino guardado correctamente');
    cerrarModal('formDestinoModal');
    abrirPanelAdmin();
}

function abrirFormPaquete() {
    alert('Funcionalidad en desarrollo...');
}

function editarDestino(id) {
    alert('Funcionalidad de edición en desarrollo...');
}

function eliminarDestino(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este destino?')) {
        let destinos = JSON.parse(localStorage.getItem('santa_marta_destinos') || '[]');
        destinos = destinos.filter(d => d.id !== id);
        localStorage.setItem('santa_marta_destinos', JSON.stringify(destinos));
        alert('Destino eliminado');
        abrirPanelAdmin();
    }
}

function agregarEstilosAdmin() {
    if (document.querySelector('#estilos-admin')) return;
    
    const estilos = document.createElement('style');
    estilos.id = 'estilos-admin';
    estilos.textContent = `
        .admin-panel-overlay {
            z-index: 2000;
        }
        
        .admin-panel-dialog {
            background: white;
            border-radius: 12px;
            padding: 30px;
            max-width: 900px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 10px 50px rgba(0,0,0,0.3);
            animation: slideInDown 0.3s ease;
        }
        
        .admin-tabs {
            display: flex;
            gap: 10px;
            margin: 20px 0;
            border-bottom: 2px solid #E8E8E8;
        }
        
        .admin-tab-btn {
            padding: 12px 20px;
            background: none;
            border: none;
            border-bottom: 3px solid transparent;
            cursor: pointer;
            font-size: 1rem;
            color: #636E72;
            transition: all 0.3s;
        }
        
        .admin-tab-btn.active {
            color: #FF6B35;
            border-bottom-color: #FF6B35;
        }
        
        .admin-tab-btn:hover {
            color: #FF6B35;
        }
        
        .admin-content {
            margin-top: 20px;
        }
        
        .admin-tab-content {
            display: none;
        }
        
        .admin-tab-content.show {
            display: block;
        }
        
        .admin-section {
            padding: 20px;
            background: #F7F9FC;
            border-radius: 8px;
        }
        
        .admin-section h3 {
            color: #004E89;
            margin-top: 0;
        }
        
        .destinos-admin-list,
        .usuarios-admin-list {
            margin-top: 20px;
        }
        
        .destino-admin-item,
        .usuario-admin-item {
            background: white;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #E8E8E8;
        }
        
        .destino-admin-info h4,
        .usuario-admin-info h4 {
            margin: 0 0 5px 0;
            color: #004E89;
        }
        
        .destino-admin-info p {
            margin: 5px 0 0 0;
            color: #636E72;
            font-size: 0.9rem;
        }
        
        .destino-admin-actions {
            display: flex;
            gap: 5px;
        }
        
        .btn-danger {
            background: #E74C3C;
            color: white;
        }
        
        .btn-danger:hover {
            background: #C0392B;
        }
        
        .badge-user {
            display: inline-block;
            padding: 4px 10px;
            background: #FF6B35;
            color: white;
            border-radius: 20px;
            font-size: 0.8rem;
            margin-top: 5px;
        }
        
        .modal-lg {
            max-width: 700px;
        }
        
        textarea {
            font-family: inherit;
            padding: 12px 14px;
            border: 2px solid #e8e8e8;
            border-radius: 8px;
            width: 100%;
            resize: vertical;
            font-size: 0.95rem;
            color: #2a2a2a;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        textarea:focus {
            outline: none;
            border-color: #0D7377;
            box-shadow: 0 0 0 3px rgba(13, 115, 119, 0.1);
            background: #fdfbf8;
        }
    `;
    document.head.appendChild(estilos);
}

// Estilos adicionales para perfil
function agregarEstilosPerfil() {
    if (document.querySelector('#estilos-perfil')) return;
    
    const estilos = document.createElement('style');
    estilos.id = 'estilos-perfil';
    estilos.textContent = `
        .perfil-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 30px;
        }
        
        .perfil-avatar-section {
            text-align: center;
        }
        
        .perfil-avatar {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 4px solid #FF6B35;
            margin-bottom: 20px;
        }
        
        .perfil-avatar-section h3 {
            margin: 10px 0;
            color: #004E89;
        }
        
        .perfil-rol {
            color: #FF6B35;
            font-weight: 600;
        }
        
        .perfil-info {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .info-group label {
            font-weight: 600;
            color: #004E89;
            margin-bottom: 5px;
        }
        
        .info-group p {
            margin: 0;
            color: #636E72;
            background: #F7F9FC;
            padding: 10px;
            border-radius: 6px;
        }
        
        .perfil-opciones {
            display: flex;
            gap: 10px;
            justify-content: center;
            padding-top: 20px;
            border-top: 2px solid #E8E8E8;
        }
        
        .perfil-opciones button {
            flex: 1;
        }
        
        @media (max-width: 768px) {
            .perfil-container {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(estilos);
}

// Llamar a funciones de estilo cuando se carga la página
agregarEstilosPerfil();

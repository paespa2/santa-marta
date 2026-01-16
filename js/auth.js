// ============================================
// SISTEMA DE AUTENTICACIÓN CON ROLES
// ============================================

class SistemaAutenticacion {
    constructor() {
        this.usuariosKey = 'santa_marta_usuarios';
        this.usuarioActualKey = 'santa_marta_usuario_actual';
        this.inicializarUsuariosPorDefecto();
        this.usuarioActual = this.obtenerUsuarioActual();
    }

    // Inicializar con usuarios de prueba
    inicializarUsuariosPorDefecto() {
        const usuarios = this.obtenerTodosUsuarios();
        
        if (usuarios.length === 0) {
            const usuariosDefault = [
                {
                    id: 1,
                    nombre: 'Admin Santa Marta',
                    email: 'admin@santamarta.com',
                    password: 'admin123',
                    rol: 'admin',
                    telefono: '+57 5 421 1234',
                    avatar: 'https://via.placeholder.com/150?text=Admin',
                    fechaRegistro: new Date().toISOString()
                },
                {
                    id: 2,
                    nombre: 'Juan Pérez',
                    email: 'juan@example.com',
                    password: 'usuario123',
                    rol: 'cliente',
                    telefono: '+57 300 1234567',
                    avatar: 'https://via.placeholder.com/150?text=Juan',
                    fechaRegistro: new Date().toISOString()
                }
            ];
            
            localStorage.setItem(this.usuariosKey, JSON.stringify(usuariosDefault));
        }
    }

    // Registrar nuevo usuario
    registrar(nombre, email, password, telefono = '') {
        const usuarios = this.obtenerTodosUsuarios();
        
        // Verificar si el email ya existe
        if (usuarios.some(u => u.email === email)) {
            return { exito: false, mensaje: 'El email ya está registrado' };
        }
        
        const nuevoUsuario = {
            id: Date.now(),
            nombre,
            email,
            password, // En producción: encriptar
            rol: 'cliente',
            telefono,
            avatar: `https://via.placeholder.com/150?text=${nombre.charAt(0).toUpperCase()}`,
            fechaRegistro: new Date().toISOString()
        };
        
        usuarios.push(nuevoUsuario);
        localStorage.setItem(this.usuariosKey, JSON.stringify(usuarios));
        
        return { exito: true, mensaje: 'Registro exitoso', usuario: nuevoUsuario };
    }

    // Login
    login(email, password) {
        const usuarios = this.obtenerTodosUsuarios();
        const usuario = usuarios.find(u => u.email === email && u.password === password);
        
        if (!usuario) {
            return { exito: false, mensaje: 'Email o contraseña incorrectos' };
        }
        
        // Guardar usuario actual (sin contraseña)
        const usuarioSeguro = { ...usuario };
        delete usuarioSeguro.password;
        localStorage.setItem(this.usuarioActualKey, JSON.stringify(usuarioSeguro));
        this.usuarioActual = usuarioSeguro;
        
        return { exito: true, mensaje: 'Login exitoso', usuario: usuarioSeguro };
    }

    // Logout
    logout() {
        localStorage.removeItem(this.usuarioActualKey);
        this.usuarioActual = null;
    }

    // Obtener usuario actual
    obtenerUsuarioActual() {
        const usuario = localStorage.getItem(this.usuarioActualKey);
        return usuario ? JSON.parse(usuario) : null;
    }

    // Obtener todos los usuarios
    obtenerTodosUsuarios() {
        const usuarios = localStorage.getItem(this.usuariosKey);
        return usuarios ? JSON.parse(usuarios) : [];
    }

    // Verificar si está autenticado
    estaAutenticado() {
        return this.usuarioActual !== null;
    }

    // Verificar si es admin
    esAdmin() {
        return this.usuarioActual && this.usuarioActual.rol === 'admin';
    }

    // Actualizar perfil de usuario
    actualizarPerfil(datos) {
        const usuarios = this.obtenerTodosUsuarios();
        const index = usuarios.findIndex(u => u.id === this.usuarioActual.id);
        
        if (index === -1) return { exito: false, mensaje: 'Usuario no encontrado' };
        
        usuarios[index] = { ...usuarios[index], ...datos };
        localStorage.setItem(this.usuariosKey, JSON.stringify(usuarios));
        
        const usuarioActualizado = { ...usuarios[index] };
        delete usuarioActualizado.password;
        localStorage.setItem(this.usuarioActualKey, JSON.stringify(usuarioActualizado));
        this.usuarioActual = usuarioActualizado;
        
        return { exito: true, usuario: usuarioActualizado };
    }

    // Cambiar contraseña
    cambiarPassword(passwordActual, passwordNueva) {
        const usuarios = this.obtenerTodosUsuarios();
        const usuario = usuarios.find(u => u.id === this.usuarioActual.id);
        
        if (usuario.password !== passwordActual) {
            return { exito: false, mensaje: 'Contraseña actual incorrecta' };
        }
        
        usuario.password = passwordNueva;
        localStorage.setItem(this.usuariosKey, JSON.stringify(usuarios));
        
        return { exito: true, mensaje: 'Contraseña actualizada' };
    }
}

// Instancia global
const auth = new SistemaAutenticacion();

// Actualizar UI cuando cambia el estado de autenticación
function actualizarUIAutenticacion() {
    const navMenu = document.querySelector('.nav-menu');
    const botonAuth = document.querySelector('.btn-auth');
    
    if (!navMenu) return;
    
    // Limpiar botones de auth anteriores
    const botonesPrevios = navMenu.querySelectorAll('.auth-buttons');
    botonesPrevios.forEach(btn => btn.remove());
    
    if (auth.estaAutenticado()) {
        // Usuario autenticado - mostrar perfil y logout
        const authHTML = `
            <li class="auth-buttons">
                <div class="usuario-menu">
                    <img src="${auth.usuarioActual.avatar}" alt="Usuario" class="avatar-mini">
                    <span>${auth.usuarioActual.nombre}</span>
                    <div class="dropdown-menu">
                        <a href="#" onclick="abrirPerfilUsuario(); return false;">👤 Mi Perfil</a>
                        ${auth.esAdmin() ? '<a href="#" onclick="abrirPanelAdmin(); return false;">⚙️ Panel Admin</a>' : ''}
                        <hr style="margin: 5px 0; border: none; border-top: 1px solid #ddd;">
                        <a href="#" onclick="logout(); return false;">🚪 Cerrar Sesión</a>
                    </div>
                </div>
            </li>
        `;
        navMenu.insertAdjacentHTML('beforeend', authHTML);
    } else {
        // Usuario no autenticado - mostrar login/registro
        const authHTML = `
            <li class="auth-buttons">
                <button onclick="abrirLoginModal();" class="btn btn-secondary btn-small">Iniciar Sesión</button>
                <button onclick="abrirRegistroModal();" class="btn btn-primary btn-small">Registrarse</button>
            </li>
        `;
        navMenu.insertAdjacentHTML('beforeend', authHTML);
    }
    
    // Agregar estilos CSS si no existen
    agregarEstilosAuth();
}

function logout() {
    auth.logout();
    actualizarUIAutenticacion();
    alert('Sesión cerrada');
    window.scrollTo(0, 0);
}

function agregarEstilosAuth() {
    if (document.querySelector('#estilos-auth')) return;
    
    const estilos = document.createElement('style');
    estilos.id = 'estilos-auth';
    estilos.textContent = `
        .usuario-menu {
            position: relative;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 20px;
            background: rgba(255, 107, 53, 0.1);
            transition: background 0.3s;
        }
        
        .usuario-menu:hover {
            background: rgba(255, 107, 53, 0.2);
        }
        
        .avatar-mini {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 2px solid #FF6B35;
        }
        
        .dropdown-menu {
            display: none;
            position: absolute;
            top: 100%;
            right: 0;
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 10px 0;
            min-width: 200px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            z-index: 1000;
            margin-top: 5px;
        }
        
        .usuario-menu:hover .dropdown-menu {
            display: block;
        }
        
        .dropdown-menu a {
            display: block;
            padding: 10px 20px;
            color: #2D3436;
            text-decoration: none;
            transition: background 0.2s;
        }
        
        .dropdown-menu a:hover {
            background: #F7F9FC;
            color: #FF6B35;
        }
        
        .auth-buttons {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        
        .btn-small {
            padding: 8px 15px;
            font-size: 0.9rem;
        }
        
        /* Modal Styles */
        .modal-backdrop {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }
        
        .modal-backdrop.show {
            display: flex;
        }
        
        .modal-dialog {
            background: white;
            border-radius: 12px;
            padding: 30px;
            max-width: 400px;
            width: 90%;
            box-shadow: 0 10px 50px rgba(0,0,0,0.3);
            animation: slideInDown 0.3s ease;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .modal-header h2 {
            margin: 0;
            color: #004E89;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #999;
        }
        
        .modal-close:hover {
            color: #FF6B35;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: 600;
            color: #004E89;
        }
        
        .form-group input {
            width: 100%;
            padding: 10px;
            border: 2px solid #E8E8E8;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }
        
        .form-group input:focus {
            outline: none;
            border-color: #FF6B35;
            box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
        }
        
        .modal-footer {
            margin-top: 20px;
        }
        
        .modal-footer button {
            width: 100%;
            margin-bottom: 10px;
        }
        
        .modal-footer button:last-child {
            margin-bottom: 0;
        }
        
        .enlace-modal {
            text-align: center;
            margin-top: 15px;
            color: #636E72;
        }
        
        .enlace-modal a {
            color: #FF6B35;
            text-decoration: none;
            font-weight: 600;
            cursor: pointer;
        }
        
        .enlace-modal a:hover {
            text-decoration: underline;
        }
        
        .mensaje-error {
            background: #FADBD8;
            color: #78281F;
            padding: 10px;
            border-radius: 6px;
            margin-bottom: 15px;
            border-left: 4px solid #E74C3C;
        }
        
        .mensaje-exito {
            background: #D5F4E6;
            color: #186A3B;
            padding: 10px;
            border-radius: 6px;
            margin-bottom: 15px;
            border-left: 4px solid #27AE60;
        }
    `;
    document.head.appendChild(estilos);
}

// ============================================
// MODALES DE AUTENTICACIÓN
// ============================================

function crearModalLogin() {
    const modal = document.createElement('div');
    modal.id = 'modalLogin';
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-header">
                <h2>Iniciar Sesión</h2>
                <button class="modal-close" onclick="cerrarModal('modalLogin')">×</button>
            </div>
            <div class="modal-body">
                <div id="loginError"></div>
                <form id="formLogin" onsubmit="realizarLogin(event)">
                    <div class="form-group">
                        <label for="loginEmail">Email:</label>
                        <input type="email" id="loginEmail" required placeholder="tu@email.com">
                    </div>
                    <div class="form-group">
                        <label for="loginPassword">Contraseña:</label>
                        <input type="password" id="loginPassword" required placeholder="••••••••">
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Ingresar</button>
                    </div>
                </form>
                <div class="enlace-modal">
                    ¿No tienes cuenta? <a onclick="abrirRegistroModal(); cerrarModal('modalLogin');">Regístrate aquí</a>
                </div>
                <div style="text-align: center; margin-top: 15px; font-size: 0.9rem; color: #999;">
                    <p><strong>Demostración:</strong></p>
                    <p>Admin: admin@santamarta.com / admin123</p>
                    <p>Cliente: juan@example.com / usuario123</p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function crearModalRegistro() {
    const modal = document.createElement('div');
    modal.id = 'modalRegistro';
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-header">
                <h2>Registrarse</h2>
                <button class="modal-close" onclick="cerrarModal('modalRegistro')">×</button>
            </div>
            <div class="modal-body">
                <div id="registroError"></div>
                <form id="formRegistro" onsubmit="realizarRegistro(event)">
                    <div class="form-group">
                        <label for="registroNombre">Nombre Completo:</label>
                        <input type="text" id="registroNombre" required placeholder="Tu nombre">
                    </div>
                    <div class="form-group">
                        <label for="registroEmail">Email:</label>
                        <input type="email" id="registroEmail" required placeholder="tu@email.com">
                    </div>
                    <div class="form-group">
                        <label for="registroTelefono">Teléfono (opcional):</label>
                        <input type="tel" id="registroTelefono" placeholder="+57 300 1234567">
                    </div>
                    <div class="form-group">
                        <label for="registroPassword">Contraseña:</label>
                        <input type="password" id="registroPassword" required placeholder="••••••••">
                    </div>
                    <div class="form-group">
                        <label for="registroPasswordConfirm">Confirmar Contraseña:</label>
                        <input type="password" id="registroPasswordConfirm" required placeholder="••••••••">
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Crear Cuenta</button>
                    </div>
                </form>
                <div class="enlace-modal">
                    ¿Ya tienes cuenta? <a onclick="abrirLoginModal(); cerrarModal('modalRegistro');">Inicia sesión aquí</a>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function abrirLoginModal() {
    let modal = document.getElementById('modalLogin');
    if (!modal) {
        crearModalLogin();
        modal = document.getElementById('modalLogin');
    }
    modal.classList.add('show');
}

function abrirRegistroModal() {
    let modal = document.getElementById('modalRegistro');
    if (!modal) {
        crearModalRegistro();
        modal = document.getElementById('modalRegistro');
    }
    modal.classList.add('show');
}

function cerrarModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
    }
}

function realizarLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorDiv = document.getElementById('loginError');
    
    const resultado = auth.login(email, password);
    
    if (resultado.exito) {
        cerrarModal('modalLogin');
        actualizarUIAutenticacion();
        alert('¡Bienvenido ' + resultado.usuario.nombre + '!');
    } else {
        errorDiv.innerHTML = `<div class="mensaje-error">${resultado.mensaje}</div>`;
    }
}

function realizarRegistro(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('registroNombre').value;
    const email = document.getElementById('registroEmail').value;
    const password = document.getElementById('registroPassword').value;
    const passwordConfirm = document.getElementById('registroPasswordConfirm').value;
    const telefono = document.getElementById('registroTelefono').value;
    const errorDiv = document.getElementById('registroError');
    
    if (password !== passwordConfirm) {
        errorDiv.innerHTML = '<div class="mensaje-error">Las contraseñas no coinciden</div>';
        return;
    }
    
    const resultado = auth.registrar(nombre, email, password, telefono);
    
    if (resultado.exito) {
        errorDiv.innerHTML = `<div class="mensaje-exito">${resultado.mensaje}. Ahora inicia sesión.</div>`;
        document.getElementById('formRegistro').reset();
        setTimeout(() => {
            cerrarModal('modalRegistro');
            abrirLoginModal();
        }, 2000);
    } else {
        errorDiv.innerHTML = `<div class="mensaje-error">${resultado.mensaje}</div>`;
    }
}

// Cerrar modales
function cerrarModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// Cerrar modales al hacer click fuera
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-backdrop')) {
        event.target.classList.remove('show');
    }
});

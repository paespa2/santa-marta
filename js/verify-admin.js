/**
 * VERIFICACIÓN COMPLETA DEL PANEL ADMIN
 * Ejecuta en la consola (F12) para verificar todos los apartados
 */

(function verifyAdminPanel() {
    console.log("%c📋 VERIFICACIÓN DEL PANEL ADMIN", "color: #004E89; font-size: 16px; font-weight: bold;");
    
    const checks = [];
    
    // 1. Verificar que los datos existen
    const destinos = JSON.parse(localStorage.getItem('santa_marta_destinos') || '[]');
    const usuarios = JSON.parse(localStorage.getItem('santa_marta_usuarios') || '[]');
    const paquetes = JSON.parse(localStorage.getItem('santa_marta_paquetes') || '[]');
    const actividades = JSON.parse(localStorage.getItem('santa_marta_registro_actividades') || '[]');
    
    checks.push({
        nombre: "Destinos inicializados",
        resultado: destinos.length > 0,
        detalles: `${destinos.length} destinos cargados`
    });
    
    checks.push({
        nombre: "Usuarios inicializados",
        resultado: usuarios.length > 0,
        detalles: `${usuarios.length} usuarios cargados`
    });
    
    checks.push({
        nombre: "Paquetes inicializados",
        resultado: paquetes.length > 0,
        detalles: `${paquetes.length} paquetes cargados`
    });
    
    // 2. Verificar usuario autenticado
    const usuarioActual = JSON.parse(localStorage.getItem('santa_marta_usuario_actual') || 'null');
    const esAdmin = usuarioActual && usuarioActual.rol === 'admin';
    
    checks.push({
        nombre: "Usuario admin autenticado",
        resultado: esAdmin,
        detalles: esAdmin ? `${usuarioActual.nombre} (${usuarioActual.email})` : "No hay usuario admin"
    });
    
    // 3. Verificar funciones del panel
    const funcionesRequeridas = [
        'abrirPanelAdminMejorado',
        'cambiarSeccionAdmin',
        'renderizarDashboard',
        'renderizarGestionUsuarios',
        'renderizarGestionDestinos',
        'renderizarGestionPaquetes',
        'renderizarRegistroActividades',
        'renderizarConfiguracion',
        'cerrarModal',
        'editarDestino',
        'eliminarDestino',
        'toggleDestinoActivo',
        'editarPaquete'
    ];
    
    funcionesRequeridas.forEach(func => {
        const existe = typeof window[func] === 'function';
        checks.push({
            nombre: `Función: ${func}()`,
            resultado: existe,
            detalles: existe ? "✓ Disponible" : "✗ No disponible"
        });
    });
    
    // 4. Verificar propiedades activo en destinos
    const destinosConActivo = destinos.filter(d => d.hasOwnProperty('activo')).length;
    checks.push({
        nombre: "Destinos con propiedad 'activo'",
        resultado: destinosConActivo === destinos.length,
        detalles: `${destinosConActivo}/${destinos.length} destinos`
    });
    
    // 5. Verificar que hay destinos activos
    const destinosActivos = destinos.filter(d => d.activo).length;
    checks.push({
        nombre: "Destinos activos",
        resultado: destinosActivos > 0,
        detalles: `${destinosActivos}/${destinos.length} destinos visibles`
    });
    
    // Mostrar resultados
    console.log("\n%c--- RESULTADOS ---", "font-weight: bold; font-size: 14px;");
    checks.forEach(check => {
        const icon = check.resultado ? "✅" : "❌";
        console.log(`${icon} ${check.nombre}`);
        if (check.detalles) {
            console.log(`   → ${check.detalles}`);
        }
    });
    
    // Resumen final
    const pasados = checks.filter(c => c.resultado).length;
    const total = checks.length;
    console.log(`\n%c${pasados}/${total} verificaciones pasadas`, pasados === total ? "color: #27AE60; font-weight: bold;" : "color: #E74C3C; font-weight: bold;");
    
    if (pasados === total) {
        console.log("%c✨ PANEL ADMIN COMPLETAMENTE OPERATIVO ✨", "color: #27AE60; font-size: 14px; font-weight: bold;");
    } else {
        console.log(`%c⚠️ ${total - pasados} problema(s) detectado(s)`, "color: #E74C3C; font-weight: bold;");
    }
})();

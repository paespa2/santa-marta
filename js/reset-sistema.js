/**
 * SCRIPT DE LIMPIEZA Y REINICIO DEL SISTEMA
 * Ejecuta esto en la consola (F12) para resetear el localStorage
 */

(function resetSystem() {
    console.log("%c🔄 LIMPIANDO SISTEMA...", "color: #FF6B35; font-size: 16px; font-weight: bold;");
    
    // Limpiar todos los datos de localStorage
    const keysToRemove = [
        'santa_marta_destinos',
        'santa_marta_usuarios',
        'santa_marta_paquetes',
        'santa_marta_usuario_actual',
        'santa_marta_configuracion',
        'santa_marta_registro_actividades'
    ];
    
    keysToRemove.forEach(key => {
        localStorage.removeItem(key);
        console.log(`✅ Eliminado: ${key}`);
    });
    
    console.log("%c✅ localStorage limpiado", "color: #27AE60; font-weight: bold;");
    console.log("%c🔄 Recargando página...", "color: #1B9CFC; font-weight: bold;");
    
    // Recargar la página después de 1 segundo
    setTimeout(() => {
        window.location.reload();
    }, 1000);
})();

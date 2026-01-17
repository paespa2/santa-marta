
/**
 * TEST DE FUNCIONAMIENTO AUTOMATIZADO - Santa Marta Tours
 * Este script verifica las funcionalidades críticas del sistema.
 * Instrucciones: Copia y pega este código en la consola del navegador (F12)
 */

(function runTests() {
    console.log("%c🚀 INICIANDO TEST DE SISTEMA...", "color: #FF6B35; font-size: 16px; font-weight: bold;");
    
    const results = [];
    const report = (name, pass, detail = "") => {
        results.push({ name, pass, detail });
        console.log(`${pass ? "✅" : "❌"} ${name} ${detail ? `(${detail})` : ""}`);
    };

    try {
        // 1. Verificar Inicialización de Datos
        const destinos = JSON.parse(localStorage.getItem('santa_marta_destinos') || '[]');
        report("Inicialización de Destinos", destinos.length > 0, `Encontrados: ${destinos.length}`);

        const usuarios = JSON.parse(localStorage.getItem('santa_marta_usuarios') || '[]');
        report("Inicialización de Usuarios", usuarios.length > 0, `Encontrados: ${usuarios.length}`);

        // 2. Verificar Autenticación
        const admin = usuarios.find(u => u.rol === 'admin');
        if (admin) {
            const loginRes = auth.login(admin.email, admin.password);
            report("Login de Administrador", loginRes.exito, admin.email);
        } else {
            report("Login de Administrador", false, "No se encontró usuario admin");
        }

        // 3. Verificar Funcionalidad de Activación/Desactivación
        if (destinos.length > 0) {
            const destId = destinos[0].id;
            const originalStatus = destinos[0].activo;
            
            // Probar cambio a desactivado
            gestorDestinos.actualizarEstadoDestino(destId, false);
            let updatedDestinos = JSON.parse(localStorage.getItem('santa_marta_destinos'));
            const status1 = updatedDestinos.find(d => d.id === destId).activo === false;
            
            // Probar cambio a activado
            gestorDestinos.actualizarEstadoDestino(destId, true);
            updatedDestinos = JSON.parse(localStorage.getItem('santa_marta_destinos'));
            const status2 = updatedDestinos.find(d => d.id === destId).activo === true;
            
            report("Toggle Activo/Inactivo", status1 && status2, "Propiedad 'activo' funciona");
        }

        // 4. Verificar Registro de Actividades (Auditoría)
        const actividades = JSON.parse(localStorage.getItem('santa_marta_registro_actividades') || '[]');
        report("Sistema de Auditoría", actividades.length > 0, `Registros: ${actividades.length}`);

        // 5. Verificar Integridad de Paquetes
        const paquetes = JSON.parse(localStorage.getItem('santa_marta_paquetes') || '[]');
        report("Integridad de Paquetes", paquetes.length > 0, `Encontrados: ${paquetes.length}`);

        // 6. Verificar si renderizarDestinosPublicos existe
        report("Renderización Pública", typeof renderizarDestinosPublicos === 'function');

        // RESUMEN FINAL
        const totalPass = results.filter(r => r.pass).length;
        console.log("\n%c--- RESUMEN DEL TEST ---", "font-weight: bold;");
        console.table(results);
        
        if (totalPass === results.length) {
            console.log("%c¡SISTEMA 100% OPERATIVO! 🌟", "color: #27AE60; font-size: 14px; font-weight: bold;");
        } else {
            console.log(`%cAtención: ${results.length - totalPass} pruebas fallaron.`, "color: #E74C3C; font-weight: bold;");
        }

    } catch (error) {
        console.error("❌ ERROR CRÍTICO DURANTE EL TEST:", error);
    }
})();

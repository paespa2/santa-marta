// ============================================
// SISTEMA DE DESTINOS DINÁMICOS Y DETALLADOS
// ============================================

class GestorDestinos {
    constructor() {
        this.destinosKey = 'santa_marta_destinos';
        this.paquetesKey = 'santa_marta_paquetes';
        this.inicializarDestinosPorDefecto();
        this.inicializarPaquetesPorDefecto();
    }

    inicializarDestinosPorDefecto() {
        const destinos = JSON.parse(localStorage.getItem(this.destinosKey) || '[]');
        
        if (destinos.length === 0) {
            const destinosDefault = [
                {
                    id: '1',
                    nombre: 'Parque Nacional Tayrona',
                    descripcion: 'Uno de los parques más bellos del mundo, donde la selva tropical se encuentra con el mar Caribe.',
                    descripcionLarga: 'El Parque Nacional Natural Tayrona es una reserva natural ubicada en el departamento del Magdalena en Colombia, en el norte de América del Sur. El parque cubre 15,000 hectáreas y combina la selva tropical con playas de arena blanca. Es un destino ideal para senderismo, camping y disfrutar de la naturaleza.',
                    imagen: 'https://via.placeholder.com/800x500?text=Parque+Tayrona',
                    imagenes: [
                        'https://via.placeholder.com/600x400?text=Tayrona+1',
                        'https://via.placeholder.com/600x400?text=Tayrona+2',
                        'https://via.placeholder.com/600x400?text=Tayrona+3'
                    ],
                    ubicacion: 'Santa Marta, Magdalena',
                    entrada: 'COP $57,000',
                    horario: '8:00 AM - 4:00 PM',
                    atractivos: ['Senderismo', 'Playa virgen', 'Piscina natural', 'Fauna exótica'],
                    puntuacion: 4.8,
                    resenas: 234
                },
                {
                    id: '2',
                    nombre: 'Ciudad Perdida',
                    descripcion: 'Recorre una de las caminatas más fascinantes del mundo en la Sierra Nevada.',
                    descripcionLarga: 'La Ciudad Perdida es una ciudad antigua ubicada en las alturas de la Sierra Nevada. Aunque menos conocida que Machu Picchu, es un destino fascinante para aventureros. La caminata toma 4 días y requiere un buen nivel de condición física.',
                    imagen: 'https://via.placeholder.com/800x500?text=Ciudad+Perdida',
                    imagenes: [
                        'https://via.placeholder.com/600x400?text=Ciudad+1',
                        'https://via.placeholder.com/600x400?text=Ciudad+2',
                        'https://via.placeholder.com/600x400?text=Ciudad+3'
                    ],
                    ubicacion: 'Sierra Nevada',
                    duracion: '4 días',
                    dificultad: 'Alta',
                    atractivos: ['Trekking', 'Arqueología', 'Selva', 'Cascadas'],
                    puntuacion: 4.9,
                    resenas: 189
                },
                {
                    id: '3',
                    nombre: 'Playas Paradisíacas',
                    descripcion: 'Arenas blancas y aguas cristalinas en múltiples playas vírgenes.',
                    descripcionLarga: 'Santa Marta cuenta con más de 50 playas hermosas con aguas cristalinas. Desde playas tranquilas para relajación hasta paraísos submarinos para buceo.',
                    imagen: 'https://via.placeholder.com/800x500?text=Playas',
                    imagenes: [
                        'https://via.placeholder.com/600x400?text=Playa+1',
                        'https://via.placeholder.com/600x400?text=Playa+2',
                        'https://via.placeholder.com/600x400?text=Playa+3'
                    ],
                    ubicacion: 'Costa de Santa Marta',
                    entrada: 'Libre',
                    atractivos: ['Natación', 'Buceo', 'Relajación', 'Fotografía'],
                    puntuacion: 4.7,
                    resenas: 456
                },
                {
                    id: '4',
                    nombre: 'Sierra Nevada',
                    descripcion: 'Montañas nevadas con fauna y flora única a nivel tropical.',
                    descripcionLarga: 'La Sierra Nevada es la montaña tropical más alta del mundo con picos nevados a 5,730 metros. Es hogar de civilizaciones indígenas ancestrales y ecosistemas únicos.',
                    imagen: 'https://via.placeholder.com/800x500?text=Sierra+Nevada',
                    imagenes: [
                        'https://via.placeholder.com/600x400?text=Sierra+1',
                        'https://via.placeholder.com/600x400?text=Sierra+2',
                        'https://via.placeholder.com/600x400?text=Sierra+3'
                    ],
                    ubicacion: 'Sierra Nevada',
                    dificultad: 'Muy Alta',
                    atractivos: ['Montañismo', 'Nieve', 'Paisajes', 'Cultura indígena'],
                    puntuacion: 4.6,
                    resenas: 98
                },
                {
                    id: '5',
                    nombre: 'Centro Histórico',
                    descripcion: 'Arquitectura colonial y cultura viva en el corazón de Santa Marta.',
                    descripcionLarga: 'El centro histórico de Santa Marta conserva edificios coloniales hermosos y una atmósfera vibrante. Es perfecto para disfrutar de la gastronomía local y cultura.',
                    imagen: 'https://via.placeholder.com/800x500?text=Centro+Historico',
                    imagenes: [
                        'https://via.placeholder.com/600x400?text=Centro+1',
                        'https://via.placeholder.com/600x400?text=Centro+2',
                        'https://via.placeholder.com/600x400?text=Centro+3'
                    ],
                    ubicacion: 'Centro de Santa Marta',
                    entrada: 'Libre',
                    horario: '24/7',
                    atractivos: ['Cultura', 'Historia', 'Gastronomía', 'Arquitectura'],
                    puntuacion: 4.5,
                    resenas: 312
                },
                {
                    id: '6',
                    nombre: 'Buceo Submarino',
                    descripcion: 'Explora arrecifes de coral y vida marina en aguas cristalinas.',
                    descripcionLarga: 'Las aguas de Santa Marta albergan arrecifes de coral coloridos y abundante vida marina. Hay sitios para buceo para principiantes y avanzados.',
                    imagen: 'https://via.placeholder.com/800x500?text=Buceo',
                    imagenes: [
                        'https://via.placeholder.com/600x400?text=Buceo+1',
                        'https://via.placeholder.com/600x400?text=Buceo+2',
                        'https://via.placeholder.com/600x400?text=Buceo+3'
                    ],
                    ubicacion: 'Costas de Santa Marta',
                    entrada: 'Desde COP $150,000',
                    certificacion: 'Opcional',
                    atractivos: ['Buceo', 'Snorkel', 'Vida marina', 'Arrecifes'],
                    puntuacion: 4.8,
                    resenas: 267
                }
            ];
            
            localStorage.setItem(this.destinosKey, JSON.stringify(destinosDefault));
        }
    }

    inicializarPaquetesPorDefecto() {
        const paquetes = JSON.parse(localStorage.getItem(this.paquetesKey) || '[]');
        
        if (paquetes.length === 0) {
            const paquetesDefault = [
                {
                    id: '1',
                    nombre: 'Tayrona Express',
                    destinoId: '1',
                    duracion: '1 día',
                    precio: 'COP $120,000',
                    descripcion: 'Tour de un día al Parque Tayrona con guía experto',
                    incluye: ['Entrada al parque', 'Guía turístico', 'Transporte', 'Almuerzo'],
                    itinerario: [
                        '8:00 AM - Recogida en hotel',
                        '9:30 AM - Llegada al parque',
                        '10:00 AM - 2:00 PM - Exploración del parque',
                        '2:00 PM - Almuerzo',
                        '3:30 PM - Regreso al hotel'
                    ]
                },
                {
                    id: '2',
                    nombre: 'Aventura Ciudad Perdida',
                    destinoId: '2',
                    duracion: '4 días',
                    precio: 'COP $600,000',
                    descripcion: 'Trekking completo a la Ciudad Perdida',
                    incluye: ['Campamento', 'Guía profesional', 'Todas las comidas', 'Equipo'],
                    itinerario: [
                        'Día 1: Inicio del trek',
                        'Día 2: Cascadas y naturaleza',
                        'Día 3: Llegada a Ciudad Perdida',
                        'Día 4: Regreso'
                    ]
                }
            ];
            
            localStorage.setItem(this.paquetesKey, JSON.stringify(paquetesDefault));
        }
    }

    obtenerDestino(id) {
        const destinos = JSON.parse(localStorage.getItem(this.destinosKey) || '[]');
        return destinos.find(d => d.id === id);
    }

    obtenerTodosDestinos() {
        return JSON.parse(localStorage.getItem(this.destinosKey) || '[]');
    }

    obtenerPaquetesPorDestino(destinoId) {
        const paquetes = JSON.parse(localStorage.getItem(this.paquetesKey) || '[]');
        return paquetes.filter(p => p.destinoId === destinoId);
    }
}

const gestorDestinos = new GestorDestinos();

// ============================================
// PÁGINA DE DETALLE DE DESTINO
// ============================================

function abrirDetalleDestino(destinoId) {
    const destino = gestorDestinos.obtenerDestino(destinoId);
    
    if (!destino) {
        alert('Destino no encontrado');
        return;
    }
    
    const detalle = document.createElement('div');
    detalle.id = 'detalleDestinoModal';
    detalle.className = 'modal-backdrop show';
    detalle.innerHTML = `
        <div class="detalle-dialog">
            <div class="detalle-header">
                <button class="modal-close" onclick="cerrarModal('detalleDestinoModal')">×</button>
            </div>
            
            <div class="detalle-container">
                <!-- Galería de imágenes -->
                <div class="detalle-galeria">
                    <img src="${destino.imagen}" alt="${destino.nombre}" class="detalle-imagen-principal">
                    <div class="detalle-galeria-thumbs">
                        ${destino.imagenes.map((img, i) => `
                            <img src="${img}" alt="Imagen ${i+1}" class="thumb" onclick="cambiarImagenPrincipal(this)">
                        `).join('')}
                    </div>
                </div>
                
                <!-- Información -->
                <div class="detalle-info">
                    <h1>${destino.nombre}</h1>
                    <div class="detalle-puntuacion">
                        <div class="stars">${'⭐'.repeat(Math.floor(destino.puntuacion))}</div>
                        <span>${destino.puntuacion}/5 (${destino.resenas} reseñas)</span>
                    </div>
                    
                    <div class="detalle-resumen">
                        <p>${destino.descripcionLarga}</p>
                    </div>
                    
                    <div class="detalle-detalles">
                        <div class="detalle-item">
                            <span class="icono">📍</span>
                            <div>
                                <label>Ubicación</label>
                                <p>${destino.ubicacion}</p>
                            </div>
                        </div>
                        ${destino.entrada ? `
                            <div class="detalle-item">
                                <span class="icono">🎟️</span>
                                <div>
                                    <label>Entrada</label>
                                    <p>${destino.entrada}</p>
                                </div>
                            </div>
                        ` : ''}
                        ${destino.horario ? `
                            <div class="detalle-item">
                                <span class="icono">⏰</span>
                                <div>
                                    <label>Horario</label>
                                    <p>${destino.horario}</p>
                                </div>
                            </div>
                        ` : ''}
                        ${destino.duracion ? `
                            <div class="detalle-item">
                                <span class="icono">⏱️</span>
                                <div>
                                    <label>Duración</label>
                                    <p>${destino.duracion}</p>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                    
                    ${destino.atractivos ? `
                        <div class="detalle-atractivos">
                            <h3>Atractivos</h3>
                            <div class="atractivos-tags">
                                ${destino.atractivos.map(a => `<span class="tag">${a}</span>`).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
            
            <!-- Paquetes turísticos -->
            <div class="detalle-paquetes">
                <h2>Paquetes Turísticos Disponibles</h2>
                ${renderizarPaquetes(gestorDestinos.obtenerPaquetesPorDestino(destinoId))}
            </div>
        </div>
    `;
    
    document.body.appendChild(detalle);
    agregarEstilosDetalle();
}

function renderizarPaquetes(paquetes) {
    if (paquetes.length === 0) {
        return '<p style="color: #999;">No hay paquetes disponibles para este destino aún.</p>';
    }
    
    return `
        <div class="paquetes-grid">
            ${paquetes.map(paquete => `
                <div class="paquete-card">
                    <h3>${paquete.nombre}</h3>
                    <p class="paquete-duracion">⏱️ ${paquete.duracion}</p>
                    <p class="paquete-descripcion">${paquete.descripcion}</p>
                    
                    <div class="paquete-incluye">
                        <h4>Incluye:</h4>
                        <ul>
                            ${paquete.incluye.map(item => `<li>✓ ${item}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="paquete-itinerario">
                        <h4>Itinerario:</h4>
                        <ol>
                            ${paquete.itinerario.map(item => `<li>${item}</li>`).join('')}
                        </ol>
                    </div>
                    
                    <div class="paquete-footer">
                        <div class="paquete-precio">${paquete.precio}</div>
                        <button class="btn btn-primary" onclick="reservarPaquete('${paquete.id}')">Reservar Ahora</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function cambiarImagenPrincipal(elemento) {
    const principal = document.querySelector('.detalle-imagen-principal');
    const src = elemento.src;
    principal.src = src;
}

function reservarPaquete(paqueteId) {
    if (!auth.estaAutenticado()) {
        alert('Debes iniciar sesión para hacer una reserva');
        abrirLoginModal();
        return;
    }
    
    alert('¡Gracias por tu interés! Tu reserva ha sido registrada. Nos contactaremos pronto.');
}

function agregarEstilosDetalle() {
    if (document.querySelector('#estilos-detalle')) return;
    
    const estilos = document.createElement('style');
    estilos.id = 'estilos-detalle';
    estilos.textContent = `
        #detalleDestinoModal {
            z-index: 3000;
        }
        
        .detalle-dialog {
            background: white;
            border-radius: 12px;
            max-width: 1000px;
            width: 95%;
            max-height: 95vh;
            overflow-y: auto;
            box-shadow: 0 10px 50px rgba(0,0,0,0.3);
            animation: slideInUp 0.3s ease;
        }
        
        .detalle-header {
            position: sticky;
            top: 0;
            padding: 20px;
            background: white;
            border-bottom: 1px solid #E8E8E8;
            display: flex;
            justify-content: flex-end;
            z-index: 10;
        }
        
        .detalle-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            padding: 30px;
        }
        
        .detalle-galeria {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .detalle-imagen-principal {
            width: 100%;
            height: 400px;
            border-radius: 8px;
            object-fit: cover;
        }
        
        .detalle-galeria-thumbs {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }
        
        .detalle-galeria-thumbs .thumb {
            width: 100%;
            height: 100px;
            border-radius: 6px;
            object-fit: cover;
            cursor: pointer;
            border: 2px solid transparent;
            transition: border-color 0.3s;
        }
        
        .detalle-galeria-thumbs .thumb:hover {
            border-color: #FF6B35;
        }
        
        .detalle-info h1 {
            margin: 0 0 15px 0;
            color: #004E89;
            font-size: 2.5rem;
        }
        
        .detalle-puntuacion {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .detalle-puntuacion .stars {
            font-size: 1.2rem;
        }
        
        .detalle-resumen {
            margin-bottom: 20px;
            line-height: 1.8;
            color: #636E72;
        }
        
        .detalle-detalles {
            display: grid;
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .detalle-item {
            display: flex;
            gap: 15px;
            padding: 15px;
            background: #F7F9FC;
            border-radius: 8px;
        }
        
        .detalle-item .icono {
            font-size: 2rem;
        }
        
        .detalle-item label {
            font-weight: 600;
            color: #004E89;
            display: block;
        }
        
        .detalle-item p {
            margin: 5px 0 0 0;
            color: #636E72;
        }
        
        .detalle-atractivos {
            margin-top: 20px;
        }
        
        .detalle-atractivos h3 {
            color: #004E89;
            margin-bottom: 10px;
        }
        
        .atractivos-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .tag {
            display: inline-block;
            background: linear-gradient(135deg, #FF6B35, #FF8C42);
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
        }
        
        .detalle-paquetes {
            padding: 30px;
            background: #F7F9FC;
            border-top: 2px solid #E8E8E8;
        }
        
        .detalle-paquetes h2 {
            color: #004E89;
            margin-top: 0;
        }
        
        .paquetes-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        
        .paquete-card {
            background: white;
            border-radius: 8px;
            padding: 20px;
            border: 1px solid #E8E8E8;
            transition: all 0.3s;
        }
        
        .paquete-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .paquete-card h3 {
            color: #004E89;
            margin-top: 0;
        }
        
        .paquete-duracion {
            color: #FF6B35;
            font-weight: 600;
            margin: 10px 0;
        }
        
        .paquete-descripcion {
            color: #636E72;
            font-size: 0.95rem;
            margin: 10px 0;
        }
        
        .paquete-incluye,
        .paquete-itinerario {
            margin: 15px 0;
        }
        
        .paquete-incluye h4,
        .paquete-itinerario h4 {
            color: #004E89;
            margin: 10px 0 8px 0;
            font-size: 0.95rem;
        }
        
        .paquete-incluye ul,
        .paquete-itinerario ol {
            margin: 0;
            padding-left: 20px;
            color: #636E72;
            font-size: 0.9rem;
        }
        
        .paquete-incluye li,
        .paquete-itinerario li {
            margin-bottom: 5px;
        }
        
        .paquete-footer {
            display: flex;
            gap: 10px;
            align-items: center;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #E8E8E8;
        }
        
        .paquete-precio {
            font-size: 1.5rem;
            font-weight: 700;
            color: #FF6B35;
        }
        
        .paquete-footer button {
            flex: 1;
        }
        
        @media (max-width: 768px) {
            .detalle-container {
                grid-template-columns: 1fr;
            }
            
            .paquetes-grid {
                grid-template-columns: 1fr;
            }
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(estilos);
}

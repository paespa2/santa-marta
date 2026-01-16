// ============================================
// EJEMPLOS DE CÓDIGO AVANZADO
// DESCOMENTAR Y USAR SEGÚN SEA NECESARIO
// ============================================

// ============================================
// 1. SCROLL TO TOP BUTTON
// ============================================

/*
// Agregar este HTML antes de </body>:
<button class="scroll-to-top" id="scrollToTop">
    <i class="fas fa-arrow-up"></i>
</button>

// Agregar este código a script.js:
*/

const scrollToTopButton = document.getElementById('scrollToTop');

if (scrollToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// 2. CARGAR DATOS DE DESTINOS DINÁMICAMENTE
// ============================================

/*
// Agregar a script.js para cargar desde config.json:
*/

async function cargarDestinos() {
    try {
        const response = await fetch('config.json');
        const data = await response.json();
        
        console.log('Destinos cargados:', data.destinos);
        
        // Usar los datos para crear elementos dinámicamente
        data.destinos.forEach(destino => {
            console.log(`${destino.nombre}: ${destino.descripcion}`);
        });
    } catch (error) {
        console.error('Error cargando configuración:', error);
    }
}

// Llamar cuando cargue la página
// cargarDestinos();

// ============================================
// 3. SISTEMA DE RESERVAS BÁSICO
// ============================================

/*
// Crear archivo "reservas.js" con este contenido:
*/

class SistemaReservas {
    constructor() {
        this.reservas = [];
        this.cargarReservas();
    }
    
    agregarReserva(datos) {
        const reserva = {
            id: Date.now(),
            fecha: new Date(),
            ...datos
        };
        
        this.reservas.push(reserva);
        this.guardarReservas();
        return reserva;
    }
    
    obtenerReservas() {
        return this.reservas;
    }
    
    cancelarReserva(id) {
        this.reservas = this.reservas.filter(r => r.id !== id);
        this.guardarReservas();
    }
    
    guardarReservas() {
        localStorage.setItem('reservas', JSON.stringify(this.reservas));
    }
    
    cargarReservas() {
        const datos = localStorage.getItem('reservas');
        this.reservas = datos ? JSON.parse(datos) : [];
    }
}

// Uso:
// const reservas = new SistemaReservas();
// reservas.agregarReserva({ destino: 'Tayrona', personas: 4, fecha: '2026-02-20' });

// ============================================
// 4. MODAL DINÁMICO
// ============================================

/*
// HTML a agregar:
<div id="miModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h2>Información del Destino</h2>
            <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body" id="modalBody">
            <!-- Contenido dinámico aquí -->
        </div>
    </div>
</div>
*/

function abrirModal(titulo, contenido) {
    const modal = document.getElementById('miModal');
    if (!modal) return;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = contenido;
    
    const modalHeader = modal.querySelector('.modal-header h2');
    modalHeader.textContent = titulo;
    
    modal.classList.add('show');
}

function cerrarModal() {
    const modal = document.getElementById('miModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Usar:
// abrirModal('Parque Tayrona', '<p>Información completa...</p>');

// ============================================
// 5. CARRUSEL / SLIDER DE IMÁGENES
// ============================================

/*
// HTML:
<div class="carrusel">
    <div class="carrusel-container">
        <img src="imagen1.jpg" class="carrusel-slide" />
        <img src="imagen2.jpg" class="carrusel-slide" />
        <img src="imagen3.jpg" class="carrusel-slide" />
    </div>
    <button class="carrusel-prev">❮</button>
    <button class="carrusel-next">❯</button>
</div>

// CSS:
.carrusel {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
}

.carrusel-container {
    display: flex;
    transition: transform 0.5s ease;
}

.carrusel-slide {
    min-width: 100%;
    height: 400px;
    object-fit: cover;
}

.carrusel-prev, .carrusel-next {
    position: absolute;
    top: 50%;
    background: rgba(0,0,0,0.5);
    color: white;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    padding: 10px 15px;
    transform: translateY(-50%);
    z-index: 10;
}

.carrusel-prev { left: 10px; }
.carrusel-next { right: 10px; }

// JavaScript:
*/

class Carrusel {
    constructor(selector) {
        this.container = document.querySelector(selector + '-container');
        this.prevBtn = document.querySelector(selector + '-prev');
        this.nextBtn = document.querySelector(selector + '-next');
        this.slides = document.querySelectorAll(selector + '-slide');
        this.currentIndex = 0;
        
        this.prevBtn?.addEventListener('click', () => this.anterior());
        this.nextBtn?.addEventListener('click', () => this.siguiente());
    }
    
    siguiente() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.actualizar();
    }
    
    anterior() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.actualizar();
    }
    
    actualizar() {
        this.container.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
}

// Uso:
// const carrusel = new Carrusel('.carrusel');

// ============================================
// 6. FILTRO DE DESTINOS
// ============================================

/*
// HTML:
<div class="filtros">
    <button class="filtro-btn active" data-filtro="todos">Todos</button>
    <button class="filtro-btn" data-filtro="naturaleza">Naturaleza</button>
    <button class="filtro-btn" data-filtro="cultura">Cultura</button>
    <button class="filtro-btn" data-filtro="aventura">Aventura</button>
</div>

<div class="destinos-grid">
    <div class="destino-card" data-categoria="naturaleza aventura">...</div>
    <div class="destino-card" data-categoria="cultura">...</div>
    <!-- más destinos -->
</div>
*/

function inicializarFiltros() {
    const filtroButtons = document.querySelectorAll('.filtro-btn');
    const destinoCards = document.querySelectorAll('.destino-card');
    
    filtroButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Actualizar botón activo
            filtroButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filtro = btn.dataset.filtro;
            
            // Filtrar destinos
            destinoCards.forEach(card => {
                const categorias = card.dataset.categoria;
                
                if (filtro === 'todos' || categorias.includes(filtro)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Llamar cuando cargue:
// inicializarFiltros();

// ============================================
// 7. SISTEMA DE RESEÑAS
// ============================================

/*
// HTML:
<div class="resenas">
    <div class="resena-form">
        <h3>Dejar una Reseña</h3>
        <form id="formResena">
            <input type="text" placeholder="Tu Nombre" required>
            <select required>
                <option>-- Calificación --</option>
                <option>⭐ (1 estrella)</option>
                <option>⭐⭐ (2 estrellas)</option>
                <option>⭐⭐⭐ (3 estrellas)</option>
                <option>⭐⭐⭐⭐ (4 estrellas)</option>
                <option>⭐⭐⭐⭐⭐ (5 estrellas)</option>
            </select>
            <textarea placeholder="Tu comentario" required></textarea>
            <button type="submit" class="btn btn-primary">Enviar Reseña</button>
        </form>
    </div>
    
    <div class="resenas-list" id="resenasList"></div>
</div>
*/

class SistemaResenas {
    constructor(formSelector, listSelector) {
        this.form = document.querySelector(formSelector);
        this.listContainer = document.querySelector(listSelector);
        this.resenas = this.cargarResenas();
        
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.agregar(e));
        }
        
        this.mostrarResenas();
    }
    
    agregar(event) {
        event.preventDefault();
        
        const formData = new FormData(this.form);
        const resena = {
            id: Date.now(),
            nombre: this.form.querySelector('input').value,
            calificacion: this.form.querySelector('select').value,
            comentario: this.form.querySelector('textarea').value,
            fecha: new Date().toLocaleDateString('es-ES')
        };
        
        this.resenas.unshift(resena);
        this.guardarResenas();
        this.mostrarResenas();
        this.form.reset();
    }
    
    mostrarResenas() {
        this.listContainer.innerHTML = '';
        
        this.resenas.forEach(resena => {
            const div = document.createElement('div');
            div.className = 'resena-item';
            div.innerHTML = `
                <div class="resena-header">
                    <strong>${resena.nombre}</strong>
                    <span class="resena-fecha">${resena.fecha}</span>
                </div>
                <div class="resena-calificacion">${resena.calificacion}</div>
                <p>${resena.comentario}</p>
            `;
            this.listContainer.appendChild(div);
        });
    }
    
    guardarResenas() {
        localStorage.setItem('resenas', JSON.stringify(this.resenas));
    }
    
    cargarResenas() {
        const datos = localStorage.getItem('resenas');
        return datos ? JSON.parse(datos) : [];
    }
}

// Uso:
// const resenas = new SistemaResenas('#formResena', '#resenasList');

// ============================================
// 8. MAPA INTERACTIVO (con Leaflet)
// ============================================

/*
// Agregar al HTML <head>:
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

// Agregar elemento:
<div id="mapa" style="height: 500px; border-radius: 12px; margin: 20px 0;"></div>

// JavaScript:
*/

function inicializarMapa() {
    const map = L.map('mapa').setView([11.2432, -74.1974], 12);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    
    // Agregar marcadores
    const sitios = [
        { nombre: 'Parque Tayrona', lat: 11.3117, lng: -74.1489 },
        { nombre: 'Centro Histórico', lat: 11.2432, lng: -74.1974 },
        { nombre: 'Playa Brava', lat: 11.3233, lng: -74.1467 }
    ];
    
    sitios.forEach(sitio => {
        L.marker([sitio.lat, sitio.lng])
            .bindPopup(sitio.nombre)
            .addTo(map);
    });
}

// Llamar cuando DOM esté listo:
// if (document.querySelector('#mapa')) inicializarMapa();

// ============================================
// INSTRUCCIONES DE USO
// ============================================

/*
1. Descomenta el código que necesites
2. Copia la sección (HTML + CSS + JavaScript)
3. Pega en los archivos correspondientes
4. Prueba en el navegador
5. Personaliza según sea necesario

Para errores:
- Abre la consola (F12)
- Lee el mensaje de error
- Verifica que los selectores CSS coincidan
- Comprueba que los archivos estén vinculados correctamente
*/

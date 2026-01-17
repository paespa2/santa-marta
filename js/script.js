// ============================================
// VARIABLES Y ELEMENTOS DEL DOM
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const contactForm = document.querySelector('.contacto-form');

// ============================================
// MENÚ HAMBURGUESA
// ============================================

function toggleMenu() {
    navMenu.classList.toggle('active');
    
    // Animar las líneas del hamburger
    hamburger.style.transform = navMenu.classList.contains('active') 
        ? 'rotate(90deg)' 
        : 'rotate(0)';
}

hamburger.addEventListener('click', toggleMenu);

// Cerrar menú al hacer click en un link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.style.transform = 'rotate(0)';
    });
});

// ============================================
// NAVBAR STICKY CON CAMBIO DE ESTILO
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// ============================================
// ANIMACIÓN DE CARDS AL SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards de destinos y actividades
document.querySelectorAll('.destino-card, .actividad-item, .stat-box').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ============================================
// CONTADOR ANIMADO
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Activar contadores cuando se ven en pantalla
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const h3 = entry.target.querySelector('h3');
            const number = parseInt(h3.textContent);
            
            if (!entry.target.hasAttribute('data-animated')) {
                animateCounter(h3, number);
                entry.target.setAttribute('data-animated', 'true');
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-box').forEach(box => {
    statsObserver.observe(box);
});

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    
    // Simular envío
    const button = contactForm.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = '¡Mensaje enviado!';
    button.style.background = '#27AE60';
    
    // Limpiar formulario
    contactForm.reset();
    
    // Restaurar botón después de 3 segundos
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 3000);
    
    console.log('Formulario enviado:', { name, ...Object.fromEntries(formData) });
});

// ============================================
// EFECTO PARALLAX EN HERO
// ============================================

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    hero.style.backgroundPosition = `0px ${scrollPosition * 0.5}px`;
});

// ============================================
// GALERÍA CON LIGHTBOX
// ============================================

const galeriaItems = document.querySelectorAll('.galeria-item');

galeriaItems.forEach(item => {
    item.addEventListener('click', function() {
        createLightbox(this.querySelector('img').src);
    });
});

function createLightbox(imageSrc) {
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        cursor: pointer;
        animation: fadeIn 0.3s ease;
    `;
    
    // Crear imagen
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 8px;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
    `;
    
    // Crear botón cerrar
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 30px;
        background: none;
        border: none;
        color: white;
        font-size: 40px;
        cursor: pointer;
        z-index: 2001;
        transition: transform 0.2s;
    `;
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.transform = 'scale(1.2)';
    });
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.transform = 'scale(1)';
    });
    
    // Cerrar lightbox
    const closeLightbox = () => {
        overlay.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => overlay.remove(), 300);
    };
    
    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLightbox();
    });
    
    // Tecla ESC para cerrar
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            document.removeEventListener('keydown', handleEscape);
            closeLightbox();
        }
    };
    
    document.addEventListener('keydown', handleEscape);
    
    overlay.appendChild(img);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
}

// Agregar animaciones CSS necesarias
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// SMOOTH SCROLL ENHANCEMENT
// ============================================

// Ya está en el HTML con onclick, pero añadimos más opciones

document.addEventListener('DOMContentLoaded', function() {
    // Agregar clase activa al link de navegación actual
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-menu a');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.style.color = 'var(--primary-color)';
        }
    });
    
    // Renderizar destinos activos en la página principal
    setTimeout(() => renderizarDestinosPublicos(), 500);
});

// ============================================
// TOOLTIPS DINÁMICOS
// ============================================

const destinos = {
    'tayrona': {
        titulo: 'Parque Nacional Tayrona',
        descripcion: 'Uno de los parques más bellos del mundo, donde la selva tropical se encuentra con el mar Caribe. Playas vírgenes, fauna exótica y caminos eco-turísticos.',
        horario: 'Abierto: 8:00 AM - 4:00 PM',
        entrada: 'COP $57,000'
    },
    'ciudad-perdida': {
        titulo: 'Ciudad Perdida',
        descripcion: 'Recorre una de las caminatas más hermosas del mundo en la Sierra Nevada. Este trekking de 4 días te lleva a ruinas milenarias precolombinas.',
        horario: 'Tours: Todos los días',
        entrada: 'Desde COP $600,000'
    },
    'playas': {
        titulo: 'Playas Paradisíacas',
        descripcion: 'Disfruta de arenas blancas, aguas cristalinas y suntuosos atardeceres. Desde playas tranquilas hasta paraísos submarinos.',
        horario: 'Acceso: 24/7',
        entrada: 'Libre'
    },
    'sierra-nevada': {
        titulo: 'Sierra Nevada',
        descripcion: 'La montaña más alta del mundo tropical, con picos nevados a 5,730 metros. Hogar de civilizaciones indígenas ancestrales.',
        horario: 'Con guía autorizado',
        entrada: 'Varía según operador'
    },
    'centro-historico': {
        titulo: 'Centro Histórico',
        descripcion: 'Explora la arquitectura colonial, plazas vibrantes y museos culturales. Centro de la vida local y cultural de Santa Marta.',
        horario: 'Abierto: 9:00 AM - 6:00 PM',
        entrada: 'Libre'
    },
    'buceo': {
        titulo: 'Buceo Submarino',
        descripcion: 'Explora arrecifes de coral coloridos y vida marina. Buceo para principiantes y avanzados con operadores certificados.',
        horario: 'Tours disponibles',
        entrada: 'Desde COP $150,000'
    }
};

// Información adicional en console
console.log('%cBienvenido a Santa Marta Tours', 'font-size: 20px; font-weight: bold; color: #FF6B35;');
console.log('%cDestino turístico único en el Caribe colombiano', 'font-size: 14px; color: #004E89;');
console.log('Para más información sobre destinos específicos, consulta la variable global "destinos"');

// ============================================
// DETECCIÓN DE MOVIMIENTO PARA EFECTOS
// ============================================

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// ============================================
// PRELOAD DE IMÁGENES
// ============================================

function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.src;
        const newImg = new Image();
        newImg.src = src;
    });
}

window.addEventListener('load', preloadImages);

// ============================================
// SHARED DATA OBJECT
// ============================================

window.destinos = destinos;

// ============================================
// CREAR IMAGEN PLACEHOLDER SVG
// ============================================

function crearPlaceholderSVG(texto, ancho = 400, alto = 300) {
    const colors = ['#FF6B35', '#004E89', '#1B9CFC', '#27AE60', '#F39C12'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${ancho}' height='${alto}'%3E%3Crect fill='${encodeURIComponent(color)}' width='${ancho}' height='${alto}'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='18' fill='white' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(texto)}%3C/text%3E%3C/svg%3E`;
}

// ============================================
// RENDERIZAR DESTINOS EN LA PÁGINA PRINCIPAL
// ============================================

function renderizarDestinosPublicos() {
    const destinosContainer = document.querySelector('.destinos-grid');
    if (!destinosContainer) return;

    const todosDestinos = gestorDestinos.obtenerTodosDestinos();
    const destinosActivos = todosDestinos.filter(destino => destino.activo);

    destinosContainer.innerHTML = destinosActivos.map(destino => `
        <div class="destino-card">
            <div class="destino-image destino-${destino.id}">
                <img src="${crearPlaceholderSVG(destino.nombre, 400, 300)}" alt="${destino.nombre}">
            </div>
            <div class="destino-content">
                <h3>${destino.nombre}</h3>
                <p>${destino.descripcion}</p>
                <button class="btn btn-secondary" onclick="abrirDetalleDestino('${destino.id}')">Ver Más</button>
            </div>
        </div>
    `).join('');
}

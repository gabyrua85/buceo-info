// Datos de países
const paises = [
    // América del Norte
    {
        nombre: "México",
        imagen: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas y claras en el Caribe (26-29°C), más frías en el Pacífico (20-24°C). Visibilidad excelente en el Caribe (30-40m), moderada en el Pacífico (15-25m)",
        mareas: "Moderadas en el Caribe, más fuertes en el Pacífico. Corrientes suaves a moderadas",
        epocaIdeal: "Todo el año, mejor de diciembre a abril. Temporada de tiburón ballena: junio a septiembre",
        ropaRecomendada: "Traje de neopreno 3mm en el Caribe, 5mm en el Pacífico. Guantes y capucha recomendados en el Pacífico"
    },
    {
        nombre: "Estados Unidos",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas templadas en Florida (24-28°C), frías en California (12-18°C). Visibilidad variable: 10-30m",
        mareas: "Moderadas a fuertes. Corrientes significativas en algunas áreas",
        epocaIdeal: "Florida: todo el año. California: mayo a octubre",
        ropaRecomendada: "Florida: traje 3mm. California: traje 7mm con capucha y guantes"
    },
    {
        nombre: "Canadá",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas frías (8-14°C). Visibilidad excelente (20-30m)",
        mareas: "Moderadas. Corrientes suaves a moderadas",
        epocaIdeal: "Junio a septiembre",
        ropaRecomendada: "Traje seco o traje húmedo 7mm con capucha y guantes"
    },
    // América Central
    {
        nombre: "Costa Rica",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (26-29°C). Visibilidad buena (15-25m)",
        mareas: "Moderadas. Corrientes ocasionales",
        epocaIdeal: "Diciembre a abril",
        ropaRecomendada: "Traje de neopreno 3mm"
    },
    {
        nombre: "Belice",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (26-29°C). Visibilidad excelente (30-40m)",
        mareas: "Suaves a moderadas",
        epocaIdeal: "Abril a junio",
        ropaRecomendada: "Traje de neopreno 3mm"
    },
    {
        nombre: "Panamá",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (26-29°C). Visibilidad buena (20-30m)",
        mareas: "Moderadas. Corrientes ocasionales",
        epocaIdeal: "Diciembre a abril",
        ropaRecomendada: "Traje de neopreno 3mm"
    },
    {
        nombre: "Honduras",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (26-29°C). Visibilidad excelente (30-40m)",
        mareas: "Suaves a moderadas",
        epocaIdeal: "Marzo a mayo",
        ropaRecomendada: "Traje de neopreno 3mm"
    },
    // América del Sur
    {
        nombre: "Brasil",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (24-28°C). Visibilidad variable (10-25m)",
        mareas: "Moderadas a fuertes",
        epocaIdeal: "Octubre a marzo",
        ropaRecomendada: "Traje de neopreno 3mm"
    },
    {
        nombre: "Colombia",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (26-29°C). Visibilidad buena (20-30m)",
        mareas: "Moderadas",
        epocaIdeal: "Diciembre a abril",
        ropaRecomendada: "Traje de neopreno 3mm"
    },
    {
        nombre: "Ecuador",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas templadas (18-24°C). Visibilidad variable (10-20m)",
        mareas: "Fuertes. Corrientes significativas",
        epocaIdeal: "Junio a noviembre",
        ropaRecomendada: "Traje de neopreno 5mm"
    },
    {
        nombre: "Perú",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas frías (14-18°C). Visibilidad variable (5-15m)",
        mareas: "Fuertes",
        epocaIdeal: "Octubre a mayo",
        ropaRecomendada: "Traje de neopreno 7mm"
    },
    {
        nombre: "Chile",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas frías (10-15°C). Visibilidad excelente (20-30m)",
        mareas: "Moderadas a fuertes",
        epocaIdeal: "Noviembre a marzo",
        ropaRecomendada: "Traje seco o traje húmedo 7mm"
    },
    // Europa
    {
        nombre: "España",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas templadas (18-24°C). Visibilidad buena (15-25m)",
        mareas: "Moderadas",
        epocaIdeal: "Junio a septiembre",
        ropaRecomendada: "Traje de neopreno 5mm"
    },
    {
        nombre: "Italia",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas templadas (20-26°C). Visibilidad excelente (20-30m)",
        mareas: "Suaves a moderadas",
        epocaIdeal: "Mayo a octubre",
        ropaRecomendada: "Traje de neopreno 5mm"
    },
    {
        nombre: "Grecia",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas templadas (20-26°C). Visibilidad excelente (20-30m)",
        mareas: "Suaves",
        epocaIdeal: "Mayo a octubre",
        ropaRecomendada: "Traje de neopreno 5mm"
    },
    {
        nombre: "Croacia",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas templadas (20-26°C). Visibilidad excelente (20-30m)",
        mareas: "Suaves",
        epocaIdeal: "Junio a septiembre",
        ropaRecomendada: "Traje de neopreno 5mm"
    },
    {
        nombre: "Malta",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas templadas (20-26°C). Visibilidad excelente (20-30m)",
        mareas: "Suaves a moderadas",
        epocaIdeal: "Mayo a octubre",
        ropaRecomendada: "Traje de neopreno 5mm"
    },
    // Asia
    {
        nombre: "Tailandia",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (26-29°C). Visibilidad buena (15-25m)",
        mareas: "Suaves",
        epocaIdeal: "Noviembre a abril",
        ropaRecomendada: "Traje de neopreno 3mm"
    },
    {
        nombre: "Maldivas",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (26-29°C). Visibilidad excelente (30-40m)",
        mareas: "Suaves a moderadas",
        epocaIdeal: "Diciembre a abril",
        ropaRecomendada: "Traje de neopreno 3mm"
    },
    {
        nombre: "Filipinas",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (26-29°C). Visibilidad excelente (20-30m)",
        mareas: "Moderadas",
        epocaIdeal: "Octubre a mayo",
        ropaRecomendada: "Traje de neopreno 3mm"
    },
    {
        nombre: "Indonesia",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (26-29°C). Visibilidad excelente (20-30m)",
        mareas: "Moderadas a fuertes",
        epocaIdeal: "Abril a noviembre",
        ropaRecomendada: "Traje de neopreno 3mm"
    },
    {
        nombre: "Japón",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas templadas a frías (18-24°C). Visibilidad variable (10-20m)",
        mareas: "Moderadas a fuertes",
        epocaIdeal: "Junio a septiembre",
        ropaRecomendada: "Traje de neopreno 5mm"
    },
    // Oceanía
    {
        nombre: "Australia",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas templadas (22-26°C). Visibilidad excelente (20-30m)",
        mareas: "Moderadas",
        epocaIdeal: "Junio a noviembre",
        ropaRecomendada: "Traje de neopreno 5mm"
    },
    {
        nombre: "Nueva Zelanda",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas frías (14-18°C). Visibilidad excelente (20-30m)",
        mareas: "Moderadas a fuertes",
        epocaIdeal: "Diciembre a febrero",
        ropaRecomendada: "Traje seco o traje húmedo 7mm"
    },
    {
        nombre: "Fiji",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (26-29°C). Visibilidad excelente (30-40m)",
        mareas: "Suaves a moderadas",
        epocaIdeal: "Abril a octubre",
        ropaRecomendada: "Traje de neopreno 3mm"
    },
    {
        nombre: "Samoa",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (26-29°C). Visibilidad excelente (30-40m)",
        mareas: "Suaves",
        epocaIdeal: "Mayo a octubre",
        ropaRecomendada: "Traje de neopreno 3mm"
    },
    // África
    {
        nombre: "Egipto",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (24-28°C). Visibilidad excelente (30-40m)",
        mareas: "Suaves",
        epocaIdeal: "Marzo a mayo y septiembre a noviembre",
        ropaRecomendada: "Traje de neopreno 3mm"
    },
    {
        nombre: "Sudáfrica",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas frías (14-18°C). Visibilidad variable (10-20m)",
        mareas: "Fuertes",
        epocaIdeal: "Abril a septiembre",
        ropaRecomendada: "Traje seco o traje húmedo 7mm"
    },
    {
        nombre: "Mozambique",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (24-28°C). Visibilidad buena (20-30m)",
        mareas: "Moderadas",
        epocaIdeal: "Abril a diciembre",
        ropaRecomendada: "Traje de neopreno 3mm"
    },
    {
        nombre: "Tanzania",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (24-28°C). Visibilidad buena (20-30m)",
        mareas: "Moderadas",
        epocaIdeal: "Octubre a febrero",
        ropaRecomendada: "Traje de neopreno 3mm"
    },
    {
        nombre: "Seychelles",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Aguas cálidas (26-29°C). Visibilidad excelente (30-40m)",
        mareas: "Suaves a moderadas",
        epocaIdeal: "Abril a mayo y octubre a noviembre",
        ropaRecomendada: "Traje de neopreno 3mm"
    }
];

// Función para buscar país
function buscarPais() {
    const input = document.getElementById('paisInput');
    const pais = input.value.trim();
    
    if (pais === '') {
        alert('Por favor, ingresa el nombre de un país');
        return;
    }

    const paisEncontrado = paises.find(p => p.nombre.toLowerCase() === pais.toLowerCase());
    
    if (paisEncontrado) {
        mostrarResultado(paisEncontrado);
    } else {
        document.getElementById('resultado').innerHTML = '<p>País no encontrado. Por favor, intenta con otro nombre.</p>';
    }
}

// Función para mostrar resultado
function mostrarResultado(pais) {
    const container = document.getElementById('resultado');
    container.innerHTML = `
        <div class="pais-info">
            <h2>${pais.nombre}</h2>
            <img src="${pais.imagen}" alt="${pais.nombre}" class="pais-image">
            <div class="info-section">
                <h3>Condiciones del Mar</h3>
                <p>${pais.condicionesMar}</p>
            </div>
            <div class="info-section">
                <h3>Mareas</h3>
                <p>${pais.mareas}</p>
            </div>
            <div class="info-section">
                <h3>Época Ideal</h3>
                <p>${pais.epocaIdeal}</p>
            </div>
            <div class="info-section">
                <h3>Ropa Recomendada</h3>
                <p>${pais.ropaRecomendada}</p>
            </div>
        </div>
    `;
}

// Función para filtrar por región
function filtrarPorRegion() {
    const region = document.getElementById('regionSelect').value;
    const container = document.getElementById('resultado');
    
    if (region === '') {
        container.innerHTML = '';
        return;
    }

    const paisesRegion = paises.filter(p => p.region === region);
    
    if (paisesRegion.length === 0) {
        container.innerHTML = '<p>No hay países disponibles para esta región.</p>';
        return;
    }

    let html = '<div class="region-info">';
    paisesRegion.forEach(pais => {
        html += `
            <div class="pais-card">
                <h3>${pais.nombre}</h3>
                <img src="${pais.imagen}" alt="${pais.nombre}" class="pais-image">
                <p><strong>Condiciones del Mar:</strong> ${pais.condicionesMar}</p>
                <p><strong>Época Ideal:</strong> ${pais.epocaIdeal}</p>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

// Inicializar el mapa
let map;
function initMap() {
    if (map) {
        map.remove();
    }
    
    map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

// Función para mostrar información por región
function mostrarRegion(region) {
    const infoRegion = regiones[region];
    if (!infoRegion) return;

    const container = document.getElementById('resultado');
    container.innerHTML = `
        <div class="region-info">
            <h2>${infoRegion.nombre}</h2>
            <img src="${infoRegion.imagen}" alt="${infoRegion.nombre}" class="region-image">
            <p>${infoRegion.descripcion}</p>
            <h3>Condiciones Generales</h3>
            <p>${infoRegion.condicionesGenerales}</p>
            <h3>Época Ideal</h3>
            <p>${infoRegion.epocaIdeal}</p>
            <h3>Especies Comunes</h3>
            <ul>
                ${infoRegion.especiesComunes.map(especie => `<li>${especie}</li>`).join('')}
            </ul>
            <h3>Equipamiento Recomendado</h3>
            <ul>
                ${infoRegion.equipamientoRecomendado.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;

    // Actualizar las secciones de información
    document.getElementById('condicionesMar').innerHTML = `<p>${infoRegion.condicionesGenerales}</p>`;
    document.getElementById('epocaIdeal').innerHTML = `<p>${infoRegion.epocaIdeal}</p>`;
    document.getElementById('ropaRecomendada').innerHTML = `<p>${infoRegion.equipamientoRecomendado.join(', ')}</p>`;
}

// Función para mostrar especies marinas
function mostrarEspeciesMarinas(pais) {
    const especies = paisesBuceo[pais]?.especiesMarinas || [];
    const container = document.getElementById('especiesMarinas');
    
    if (especies.length === 0) {
        container.innerHTML = '<p>No hay información disponible sobre especies marinas para este país.</p>';
        return;
    }

    let html = '<div class="species-grid">';
    especies.forEach(especie => {
        html += `
            <div class="species-card">
                <img src="${especie.imagen}" alt="${especie.nombre}" onerror="this.src='https://via.placeholder.com/300x200?text=Imagen+no+disponible'">
                <h4>${especie.nombre}</h4>
                <p>${especie.descripcion}</p>
                <p><strong>Época:</strong> ${especie.epoca}</p>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

// Función para mostrar equipamiento
function mostrarEquipamiento(pais) {
    const equip = equipamiento[pais] || [];
    const container = document.getElementById('equipamiento');
    
    if (equip.length === 0) {
        container.innerHTML = '<p>No hay información disponible sobre equipamiento para este país.</p>';
        return;
    }

    const html = `
        <div class="equipment-list">
            ${equip.map(item => `
                <div class="equipment-item">
                    <img src="${item.imagen}" alt="${item.nombre}">
                    <div>
                        <h3>${item.nombre}</h3>
                        <p>${item.descripcion}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    container.innerHTML = html;
}

// Función para mostrar galería
function mostrarGaleria(pais) {
    const imagenes = imagenesPaises[pais] || [];
    const container = document.getElementById('galleryContainer');
    
    if (imagenes.length === 0) {
        container.innerHTML = '<p>No hay imágenes disponibles para este país.</p>';
        return;
    }

    const html = imagenes.map(img => `
        <div class="gallery-item">
            <img src="${img}" alt="Imagen de buceo">
        </div>
    `).join('');
    container.innerHTML = html;
}

// Función para actualizar el mapa
function actualizarMapa(pais) {
    const paisInfo = paisesBuceo[pais];
    if (!paisInfo || !paisInfo.coordenadas) return;

    initMap();
    const { lat, lng } = paisInfo.coordenadas;
    map.setView([lat, lng], 8);
    
    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(`<b>${paisInfo.nombre}</b><br>${paisInfo.condicionesMar}`)
        .openPopup();
}

// Inicializar el mapa cuando se carga la página
window.onload = function() {
    initMap();
};

// Permitir búsqueda al presionar Enter
document.getElementById('paisInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        buscarPais();
    }
});

const paisesBuceo = {
    'ecuador': {
        nombre: 'Ecuador',
        condicionesMar: 'Aguas templadas en Galápagos, visibilidad variable. Aguas cálidas en la costa continental',
        mareas: 'Mareas moderadas en Galápagos, fuertes corrientes. Mareas suaves en la costa continental',
        epocaIdeal: 'Galápagos: Diciembre a Mayo. Costa continental: Todo el año',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    'mexico': {
        nombre: 'México',
        condicionesMar: 'Aguas cálidas y claras, visibilidad excelente',
        mareas: 'Mareas moderadas, mejores condiciones en marea baja',
        epocaIdeal: 'Diciembre a Mayo',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    'tailandia': {
        nombre: 'Tailandia',
        condicionesMar: 'Aguas templadas, visibilidad variable',
        mareas: 'Mareas suaves, mejores condiciones en marea alta',
        epocaIdeal: 'Noviembre a Abril',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    'australia': {
        nombre: 'Australia',
        condicionesMar: 'Aguas cristalinas, visibilidad excepcional',
        mareas: 'Mareas fuertes, consultar tabla de mareas',
        epocaIdeal: 'Junio a Noviembre',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    'egipto': {
        nombre: 'Egipto',
        condicionesMar: 'Aguas cálidas y claras, visibilidad excelente',
        mareas: 'Mareas mínimas, condiciones estables',
        epocaIdeal: 'Marzo a Mayo y Septiembre a Noviembre',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    'indonesia': {
        nombre: 'Indonesia',
        condicionesMar: 'Aguas cálidas, visibilidad variable',
        mareas: 'Mareas moderadas, mejores condiciones en marea baja',
        epocaIdeal: 'Abril a Octubre',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    'maldivas': {
        nombre: 'Maldivas',
        condicionesMar: 'Aguas cristalinas, visibilidad excelente',
        mareas: 'Mareas suaves, condiciones ideales',
        epocaIdeal: 'Diciembre a Abril',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    'filipinas': {
        nombre: 'Filipinas',
        condicionesMar: 'Aguas cálidas, visibilidad variable',
        mareas: 'Mareas moderadas, mejores condiciones en marea baja',
        epocaIdeal: 'Octubre a Mayo',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    'costa rica': {
        nombre: 'Costa Rica',
        region: 'america',
        condicionesMar: 'Aguas templadas, visibilidad variable. Mejor visibilidad en la costa del Pacífico',
        mareas: 'Mareas moderadas, mejores condiciones en marea baja',
        epocaIdeal: 'Diciembre a Abril',
        imagen: 'https://images.unsplash.com/photo-1519046904884-53103b34b206'
    },
    'belice': {
        nombre: 'Belice',
        region: 'america',
        condicionesMar: 'Aguas cálidas y claras, visibilidad excelente',
        mareas: 'Mareas suaves, condiciones ideales',
        epocaIdeal: 'Marzo a Junio',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
    },
    'cuba': {
        nombre: 'Cuba',
        region: 'america',
        condicionesMar: 'Aguas cálidas, visibilidad excelente',
        mareas: 'Mareas suaves, condiciones estables',
        epocaIdeal: 'Noviembre a Abril',
        imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0'
    },
    'panama': {
        nombre: 'Panamá',
        region: 'america',
        condicionesMar: 'Aguas templadas, visibilidad variable',
        mareas: 'Mareas moderadas, mejores condiciones en marea baja',
        epocaIdeal: 'Diciembre a Abril',
        imagen: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a'
    },
    'peru': {
        nombre: 'Perú',
        region: 'america',
        condicionesMar: 'Aguas frías, visibilidad variable',
        mareas: 'Mareas fuertes, consultar tabla de mareas',
        epocaIdeal: 'Diciembre a Marzo',
        imagen: 'https://images.unsplash.com/photo-1528181304800-259b08848526'
    },
    'colombia': {
        nombre: 'Colombia',
        region: 'america',
        condicionesMar: 'Aguas cálidas, visibilidad variable',
        mareas: 'Mareas moderadas, mejores condiciones en marea baja',
        epocaIdeal: 'Diciembre a Abril',
        imagen: 'https://images.unsplash.com/photo-1519046904884-53103b34b206'
    },
    'brasil': {
        nombre: 'Brasil',
        region: 'america',
        condicionesMar: 'Aguas templadas, visibilidad variable',
        mareas: 'Mareas moderadas, mejores condiciones en marea baja',
        epocaIdeal: 'Marzo a Mayo',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
    },
    'españa': {
        nombre: 'España',
        region: 'europa',
        condicionesMar: 'Aguas templadas en el Mediterráneo, más frías en el Atlántico',
        mareas: 'Mareas moderadas, mejores condiciones en marea baja',
        epocaIdeal: 'Junio a Septiembre',
        imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0'
    },
    'italia': {
        nombre: 'Italia',
        region: 'europa',
        condicionesMar: 'Aguas templadas, visibilidad excelente',
        mareas: 'Mareas suaves, condiciones ideales',
        epocaIdeal: 'Mayo a Octubre',
        imagen: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a'
    },
    'grecia': {
        nombre: 'Grecia',
        region: 'europa',
        condicionesMar: 'Aguas cálidas y claras, visibilidad excelente',
        mareas: 'Mareas suaves, condiciones estables',
        epocaIdeal: 'Junio a Septiembre',
        imagen: 'https://images.unsplash.com/photo-1528181304800-259b08848526'
    },
    'croacia': {
        nombre: 'Croacia',
        region: 'europa',
        condicionesMar: 'Aguas templadas, visibilidad variable',
        mareas: 'Mareas moderadas, mejores condiciones en marea baja',
        epocaIdeal: 'Junio a Septiembre',
        imagen: 'https://images.unsplash.com/photo-1519046904884-53103b34b206'
    },
    'malta': {
        nombre: 'Malta',
        region: 'europa',
        condicionesMar: 'Aguas templadas, visibilidad excelente',
        mareas: 'Mareas suaves, condiciones ideales',
        epocaIdeal: 'Mayo a Octubre',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
    },
    'japon': {
        nombre: 'Japón',
        region: 'asia',
        condicionesMar: 'Aguas templadas, visibilidad variable',
        mareas: 'Mareas fuertes, consultar tabla de mareas',
        epocaIdeal: 'Julio a Octubre',
        imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0'
    },
    'nueva zelanda': {
        nombre: 'Nueva Zelanda',
        region: 'oceania',
        condicionesMar: 'Aguas frías, visibilidad variable',
        mareas: 'Mareas fuertes, consultar tabla de mareas',
        epocaIdeal: 'Diciembre a Marzo',
        imagen: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a'
    },
    'fiji': {
        nombre: 'Fiji',
        region: 'oceania',
        condicionesMar: 'Aguas cálidas y claras, visibilidad excelente',
        mareas: 'Mareas suaves, condiciones ideales',
        epocaIdeal: 'Abril a Octubre',
        imagen: 'https://images.unsplash.com/photo-1528181304800-259b08848526'
    },
    'samoa': {
        nombre: 'Samoa',
        region: 'oceania',
        condicionesMar: 'Aguas cálidas, visibilidad variable',
        mareas: 'Mareas moderadas, mejores condiciones en marea baja',
        epocaIdeal: 'Mayo a Octubre',
        imagen: 'https://images.unsplash.com/photo-1519046904884-53103b34b206'
    },
    'sudafrica': {
        nombre: 'Sudáfrica',
        region: 'africa',
        condicionesMar: 'Aguas frías, visibilidad variable',
        mareas: 'Mareas fuertes, consultar tabla de mareas',
        epocaIdeal: 'Abril a Septiembre',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
    },
    'mozambique': {
        nombre: 'Mozambique',
        region: 'africa',
        condicionesMar: 'Aguas cálidas, visibilidad excelente',
        mareas: 'Mareas moderadas, mejores condiciones en marea baja',
        epocaIdeal: 'Abril a Diciembre',
        imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0'
    },
    'seychelles': {
        nombre: 'Seychelles',
        region: 'africa',
        condicionesMar: 'Aguas cálidas y claras, visibilidad excelente',
        mareas: 'Mareas suaves, condiciones ideales',
        epocaIdeal: 'Marzo a Mayo y Septiembre a Noviembre',
        imagen: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a'
    }
};

// Objeto con imágenes específicas para cada país
const imagenesPaises = {
    // América del Norte
    'mexico': [
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206'
    ],
    'estados unidos': [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
        'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a'
    ],
    'canada': [
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526'
    ],

    // América Central
    'costa rica': [
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206'
    ],
    'belice': [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
        'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a'
    ],
    'panama': [
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526'
    ],
    'honduras': [
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206'
    ],

    // América del Sur
    'brasil': [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
        'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a'
    ],
    'colombia': [
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526'
    ],
    'ecuador': [
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206'
    ],
    'peru': [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
        'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a'
    ],
    'chile': [
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526'
    ],

    // Europa
    'españa': [
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206'
    ],
    'italia': [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
        'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a'
    ],
    'grecia': [
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526'
    ],
    'croacia': [
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206'
    ],
    'malta': [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
        'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a'
    ],

    // Asia
    'tailandia': [
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526'
    ],
    'maldivas': [
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206'
    ],
    'filipinas': [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
        'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a'
    ],
    'indonesia': [
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526'
    ],
    'japon': [
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206'
    ],

    // Oceanía
    'australia': [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
        'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a'
    ],
    'nueva zelanda': [
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526'
    ],
    'fiji': [
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206'
    ],
    'samoa': [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
        'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a'
    ],

    // África
    'egipto': [
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526'
    ],
    'sudafrica': [
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206'
    ],
    'mozambique': [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
        'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a'
    ],
    'tanzania': [
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526'
    ],
    'seychelles': [
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206'
    ]
};

// Objeto con información detallada de buceo para cada país
const informacionBuceo = {
    // América del Norte
    'mexico': {
        condicionesMar: 'Aguas cálidas y claras, visibilidad de 20-30 metros. Temperatura promedio: 25-28°C',
        mareas: 'Mareas moderadas, mejor bucear en marea baja para mejor visibilidad',
        epocaIdeal: 'Mayo a Septiembre - Mejor visibilidad y condiciones más estables',
        ropaRecomendada: 'Traje de neopreno de 3mm, gafas de sol, protector solar, sombrero, ropa ligera y cómoda'
    },
    'estados unidos': {
        condicionesMar: 'Aguas templadas a frías, visibilidad variable. Temperatura: 15-25°C',
        mareas: 'Mareas moderadas a fuertes, consultar tablas locales',
        epocaIdeal: 'Junio a Septiembre - Mejor visibilidad y temperaturas más cálidas',
        ropaRecomendada: 'Traje de neopreno de 5-7mm, guantes, capucha, ropa de abrigo'
    },
    'canada': {
        condicionesMar: 'Aguas frías, visibilidad excelente. Temperatura: 8-15°C',
        mareas: 'Mareas moderadas, mejor consultar tablas locales',
        epocaIdeal: 'Julio a Septiembre - Mejor visibilidad y temperaturas más cálidas',
        ropaRecomendada: 'Traje de neopreno de 7mm, guantes, capucha, ropa de abrigo'
    },

    // América Central
    'costa rica': {
        condicionesMar: 'Aguas templadas, visibilidad de 15-25 metros. Temperatura: 24-27°C',
        mareas: 'Mareas moderadas, mejor consultar tablas locales',
        epocaIdeal: 'Diciembre a Abril - Mejor visibilidad y menos lluvias',
        ropaRecomendada: 'Traje de neopreno de 5mm, ropa ligera, protector solar, sombrero'
    },
    'belice': {
        condicionesMar: 'Aguas cálidas y claras, visibilidad de 20-30 metros. Temperatura: 26-29°C',
        mareas: 'Mareas suaves, ideales para todos los niveles',
        epocaIdeal: 'Abril a Junio - Mejor visibilidad y condiciones más estables',
        ropaRecomendada: 'Traje de neopreno de 3mm, ropa ligera, protector solar, sombrero'
    },
    'panama': {
        condicionesMar: 'Aguas cálidas, visibilidad de 15-25 metros. Temperatura: 25-28°C',
        mareas: 'Mareas moderadas, mejor consultar tablas locales',
        epocaIdeal: 'Diciembre a Abril - Mejor visibilidad y menos lluvias',
        ropaRecomendada: 'Traje de neopreno de 3mm, ropa ligera, protector solar, sombrero'
    },
    'honduras': {
        condicionesMar: 'Aguas cálidas y claras, visibilidad de 20-30 metros. Temperatura: 26-29°C',
        mareas: 'Mareas suaves, ideales para todos los niveles',
        epocaIdeal: 'Marzo a Mayo - Mejor visibilidad y condiciones más estables',
        ropaRecomendada: 'Traje de neopreno de 3mm, ropa ligera, protector solar, sombrero'
    },

    // América del Sur
    'brasil': {
        condicionesMar: 'Aguas cálidas, visibilidad variable. Temperatura: 24-28°C',
        mareas: 'Mareas moderadas, mejor consultar tablas locales',
        epocaIdeal: 'Octubre a Marzo - Mejor visibilidad y temperaturas más cálidas',
        ropaRecomendada: 'Traje de neopreno de 3mm, ropa ligera, protector solar, sombrero'
    },
    'colombia': [
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526',
        'https://images.unsplash.com/photo-1528181304800-259b08848526'
    ],
    'ecuador': {
        condicionesMar: 'Aguas templadas a frías, visibilidad variable. Temperatura: 18-24°C',
        mareas: 'Mareas fuertes, solo para buceadores avanzados',
        epocaIdeal: 'Junio a Noviembre - Mejor visibilidad y más vida marina',
        ropaRecomendada: 'Traje de neopreno de 7mm, guantes, capucha, ropa de abrigo ligera'
    },
    'peru': {
        condicionesMar: 'Aguas frías, visibilidad variable. Temperatura: 15-20°C',
        mareas: 'Mareas fuertes, solo para buceadores avanzados',
        epocaIdeal: 'Diciembre a Marzo - Mejor visibilidad y temperaturas más cálidas',
        ropaRecomendada: 'Traje de neopreno de 7mm, guantes, capucha, ropa de abrigo'
    },
    'chile': {
        condicionesMar: 'Aguas frías, visibilidad excelente. Temperatura: 12-18°C',
        mareas: 'Mareas fuertes, solo para buceadores avanzados',
        epocaIdeal: 'Enero a Marzo - Mejor visibilidad y temperaturas más cálidas',
        ropaRecomendada: 'Traje de neopreno de 7mm, guantes, capucha, ropa de abrigo'
    },

    // Europa
    'españa': {
        condicionesMar: 'Aguas templadas, visibilidad de 15-25 metros. Temperatura: 18-24°C',
        mareas: 'Mareas moderadas, mejor consultar tablas locales',
        epocaIdeal: 'Junio a Septiembre - Mejor visibilidad y temperaturas más cálidas',
        ropaRecomendada: 'Traje de neopreno de 5mm, ropa ligera, protector solar, sombrero'
    },
    'italia': {
        condicionesMar: 'Aguas templadas, visibilidad de 15-25 metros. Temperatura: 20-25°C',
        mareas: 'Mareas moderadas, mejor consultar tablas locales',
        epocaIdeal: 'Junio a Septiembre - Mejor visibilidad y temperaturas más cálidas',
        ropaRecomendada: 'Traje de neopreno de 5mm, ropa ligera, protector solar, sombrero'
    },
    'grecia': {
        condicionesMar: 'Aguas templadas y claras, visibilidad de 20-30 metros. Temperatura: 22-26°C',
        mareas: 'Mareas suaves, ideales para todos los niveles',
        epocaIdeal: 'Mayo a Octubre - Mejor visibilidad y temperaturas más cálidas',
        ropaRecomendada: 'Traje de neopreno de 3-5mm, ropa ligera, protector solar, sombrero'
    },
    'croacia': {
        condicionesMar: 'Aguas templadas y claras, visibilidad de 20-30 metros. Temperatura: 20-25°C',
        mareas: 'Mareas suaves, ideales para todos los niveles',
        epocaIdeal: 'Junio a Septiembre - Mejor visibilidad y temperaturas más cálidas',
        ropaRecomendada: 'Traje de neopreno de 5mm, ropa ligera, protector solar, sombrero'
    },
    'malta': {
        condicionesMar: 'Aguas templadas y claras, visibilidad de 20-30 metros. Temperatura: 20-25°C',
        mareas: 'Mareas suaves, ideales para todos los niveles',
        epocaIdeal: 'Mayo a Octubre - Mejor visibilidad y temperaturas más cálidas',
        ropaRecomendada: 'Traje de neopreno de 5mm, ropa ligera, protector solar, sombrero'
    },

    // Asia
    'tailandia': {
        condicionesMar: 'Aguas cálidas y cristalinas, visibilidad de 15-25 metros. Temperatura: 28-30°C',
        mareas: 'Mareas suaves, ideales para principiantes',
        epocaIdeal: 'Noviembre a Abril - Mejor visibilidad y menos lluvias',
        ropaRecomendada: 'Traje de neopreno de 3mm, ropa ligera, protector solar, sombrero'
    },
    'maldivas': {
        condicionesMar: 'Aguas cálidas y transparentes, visibilidad de 20-30 metros. Temperatura: 26-29°C',
        mareas: 'Mareas moderadas, mejor bucear en marea baja',
        epocaIdeal: 'Enero a Abril - Mejor visibilidad y condiciones más estables',
        ropaRecomendada: 'Traje de neopreno de 3mm, ropa ligera, protector solar, gafas de sol'
    },
    'filipinas': {
        condicionesMar: 'Aguas cálidas y claras, visibilidad de 15-25 metros. Temperatura: 26-29°C',
        mareas: 'Mareas moderadas, mejor consultar tablas locales',
        epocaIdeal: 'Octubre a Mayo - Mejor visibilidad y menos lluvias',
        ropaRecomendada: 'Traje de neopreno de 3mm, ropa ligera, protector solar, sombrero'
    },
    'indonesia': {
        condicionesMar: 'Aguas cálidas, visibilidad variable de 10-30 metros. Temperatura: 26-29°C',
        mareas: 'Mareas fuertes en algunas zonas, mejor consultar guías locales',
        epocaIdeal: 'Abril a Octubre - Mejor visibilidad y condiciones más estables',
        ropaRecomendada: 'Traje de neopreno de 3-5mm, ropa ligera, protector solar, sombrero'
    },
    'japon': {
        condicionesMar: 'Aguas templadas a frías, visibilidad variable. Temperatura: 18-25°C',
        mareas: 'Mareas fuertes, solo para buceadores avanzados',
        epocaIdeal: 'Junio a Septiembre - Mejor visibilidad y temperaturas más cálidas',
        ropaRecomendada: 'Traje de neopreno de 5-7mm, guantes, capucha, ropa de abrigo'
    },

    // Oceanía
    'australia': {
        condicionesMar: 'Aguas templadas a cálidas, visibilidad excelente de 30-40 metros. Temperatura: 22-26°C',
        mareas: 'Mareas fuertes en la Gran Barrera de Coral, mejor consultar tablas de mareas',
        epocaIdeal: 'Junio a Noviembre - Mejor visibilidad y menos turistas',
        ropaRecomendada: 'Traje de neopreno de 5mm, guantes, capucha, ropa de protección UV'
    },
    'nueva zelanda': {
        condicionesMar: 'Aguas frías, visibilidad excelente. Temperatura: 15-20°C',
        mareas: 'Mareas fuertes, solo para buceadores avanzados',
        epocaIdeal: 'Diciembre a Marzo - Mejor visibilidad y temperaturas más cálidas',
        ropaRecomendada: 'Traje de neopreno de 7mm, guantes, capucha, ropa de abrigo'
    },
    'fiji': {
        condicionesMar: 'Aguas cálidas y claras, visibilidad de 20-30 metros. Temperatura: 26-29°C',
        mareas: 'Mareas moderadas, mejor consultar tablas locales',
        epocaIdeal: 'Mayo a Octubre - Mejor visibilidad y condiciones más estables',
        ropaRecomendada: 'Traje de neopreno de 3mm, ropa ligera, protector solar, sombrero'
    },
    'samoa': {
        condicionesMar: 'Aguas cálidas y claras, visibilidad de 20-30 metros. Temperatura: 26-29°C',
        mareas: 'Mareas moderadas, mejor consultar tablas locales',
        epocaIdeal: 'Mayo a Octubre - Mejor visibilidad y condiciones más estables',
        ropaRecomendada: 'Traje de neopreno de 3mm, ropa ligera, protector solar, sombrero'
    },

    // África
    'egipto': {
        condicionesMar: 'Aguas cálidas y claras, visibilidad excelente de 30-40 metros. Temperatura: 24-28°C',
        mareas: 'Mareas suaves, ideales para todos los niveles',
        epocaIdeal: 'Marzo a Mayo y Septiembre a Noviembre - Temperaturas agradables',
        ropaRecomendada: 'Traje de neopreno de 3mm, ropa ligera, protector solar, sombrero'
    },
    'sudafrica': {
        condicionesMar: 'Aguas frías, visibilidad variable. Temperatura: 15-20°C',
        mareas: 'Mareas fuertes, solo para buceadores avanzados',
        epocaIdeal: 'Abril a Septiembre - Mejor visibilidad y más vida marina',
        ropaRecomendada: 'Traje de neopreno de 7mm, guantes, capucha, ropa de abrigo'
    },
    'mozambique': {
        condicionesMar: 'Aguas cálidas y claras, visibilidad de 20-30 metros. Temperatura: 24-28°C',
        mareas: 'Mareas moderadas, mejor consultar tablas locales',
        epocaIdeal: 'Abril a Octubre - Mejor visibilidad y condiciones más estables',
        ropaRecomendada: 'Traje de neopreno de 3-5mm, ropa ligera, protector solar, sombrero'
    },
    'tanzania': {
        condicionesMar: 'Aguas cálidas y claras, visibilidad de 20-30 metros. Temperatura: 24-28°C',
        mareas: 'Mareas moderadas, mejor consultar tablas locales',
        epocaIdeal: 'Junio a Octubre - Mejor visibilidad y condiciones más estables',
        ropaRecomendada: 'Traje de neopreno de 3-5mm, ropa ligera, protector solar, sombrero'
    },
    'seychelles': {
        condicionesMar: 'Aguas cálidas y claras, visibilidad de 20-30 metros. Temperatura: 26-29°C',
        mareas: 'Mareas moderadas, mejor consultar tablas locales',
        epocaIdeal: 'Abril a Mayo y Octubre a Noviembre - Mejor visibilidad y condiciones más estables',
        ropaRecomendada: 'Traje de neopreno de 3mm, ropa ligera, protector solar, sombrero'
    }
};

// Datos de equipamiento recomendado
const equipamiento = {
    'mexico': [
        { nombre: 'Traje de Neopreno 3mm', imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', descripcion: 'Para aguas cálidas' },
        { nombre: 'Máscara de Buceo', imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0', descripcion: 'Con lente de vidrio templado' },
        { nombre: 'Aletas', imagen: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a', descripcion: 'Aletas de buceo abiertas' }
    ],
    'australia': [
        { nombre: 'Traje de Neopreno 5mm', imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', descripcion: 'Para aguas más frías' },
        { nombre: 'Chaleco de Buceo', imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0', descripcion: 'Con sistema de inflado automático' },
        { nombre: 'Regulador', imagen: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a', descripcion: 'Regulador de primera etapa' }
    ],
    'costa rica': [
        { nombre: 'Traje de Neopreno 3mm', imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', descripcion: 'Para aguas templadas' },
        { nombre: 'Máscara de Buceo', imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0', descripcion: 'Con lente de vidrio templado' },
        { nombre: 'Aletas', imagen: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a', descripcion: 'Aletas de buceo abiertas' }
    ],
    'belice': [
        { nombre: 'Traje de Neopreno 3mm', imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', descripcion: 'Para aguas cálidas' },
        { nombre: 'Máscara de Buceo', imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0', descripcion: 'Con lente de vidrio templado' },
        { nombre: 'Aletas', imagen: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a', descripcion: 'Aletas de buceo abiertas' }
    ],
    'cuba': [
        { nombre: 'Traje de Neopreno 3mm', imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', descripcion: 'Para aguas cálidas' },
        { nombre: 'Máscara de Buceo', imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0', descripcion: 'Con lente de vidrio templado' },
        { nombre: 'Aletas', imagen: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a', descripcion: 'Aletas de buceo abiertas' }
    ]
};

// Coordenadas de los sitios de buceo
const coordenadasSitios = {
    'mexico': { lat: 20.6843, lng: -86.8458, nombre: 'Cozumel' },
    'australia': { lat: -23.4421, lng: 151.9148, nombre: 'Gran Barrera de Coral' },
    'tailandia': { lat: 7.5651, lng: 99.0257, nombre: 'Islas Similan' },
    'egipto': { lat: 27.8717, lng: 34.2950, nombre: 'Mar Rojo' },
    'costa rica': { lat: 5.5287, lng: -87.0618, nombre: 'Isla del Coco' },
    'belice': { lat: 17.3162, lng: -87.5347, nombre: 'Gran Agujero Azul' },
    'cuba': { lat: 22.4064, lng: -83.6872, nombre: 'Jardines de la Reina' },
    'panama': { lat: 8.9824, lng: -79.5199, nombre: 'Isla Coiba' },
    'peru': { lat: -12.0464, lng: -77.0428, nombre: 'Islas Ballestas' },
    'colombia': { lat: 12.5897, lng: -81.7007, nombre: 'Isla de San Andrés' },
    'brasil': { lat: -3.1190, lng: -60.0217, nombre: 'Arquipélago de Anavilhanas' },
    'españa': { lat: 36.7213, lng: -4.4217, nombre: 'Costa del Sol' },
    'italia': { lat: 40.8518, lng: 14.2681, nombre: 'Isla de Capri' },
    'grecia': { lat: 36.3932, lng: 25.4615, nombre: 'Isla de Santorini' },
    'croacia': { lat: 42.6507, lng: 18.0944, nombre: 'Dubrovnik' },
    'malta': { lat: 35.9375, lng: 14.3754, nombre: 'Isla de Malta' },
    'japon': { lat: 26.2124, lng: 127.6809, nombre: 'Okinawa' },
    'nueva zelanda': { lat: -35.2809, lng: 174.0920, nombre: 'Bay of Islands' },
    'fiji': { lat: -17.7792, lng: 177.1311, nombre: 'Islas Yasawa' },
    'samoa': { lat: -13.7590, lng: -172.1046, nombre: 'Upolu' },
    'sudafrica': { lat: -34.1983, lng: 18.4582, nombre: 'Cabo de Buena Esperanza' },
    'mozambique': { lat: -25.9655, lng: 32.5832, nombre: 'Isla de Mozambique' },
    'seychelles': { lat: -4.6796, lng: 55.4920, nombre: 'Isla de Mahé' }
};

// Información por regiones
const regiones = {
    america: {
        nombre: "América",
        descripcion: "América ofrece una gran diversidad de sitios de buceo, desde los arrecifes del Caribe hasta las frías aguas del Pacífico Sur.",
        imagen: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesGenerales: "Las condiciones varían significativamente entre el Caribe (aguas cálidas y claras) y el Pacífico (aguas más frías y ricas en nutrientes).",
        epocaIdeal: "Caribe: Diciembre a Abril. Pacífico: Diciembre a Marzo.",
        especiesComunes: ["Tortugas marinas", "Tiburones", "Rayas", "Peces de arrecife"],
        equipamientoRecomendado: ["Traje de neopreno 3-7mm", "Regulador", "BCD", "Computadora de buceo"]
    },
    europa: {
        nombre: "Europa",
        descripcion: "Europa cuenta con diversos sitios de buceo, desde el Mediterráneo hasta los fiordos nórdicos.",
        imagen: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesGenerales: "Mediterráneo: aguas cálidas y claras. Atlántico: aguas más frías y corrientes fuertes.",
        epocaIdeal: "Mediterráneo: Mayo a Octubre. Atlántico: Julio a Septiembre.",
        especiesComunes: ["Meros", "Barracudas", "Pulpos", "Corales"],
        equipamientoRecomendado: ["Traje de neopreno 5-7mm", "Traje seco para aguas frías", "Regulador", "BCD"]
    },
    asia: {
        nombre: "Asia",
        descripcion: "Asia alberga algunos de los mejores sitios de buceo del mundo, con una increíble biodiversidad marina.",
        imagen: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesGenerales: "Aguas tropicales cálidas con excelente visibilidad en la mayoría de los sitios.",
        epocaIdeal: "Varía por región, generalmente Octubre a Abril.",
        especiesComunes: ["Tiburones ballena", "Mantas", "Tortugas", "Peces de arrecife"],
        equipamientoRecomendado: ["Traje de neopreno 3-5mm", "Regulador", "BCD", "Computadora de buceo"]
    },
    oceania: {
        nombre: "Oceanía",
        descripcion: "Oceanía es hogar de la Gran Barrera de Coral y numerosos sitios de buceo de clase mundial.",
        imagen: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesGenerales: "Aguas tropicales cálidas con excelente visibilidad y corrientes moderadas.",
        epocaIdeal: "Mayo a Noviembre en la mayoría de las regiones.",
        especiesComunes: ["Corales", "Peces de arrecife", "Tiburones", "Rayas"],
        equipamientoRecomendado: ["Traje de neopreno 3-5mm", "Regulador", "BCD", "Computadora de buceo"]
    },
    africa: {
        nombre: "África",
        descripcion: "África ofrece experiencias únicas de buceo, desde el Océano Índico hasta el Mar Rojo.",
        imagen: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesGenerales: "Mar Rojo: aguas cálidas y claras. Océano Índico: corrientes fuertes y gran vida marina.",
        epocaIdeal: "Mar Rojo: Marzo a Mayo y Septiembre a Noviembre. Océano Índico: Diciembre a Marzo.",
        especiesComunes: ["Tiburones", "Delfines", "Tortugas", "Peces de arrecife"],
        equipamientoRecomendado: ["Traje de neopreno 3-5mm", "Regulador", "BCD", "Computadora de buceo"]
    }
};

// Inicializar el mapa
let map;
function initMap() {
    if (map) {
        map.remove();
    }
    
    map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

// Función para mostrar información por región
function mostrarRegion(region) {
    const infoRegion = regiones[region];
    if (!infoRegion) return;

    const container = document.getElementById('resultado');
    container.innerHTML = `
        <div class="region-info">
            <h2>${infoRegion.nombre}</h2>
            <img src="${infoRegion.imagen}" alt="${infoRegion.nombre}" class="region-image">
            <p>${infoRegion.descripcion}</p>
            <h3>Condiciones Generales</h3>
            <p>${infoRegion.condicionesGenerales}</p>
            <h3>Época Ideal</h3>
            <p>${infoRegion.epocaIdeal}</p>
            <h3>Especies Comunes</h3>
            <ul>
                ${infoRegion.especiesComunes.map(especie => `<li>${especie}</li>`).join('')}
            </ul>
            <h3>Equipamiento Recomendado</h3>
            <ul>
                ${infoRegion.equipamientoRecomendado.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;

    // Actualizar las secciones de información
    document.getElementById('condicionesMar').innerHTML = `<p>${infoRegion.condicionesGenerales}</p>`;
    document.getElementById('epocaIdeal').innerHTML = `<p>${infoRegion.epocaIdeal}</p>`;
    document.getElementById('ropaRecomendada').innerHTML = `<p>${infoRegion.equipamientoRecomendado.join(', ')}</p>`;
}

// Función para mostrar especies marinas
function mostrarEspeciesMarinas(pais) {
    const especies = paisesBuceo[pais]?.especiesMarinas || [];
    const container = document.getElementById('especiesMarinas');
    
    if (especies.length === 0) {
        container.innerHTML = '<p>No hay información disponible sobre especies marinas para este país.</p>';
        return;
    }

    let html = '<div class="species-grid">';
    especies.forEach(especie => {
        html += `
            <div class="species-card">
                <img src="${especie.imagen}" alt="${especie.nombre}" onerror="this.src='https://via.placeholder.com/300x200?text=Imagen+no+disponible'">
                <h4>${especie.nombre}</h4>
                <p>${especie.descripcion}</p>
                <p><strong>Época:</strong> ${especie.epoca}</p>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

// Función para mostrar equipamiento
function mostrarEquipamiento(pais) {
    const equip = equipamiento[pais] || [];
    const container = document.getElementById('equipamiento');
    
    if (equip.length === 0) {
        container.innerHTML = '<p>No hay información disponible sobre equipamiento para este país.</p>';
        return;
    }

    const html = `
        <div class="equipment-list">
            ${equip.map(item => `
                <div class="equipment-item">
                    <img src="${item.imagen}" alt="${item.nombre}">
                    <div>
                        <h3>${item.nombre}</h3>
                        <p>${item.descripcion}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    container.innerHTML = html;
}

// Función para mostrar galería
function mostrarGaleria(pais) {
    const imagenes = imagenesPaises[pais] || [];
    const container = document.getElementById('galleryContainer');
    
    if (imagenes.length === 0) {
        container.innerHTML = '<p>No hay imágenes disponibles para este país.</p>';
        return;
    }

    const html = imagenes.map(img => `
        <div class="gallery-item">
            <img src="${img}" alt="Imagen de buceo">
        </div>
    `).join('');
    container.innerHTML = html;
}

// Función para actualizar el mapa
function actualizarMapa(pais) {
    const paisInfo = paisesBuceo[pais];
    if (!paisInfo || !paisInfo.coordenadas) return;

    initMap();
    const { lat, lng } = paisInfo.coordenadas;
    map.setView([lat, lng], 8);
    
    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(`<b>${paisInfo.nombre}</b><br>${paisInfo.condicionesMar}`)
        .openPopup();
}

// Inicializar el mapa cuando se carga la página
window.onload = function() {
    initMap();
};

// Permitir búsqueda al presionar Enter
document.getElementById('paisInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        buscarPais();
    }
});

const paises = [
    // Países existentes...
    {
        nombre: "Ecuador",
        region: "america",
        coordenadas: { lat: -0.1807, lng: -78.4678 },
        imagen: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Las Islas Galápagos ofrecen aguas cristalinas con visibilidad de hasta 30 metros. Las corrientes pueden ser fuertes, especialmente en los sitios de buceo más remotos.",
        mareas: "Las mareas son moderadas, con variaciones de 1-2 metros. Las mejores condiciones se dan durante la marea alta.",
        epocaIdeal: "Diciembre a Mayo: Aguas más cálidas (24-28°C) y mejor visibilidad. Junio a Noviembre: Aguas más frías (18-22°C) pero con más vida marina.",
        ropaRecomendada: "Traje de neopreno de 5mm a 7mm, capucha, guantes y botas. En temporada fría, considerar un traje seco.",
        especiesMarinas: [
            {
                nombre: "Tiburón Martillo",
                descripcion: "Grandes grupos de tiburones martillo se pueden ver en las Islas Galápagos, especialmente en Wolf y Darwin.",
                imagen: "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                epoca: "Junio a Noviembre"
            },
            {
                nombre: "Tortuga Marina",
                descripcion: "Las tortugas verdes y carey son comunes en las aguas de Galápagos.",
                imagen: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                epoca: "Todo el año"
            },
            {
                nombre: "Manta Raya",
                descripcion: "Las mantas raya se pueden ver en varios sitios, especialmente en la Isla de la Plata.",
                imagen: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                epoca: "Diciembre a Mayo"
            }
        ],
        equipamiento: [
            "Traje de neopreno de 5-7mm",
            "Regulador con octopus",
            "BCD con suficiente flotabilidad",
            "Computadora de buceo",
            "Linterna subacuática",
            "Señalizador de superficie",
            "Kit de primeros auxilios"
        ]
    },
    {
        nombre: "Colombia",
        region: "america",
        coordenadas: { lat: 4.5709, lng: -74.2973 },
        imagen: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Las aguas del Caribe colombiano son cálidas y cristalinas, con visibilidad de hasta 30 metros. Las corrientes son moderadas.",
        mareas: "Las mareas son suaves, con variaciones de 0.5-1 metro. Las mejores condiciones se dan durante la marea alta.",
        epocaIdeal: "Diciembre a Abril: Mejor visibilidad y condiciones climáticas. Mayo a Noviembre: Temporada de lluvias pero con buena visibilidad.",
        ropaRecomendada: "Traje de neopreno de 3mm a 5mm, gafas de sol, protector solar resistente al agua.",
        especiesMarinas: [
            {
                nombre: "Pez León",
                descripcion: "Especie invasora que se puede encontrar en varios sitios de buceo.",
                imagen: "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                epoca: "Todo el año"
            },
            {
                nombre: "Tortuga Carey",
                descripcion: "Común en los arrecifes de coral de las Islas del Rosario.",
                imagen: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                epoca: "Todo el año"
            }
        ],
        equipamiento: [
            "Traje de neopreno de 3-5mm",
            "Regulador con octopus",
            "BCD",
            "Computadora de buceo",
            "Linterna subacuática",
            "Señalizador de superficie"
        ]
    },
    {
        nombre: "Perú",
        region: "america",
        coordenadas: { lat: -12.0464, lng: -77.0428 },
        imagen: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        condicionesMar: "Las aguas del Pacífico peruano son frías debido a la corriente de Humboldt. Visibilidad variable de 5-15 metros.",
        mareas: "Las mareas son moderadas, con variaciones de 1-2 metros. Las mejores condiciones se dan durante la marea alta.",
        epocaIdeal: "Diciembre a Marzo: Aguas más cálidas y mejor visibilidad. Abril a Noviembre: Aguas más frías pero con más vida marina.",
        ropaRecomendada: "Traje de neopreno de 7mm o traje seco, capucha, guantes y botas.",
        especiesMarinas: [
            {
                nombre: "Lobo Marino",
                descripcion: "Grandes colonias de lobos marinos en las Islas Ballestas.",
                imagen: "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                epoca: "Todo el año"
            },
            {
                nombre: "Pingüino de Humboldt",
                descripcion: "Endémico de la corriente de Humboldt, se puede ver en las Islas Ballestas.",
                imagen: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                epoca: "Todo el año"
            }
        ],
        equipamiento: [
            "Traje de neopreno de 7mm o traje seco",
            "Regulador con octopus",
            "BCD con suficiente flotabilidad",
            "Computadora de buceo",
            "Linterna subacuática",
            "Señalizador de superficie",
            "Kit de primeros auxilios"
        ]
    }
]; 
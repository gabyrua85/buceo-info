// Base de datos de países y sus condiciones de buceo
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
        condicionesMar: 'Aguas templadas, visibilidad variable',
        mareas: 'Mareas moderadas, mejores condiciones en marea baja',
        epocaIdeal: 'Diciembre a Abril',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    'belice': {
        nombre: 'Belice',
        condicionesMar: 'Aguas cálidas y claras, visibilidad excelente',
        mareas: 'Mareas suaves, condiciones ideales',
        epocaIdeal: 'Marzo a Junio',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    'cuba': {
        nombre: 'Cuba',
        condicionesMar: 'Aguas cálidas, visibilidad excelente',
        mareas: 'Mareas suaves, condiciones estables',
        epocaIdeal: 'Noviembre a Abril',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    'panama': {
        nombre: 'Panamá',
        condicionesMar: 'Aguas templadas, visibilidad variable',
        mareas: 'Mareas moderadas, mejores condiciones en marea baja',
        epocaIdeal: 'Diciembre a Abril',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    'peru': {
        nombre: 'Perú',
        condicionesMar: 'Aguas frías, visibilidad variable',
        mareas: 'Mareas fuertes, consultar tabla de mareas',
        epocaIdeal: 'Diciembre a Marzo',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    'colombia': {
        nombre: 'Colombia',
        condicionesMar: 'Aguas cálidas, visibilidad variable',
        mareas: 'Mareas moderadas, mejores condiciones en marea baja',
        epocaIdeal: 'Diciembre a Abril',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    'brasil': {
        nombre: 'Brasil',
        condicionesMar: 'Aguas templadas, visibilidad variable',
        mareas: 'Mareas moderadas, mejores condiciones en marea baja',
        epocaIdeal: 'Marzo a Mayo',
        imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
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

function buscarPais() {
    const paisInput = document.getElementById('paisInput').value.trim();
    if (paisInput === '') {
        alert('Por favor, ingresa un país');
        return;
    }

    try {
        const pais = paisInput.toLowerCase().trim();
        const backgroundContainer = document.getElementById('background-container');

        // Buscar imágenes para el país
        if (imagenesPaises[pais]) {
            const imagenes = imagenesPaises[pais];
            const randomIndex = Math.floor(Math.random() * imagenes.length);
            backgroundContainer.style.backgroundImage = `url(${imagenes[randomIndex]})`;
        } else {
            backgroundContainer.style.backgroundImage = 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)';
        }

        // Mostrar información del país
        const resultado = document.getElementById('resultado');
        const condicionesMar = document.getElementById('condicionesMar');
        const mareas = document.getElementById('mareas');
        const epocaIdeal = document.getElementById('epocaIdeal');
        const ropaRecomendada = document.getElementById('ropaRecomendada');

        if (informacionBuceo[pais]) {
            const info = informacionBuceo[pais];
            resultado.innerHTML = `<h2>${paisInput}</h2>`;
            condicionesMar.innerHTML = `<p>${info.condicionesMar}</p>`;
            mareas.innerHTML = `<p>${info.mareas}</p>`;
            epocaIdeal.innerHTML = `<p>${info.epocaIdeal}</p>`;
            ropaRecomendada.innerHTML = `<p>${info.ropaRecomendada}</p>`;
        } else {
            resultado.innerHTML = `<h2>País no encontrado</h2><p>Por favor, intenta con otro país o verifica la ortografía</p>`;
            condicionesMar.innerHTML = '<p>No hay información disponible para este país</p>';
            mareas.innerHTML = '<p>No hay información disponible para este país</p>';
            epocaIdeal.innerHTML = '<p>No hay información disponible para este país</p>';
            ropaRecomendada.innerHTML = '<p>No hay información disponible para este país</p>';
        }

    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al buscar la información. Por favor, intenta de nuevo.');
    }
}

// Permitir búsqueda al presionar Enter
document.getElementById('paisInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        buscarPais();
    }
}); 
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

// Datos adicionales para especies marinas
const especiesMarinas = {
    'mexico': [
        { nombre: 'Tiburón Ballena', imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', descripcion: 'El pez más grande del mundo' },
        { nombre: 'Manta Raya', imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0', descripcion: 'Majestuosa raya que puede alcanzar hasta 7 metros' },
        { nombre: 'Pez León', imagen: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a', descripcion: 'Colorido pero venenoso' }
    ],
    'australia': [
        { nombre: 'Tiburón Blanco', imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', descripcion: 'El gran depredador del océano' },
        { nombre: 'Pez Payaso', imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0', descripcion: 'Famoso por su relación simbiótica con las anémonas' },
        { nombre: 'Tortuga Verde', imagen: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a', descripcion: 'Especie en peligro de extinción' }
    ],
    'costa rica': [
        { nombre: 'Tiburón Martillo', imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', descripcion: 'Especie migratoria que visita la Isla del Coco' },
        { nombre: 'Manta Raya', imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0', descripcion: 'Frecuente en las aguas del Pacífico' },
        { nombre: 'Tortuga Verde', imagen: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a', descripcion: 'Especie protegida que anida en las playas' }
    ],
    'belice': [
        { nombre: 'Tiburón de Arrecife', imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', descripcion: 'Común en el Gran Agujero Azul' },
        { nombre: 'Pez Ángel', imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0', descripcion: 'Colorido pez de arrecife' },
        { nombre: 'Pez León', imagen: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a', descripcion: 'Especie invasora pero hermosa' }
    ],
    'cuba': [
        { nombre: 'Tiburón de Arrecife', imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', descripcion: 'Común en los jardines de coral' },
        { nombre: 'Pez Ángel', imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0', descripcion: 'Colorido pez de arrecife' },
        { nombre: 'Tortuga Carey', imagen: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a', descripcion: 'Especie en peligro de extinción' }
    ]
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

// Inicializar el mapa
let map;
function initMap() {
    map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

// Función para filtrar por región
function filtrarPorRegion() {
    const region = document.getElementById('regionFilter').value;
    const paisesFiltrados = Object.entries(paisesBuceo).filter(([_, pais]) => {
        if (!region) return true;
        return pais.region === region;
    });
    mostrarPaisesFiltrados(paisesFiltrados);
}

// Función para mostrar especies marinas
function mostrarEspeciesMarinas(pais) {
    const especies = especiesMarinas[pais] || [];
    const container = document.getElementById('especiesMarinas');
    
    if (especies.length === 0) {
        container.innerHTML = '<p>No hay información disponible sobre especies marinas para este país.</p>';
        return;
    }

    const html = `
        <div class="species-grid">
            ${especies.map(especie => `
                <div class="species-card">
                    <img src="${especie.imagen}" alt="${especie.nombre}">
                    <h3>${especie.nombre}</h3>
                    <p>${especie.descripcion}</p>
                </div>
            `).join('')}
        </div>
    `;
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
    const coordenadas = coordenadasSitios[pais];
    if (!coordenadas) return;

    map.setView([coordenadas.lat, coordenadas.lng], 10);
    L.marker([coordenadas.lat, coordenadas.lng])
        .bindPopup(coordenadas.nombre)
        .addTo(map);
}

// Modificar la función buscarPais existente
function buscarPais() {
    const paisInput = document.getElementById('paisInput').value.toLowerCase();
    const pais = paisesBuceo[paisInput];

    if (pais) {
        // Actualizar información existente
        document.getElementById('condicionesMar').innerHTML = `<p>${pais.condicionesMar}</p>`;
        document.getElementById('mareas').innerHTML = `<p>${pais.mareas}</p>`;
        document.getElementById('epocaIdeal').innerHTML = `<p>${pais.epocaIdeal}</p>`;
        
        // Actualizar nuevas secciones
        mostrarEspeciesMarinas(paisInput);
        mostrarEquipamiento(paisInput);
        mostrarGaleria(paisInput);
        actualizarMapa(paisInput);
        
        // Actualizar fondo
        document.getElementById('background-container').style.backgroundImage = `url(${pais.imagen})`;
    } else {
        alert('País no encontrado. Por favor, intenta con otro país.');
    }
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
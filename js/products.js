// assets/js/products.js

// Array de productos base — Base de datos unificada de Mura Studio
const products = [
  {
    id: 1,
    title: "Porta lápices latón",
    code: "Pillar 01 — Brass",
    price: "$65.990",
    category: "archivo",
    imgMain: "assets/images/portalapices.webp",
    imgHover: "assets/images/portalapices2.webp",
    description: [
      "Una pieza de escritorio atemporal concebida bajo los principios de la simetría pura y la permanencia material. Pillar 01 está mecanizado a partir de un bloque sólido de latón, equilibrando un peso contundente con una silueta de líneas arquitectónicas y minimalistas. Su presencia en el espacio de trabajo no solo organiza tus herramientas esenciales, sino que actúa como un ancla visual que invita a la concentración. Con el paso del tiempo, el latón interactúa con el entorno, desarrollando una pátina única y orgánica que narra la historia de su uso. Un objeto diseñado no para ocupar un lugar, sino para perdurar generaciones.",
    ],
    specs: {
      Dimensiones: "120 x 40 x 40 mm",
      Materiales: "Latón macizo",
      Acabados: ["Satinado cepillado a mano", "Colección Origen"],
      Peso: "450 g",
      Origen: "Diseñado y manufacturado en Santiago, Chile",
    },
  },
  {
    id: 2,
    title: "Sujeta papeles de mármol",
    code: "Block 01 — Marble",
    price: "$55.990",
    category: "archivo",
    imgMain: "assets/images/sujeta-papeles-marmol.webp",
    imgHover: "assets/images/sujeta-papeles-marmol-zoom.webp",
    description: [
      "Una pieza de contemplación y orden que celebra la nobleza de los materiales honestos en su estado más puro. Block 01 is un sujeta papeles y organizador de correspondencia tallado a partir de un bloque macizo de mármol seleccionado, cuyo veteado natural e irrepetible convierte a cada ejemplar en una obra de arte utilitaria única.",
      "Su estructura monolítica se ve sutilmente interrumpida por un inserto lineal de latón cepillado, diseñado con precisión para sostener documentos esenciales, tarjetas de presentación o correspondencia abierta con un despliegue impecable. El peso rotundo del mármol aporta una estabilidad imperturbable al escritorio, mientras que su geometría limpia infunde una atmósfera de calma arquitectónica y sofisticación en el entorno de trabajo.",
    ],
    specs: {
      Dimensiones: "140 x 60 x 5 mm",
      Materiales: ["Mármol natural", "Latón macizo"],
      Acabados: ["Mármol pulido mate", "Metal satinado cepillado", "Colección Origen"],
      Peso: "850 g",
      Origen: "Diseñado y manufacturado en Santiago, Chile",
    },
  },
  {
    id: 3,
    title: "Base de escritorio en nogal y latón",
    code: "Tray 01 — Walnut & Brass",
    price: "$85.990",
    category: "escritorio",
    imgMain: "assets/images/base-escritorio-nogal-laton2.webp",
    imgHover: "assets/images/base-escritorio-nogal-laton1.webp",
    description: [
      "Una oda al ritual de la escritura y a la organización consciente. Esta base de escritorio está esculpida a partir de una pieza seleccionada de madera de nogal, reconocida por su densidad, durabilidad y sus ricas tonalidades oscuras. Su superficie presenta un fresado de precisión que genera una sutil curvatura ergonómica, ideal para descansar la mano al tomar o dejar tus herramientas.",
      "Un canal lineal de latón macizo cepillado atraviesa la pieza de extremo a extremo, ofreciendo un lecho texturizado y seguro para proteger tus piezas de escritura más preciadas. A un costado, un rebaje circular perfectamente calibrado acoge con exactitud un tintero de vidrio o pequeños objetos esenciales. Con un acabado al aceite que resalta la textura natural de la madera, esta base no solo organiza, sino que aporta un carácter arquitectónico, cálido y sofisticado a cualquier espacio de trabajo.",
    ],
    specs: {
      Dimensiones: "180 x 110 x 30 mm",
      Materiales: ["Madera de Nogal natural", "Latón macizo"],
      Acabados: ["Madera curada con aceites naturales",  "Colección Origen"],
      Peso: "320 g",
      Origen: "Diseñado y manufacturado en Santiago, Chile",
    },
  },
  {
    id: 4,
    title: "Cuaderno de notas de lino",
    code: "Folio 01 - Grain",
    price: "$28.990",
    category: "planificacion",
    imgMain: "assets/images/cuaderno-notas-lino.webp",
    imgHover: "assets/images/cuaderno-notas-lino-abierto.webp",
    description: [
      "Un espacio en blanco diseñado para el pensamiento pausado, la planificación rigurosa y la libre expresión. Este cuaderno de notas de tapa dura está encuadernado a mano con lino natural premium en un tono crudo, celebrando la textura orgánica y las sutiles irregularidades del textil.",
      "En su portada, un delicado grabado en bajorrelieve custodia las páginas interiores, las cuales han sido seleccionadas por su gramaje idóneo y su suavidad táctil, ofreciendo una resistencia excepcional al trazo de plumas estilográficas y herramientas de dibujo. Diseñado con una apertura plana de 180° para garantizar una experiencia de escritura fluida y sin interrupciones, Folio 05 es un objeto de archivo atemporal, creado para perdurar y madurar junto a tus ideas, proyectos y bocetos más valiosos.",
    ],
    specs: {
      Dimensiones: "A5",
      Materiales: "Tapa dura revestida en lino natural", 
      Interior: "Liso",                                 
      Acabados: "Encuadernación cosida. Edición Minimal", 
      Peso: "320 g",
      Origen: "Diseñado y manufacturado en Santiago, Chile",
    },
    isWide: true,
  },
  {
    id: 5,
    title: "Bolígrafo técnico",
    code: "Draft 01 — Technical Pen",
    price: "$45.990",
    category: "planificacion",
    imgMain: "assets/images/boligrafo-tecnico.webp",
    imgHover: "assets/images/boligrafo-tecnico-zoom.webp",
    description: [
      "Una herramienta de precisión diseñada para cerrar la brecha entre el pensamiento técnico y el trazo creativo. Con un balance de peso milimétricamente calculado, Draft 01 ofrece una experiencia de escritura fluida, constante y sin esfuerzo, ideal tanto para extensas jornadas de anotación como para el dibujo de diagramas y esquemas modulares.",
      "Su cuerpo central está manufacturado en acero inoxidable cepillado de alta durabilidad, complementado con secciones de agarre y puntera en un acabado grafito mate de textura moleteada (knurled grip), que asegura un control táctil óptimo y antideslizante. Coronado con un clip de perfil plano y el monograma de la marca grabado en su contorno, este bolígrafo es el complemento natural de nuestro cuaderno de notas, transformando el acto de escribir en un ritual de rendimiento, rigurosidad y diseño atemporal.",
    ],
    specs: {
      Materiales: "Acero inoxidable de alta resistencia",
      Grip: "Textura moleteada para un agarre ergonómico",
      Mecanismo: "Pulsador retráctil con clip",
      Acabados: ["Acero inoxidable cepillado y grafito mate", "Edición Minimal"],
      Tinta: ["Gel de flujo continuo", "Secado rápido (Tinta Negra)"],
      Origen: "Diseñado y manufacturado en Santiago, Chile",
    },
  },
  {
    id: 6,
    title: "Desk Mat de fieltro",
    code: "Pad 01 — Felt & Leather Desk Mat",
    price: "$75.990",
    category: "escritorio",
    imgMain: "assets/images/desk-mat-fieltro.webp",
    imgHover: "assets/images/desk-mat-fieltro-zoom.webp",
    description: [
      "La base textil diseñada para delimitar tu área de enfoque, absorber el sonido ambiental y proteger tus herramientas de trabajo con calidez y sofisticación. Pad 01 está confeccionado con un fieltro de lana de alta densidad, seleccionado por su suavidad táctil, su resistencia natural a las salpicaduras y su capacidad para ofrecer un deslizamiento óptimo y preciso del mouse.",
      "Un pulcro ribeteado perimetral en cuero natural cosido a mano enmarca la pieza, aportando estructura y evitando el desgaste de los bordes con el uso diario. En la esquina inferior, un delicado aplique angular de cuero natural envejecido custodia el monograma grabado de la marca, sirviendo como un sutil anclaje visual. Una pieza esencial de diseño de autor que transforma la superficie del escritorio en una experiencia de trabajo silenciosa, fluida y con un carácter arquitectónico imperturbable.",
    ],
    specs: {
      Dimensiones: ["800 x 400 mm", "Espesor: 4 mm"],
      Materiales: [
        "Fieltro de lana premium de alta densidad",
        "Detalles en cuero natural legítimo",
      ],
      Acabados: [
        "Bordes cosidos con pespunte de precisión",
        "Monograma grabado en bajorrelieve ciego",
        "Edición Minimal"
      ],
      Base: "Textura antideslizante sutil en el reverso",
      Origen: "Diseñado y manufacturado en Santiago, Chile",
    },
  },
  {
    id: 7,
    title: "Soporte de carga",
    code: "Dock 01 — Volcanic Charging Stand",
    price: "$58.990",
    category: "escritorio",
    imgMain: "assets/images/soporte-carga-phone.webp",
    imgHover: "assets/images/soporte-carga-phone-zoom.webp",
    description: [
      "La convergencia perfecta entre la tecnología cotidiana y la fuerza elemental de la materia. Dock 01 is un soporte de carga vertical para smartphone esculpido a partir de piedra volcánica seleccionada, cuya textura porosa, rugosa y de un profundo tono carbón le confiere una presencia escultórica de gran solidez e identidad mineral en el escritorio.",
      "Su cavidad interior está revestida con una pieza de silicona médica mate de alta densidad, diseñada con precisión para acoger el dispositivo con suavidad, evitando deslizamientos o roces innecesarios. Con un ángulo de inclinación meticulosamente calibrado, Dock 01 te permite visualizar notificaciones, realizar videollamadas o interactuar con la pantalla de forma cómoda y ergonómica mientras se completa el ciclo de carga. Una pieza robusta, pesada y de perfil arquitectónico que ancla tus dispositivos digitales a un entorno de diseño consciente y depurado.",
    ],
    specs: {
      Materiales: [
        "Piedra volcánica natural tallada",
        "Núcleo de silicona mate de alta resistencia",
      ],
      Acabados: [
        "Piedra en estado poroso natural rústico",
        "Silicona médica acoplada",
        "Colección Origen"
      ],
      Compatibilidad: [
        "Universal",
        "Diseñado para albergar diversos modelos de smartphones",
      ],
      Funcionalidad: [
        "Carga vertical",
        "Apertura inferior optimizada para el paso del cable",
      ],
      "Ángulo de Visión": [
        "Calibrado para interacción ergonómica",
        "Reconocimiento facial en escritorio",
      ],
      Origen: "Diseñado y manufacturado en Santiago, Chile",
    },
    isWide: true,
  },
  {
    id: 8,
    title: "Regla técnica de aluminio negro",
    code: "Axis 01 — Technical Rule",
    price: "$32.990",
    category: "planificacion",
    imgMain: "assets/images/regla-tecnica-aluminio1.webp",
    imgHover: "assets/images/regla-tecnica-aluminio-zoom.webp",
    description: [
      "El equilibrio perfecto entre la precisión rigurosa de la ingeniería y el diseño estético de vanguardia. Axis 04 es una regla técnica angular en forma de L manufacturada en aluminio de grado aeronáutico, seleccionada por su extrema ligereza, estabilidad dimensional y resistencia al desgaste. Su acabado anodizado en negro mate no solo reduce los reflejos en el espacio de trabajo, sino que resalta la nitidez de sus escalas milimétricas.",
      "Diseñada para arquitectos, designers y creadores que exigen exactitud absoluta, cuenta con grabados métricos e imperiales realizados mediante corte láser de alta definición, garantizando una legibilidad imperturbable con el paso del tiempo. La pieza se complementa con un sutil mecanismo de tope o ajuste regulado por una perilla de latón macizo estriado, aportando un acento táctil y un contraste cromático sofisticado. Un instrumento de medición que trasciende su utilidad técnica para convertirse en un objeto escultórico esencial sobre el escritorio.",
    ],
    specs: {
      Materiales: [
        "Aluminio anodizado de alta resistencia",
        "Componentes de ajuste en latón macizo",
      ],
      Graduación: [
        "Escala milimétrica doble de alta precisión",
        "grabada en láser blanco de alta definición",
      ],
      Configuración: [
        "Perfil angular en L",
        "Escuadra integrada para trazos e inspección de 90°",
      ],
      Acabados: [
        "Superficie negro mate antirreflejos",
        "Pomo de latón moleteado satinado",
        "Edición Minimal"
      ],
      Origen: "Diseñado y manufacturado en Santiago, Chile",
    },
  },
  {
    id: 9,
    title: "Set de 12 tarjetas de correspondencia",
    code: "Folio — Calma Correspondence Set",
    price: "$18.900",
    category: "colecciones",
    imgMain: "assets/images/set-tarjetas-correspondencia.webp",
    imgHover: "assets/images/set-tarjetas-correspondencia-zoom.webp",
    description: [
      "Un elogio a la palabra escrita y al valor de la comunicación pausada. Este set exclusivo de 12 tarjetas de correspondencia ha sido concebido para transformar el acto de enviar un mensaje en un obsequio táctil y memorable. Cada tarjeta está fabricada con papel artesanal de alto gramaje y fibras naturales visibles, lo que confiere a cada pieza una textura e identidad orgánica irrepetible.",
      "La portada presenta la máxima 'Un momento de calma' impresa mediante la técnica tradicional de tipografía en bajorrelieve (letterpress), logrando una profundidad visual y táctil excepcional que dialoga con un delicado cuño seco del monograma de la marca. Acompañado de una refinada caja rígida revestida en lino crudo para su resguardo, este set es la invitación perfecta para detener el tiempo, ordenar las ideas e plasmar pensamientos con la rigurosidad y elegancia que caracterizan a los rituales de antes.",
    ],
    specs: {
      Contenido:
        "Set de 12 tarjetas de correspondencia",
      Materiales: [
        "Papel artesanal de algodón",
        "Alto gramaje con fibras naturales",
        "Caja de lino rígida",
      ],
      Interior: "Liso",
      "Técnica de Impresión": [
        "Letterpress de alta presión en tono café mineral",
        "Relieve ciego (embossing)",
      ],
      Dimensiones: "150 x 100 mm",
      Acabados: [
        "Impresión Letterpress tradicional",
        "Cuño seco artesanal",
        "Colección Origen"
      ],
      Origen: "Diseñado y manufacturado en Santiago, Chile",
    },
  },
  {
    id: 10,
    title: "Volcanic Incense Burner & Diffuser",
    code: "Aura 01 — Volcanic Incense Burner",
    price: "$48.990",
    category: "colecciones",
    imgMain: "assets/images/quemador-incienso-volcanico.webp",
    imgHover: "assets/images/quemador-incienso-volcanico-zoom.webp",
    description: [
      "El puente sensorial hacia un estado de enfoque profundo y claridad mental. Aura 01 es un incensario y difusor pasivo de aceites esenciales concebido para marcar el inicio de tus rituales diarios en el espacio de trabajo. Su estructura consta de un disco cóncavo de latón macizo torneado, sobre el cual descansa una esfera monolítica esculpida en piedra volcánica natural de un denso color carbón.",
      "La naturaleza porosa del bloque volcánico actúa como un difusor orgánico ideal: basta con verter unas gotas de aceite esencial sobre su superficie para que el material absorba el aroma y lo libere gradualmente con el calor ambiental. En su centro, un receptáculo calibrado de precisión acoge varillas de incienso fino, permitiendo que la ceniza caiga limpiamente sobre la base de metal. Un objeto despojado de ornamentos innecesarios, diseñado para activar los sentidos y purificar la atmósfera a través de una sutil coreografía de humo, metal y piedra elemental.",
    ],
    specs: {
      Materiales: [
        "Piedra volcánica natural tallada",
        "Base de latón macizo (Brass)",
      ],
      Funcionalidad: [
        "Quemador de incienso en varilla",
        "Difusor pasivo para aceites esenciales",
      ],
      Dimensiones: [
        "Base de latón: 10 cm de diámetro",
        "Esfera volcánica: 6 cm de diámetro",
      ],
      Acabados: [
        "Metal pulido satinado",
        "Piedra en estado poroso natural",
        "Sin sellantes químicos",
        "Colección Origen"
      ],
      Origen: "Diseñado y manufacturado en Santiago, Chile",
    },
  },
];

// Variable para almacenar instancias activas de Swiper (Carrusel móvil)
let productSwipers = [];

/**
 * Controla el ciclo de vida de los carruseles táctiles de tarjetas según viewport
 */
function manageProductCarousels() {
  if (window.innerWidth < 1024) {
    if (productSwipers.length === 0) {
      document.querySelectorAll(".product-swiper").forEach((element) => {
        const swiperInstance = new Swiper(element, {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: false,
          observer: true,
          observeParents: true,
          pagination: {
            el: element.querySelector(".swiper-pagination"),
            clickable: true,
          },
        });
        productSwipers.push(swiperInstance);
      });
    }
  } else {
    if (productSwipers.length > 0) {
      productSwipers.forEach((swiper) => {
        if (typeof swiper.destroy === "function") swiper.destroy(true, true);
      });
      productSwipers = [];
    }
  }
}

/**
 * Renderiza dinámicamente el catálogo en la grilla del DOM
 */
function renderProducts(productsList) {
  const gridContainer = document.getElementById("products-grid");
  if (!gridContainer) return;

  // Limpiar instancias previas de Swiper antes de reconstruir la interfaz
  if (productSwipers.length > 0) {
    productSwipers.forEach((swiper) => {
      if (typeof swiper.destroy === "function") swiper.destroy(true, true);
    });
    productSwipers = [];
  }

  gridContainer.innerHTML = "";

  productsList.forEach((product) => {
    const productCard = document.createElement("a");
    productCard.classList.add("product-card");
    productCard.setAttribute("href", `product-detail.html?id=${product.id}`);
    productCard.setAttribute("data-category", product.category);

    if (product.isWide) productCard.classList.add("product-card--wide");

    productCard.innerHTML = `
      <div class="product-image-wrapper swiper product-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="${product.imgMain}" alt="${product.title}" class="product-img img-main" loading="lazy">
          </div>
          <div class="swiper-slide">
            <img src="${product.imgHover}" alt="${product.title} detalle" class="product-img img-hover" loading="lazy">
          </div>
        </div>
        <div class="swiper-pagination mobile-only"></div>
        <button class="btn-quick-add desktop-only" data-id="${product.id}" aria-label="Añadir a la colección">
          <span>Añadir a la colección</span>
        </button>
      </div>
      <div class="product-info">
        <h2 class="product-title">${product.title}</h2>
        <span class="product-code">${product.code}</span>
        <span class="product-price">${product.price}</span>
        <button class="btn-quick-add-mobile mobile-only" data-id="${product.id}" aria-label="Añadir a la colección">
          <span>Añadir a la colección</span>
        </button>
      </div>
    `;

    gridContainer.appendChild(productCard);
  });

  // Escuchar clics delegados de forma segura mediante window.agregarAlCarritoPorId
  const quickAddButtons = gridContainer.querySelectorAll(
    ".btn-quick-add, .btn-quick-add-mobile",
  );
  quickAddButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const productId = parseInt(button.getAttribute("data-id"), 10);

      if (typeof window.agregarAlCarritoPorId === "function") {
        window.agregarAlCarritoPorId(productId, products);
      } else {
        console.warn(
          "La función agregarAlCarritoPorId no está disponible globalmente aún.",
        );
      }
    });
  });

  manageProductCarousels();
}

/**
 * Filtra el catálogo normalizando caracteres especiales (tildes)
 */
function setupCategoryFilters() {
  const filterButtons = document.querySelectorAll(".category-main-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      filterButtons.forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");

      const rawCategory = button.textContent.trim().toLowerCase();
      const selectedCategory = rawCategory
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      if (selectedCategory === "todo") {
        renderProducts(products);
      } else {
        const filtered = products.filter((p) => {
          const productCat = p.category
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          return productCat === selectedCategory;
        });
        renderProducts(filtered);
      }
    });
  });
}

// Inicialización de ciclo de carga único
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  setupCategoryFilters();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(manageProductCarousels, 150);
  });
});

// ==========================================================================
// EXPOSICIÓN GLOBAL DEL CATÁLOGO
// ==========================================================================
window.productos = products;
window.renderProducts = renderProducts; // 🌟 Con esto, main.js podrá ordenar y volver a pintar
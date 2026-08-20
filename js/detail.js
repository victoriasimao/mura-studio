/**
 * js/detail.js
 * MURA STUDIO — MOTOR DINÁMICO DE DETALLE DE PRODUCTO
 * Captura el ID de la URL y renderiza la ficha técnica.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener el ID del producto desde la URL (?id=1)
  const params = new URLSearchParams(window.location.search);
  const productoId = parseInt(params.get("id"), 10);

  // 2. Validar que existan los productos globales cargados desde products.js
  if (!window.productos || !productoId) {
    console.warn("Falta el catálogo global o el ID en la URL.");
    return;
  }

  // 3. Buscar el producto en la lista maestro
  const producto = window.productos.find(p => p.id === productoId);

  if (!producto) {
    console.error("Producto no encontrado con el ID proporcionado.");
    return;
  }

  // 4. Reemplazar Textos e Información en el HTML
  document.title = `${producto.title} — Mura Studio`;
  
  const metaElement = document.querySelector(".product-meta");
  const titleElement = document.querySelector(".product-title");
  const priceElement = document.querySelector(".product-price");
  const descContainer = document.querySelector(".product-description");
  const specsContainer = document.querySelector(".product-specs");

  if (metaElement) metaElement.textContent = producto.code;
  if (titleElement) titleElement.textContent = producto.title.toUpperCase();
  if (priceElement) priceElement.textContent = producto.price;

  // Renderizar descripción (Maneja saltos de línea si es un array de párrafos)
  if (descContainer) {
    if (Array.isArray(producto.description)) {
      descContainer.innerHTML = producto.description.map(p => `<p>${p}</p>`).join("");
    } else {
      descContainer.innerHTML = `<p>${producto.description}</p>`;
    }
  }

  // 🌟 CORRECCIÓN: Renderizar especificaciones técnicas discriminando Arrays de Strings
  if (specsContainer && producto.specs) {
    specsContainer.innerHTML = Object.entries(producto.specs)
      .map(([label, value]) => {
        let valueHTML = '';

        // Si la especificación es un array (como Materiales, Acabados o Dimensiones)
        if (Array.isArray(value)) {
          valueHTML = `
            <div class="spec-value-group">
              ${value.map(linea => `<span class="spec-line">${linea}</span>`).join("")}
            </div>
          `;
        } else {
          // Si es un texto plano simple (como Base u Origen)
          valueHTML = `<span class="spec-value">${value}</span>`;
        }

        return `
          <div class="spec-row">
            <span class="spec-label">${label}</span>
            ${valueHTML}
          </div>
        `;
      }).join("");
  }

  // 5. Renderizar Imágenes dinámicas en el carrusel de Swiper
  const galleryWrapper = document.querySelector(".gallery-wrapper");
  if (galleryWrapper) {
    // Creamos un array temporal con las dos imágenes que sí existen en products.js
    const fotosProducto = [producto.imgMain, producto.imgHover].filter(Boolean);

    galleryWrapper.innerHTML = fotosProducto
      .map(imgUrl => `
        <div class="swiper-slide gallery-image-item">
          <img src="${imgUrl}" alt="${producto.title}" />
        </div>
      `).join("");

    // Inicializar o actualizar Swiper de forma segura
    new Swiper(".detail-swiper", {
      loop: fotosProducto.length > 1,
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    });
  }

  // 6. Conectar el botón de añadir a la colección
  const btnAdd = document.querySelector(".btn-add-to-collection");
  if (btnAdd) {
    // Limpiamos listeners anteriores clonando el botón para evitar duplicados
    const btnClonado = btnAdd.cloneNode(true);
    btnAdd.parentNode.replaceChild(btnClonado, btnAdd);

    btnClonado.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof window.agregarAlCarritoPorId === "function") {
        window.agregarAlCarritoPorId(producto.id, window.productos);
      } else {
        console.error("El motor de cart.js no está disponible globalmente.");
      }
    });
  }
});
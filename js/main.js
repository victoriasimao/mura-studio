/**
 * MURA STUDIO — SISTEMA INTERACTIVO PRINCIPAL
 * Interacciones globales: Menú Lateral, Carrito, Filtros por Categoría, Ordenamiento y Acordeones.
 */

document.addEventListener("DOMContentLoaded", () => {
  const drawerOverlay = document.getElementById("drawerOverlay");

  /**
   * Helper para transformar "$75.990" -> 75990 de forma segura para comparar números.
   */
  function obtenerPrecioNumerico(precioStr) {
    if (typeof precioStr === "number") return precioStr;
    if (!precioStr) return 0;
    return parseInt(precioStr.replace(/[^0-9]/g, ""), 10) || 0;
  }

  // ==========================================================================
  // 1. CONTROLADOR UNIFICADO DEL MENÚ LATERAL DE NAVEGACIÓN (DRAWER)
  // ==========================================================================
  const openMenuBtn = document.getElementById("openMenuBtn") || document.querySelector(".icon-btn-menu");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const menuDrawer = document.getElementById("menuDrawer");

  if (openMenuBtn && closeMenuBtn && menuDrawer && drawerOverlay) {
    function openMenu() {
      const cartDrawer = document.getElementById("cart-drawer");
      if (cartDrawer?.classList.contains("is-open")) {
        cartDrawer.classList.remove("is-open");
      }
      menuDrawer.classList.add("is-open");
      drawerOverlay.classList.add("is-active");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      menuDrawer.classList.remove("is-open");
      const cartDrawer = document.getElementById("cart-drawer");
      const isCartOpen = cartDrawer?.classList.contains("is-open");

      if (!isCartOpen) {
        drawerOverlay.classList.remove("is-active");
        document.body.style.overflow = "";
      }
    }

    openMenuBtn.addEventListener("click", openMenu);
    closeMenuBtn.addEventListener("click", closeMenu);

    drawerOverlay.addEventListener("click", () => {
      if (menuDrawer.classList.contains("is-open")) {
        closeMenu();
      }
    });
  }

  // ==========================================================================
  // 2. CONEXIÓN DEL MENÚ LATERAL DEL CARRITO DE COMPRAS
  // ==========================================================================
  const cartToggleBtn = document.getElementById("cartToggleBtn") || document.querySelector(".header-cart-toggle");

  if (cartToggleBtn) {
    cartToggleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof window.toggleCart === "function") {
        window.toggleCart();
      } else {
        console.warn("El archivo cart.js aún no se ha cargado.");
      }
    });
  }

  // ==========================================================================
  // 3. CONTROLADOR DE FILTROS POR CATEGORÍA PRINCIPAL Y ORDENAMIENTO
  // ==========================================================================
  const categoryButtons = document.querySelectorAll(".category-main-btn");

  if (categoryButtons.length > 0) {
    categoryButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        categoryButtons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        ejecutarFiltrosCombinados();
      });
    });
  }

  /**
   * Procesa la categoría activa y el ordenamiento seleccionado para actualizar la vitrina
   */
  window.ejecutarFiltrosCombinados = function() {
    if (typeof window.renderProducts !== "function" || !window.productos) return;

    // 1. Obtener y normalizar categoría macro superior
    const activeCategoryBtn = document.querySelector(".category-main-btn.is-active");
    let rawCategory = activeCategoryBtn ? activeCategoryBtn.textContent.trim().toLowerCase() : "todo";
    let categoriaMacro = rawCategory.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (categoriaMacro === "coleccion" || categoriaMacro === "colecciones") {
      categoriaMacro = "colecciones";
    }

    // 2. Filtrar partiendo del catálogo original limpio según la categoría
    let productosFiltrados = window.productos.filter((producto) => {
      if (categoriaMacro !== "todo") {
        let prodCatClean = producto.category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        if (prodCatClean === "coleccion") prodCatClean = "colecciones";
        
        if (prodCatClean !== categoriaMacro) return false;
      }
      return true;
    });

    // 3. Aplicar criterio de ordenamiento activo
    const selectedSort = document.querySelector(".sort-options-list .sort-item.is-selected");
    if (selectedSort) {
      const criterio = selectedSort.getAttribute("data-value");
      if (criterio === "precio-asc") {
        productosFiltrados.sort((a, b) => obtenerPrecioNumerico(a.price) - obtenerPrecioNumerico(b.price));
      } else if (criterio === "precio-desc") {
        productosFiltrados.sort((a, b) => obtenerPrecioNumerico(b.price) - obtenerPrecioNumerico(a.price));
      } else if (criterio === "novedades") {
        productosFiltrados.sort((a, b) => b.id - a.id);
      } else if (criterio === "destacados") {
        productosFiltrados.sort((a, b) => a.id - b.id);
      }
    }

    // 4. Renderizar los productos resultantes
    window.renderProducts(productosFiltrados);
  }

  // ==========================================================================
  // 4. CONTROLADOR DEL SELECTOR DE ORDEN
  // ==========================================================================
  const sortDropdown = document.getElementById("customSortDropdown");

  if (sortDropdown) {
    const trigger = sortDropdown.querySelector(".sort-trigger-btn");
    const options = sortDropdown.querySelectorAll(".sort-item");
    const targetText = document.getElementById("currentTarget");

    if (trigger && options && targetText) {
      trigger.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = sortDropdown.classList.toggle("is-active");
        trigger.setAttribute("aria-expanded", isOpen);
      });

      options.forEach((option) => {
        option.addEventListener("click", () => {
          options.forEach((opt) => opt.classList.remove("is-selected"));
          option.classList.add("is-selected");

          targetText.textContent = option.textContent;
          sortDropdown.classList.remove("is-active");
          trigger.setAttribute("aria-expanded", "false");

          ejecutarFiltrosCombinados();
        });
      });

      document.addEventListener("click", (event) => {
        if (!sortDropdown.contains(event.target)) {
          sortDropdown.classList.remove("is-active");
          trigger.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  // ==========================================================================
  // 5. ACORDEONES COLAPSABLES DEL PIE DE PÁGINA (FOOTER RESPONSIVE)
  // ==========================================================================
  const footerTriggers = document.querySelectorAll(".footer-trigger");

  footerTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const currentGroup = trigger.closest(".footer-group");
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".footer-group").forEach((group) => {
        if (group !== currentGroup) {
          group.classList.remove("is-open");
          group.querySelector(".footer-trigger")?.setAttribute("aria-expanded", "false");
        }
      });

      currentGroup?.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", !isExpanded);
    });
  });
});

// ==========================================================================
// 6. CONEXIÓN DEL MENÚ LATERAL CON EL SISTEMA DE FILTROS Y NAVEGACIÓN
// ==========================================================================
const menuDrawerLinks = document.querySelectorAll(".menu-drawer .drawer-links a");

menuDrawerLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    const categoriaNombre = link.textContent.trim().toLowerCase();

    // Si es un enlace normal de página (ej. nosotros.html, contacto.html, etc.)
    if (href && href !== "#" && !href.startsWith("#")) {
      return;
    }

    e.preventDefault();

    const esIndex = window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/");

    if (esIndex) {
      const macroButtons = document.querySelectorAll(".category-main-btn");
      let btnEncontrado = null;

      macroButtons.forEach((btn) => {
        if (btn.textContent.trim().toLowerCase() === categoriaNombre) {
          btnEncontrado = btn;
        }
      });

      if (btnEncontrado) {
        macroButtons.forEach((b) => b.classList.remove("is-active"));
        btnEncontrado.classList.add("is-active");

        if (typeof window.ejecutarFiltrosCombinados === "function") {
          window.ejecutarFiltrosCombinados();
        }
      }

      const menuDrawer = document.getElementById("menuDrawer");
      const drawerOverlay = document.getElementById("drawerOverlay");
      if (menuDrawer) menuDrawer.classList.remove("is-open");
      if (drawerOverlay) drawerOverlay.classList.remove("is-active");
      document.body.style.overflow = "";

    } else {
      localStorage.setItem("muraFiltroPendiente", categoriaNombre);
      window.location.href = "index.html";
    }
  });
});

// ==========================================================================
// 7. AUTO-APLICAR FILTRO PENDIENTE AL CARGAR EL HOME
// ==========================================================================
const filtroPendiente = localStorage.getItem("muraFiltroPendiente");
if (filtroPendiente) {
  localStorage.removeItem("muraFiltroPendiente");

  window.addEventListener("load", () => {
    const macroButtons = document.querySelectorAll(".category-main-btn");
    macroButtons.forEach((btn) => {
      if (btn.textContent.trim().toLowerCase() === filtroPendiente) {
        macroButtons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        if (typeof window.ejecutarFiltrosCombinados === "function") {
          window.ejecutarFiltrosCombinados();
        }
      }
    });
  });
}
// ==========================================================================
// 8. CONTROLADOR PARA BOTONES DE CATEGORÍA DESDE EL HERO (Ej. "VER COLECCIÓN")
// ==========================================================================
const externalFilterButtons = document.querySelectorAll("[data-category]");

externalFilterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const categoriaDeseada = btn.getAttribute("data-category").trim().toLowerCase();

    // Buscar el botón correspondiente en la barra de categorías superior
    const macroButtons = document.querySelectorAll(".category-main-btn");
    let btnEncontrado = null;

    macroButtons.forEach((mBtn) => {
      const textoBtnClean = mBtn.textContent.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (textoBtnClean === categoriaDeseada) {
        btnEncontrado = mBtn;
      }
    });

    if (btnEncontrado) {
      // Activar visualmente la categoría superior
      macroButtons.forEach((b) => b.classList.remove("is-active"));
      btnEncontrado.classList.add("is-active");

      // Ejecutar la función de filtrado combinada
      if (typeof window.ejecutarFiltrosCombinados === "function") {
        window.ejecutarFiltrosCombinados();
      }

      // Desplazamiento suave hacia la grilla de productos
      const grid = document.getElementById("products-grid");
      if (grid) {
        grid.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
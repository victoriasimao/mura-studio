// assets/js/cart.js

// 1. Estado de la aplicación cargado desde almacenamiento o vacío por defecto
let carrito = JSON.parse(localStorage.getItem('mura_cart')) || [];
let toastTimeout = null;
let closeCartTimeout = null; // 🌟 Declarado a nivel global del script

/**
 * Respalda el estado actual del carrito en el disco del navegador.
 */
function guardarCarritoEnStorage() {
  localStorage.setItem('mura_cart', JSON.stringify(carrito));
}

/**
 * Controla la apertura y cierre del panel lateral del carrito y su overlay.
 */
function toggleCart() {
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('drawerOverlay');
  if (!cartDrawer || !cartOverlay) return;
  
  // Si el menú de navegación izquierdo está abierto, lo removemos
  const menuDrawer = document.getElementById('menuDrawer');
  if (menuDrawer && menuDrawer.classList.contains('is-open')) {
    menuDrawer.classList.remove('is-open');
  }

  const isOpen = cartDrawer.classList.toggle('is-open');
  
  if (isOpen) {
    cartOverlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    
    // Si el usuario abre el carrito manualmente y está vacío, cancelamos cualquier cierre pendiente
    if (carrito.length === 0 && closeCartTimeout) {
      clearTimeout(closeCartTimeout);
    }
  } else {
    cartOverlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }
}

/**
 * Añade un producto al carrito utilizando su ID.
 */
function agregarAlCarritoPorId(id, productsList) {
  const productoSeleccionado = productsList.find(p => p.id === id);
  if (!productoSeleccionado) return;

  // Si el carrito estaba vacío y se programó un cierre automático, lo cancelamos de inmediato
  if (carrito.length === 0 && closeCartTimeout) {
    clearTimeout(closeCartTimeout);
  }

  const itemExistente = carrito.find(item => item.id === id);

  if (itemExistente) {
    itemExistente.cantidad += 1;
  } else {
    carrito.push({
      id: productoSeleccionado.id,
      title: productoSeleccionado.title,
      code: productoSeleccionado.code,
      priceStr: productoSeleccionado.price,
      priceNum: parseInt(productoSeleccionado.price.replace(/[^0-9]/g, ''), 10),
      img: productoSeleccionado.imgMain,
      cantidad: 1
    });
  }

  guardarCarritoEnStorage(); 
  actualizarInterfazCarrito();
  
  const itemAgregado = carrito.find(item => item.id === id);
  mostrarMiniModalConfirmacion(itemAgregado);
}

/**
 * Renderiza el HTML de los elementos en el DOM y actualiza los indicadores numéricos.
 */
function actualizarInterfazCarrito() {
  const cartBody = document.querySelector('.cart-body');
  const totalPriceElement = document.querySelector('.total-price');
  const cartDot = document.querySelector('.cart-dot');
  const drawerBrand = document.querySelector('.cart-drawer .drawer-header .drawer-brand');
  const checkoutButton = document.querySelector('.btn-checkout'); // 🌟 Botón de pago

  if (!cartBody || !totalPriceElement) return;

  const totalArticulos = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  // Actualizar la burbuja del carro en el header (.cart-dot)
  if (cartDot) {
    if (totalArticulos > 0) {
      cartDot.classList.add('is-active');
      cartDot.setAttribute('data-count', totalArticulos); 
    } else {
      cartDot.classList.remove('is-active');
      cartDot.removeAttribute('data-count');
    }
  }

  if (drawerBrand) {
    drawerBrand.innerText = totalArticulos > 0 ? `TU COLECCIÓN (${totalArticulos})` : 'TU COLECCIÓN';
  }

  // 🌟 Manejo del estado visual del botón de pago (Punto 4)
  if (checkoutButton) {
    if (totalArticulos === 0) {
      checkoutButton.classList.add('is-disabled');
      checkoutButton.setAttribute('aria-disabled', 'true');
    } else {
      checkoutButton.classList.remove('is-disabled');
      checkoutButton.removeAttribute('aria-disabled');
    }
  }

  if (carrito.length === 0) {
    cartBody.innerHTML = `<p class="cart-empty-message">Tu colección está vacía.</p>`;
    totalPriceElement.innerText = "$0";

    // 🌟 Lógica del temporizador para cerrar el carrito automáticamente (Punto 3)
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('drawerOverlay');
    
    if (cartDrawer && cartDrawer.classList.contains('is-open')) {
      if (closeCartTimeout) clearTimeout(closeCartTimeout);
      
      closeCartTimeout = setTimeout(() => {
        cartDrawer.classList.remove('is-open');
        if (cartOverlay) cartOverlay.classList.remove('is-active');
        document.body.style.overflow = '';
      }, 2500); // 2.5 segundos
    }
    return;
  }

  cartBody.innerHTML = '';
  let subtotal = 0;

  carrito.forEach((item, index) => {
    subtotal += item.priceNum * item.cantidad;

    const itemHTML = `
      <div class="cart-item" data-index="${index}">
        <div class="item-img">
          <img src="${item.img}" alt="${item.title}">
        </div>
        <div class="item-details">
          <div class="item-details-header">
            <div>
              <h4 class="item-title">${item.title}</h4>
              <p class="item-meta">${item.code}</p>
            </div>
            <button class="remove-item-btn" aria-label="Eliminar producto">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div class="item-details-footer">
            <div class="item-qty">
              <button class="qty-btn btn-decrementar" aria-label="Disminuir cantidad">−</button>
              <span class="qty-num">${item.cantidad}</span>
              <button class="qty-btn btn-incrementar" aria-label="Aumentar cantidad">+</button>
            </div>
            <div class="item-price">
              <span>$${(item.priceNum * item.cantidad).toLocaleString('es-CL')}</span>
            </div>
          </div>
        </div>
      </div>
    `;
    cartBody.insertAdjacentHTML('beforeend', itemHTML);
  });

  totalPriceElement.innerText = `$${subtotal.toLocaleString('es-CL')}`;
}

function cambiarCantidad(index, cambio) {
  if (!carrito[index]) return;
  carrito[index].cantidad += cambio;
  
  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }
  
  guardarCarritoEnStorage(); 
  actualizarInterfazCarrito();
}

function eliminarDelCarrito(index) {
  if (!carrito[index]) return;
  carrito.splice(index, 1);
  
  guardarCarritoEnStorage(); 
  actualizarInterfazCarrito();
}

function mostrarMiniModalConfirmacion(producto) {
  const toast = document.getElementById('cart-toast-notification');
  if (!toast) return;

  toast.innerHTML = `
    <div class="cart-toast-inner">
      <div class="cart-toast-message">✓ Añadido a tu colección</div>
      <div class="cart-toast-product">
        <img src="${producto.img}" alt="${producto.title}" class="cart-toast-img">
        <div class="cart-toast-info">
          <h5>${producto.title}</h5>
          <p>$${producto.priceNum.toLocaleString('es-CL')}</p>
        </div>
      </div>
    </div>
  `;

  if (toastTimeout) clearTimeout(toastTimeout);
  toast.classList.add('is-visible');

  toastTimeout = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 3000);
}

// Inicialización segura delegada
document.addEventListener('DOMContentLoaded', () => {
  const cartBody = document.querySelector('.cart-body');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const drawerOverlay = document.getElementById('drawerOverlay');

  actualizarInterfazCarrito();

  closeCartBtn?.addEventListener('click', toggleCart);
  
  drawerOverlay?.addEventListener('click', () => {
    const cartDrawer = document.getElementById('cart-drawer');
    if (cartDrawer && cartDrawer.classList.contains('is-open')) {
      toggleCart();
    }
  });

  cartBody?.addEventListener('click', (e) => {
    const cartItem = e.target.closest('.cart-item');
    if (!cartItem) return;

    const index = parseInt(cartItem.getAttribute('data-index'), 10);

    if (e.target.closest('.remove-item-btn')) {
      eliminarDelCarrito(index);
    } else if (e.target.closest('.btn-decrementar')) {
      cambiarCantidad(index, -1);
    } else if (e.target.closest('.btn-incrementar')) {
      cambiarCantidad(index, 1);
    }
  });
});

// Exposición global limpia
window.toggleCart = toggleCart;
window.agregarAlCarritoPorId = agregarAlCarritoPorId;
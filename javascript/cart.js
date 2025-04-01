// Cart functionality
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Initialize products from database
const products = window.cartDB ? window.cartDB.getAllProducts() : [];

// Update cart badge and total
function updateCartBadge() {
    const cartBadge = document.querySelector('.nav-action-badge[value="4"]');
    const cartTotal = document.querySelector('.nav-action-text[value]');
    if (cartBadge) cartBadge.textContent = cartItems.length;
    if (cartTotal) {
        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.innerHTML = `Basket: <strong>$${total.toFixed(2)}</strong>`;
    }
}

// Function to get product info from card
function getProductInfo(card) {
  const img = card.querySelector('.card-banner img');
  const title = card.querySelector('.card-title a');
  const price = card.querySelector('.card-price');
  const categories = Array.from(card.querySelectorAll('.card-cat-link')).map(link => link.textContent);
  const productName = title.textContent.trim();
  
  // Try to find the product in the database first
  const dbProduct = products.find(p => p.name === productName);
  if (dbProduct) {
    return {
      ...dbProduct,
      timestamp: new Date().toISOString()
    };
  }

  // Fallback to card information if product not in database
  return {
    id: Date.now().toString(),
    image: img.src,
    name: productName,
    price: parseFloat(price.getAttribute('value')),
    categories: categories,
    timestamp: new Date().toISOString()
  };
}

// Function to add item to cart
function addToCart(product) {
  const productInfo = typeof product === 'object' && product.tagName ? getProductInfo(product) : product;
  const existingItem = cartItems.find(item => item.name === productInfo.name);
  
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
    showNotification('Product quantity updated in cart!');
  } else {
    cartItems.push({
      ...productInfo,
      quantity: 1
    });
    showNotification('Product added to cart!');
  }
  
  saveCart();
  updateCartDisplay();
  updateBadges();
}

// Function to show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

// Function to update item quantity
function updateQuantity(index, change) {
  if (!cartItems[index]) return;
  
  const newQuantity = (cartItems[index].quantity || 1) + change;
  cartItems[index].quantity = Math.max(1, Math.min(newQuantity, 99));
  
  saveCart();
  updateCartDisplay();
  updateBadges();
}

// Function to remove item from cart
function removeItem(index) {
  cartItems.splice(index, 1);
  saveCart();
  updateCartDisplay();
  updateBadges();
}

// Function to save cart to localStorage
function saveCart() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to update cart display
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartSummary = document.getElementById('cartSummary');
  const subtotalElement = document.getElementById('subtotal');
  const totalElement = document.getElementById('total');

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    cartSummary.style.display = 'none';
    return;
  }

  cartSummary.style.display = 'block';
  cartItemsContainer.innerHTML = '';
  let subtotal = 0;

  cartItems.forEach((item, index) => {
    const price = typeof item.price === 'number' ? item.price : parseFloat(item.price.replace(/[^0-9.]/g, ''));
    subtotal += price * (item.quantity || 1);

    const cartItemElement = document.createElement('div');
    cartItemElement.className = 'cart-item';
    cartItemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-details">
        <h3 class="item-name">${item.name}</h3>
        <p class="item-price">$${(price * (item.quantity || 1)).toFixed(2)}</p>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
          <span>${item.quantity || 1}</span>
          <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
          <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        </div>
      </div>
    `;
    cartItemsContainer.appendChild(cartItemElement);
  });

  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  totalElement.textContent = `$${(subtotal + 10).toFixed(2)}`;
}

// Function to update cart and wishlist badges
function updateBadges() {
  const cartBadges = document.querySelectorAll('.nav-action-badge');
  cartBadges.forEach(badge => {
    if (badge.closest('.nav-action-btn').querySelector('.nav-action-text').textContent.includes('Wishlist')) {
      const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
      badge.textContent = wishlistItems.length;
    } else {
      badge.textContent = cartItems.length;
    }
  });
}

// Initialize cart display when page loads
document.addEventListener('DOMContentLoaded', () => {
  updateCartDisplay();
  updateBadges();
});
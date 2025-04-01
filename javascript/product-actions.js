// Shared functionality for cart and wishlist
let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Get product info from card
function getProductInfo(card) {
  const img = card.querySelector('.card-banner img');
  const title = card.querySelector('.card-title a');
  const price = card.querySelector('.card-price');
  const categories = Array.from(card.querySelectorAll('.card-cat-link')).map(link => link.textContent);

  return {
    id: Date.now(),
    image: img.src,
    name: title.textContent,
    price: parseFloat(price.getAttribute('value')),
    categories: categories,
    timestamp: new Date().toISOString()
  };
}

// Update badges
function updateBadges() {
    // Update wishlist badge
    const wishlistBadge = document.querySelector('.nav-action-badge[value="5"]');
    if (wishlistBadge) wishlistBadge.textContent = wishlistItems.length;

    // Update cart badge and total
    const cartBadge = document.querySelector('.nav-action-badge[value="4"]');
    const cartTotal = document.querySelector('.nav-action-text[value]');
    if (cartBadge) cartBadge.textContent = cartItems.length;
    if (cartTotal) {
        const total = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
        cartTotal.innerHTML = `Basket: <strong>$${total.toFixed(2)}</strong>`;
    }
}


// Add to wishlist
function addToWishlist(productCard) {
    const productInfo = getProductInfo(productCard);
    if (!wishlistItems.some(item => item.name === productInfo.name)) {
        wishlistItems.push(productInfo);
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
        updateBadges();
        showNotification('Product added to wishlist!');
    } else {
        showNotification('Product already in wishlist!');
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateBadges();

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const cartBtn = card.querySelector('[aria-labelledby="card-label-1"]');
        const wishlistBtn = card.querySelector('[aria-labelledby="card-label-2"]');

        if (cartBtn) cartBtn.addEventListener('click', () => addToCart(card));
        if (wishlistBtn) wishlistBtn.addEventListener('click', () => addToWishlist(card));
    });
});

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
.notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #333;
    color: white;
    padding: 15px 25px;
    border-radius: 5px;
    animation: slideIn 0.5s ease-out;
    z-index: 1000;
}

@keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}
`;
document.head.appendChild(style);
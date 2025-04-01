// Product data management
// Note: getProductInfo, addToCart, and updateBadges are imported from product-actions.js
let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

// Update wishlist badge
function updateWishlistBadge() {
    const wishlistBadge = document.querySelector('.nav-action-badge[value="5"]');
    if (wishlistBadge) wishlistBadge.textContent = wishlistItems.length;
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

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    updateBadges();

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const cartBtn = card.querySelector('[aria-labelledby="card-label-1"]');
        const wishlistBtn = card.querySelector('[aria-labelledby="card-label-2"]');

        cartBtn.addEventListener('click', () => addToCart(card));
        wishlistBtn.addEventListener('click', () => addToWishlist(card));
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
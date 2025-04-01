// Product management functionality
let cart = [];
let wishlist = [];

// Add to Cart functionality
function addToCart(button) {
    const productId = button.getAttribute('data-product-id');
    const productCard = button.closest('.product-card');
    const size = productCard.querySelector('.size-select').value;
    const selectedColor = productCard.querySelector('.color-circle.selected');
    const color = selectedColor ? selectedColor.getAttribute('data-color') : 'default';
    
    const product = {
        id: productId,
        name: productCard.querySelector('.card-title a').textContent,
        price: parseFloat(productCard.querySelector('.card-price').getAttribute('value')),
        size: size,
        color: color,
        quantity: 1
    };

    cart.push(product);
    updateCartCount();
    showNotification('Product added to cart!');
}

// Add to Wishlist functionality
function addToWishlist(button) {
    const productId = button.getAttribute('data-product-id');
    const productCard = button.closest('.product-card');
    
    const product = {
        id: productId,
        name: productCard.querySelector('.card-title a').textContent,
        price: parseFloat(productCard.querySelector('.card-price').getAttribute('value'))
    };

    wishlist.push(product);
    updateWishlistCount();
    showNotification('Product added to wishlist!');
    button.querySelector('ion-icon').setAttribute('name', 'heart');
}

// Quick View functionality
function showQuickView(button) {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('.card-title a').textContent;
    const productPrice = productCard.querySelector('.card-price').textContent;
    const productDesc = productCard.querySelector('.product-description').textContent;
    
    // Create and show modal with product details
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${productName}</h2>
            <p class="price">${productPrice}</p>
            <p>${productDesc}</p>
            <div class="product-options">
                <div class="size-selection">
                    ${productCard.querySelector('.size-options').innerHTML}
                </div>
                <div class="color-selection">
                    ${productCard.querySelector('.color-options').innerHTML}
                </div>
            </div>
            <button class="buy-now-btn">Buy Now</button>
            <button class="add-to-cart-btn">Add to Cart</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    modal.querySelector('.close-modal').onclick = () => modal.remove();
    modal.querySelector('.add-to-cart-btn').onclick = () => {
        addToCart(button);
        modal.remove();
    };
    modal.querySelector('.buy-now-btn').onclick = () => {
        buyNow(button);
        modal.remove();
    };
}

// Buy Now functionality
function buyNow(button) {
    const productId = button.getAttribute('data-product-id');
    const productCard = button.closest('.product-card');
    const size = productCard.querySelector('.size-select').value;
    const selectedColor = productCard.querySelector('.color-circle.selected');
    const color = selectedColor ? selectedColor.getAttribute('data-color') : 'default';
    
    // Simulate checkout process
    showNotification('Proceeding to checkout...');
    // Here you would typically redirect to a checkout page
    window.location.href = `checkout.html?product=${productId}&size=${size}&color=${color}`;
}

// Helper functions
function updateCartCount() {
    const cartBadge = document.querySelector('.nav-action-badge[value="4"]');
    if (cartBadge) {
        cartBadge.textContent = cart.length;
        cartBadge.setAttribute('value', cart.length);
    }
}

function updateWishlistCount() {
    const wishlistBadge = document.querySelector('.nav-action-badge[value="5"]');
    if (wishlistBadge) {
        wishlistBadge.textContent = wishlist.length;
        wishlistBadge.setAttribute('value', wishlist.length);
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
}

// Color selection functionality
document.addEventListener('DOMContentLoaded', () => {
    const colorCircles = document.querySelectorAll('.color-circle');
    colorCircles.forEach(circle => {
        circle.addEventListener('click', () => {
            // Remove selected class from all circles in the same product card
            const productCard = circle.closest('.product-card');
            productCard.querySelectorAll('.color-circle').forEach(c => c.classList.remove('selected'));
            // Add selected class to clicked circle
            circle.classList.add('selected');
        });
    });
});
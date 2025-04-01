document.addEventListener('DOMContentLoaded', () => {
  const wishlistContainer = document.getElementById('wishlist-container');
  const wishlistItems = document.getElementById('wishlist-items');
  const emptyWishlist = document.getElementById('empty-wishlist');
  const wishlistCount = document.getElementById('wishlist-count');

  // Initialize wishlist from localStorage
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Update wishlist counter
  const updateWishlistCount = () => {
    wishlistCount.textContent = wishlist.length;
    wishlistCount.setAttribute('value', wishlist.length);

    if (wishlist.length === 0) {
      emptyWishlist.classList.add('active');
      wishlistItems.style.display = 'none';
    } else {
      emptyWishlist.classList.remove('active');
      wishlistItems.style.display = 'grid';
    }
  };

  // Render wishlist items
  const renderWishlistItems = () => {
    wishlistItems.innerHTML = '';
    wishlist.forEach(item => {
      const wishlistItem = document.createElement('div');
      wishlistItem.className = 'wishlist-item';
      wishlistItem.innerHTML = `
        <div class="wishlist-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="wishlist-item-content">
          <h3 class="wishlist-item-title">${item.name}</h3>
          <div class="wishlist-item-price">$${item.price.toFixed(2)}</div>
          <div class="wishlist-item-actions">
            <button class="wishlist-btn move-to-cart" data-id="${item.id}">Move to Cart</button>
            <button class="wishlist-btn remove-item" data-id="${item.id}">Remove</button>
          </div>
        </div>
      `;
      wishlistItems.appendChild(wishlistItem);
    });

    // Add event listeners to buttons
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', () => removeFromWishlist(button.dataset.id));
    });

    document.querySelectorAll('.move-to-cart').forEach(button => {
      button.addEventListener('click', () => moveToCart(button.dataset.id));
    });
  };

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    wishlist = wishlist.filter(item => item.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    renderWishlistItems();
  };

  // Move item to cart
  const moveToCart = (id) => {
    const item = wishlist.find(item => item.id === id);
    if (item) {
      // Add to cart logic here
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));

      // Remove from wishlist
      removeFromWishlist(id);

      // Update cart counter
      const cartBadge = document.querySelector('.nav-action-btn [value="4"]');
      if (cartBadge) {
        const currentCount = parseInt(cartBadge.getAttribute('value')) || 0;
        cartBadge.textContent = currentCount + 1;
        cartBadge.setAttribute('value', currentCount + 1);
      }
    }
  };

  // Initialize the page
  updateWishlistCount();
  renderWishlistItems();
}));
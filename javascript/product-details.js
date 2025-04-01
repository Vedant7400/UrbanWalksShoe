// Product Details Modal and Cart/Wishlist Management

class ProductManager {
  constructor() {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    this.wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    this.setupModal();
    this.initializeEventListeners();
  }

  setupModal() {
    // Create modal HTML if it doesn't exist
    if (!document.getElementById('productModal')) {
      const modalHTML = `
        <div id="productModal" class="modal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4);">
          <div class="modal-content" style="background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%; max-width: 600px; border-radius: 8px;">
            <span class="close" style="color: #aaa; float: right; font-size: 28px; font-weight: bold; cursor: pointer;">&times;</span>
            <div id="productDetails"></div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
  }

  initializeEventListeners() {
    // Close modal when clicking the close button or outside
    const modal = document.getElementById('productModal');
    const closeBtn = document.getElementsByClassName('close')[0];

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
      if (event.target == modal) modal.style.display = "none";
    };

    // Initialize product cards
    this.initializeProductCards();
  }

  initializeProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      const image = card.querySelector('.product-image img');
      const cartBtn = card.querySelector('.action-btn:first-child');
      const wishlistBtn = card.querySelector('.action-btn:last-child');

      image.addEventListener('click', () => this.showProductDetails(card));
      cartBtn.addEventListener('click', () => this.addToCart(card));
      wishlistBtn.addEventListener('click', () => this.addToWishlist(card));
    });
  }

  showProductDetails(card) {
    const modal = document.getElementById('productModal');
    const productDetails = document.getElementById('productDetails');
    const name = card.querySelector('.product-name').textContent;
    const brand = card.querySelector('.product-brand').textContent;
    const price = card.querySelector('.product-price').textContent;
    const image = card.querySelector('.product-image img').src;

    const sizes = ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'];
    const colors = ['Black', 'White', 'Red', 'Blue', 'Grey'];

    productDetails.innerHTML = `
      <div style="text-align: center;">
        <img src="${image}" alt="${name}" style="max-width: 300px; margin-bottom: 20px;">
        <h2 style="margin-bottom: 15px;">${name}</h2>
        <p style="font-size: 1.2em; margin-bottom: 15px;">${price}</p>
        <div style="margin-bottom: 20px;">
          <h3 style="margin-bottom: 10px;">Available Sizes:</h3>
          <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            ${sizes.map(size => `<button style="padding: 8px 16px; margin: 5px; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;">${size}</button>`).join('')}
          </div>
        </div>
        <div style="margin-bottom: 20px;">
          <h3 style="margin-bottom: 10px;">Available Colors:</h3>
          <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            ${colors.map(color => `<button style="padding: 8px 16px; margin: 5px; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;">${color}</button>`).join('')}
          </div>
        </div>
        <div style="margin-top: 20px;">
          <h3 style="margin-bottom: 10px;">Product Details:</h3>
          <p>Brand: ${brand}</p>
          <p>Material: Premium quality materials</p>
          <p>Style: Modern and comfortable design</p>
        </div>
      </div>
    `;
    modal.style.display = "block";
  }

  addToCart(card) {
    const product = this.getProductInfo(card);
    this.cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.updateBadges();
    alert('Product added to cart!');
  }

  addToWishlist(card) {
    const product = this.getProductInfo(card);
    this.wishlistItems.push(product);
    localStorage.setItem('wishlistItems', JSON.stringify(this.wishlistItems));
    this.updateBadges();
    alert('Product added to wishlist!');
  }

  getProductInfo(card) {
    return {
      name: card.querySelector('.product-name').textContent,
      brand: card.querySelector('.product-brand').textContent,
      price: card.querySelector('.product-price').textContent,
      image: card.querySelector('.product-image img').src,
      quantity: 1
    };
  }

  updateBadges() {
    const cartBadge = document.querySelector('.nav-action-badge[value="4"]');
    const wishlistBadge = document.querySelector('.nav-action-badge[value="5"]');
    
    if (cartBadge) cartBadge.textContent = this.cartItems.length;
    if (wishlistBadge) wishlistBadge.textContent = this.wishlistItems.length;
  }
}

// Initialize Product Manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const productManager = new ProductManager();
});
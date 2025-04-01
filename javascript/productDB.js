// Product Database Module
const cartDB = {
  products: [
    {
      id: 'nike260',
      name: 'Nike Air Max 2023',
      price: 180.85,
      image: './assets/images/nike260.png', // Update this path
      categories: ['Men', 'Sports'],
      description: 'Premium sports shoe with advanced cushioning technology and breathable mesh upper.',
      sizes: [7, 8, 9, 10],
      colors: [
        { name: 'Black', code: '#000000' },
        { name: 'Red', code: '#FF0000' },
        { name: 'Blue', code: '#0000FF' }
      ],
      brand: 'Nike'
    },
    {
      id: 'elegant-womens-shoe',
      name: "Elegant Women's Fashion Shoe",
      price: 190.85,
      image: './assets/images/product-2.jpg',
      categories: ['Women', 'Fashion'],
      description: 'Stylish and comfortable fashion shoe perfect for any occasion.',
      sizes: [6, 7, 8, 9],
      colors: [
        { name: 'White', code: '#FFFFFF' },
        { name: 'Pink', code: '#FFC0CB' },
        { name: 'Purple', code: '#800080' }
      ],
      brand: 'Adidas'
    },
    {
      id: 'kids-sport-shoe',
      name: 'Colorful Kids Sport Shoe',
      price: 160.85,
      image: './assets/images/kids-shoe-1.svg',
      categories: ['Kids', 'Sports'],
      description: 'Durable and comfortable sports shoe designed for active kids.',
      sizes: [3, 4, 5, 6],
      colors: [
        { name: 'Blue', code: '#0000FF' },
        { name: 'Green', code: '#00FF00' },
        { name: 'Orange', code: '#FFA500' }
      ],
      brand: 'Puma'
    }
  ],

  getAllProducts() {
    return this.products;
  },

  getProductById(id) {
    return this.products.find(product => product.id === id);
  },

  getProductsByBrand(brand) {
    return brand === 'All' ? this.products : this.products.filter(product => product.brand === brand);
  }
};

// Cart Management
const cart = {
  items: [],

  addItem(productId, size, color) {
    const product = cartDB.getProductById(productId);
    if (product) {
      this.items.push({
        ...product,
        selectedSize: size,
        selectedColor: color,
        quantity: 1
      });
      this.saveToLocalStorage();
      return true;
    }
    return false;
  },

  removeItem(productId) {
    const index = this.items.findIndex(item => item.id === productId);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.saveToLocalStorage();
      return true;
    }
    return false;
  },

  getItems() {
    return this.items;
  },

  saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  },

  loadFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
    }
  }
};

// Wishlist Management
const wishlist = {
  items: [],

  addItem(productId) {
    const product = cartDB.getProductById(productId);
    if (product && !this.items.find(item => item.id === productId)) {
      this.items.push(product);
      this.saveToLocalStorage();
      return true;
    }
    return false;
  },

  removeItem(productId) {
    const index = this.items.findIndex(item => item.id === productId);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.saveToLocalStorage();
      return true;
    }
    return false;
  },

  getItems() {
    return this.items;
  },

  saveToLocalStorage() {
    localStorage.setItem('wishlist', JSON.stringify(this.items));
  },

  loadFromLocalStorage() {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      this.items = JSON.parse(savedWishlist);
    }
  }
};
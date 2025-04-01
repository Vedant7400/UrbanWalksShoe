// Cart Database
const cartDB = {
  products: [
    {
      id: 'nike-air-max',
      name: 'Nike Air Max 270',
      price: 199.99,
      brand: 'Nike',
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c2fff38-9f89-4f43-8716-c1e435d72897/air-max-270-shoes-2V5C4p.png',
      categories: ['Men', 'Sports']
    },
    {
      id: 'nike-zoom',
      name: 'Nike Zoom Pegasus',
      price: 120.00,
      brand: 'Nike',
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/17c9cb39-4723-45e6-9890-89e3c5276328/pegasus-40-road-running-shoes-ztffW8.png',
      categories: ['Women', 'Running']
    },
    {
      id: 'nike-jordan',
      name: 'Air Jordan 1 Mid',
      price: 125.00,
      brand: 'Nike',
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-2f7edc66-d3c9-4997-9191-4c4f504498a4/air-jordan-1-mid-shoes-SQf7DM.png',
      categories: ['Men', 'Basketball']
    },
    {
      id: 'adidas-ultraboost',
      name: 'Adidas Ultraboost',
      price: 180.00,
      brand: 'Adidas',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085ef4e4e678e5fad79011f3686_9366/Ultraboost_Light_Shoes_Black_GY9250_01_standard.jpg',
      categories: ['Men', 'Running']
    },
    {
      id: 'adidas-nmd',
      name: 'Adidas NMD R1',
      price: 140.00,
      brand: 'Adidas',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/NMD_R1_Shoes_Black_GZ9256_01_standard.jpg',
      categories: ['Women', 'Casual']
    },
    {
      id: 'adidas-superstar',
      name: 'Adidas Superstar',
      price: 90.00,
      brand: 'Adidas',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg',
      categories: ['Unisex', 'Casual']
    },
    {
      id: 'puma-rs-x',
      name: 'PUMA RS-X',
      price: 110.00,
      brand: 'Puma',
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/368845/02/sv01/fnd/IND/fmt/png/RS-X-Reinvention-Sneakers',
      categories: ['Men', 'Casual']
    },
    {
      id: 'puma-suede',
      name: 'PUMA Suede Classic',
      price: 70.00,
      brand: 'Puma',
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/374915/01/sv01/fnd/IND/fmt/png/Suede-Classic-XXI-Sneakers',
      categories: ['Unisex', 'Casual']
    },
    {
      id: 'reebok-classic',
      name: 'Reebok Classic Leather',
      price: 75.00,
      brand: 'Reebok',
      image: 'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7dac2a808f194c0a8393ab4600a3d7c1_9366/Classic_Leather_Shoes_White_49797_01_standard.jpg',
      categories: ['Unisex', 'Casual']
    },
    {
      id: 'new-balance-574',
      name: 'New Balance 574',
      price: 85.00,
      brand: 'New Balance',
      image: 'https://nb.scene7.com/is/image/NB/ml574evg_nb_02_i?$pdpflexf2$&wid=440&hei=440',
      categories: ['Unisex', 'Casual']
    }
  ],

  // Get all products
  getAllProducts() {
    return this.products;
  },

  // Get product by ID
  getProductById(id) {
    return this.products.find(product => product.id === id);
  },

  // Get products by brand
  getProductsByBrand(brand) {
    return this.products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
  },

  // Get products by category
  getProductsByCategory(category) {
    return this.products.filter(product => 
      product.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
    );
  },

  // Search products
  searchProducts(query) {
    const searchTerm = query.toLowerCase();
    return this.products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      product.categories.some(cat => cat.toLowerCase().includes(searchTerm))
    );
  }
};

// Export the database
window.cartDB = cartDB;
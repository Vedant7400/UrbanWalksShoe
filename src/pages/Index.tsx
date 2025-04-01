
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products, categories, brands } from "@/services/data";
import ShoeSlider from "@/components/ShoeSlider";

const Index = () => {
  // Featured products (first 12)
  const featuredProducts = products.slice(0, 12);

  // Filter out Nike from brands
  const filteredBrands = brands.filter(brand => brand.name.toLowerCase() !== 'nike');

  return (
    <Layout>
      {/* Shoe Slider */}
      <ShoeSlider />

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-purple">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/products?category=${category.name.toLowerCase()}`}>
                <Card className="overflow-hidden product-card h-64 hover:shadow-lg hover:shadow-brand-purple/20 transition-all duration-300">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end justify-center p-6">
                        <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-purple">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="overflow-hidden product-card hover:shadow-xl hover:shadow-brand-purple/20 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="h-48 mb-4 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.brand}</p>
                    <p className="font-bold text-brand-purple">₹{Math.round(product.price * 83).toLocaleString()}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-purple">Our Brands</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {filteredBrands.map((brand) => (
              <Link key={brand.id} to={`/products?brand=${brand.name.toLowerCase()}`}>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;


import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { getProductById, getFilteredProducts } from "@/services/data";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Heart, Truck, Package, Star } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { dispatch } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (id) {
      const productId = parseInt(id);
      const foundProduct = getProductById(productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedSize(null);
        setSelectedColor(null);
        
        // Get related products by same brand or category
        const related = getFilteredProducts({
          brand: foundProduct.brand,
        }).filter(p => p.id !== productId).slice(0, 4);
        
        setRelatedProducts(related);
      } else {
        navigate("/not-found");
      }
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (!product) return;
    
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      });
      return;
    }

    if (!selectedColor) {
      toast({
        title: "Please select a color",
        variant: "destructive",
      });
      return;
    }

    dispatch({
      type: "ADD_TO_CART",
      payload: { 
        product, 
        quantity 
      },
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 flex justify-center items-center">
          <div className="animate-pulse w-full max-w-6xl">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 h-96 bg-gray-200 rounded"></div>
              <div className="md:w-1/2">
                <div className="h-8 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-6"></div>
                <div className="h-24 bg-gray-200 rounded mb-6"></div>
                <div className="h-10 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded w-1/2 mb-8"></div>
                <div className="h-12 bg-gray-200 rounded mb-4"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border p-8 h-full flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-[500px] object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <nav className="flex mb-4 text-sm">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="text-gray-500 hover:text-brand-blue">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link to="/products" className="text-gray-500 hover:text-brand-blue">Shoes</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-500">{product.name}</span>
                  </div>
                </li>
              </ol>
            </nav>

            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`h-4 w-4 ${
                      index < Math.floor(product.rating)
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500">Brand: <span className="font-medium">{product.brand}</span></span>
            </div>

            <div className="text-2xl font-bold text-brand-blue mb-6">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-9 h-9 rounded-full border-2 cursor-pointer flex items-center justify-center ${
                      selectedColor === color
                        ? "border-brand-blue"
                        : "border-transparent"
                    }`}
                  >
                    <div
                      className="w-7 h-7 rounded-full"
                      style={{
                        backgroundColor: color.toLowerCase(),
                        border: color.toLowerCase() === "white" ? "1px solid #e5e7eb" : "",
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between mb-3">
                <h3 className="text-sm font-medium">Size</h3>
                <button className="text-sm text-brand-blue">Size Guide</button>
              </div>
              <RadioGroup value={selectedSize?.toString() || ""} onValueChange={(value) => setSelectedSize(Number(value))}>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <div key={size} className="relative">
                      <RadioGroupItem
                        value={size.toString()}
                        id={`size-${size}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`size-${size}`}
                        className="flex h-12 w-full cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium transition-all hover:border-brand-blue peer-data-[state=checked]:border-brand-blue peer-data-[state=checked]:bg-brand-blue/10"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Quantity</h3>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-16 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4 mb-8">
              <Button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Truck className="h-5 w-5 mr-3 text-gray-600" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center">
                <Package className="h-5 w-5 mr-3 text-gray-600" />
                <span>Free 30-day returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs (Details, Reviews, etc.) */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start mb-8">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="text-gray-700">
              <p>{product.description}</p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam euismod, nisl eget aliquam ultricies, nunc nisl 
                aliquet nunc, quis aliquam nisl nunc quis nisl.
              </p>
            </TabsContent>
            <TabsContent value="details">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Materials</h4>
                    <p className="text-gray-700">Upper: Synthetic, Sole: Rubber</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Features</h4>
                    <p className="text-gray-700">Cushioned insole, Grippy outsole</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Style</h4>
                    <p className="text-gray-700">Casual, Athletic</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Care</h4>
                    <p className="text-gray-700">Wipe with a clean, damp cloth</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">Customer Reviews</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className={`h-5 w-5 ${
                              index < Math.floor(product.rating)
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        Based on 24 reviews
                      </span>
                    </div>
                  </div>
                  <Button>Write a Review</Button>
                </div>

                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-bold">Great shoes!</h4>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className={`h-4 w-4 ${
                              index < 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">John D. - May 15, 2023</p>
                    <p className="text-gray-700">
                      These shoes are incredibly comfortable and stylish. I've
                      received many compliments on them. Would definitely
                      recommend!
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-bold">Perfect fit</h4>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className={`h-4 w-4 ${
                              index < 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">Sarah L. - April 22, 2023</p>
                    <p className="text-gray-700">
                      I was worried about the size, but they fit perfectly. The
                      quality is excellent and they look exactly like the
                      pictures.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border product-card">
                    <div className="p-4">
                      <div className="h-40 flex items-center justify-center mb-4">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{relatedProduct.name}</h3>
                      <p className="text-gray-600 mb-2">{relatedProduct.brand}</p>
                      <p className="font-bold text-brand-blue">${relatedProduct.price.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;

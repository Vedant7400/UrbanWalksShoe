
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";
import { Filter, SlidersHorizontal, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getFilteredProducts, brands } from "@/services/data";
import { Product } from "@/types";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const brandParam = searchParams.get("brand");
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    category: categoryParam || "",
    brand: brandParam || "",
    priceRange: [0, 25000] as [number, number],
    gender: "" as "" | "men" | "women" | "unisex",
  });

  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    brandParam ? [brandParam] : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 25000]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );

  useEffect(() => {
    // Set initial filters from URL params
    if (categoryParam) {
      setFilters(prev => ({ ...prev, category: categoryParam }));
      setSelectedGenders([categoryParam]);
    }
    if (brandParam) {
      setFilters(prev => ({ ...prev, brand: brandParam }));
      setSelectedBrands([brandParam]);
    }
  }, [categoryParam, brandParam]);

  useEffect(() => {
    // Apply filters and update products
    const filteredProducts = getFilteredProducts({
      category: filters.category,
      brand: filters.brand,
      priceRange: filters.priceRange,
      gender: filters.gender as "men" | "women" | "unisex",
    });
    setProducts(filteredProducts);
  }, [filters]);

  const applyFilters = () => {
    setFilters({
      category: selectedGenders.length > 0 ? selectedGenders[0] : "",
      brand: selectedBrands.length > 0 ? selectedBrands.join(",") : "",
      priceRange: priceRange,
      gender: selectedGenders.length > 0 ? selectedGenders[0] as "men" | "women" | "unisex" : "",
    });
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setPriceRange([0, 25000]);
    setSelectedGenders([]);
    setFilters({
      category: "",
      brand: "",
      priceRange: [0, 25000],
      gender: "",
    });
  };

  const handleBrandChange = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleGenderChange = (gender: string) => {
    if (selectedGenders.includes(gender)) {
      setSelectedGenders(selectedGenders.filter(g => g !== gender));
    } else {
      setSelectedGenders([gender]);
    }
  };

  const FilterContent = () => (
    <div className="h-full overflow-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 px-2">
          <X className="h-4 w-4 mr-1" /> Clear
        </Button>
      </div>

      <div className="space-y-6">
        {/* Gender Filter */}
        <div>
          <h4 className="font-medium mb-3">Gender</h4>
          <div className="space-y-2">
            {["men", "women", "unisex", "kids"].map((gender) => (
              <div key={gender} className="flex items-center space-x-2">
                <Checkbox
                  id={`gender-${gender}`}
                  checked={selectedGenders.includes(gender)}
                  onCheckedChange={() => handleGenderChange(gender)}
                />
                <Label htmlFor={`gender-${gender}`} className="capitalize">
                  {gender}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div>
          <h4 className="font-medium mb-3">Brands</h4>
          <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
            {brands.map((brand) => (
              <div key={brand.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand.id}`}
                  checked={selectedBrands.includes(brand.name.toLowerCase())}
                  onCheckedChange={() => handleBrandChange(brand.name.toLowerCase())}
                />
                <Label htmlFor={`brand-${brand.id}`}>{brand.name}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h4 className="font-medium mb-3">Price Range (₹)</h4>
          <div className="px-2">
            <Slider
              defaultValue={[0, 25000]}
              min={0}
              max={25000}
              step={500}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="my-6"
            />
            <div className="flex justify-between">
              <span>₹{priceRange[0].toLocaleString()}</span>
              <span>₹{priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      <Button onClick={applyFilters} className="w-full mt-8">
        Apply Filters
      </Button>
    </div>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">
              {filters.category ? 
                `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}'s Shoes` : 
                filters.brand ? 
                  `${filters.brand.split(',').map(b => b.charAt(0).toUpperCase() + b.slice(1)).join(', ')} Shoes` : 
                  "All Shoes"}
            </h1>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                <FilterContent />
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Filters */}
          <div className="hidden md:block w-1/4 bg-white p-6 rounded-lg shadow-sm border h-fit">
            <FilterContent />
          </div>

          {/* Product Grid */}
          <div className="md:w-3/4">
            <div className="hidden md:flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">
                {filters.category ? 
                  `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}'s Shoes` : 
                  filters.brand ? 
                    `${filters.brand.split(',').map(b => b.charAt(0).toUpperCase() + b.slice(1)).join(', ')} Shoes` : 
                    "All Shoes"}
              </h1>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center">
                  <SlidersHorizontal className="h-4 w-4 mr-1" /> Sort
                </Button>
              </div>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <Card className="overflow-hidden product-card h-full">
                      <CardContent className="p-4">
                        <div className="h-48 mb-4 overflow-hidden">
                          <img
                            src={product.image || "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}
                            alt={product.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                            }}
                          />
                        </div>
                        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                        <p className="text-gray-600 mb-2">{product.brand}</p>
                        <div className="flex justify-between items-center">
                          <p className="font-bold text-brand-blue">₹{Math.round(product.price * 83).toLocaleString()}</p>
                          <div className="flex items-center">
                            <span className="text-yellow-500 mr-1">★</span>
                            <span>{product.rating}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters</p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;

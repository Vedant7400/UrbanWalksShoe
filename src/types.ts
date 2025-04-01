
export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  reviews?: number;
  colors: string[];
  sizes: number[];
  inStock?: boolean;
  gender?: "men" | "women" | "unisex" | "kids";
}

export interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  products?: Product[];
}

export interface Category {
  id: string | number;
  name: string;
  image: string;
}

export interface Brand {
  id: string | number;
  name: string;
  logo: string;
}

export interface ProductFilterOptions {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  search?: string;
  gender?: "men" | "women" | "unisex" | "kids";
}

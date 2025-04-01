
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  sizes: number[];
  colors: string[];
  brand: string;
  gender: "men" | "women" | "unisex" | "kids";
  rating: number;
  reviews?: number;
  inStock?: boolean;
}

export interface Category {
  id: number | string;
  name: string;
  image: string;
}

export interface Brand {
  id: number | string;
  name: string;
  logo: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  products?: Product[];
}

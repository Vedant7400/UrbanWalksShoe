
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Search, User, Menu, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ChatbotButton from "@/components/ChatbotButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { state } = useCart();
  const location = useLocation();
  const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="text-lg font-medium hover:text-brand-purple">Home</Link>
                  <Link to="/products" className="text-lg font-medium hover:text-brand-purple">All Shoes</Link>
                  <Link to="/products?category=men" className="text-lg font-medium hover:text-brand-purple">Men</Link>
                  <Link to="/products?category=women" className="text-lg font-medium hover:text-brand-purple">Women</Link>
                  <Link to="/products?category=kids" className="text-lg font-medium hover:text-brand-purple">Kids</Link>
                  <Link to="/about" className="text-lg font-medium hover:text-brand-purple">About Us</Link>
                  <Link to="/contact" className="text-lg font-medium hover:text-brand-purple">Contact Us</Link>
                  <Link to="/signin" className="text-lg font-medium hover:text-brand-purple">Sign In</Link>
                  <Link to="/signup" className="text-lg font-medium hover:text-brand-purple">Sign Up</Link>
                </nav>
              </SheetContent>
            </Sheet>

            <Link to="/" className="text-2xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple via-brand-blue to-brand-pink">UrbanWalks</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-brand-purple transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-brand-purple transition-colors">
                All Shoes
              </Link>
              <Link to="/products?category=men" className="text-gray-700 hover:text-brand-purple transition-colors">
                Men
              </Link>
              <Link to="/products?category=women" className="text-gray-700 hover:text-brand-purple transition-colors">
                Women
              </Link>
              <Link to="/products?category=kids" className="text-gray-700 hover:text-brand-purple transition-colors">
                Kids
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-brand-purple transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-brand-purple transition-colors">
                Contact Us
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-brand-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#121920] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">CUSTOMER SUPPORT</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Returns & Exchanges</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Shipping Information</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Track Your Order</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">CONNECT WITH US</h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
              
              <div className="mb-4">
                <p className="mb-2">Sign up for the latest updates</p>
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  />
                  <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <div className="text-sm text-gray-400">
              <p>&copy; 2025 UrbanWalks. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <ChatbotButton />
    </div>
  );
};

export default Layout;

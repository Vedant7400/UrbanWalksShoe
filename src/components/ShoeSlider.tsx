
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products } from "@/services/data";
import { Link } from "react-router-dom";

const ShoeSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const latestShoes = products.slice(0, 7);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === latestShoes.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [latestShoes.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === latestShoes.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? latestShoes.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="w-full relative overflow-hidden mt-1 bg-gradient-to-r from-brand-purple/10 via-brand-blue/5 to-brand-pink/10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-brand-purple">Latest Releases</h2>
          <div className="flex space-x-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-brand-purple" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            >
              <ArrowRight className="h-5 w-5 text-brand-purple" />
            </button>
          </div>
        </div>

        <div className="relative h-[400px] overflow-hidden rounded-2xl">
          <div 
            className="absolute w-full h-full flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {latestShoes.map((shoe, index) => (
              <div key={shoe.id} className="min-w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/30 to-transparent z-10"></div>
                <img 
                  src={shoe.image} 
                  alt={shoe.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-8 bottom-8 z-20 max-w-md">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                    <h3 className="text-2xl font-bold mb-2">{shoe.name}</h3>
                    <p className="text-gray-700 mb-4">{shoe.brand}</p>
                    <p className="text-brand-purple text-xl font-bold mb-4">${shoe.price.toFixed(2)}</p>
                    <Link 
                      to={`/product/${shoe.id}`}
                      className="inline-block bg-brand-purple text-white px-6 py-3 rounded-xl font-medium hover:bg-brand-purple/90 transition-colors"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slide indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
            {latestShoes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-brand-purple" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeSlider;

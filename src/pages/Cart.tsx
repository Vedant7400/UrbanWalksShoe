
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { toast } = useToast();

  const handleRemoveItem = (productId: number) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { productId },
    });
    toast({
      description: "Item removed from cart",
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { productId, quantity },
    });
  };

  const handleCheckout = () => {
    // In a real application, this would navigate to the checkout page or process
    if (state.items.length === 0) {
      toast({
        title: "Your cart is empty",
        description: "Add some items to your cart before checkout",
        variant: "destructive",
      });
      return;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {state.items.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="hidden md:grid md:grid-cols-5 bg-gray-50 p-4 border-b">
                  <div className="col-span-2 font-medium">Product</div>
                  <div className="font-medium text-center">Price</div>
                  <div className="font-medium text-center">Quantity</div>
                  <div className="font-medium text-right">Total</div>
                </div>

                <div className="divide-y">
                  {state.items.map((item) => (
                    <div key={item.product.id} className="p-4 md:p-6 flex flex-col md:grid md:grid-cols-5 gap-4 items-center">
                      <div className="flex items-center col-span-2 w-full">
                        <div className="w-20 h-20 mr-4 flex-shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">
                            <Link to={`/product/${item.product.id}`} className="hover:text-brand-blue">
                              {item.product.name}
                            </Link>
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">{item.product.brand}</p>
                          <button
                            onClick={() => handleRemoveItem(item.product.id)}
                            className="text-sm text-red-500 flex items-center mt-2 md:hidden"
                          >
                            <X className="h-3 w-3 mr-1" /> Remove
                          </button>
                        </div>
                      </div>

                      <div className="text-center w-full md:w-auto">
                        <div className="text-gray-600 md:hidden mb-1">Price:</div>
                        ${item.product.price.toFixed(2)}
                      </div>

                      <div className="flex items-center justify-center w-full md:w-auto">
                        <div className="text-gray-600 md:hidden mr-2">Quantity:</div>
                        <div className="flex items-center border rounded">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() =>
                              handleUpdateQuantity(
                                item.product.id,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-10 text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() =>
                              handleUpdateQuantity(
                                item.product.id,
                                item.quantity + 1
                              )
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="text-right w-full md:w-auto flex justify-between md:block">
                        <div className="text-gray-600 md:hidden">Total:</div>
                        <div className="font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.product.id)}
                          className="text-gray-400 hover:text-red-500 hidden md:inline-block"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/products">
                  <Button variant="outline" className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${state.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>
                      {state.total > 50 ? "Free" : "$5.00"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>${(state.total * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>
                        $
                        {(
                          state.total +
                          (state.total > 50 ? 0 : 5) +
                          state.total * 0.1
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button className="w-full mb-4" onClick={handleCheckout}>
                    Proceed to Checkout
                  </Button>
                </Link>

                <div className="text-sm text-gray-500 space-y-2 mt-6">
                  <p>• Free shipping on orders over $50</p>
                  <p>• Free 30-day returns</p>
                  <p>• Secure payment</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag className="h-16 w-16 text-gray-300" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">
              Looks like you haven't added any items to your cart yet
            </p>
            <Link to="/products">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;

import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product, selectedColor, quantity) => {
    setCartItems(prev => {
      const existing = prev.find(
        item => item.id === product.id && item.color === selectedColor
      );
      toast.success("Added to cart!");

      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.color === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.mainImage?.path,
          color: selectedColor,
          quantity: quantity
        }
      ];
    });
  };

  // Remove item
  const removeFromCart = (id, color) => {
    setCartItems(prev =>
      prev.filter(item => !(item.id === id && item.color === color))
    );
      toast.error("Item removed!");
  };

  // Total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

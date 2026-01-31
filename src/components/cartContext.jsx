import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {
  // استرجاع الكارت من localStorage
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    if (!saved) return [];
    
    try {
      // تحويل العناصر القديمة للقيم الصحيحة
      return JSON.parse(saved).map(item => ({
        id: item.id,
        name: item.name || "",
        price: item.price || 0,
        image: item.image || "",
        color: item.color || "",
        quantity: item.quantity || 1
      }));
    } catch (e) {
      console.error("Error parsing cartItems from localStorage", e);
      return [];
    }
  });

  // كل مرة الكارت يتغير نخزنه في localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("storage"));
  }, [cartItems]);

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
          image: product.mainImage?.path || "",
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
    (total, item) => total + (item.price || 0) * (item.quantity || 1),
    0
  );

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalPrice,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const resetCart = () => {
    setCart([]); // Reset the cart (clear it)
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
    // Clear other user session data if necessary
  };

  const addToCart = (item, size) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id && cartItem.size === size);
    if (existingItemIndex >= 0) {
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, size, quantity: 1 }]);
    }
  };

  const removeFromCart = (id, size) => {
    setCart(cart.filter(item => !(item.id === id && item.size === size)));
  };

  const incrementQuantity = (id, size) => {
    setCart(cart.map(item =>
      item.id === id && item.size === size
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decrementQuantity = (id, size) => {
    setCart(cart.map(item =>
      item.id === id && item.size === size && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const totalPrice = cart.reduce((total, item) => total + (parseFloat(item.price.replace('Rs.', '')) * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, totalPrice ,user, logout }}>
      {children}
    </CartContext.Provider>
  );
};

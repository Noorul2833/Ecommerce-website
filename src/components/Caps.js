import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
import './Cap.css';

const Caps = () => {
  const capProducts = [
    { id: 1, name: 'Puma', image: '/cap1.jpg', price: 'Rs.999', category: 'cap'  },
    { id: 2, name: 'Adidas', image: '/cap2.jpg', price: 'Rs.799', category: 'cap' },
    { id: 3, name: 'Nike', image: '/cap3.jpg', price: 'Rs.1200', category: 'cap' },
    { id: 4, name: 'Reebok', image: '/cap4.jpg', price: 'Rs.699', category: 'cap' },
    { id: 5, name: 'Fila', image: '/cap5.jpg', price: 'Rs.599', category: 'cap' },
    { id: 6, name: 'York', image: '/cap6.jpg', price: 'Rs.250', category: 'cap' },
    { id: 7, name: 'Scout', image: '/cap7.jpg', price: 'Rs.450', category: 'cap' },
    { id: 8, name: 'Day Shift', image: '/cap8.jpg', price: 'Rs.370', category: 'cap' },
    { id: 9, name: 'Torn Monk', image: '/cap9.jpg', price: 'Rs.500', category: 'cap' },
    { id: 10, name: 'Hip Hop', image: '/cap10.jpg', price: 'Rs.599', category: 'cap' },
    { id: 11, name: 'Denim', image: '/cap11.jpg', price: 'Rs.899', category: 'cap' },
    { id: 12, name: 'Funky', image: '/cap12.jpg', price: 'Rs.299', category: 'cap' },

  ];

  const [cartMessage, setCartMessage] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (cartMessage) {
      const timer = setTimeout(() => {
        setCartMessage('');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [cartMessage]);
  const handleAddToCart = (cap) => {
    addToCart(cap);
    setCartMessage(`${cap.name} added to cart`);
  };

  return (
    <div>
      {cartMessage && (
        <div className="modal">
          <div className="modal-content">
            <p>{cartMessage}</p>
          </div>
        </div>
      )}
      <div className="caps-list">
        {capProducts.map(product => (
          <div key={product.id} className="cap-item">
            <img src={product.image} alt={product.name} className="cap-image" />
            <h3>{product.name}</h3>
            <p className="cap-price">{product.price}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caps;

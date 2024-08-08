import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
import './Perfume.css';

const Perfumes = () => {
  const perfumeProducts = [
    { id: 1, name: 'Titan Skinn', image: '/perfume1.jpg', price: 'Rs.3000', category: 'perfume' },
    { id: 2, name: 'Bella Vita', image: '/perfume2.jpg', price: 'Rs.900', category: 'perfume' },
    { id: 3, name: 'Brut', image: '/perfume3.jpg', price: 'Rs.700', category: 'perfume' },
    { id: 4, name: 'Calvin Klein', image: '/perfume4.jpg', price: 'Rs.5000', category: 'perfume' },
    { id: 5, name: 'Phy Artic', image: '/perfume5.jpg', price: 'Rs.1999', category: 'perfume' },
    { id: 6, name: 'Jaguar', image: '/perfume6.jpg', price: 'Rs.4000', category: 'perfume' },
    { id: 7, name: 'Royal Mirage', image: '/perfume7.jpg', price: 'Rs.699', category: 'perfume' },
    { id: 8, name: 'Villain', image: '/perfume8.jpg', price: 'Rs.999', category: 'perfume' },
    { id: 9, name: 'Wild Stone', image: '/perfume9.jpg', price: 'Rs.599', category: 'perfume' },
    { id: 10, name: 'Mercedes', image: '/perfume10.jpg', price: 'Rs.6000' , category: 'perfume'},
    { id: 11, name: 'Ideal', image: '/perfume11.jpg', price: 'Rs.1500', category: 'perfume' },
    { id: 12, name: 'Adidas', image: '/perfume12.jpg', price: 'Rs.2500', category: 'perfume' },
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

  const handleAddToCart = (perfume) => {
    addToCart(perfume);
    setCartMessage(`${perfume.name} added to cart`);
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
      <div className="perfumes-list">
        {perfumeProducts.map(product => (
          <div key={product.id} className="perfume-item">
            <img src={product.image} alt={product.name} className="perfume-image" />
            <h3>{product.name}</h3>
            <p className="perfume-price">{product.price}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perfumes;

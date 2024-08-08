import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
import './Watch.css';

const Watches = () => {
  const watchProducts = [
    { id: 1, name: 'Fastrack', image: '/watch1.jpg', price: 'Rs.3000',category: 'watch' },
    { id: 2, name: 'Titan', image: '/watch2.jpg', price: 'Rs.5000',category: 'watch'  },
    { id: 3, name: 'Casio', image: '/watch3.jpg', price: 'Rs.4000',category: 'watch' },
    { id: 4, name: 'Fossil', image: '/watch4.jpg', price: 'Rs.9000',category: 'watch' },
    { id: 5, name: 'Sonata', image: '/watch5.jpg', price: 'Rs.1500',category: 'watch' },
    { id: 6, name: 'Tissot', image: '/watch6.jpg', price: 'Rs.13000',category: 'watch' },
    { id: 7, name: 'Citizen', image: '/watch7.jpg', price: 'Rs.2000',category: 'watch' },
    { id: 8, name: 'Rado', image: '/watch8.jpg', price: 'Rs.6000',category: 'watch' },
    { id: 9, name: 'Boat Smart', image: '/watch9.jpg', price: 'Rs.1999',category: 'watch' },
    { id: 10, name: 'Timex', image: '/watch10.jpg', price: 'Rs.2599',category: 'watch' },
    { id: 11, name: 'G-shock', image: '/watch11.jpg', price: 'Rs.8000',category: 'watch' },
    { id: 12, name: 'Handy', image: '/watch12.jpg', price: 'Rs.999',category: 'watch' },

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

  const handleAddToCart = (watch) => {
    addToCart(watch);
    setCartMessage(`${watch.name} added to cart`);
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
      <div className="watches-list">
        {watchProducts.map(product => (
          <div key={product.id} className="watch-item">
            <img src={product.image} alt={product.name} className="watch-image" />
            <h3>{product.name}</h3>
            <p className="watch-price">{product.price}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;

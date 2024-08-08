import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
import './Shirt.css';

const Shirts = () => {
  const shirtProducts = [
    { id: 1, name: 'Allen Solly', image: '/shirt1.jpg', price: 'Rs.1200' },
    { id: 2, name: 'Sting', image: '/shirt2.jpg', price: 'Rs.1199' },
    { id: 3, name: 'Allen Solly', image: '/shirt3.jpg', price: 'Rs.2000' },
    { id: 4, name: 'Parx', image: '/shirt4.jpg', price: 'Rs.1550' },
    { id: 5, name: 'Indian Terrain', image: '/shirt5.jpg', price: 'Rs.1999' },
    { id: 6, name: 'Basics', image: '/shirt6.jpg', price: 'Rs.1100' },
    { id: 7, name: 'Louis Phillipe', image: '/shirt7.jpg', price: 'Rs.899' },
    { id: 8, name: 'Levis', image: '/shirt8.jpg', price: 'Rs.1600' },
    { id: 9, name: 'Cool Colors', image: '/shirt9.jpg', price: 'Rs.799' },
    { id: 10, name: 'Otto', image: '/shirt10.jpg', price: 'Rs.1990' },
    { id: 11, name: 'Jack', image: '/shirt11.jpg', price: 'Rs.1299' },
    { id: 12, name: 'Levis', image: '/shirt12.jpg', price: 'Rs.2999' },
  ];
  const [selectedSize, setSelectedSize] = useState('');
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

  const handleAddToCart = (shirt) => {
    if (selectedSize) {
      addToCart(shirt, selectedSize);
      setCartMessage(`${shirt.name} added to cart`);
    } else {
      alert('Please select a size');
    }
  };
  
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div>
      <div className="size-selector">
        <label htmlFor="size">Choose size: </label>
        <select id="size" value={selectedSize} onChange={handleSizeChange}>
          <option value="">Select Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      {cartMessage && (
        <div className="modal">
          <div className="modal-content">
            <p>{cartMessage}</p>
          </div>
        </div>
      )}
      <div className="shirts-list">
        {shirtProducts.map(product => (
          <div key={product.id} className="shirt-item">
            <img src={product.image} alt={product.name} className="shirt-image" />
            <h3>{product.name}</h3>
            <p className="shirt-price">{product.price}</p>
            <p className="selected-size">Size: {selectedSize || 'N/A'}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shirts;

import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
import './Short.css';

const Shorts = () => {
  const shortProducts = [
    { id: 1, name: 'Blue Jeans', image: '/short1.jpg', price: 'Rs.750' },
    { id: 2, name: 'Levis Black', image: '/short2.jpg', price: 'Rs.1200' },
    { id: 3, name: 'Light Cotton', image: '/short3.jpg', price: 'Rs.599' },
    { id: 4, name: 'Cargo  Grey', image: '/short4.jpg', price: 'Rs.799' },
    { id: 5, name: 'JJ Shorts', image: '/short5.jpg', price: 'Rs.899' },
    { id: 6, name: 'Camouflage', image: '/short6.jpg', price: 'Rs.699' },
    { id: 7, name: 'Torn', image: '/short7.jpg', price: 'Rs.800' },
    { id: 8, name: 'Green Shorts', image: '/short8.jpg', price: 'Rs.545' },
    { id: 9, name: 'Checked Trousers', image: '/short9.jpg', price: 'Rs.450' },
    { id: 10, name: 'Dark', image: '/short10.jpg', price: 'Rs.600' },
    { id: 11, name: 'Grey Jean', image: '/short11.jpg', price: 'Rs.550' },
    { id: 12, name: 'White Cotton', image: '/short12.jpg', price: 'Rs.400' },  
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

  const handleAddToCart = (short) => {
    if (selectedSize) {
      addToCart(short, selectedSize);
      setCartMessage(`${short.name} added to cart`);
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
          <option value="28">28</option>
          <option value="30">30</option>
          <option value="32">32</option>
          <option value="34">34</option>
        </select>
      </div>
      {cartMessage && (
        <div className="modal">
          <div className="modal-content">
            <p>{cartMessage}</p>
          </div>
        </div>
      )}
      <div className="shorts-list">
        {shortProducts.map(product => (
          <div key={product.id} className="short-item">
            <img src={product.image} alt={product.name} className="short-image" />
            <h3>{product.name}</h3>
            <p className="short-price">{product.price}</p>
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

export default Shorts;

import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
import './Slipper.css';

const Slippers = () => {
  const slipperProducts = [
    { id: 1, name: 'Adidas Slides', image: '/slipper1.jpg', price: 'Rs.2500' },
    { id: 2, name: 'Crocs Clogs', image: '/slipper2.jpg', price: 'Rs.3000' },
    { id: 3, name: 'Puma Flip', image: '/slipper3.jpg', price: 'Rs.1500' },
    { id: 4, name: 'Nike Air', image: '/slipper4.jpg', price: 'Rs.2500' },
    { id: 5, name: 'Briken Stok', image: '/slipper5.jpg', price: 'Rs.7000' },
    { id: 6, name: 'Fit Flop', image: '/slipper6.jpg', price: 'Rs.6000' },
    { id: 7, name: 'Gender', image: '/slipper7.jpg', price: 'Rs.1999' },
    { id: 8, name: 'ID Leather', image: '/slipper8.jpg', price: 'Rs.2600' },
    { id: 9, name: 'Reebok Sand', image: '/slipper9.jpg', price: 'Rs.1800' },
    { id: 10, name: 'Lee Cooper', image: '/slipper10.jpg', price: 'Rs.1200' },
    { id: 11, name: 'WoodLand', image: '/slipper11.jpg', price: 'Rs.2000' },
    { id: 12, name: 'Fila', image: '/slipper12.jpg', price: 'Rs.999' },
    
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

  const handleAddToCart = (slipper) => {
    if (selectedSize) {
      addToCart(slipper, selectedSize);
      setCartMessage(`${slipper.name} added to cart`);
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
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
        </select>
      </div>
      {cartMessage && (
        <div className="modal">
          <div className="modal-content">
            <p>{cartMessage}</p>
          </div>
        </div>
      )}
      <div className="slippers-list">
        {slipperProducts.map(product => (
          <div key={product.id} className="slipper-item">
            <img src={product.image} alt={product.name} className="slipper-image" />
            <h3>{product.name}</h3>
            <p className="slipper-price">{product.price}</p>
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

export default Slippers;

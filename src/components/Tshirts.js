import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
import './Tshirt.css';

const TShirts = () => {
  const tshirtProducts = [
    { id: 1, name: 'U. S. Polo', image: '/tshirt1.jpg', price: 'Rs.1499' },
    { id: 2, name: 'LeviS', image: '/tshirt2.jpg', price: 'Rs.1299' },
    { id: 3, name: 'Kappa', image: '/tshirt3.jpg', price: 'Rs.999' },
    { id: 4, name: 'Sting', image: '/tshirt4.jpg', price: 'Rs.699' },
    { id: 5, name: 'UCB', image: '/tshirt5.jpg', price: 'Rs.1600' },
    { id: 6, name: 'Zara', image: '/tshirt6.jpg', price: 'Rs.2000' },
    { id: 7, name: 'Funk', image: '/tshirt7.jpg', price: 'Rs.599' },
    { id: 8, name: 'Roadster', image: '/tshirt8.jpg', price: 'Rs.1200' },
    { id: 9, name: 'Mufti', image: '/tshirt9.jpg', price: 'Rs.2999' },
    { id: 10, name: 'Adidas Sport', image: '/tshirt10.jpg', price: 'Rs.899' },
    { id: 11, name: 'Pepe', image: '/tshirt11.jpg', price: 'Rs.1199' },
    { id: 12, name: 'Parx', image: '/tshirt12.jpg', price: 'Rs.799' },    
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

  const handleAddToCart = (tshirt) => {
    if (selectedSize) {
      addToCart(tshirt, selectedSize);
      setCartMessage(`${tshirt.name} added to cart`);
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
        </select>
      </div>
      {cartMessage && (
        <div className="modal">
          <div className="modal-content">
            <p>{cartMessage}</p>
          </div>
        </div>
      )}
      <div className="tshirts-list">
        {tshirtProducts.map(product => (
          <div key={product.id} className="tshirt-item">
            <img src={product.image} alt={product.name} className="tshirt-image" />
            <h3>{product.name}</h3>
            <p className="tshirt-price">{product.price}</p>
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

export default TShirts;

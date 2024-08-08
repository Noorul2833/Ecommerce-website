import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
import './Pant.css';

const Pants = () => {
    const pantProducts = [
      { id: 1, name: 'Levi\'s Jeans', image: '/pant1.jpg', price: 'Rs.2500' },
      { id: 2, name: 'Wrangler Chinos', image: '/pant2.jpg', price: 'Rs.3000' },
      { id: 3, name: 'Lee Denim', image: '/pant3.jpg', price: 'Rs.1500' },
      { id: 4, name: 'Pepe Trousers', image: '/pant4.jpg', price: 'Rs.1699' },
      { id: 5, name: 'Jack & Jones Jeans', image: '/pant5.jpg', price: 'Rs.1599' },
      { id: 6, name: 'Basics Cotton ', image: '/pant6.jpg', price: 'Rs.2000' },
      { id: 7, name: 'It Joggers', image: '/pant7.jpg', price: 'Rs.2200' },
      { id: 8, name: 'Sting Torn Jeans', image: '/pant8.jpg', price: 'Rs.1950' },
      { id: 9, name: 'American Eagle', image: '/pant9.jpg', price: 'Rs.2999' },
      { id: 10, name: 'Louis Phillepe Formls', image: '/pant10.jpg', price: 'Rs.2500' },
      { id: 11, name: 'Sunnex Jean', image: '/pant11.jpg', price: 'Rs.1299' },
      { id: 12, name: 'Mufti Blue Jeans', image: '/pant12.jpg', price: 'Rs.1999' },
      
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

  const handleAddToCart = (pant) => {
    if (selectedSize) {
      addToCart(pant, selectedSize);
      setCartMessage(`${pant.name} added to cart`);
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
          <option value="36">36</option>
        </select>
      </div>
      {cartMessage && (
        <div className="modal">
          <div className="modal-content">
            <p>{cartMessage}</p>
          </div>
        </div>
      )}
      <div className="pants-list">
        {pantProducts.map(product => (
          <div key={product.id} className="pant-item">
            <img src={product.image} alt={product.name} className="pant-image" />
            <h3>{product.name}</h3>
            <p className="pant-price">{product.price}</p>
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

export default Pants;



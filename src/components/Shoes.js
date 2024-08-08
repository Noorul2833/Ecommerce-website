import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
import './Shoe.css';

const Shoes = () => {
    const shoeProducts = [
      { id: 1, name: 'Nike Air', image: '/shoe1.jpg', price: 'Rs.4000' },
      { id: 2, name: 'Adidas Ultraboost', image: '/shoe2.jpg', price: 'Rs.3000' },
      { id: 3, name: 'Puma RS-X', image: '/shoe3.jpg', price: 'Rs.5000' },
      { id: 4, name: 'Reebok Classic', image: '/shoe4.jpg', price: 'Rs.2000' },
      { id: 5, name: 'Under Armour HOVR', image: '/shoe5.jpg', price: 'Rs.4999' },
      { id: 6, name: 'Skechers lite', image: '/shoe6.jpg', price: 'Rs.2599' },
      { id: 7, name: 'Big Foot', image: '/shoe7.jpg', price: 'Rs.1999' },
      { id: 8, name: 'Fila Max', image: '/shoe8.jpg', price: 'Rs.2199' },
      { id: 9, name: 'Bata Form', image: '/shoe9.jpg', price: 'Rs.1299' },
      { id: 10, name: 'Hush Puppies', image: '/shoe10.jpg', price: 'Rs.1199' },
      { id: 11, name: 'Gender leather', image: '/shoe11.jpg', price: 'Rs.1500' },
      { id: 12, name: 'Lee Cooper', image: '/shoe12.jpg', price: 'Rs.1899' },
  
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

  const handleAddToCart = (shoe) => {
    if (selectedSize) {
      addToCart(shoe, selectedSize);
      setCartMessage(`${shoe.name} added to cart`);
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
        </select>
      </div>
      {cartMessage && (
        <div className="modal">
          <div className="modal-content">
            <p>{cartMessage}</p>
          </div>
        </div>
      )}
      <div className="shoes-list">
        {shoeProducts.map(product => (
          <div key={product.id} className="shoe-item">
            <img src={product.image} alt={product.name} className="shoe-image" />
            <h3>{product.name}</h3>
            <p className="shoe-price">{product.price}</p>
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

export default Shoes;



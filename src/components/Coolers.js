import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
import './Cooler.css';

const Coolers = () => {
  const coolingGlassProducts = [
    { id: 1, name: 'Ray-Ban Aviator', image: '/cooler1.jpg', price: 'Rs.3000', category: 'coolingGlass'  },
    { id: 2, name: 'Fastrack Ray', image: '/cooler2.jpg', price: 'Rs.1999', category: 'coolingGlass'  },
    { id: 3, name: 'Police', image: '/cooler3.jpg', price: 'Rs.2699', category: 'coolingGlass'  },
    { id: 4, name: 'Oakley Frogskins', image: '/cooler4.jpg', price: 'Rs.5000' , category: 'coolingGlass' },
    { id: 5, name: 'Wayfarer', image: '/cooler5.jpg', price: 'Rs.4000', category: 'coolingGlass'  },
    { id: 6, name: 'Funkup', image: '/cooler6.jpg', price: 'Rs.999' , category: 'coolingGlass' },
    { id: 7, name: 'Kog Sport', image: '/cooler7.jpg', price: 'Rs.3000', category: 'coolingGlass'  },
    { id: 8, name: 'Oakley Shade', image: '/cooler8.jpg', price: 'Rs.6000', category: 'coolingGlass'  },
    { id: 9, name: 'Sunny', image: '/cooler9.jpg', price: 'Rs.2000', category: 'coolingGlass'  },
    { id: 10, name: 'Night', image: '/cooler10.jpg', price: 'Rs.1000', category: 'coolingGlass'  },
    { id: 11, name: 'Hidder', image: '/cooler11.jpg', price: 'Rs.2000', category: 'coolingGlass'  },
    { id: 12, name: 'Range', image: '/cooler12.jpg', price: 'Rs.3000', category: 'coolingGlass'  },
    
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
      <div className="coolingglass-list">
        {coolingGlassProducts.map(product => (
          <div key={product.id} className="coolingglass-item">
            <img src={product.image} alt={product.name} className="coolingglass-image" />
            <h3>{product.name}</h3>
            <p className="coolingglass-price">{product.price}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coolers;

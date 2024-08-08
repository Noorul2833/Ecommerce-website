import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-page">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: {item.price}</p>
                  {item.category !== 'watch' && item.category !== 'coolingGlass' && item.category !== 'cap' && item.category !== 'perfume' && (
                    <p>Size: {item.size}</p>
                  )}
                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(item.id, item.size)} className="quantity-button">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id, item.size)} className="quantity-button">+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id, item.size)} className="remove-button">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total Price: Rs.{totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

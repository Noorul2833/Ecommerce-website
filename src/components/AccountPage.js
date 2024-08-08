import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import './AccountPage.css'; 

const AccountPage = () => {
  const { user, logout } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/login'); 
  };

  return (
    <div className="account-page">
      <h1>User Details</h1>
      {user ? (
        <div className="user-details">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>No user is logged in.</p>
      )}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default AccountPage;

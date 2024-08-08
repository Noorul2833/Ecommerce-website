import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';  

const CreateAccountPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    alert('Account created successfully');
    navigate('/login'); 
  };

  return (
    <div className="create-account-container">
      <div className="create-account-box">
        <h2>Create Your Sigma Account</h2>
        <form onSubmit={handleCreateAccount}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="create-account-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;

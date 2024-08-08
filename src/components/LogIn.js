import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';  

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/Products');
  };
  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
  };

  const handleUsernameBlur = () => {
    if (!username) {
      setIsUsernameFocused(false);
    }
  };

  return (
    <div className="login-container">
        <div className="header">
         <img src={`${process.env.PUBLIC_URL}/sym.jpg`} alt="Website Logo" className="logo" />
         {!isUsernameFocused && <h1 className="site-name">sIgMa</h1>}
        </div>
      <div className="login-box">
        <h2>Log-In</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username or email address</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={handleUsernameFocus}
              onBlur={handleUsernameBlur}
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
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="forgot-password">
          <Link to="/forgot-password">Forgot your password?</Link>
        </p>
        <p className="create-account">
          <Link to="/create-account">Create your Sigma account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

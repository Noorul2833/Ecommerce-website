import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/sym.jpg" alt="Website Logo" className="logo" />
          <span className="website-name">sIgMa</span>
        </div>
        <ul className="navbar-links">
          <Link to="/products" className="nav-logo">Home</Link>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

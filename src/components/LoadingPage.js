import React, { useEffect, useState } from 'react';
import './LoadingPage.css'; 

const LoadingPage = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        window.location.href = '/login';
      }, 4000); 
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-container ${fade ? 'fade-in' : ''}`}>
      <div className="linear-loader"></div>
      <div className="logo-container">
        <img src="/sym.jpg" alt="Site Logo" className="loading-logo" /> 
        <h1 className="loading-title">Welcome to Sigma Store</h1>
      </div>
    </div>
  );
};

export default LoadingPage;

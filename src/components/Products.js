import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import './Product.css';

const ProductPage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const products = [
    { id: 1, name: 'Shirts', image: '/shirt.jpg', path: '/shirts' },
    { id: 2, name: 'Pants', image: '/pant.jpg', path: '/Pants' },
    { id: 3, name: 'Shoes', image: '/shoes.jpg', path: '/shoes' },
    { id: 4, name: 'Slippers', image: '/slippers.jpg', path: '/slippers' },
    { id: 5, name: 'Tshirts', image: '/tshirt.jpg', path: '/tshirts' },
    { id: 6, name: 'Shorts', image: '/shorts.jpg', path: '/shorts' },
    { id: 7, name: 'Cap', image: '/cap.jpg', path: '/cap' },
    { id: 8, name: 'Watch', image: '/watch.jpg', path: '/watch' },
    { id: 9, name: 'Perfume', image: '/perfume.jpg', path: '/perfume' },
    { id: 10, name: 'Coolers', image: '/coolers.jpg', path: '/cooler' },
  ];

  const slides = [
    { id: 1, image: '/slide1.jpg' },
    { id: 2, image: '/slide2.jpg' },
    { id: 3, image: '/slide3.jpg' },
  ];
  const texts = [
    'Welcome to our Sigma store!',
    'Find your favorite products.',
    'Exclusive deals just for you!',
    'Shop now and save big!',
    'Browse the latest trends.',
  ];
  const colors = [
    '#FFC107', 
    '#FF5722', 
    '#4CAF50',
    '#2196F3', 
    '#9C27B0', 
  ];

  const handleProductClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); 
    const textInterval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 2000); 
    return () => {
      clearInterval(slideInterval);
      clearInterval(textInterval);
    };
  }, [slides.length, texts.length]);


  return (
    <div className="product-page">
      <NavBar />
      <div className="text-slider" style={{ backgroundColor: colors[currentText]}}>
        <p className="slide-text">{texts[currentText]}</p>
      </div>
      <div className="product-list-container">
        <div className="product-list">
          {products.slice(0, 5).map(product => (
            <div key={product.id} className="product-item" onClick={() => handleProductClick(product.path)}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="additional-container">
        <h3>Choose The Product</h3>
      </div>
      <div className="product-list-container">
        <div className="product-list">
          {products.slice(5).map(product => (
            <div key={product.id} className="product-item" onClick={() => handleProductClick(product.path)}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="image-slider">
        <img src={slides[currentSlide].image} alt={`Slide ${currentSlide}`} className="slide-image" />
      </div>
    </div>
  );
};

export default ProductPage;

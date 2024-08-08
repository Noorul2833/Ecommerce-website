import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
import LoginPage from './components/LogIn';
import NavBar from './components/NavBar';
import CreateAccountPage from './components/SignUp';
import ProductPage from './components/Products';
import Shirts from './components/Shirts';
import Pants from './components/Pants';
import Shoes from './components/Shoes';
import Slippers from './components/Slippers';
import TShirts from './components/Tshirts';
import Shorts from './components/Shorts';
import Caps from './components/Caps';
import Watches from './components/Watches';
import Perfumes from './components/Perfumes';
import Coolers from './components/Coolers';
import CartPage from './components/Cart';
import AccountPage from './components/AccountPage';
import { CartProvider } from './components/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/slippers" element={<Slippers />} />
          <Route path="/tshirts" element={<TShirts />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/cap" element={<Caps />} />
          <Route path="/watch" element={<Watches />} />
          <Route path="/perfume" element={<Perfumes />} />
          <Route path="/cooler" element={<Coolers />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;

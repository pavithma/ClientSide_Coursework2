import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">Prime<span>Estate</span></div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/services">Search</a>
          <a href="/properties">Properties</a>
          <a href="/about">About</a>
        </nav>
        <button className="btn-contact">Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
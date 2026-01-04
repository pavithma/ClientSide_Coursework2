import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">Prime<span>Estate</span></div>
        <nav className="nav-links">
          <a href="/#home">Home</a>
          <a href="/#search">Search</a>
          <a href="/#favourites">Favorites</a>
          <a href="/#properties">Properties</a>
          <a href="/#about">About</a>
        </nav>
          <Link to="/contact" className="btn-contact">
            Contact Us
          </Link>
      </div>
    </header>
  );
};

export default Header;
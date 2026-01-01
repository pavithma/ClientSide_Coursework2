import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>PrimeEstate</h1>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#properties">Properties</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact" className="contact-btn">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
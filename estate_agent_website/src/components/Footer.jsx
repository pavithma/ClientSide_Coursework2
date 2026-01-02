import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-column footer-brand">
          <div className="logo">Prime<span>Estate</span></div>
          <p>Helping you find the perfect property with trust, transparency, and ease.</p>
        </div>

        {/* Quick Links Section - Mirrored from Header */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* Contact Details Section */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <div className="footer-contact">
            <p>Email<span>info@primeestate.com</span></p>
            <p>Phone<span>+94 74 291 2929</span></p>
            <p>Location<span>Colombo, Sri Lanka</span></p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 PrimeEstate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
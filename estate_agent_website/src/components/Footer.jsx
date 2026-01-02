import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand / About */}
        <div className="footer-section">
          <h2 className="footer-logo">Prime Estate</h2>
          <p>
            Helping you find the perfect property with trust, transparency,
            and ease.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Buy</a></li>
            <li><a href="#">Rent</a></li>
            <li><a href="#">Agents</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@primeestate.com</p>
          <p>Phone: +94 74 291 2929</p>
          <p>Location: Colombo, Sri Lanka</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PrimeEstate. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
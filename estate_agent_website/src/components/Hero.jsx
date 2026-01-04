import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id='home' className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Find Your Perfect Property</h1>
        <p>
          Discover hand-picked luxury listings, verified agents, and 
          seamless property transitions. Your dream home is just a click away.
        </p>
        <div className="hero-actions">
          <a href="/#properties" className="btn-primary">
            Explore Properties
          </a>
          <button className="btn-secondary">Contact an Agent</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
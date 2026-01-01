import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Perfect Property</h1>
        <p>
          Buy, sell, or rent premium properties with confidence.
          Trusted listings, verified agents, and seamless experiences.
        </p>

        <div className="hero-actions">
          <button className="primary-btn">Explore Properties</button>
          <button className="secondary-btn">Contact an Agent</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
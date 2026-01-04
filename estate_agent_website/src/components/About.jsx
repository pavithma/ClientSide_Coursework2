import React from 'react';
import './About.css';

function About() {
  return (
    <section id='about' className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1>About PrimeEstate</h1>
          <p>
            PrimeEstate is a trusted real estate platform dedicated to helping people
            find their perfect home with ease and confidence. We specialize in premium
            flats and houses, offering carefully curated properties that meet modern
            living standards.
          </p>

          <p>
            Our mission is to simplify the property buying process by providing
            transparent information, professional guidance, and a seamless digital
            experience. Whether you’re searching for your first home or a long-term
            investment, PrimeEstate is here to guide you every step of the way.
          </p>

          <div className="about-highlights">
            <div>
              <h3>Trusted Listings</h3>
              <span>Verified properties you can rely on</span>
            </div>
            <div>
              <h3>Expert Support</h3>
              <span>Professional guidance from start to finish</span>
            </div>
            <div>
              <h3>Modern Living</h3>
              <span>Homes designed for comfort & style</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
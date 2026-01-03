import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import propertyDataRaw from '../assets/properties(1).json';
import './Property.css';

const Property = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('property');
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [property, setProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const foundProperty = propertyDataRaw.properties.find(p => p.id === id);
    setProperty(foundProperty);
  }, [id]);

  if (!property) return <div className="loading">Loading property...</div>;

  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="property-page">
      {/* 1. Integrated Image Gallery */}
      <section className="gallery-container">
        <div className="main-stage">
          <img src={property.images[mainImageIndex]} alt="Main Property" />
        </div>
        <div className="side-grid">
          {property.images.slice(0, 3).map((img, index) => (
            <div 
              key={index} 
              className={`side-thumb ${index === mainImageIndex ? 'active' : ''}`}
              onClick={() => setMainImageIndex(index)}
            >
              <img src={img} alt="Thumbnail" />
            </div>
          ))}
          <div className="more-btn-wrapper" onClick={() => setIsModalOpen(true)}>
            <img src={property.images[4]} alt="More" className="blur-bg" />
            <div className="overlay-text">+{property.images.length - 3} Photos</div>
          </div>
        </div>
      </section>

      {/* 2. Content Section */}
      <div className="content-layout single-column">
        <div className="left-column">
          <div className="header-info">
            <h1>{property.bedrooms} Bedroom {property.type}</h1>
            <p className="address">{property.location}</p>
            <div className="price-tag">{formattedPrice}</div>
          </div>

          <div className="tabs-nav">
            <button className={activeTab === 'property' ? 'active' : ''} onClick={() => setActiveTab('property')}>Description</button>
            <button className={activeTab === 'floorplan' ? 'active' : ''} onClick={() => setActiveTab('floorplan')}>Floor Plan</button>
            <button className={activeTab === 'map' ? 'active' : ''} onClick={() => setActiveTab('map')}>Map</button>
          </div>

          <div className="tab-panel">
            {activeTab === 'property' && (
              <>
                <div className="quick-stats">
                  <div className="stat"><span>Bedrooms</span><strong>{property.bedrooms}</strong></div>
                  <div className="stat"><span>Tenure</span><strong>{property.tenure}</strong></div>
                  <div className="stat"><span>Type</span><strong>{property.type}</strong></div>
                  <div className="stat"><span>Added</span><strong>{property.added.day} {property.added.month}</strong></div>
                </div>
                <p className="long-description" dangerouslySetInnerHTML={{ __html: property.description }}></p>
              </>
            )}

            {activeTab === 'floorplan' && (
              <div className="floorplan-section">
                <img
                  src={property.floorplan || property.images[0]}
                  alt="Floor Plan"
                  className="floorplan-image"
                />
              </div>
            )}

            {activeTab === 'map' && (
              <div className="map-section">
                <iframe
                  title="Property Location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Fullscreen Photo Modal */}
      {isModalOpen && (
        <div className="photo-modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setIsModalOpen(false)}>&times;</button>
            <div className="modal-grid">
              {property.images.map((img, i) => (
                <img key={i} src={img} alt={`View ${i}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Property;
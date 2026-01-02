import React from "react";
import { Link } from "react-router-dom";
import "./Results.css";
import propertiesData from "../assets/properties(1).json";

function Results() {
  const { properties } = propertiesData;

  return (
    <section className="results-section">
      <h2 className="results-title">Available Properties</h2>

      <div className="properties-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img
              src={property.picture}
              alt={property.type}
              className="property-image"
            />

            <div className="property-content">
              <h3 className="property-type">
                {property.type} • {property.bedrooms} Beds
              </h3>

              <p className="property-location">{property.location}</p>

              <p className="property-description">
                {property.description.substring(0, 120)}...
              </p>

              <div className="property-footer">
                <span className="property-price">
                  £{property.price.toLocaleString()}
                </span>
                <span className="property-tenure">{property.tenure}</span>
              </div>

              <Link to={`/property/${property.id}`} className="view-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Results;
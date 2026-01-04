import React from "react";
import "./Results.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import propertiesData from "../assets/properties(1).json";
import { Link } from "react-router-dom";

function Results({ addToFavourites, removeFromFavourites, favourites, filters }) {
  const { properties } = propertiesData;

  // Use filters from props instead of searchParams
  const {
    type,
    minPrice,
    maxPrice,
    minBedrooms,
    maxBedrooms,
    dateFrom,
    dateTo,
    postcode
  } = filters || {};

  const filteredProperties = properties.filter((property) => {
    if (type && property.type.toLowerCase() !== type.toLowerCase()) return false;
    if (minPrice && Number(property.price) < Number(minPrice)) return false;
    if (maxPrice && Number(property.price) > Number(maxPrice)) return false;
    if (minBedrooms && Number(property.bedrooms) < Number(minBedrooms)) return false;
    if (maxBedrooms && Number(property.bedrooms) > Number(maxBedrooms)) return false;

    const propertyDate = new Date(
      property.added.year,
      property.added.month ? new Date(`${property.added.month} 1`).getMonth() : 0,
      property.added.day
    );

    if (dateFrom && propertyDate < new Date(dateFrom)) return false;
    if (dateTo && propertyDate > new Date(dateTo)) return false;

    if (postcode && !property.location.toUpperCase().startsWith(postcode.toUpperCase())) return false;

    return true;
  });

  const toggleFavourite = (property) => {
    const isFav = favourites.some((p) => p.id === property.id);
    if (isFav) {
      removeFromFavourites(property.id);
    } else {
      addToFavourites(property);
    }
  };

  return (
    <section id="properties" className="results-section">
      <h2 className="results-title">Available Properties</h2>

      {filteredProperties.length === 0 ? (
        <p>No properties match your search criteria.</p>
      ) : (
        <div className="properties-grid">
          {filteredProperties.map((property) => {
            const isFav = favourites.some((p) => p.id === property.id);
            return (
              <div
                key={property.id}
                className="property-card"
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData("property", JSON.stringify(property));
                }}
              >
                <button
                  className={`fav-btn-overlay ${isFav ? "active" : ""}`}
                  onClick={() => toggleFavourite(property)}
                  title={isFav ? "Remove from favourites" : "Add to favourites"}
                >
                    {isFav ? <FaHeart color="red" /> : <FaRegHeart />}
                </button>
                <img
                  src={property.picture}
                  alt={property.type}
                  className="property-image"
                />

                <div className="property-content">
                  <h3 className="property-type">{property.type} • {property.bedrooms} Beds</h3>
                  <p className="property-location">{property.location}</p>
                  <p className="property-description">{property.description.substring(0, 120)}...</p>
                  <div className="property-footer">
                    <span className="property-price">£{property.price.toLocaleString()}</span>
                    <span className="property-tenure">{property.tenure}</span>
                  </div>
                  <Link
                    to={`/property/${property.id}`}
                    className="view-btn"
                  >
                    View Property
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Results;
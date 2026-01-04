import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import "./Results.css";
import propertiesData from "../assets/properties(1).json";

function Results({ addToFavourites }) {
  const { properties } = propertiesData;

  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const minBedrooms = searchParams.get("minBedrooms");
  const maxBedrooms = searchParams.get("maxBedrooms");
  const dateFrom = searchParams.get("dateFrom");
  const dateTo = searchParams.get("dateTo");
  const postcode = searchParams.get("postcode");

  const filteredProperties = properties.filter((property) => {
    // Type filter
    if (type && property.type.toLowerCase() !== type.toLowerCase()) return false;

    // Price filter
    if (minPrice && Number(property.price) < Number(minPrice)) return false;
    if (maxPrice && Number(property.price) > Number(maxPrice)) return false;

    // Bedrooms filter (min/max)
    if (minBedrooms && Number(property.bedrooms) < Number(minBedrooms)) return false;
    if (maxBedrooms && Number(property.bedrooms) > Number(maxBedrooms)) return false;

    // Date filter
    const propertyDate = new Date(
      property.added.year,
      property.added.month ? new Date(`${property.added.month} 1`).getMonth() : 0,
      property.added.day
    );

    if (dateFrom && propertyDate < new Date(dateFrom)) return false;
    if (dateTo && propertyDate > new Date(dateTo)) return false;

    // Postcode filter
    if (postcode && !property.location.toUpperCase().startsWith(postcode.toUpperCase())) return false;

    return true;
  });

  return (
    <section id="properties"
      className="results-section"
      onDragOver={(e) => e.preventDefault()}
    >
      <h2 className="results-title">Available Properties</h2>

      {filteredProperties.length === 0 ? (
        <div className="no-results">
          <h3>No results found</h3>
          <p>Try adjusting your search filters or explore all available properties.</p>
          <Link to="/properties" className="reset-btn">
            View All Properties
          </Link>
        </div>
      ) : (
        <div className="properties-grid">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="property-card"
              draggable
              onDragStart={() => {
                localStorage.setItem("draggedProperty", JSON.stringify(property));
              }}
            >
              <img src={property.picture} alt={property.type} className="property-image" />

              <div className="property-content">
                <h3 className="property-type">
                  {property.type} • {property.bedrooms} Beds
                </h3>

                <p className="property-location">{property.location}</p>

                <p className="property-description">
                  {property.description.substring(0, 120)}...
                </p>

                <div className="property-footer">
                  <span className="property-price">£{property.price.toLocaleString()}</span>
                  <span className="property-tenure">{property.tenure}</span>
                </div>

                <button
                  className="fav-btn"
                  onClick={() => addToFavourites(property)}
                >
                  ❤️ Add to Favourites
                </button>

                <Link to={`/property/${property.id}`} className="view-btn">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Results;
import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import "./Results.css";
import propertiesData from "../assets/properties(1).json";

function Results() {
  const { properties } = propertiesData;

  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const bedrooms = searchParams.get("bedrooms");
  const minBedrooms = searchParams.get("minBedrooms");
  const maxBedrooms = searchParams.get("maxBedrooms");
  const dateFrom = searchParams.get("dateFrom");
  const dateTo = searchParams.get("dateTo");
  const postcode = searchParams.get("postcode");

  const filteredProperties = properties.filter((property) => {
    if (type && property.type.toLowerCase() !== type.toLowerCase()) return false;

    if (minPrice && Number(property.price) < Number(minPrice)) return false;
    if (maxPrice && Number(property.price) > Number(maxPrice)) return false;

    if (bedrooms && Number(property.bedrooms) < Number(bedrooms)) return false;

    if (minBedrooms && maxBedrooms && Number(minBedrooms) === Number(maxBedrooms)) {
      if (Number(property.bedrooms) !== Number(minBedrooms)) return false;
    } else {
      if (minBedrooms && Number(property.bedrooms) < Number(minBedrooms)) return false;
      if (maxBedrooms && Number(property.bedrooms) > Number(maxBedrooms)) return false;
    }

    if (dateFrom && new Date(property.dateAdded) < new Date(dateFrom)) return false;
    if (dateTo && new Date(property.dateAdded) > new Date(dateTo)) return false;

    if (postcode && !property.postcode.startsWith(postcode)) return false;

    return true;
  });

  return (
    <section className="results-section">
      <h2 className="results-title">Available Properties</h2>

      {filteredProperties.length === 0 ? (
        <div className="no-results">
          <h3>No results found</h3>
          <p>
            Try adjusting your search filters or explore all available properties.
          </p>
          <Link to="/properties" className="reset-btn">
            View All Properties
          </Link>
        </div>
      ) : (
        <div className="properties-grid">
          {filteredProperties.map((property) => (
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
      )}
    </section>
  );
}

export default Results;
import React, { useState, useEffect } from "react";
import propertyData from "../assets/properties(1).json";
import "./SearchForm.css";

const SearchForm = ({ setSearchFilters }) => {
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [maxBedrooms, setMaxBedrooms] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [postcode, setPostcode] = useState("");
  const [postcodeOptions, setPostcodeOptions] = useState([]);

  const [priceOptions, setPriceOptions] = useState([]);

  // Calculate price options dynamically
  useEffect(() => {
    const prices = propertyData.properties.map(p => p.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);

    const options = [];
    for (let p = Math.floor(min / 50000) * 50000; p <= max + 50000; p += 50000) {
      options.push(p);
    }
    setPriceOptions(options);
  }, []);

  // Calculate unique postcode options dynamically
  useEffect(() => {
    // Extract postcode area from location, e.g., 'BR1' from 'Green Lane, Bromley BR1'
    const postcodeAreas = propertyData.properties
      .map((p) => {
        // Find postcode area at the end of the location string
        // Match uppercase letters/numbers at the end, e.g., BR1, SE10, BR2, etc.
        const match = p.location.match(/([A-Z]{1,2}\d{1,2}[A-Z]?)$/i);
        return match ? match[1].toUpperCase() : null;
      })
      .filter(Boolean);
    // Get unique postcode areas
    const uniqueAreas = Array.from(new Set(postcodeAreas));
    setPostcodeOptions(uniqueAreas);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = {
      type,
      minPrice,
      maxPrice,
      minBedrooms,
      maxBedrooms,
      dateFrom,
      dateTo,
      postcode
    };
    setSearchFilters(filters);
  };

  return (
    <div id="search" className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Property Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </div>

        <div className="input-group">
          <label>Price Range (£)</label>
          <div className="dual-inputs">
            <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
              <option value="">Min</option>
              {priceOptions.map((p) => (
                <option key={p} value={p}>£{p.toLocaleString()}</option>
              ))}
            </select>

            <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
              <option value="">Max</option>
              {priceOptions.map((p) => (
                <option key={p} value={p}>£{p.toLocaleString()}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="input-group">
          <label>Bedrooms</label>
          <div className="dual-inputs">
            <select value={minBedrooms} onChange={(e) => setMinBedrooms(e.target.value)}>
              <option value="">Min</option>
              <option value="1">1 Bed</option>
              <option value="2">2 Beds</option>
              <option value="3">3 Beds</option>
              <option value="4">4 Beds</option>
              <option value="5">5+ Beds</option>
            </select>

            <select value={maxBedrooms} onChange={(e) => setMaxBedrooms(e.target.value)}>
              <option value="">Max</option>
              <option value="1">1 Bed</option>
              <option value="2">2 Beds</option>
              <option value="3">3 Beds</option>
              <option value="4">4 Beds</option>
              <option value="5">5+ Beds</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <label>Date Added</label>
          <div className="dual-inputs">
            <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
            <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
          </div>
        </div>

        <div className="input-group">
          <label>Postcode Area</label>
          <select
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          >
            <option value="">Any</option>
            {postcodeOptions.map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="search-submit">
          Find Properties
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
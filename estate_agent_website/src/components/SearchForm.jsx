import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ setSearchFilters }) => {  // receive setter
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [maxBedrooms, setMaxBedrooms] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [postcode, setPostcode] = useState("");

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

    setSearchFilters(filters); // update filters instead of navigating
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
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Bedrooms</label>
          <div className="dual-inputs">
            <input
              type="number"
              placeholder="Min"
              value={minBedrooms}
              onChange={(e) => setMinBedrooms(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              value={maxBedrooms}
              onChange={(e) => setMaxBedrooms(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Date Added</label>
          <div className="dual-inputs">
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Postcode Area</label>
          <input
            type="text"
            placeholder="e.g. BR1, NW1"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value.toUpperCase())}
          />
        </div>

        <button type="submit" className="search-submit">
          Find Properties
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
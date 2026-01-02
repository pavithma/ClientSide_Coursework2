import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className="search-container">
      <form className="search-form">
        <div className="input-group">
          <label>Property Type</label>
          <select><option>Any</option><option>Apartment</option><option>House</option></select>
        </div>
        <div className="input-group">
          <label>Price Range (£)</label>
          <div className="dual-inputs">
            <input type="number" placeholder="Min" />
            <input type="number" placeholder="Max" />
          </div>
        </div>
        <div className="input-group">
          <label>Bedrooms</label>
          <div className="dual-inputs">
            <input type="number" placeholder="Min" />
            <input type="number" placeholder="Max" />
          </div>
        </div>
        <div className="input-group">
          <label>Postcode Area</label>
          <input type="text" placeholder="e.g. NW1" />
        </div>
        <button type="submit" className="search-submit">Find Properties</button>
      </form>
    </div>
  );
};

export default SearchForm;
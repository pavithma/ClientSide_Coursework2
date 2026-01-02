import React, { useState } from 'react';
import { Combobox, NumberPicker, DatePicker } from 'react-widgets';
import "react-widgets/styles.css";
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {
  // State to manage all 5+ mandatory search criteria [cite: 25-28]
  const [formData, setFormData] = useState({
    type: 'any',         // house, flat, any [cite: 25]
    minPrice: 0,        // [cite: 26]
    maxPrice: 1000000,
    minBedrooms: 0,     // [cite: 27]
    maxBedrooms: 10,
    dateAdded: null,    // [cite: 28]
    postcodeArea: ''    // e.g., NW1 [cite: 28]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData); // Passing criteria to parent for filtering [cite: 31, 39]
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-grid">
          
          {/* 1. Property Type [cite: 25] */}
          <div className="form-group">
            <label>Property Type</label>
            <Combobox 
              data={['any', 'house', 'flat']}
              value={formData.type}
              onChange={value => setFormData({...formData, type: value})}
            />
          </div>

          {/* 2. Price Range [cite: 26] */}
          <div className="form-group">
            <label>Min Price (£)</label>
            <NumberPicker 
              value={formData.minPrice}
              onChange={value => setFormData({...formData, minPrice: value})}
            />
          </div>

          <div className="form-group">
            <label>Max Price (£)</label>
            <NumberPicker 
              value={formData.maxPrice}
              onChange={value => setFormData({...formData, maxPrice: value})}
            />
          </div>

          {/* 3. Bedroom Range [cite: 27] */}
          <div className="form-group">
            <label>Min Bedrooms</label>
            <NumberPicker 
              value={formData.minBedrooms}
              onChange={value => setFormData({...formData, minBedrooms: value})}
            />
          </div>

          <div className="form-group">
            <label>Max Bedrooms</label>
            <NumberPicker 
              value={formData.maxBedrooms}
              onChange={value => setFormData({...formData, maxBedrooms: value})}
            />
          </div>

          {/* 4. Date Added [cite: 28] */}
          <div className="form-group">
            <label>Added After Date</label>
            <DatePicker 
              value={formData.dateAdded}
              onChange={value => setFormData({...formData, dateAdded: value})}
            />
          </div>

          {/* 5. Postcode Area [cite: 28] */}
          <div className="form-group">
            <label>Postcode Area</label>
            <input 
              className="rw-input custom-text-input"
              type="text" 
              placeholder="e.g. BR1, NW1"
              value={formData.postcodeArea}
              onChange={e => setFormData({...formData, postcodeArea: e.target.value})}
            />
          </div>

          <div className="form-group search-button-container">
            <button type="submit" className="search-btn">Find Properties</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
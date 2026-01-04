import React from "react";
import { Link } from "react-router-dom";
import "./Favourites.css";

function Favourites({ favourites, addToFavourites, removeFromFavourites, clearFavourites }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const data = localStorage.getItem("draggedProperty");
    if (data) {
      const property = JSON.parse(data);
      addToFavourites(property);
    }
  };

  return (
    <section id="favourites"
      className="favourites-section drop-zone"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2>Favourite Properties</h2>

      {favourites.length === 0 ? (
        <p>Drag the properties here or tap the heart to add it to the list.</p>
      ) : (
        <>
          <button className="clear-btn" onClick={clearFavourites}>
            Clear Favourites
          </button>

          <div className="favourites-grid">
            {favourites.map((property) => (
              <Link
                to={`/property/${property.id}`}
                key={property.id}
                className="fav-card"
                draggable
                onDragEnd={() => removeFromFavourites(property.id)}
              >
                <img src={property.picture} alt={property.type} />
                <h4>{property.type}</h4>
                <p>£{property.price.toLocaleString()}</p>

                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromFavourites(property.id);
                  }}
                >
                  Remove
                </button>
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Favourites;
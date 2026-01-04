import React from "react";
import "./Favourites.css";

function Favourites({ favourites, removeFromFavourites, clearFavourites }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const data = localStorage.getItem("draggedProperty");
    if (data) {
      const property = JSON.parse(data);
      if (!favourites.find((p) => p.id === property.id)) {
        favourites.push(property);
      }
    }
  };

  return (
    <section id="favourites"
      className="favourites-section"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2>⭐ Favourites</h2>

      {favourites.length === 0 ? (
        <p>Drag properties here or tap ❤️ to add</p>
      ) : (
        <>
          <button className="clear-btn" onClick={clearFavourites}>
            Clear Favourites
          </button>

          <div className="favourites-grid">
            {favourites.map((property) => (
              <div
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
                  onClick={() => removeFromFavourites(property.id)}
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Favourites;
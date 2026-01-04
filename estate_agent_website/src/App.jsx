import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import About from "./components/About";
import Footer from "./components/Footer";
import Property from "./components/Property";
import Favourites from "./components/Favourites";

function App() {
  const [favourites, setFavourites] = useState([]);
  const [searchFilters, setSearchFilters] = useState({}); // added to store search filters

  const addToFavourites = (property) => {
    setFavourites((prev) =>
      prev.find((p) => p.id === property.id) ? prev : [...prev, property]
    );
  };

  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.filter((p) => p.id !== id));
  };

  const clearFavourites = () => {
    setFavourites([]);
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <SearchForm setSearchFilters={setSearchFilters} />  {/* pass setter */}
              <Favourites
                favourites={favourites}
                removeFromFavourites={removeFromFavourites}
                clearFavourites={clearFavourites}
              />
              <Results addToFavourites={addToFavourites} favourites={favourites} filters={searchFilters} />
              <About />
            </>
          }
        />

        {/* Property details page */}
        <Route path="/property/:id" element={<Property />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
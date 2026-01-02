import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import About from "./components/About";
import Footer from "./components/Footer";
import Property from "./components/Property";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <SearchForm />
              <Results />
              <About />
            </>
          }
        />

        <Route path="/property/:id" element={<Property />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

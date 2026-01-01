import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import SearchForm from './components/SearchForm'
import Results from './components/Results'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Header />
  <Hero />
  <SearchForm />
  <Results />
  <Footer />
    </>
  )
}

export default App

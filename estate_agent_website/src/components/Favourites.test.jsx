import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Favourites from './Favourites'
import React, { useState } from 'react'

describe('Favourites Component', () => {
  const initialFavourites = [
    { id: 1, type: 'House', price: 250000, bedrooms: 3, picture: 'test.jpg' },
    { id: 2, type: 'Apartment', price: 150000, bedrooms: 2, picture: 'test2.jpg' },
  ]

  const Wrapper = () => {
    const [favourites, setFavourites] = useState(initialFavourites)
    const addToFavourites = (p) => setFavourites((prev) => [...prev, p])
    const removeFromFavourites = (id) => setFavourites((prev) => prev.filter(p => p.id !== id))
    const clearFavourites = () => setFavourites([])

    return (
      <BrowserRouter>
        <Favourites
          favourites={favourites}
          addToFavourites={addToFavourites}
          removeFromFavourites={removeFromFavourites}
          clearFavourites={clearFavourites}
        />
      </BrowserRouter>
    )
  }

  it('renders favourite properties', () => {
    render(<Wrapper />)
    expect(screen.getByText(/house/i)).toBeInTheDocument()
    expect(screen.getByText(/apartment/i)).toBeInTheDocument()
  })

  it('clears all favourites when clear button is clicked', () => {
    render(<Wrapper />)
    fireEvent.click(screen.getByText(/clear favourites/i))
    expect(screen.getByText(/drag the properties here/i)).toBeInTheDocument()
  })

  it('removes a single favourite', () => {
    render(<Wrapper />)
    const removeButtons = screen.getAllByText(/remove/i)
    fireEvent.click(removeButtons[0])
    expect(screen.queryByText(/house/i)).not.toBeInTheDocument()
  })
})
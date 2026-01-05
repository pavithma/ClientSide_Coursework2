import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Favourites from './Favourites'
import React, { useState } from 'react'

describe('Favourites Component', () => {

  it('clears favourites when Clear Favourites button is clicked', () => {
    const initialFavourites = [
      {
        id: 1,
        type: 'House',
        price: 250000,
        bedrooms: 3,
        picture: 'test.jpg',
      },
      {
        id: 2,
        type: 'Apartment',
        price: 150000,
        bedrooms: 2,
        picture: 'test2.jpg',
      },
    ]

    // Wrapper component to test state changes
    const Wrapper = () => {
      const [favourites, setFavourites] = useState(initialFavourites)

      const clearFavourites = () => setFavourites([])

      return (
        <BrowserRouter>
          <Favourites
            favourites={favourites}
            addToFavourites={() => {}}
            removeFromFavourites={() => {}}
            clearFavourites={clearFavourites}
          />
        </BrowserRouter>
      )
    }

    render(<Wrapper />)

    // Ensure initial favourites are rendered
    expect(screen.getByText(/house/i)).toBeInTheDocument()
    expect(screen.getByText(/apartment/i)).toBeInTheDocument()

    // Click the Clear Favourites button
    const clearButton = screen.getByText(/clear favourites/i)
    fireEvent.click(clearButton)

    // After clearing, the message should be visible
    expect(screen.getByText(/drag the properties here/i)).toBeInTheDocument()

    // Ensure property cards are removed
    expect(screen.queryByText(/house/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/apartment/i)).not.toBeInTheDocument()
  })

})
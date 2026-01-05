import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import SearchForm from './SearchForm'
import propertyData from "../assets/properties(1).json"

describe('SearchForm Component', () => {
  it('applies selected filters when Find Properties button is clicked', async () => {
    const mockSetSearchFilters = vi.fn()
    render(<SearchForm setSearchFilters={mockSetSearchFilters} />)

    fireEvent.change(screen.getByLabelText(/property type/i), { target: { value: 'House' } })
    const postcodeSelect = await screen.findByLabelText(/postcode area/i)
    fireEvent.change(postcodeSelect, { target: { value: 'BR1' } })
    fireEvent.click(screen.getByText(/find properties/i))

    expect(mockSetSearchFilters).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'House', postcode: 'BR1' })
    )
  })

  it('renders unique postcode options dynamically', async () => {
    render(<SearchForm setSearchFilters={() => {}} />)
    const postcodeSelect = await screen.findByLabelText(/postcode area/i)
    const uniqueAreas = Array.from(
      new Set(propertyData.properties.map(p => {
        const match = p.location.match(/([A-Z]{1,2}\d{1,2}[A-Z]?)$/i)
        return match ? match[1].toUpperCase() : null
      }).filter(Boolean))
    )
    uniqueAreas.forEach(area => {
      expect(screen.getByText(area)).toBeInTheDocument()
    })
  })

  it('submits with empty optional fields without error', async () => {
    const mockSetSearchFilters = vi.fn()
    render(<SearchForm setSearchFilters={mockSetSearchFilters} />)
    fireEvent.click(screen.getByText(/find properties/i))
    expect(mockSetSearchFilters).toHaveBeenCalledWith(
      expect.objectContaining({
        type: '',
        minPrice: '',
        maxPrice: '',
        minBedrooms: '',
        maxBedrooms: '',
        dateFrom: '',
        dateTo: '',
        postcode: ''
      })
    )
  })
})
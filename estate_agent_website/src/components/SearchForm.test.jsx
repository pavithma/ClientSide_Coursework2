it('applies selected filters when Find Properties button is clicked', () => {
  const mockSetSearchFilters = vi.fn()

  render(<SearchForm setSearchFilters={mockSetSearchFilters} />)

  // Select property type
  fireEvent.change(screen.getByLabelText(/property type/i), {
    target: { value: 'House' },
  })

  // Select min and max price
  fireEvent.change(screen.getByDisplayValue('Min'), {
    target: { value: '100000' },
  })

  fireEvent.change(screen.getByDisplayValue('Max'), {
    target: { value: '300000' },
  })

  // Select postcode
  fireEvent.change(screen.getByLabelText(/postcode area/i), {
    target: { value: 'BR1' },
  })

  // Click submit button
  fireEvent.click(screen.getByText(/find properties/i))

  // Expect filters to be passed correctly
  expect(mockSetSearchFilters).toHaveBeenCalledWith(
    expect.objectContaining({
      type: 'House',
      minPrice: '100000',
      maxPrice: '300000',
      postcode: 'BR1',
    })
  )
})
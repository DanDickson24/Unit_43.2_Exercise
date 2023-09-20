import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ColorsList from './ColorsList';

test('adds a new color', () => {
  render(<ColorsList />);
  const inputElement = screen.getByPlaceholderText('New Color');
  const addButton = screen.getByText('Add Color');

  // Simulate typing 'Purple' into the input field and clicking the 'Add Color' button
  userEvent.type(inputElement, 'Purple');
  userEvent.click(addButton);

  // Get all list items (colors) and assert the total count
  const colorElements = screen.getAllByRole('listitem');
  expect(colorElements).toHaveLength(4); 
});

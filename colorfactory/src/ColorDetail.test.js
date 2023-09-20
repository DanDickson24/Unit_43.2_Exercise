import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ColorsList from './ColorList';

test('adds a new color', () => {
  render(<ColorsList />);
  const inputElement = screen.getByPlaceholderText('New Color');
  const addButton = screen.getByText('Add Color');

  userEvent.type(inputElement, 'Purple');
  userEvent.click(addButton);

  const colorElements = screen.getAllByRole('listitem');
  expect(colorElements).toHaveLength(4);
});

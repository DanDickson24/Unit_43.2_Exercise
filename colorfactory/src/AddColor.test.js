import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import AddColorForm from './AddColor'; 

test('submits a new color', () => {
  const addColorMock = jest.fn();
  render(<AddColorForm addColor={addColorMock} />);
  const inputElement = screen.getByPlaceholderText('New Color');
  const addButton = screen.getByText('Add Color');

  fireEvent.change(inputElement, { target: { value: 'Purple' } });
  fireEvent.click(addButton);

  expect(addColorMock).toHaveBeenCalledWith('Purple');
});

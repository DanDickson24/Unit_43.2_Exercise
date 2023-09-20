import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Colors heading', () => {
  render(<App />);
  const colorsHeading = screen.getByRole('heading', { name: 'Colors' });
  expect(colorsHeading).toBeInTheDocument();
});

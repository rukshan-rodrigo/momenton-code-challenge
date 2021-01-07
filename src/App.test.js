import { render, screen } from '@testing-library/react'
import App from './App'

test('it should render title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Coding challenge for Momenton/i);
  expect(titleElement).toBeInTheDocument();
});



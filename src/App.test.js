import { render, screen } from '@testing-library/react';
import App from './App';

test('renders breakfast dish "bread" on the first screen by default', () => {
  render(<App />);
  const linkElement = screen.getByText(/A fresh handmade bread/);
  expect(linkElement).toBeInTheDocument();
});

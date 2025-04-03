import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tab1 content on the first screen by default', () => {
  render(<App />);
  const linkElement = screen.getByText(/Item One/);
  expect(linkElement).toBeInTheDocument();
});

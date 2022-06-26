import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EdBlog', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/EdBlog/i);
  expect(linkElement[0]).toBeInTheDocument();
});

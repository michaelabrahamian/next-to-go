import { render, screen } from '@testing-library/react';
import { App } from './App';

test('displays the correct static text', () => {
  render(<App />);

  const linkElement = screen.getByText(/it is currently/i);

  expect(linkElement).toBeInTheDocument();
});

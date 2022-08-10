import { screen, render } from './testUtils';
import { App } from './App';

test('displays the correct static text', () => {
  render(<App />);

  const linkElement = screen.getByText(/Races/i);

  expect(linkElement).toBeInTheDocument();
});

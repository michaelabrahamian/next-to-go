import { render, screen } from '@testing-library/react';
import { NextToGo } from './NextToGo';

describe('NextToGo', () => {
  test('should display the title', () => {
    render(<NextToGo />);

    expect(screen.getByText(/next to go/i)).toBeInTheDocument();
  });
});

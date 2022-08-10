import { render, screen } from '@testing-library/react';
import { RenderWithProviders } from './RenderWithProviders';

test('should display the children', () => {
  render(
    <RenderWithProviders>
      <p>Test child</p>
    </RenderWithProviders>
  );

  expect(screen.getByText('Test child')).toBeInTheDocument();
});

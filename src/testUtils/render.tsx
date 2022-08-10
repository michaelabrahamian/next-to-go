import { render as renderRTL } from '@testing-library/react';

import { RenderWithProviders } from '../components/RenderWithProviders/RenderWithProviders';

export const render = (component: JSX.Element) =>
  renderRTL(<RenderWithProviders>{component}</RenderWithProviders>);

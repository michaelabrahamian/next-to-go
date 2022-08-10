import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../query/queryClient';

type RenderWithProvidersProps = {
  children: JSX.Element;
};

export const RenderWithProviders = ({
  children,
}: RenderWithProvidersProps): JSX.Element => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

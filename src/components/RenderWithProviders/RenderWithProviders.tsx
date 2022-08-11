import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, createTheme } from '@mui/material';
import { queryClient } from '../../queries/queryClient';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

type RenderWithProvidersProps = {
  children: JSX.Element;
};

export const RenderWithProviders = ({
  children,
}: RenderWithProvidersProps): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
  </QueryClientProvider>
);

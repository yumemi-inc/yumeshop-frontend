import type { AppProps } from 'next/app';
import defaultChakraTheme from 'src/styles/Globals';
import {
  ChakraProvider,
  createStandaloneToast,
  extendTheme,
} from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const theme = extendTheme(defaultChakraTheme);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const { ToastContainer } = createStandaloneToast();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

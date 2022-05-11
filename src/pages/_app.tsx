import type { AppProps } from 'next/app';
import defaultChakraTheme from 'src/styles/Globals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme(defaultChakraTheme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

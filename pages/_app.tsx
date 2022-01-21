import type { AppProps } from 'next/app';
import { GlobalStyle } from '../style/Globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

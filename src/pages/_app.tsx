import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import globalStyle from 'src/styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

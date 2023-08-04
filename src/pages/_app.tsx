import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
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

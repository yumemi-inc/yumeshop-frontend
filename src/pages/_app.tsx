import type { AppProps } from 'next/app';
import { GlobalCss } from 'src/styles/GlobalCss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalCss />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

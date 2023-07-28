// .storybook/preview.js
import * as NextImage from 'next/image';
import GlobalStyle from '../src/styles/globals';

import { Global, css, ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

/* TODO: update import for your custom theme configurations */
// import { lightTheme, darkTheme } from '../path/to/themes';

/* TODO: replace with your own global styles, or remove */
const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
    `}
  />
);

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <OriginalNextImage {...props} unoptimized />;
  },
});

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ), // Adds global styles and theme switching support.
  withThemeFromJSXProvider({
    /* Uncomment for theme switching support */
    // themes: {
    //   light: lightTheme,
    //   dark: darkTheme,
    // }
    // defaultTheme: 'light',
    // Provider: ThemeProvider,
    GlobalStyles,
  }),
];

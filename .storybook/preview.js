// .storybook/preview.js
import * as NextImage from 'next/image';
import globalStyle from '../src/styles/globals';

import { Global } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

const GlobalStyles = () => <Global styles={globalStyle} />;
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
      <Story />
    </>
  ),
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];

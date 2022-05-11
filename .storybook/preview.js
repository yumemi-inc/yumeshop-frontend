// .storybook/preview.js
import * as NextImage from 'next/image';
import { extendTheme } from '@chakra-ui/react';
import defaultChakraTheme from '../src/styles/Globals';

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
];

const theme = extendTheme(defaultChakraTheme);
export const parameters = {
  chakra: {
    theme,
  },
};

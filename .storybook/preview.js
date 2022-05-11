// .storybook/preview.js
import * as NextImage from 'next/image';
import GlobalStyle from '../src/styles/Globals';
import { ChakraProvider } from '@chakra-ui/react';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <OriginalNextImage {...props} unoptimized />;
  },
});

export const decorators = [
  (Story) => (
    <ChakraProvider>
      <GlobalStyle />
      <Story />
    </ChakraProvider>
  ),
];

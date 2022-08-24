// .storybook/preview.js
import * as NextImage from 'next/image';
import { GlobalCss } from '../src/styles/GlobalCss';

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
      <GlobalCss />
      <Story />
    </>
  ),
];

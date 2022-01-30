// .storybook/preview.js
import * as NextImage from 'next/image';
import GlobalStyle from '../src/styles/Globals';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => {
    return (
      <GlobalStyle>
        <OriginalNextImage {...props} unoptimized />
      </GlobalStyle>
    );
  },
});

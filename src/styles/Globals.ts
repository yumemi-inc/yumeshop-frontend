import { fonts } from './Tokens';

const defaultChakraTheme = {
  styles: {
    global: {
      'html,body': {
        padding: 0,
        margin: 0,
        fontFamily: fonts.NotoSansJP,
        lineHeight: 1.5,
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      '*': {
        boxSizing: 'border-box',
      },
    },
  },
};

export default defaultChakraTheme;
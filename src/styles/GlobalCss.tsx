import { Global } from '@emotion/react';
import { FC } from 'react';
import { fonts } from './Tokens';

export const GlobalCss: FC = () => (
  <Global
    styles={{
      'html,body': {
        fontFamily: fonts.NotoSansJP,
        lineHeight: 1.5,
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      '*': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
      },
    }}
  />
);

import { css } from '@emotion/react';
import { fonts } from './tokens';
import 'ress';

export default css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${fonts.NotoSansJP};
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

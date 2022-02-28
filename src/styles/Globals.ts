import { createGlobalStyle } from 'styled-components';
import 'ress';

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans JP', sans-serif;
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

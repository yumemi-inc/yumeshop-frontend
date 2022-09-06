import { VFC } from 'react';
import styled from 'styled-components';
import { colors, breakPoints } from 'src/styles/Tokens';

const Wrapper = styled.footer`
  width: 100%;
  padding: 16px 0;
  font-size: 12px;
  background-color: ${colors.White};
  ul {
    justify-content: start;
    column-count: 3;
    display: flex;
    list-style: none;
  }
  li {
    padding-right: 4px;
    padding-left: 4px;
  }
  li + li {
    list-style: "|";
  }
  @media screen and (min-width: ${breakPoints.pcDisplaySize}) {
    li {
      padding-right: 8px;
      padding-left: 8px;
    }
  }
`;
  
const Copyright = styled.p`
  margin-top: 64px;
  text-align: center;
  @media screen and (min-width: ${breakPoints.pcDisplaySize}) {
    margin-top: 32px;
  }
`;

export const Footer: VFC = () => (
  <Wrapper>
    <ul>
      <li>メニューメニュー</li>
      <li>メニューメニュー</li>
      <li>メニュー</li>
    </ul>
    <ul>
      <li>メニューメニュー</li>
      <li>メニュー</li>
      <li>メニュー</li>
      <li>メニュー</li>
    </ul>
    <ul>
      <li>メニューメニュー</li>
      <li>メニューメニュー</li>
      <li>メニューメニュー</li>
    </ul>
    <Copyright>Copyright {new Date().getFullYear()} YumemiShop</Copyright>
  </Wrapper>
);

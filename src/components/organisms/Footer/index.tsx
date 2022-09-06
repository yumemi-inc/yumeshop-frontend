import { VFC } from 'react';
import styled from 'styled-components';
import { colors } from 'src/styles/Tokens';

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
  li + li {
    padding-left: 4px;
    &::before {
      padding-right: 4px;
      content: '|';
    }
  }
  @media screen and (min-width: 1152px) {
    li + li {
      padding-left: 4px;
      &::before {
        padding-right: 4px;
      }
    }
  }
`;
  
const Copyright = styled.p`
  margin-top: 64px;
  text-align: center;
  @media screen and (min-width: 1152px) {
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

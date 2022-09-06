import { VFC } from 'react';
import styled from 'styled-components';
import { colors } from 'src/styles/Tokens';

const Wrapper = styled.div`
  font-size: 12px;
  display: flex;
  span {
    display: block;
    padding: 0.2em 0.5em;
    color: #FFFFFF;
    margin: 0.2em;
  }
`;

export const Tags: VFC = () => (
  <Wrapper>
    <span style={{ backgroundColor: colors.Orange }} >新商品</span>
    <span style={{ backgroundColor: colors.Red }} >期間限定</span>
    <span style={{ backgroundColor: colors.YumeGreen }} >特別商品</span>
  </Wrapper>
);

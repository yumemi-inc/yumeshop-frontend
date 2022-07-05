import { FC } from 'react';
import styled from 'styled-components';
import { colors } from 'src/styles/Tokens';

const Wrapper = styled.footer`
  width: 100%;
  padding: 16px 0;
  font-size: 12px;
  background-color: ${colors.White};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer: FC = () => (
  <Wrapper>
    <p>Copyright {new Date().getFullYear()} YumemiShop</p>
  </Wrapper>
);

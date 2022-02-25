import { VFC } from 'react';
import styled from 'styled-components';
import { Logo } from 'src/components/atoms/Icons/logo';
import { colors } from 'src/styles/Tokens';
import Link from 'next/link';

const Wrapper = styled.header`
  width: 100%;
  padding: 8px 0;
  background-color: ${colors.White};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header: VFC = () => (
  <Wrapper>
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
  </Wrapper>
);
// import/prefer-default-export
export default Header;

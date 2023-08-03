import styled from '@emotion/styled';
import Link from 'next/link';
import { Logo } from 'src/components/Icons/Logo';
import { colors } from 'src/styles/tokens';

const Wrapper = styled.header`
  width: 100%;
  padding: 8px 0;
  background-color: ${colors.White};
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Header = (): JSX.Element => (
  <Wrapper>
    <Link href="/" passHref>
      <Logo />
    </Link>
  </Wrapper>
);

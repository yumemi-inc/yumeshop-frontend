import Link from 'next/link';
import { FC } from 'react';
import { Logo } from 'src/components/common/Icons/Logo';
import { colors, spacingSizes } from 'src/styles/Tokens';

export const Header: FC = () => (
  <header
    css={{
      zIndex: 1,
      width: '100%',
      paddingTop: spacingSizes.xs,
      paddingBottom: spacingSizes.xxs,
      background: colors.White,
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);',
    }}
  >
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
  </header>
);

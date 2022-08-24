import { VFC } from 'react';
import { Logo } from 'src/components/atoms/Icons/logo';
import Link from 'next/link';

export const Header: VFC = () => (
  <div>
    <Link href="/" passHref>
      <a href="replace">
        <Logo />
      </a>
    </Link>
  </div>
);

/* eslint-disable jsx-a11y/anchor-is-valid */

import { FC, ReactNode } from 'react';
import { colors } from 'src/styles/Tokens';
import { Footer } from './Footer';
import { Header } from './Header';

export type LayoutProps = {
  children: ReactNode[] | ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div
    css={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      gridTemplateColumns: '100%',
      minHeight: '100vh',
    }}
  >
    <Header />
    <main css={{ backgroundColor: colors.YumeWhiteGreen }}>{children}</main>
    <Footer />
  </div>
);

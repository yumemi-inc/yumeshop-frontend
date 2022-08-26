import { FC } from 'react';
import { fontSizes } from 'src/styles/Tokens';

export type SectionTitleProps = {
  children: string;
};

export const SectionTitle: FC<SectionTitleProps> = ({ children }) => (
  <h2
    css={{
      fontWeight: 700,
      fontSize: fontSizes.fontSize24,
      lineHeight: '35px',
    }}
  >
    {children}
  </h2>
);

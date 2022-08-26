import { SerializedStyles } from '@emotion/react';
import { FC } from 'react';
import { fontSizes } from 'src/styles/Tokens';

export type SectionTitleProps = {
  children: string;
  css?: SerializedStyles;
};

export const SectionTitle: FC<SectionTitleProps> = ({ children, css }) => (
  <h2
    css={{
      fontWeight: 700,
      fontSize: fontSizes.fontSize24,
      lineHeight: '35px',
      ...css,
    }}
  >
    {children}
  </h2>
);

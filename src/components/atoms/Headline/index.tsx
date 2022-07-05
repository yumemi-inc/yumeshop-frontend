import { FC } from 'react';

interface HeadlineProps {
  label: string;
  headlineTypes: 'small' | 'middle' | 'large';
}

export const Headline: FC<HeadlineProps> = ({ label, headlineTypes }) => (
  <>
    {headlineTypes === 'large' && <h1>{label}</h1>}
    {headlineTypes === 'middle' && <h2>{label}</h2>}
    {headlineTypes === 'small' && <h3>{label}</h3>}
  </>
);

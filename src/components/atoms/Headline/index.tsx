import { VFC } from 'react';

interface HeadlineProps {
  label: string;
  headlineTypes: 'small' | 'middle' | 'large';
}

export const Headline: VFC<HeadlineProps> = (props) => {
  const { label, headlineTypes } = props;

  return (
    <>
      {headlineTypes === 'large' && <h1>{label}</h1>}
      {headlineTypes === 'middle' && <h2>{label}</h2>}
      {headlineTypes === 'small' && <h3>{label}</h3>}
    </>
  );
};

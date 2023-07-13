interface HeadlineProps {
  label: string;
  headlineTypes: 'small' | 'middle' | 'large';
}

export const Headline = (props: HeadlineProps): JSX.Element => {
  const { label, headlineTypes } = props;

  return (
    <>
      {headlineTypes === 'large' && <h1>{label}</h1>}
      {headlineTypes === 'middle' && <h2>{label}</h2>}
      {headlineTypes === 'small' && <h3>{label}</h3>}
    </>
  );
};

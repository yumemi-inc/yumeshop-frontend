import React from 'react';

import type { Meta, Story } from '@storybook/react/types-6-0';
import { Headline } from './index';

export default {
  argTypes: {
    headlineTypes: {
      control: { type: 'radio' },
      options: ['small', 'middle', 'large'],
    },
  },
  component: Headline,
  title: 'atoms/Headline',
} as Meta;

type HeadlineProps = React.ComponentProps<typeof Headline>;

const Template: Story<HeadlineProps> = (args) => <Headline {...args} />;

export const Large = Template.bind({});
Large.args = {
  headlineTypes: 'large',
  label: 'Headline',
};

export const Middle = Template.bind({});
Middle.args = {
  headlineTypes: 'middle',
  label: 'Headline',
};

export const Small = Template.bind({});
Small.args = {
  headlineTypes: 'small',
  label: 'Headline',
};

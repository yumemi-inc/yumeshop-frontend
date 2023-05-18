import type { Meta, StoryObj } from '@storybook/react';
import { Headline } from './index';

const meta: Meta<typeof Headline> = {
  title: 'atoms/Headline',
  component: Headline,
  argTypes: {
    headlineTypes: {
      control: { type: 'radio' },
      options: ['small', 'middle', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Headline>;

export const Large: Story = {
  args: {
    headlineTypes: 'large',
    label: 'Headline',
  },
};

export const Middle = {
  args: {
    headlineTypes: 'middle',
    label: 'Headline',
  },
};

export const Small = {
  args: {
    headlineTypes: 'small',
    label: 'Headline',
  },
};

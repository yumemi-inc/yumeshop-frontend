import type { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { PicAndTextCard } from './index';

export default {
  component: PicAndTextCard,
  title: 'molecules/PicAndTextCard',
  argTypes: {},
} as Meta;

type PicAndTextCardProps = React.ComponentProps<typeof PicAndTextCard>;

const Template: Story<PicAndTextCardProps> = (args) => (
  <PicAndTextCard {...args} />
);

export const General = Template.bind({});
General.args = {
  key: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
  title: '文房具セール',
  thumbnailUrl: 'https://picsum.photos/300/200',
};

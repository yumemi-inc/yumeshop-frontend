import type { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { PicAndTextCard } from './index';

export default {
  component: PicAndTextCard,
  title: 'molecules/PicAndTextCard',
} as Meta;

type PicAndTextCardProps = React.ComponentProps<typeof PicAndTextCard>;

const Template: Story<PicAndTextCardProps> = (args) => (
  <PicAndTextCard {...args} />
);

export const General = Template.bind({});
General.args = {
  title: '文房具セール',
  thumbnailUrl: 'https://picsum.photos/300/200',
  width: '200px',
};

export const FitContent = Template.bind({});
FitContent.args = {
  title: '文房具セール',
  thumbnailUrl: 'https://picsum.photos/300/200',
  width: 'fit-content',
};

import type { Meta, Story } from '@storybook/react/types-6-0';
import { Carousel } from './Carousel';

export default {
  component: Carousel,
  title: 'common/Carousel',
} as Meta;

const Template: Story = (args) => (
  <Carousel {...args}>
    {[...Array(7)].map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={index} css={{ width: 300, height: 300, border: '1px solid' }} />
    ))}
  </Carousel>
);

export const withDotButton = Template.bind({});
withDotButton.args = {
  dotButton: true,
};

export const dragFree = Template.bind({});
dragFree.args = {
  options: {
    skipSnaps: true,
    dragFree: true,
  },
};

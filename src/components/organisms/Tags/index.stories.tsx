import type { Meta, Story } from '@storybook/react/types-6-0';
import { Tags } from './index';

export default {
  component: Tags,
  title: 'organisms/Tags',
} as Meta;

const Template: Story = () => <Tags />;

export const tags = Template.bind({});

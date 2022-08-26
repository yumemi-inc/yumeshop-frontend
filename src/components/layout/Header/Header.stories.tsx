import type { Meta, Story } from '@storybook/react/types-6-0';
import { Header } from './Header';

export default {
  component: Header,
  title: 'layout/Header',
} as Meta;

const Template: Story = () => <Header />;

export const header = Template.bind({});
